"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    // honeypot (bot trap)
    if (String(form.get("hp") || "").trim().length > 0) {
      return; // silently drop
    }

    setLoading(true);
    try {
      const payload = {
        hp: String(form.get("hp") || ""),
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        message: String(form.get("message") || ""),
        page_url: typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      alert("Thanks! We received your message and will contact you soon.");
      formRef.current?.reset();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot (hidden) */}
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="relative" data-aos="fade-up" data-aos-delay="100">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
          placeholder="Your Name"
        />
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="200">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
          placeholder="you@example.com"
        />
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="250">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Mobile Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"           
          placeholder="Enter Phone No."
          pattern="^[0-9+\-\s()]{7,}$"
          autoComplete="tel"
          className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
        />
      </div>

      <div className="relative" data-aos="fade-up" data-aos-delay="300">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          minLength={5}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        data-aos="fade-up"
        data-aos-delay="400"
        className="w-full bg-[#067afe] text-white py-3 rounded-full font-semibold hover:bg-[#005fd9] hover:shadow-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

