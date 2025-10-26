import type { Metadata } from "next";
import Image from "next/image";
import { Inter_Tight, Inter, Onest, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import { FaArrowRight } from "react-icons/fa";
import LetterAnimation from "@/components/LetterAnimation";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoBanner from "@/components/VideoBanner";
import Loader from "@/components/Loader";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";
import Head from "next/head";
import brandsData from "../Data/Brand.json"; // import the JSON file

import dynamic from "next/dynamic";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ManufacturingProductsSection from "@/components/ManufacturingProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Counterpart from "@/components/Counterpart";



const cards = [
  {
    title: "Understanding your goals",
    description:
      "The first and most crucial step is understanding your unique financial aspirations and challenges.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Comprehensive financial analysis",
    description:
      "The first and most crucial step is understanding your unique financial aspirations and challenges.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Success your financial goals",
    description:
      "The first and most crucial step is understanding your unique financial aspirations and challenges.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

// export const metadata: Metadata = {
//   title: "My Next.js App",
//   description: "Static site with custom fonts",
// };

export default function Home() {
  const [loading, setLoading] = useState(true);
  const AOS = require("aos");

  // ✅ 1. Lightweight loading (no unnecessary 100ms delay)
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // ✅ 2. Initialize AOS (only once)
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  // ✅ 3. Counter animation optimized
  useEffect(() => {
    const counters = document.querySelectorAll("[id^='counter-']");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            let start = 0;

            const step = () => {
              start += Math.ceil(target / 100);
              if (start < target) {
                el.textContent = `${start.toLocaleString()}+`;
                requestAnimationFrame(step);
              } else {
                el.textContent = `${target.toLocaleString()}+`;
              }
            };

            step();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      // store target once in attribute
      const targetValue = +counter.innerText.replace(/\D/g, "");
      counter.setAttribute("data-target", targetValue);
      counter.textContent = "0+";
      observer.observe(counter);
    });
  }, []);

  if (loading) return <Loader />;

  const ACCESSIBLE_BLUE = "bg-[#0057b3]";

  const brands = brandsData.brands;


  return (
    <>
      <Head>
        <title>My App Home Page</title>
        <meta
          name="description"
          content="A brief summary for search engines."
        />
        <meta property="og:title" content="My App Home Page" />
        <meta
          property="og:description"
          content="A brief summary for search engines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
      </Head>

      <main>
        <Header />
        <LetterAnimation />
        <VideoBanner />
        <FeaturesSection />

        <ServicesSection />


        <Counterpart />

        <CategoriesSection />
    
         
        <ManufacturingProductsSection />

        <ClientsSection brands={brandsData} />

        <CallToActionSection />
        <Footer />
        <Script
          src="/assets/js/scroll-trigger.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
      </main>
    </>
  );
}
