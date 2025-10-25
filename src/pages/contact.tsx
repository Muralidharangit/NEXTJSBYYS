"use client";

import { useState, useEffect } from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Header />

      {/* 🌤 HERO SECTION */}
      <section
        className="self-stretch px-5 lg:px-20 pt-20 pb-20 flex flex-col justify-center items-center gap-2 overflow-hidden bg-[#eff3fa]"
        aria-labelledby="hero-title"
      >
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
                    CONTACT US
                  </a>
                </span>
              </span>
            </div>
          </span>
        </p>
        <div className="self-stretch flex flex-col justify-center items-center gap-2 mb-4 lg:mb-0">
          <h2
            data-aos="fade"
            id="hero-title"
            className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
          >
            CONTACT US
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
          >
            Let’s solve it together. Reach out and we’ll respond shortly.
          </p>
        </div>
      </section>

      {/* 🧭 CONTACT INFO CARDS */}
      <section className=" py-20 px-5 lg:px-20 text-center" data-aos="fade-up">
        {/* <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          <span className="bg-[#067afe] text-white px-4 py-1 rounded-full mb-5">
            Contact Info
          </span>
          <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
            Reach Out to Us
          </h2>
        </div> */}

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MapPinIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Our Location",
              lines: ["993 Renner Burg, West Rond,", "MT 94251-030"],
              aos: "fade-up",
            },
            {
              icon: <EnvelopeIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Email us",
              lines: ["support@bexon.com", "info@bexon.com"],
              aos: "fade-up",
            },
            {
              icon: <PhoneIcon className="w-10 h-10 text-[#067afe]" />,
              title: "Call us",
              lines: ["+1 (009) 544-7818", "+1 (009) 880-1810"],
              aos: "fade-up",
            },
            {
              icon: (
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-[#067afe]" />
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
              aos: "fade-up",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 150}
              className="bg-[#eff3fa] p-10 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-[#067afe]/10 p-6 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 📍 MAP + FORM SECTION */}
      <section
        className="relative mx-auto px-5 lg:px-20 py-20 bg-[#eff3fa] overflow-hidden"
        data-aos="fade-up"
      >
        {/* Animated Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#067afe]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#005fd9]/10 blur-3xl rounded-full -z-10 animate-pulse delay-300"></div>

        {/* Section Content */}
        <div className="container flex flex-col lg:flex-row items-start gap-10 lg:gap-20 relative z-10">
          {/* LEFT: Info + Map */}
          <div className="flex-1 space-y-10">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-[#111827] mb-4 leading-snug">
                Let’s Connect &{" "}
                <span className="text-[#067afe]">Collaborate</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you have a question, a project idea, or just want to say
                hi, our team is here to listen and respond. Let’s build
                something amazing together.
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-md"
            >
              <iframe
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2182048956074!2d106.72185077580569!3d10.794265058844698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ab40b36f07%3A0x70b70867c50b6b0c!2sNext.js%20Office!5e0!3m2!1sen!2sin!4v1683912458669!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className="flex-1 bg-white/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 shadow-[0_8px_40px_-10px_rgba(6,122,254,0.15)] transition-transform hover:scale-[1.02]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#111827]">
              Send a <span className="text-[#067afe]">Message</span>
            </h3>
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  placeholder="you@example.com"
                />
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#067afe] transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-full bg-[#067afe] text-white py-3 rounded-full font-semibold hover:bg-[#005fd9] hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form> */}
            <ContactForm/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
