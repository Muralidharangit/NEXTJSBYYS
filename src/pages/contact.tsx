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
        <meta name="description" content="Let’s solve it together. Reach out and we’ll respond shortly." />
      </Head>

      {/* 🌤 HERO SECTION */}
      <section
        className="self-stretch px-5 lg:px-20 pt-20 pb-20 flex flex-col justify-center items-center gap-2 overflow-hidden bg-[#eff3fa]"
        aria-labelledby="hero-title"
      >
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="bg-[#067afe] text-white px-4 py-1 rounded-full hover:opacity-90 transition">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="mx-2 text-[#067afe]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">Contact Us</li>
          </ol>
        </nav>

        <div className="self-stretch flex flex-col justify-center items-center gap-2">
          <h1
            id="hero-title"
            data-aos="fade"
            className="text-center text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto w-full"
          >
            CONTACT US
          </h1>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center text-base-grey text-lg leading-tight lg:leading-relaxed max-w-[750px]"
          >
            Let’s solve it together. Reach out and we’ll respond shortly.
          </p>
        </div>
      </section>

      {/* 🧭 CONTACT INFO CARDS */}
      <section className="py-20 px-5 lg:px-20 text-center" data-aos="fade-up">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MapPinIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Our Location",
              lines: ["993 Renner Burg, West Rond,", "MT 94251-030"],
            },
            {
              icon: <EnvelopeIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Email us",
              lines: ["support@bexon.com", "info@bexon.com"],
            },
            {
              icon: <PhoneIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Call us",
              lines: ["+1 (009) 544-7818", "+1 (009) 880-1810"],
            },
            {
              icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Live chat",
              lines: [
                "livechat@bexon.com",
                <span key="help" className="text-[#067afe] font-medium cursor-pointer hover:underline">
                  Need help?
                </span>,
              ],
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#eff3fa] p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-[#067afe]/10 p-6 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
              {item.lines.map((line, i) =>
                typeof line === "string" ? (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {line}
                  </p>
                ) : (
                  <div key={i} className="text-gray-600 leading-relaxed">
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
        className="relative mx-auto px-5 lg:px-20 py-20 bg-[#eff3fa] overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#067afe]/10 blur-3xl rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#005fd9]/10 blur-3xl rounded-full -z-10 animate-pulse delay-300" />

        <div className="container flex flex-col lg:flex-row items-start gap-10 lg:gap-20 relative z-10">
          {/* LEFT: Info + Map */}
          <div className="flex-1 space-y-10">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-[#111827] mb-4 leading-snug">
                Let’s Connect & <span className="text-[#067afe]">Collaborate</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you have a question, a project idea, or just want to say hi, our team is here to
                listen and respond. Let’s build something amazing together.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-md"
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
            className="flex-1 bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 shadow-[0_8px_40px_-10px_rgba(6,122,254,0.15)] transition-transform hover:scale-[1.02]"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#111827]">
              Send a <span className="text-[#067afe]">Message</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
