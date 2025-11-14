// src/components/EnquiryDialog.tsx
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
  productName?: string;
  productCode?: string;
};

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z.\-\s]{1,}$/;

function getField(form: HTMLFormElement, name: string): HTMLInputElement | HTMLTextAreaElement {
  return form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
}
function setFieldError(field: HTMLInputElement | HTMLTextAreaElement, message?: string) {
  field.setCustomValidity(message ?? "");
}

function validate(form: HTMLFormElement): { ok: boolean; values?: Record<string, string> } {
  const nameEl = getField(form, "name");
  const emailEl = getField(form, "email");
  const phoneEl = getField(form, "phone");
  const msgEl = getField(form, "message");
  const agreeEl = getField(form, "agree") as HTMLInputElement | null;
  const materialNameEl = getField(form, "material_name");

  [nameEl, emailEl, phoneEl, msgEl, materialNameEl].forEach((el) => setFieldError(el));

  const material_name = (materialNameEl?.value ?? "").trim();
  const name = (nameEl?.value ?? "").trim();
  const email = (emailEl?.value ?? "").trim();
  const phoneRaw = (phoneEl?.value ?? "").trim();
  const message = (msgEl?.value ?? "").trim();

  if (!material_name) {
    setFieldError(materialNameEl, "Material name is required.");
    materialNameEl.reportValidity();
    return { ok: false };
  }
  if (!name || name.replace(/\s+/g, "").length < 2 || !NAME_REGEX.test(name)) {
    setFieldError(nameEl, "Please enter your full name (letters, spaces, . or -).");
    nameEl.reportValidity();
    return { ok: false };
  }
  if (!EMAIL_REGEX.test(email)) {
    setFieldError(emailEl, "Please enter a valid email address like name@example.com");
    emailEl.reportValidity();
    return { ok: false };
  }
  const digits = phoneRaw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    setFieldError(phoneEl, "Enter a valid phone number (10–15 digits).");
    phoneEl.reportValidity();
    return { ok: false };
  }
  if (!/^[0-9+\-\s()]+$/.test(phoneRaw)) {
    setFieldError(phoneEl, "Only digits, +, -, spaces and () allowed.");
    phoneEl.reportValidity();
    return { ok: false };
  }
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

  // Enforce agree only if the field exists
  if (agreeEl) {
    if (!agreeEl.checked) {
      agreeEl.setCustomValidity("You must agree to continue.");
      agreeEl.reportValidity();
      agreeEl.addEventListener("input", () => agreeEl.setCustomValidity(""), { once: true });
      return { ok: false };
    } else {
      agreeEl.setCustomValidity("");
    }
  }

  const hp = (getField(form, "hp")?.value ?? "").trim();
  const material_code = (getField(form, "material_code")?.value ?? "").trim();

  return {
    ok: true,
    values: { hp, material_code, material_name, name, email, phone: phoneRaw, message },
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

  // ✅ NEW: result state instead of alert()
  const [result, setResult] = React.useState<{ ok: boolean; title: string; body: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const v = validate(form);
    if (!v.ok) return;

    setLoading(true);
    try {
      const payload = {
        hp: v.values!.hp,
        material_code: v.values!.material_code,
        material_name: v.values!.material_name,
        name: v.values!.name,
        email: v.values!.email,
        phone: v.values!.phone,
        message: v.values!.message,
        page_url: typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to submit enquiry");

      // ❌ alert("Enquiry submitted!")
      // ✅ Show success view
      setResult({
        ok: true,
        title: "Enquiry submitted 🎉",
        body: "Thanks! We received your enquiry and will get back to you shortly.",
      });
      formRef.current?.reset();
    } catch (err) {
      // ❌ alert(message)
      // ✅ Show error view
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setResult({ ok: false, title: "Submission failed", body: message });
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
        {/* If we have a result, render the result panel; else show the form */}
        {result ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${
                    result.ok
                      ? "bg-green-50 text-green-600 ring-green-100"
                      : "bg-red-50 text-red-600 ring-red-100"
                  }`}
                >
                  <span className="text-xl">{result.ok ? "✅" : "⚠️"}</span>
                </span>
                <h3 className="font-semibold text-gray-900 mb-0">{result.title}</h3>
              </div>
              <DialogDescription className="pt-2 text-gray-600 text-center">
                {result.body}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="button"
                className={result.ok ? "bg-green-600 text-white" : "bg-red-600 text-white"}
                onClick={() => {
                  setResult(null);      // clear result
                  onOpenChange(false);  // close dialog
                }}
              >
                Close
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogDescription>Fill the form and we’ll get back to you.</DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Hidden fields if needed */}
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
                  autoCapitalize="words"
                  inputMode="text"
                  maxLength={50}
                  pattern="[A-Za-z][A-Za-z.\-\s]{1,}"
                  title="Please enter your full name (letters, spaces, . or -)"
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.value = el.value.replace(/[^A-Za-z .'-]/g, "").replace(/\s{2,}/g, " ");
                    el.setCustomValidity("");
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.replace(/\s+/g, "").length < 2) {
                      e.currentTarget.setCustomValidity("Please enter at least 2 letters.");
                    } else {
                      e.currentTarget.setCustomValidity("");
                    }
                  }}
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
                  onInput={(e) => (e.currentTarget as HTMLInputElement).setCustomValidity("")}
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
                  maxLength={20}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.value = el.value.replace(/[^0-9+\-\s()]/g, "");
                    const digits = el.value.replace(/\D/g, "");
                    if (digits.length < 10 || digits.length > 15) {
                      el.setCustomValidity("Enter a valid phone number (10–15 digits).");
                    } else {
                      el.setCustomValidity("");
                    }
                  }}
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
