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
        <p className=" bg-[#067afe] px-4 py-1.5 rounded-full mb-4 lg:mb-0 inline-flex justify-center items-center gap-2">
          <span className="justify-center text-secondary-navy text-sm font-medium leading-normal">
            <div className="text-center space-y-2">
              <span
                data-ns-animate=""
                data-delay="0.1"
                className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <span className="bg-[#067afe] text-white px-4 py-1 rounded-full mb-5">
                  {/* Product Categories */}
                  <a
                    href="./index.html"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                  <span className="mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-middle"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <a
                    href="#"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    Contact us
                  </a>
                </span>
              </span>
            </div>
          </span>
        </p>
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
        className="py-12 sm:py-16 lg:py-20 bg-[#f8faff]"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-5">
            {[
              {
                icon: (
                  <MapPinIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Our Location",
                lines: [
                  "no:45, VANIDASAN STREET Saram(Py) Pondicherry Pondicherry India 605013",
                ],
              },
              {
                icon: (
                  <EnvelopeIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Email us",
                lines: ["Support@byyizzy.com", "Care@byyizzy.com"],
              },
              {
                icon: (
                  <PhoneIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Call us",
                lines: ["96989 03089", "88701 36317"],
              },
              {
                icon: (
                  <ChatBubbleLeftRightIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
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
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="bg-[#067afe]/10 p-5 sm:p-6 rounded-full flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-1">
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
              </div>
            ))}
          </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.533989022593!2d79.81105377587788!3d11.937484936704328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53617bec6fc11b%3A0xeadcf892be11fbef!2sVanidasan%20St%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1761915257107!5m2!1sen!2sin"
                title="Map to our office"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
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
                if (ok)
                  setTimeout(
                    () => setModal((m) => ({ ...m, open: false })),
                    3000
                  );
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
