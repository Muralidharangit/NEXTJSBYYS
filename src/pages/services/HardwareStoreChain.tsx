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
import CallToActionSection from "@/components/CallToActionSection";
import Image from "next/image";

export default function HardwareStoreChain() {
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
                <title>Byyizzy Hardware Network | Procurement & Retail Solutions</title>
                <meta
                    name="description"
                    content="Byyizzy empowers local hardware stores with technology, supply chain integration, and strong buying power for B2B and B2C."
                />
                <link rel="canonical" href="https://yourdomain.com/services/procurement-service" />
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
                        className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
                    >
                        Hardware Store Chain
                    </h2>
                    <p
                        data-aos="fade"
                        data-aos-delay={300}
                        className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
                    >
                       Building India’s First Hardware Store Chain! 
                    </p>
                </div>
            </section>



            {/* HERO */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Text */}
                <div className="md:order-1">
                  <ul className="my-0 pb-3 list-disc pl-5 space-y-3">
                    <li>🏪 Technology-driven chain of Hyperlocal Hardware Stores</li>
                    <li>💰 Best Prices, Smarter Technology, Reducing unsold inventory and Higher profits</li>
                    <li>🛍️ Great In-Store Experience</li>
                    <li>🔗 Integrated B2B & B2C ecosystem</li>
                    <li>🌐 Integrated B2B & B2C Ecosystem</li>
                    <li>💳 Easy credit & EMI Facility to B2C Customer</li>
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

            {/* HERO */}
            <section className="py-20 pt-0 px-6">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2
                        className="animate-letters text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Byyizzy Powered Hardware Store Chain
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-10 mt-20">
                    {/* Left Side Content */}
                    <div className="text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
                        <p className="text-lg sm:text-xl text-gray-700 mb-6 text-justify">
                            Building India’s First Integrated Industrial and Hardware Network for B2B and B2C. We’re creating India’s first hardware store chain that blends online convenience with a great in-store experience.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify">
                            India’s hardware market is valued at ₹1 lakh crore, yet most local hardware shops struggle as large corporate players expand. Byyizzy empowers local hardware stores with technology, strong buying power, and supply chain integration, enabling them to reduce costs, avoid dead inventory, increase profits, and tap into high-volume B2B demand, beyond just walk-in B2C customers.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 mb-10 text-justify">
                            Transforming local stores into Byyizzy powered hardware stores. Our mission is to unify the fragmented hardware supply chain and create a smarter, faster, and more inclusive marketplace for everyone.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Get Started <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center" data-aos="fade-left" data-aos-delay="300">
                        <img
                            src="https://www.planiumpro.com/wp-content/uploads/2021/11/supply-chain-diagram.jpg"
                            alt="Hardware Store"
                            className="w-full max-w-lg rounded-xl object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* CHALLENGES */}
            <section className="py-20 bg-[#f0f4fb]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading Section */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full" data-aos="fade-up">
                            Challenges
                        </span>

                        <h2 className="animate-letters mt-4 text-3xl md:text-4xl font-semibold text-[#050d20] leading-tight">
                            Challenges in the Hardware Market
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed" data-aos="fade-up">
                            Byyizzy combines technology, data, domain expertise and a strong supplier network to
                            build an integrated ecosystem for hardware retail and industrial supply.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
                        {[
                            {
                                title: "Fragmented Supply Chain",
                                desc: "Thousands of small suppliers with no centralized system",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Inconsistent Pricing",
                                desc: "High margins and inconsistent costs across stores & regions",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.105 0 2 .672 2 1.5S13.105 11 12 11c-1.105 0-2 .672-2 1.5S10.895 14 12 14m0-6.5V15m0 4v.01" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Delayed Procurement",
                                desc: "Manual sourcing leads to delivery delays",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m3.5 0A8 8 0 1 1 4 12a8 8 0 0 1 16 0Z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Lack of Transparency",
                                desc: "No standardized pricing or visibility across stores",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s4-7 9-7 9 7 9 7-4 7-9 7-9-7-9-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Weak Local Store Competitiveness",
                                desc: "Local dealers struggle to compete with national brands",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Dead Inventory",
                                desc: "Overstocking and poor demand forecasting reduce profitability",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Limited Digital Presence",
                                desc: "Most stores still rely on offline, manual operations",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm2 12h12M8 8h8" />
                                    </svg>
                                ),
                            },
                        ].map((item, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="h-full relative group p-8 rounded-2xl bg-white border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.3)] transform-gpu transition-transform duration-500 ease-out hover:-translate-y-2 flex flex-col items-center gap-4">
                                    <div className="bg-[#F2F2F8] w-[70px] h-[70px] rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-[#050d20] mb-2 group-hover:text-[#067afe] transition-colors duration-500 text-center">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-center">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>

            {/* SOLUTIONS */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading Section */}
                    <div data-aos="fade-up" className="max-w-4xl mx-auto mb-12">
                        <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
                            How It Works
                        </span>

                        <h2 className="animate-letters mt-4 text-3xl md:text-4xl font-semibold text-[#050d20] leading-tight">
                            How Byyizzy Solves These Challenges
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed" data-aos="fade-up">
                            Byyizzy combines technology, data, domain expertise and a strong supplier network to
                            build an integrated ecosystem for hardware retail and industrial supply.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-10">
                        {[
                            { title: "Faster Fulfillment", desc: "Localized warehousing for same-day or 24-hour delivery" },
                            { title: "Integrated Procurement & SCM Platform", desc: "Real-time inventory and price visibility" },
                            { title: "Data-Driven Buying", desc: "Predictive tools to avoid overstocking" },
                            { title: "Centralized Sourcing", desc: "Best rates through network-wide aggregation" },
                            { title: "Omnichannel Retail", desc: "Seamless online and offline shopping experience" },
                            { title: "Empowered Local Stores", desc: "Technology + supply chain support for better margins" },
                            { title: "Integrated Credit Solutions", desc: "Easy credit and EMI options" },
                        ].map((feature, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="flex">
                                <div className="flex flex-col justify-between h-full p-6 bg-white rounded-xl shadow-md border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.3)] transition-transform duration-500 ease-out hover:-translate-y-2 w-full">
                                    {/* Content */}
                                    <div>
                                        <h5 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h5>
                                        <p className="text-gray-700">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>

            </section>

            {/* WHAT WE OFFER */}
            <section className="py-20 bg-[#f0f4fb]">
                <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-center mb-16">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-10">
                    <div className=" bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition" data-aos="fade-right">
                        <h3 className="text-2xl font-semibold mb-4">Retail & Home Builders (B2C)</h3>

                        <ul className="space-y-4 text-gray-700 text-lg">
                            {[
                                "Materials on credit to ease EMI burdens",
                                "Great in-store experience + online convenience",
                                "Quality products at the best price",
                                "Loyalty programs and expert staff support"
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition" data-aos="fade-left">
                        <h3 className="text-2xl font-semibold mb-4">Industrial & Institutional Buyers (B2B)</h3>

                        <ul className="space-y-4 text-gray-700 text-lg">
                            {[
                                "Fastest Delivery – within just 24 hours!",
                                "Reduce Inventory carrying costs & stockouts",
                                "Real-time stock visibility analytics",
                                "Local Business Engagement",
                                "Sustainable Business Model"
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */} <section className="py-20">
                <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Byyizzy</h2>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mt-10">
                    {/* Left: Text content */}
                    <div data-aos="fade-right"> <ul className="space-y-4 text-gray-700 text-lg">
                        {["Technology-driven hyperlocal hardware store network", "Best prices, smarter operations, and higher profits", "Integrated B2B & B2C ecosystem", "Credit & EMI facilities for consumers", "Supporting local suppliers and strengthening communities",

                        ].map((item, index) =>
                        (<li key={index} className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#067afe] mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /> </svg>
                            </div> <span>{item}</span> </li>))} </ul>
                    </div>

                    {/* Right: Image */}

                    <div data-aos="fade-left">
                        <img src="https://media.istockphoto.com/id/1264382760/vector/people-rate-online-vector-illustration-cartoon-flat-customer-characters-leave-positive.jpg?s=612x612&w=0&k=20&c=z0gGeas6MR9yBVBdJTQvIAWpnzA5BjM3_JYX0_SpEhY="
                            alt="Procurement Illustration" className="w-full rounded-xl" />
                    </div>
                </div>
            </section>

            {/* NETWORK */}
            <section className="py-20 bg-[#f0f4fb]">
                <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">

                    {/* Left Side - Text */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block">
                            Our Network
                            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-blue-600 rounded-full"></span>
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8" data-aos="fade-right">
                            Byyizzy is building India’s first nationwide hardware chain, powered by data and digital efficiency. Each store functions as a community supply hub, connecting local businesses, manufacturers, and customers under one system — offering faster delivery, transparent pricing, and better profits.
                        </p>

                        {/* Optional Feature Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md lg:max-w-full mx-auto lg:mx-0" data-aos="fade-up">
                            {[
                                "Faster Delivery",
                                "Transparent Pricing",
                                "Better Profits",
                                "Community Supply Hub"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow hover:shadow-lg transition">
                                    <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Illustration/Image */}
                    <div className="lg:w-1/2 flex justify-center" data-aos="zoom-left">
                        <img
                            src="https://www.pngkey.com/png/full/839-8396931_our-global-network-of-top-rated-local-and.png"
                            alt="Network Illustration"
                            className="w-full max-w-md rounded-xl"
                        />
                    </div>

                </div>
            </section>


        

            {/* Contact Us */}
            <CallToActionSection/>

            {/* <Footer /> */}
            <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
            <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
        </>
    );
}
