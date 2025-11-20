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
import ManufacturingProductsSection from "@/components/ManufacturingProductsSection";
import Image from "next/image";

export default function ClientServicePage() {

  const ACCESSIBLE_BLUE = "#f1f1f1"; // Replace with your color class

  const [loading, setLoading] = useState(true);



  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

   const products = [
      {
      title: "Industrial Products Aggregation",
      desc: "Streamline your procurement. Create value. Generate savings from tail-spend.",
      features: [
        "Fastest Delivery – within just 24 hours! (Via Byyizzy-powered hardware stores)",
        "Transparent Pricing",
        "100% Process Visibility",
        "Local Business Engagement",
        "Integrated B2B & B2C Ecosystem",
        "End-to-End Tracking & Catalog-Based Buying",
        "Supporting Local, Saving Community Wealth",
      ],
      img: "/images/s4.webp",
      moreLink: "/services/IndustrialProductsAggregation",
    },
    {
      title: "Procurement as a Service (PaaS)",
      desc: "Automate your Source-to-Pay process— for Just 1.5% of Your Spend",
      features: [
        "Global Sourcing Expertise — Access verified suppliers worldwide",
        "Local Fulfillment Network — Fast, reliable, and cost-effective delivery",
        "AI-Powered Digital Ecosystem — Automate RFQs, quotes & analytics",
        "Full Visibility & Control — Track spend, performance, and savings in real time",
        "Zero Tech Investment — End-to-end procurement support with transparent pricing",
      ],
      img: "/images/s1.webp",
      moreLink: "/services/paas",
    },
    {
      title: "Byyizzy Powered Hardware Store Chain",
      desc: "Building India’s First Hardware Store Chain!",
      features: [
        "Technology-driven chain of Hyperlocal Hardware Stores",
        "Best Prices, Smarter Technology, Reducing unsold inventory and Higher profits",
        "Great In-Store Experience, Online Convenience",
        "Integrated B2B & B2C ecosystem",
        "Easy credit & EMI Facility to B2C Customer",
      ],
      img: "/images/1.svg",
      moreLink: "/services/HardwareStoreChain",
    },
    {
      title: "Manufacturing as a Service (MaaS)",
      desc: "Streamline Your Customized and Non-Standard Spare Parts Supply Chain",
      features: [
        "Bridging SMEs and Large Clients",
        "AI-Driven Production Management",
        "Real-Time Visibility & Control",
        "Global Manufacturing Network",
        "Access to best Production Capabilities",
      ],
      img: "/images/s3.png",
      moreLink: "/services/maas",
    },
  
  ];

  if (loading) return <Loader />;

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <LetterAnimation />

    <section
  className="bg-[#eff3fa] py-20 px-5 sm:px-8 lg:px-20 flex justify-center"
  aria-labelledby="hero-title"
>
  <div
    data-aos="fade-up"
    className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 lg:p-14 max-w-6xl w-full text-left"
  >
    {/* Title */}
    <h3
      id="hero-title"
      className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-[#050d20] leading-snug mb-8"
    >
      Our Solutions,
     Committed to Quality & Trust
    </h3>

    {/* List Items */}
    <ul className="space-y-6">
      <li className="flex items-start gap-3">
        <span className="text-blue-600 mt-1 text-xl">➤</span>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We offer <b>Industrial Products Aggregation</b> with the fastest
          delivery through hyperlocal stores. Our
          <b> PaaS (Procurement-as-a-Service)</b> reduces ordering costs,
          optimizes supply chain efficiency, and supports local businesses.
        </p>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-600 mt-1 text-xl">➤</span>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Our model ensures faster industrial hardware delivery by
          <b> turning local hardware shops into micro-warehouses</b>,
          creating a strong and sustainable local ecosystem.
        </p>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-blue-600 mt-1 text-xl">➤</span>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We help SMEs and large enterprises
          <b> develop customized & non-standard products</b> through our
          <b> Manufacturing-as-a-Service (MaaS) platform</b>.
        </p>
      </li>
    </ul>
  </div>
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
              href="/services/paas"
              icon={<TbFileInvoice className="h-8 w-8" />}
              title="Procurement as a Service (PaaS)"
              description="Automate your Source-to-Pay process — for just *1.5% of your spend."
            />

            <ServiceCard
              href="/services/HardwareStoreChain"
              icon={<TbTools className="h-8 w-8" />}
              title="Hardware Store Chain"
              description="Building India’s First Integrated Industrial and Hardware Network for B2B and B2C."
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


     <section className="position-relative bg-[#fff] ">
   <div className="py-20">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      {/* <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950"></span> */}

      {/* <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full mb-3">
       Why Choose us?
      </span> */}
      <h2 className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]">
      Why byyizzy? 
      </h2>
      <p>Sourcing Success, Delivering Values</p>
     </div>

     <div className="relative space-y-12 md:space-y-16 ">
      {products.map((product, index) => (
       <div
        key={index}
        className={`sticky top-32 bg-[${ACCESSIBLE_BLUE}] rounded-xl p-4 lg:p-8 xl:p-8 md:flex md:items-center mb-3`}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // <-- ADDED AOS ANIMATION LOGIC
        data-aos-duration="1000" // <-- OPTIONAL: Adjusts speed (in milliseconds)
       >
        {/* Content Left / Image Right for odd index */}
        <div
         className={`w-full md:w-1/2 ${
          index % 2 === 0 ? "md:pr-6" : "md:pl-6"
         } text-[##071431]`}
        >
         <h3 className="mb-4 text-xl font-semibold">
          {product.title}
         </h3>
         <p className="mb-6">{product.desc}</p>
         <ul className="mb-6 space-y-4">
          {product.features.map((item, i) => (
           <li className="flex items-center gap-x-2" key={i}>
            <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
             <svg
              stroke="#057afe"
              fill="#057afe"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="h-4 w-4"
             >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
             </svg>
            </span>
            <span>{item}</span>
           </li>
          ))}
         </ul>
         <ul className="flex flex-wrap gap-2">
          <li>
           <Link
            href={product.moreLink}
            className="px-3 py-1 border border-[#0481fa] rounded-full text-[#0481fa] block"
           >
            More Details
           </Link>
          </li>
          <li>
           <Link
            href="/contact"
            className="px-3 py-1 border border-[#0481fa] rounded-full text-[#0481fa] block"
           >
            Contact us
           </Link>
          </li>
         </ul>
        </div>

        {/* Image Right / Content Left */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
         <Image
          src={product.img}
          alt={product.title}
          width={1200}
          height={675}
          quality={60} // 🔥 compress better without visible loss
          priority // ✅ only keep if this image is above the fold / hero section
          fetchPriority="high" // ✅ helps LCP if it’s a key visual
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 1200px" // ✅ responsive
          className="w-full rounded-lg object-cover"
         />
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
      {/* Clients & CTA */}
      {/* <ClientsSection /> */}
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
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block h-full">
      <div
        className="
          bg-white border border-[#eff3fa] rounded-2xl 
          p-6 sm:p-8 lg:p-10 
          hover:bg-[#eff3fa] 
          transition duration-300 ease-in-out shadow-sm
          flex flex-col h-full
        "
        data-aos="fade-up"
      >
        {/* Icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h6 className="text-lg sm:text-xl font-semibold mb-3 text-center">
          {title}
        </h6>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base text-center">
          {description}
        </p>

        {/* Push read-more to bottom */}
        <div className="mt-auto pt-4 text-center">
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
