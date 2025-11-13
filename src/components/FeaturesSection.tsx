"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // ✅ Heroicons
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturesSection() {
  const [showMore, setShowMore] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <section id="features" className="py-15 bg-[#eff3fa]">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          {/* ---------- Image ---------- */}
          <div
            className="flex items-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <Image
              src="/images/pngind.png"
              alt="Byyizzy India Map"
              width={500}
              height={400}
              priority
              fetchPriority="high"
              className="rounded-xl mx-auto"
            />
          </div>

          {/* ---------- Text Content ---------- */}
          <div
            className="px-3 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3
              className="animate-letters text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-4 text-[#050d20] leading-snug sm:leading-normal"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Building India’s Most Trusted Industrial & Hardware Supply Network
            </h3>

            <p
              className="animate-letters text-base font-normal text-gray-500 mt-2 sm:mt-4 text-[#050d20]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Transforming the supply chain with AI-driven technology and local
              hardware stores for a lean and sustainable business model.
            </p>

            <hr className="border-gray-200 my-6" />

            {/* ---------- Feature 1 ---------- */}
            <div
              className="flex items-start gap-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* Icon Circle */}
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-[#067afe]/40 bg-[#067afe]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#067afe]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl text-[#050d20] font-semibold">
                  Integrated Industrial & Hardware Chain Network
                </h5>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showMore ? "max-h-[300px]" : "max-h-[30px]"
                  }`}
                >
                  <p className="text-base font-normal text-gray-500 mt-2">
                    TCO optimization through a seamlessly integrated B2B & B2C
                    business ecosystem
                    <br />
                    Connecting India’s fragmented hardware stores under one
                    trusted brand — <strong>Byyizzy</strong> — powered by
                    cutting-edge technology, procurement expertise, and a
                    hyper-local fulfillment model.
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#067afe] font-medium border border-[#067afe] hover:bg-[#067afe] hover:text-white transition-all duration-300"
                >
                  {showMore ? "Show Less" : "Learn More"}
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showMore ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ---------- Feature 2 ---------- */}
            <div
              className="flex items-start gap-5 mt-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {/* Icon Circle */}
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-[#067afe]/40 bg-[#067afe]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#067afe]"
                  >
                    <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
                    <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl text-[#050d20] font-semibold">
                  Optimize Procurement & Supply Chain
                </h5>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showSecond ? "max-h-[300px]" : "max-h-[30px]"
                  }`}
                >
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Digitize the Source-to-Pay process with full transparency,
                    improved cost control, and technology-driven tail-spend
                    optimization
                    <br />
                    Empowering Businesses with Smart, Sustainable Procurement and
                    SCM Solutions.
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowSecond(!showSecond)}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#067afe] font-medium border border-[#067afe] hover:bg-[#067afe] hover:text-white transition-all duration-300"
                >
                  {showSecond ? "Show Less" : "Learn More"}
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      showSecond ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
