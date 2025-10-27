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
                    About us
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
            ABOUT US
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
          >
             From sourcing to shop-floor, we build reliable, end-to-end solutions.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 ">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div className="flex items-center" data-aos="fade-right">
              <Image
                src="/images/pngind.png" // path inside public folder
                className="rounded-xl mx-auto"
                alt="Byyizzy India Map"
                width={500}
                height={400}
                unoptimized
              />
            </div>
            <div
              className="lg:ms-5 ms-5"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {/* <span
                className="text-xs sm:text-sm text-primary uppercase font-semibold tracking-wider text-default-950"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                India’s Fast-Growing Hardware & Procurement Platform
              </span> */}
              <span className="text-xs sm:text-sm text-primary uppercase font-semibold tracking-wider bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
                India’s Fast-Growing Hardware & Procurement Platform
              </span>
              <h2
                className="animate-letters text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-4 text-[#050d20] leading-snug sm:leading-normal"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Empowering Each Other to Succeed
              </h2>
            
              <hr className="border-gray-200 my-6" />

              <div
                className="flex items-start gap-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
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
                      className="lucide lucide-check text-base text-[#067afe]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-[#050d20] font-semibold">
                    Integrated Hardware Chain Network
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Bringing India’s fragmented hardware stores together under
                    one brand — powered by Byyizzy’s expertise, technology, and
                    hyper-local model.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-5 mt-5"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
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
                      className="lucide lucide-layers-2 text-base text-[#067afe]"
                    >
                      <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
                      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-[#050d20] font-semibold">
                    Optimize Procurement & Supply Chain
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Simplifying Source-to-Pay, improving margins, and enabling
                    sustainable, transparent procurement through advanced
                    digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-white bg-[#eff3fa]"
        aria-labelledby="metrics-title"
      >
        <div className="wrapper self-stretch px-5 pt-20 lg:p-20 flex flex-col justify-start items-start gap-20">
          <header className="self-stretch flex flex-col justify-center items-center gap-10">
            {/* <span
              className="label label-solid-orange"
              aria-label="Our Lucky Numbers"
            >
              Our Lucky Numbers
            </span> */}
            <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
              Our Counts
            </span>
            <h2
              id="metrics-title"
              data-aos="fade"
              className="container text-center justify-start text-secondary-navy text-3xl lg:text-4xl font-medium leading-tight aos-init aos-animate"
            >
              Our track record and experiences reflect
              <span className="text-primary-orange">our commitment </span>
              to quality, safety, and client satisfaction
            </h2>
          </header>
          <ul
            className="flex flex-col lg:flex-row justify-center items-center w-full mx-auto list-none p-0 m-0"
            aria-label="Key metrics and statistics"
          >
            <li
              data-aos="fade-up"
              className="py-6 lg:px-10 flex flex-col lg:flex-row w-full lg:w-auto justify-start items-center lg:items-end gap-6 lg:border-l-[0.80px] lg:border-l-base-grey-stroke lg:border-b-0 first:border-l-0 border-b-[0.80px] border-b-base-grey-stroke last:border-b-0 aos-init aos-animate"
            >
              <strong className="text-center justify-start text-secondary-navy text-7xl lg:text-6xl font-medium leading-tight">
                35+
              </strong>
              <span className="text-center lg:text-left w-full lg:w-24 justify-start text-base-grey text-lg lg:text-base font-medium lg:font-normal leading-relaxed">
                Industry Awards
              </span>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay={100}
              className="py-6 lg:px-10 flex flex-col lg:flex-row w-full lg:w-auto justify-start items-center lg:items-end gap-6 lg:border-l-[0.80px] lg:border-l-base-grey-stroke lg:border-b-0 first:border-l-0 border-b-[0.80px] border-b-base-grey-stroke last:border-b-0 aos-init aos-animate"
            >
              <strong className="text-center justify-start text-secondary-navy text-7xl lg:text-6xl font-medium leading-tight">
                1500+
              </strong>
              <span className="text-center lg:text-left w-full lg:w-24 justify-start text-base-grey text-lg lg:text-base font-medium lg:font-normal leading-relaxed">
                Projects Delivered
              </span>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay={200}
              className="py-6 lg:px-10 flex flex-col lg:flex-row w-full lg:w-auto justify-start items-center lg:items-end gap-6 lg:border-l-[0.80px] lg:border-l-base-grey-stroke lg:border-b-0 first:border-l-0 border-b-[0.80px] border-b-base-grey-stroke last:border-b-0 aos-init aos-animate"
            >
              <strong className="text-center justify-start text-secondary-navy text-7xl lg:text-6xl font-medium leading-tight">
                98%
              </strong>
              <span className="text-center lg:text-left w-full lg:w-24 justify-start text-base-grey text-lg lg:text-base font-medium lg:font-normal leading-relaxed">
                Client Satisfaction
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative py-20  overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading Section */}
          <div data-aos="fade-up" className="max-w-4xl mx-auto mb-12">
            {/* <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
        
            </span> */}

            <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-[#050d20] leading-tight">
                Why Choose <span className="text-[#067afe]"> Byyizzy?</span>
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
            Discover the benefits that make Byyizzy stand out from the rest.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              {
                title: "Overview",
                desc: "We are a B2B & B2C Integrated Marketplace provider for Standard and Customized MRO Spares, Consumables, and Hardware Products.",
                icon: "🔎",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Established",
                desc: "Founded in 2018, we aim to revolutionize the fragmented Industrial and Hardware supply chain through Hyper-Local Stores and an E-commerce Platform powered by Proven Algorithms, AI, and Machine Learning.",
                icon: "📜",
                // gradient: "from-[#00c6ff]/10 to-[#067afe]/20",
              },
              {
                title: "Integration",
                desc: "We integrate hardware stores, which face significant market competition, under our brand Byyizzy, leveraging our expertise and technology.",
                icon: "🔁",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "Chain of Hardware Stores",
                desc: "Own and franchise hardware chain model—integrating shops in the online marketplace for a seamless shopping experience (both online & in-store).",
                icon: "🔗",
                // gradient: "from-[#067afe]/10 to-[#00c6ff]/20",
              },
              {
                title: "E2E Ordering Service",
                desc: "We provide best-in-class end-to-end ordering services along with free e-sourcing tools.",
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
