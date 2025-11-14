import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import LetterAnimation from "@/components/LetterAnimation";
// import Loader from "@/components/Loader";
import Loader from "@/components/Loader";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import CallToActionSection from "@/components/CallToActionSection";
import Image from "next/image";

export default function paas() {
   const [loading, setLoading] = useState(true);
   
       // Loader effect
       useEffect(() => {
           const timer = setTimeout(() => setLoading(false), 1200);
           return () => clearTimeout(timer);
       }, []);
   
       // Initialize AOS animations
       useEffect(() => {
           AOS.init({ duration: 800, once: true });
       }, []);
   
       if (loading) return <Loader />;

    return (
      <>
        <Head>
          <title>Procurement as a Service (PaaS) | Byyizzy</title>
          <meta
            name="description"
            content="Digitize your procurement process with Byyizzy’s Procurement as a Service (PaaS). Reduce costs, gain visibility, and accelerate sourcing."
          />
          <link
            rel="canonical"
            href="https://yourdomain.com/services/procurement-service"
          />
        </Head>

        {/* HEADER */}
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
              className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
            >
              Procurement as a Service (PaaS) 
            </h2>
            <p
              data-aos="fade"
              data-aos-delay={300}
              className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
            >
Automate your Source-to-Pay process— for Just 1.5% of Your Spend 

            </p>
          </div>
        </section>


{/* HERO */}
            <section className="py-20 pt-0 bg-white">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Text */}
                <div className="md:order-1">
                  <ul className="my-0 pb-3 list-disc pl-5 space-y-3">
                    <li>Global Sourcing Expertise — Access verified suppliers worldwide</li>
                    <li>Local Fulfillment Network — Fast, reliable, and cost-effective delivery</li>
                    <li>AI-Powered Digital Ecosystem — Automate RFQs, quotes & analytics</li>
                    <li>Full Visibility & Control — Track spend, performance, and savings in real time</li>
                    <li>Zero Tech Investment — End-to-end procurement support with transparent pricing</li>
                  </ul>
                </div>
            
                {/* Right: Image */}
                <div className="md:order-2">
                  <Image
                    src="/images/1.svg"
                    alt="Industrial Products Aggregation"
                    width={1000}
                    height={700}
                    quality={60}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>






      

        {/* SOLUTION SECTION */}
        <section className="bg-[#eff3fa] ">
          <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px] pt-0">
            <div className="container mx-auto">
              {/* Our Solution */}
              <div className="max-w-5xl mx-auto text-center mb-16 p-10">
                <h2 className="animate-letters text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                  Our Solution
                </h2>
                <p
                  className="relative bg-yellow-50/80 p-6 sm:p-8 rounded-lg shadow-lg text-gray-700 text-lg sm:text-xl leading-relaxed font-sans border-l-4 border-yellow-400"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundSize: "100% 25px",
                  }}
                >
                  A fully managed, tech-driven procurement model with complete
                  transparency and measurable savings. Our global sourcing
                  expertise, local fulfillment network, and AI-powered digital
                  ecosystem ensure faster sourcing, lower costs, and smoother
                  operations — all in one integrated platform.
                </p>
              </div>

              {/* Key Features */}
              <div className="max-w-7xl mx-auto">
                <h2 className="animate-letters text-3xl font-bold text-center mb-12 text-gray-900">
                  Key Features
                </h2>
                <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 mt-10 p-10">
                  {[
                    {
                      title: "Free e-Sourcing Platform",
                      desc: "Create RFQs, auto-invite suppliers, compare quotes, and generate POs with ease.",
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
                            d="M3 4h18v12H3V4zm3 16h12m-9-4h6"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Fastest PR-PO Process",
                      desc: "Enhance speed, compliance, and efficiency across all procurement stages.",
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
                      title: "Comprehensive Procurement Support",
                      desc: "Enhance speed, compliance, and efficiency across all procurement stages.",
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
                            d="M10 6h4m-2 0v12m6-9h2m-16 0h2m12 6h2m-16 0h2"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Tail Spend Aggregation",
                      desc: "Enhance speed, compliance, and efficiency across all procurement stages.",
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
                            d="M5 12h3v8H5v-8zm5-4h3v12h-3V8zm5 6h3v6h-3v-6z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Verified Supplier Network",
                      desc: "Enhance speed, compliance, and efficiency across all procurement stages.",
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
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c3 2.5 3 7.5 0 10-3-2.5-3-7.5 0-10zm-7 5h14m-14 10h14"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Local Fulfillment + AI Efficiency",
                      desc: "Our hybrid approach combines local sourcing with AI optimization for rapid, reliable, and cost-effective procurement.",
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
                            d="M12 2C8 3 6 8 6 8l4 2-2 4 4 2s5-2 6-6-2-8-6-8z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 19l2-2m0 0l3-1-1 3-2 2m0-4L3 17l2 2z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Credit Facility",
                      desc: "Access flexible credit via NBFC partners for better cash flow.",
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
                            d="M3 7h18M3 11h18m-9 6h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2h9z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Analytics & Insights",
                      desc: "Enhance speed, compliance, and efficiency across all procurement stages.",
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
                            d="M4 19V9m4 10V5m4 14v-7m4 7V8m4 11V3"
                          />
                        </svg>
                      ),
                    },
                  ].map((feature, index) => (
                    // AOS wrapper
                    <div
                      key={feature.title}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div
                        className="h-full group p-8 rounded-2xl bg-white border border-white/40 from-[#067afe]/10 to-[#00c6ff]/20 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.3)] transition-all duration-500 hover:-translate-y-1 flex flex-col items-center gap-4"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {/* ICON CIRCLE */}
                        <div className="bg-[#F2F2F8] w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>

                        {/* CONTENT */}
                        <h4 className="text-lg font-semibold text-[#050d20] mb-2 group-hover:text-[#067afe] transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.desc}
                        </p>
                        {/* Glow line */}
                        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#067afe] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16" data-aos="fade-up">
          <div className="text-center">
            <h2 className="animate-letters text-3xl font-bold mb-8 text-gray-900">
              Why Choose Byyizzy?
            </h2>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-10">
            {/* Left: Text content */}
            <div>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Lowest Ordering Costs",
                  "1.5% Total Spend Model — All Inclusive",
                  "End-to-End Expert Support",
                  "Transparent Pricing & Documentation",
                  "Local + Digital Hybrid Model",
                  "Fastest Sourcing Turnaround Time",
                  "Zero Platform or Onboarding Fees",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#067afe] mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div>
              <img
                src="https://media.istockphoto.com/id/1264382760/vector/people-rate-online-vector-illustration-cartoon-flat-customer-characters-leave-positive.jpg?s=612x612&w=0&k=20&c=z0gGeas6MR9yBVBdJTQvIAWpnzA5BjM3_JYX0_SpEhY=" // replace with your image path
                alt="Procurement Illustration"
                className="w-full rounded-xl"
              />
            </div>
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
             Start Smarter Procurement Today! 
            </h4>
              <p className="mt-3 text-lg text-white/80 ">
              Digitize your procurement, cut costs, and gain full visibility — all while boosting efficiency and compliance.
            </p>
            <p className="mt-3 text-lg text-white/80 max-w-2xl">
              Get started with Byyizzy.com — Transforming procurement, empowering growth.
            </p>
            
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#067afe] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              <span>Let’s talk now</span>
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
