// src/pages/contact.tsx  (your file)
import Head from "next/head";
import Link from "next/link";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function ModalPortal({
  open,
  title,
  body,
  onClose,
}: {
  open: boolean;
  title: string;
  body: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.documentElement.classList.toggle("overflow-hidden", open);
    document.body.classList.toggle("overflow-hidden", open);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ✕
        </button>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
          <span className="text-2xl">✅</span>
        </div>
        <h3 id="contact-modal-title" className="mb-2 text-center text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mb-6 text-center text-gray-600">{body}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="rounded-full bg-[#067afe] px-5 py-2.5 font-semibold text-white hover:bg-[#005fd9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#067afe]"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ContactPage() {
  const [modal, setModal] = useState<{ open: boolean; title: string; body: string }>({
    open: false,
    title: "",
    body: "",
  });
  return (
    <>
      <Head>
        <title>Contact Us — My App</title>
        <meta
          name="description"
          content="Let’s solve it together. Reach out and we’ll respond shortly."
        />
      </Head>

      {/* 🌤 HERO SECTION */}
      <section
        className="self-stretch px-5 md:px-10 lg:px-20 pt-20 pb-16 flex flex-col justify-center items-center gap-4 bg-[#eff3fa]"
        aria-labelledby="hero-title"
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-xs sm:text-sm">
            <li>
              <Link
                href="/"
                className="bg-[#067afe] text-white px-3 sm:px-4 py-1 rounded-full hover:opacity-90 transition"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-2 text-[#067afe]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">Contact Us</li>
          </ol>
        </nav>

        {/* Title + Subtitle */}
        <div className="text-center space-y-3 max-w-3xl">
          <h2
            id="hero-title"
            data-aos="fade"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-[#111827] leading-tight"
          >
            CONTACT US
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Let’s solve it together. Reach out and we’ll respond shortly.
          </p>
        </div>
      </section>

      {/* 🧭 CONTACT INFO CARDS */}
      <section
        className="py-16 px-5 md:px-10 lg:px-20 text-center"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <MapPinIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#067afe]" />
              ),
              title: "Our Location",
              lines: ["993 Renner Burg, West Rond,", "MT 94251-030"],
            },
            {
              icon: (
                <EnvelopeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#067afe]" />
              ),
              title: "Email us",
              lines: ["support@bexon.com", "info@bexon.com"],
            },
            {
              icon: (
                <PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#067afe]" />
              ),
              title: "Call us",
              lines: ["+1 (009) 544-7818", "+1 (009) 880-1810"],
            },
            {
              icon: (
                <ChatBubbleLeftRightIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#067afe]" />
              ),
              title: "Live chat",
              lines: [
                "livechat@bexon.com",
                <span
                  key="help"
                  className="text-[#067afe] font-medium cursor-pointer hover:underline"
                >
                  Need help?
                </span>,
              ],
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#eff3fa] p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-[#067afe]/10 p-5 sm:p-6 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.lines.map((line, i) =>
                typeof line === "string" ? (
                  <p
                    key={i}
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  >
                    {line}
                  </p>
                ) : (
                  <div
                    key={i}
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  >
                    {line}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 📍 MAP + FORM SECTION */}
      <section
        className="relative mx-auto px-5 md:px-10 lg:px-20 py-16 lg:py-20 bg-[#eff3fa] overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-[#067afe]/10 blur-3xl rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#005fd9]/10 blur-3xl rounded-full -z-10 animate-pulse delay-300" />

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 relative z-10">
          {/* LEFT: Info + Map */}
          <div className="flex-1 w-full space-y-8">
            <div data-aos="fade-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-snug">
                Let’s Connect &{" "}
                <span className="text-[#067afe]">Collaborate</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you have a question, a project idea, or just want to say
                hi, our team is here to listen and respond. Let’s build
                something amazing together.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-md"
            >
              <iframe
                title="Map to our office"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2182048956074!2d106.72185077580569!3d10.794265058844698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ab40b36f07%3A0x70b70867c50b6b0c!2sNext.js%20Office!5e0!3m2!1sen!2sin!4v1683912458669!5m2!1sen!2sin"
              />
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className="w-full lg:flex-1 bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/30 shadow-[0_8px_40px_-10px_rgba(6,122,254,0.15)] transition-transform hover:scale-[1.02]"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#111827]">
              Send a <span className="text-[#067afe]">Message</span>
            </h3>
            {/* <ContactForm /> */}
              <ContactForm
            onDone={({ ok, title, body }) => {
              setModal({ open: true, title, body });
              // Optional auto-close
              if (ok) setTimeout(() => setModal((m) => ({ ...m, open: false })), 3000);
            }}
          />
          </div>
        </div>
      </section>

      {/* Page-level modal (outside the form card) */}
      <ModalPortal
        open={modal.open}
        title={modal.title}
        body={modal.body}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </>
  );
}
