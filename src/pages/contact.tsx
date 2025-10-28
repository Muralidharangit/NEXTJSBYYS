// src/pages/contact.tsx
import Head from "next/head";
import Link from "next/link";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                icon: (
                  <MapPinIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Our Location",
                lines: ["993 Renner Burg, West Rond,", "MT 94251-030"],
              },
              {
                icon: (
                  <EnvelopeIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Email us",
                lines: ["support@bexon.com", "info@bexon.com"],
              },
              {
                icon: (
                  <PhoneIcon className="w-8 h-8 sm:w-9 sm:h-9 text-[#067afe]" />
                ),
                title: "Call us",
                lines: ["+1 (009) 544-7818", "+1 (009) 880-1810"],
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
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
