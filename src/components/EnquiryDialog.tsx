"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { log } from "console";
import Link from "next/link";

type EnquiryDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  productName?: string; // prefill
  productCode?: string; // prefill
};

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
  setLoading(true);

  try {
    const f = new FormData(e.currentTarget);

    // client-side check
    if (f.get("agree") !== "on") {
      alert("Please agree to the terms & policy.");
      setLoading(false);
      return;
    }

    const payload = {
      hp: String(f.get("hp") || ""),
      material_code: String(f.get("material_code") || ""),
      material_name: String(f.get("material_name") || ""),
      name: String(f.get("name") || ""),
      email: String(f.get("email") || ""),
      phone: String(f.get("phone") || ""),
      message: String(f.get("message") || ""),
      page_url: window.location.href,
    };

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // ✅ send JSON
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to submit enquiry");

    alert("Enquiry submitted!");
    onOpenChange(false);
    formRef.current?.reset();
  } catch (err) {
  const message =
    err instanceof Error ? err.message : "Something went wrong. Please try again.";
  alert(message);
} finally {
  setLoading(false);
}
}
  const defaultMessage =
    productName || productCode
      ? `Hi, I’m interested in ${productName} (${productCode}). Please share a quote.`
      : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          {/* <DialogTitle>Request a Quote</DialogTitle> */}
          <DialogDescription>Fill the form and we’ll get back to you.</DialogDescription>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Material details (readonly) */}
          <div className="grid gap-2">
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />
            <Label htmlFor="material_code">Material Code</Label>
            <Input id="material_code" name="material_code" defaultValue={productCode} readOnly />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="material_name">Material Name</Label>
            <Input id="material_name" name="material_name" defaultValue={productName} readOnly />
          </div>

          {/* User fields */}
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="User Name" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              inputMode="tel"
              placeholder="+91 9XXXXXXXXX"
              pattern="^[0-9+\-\s()]{7,}$"
              title="Enter a valid phone number"
              required
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
            />
          </div>

          {/* Agree checkbox */}
          <div className="flex items-start gap-2">
            <input id="agree" name="agree" type="checkbox" className="mt-1 h-4 w-4" required />
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
              {" "}
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
