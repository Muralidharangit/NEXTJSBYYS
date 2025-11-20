// src/components/ContactForm.tsx
"use client";
import { useRef, useState } from "react";

type SubmitResult = { ok: boolean; title: string; body: string };
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// ✅ Keep only THIS phone regex (Indian 10-digit)
const phoneRegex = /^[6-9]\d{9}$/;
// Allow letters (incl. accents), spaces, dot, apostrophe, hyphen. Length 2–50
const nameRegex = /^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,49}$/u;

export default function ContactForm({ onDone }: { onDone?: (r: SubmitResult) => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

function validate(fields: { name: string; email: string; phone: string; message: string }): Errors {
  const e: Errors = {};
  if (!nameRegex.test(fields.name.trim())) {
    e.name = "Name can include letters, spaces, ., ' and - (2–50 chars).";
  }
  if (!emailRegex.test(fields.email.trim())) e.email = "Enter a valid email address.";
  if (!phoneRegex.test(fields.phone.trim())) {
    e.phone = "Enter a valid 10-digit Indian mobile number starting with 6–9.";
  }
  if (fields.message.trim().length < 5) e.message = "Message must be at least 5 characters.";
  return e;
}

function validateField(name: "name" | "email" | "phone" | "message", value: string) {
  if (name === "name") return nameRegex.test(value.trim()) ? "" : "Name can include letters, spaces, ., ' and - (2–50 chars).";
  if (name === "email") return emailRegex.test(value.trim()) ? "" : "Enter a valid email address.";
  if (name === "phone") return phoneRegex.test(value.trim()) ? "" : "Enter a valid 10-digit Indian mobile number starting with 6–9.";
  if (name === "message") return value.trim().length >= 5 ? "" : "Message must be at least 5 characters.";
  return "";
}
// handlers to wire on each input
function handleFieldInput(name: "name"|"email"|"phone"|"message", value: string) {
  // If there was an error and it's now valid, clear it
  const err = validateField(name, value);
  if (!err && errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
}

function handleFieldBlur(name: "name"|"email"|"phone"|"message", value: string) {
  const err = validateField(name, value);
  setErrors(prev => ({ ...prev, [name]: err || undefined }));
}
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const form = new FormData(e.currentTarget);
    if (String(form.get("hp") || "").trim().length > 0) return; // bot trap

    const fields = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };

    const v = validate(fields);
    setErrors(v);

    if (Object.keys(v).length > 0) {
      const firstKey = ["name", "email", "phone", "message"].find((k) => v[k as keyof Errors]);
      if (firstKey) (e.currentTarget.querySelector(`#${firstKey}`) as HTMLElement | null)?.focus();
      return;
    }

    setLoading(true);
    try {
      const payload = { hp: "", ...fields, page_url: typeof window !== "undefined" ? window.location.href : "" };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send message");

      formRef.current?.reset();
      setErrors({});
      onDone?.({ ok: true, title: "Message sent 🎉", body: "Thanks! We received your message and will contact you soon." });
    } catch (err) {
      onDone?.({
        ok: false,
        title: "Something went wrong",
        body: err instanceof Error ? err.message : "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  const baseInput = "w-full p-3 pl-4 border rounded-xl focus:outline-none focus:ring-2 transition";
  const ringOk = "focus:ring-[#067afe] border-gray-300";
  const ringErr = "focus:ring-red-500 border-red-500";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot (hidden) */}
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="relative" data-aos="fade-up" data-aos-delay="100">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
      <input
  id="name"
  name="name"
  autoComplete="name"
  autoCapitalize="words"
  inputMode="text"
  maxLength={50}
  placeholder="Your Name"
  // Optional HTML pattern (fallback; JS regex above is the source of truth)
  pattern="[A-Za-z][A-Za-z .'-]{1,49}"
  title="Name can include letters, spaces, ., ' and - (2–50 chars)."
  className={`${baseInput} ${errors.name ? ringErr : ringOk}`}
  aria-invalid={!!errors.name}
  aria-describedby={errors.name ? "name-error" : undefined}
  onInput={(e) => {
    const el = e.currentTarget;
    // Remove everything except letters, spaces, dot, apostrophe, hyphen
    // (Unicode-aware version below; pick ONE)
    // el.value = el.value.replace(/[^\p{L}\p{M} .'-]/gu, "");
    el.value = el.value.replace(/[^A-Za-z .'-]/g, ""); // ASCII-only fallback
    // collapse multiple spaces
    el.value = el.value.replace(/\s{2,}/g, " ");
    handleFieldInput("name", el.value);
  }}
  onBlur={(e) => handleFieldBlur("name", e.currentTarget.value)}
/>
        {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="200">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
       <input
  id="email"
  type="email"
  name="email"
  autoComplete="email"
  placeholder="you@example.com"
  className={`${baseInput} ${errors.email ? ringErr : ringOk}`}
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? "email-error" : undefined}
  onInput={(e) => handleFieldInput("email", e.currentTarget.value)}
  onBlur={(e) => handleFieldBlur("email", e.currentTarget.value)}
/>
        {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="250">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Mobile Number <span className="text-gray-400 font-normal">(10 digits)</span>
        </label>
        <input
  id="phone"
  type="tel"
  name="phone"
  placeholder="e.g. 9876543210"
  inputMode="numeric"
  autoComplete="tel-national"
  maxLength={10}
  pattern="^[6-9][0-9]{9}$"
  title="Enter a valid 10-digit Indian mobile number starting with 6–9."
  onInput={(e) => {
    const el = e.currentTarget;
    el.value = el.value.replace(/\D/g, "").slice(0, 10);
    handleFieldInput("phone", el.value);
  }}
  onBlur={(e) => handleFieldBlur("phone", e.currentTarget.value)}
  className={`${baseInput} ${errors.phone ? ringErr : ringOk}`}
  aria-invalid={!!errors.phone}
  aria-describedby={errors.phone ? "phone-error" : undefined}
  required
/>
        {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="300">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
       <textarea
  id="message"
  name="message"
  rows={3}
  placeholder="Write your message..."
  className={`${baseInput} ${errors.message ? ringErr : ringOk}`}
  aria-invalid={!!errors.message}
  aria-describedby={errors.message ? "message-error" : undefined}
  onInput={(e) => handleFieldInput("message", e.currentTarget.value)}
  onBlur={(e) => handleFieldBlur("message", e.currentTarget.value)}
/>
        {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit" disabled={loading} data-aos="fade-up" data-aos-delay={400}
        className="w-full bg-[#067afe] text-white py-3 rounded-full font-semibold hover:bg-[#005fd9] hover:shadow-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
