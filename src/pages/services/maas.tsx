
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import LetterAnimation from "@/components/LetterAnimation";
import Loader from "@/components/Loader";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { CurrencyDollarIcon, CubeIcon, UsersIcon, ClipboardDocumentListIcon, ChatBubbleLeftRightIcon, TruckIcon, SparklesIcon, MapIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import CallToActionSection from "@/components/CallToActionSection";


export default function IndustrialProductsAggregation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    if (loading) return <Loader />;


    return (
      <>
        <Head>
          <title>
            Byyizzy Hardware Network | Industrial Products Aggregation
          </title>
          <meta
            name="description"
            content="Byyizzy empowers local hardware stores with technology, supply chain integration, and strong buying power for B2B and B2C."
          />
          <link
            rel="canonical"
            href="https://yourdomain.com/services/procurement-service"
          />
        </Head>

        {/* <Header /> */}
        <LetterAnimation />

        {/* HERO + BREADCRUMB */}
        <section
          className="self-stretch px-5 lg:px-20 pt-20 pb-20 flex flex-col justify-center items-center gap-2 overflow-hidden bg-[#eff3fa]"
          aria-labelledby="hero-title"
        >
          
          <div className="self-stretch flex flex-col justify-center items-center gap-2 mb-4 lg:mb-0">
           <h2
  data-aos="fade"
  id="hero-title"
  className="text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-bold leading-tight lg:leading-[50px] max-w-7xl mx-auto w-full"
>
             Manufacturing as a Service (MaaS)
            </h2>
            <p
              data-aos="fade"
              data-aos-delay={300}
              className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
            >
              Streamline Your Customized and Non-Standard Spare Parts Supply Chain 
            </p>
          </div>
        </section>


              {/* HERO */}
              <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left: Text */}
            <div className="md:order-1">
              <ul className="my-0 pb-3 list-disc pl-5 space-y-3">
                <li>Bridging SMEs and Large Clients</li>
                <li>AI-Driven Production Management</li>
                <li>Real-Time Visibility & Control</li>
                <li>Global Manufacturing Network</li>
                <li>Access to best Production Capabilities</li>
              </ul>
            </div>
        
            {/* Right: Image */}
            <div className="md:order-2">
              {/* <Image
                src="/images/s1.webp"
                alt="Industrial Products Aggregation"
                    width={1000}
                    height={700}
                    quality={60}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full rounded-lg object-cover"
              /> */}
              <img
                src="/images/s1.webp"
                alt="MaaS Illustration"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
              </section>





        {/* HERO SECTION */}
      

        {/* HERO */}
        <section className="py-20 bg-white">
          {/* Section Heading */}
          <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
           What We Do
          </h2>

          <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12 mt-15">
            {/* Left: Text Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-gray-700 mb-4">
                Technology-Driven Manufacturing Model for Customized &
                Non-Standard Spare Parts Transform your custom & non-standard
                spare parts supply chain with our AI-powered manufacturing
                platform and extensive supplier network. Achieve full
                visibility, reduce lead times, and enhance quality.
              </p>
              
              <p className="text-gray-700 mb-4">
                We bridge the gap between urgent needs and complex
                manufacturing. Our MaaS platform connects your requirements with
                a curated network of verified machine shops, foundries,
                fabricators, and 3D printing partners across the world.
              </p>
                <p className="text-gray-700 mb-4">
                Whether you need a single precision component or a complete
                mechanical assembly, we deliver fast, accurate, and traceable
                manufacturing solutions — without the overhead of managing
                suppliers.
              </p>
            </div>

            {/* Right: Features */}
            <div className="lg:w-1/2">
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/t1/8258670-homem-controlador-fabrica-robo-com-laptop-gratis-vetor.jpg"
                alt="MaaS Illustration"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* EXPERTISE GRID */}
        <section className="py-20 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold mb-14 text-gray-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mr-3 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v2m6.364 1.636l-1.414 1.414M20 12h-2m-1.636 6.364l-1.414-1.414M12 20v-2m-6.364-1.636l1.414-1.414M4 12h2m1.636-6.364l1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
              Our Expertise
            </h2>

            {/* Feature Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
              {[
                {
                  title: "Customized Spare Parts",
                  desc: "Reverse-engineered or made-to-drawing spares for obsolete or imported equipment.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l2 7h8l-6 4.5 2 7-6-4.5L6 20l2-7L2 9h8z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Non-Standard Components",
                  desc: "Precision parts that don’t fit catalogue sizes — machined, cast, or fabricated.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Prototype & Low-Volume Manufacturing",
                  desc: "Quick-turn production for trials, R&D, and urgent replacements.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Material Flexibility",
                  desc: "Metals, alloys, composites, polymers — we source and produce per your spec.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7l8-4 8 4v10l-8 4-8-4V7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "End-to-End Quality Control",
                  desc: "From inspection to certification, every part is digitally traceable.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative group"
                >
                  <div
                    className={`h-full relative group p-8 rounded-2xl bg-white border border-white/40 from-[#067afe]/10 to-[#00c6ff]/20 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.3)] transition-all duration-500 hover:-translate-y-1 flex flex-col items-center gap-4`}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="text-lg font-semibold text-[#050d20] mb-2 group-hover:text-[#067afe] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* Glow line */}
                    <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#067afe] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-l-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
              What We Do
            </h2>

            {/* Card Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              {/* 1️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1.Consolidation of Fragmented Spend
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For large manufacturing companies, 80% of the suppliers
                  contribute only 20% of the supply value (spend) – illustrating
                  the Pareto analysis (80:20 rule) A high number of transactions
                  (due to numerous suppliers) & repeated PR-PO process create
                  inefficiencies in the supply chain Need to unlock time spent
                  on operational activities and focus more on strategic category
                  management At Byyizzy, we aggregate the highly fragment MRO
                  purchases into a single managed platform to bring more
                  efficiency and to create value in the MRO supply chain
                </p>
              </div>

              {/* 2️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2.Hyperlocal Fulfillment Network
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our integrated tech-powered local hardware hubs deliver
                  faster, verified, cost-effective supplies. Inventory
                  optimization through our Byyizzy Powered Hardware Stores
                </p>
              </div>

              {/* 3️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3.Digital Procurement Platform
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI automates sourcing, quotes, approvals, POs, and tracking —
                  boosting speed, compliance, and control.
                </p>
              </div>

              {/* 4️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4.Transparent Pricing & Strategic Sourcing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We negotiate better rates through aggregated buying power and
                  pass every saving directly to you.
                </p>
              </div>

              {/* 5️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5.Catalog-Based Buying
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Pre-approved product catalogs streamline ordering — no
                      repetitive RFQs, just click and order.
                    </li>
                    <li>Easy & intuitive e-commerce like buying experience</li>
                    <li>SKU price & quality standardization</li>
                  </ul>
                </p>
              </div>

              {/* 6️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  6.Tail-Spend Intelligence & Reporting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gain real-time analytics, control leakage, and identify new
                  savings opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

   {/* HOW IT WORKS */}
        <section className="py-16 px-6 sm:px-12 ">
          <h2 className="animate-letters text-3xl font-bold mb-10 text-center flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mr-3 text-[#067afe]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12h20M12 2c2.21 2.21 2.21 19.79 0 22M12 2C9.79 4.21 9.79 19.79 12 22"
              />
            </svg>
            How It Works
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Submit Your Requirement — Upload drawings, photos, or physical samples.",
              "Digital Analysis — Our AI tools match your specs with capable and cost-efficient manufacturers.",
              "Quotation & Approval — Transparent pricing and lead times.",
              "Production & Inspection — Managed by our quality and procurement experts.",
              "Delivery & Support — On-time delivery with documentation and after-sales support.",
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <span className="flex-shrink-0 mt-1 text-gray-700 font-bold">
                  {idx + 1}.
                </span>
                <p className="text-gray-700 mb-0">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-28 px-6 sm:px-12 bg-gray-50">
          <h2 className="animate-letters text-4xl font-bold text-center mb-20 text-gray-900 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mr-3 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a7 7 0 00-7 7c0 2.386 1.25 4.464 3.125 5.625L9 18h6l.875-3.375A6.963 6.963 0 0019 9a7 7 0 00-7-7z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 22h6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 18h4" />
            </svg>
            Why Choose Our MaaS Model
          </h2>

          <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-2 mt-10">
            {[
              {
                title: "Transparent Pricing",
                desc: "Clear and straightforward pricing with no hidden costs.",
              },
              {
                title: "Fastest Production Turnaround",
                desc: "Ensuring your projects stay on schedule.",
              },
              {
                title: "Local + Digital Hybrid Model",
                desc: "Combines local manufacturing with digital solutions.",
              },
              {
                title: "Rapid Turnaround",
                desc: "Shorten lead times by 40–60% compared to traditional sourcing.",
              },
              {
                title: "Engineering Intelligence",
                desc: "Experts ensure manufacturability, cost-efficiency, and reliability.",
              },
              {
                title: "Full Visibility",
                desc: "Track every order — from RFQ to dispatch through your dashboard.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 text-center flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Heading */}
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {idx + 1}.{item.title}
                </h4>
                <div className="w-16 h-1 bg-blue-500 mb-4 rounded-full"></div>

                {/* Description */}
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us */}
        {/* <CallToActionSection/> */}

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
                    <h4 className="text-3xl md:text-4xl font-bold text-white">
                    Partner with Us
                    </h4>
                    <p className="mt-3 text-lg text-white/80 mb-0">
                     Get reliable, high-quality spare parts made on demand, with complete digital transparency.
                    </p>
                    <p className="mt-3 text-lg text-white/80">
                     Focus on your operations — we’ll handle the complexity of manufacturing and sourcing.
                    </p>
                  </div>
        
                  <div data-aos="fade-left" data-aos-delay="300">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-[#067afe] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
                    >
                      <span>Talk to our Manufacturing Experts </span>
                      <span className="flex items-center gap-1">➝</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

        {/* <Footer /> */}
        <Script
          src="/assets/js/scroll-trigger.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
      </>
    );
}
