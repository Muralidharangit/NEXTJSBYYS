import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
// import { FaArrowRight } from "react-icons/fa";
import LetterAnimation from "@/components/LetterAnimation";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/Loader";
import ClientsSection from "@/components/ClientsSection";
import { TbPackages } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import FeaturesSection from "@/components/FeaturesSection";


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
    const timer = setTimeout(() => setLoading(false), 2000);
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
      
        <div className="self-stretch flex flex-col justify-center items-center gap-2 mb-4 lg:mb-0">
          <h3
            data-aos="fade"
            id="hero-title"
            className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
          >
           Trusted and Value-Creating E-Commerce Marketplace Provider 
          </h3>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
          >
           Building India’s most trusted supply network for Industrial & Hardware products — blending local accessibility with digital intelligence 
          </p>
        </div>
      </section>
  {/* Cards Section */}
      <section className="relative py-20  overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading Section */}
          <div data-aos="fade-up" className="max-w-4xl mx-auto mb-12">
            {/* <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
        
            </span> */}

            <p className="font-semibold">
              <b>
  Founded in 2018, we aim to revolutionize the fragmented Industrial and Hardware supply chain through Hyper-Local Stores and an E-commerce Platform powered by Proven Algorithms, AI, and Machine Learning.
              </b>
            
            </p>

            <section className="py-16 bg-white dark:bg-gray-950">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {/* Mission */}
      <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
        
<div className="inline-flex h-12 w-12 items-center justify-center rounded-full
                bg-blue-50 text-gray-600 ring-1 ring-blue-100
                dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800 mb-4">
  <GoGoal className="h-6 w-6" />
</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white"> Our<span className="text-[#067afe]">  Mission</span></h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          To provide a seamless and transparent shopping experience in the complex &
          fragmented Industrial and Hardware products.
        </p>
      </div>

      {/* Vision */}
      <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
       

        
<div className="inline-flex h-12 w-12 items-center justify-center rounded-full
                bg-blue-50 text-gray-600 ring-1 ring-blue-100
                dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800 mb-4">
  <FaEye  className="h-6 w-6" />
</div>
       
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Vision <span className="text-[#067afe]"> Byyizzy?</span></h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          To revolutionize the industrial and hardware supply chain by creating greater value,
          enhancing profitability, and ensuring sustainable operations for all stakeholders.
        </p>
      </div>
    </div>
  </div>
</section>


            <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-[#050d20] leading-tight">
             What Makes Us <span className="text-[#067afe]">Unique?</span>
            </h3>


              

                 
          </div>

          {/* Feature Cards */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              {
                title: "Expertise in Procurement",
                desc: "Built by procurement leaders with 15–20 years of strong MRO experience, addressing real market gaps.",
                icon: "🔎",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "AI-Driven S2P Platform",
                desc: "Automates RFQs and repetitive procurement activities for greater efficiency.",
                icon: "📜",
                // gradient: "from-[#00c6ff]/10 to-[#067afe]/20",
              },
              {
                title: "Efficient Sourcing",
                desc: "Sourcing from OEMs, OPMs, and manufacturers, complemented by drop-shipping via local hardware stores for a trustworthy integrated ecosystem.",
                icon: "🔁",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Fastest Delivery",
                desc: "Commitment to delivering products within 24 hours through hyperlocal stores.",
                icon: "🔗",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Lowest Ordering Costs",
                desc: "Operating at a 1.5% margin for risk-free transactions, with a maximum margin capped at 7%.",
                icon: "📈",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Price Transparency",
                desc: "Clear and transparent pricing, enabling informed purchasing decisions without hidden costs.",
                icon: "🤝",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Local Business Engagement",
                desc: "Actively engaging with partner stores to foster community collaboration and support local economies.",
                icon: "🏬",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
               {
                title: "Integrated Digital Ecosystem",
                desc: "A seamless AI-Based platform combining B2B and B2C functionalities for efficient interactions and transactions.",
                icon: "⛓️",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
               {
                title: "Supplier Diversity",
                desc: "Promoting diversity in our supply chain by partnering with minority-owned and women-owned businesses, supporting diverse entrepreneurs.",
                icon: "📦",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`relative group p-8 rounded-2xl border border-white/40 bg-gradient-to-br  backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.3)] transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#050d20] mb-2 group-hover:text-[#067afe] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                {/* Glow line animation */}
                <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#067afe] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-l-2xl"></div>
              </div>
            ))}
          </div>



          {/* <button className="mt-6 px-6 py-3 bg-[#067afe] text-white font-semibold rounded-xl shadow-lg hover:bg-[#056ae0] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,122,254,0.4)]">
            Join the Network →
          </button> */}
        </div>
      </section>
  {/* Our Strategy */}
            <section className="py-20 bg-[#f0f4fb]">
                <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-center mb-16">Our Strategy</h2>
                <div className="grid md:grid-cols-1 gap-12 max-w-6xl mx-auto mt-10">
                    <div className=" bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition" data-aos="fade-right">
                        {/* <h3 className="text-2xl font-semibold mb-4">Retail & Home Builders (B2C)</h3> */}

                        <ul className="space-y-12 text-gray-700 text-lg">
                            {[
                                " Total cost of ownership optimization through the integration of the B2B and B2C business ecosystem",
                                " Reducing ordering costs with the support of our own S2P platform & bring 100% process visibility to the customers",
                                "	Operating in low-cost regions",
                                "	Creating a chain of hardware stores under the Byyizzy brand",
                                "	Mitigating the Business transaction risk at Flat/Minimal margin (Material supply and advance risks that Traders are doing with higher margin)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start my-3">
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
                                    <span className="px-2">{" "} {item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


 


 <FeaturesSection />

    

      <ClientsSection />
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
                Join Us on Our Journey
              </h2>
              <p className="mt-2 text-lg md:text-xl text-white/80 max-w-2xl">
            Got questions? Need more information? Have feedback for us? Just drop us a line. We would love to hear from you
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
              >
                <span>Join Us on Our Journey</span>
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
