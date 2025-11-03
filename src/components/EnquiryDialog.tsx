"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type EnquiryDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  productName?: string; // prefill
  productCode?: string; // prefill
};

// Email: RFC-lite, practical
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
// Name: letters, spaces, dots, hyphens, min 2 visible chars
const NAME_REGEX = /^[A-Za-z][A-Za-z.\-\s]{1,}$/;

// Helpers to read & validate fields
function getField(form: HTMLFormElement, name: string): HTMLInputElement | HTMLTextAreaElement {
  return form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
}
function setFieldError(
  field: HTMLInputElement | HTMLTextAreaElement,
  message?: string
) {
  field.setCustomValidity(message ?? "");
}

function validate(form: HTMLFormElement): { ok: boolean; values?: Record<string, string> } {
  const nameEl = getField(form, "name");
  const emailEl = getField(form, "email");
  const phoneEl = getField(form, "phone");
  const msgEl = getField(form, "message");
  const agreeEl = getField(form, "agree") as HTMLInputElement;
  const materialNameEl = getField(form, "material_name");

  // Clear previous errors
  [nameEl, emailEl, phoneEl, msgEl, materialNameEl].forEach((el) => setFieldError(el));

  // Values (trimmed)
  const material_name = (materialNameEl?.value ?? "").trim();
  const name = (nameEl?.value ?? "").trim();
  const email = (emailEl?.value ?? "").trim();
  const phoneRaw = (phoneEl?.value ?? "").trim();
  const message = (msgEl?.value ?? "").trim();
  const agree = agreeEl?.checked ?? false;

  // 1) Material name (readonly but ensure present)
  if (!material_name) {
    setFieldError(materialNameEl, "Material name is required.");
    materialNameEl.reportValidity();
    return { ok: false };
  }

  // 2) Name
  if (!name || name.replace(/\s+/g, "").length < 2 || !NAME_REGEX.test(name)) {
    setFieldError(nameEl, "Please enter your full name (letters, spaces, . or -).");
    nameEl.reportValidity();
    return { ok: false };
  }

  // 3) Email
  if (!EMAIL_REGEX.test(email)) {
    setFieldError(emailEl, "Please enter a valid email address like name@example.com");
    emailEl.reportValidity();
    return { ok: false };
  }

  // 4) Phone — allow +, spaces, (), -, but require 10–15 digits total
  const digits = phoneRaw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    setFieldError(phoneEl, "Enter a valid phone number (10–15 digits).");
    phoneEl.reportValidity();
    return { ok: false };
  }
  // Optional format guard (keeps UX flexible)
  if (!/^[0-9+\-\s()]+$/.test(phoneRaw)) {
    setFieldError(phoneEl, "Only digits, +, -, spaces and () allowed.");
    phoneEl.reportValidity();
    return { ok: false };
  }

  // 5) Message
  if (message.length < 10) {
    setFieldError(msgEl, "Please add a few more details (min 10 characters).");
    msgEl.reportValidity();
    return { ok: false };
  }
  if (message.length > 1000) {
    setFieldError(msgEl, "Message is too long (max 1000 characters).");
    msgEl.reportValidity();
    return { ok: false };
  }

  // 6) Agree
  if (!agree) {
    // This will show a bubble near the checkbox
    agreeEl.setCustomValidity("You must agree to continue.");
    agreeEl.reportValidity();
    // Clear after showing so future changes revalidate correctly
    agreeEl.addEventListener(
      "input",
      () => agreeEl.setCustomValidity(""),
      { once: true }
    );
    return { ok: false };
  } else {
    agreeEl.setCustomValidity("");
  }

  const hp = (getField(form, "hp")?.value ?? "").trim();
  const material_code = (getField(form, "material_code")?.value ?? "").trim();

  return {
    ok: true,
    values: {
      hp,
      material_code,
      material_name,
      name,
      email,
      phone: phoneRaw,
      message,
    },
  };
}

export default function EnquiryDialog({
  open,
  onOpenChange,
  productName = "",
  productCode = "",
}: EnquiryDialogProps) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const result = validate(form);
    if (!result.ok) return;

    setLoading(true);
    try {
      const payload = {
        hp: result.values!.hp,
        material_code: result.values!.material_code,
        material_name: result.values!.material_name,
        name: result.values!.name,
        email: result.values!.email,
        phone: result.values!.phone,
        message: result.values!.message,
        page_url: typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to submit enquiry");

      alert("Enquiry submitted!");
      onOpenChange(false);
      formRef.current?.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  }

  const defaultMessage =
    productName || productCode
      ? `Hi, I’m interested in ${productName}. Please share a quote.`
      : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogDescription>Fill the form and we’ll get back to you.</DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Hidden fields (post if needed) */}
          {/* <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" /> */}
          {/* <input type="text" name="material_code" tabIndex={-1} autoComplete="off" className="hidden" defaultValue={productCode} /> */}

          <div className="grid gap-2">
            <Label htmlFor="material_name">Material Name</Label>
            <Input id="material_name" name="material_name" defaultValue={productName} readOnly />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="User Name"
              required
              pattern="[A-Za-z][A-Za-z.\-\s]{1,}" // keeps native validity in sync
              onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
              title="Please enter a valid email address like name@example.com"
              onInvalid={(e) =>
                (e.currentTarget as HTMLInputElement).setCustomValidity(
                  "Please enter a valid email address like name@example.com"
                )
              }
              onInput={(e) =>
                (e.currentTarget as HTMLInputElement).setCustomValidity("")
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              inputMode="tel"
              placeholder="+91 9XXXXXXXXX"
              required
              pattern="^[0-9+\-\s()]{10,}$"
              title="Enter a valid phone number (10–15 digits; digits, +, -, spaces, () allowed)"
              onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={defaultMessage}
              placeholder="Tell us what you need…"
              required
              minLength={10}
              maxLength={1000}
              onInput={(e) => (e.currentTarget as HTMLTextAreaElement).setCustomValidity("")}
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              className="mt-1 h-4 w-4"
              required
              onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
            />
            <Label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="underline">
                terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>
              .
            </Label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
              className="bg-[#f94444] text-gray-100"
            >
              Close
            </Button>
            <Button type="submit" className="bg-[#067afd] text-gray-100" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
