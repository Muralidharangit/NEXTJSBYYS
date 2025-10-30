"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, type ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { CiSettings } from "react-icons/ci";
import { TbFileInvoice, TbPackages, TbTools } from "react-icons/tb";

import LetterAnimation from "@/components/LetterAnimation";
import Loader from "@/components/Loader";
import ClientsSection from "@/components/ClientsSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function ClientServicePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <LetterAnimation />

      <section
        className="bg-[#eff3fa] py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-20 flex flex-col justify-center items-center text-center"
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
                    Service
                  </a>
                </span>
              </span>
            </div>
          </span>
        </p>

        {/* Title */}
        <h2
          id="hero-title"
          data-aos="fade"
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#050d20] leading-snug mb-4"
        >
          SERVICE
        </h2>

        {/* Subtitle */}
        <p
          data-aos="fade"
          data-aos-delay={300}
          className="max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          Explore aggregation, hardware, procurement, and manufacturing
          solutions tailored for you.
        </p>
      </section>

      {/* Product Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-5 sm:px-8">
          {/* Heading */}
          <div
            className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            {/* <span className="bg-[#067afe] text-white px-4 py-1 rounded-full text-sm sm:text-base">
              Product Categories
            </span> */}
            <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-[#050d20]">
              Our Innovative Products
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceCard
              href="/services/IndustrialProductsAggregation"
              icon={<TbPackages className="h-8 w-8" />}
              title="Industrial Products Aggregation"
              description="Streamline your procurement. Create value. Generate savings from tail-spend."
            />

            <ServiceCard
              href="/services/HardwareStoreChain"
              icon={<TbTools className="h-8 w-8" />}
              title="Hardware Store Chain"
              description="Building India’s First Integrated Industrial and Hardware Network for B2B and B2C."
            />

            <ServiceCard
              href="/services/paas"
              icon={<TbFileInvoice className="h-8 w-8" />}
              title="Procurement as a Service (PaaS)"
              description="Automate your Source-to-Pay process — for just *1.5% of your spend."
            />

            <ServiceCard
              href="/services/maas"
              icon={<CiSettings className="h-8 w-8" />}
              title="Manufacturing as a Service (MaaS)"
              description="Streamline your customized and non-standard spare parts supply chain."
            />
          </div>
        </div>
      </section>

      {/* Clients & CTA */}
      <ClientsSection />
      <CallToActionSection />

      {/* Scripts (ok in client component if they need window) */}
      <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
    </div>
  );
}

/* === Reusable Service Card Component === */
function ServiceCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode; // ✅ no JSX namespace issue
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block">
      <div
        className="bg-white border border-[#eff3fa] rounded-2xl p-6 sm:p-8 lg:p-10 hover:bg-[#eff3fa] transition duration-300 ease-in-out shadow-sm"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center mb-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow">
            {icon}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
          {description}
        </p>
        <div className="text-center">
          <span className="text-[#067afe] text-sm font-medium uppercase hover:underline inline-flex items-center gap-1">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <path
                stroke="#067afe"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}