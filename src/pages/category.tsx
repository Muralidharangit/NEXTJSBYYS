import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import LetterAnimation from "@/components/LetterAnimation";

import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/Loader";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";
import { useEffect, useState } from "react";
import Image from "next/image";



export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Static site with custom fonts",
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {/* <Header /> */}
      <LetterAnimation />

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
                    CATEGORY
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
            CATEGORY
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
          >
            Explore products and services grouped for your needs.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className=" mx-auto py-16 px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          {/* <span className="bg-[#067afe] text-white px-4 py-1 rounded-full mb-5">
            Product Categories
          </span> */}
          <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
            Product Categories
          </span>

          <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
            Our Innovative Products
          </h2>
        </div>

        {/* Category Grid */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SHOP_BY_CATEGORIES.map((category, index) => {
            const slug = slugify(category.title);
            return (
              <>
                <Link href={`/shop/${slug}?sub=all`}>
                  <div key={category.id} data-aos-delay={index * 100}>
                    <div className="group relative flex items-center p-4 bg-white  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] lg:min-h-[8rem]">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0 bg-white dark:bg-gray-800">
                        <Image
                          src={category.images}
                          alt={category.title}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                          width={160}
                          height={40}
                        />
                      </div>
                      <p className="font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] truncate w-[200px] !m-0">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>

        {/* Button */}
        {/* <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="rounded-lg border bg-[#067afe] border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-[#067afe]">
            Try it for 30 days, no credit card required
          </button>
        </div> */}
      </section>

      <section
        className="relative bg-[#067afe] py-20 overflow-hidden"
        data-aos="fade-up"
      >
        <div
          className="container mx-auto px-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-white m-0">
                Build Tomorrow, Today
              </h2>
              <p className="mt-2 text-lg md:text-xl text-white/80 max-w-2xl">
                We provide advanced manufacturing solutions with precision,
                quality, and innovation.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
              >
                <span>Let’s talk now</span>
                <span className="flex items-center gap-1">➝ ➝</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
    </div>
  );
}
