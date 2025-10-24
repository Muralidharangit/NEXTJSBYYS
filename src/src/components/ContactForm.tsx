"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const form = new FormData(e.currentTarget);

      const payload = {
        hp: String(form.get("hp") || ""),           // honeypot
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        message: String(form.get("message") || ""),
        page_url: window.location.href,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // ✅ send JSON
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send message");

      alert("Thanks! We received your message and will contact you soon.");
      formRef.current?.reset();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (

    <>
     
     <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
       {/* Honeypot */}
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                 
                  className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                 
                  className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  placeholder="you@example.com"
                />
              </div>
               <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone No."
                  pattern="^[0-9+\\-\\s()]{7,}$"
               
                  className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  
                />
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={2}
           
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-full bg-[#067afe] text-white py-3 rounded-full font-semibold hover:bg-[#005fd9] hover:shadow-lg transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
    </>
  
  );
}
