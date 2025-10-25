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

const brandLogo = [
  {
    id: "1",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(1).jpg?alt=media&token=e606d1c8-1272-48bf-95a3-38ee8272213a",
  },
  {
    id: "2",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(10).jpg?alt=media&token=9d4ab1f6-156f-4430-9fee-75a2f4f03197",
  },
  {
    id: "3",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(11).jpg?alt=media&token=72ee8751-5327-4385-9788-5571d7fa2772",
  },
  {
    id: "4",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(12).jpg?alt=media&token=bf1d302f-2b1c-427f-8bd1-ae4e49f6f1bd",
  },
  {
    id: "5",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(13).jpg?alt=media&token=73199bf0-903c-4482-af22-6877708fe192",
  },
  {
    id: "6",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(14).jpg?alt=media&token=5611062a-a1d6-45c1-b0f2-4e6bd2167c29",
  },
  {
    id: "7",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(15).jpg?alt=media&token=b14effa7-1d5c-429b-84bf-42c472c8ef35",
  },
  {
    id: "8",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(16).jpg?alt=media&token=d3af59e1-6c83-4c21-bcd5-75016db2417b",
  },
  {
    id: "9",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(17).jpg?alt=media&token=17e3d0a4-cddc-454c-a089-4dd5548070e8",
  },
  {
    id: "10",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(18).jpg?alt=media&token=a066b527-0c92-4cba-9186-18c1489c9231",
  },
  {
    id: "11",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(19).jpg?alt=media&token=a5310d9e-5b1b-4894-b129-6ab5c01d635c",
  },
  {
    id: "12",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(2).jpg?alt=media&token=cf7337f6-a9d2-44fe-8afa-aca85b5ad1f0",
  },
  {
    id: "13",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(20).jpg?alt=media&token=eba7e84f-6eac-4d4b-85f3-21aeaf31e569",
  },
  {
    id: "14",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(21).jpg?alt=media&token=3b332498-2393-4f39-8129-864748c0234e",
  },
  {
    id: "15",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(4).jpg?alt=media&token=0428dd84-bb50-4a12-9da4-4faa79f0a3d5",
  },
  {
    id: "16",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(5).jpg?alt=media&token=24fe65e9-45de-40dd-b01f-0624d8949398",
  },
  {
    id: "17",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(6).jpg?alt=media&token=8061f230-3409-423c-9aa5-ede2b5ecb233",
  },
];
const brandLogo1 = [
  {
    id: "18",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(7).jpg?alt=media&token=4438a0be-6a64-474c-ac7d-da5d52f25b34",
  },
  {
    id: "19",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(8).jpg?alt=media&token=933b763d-4c40-4dd6-9382-8b8ac148b174",
  },
  {
    id: "20",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200%20(9).jpg?alt=media&token=d8bdafb8-660a-4de4-afe9-6442c86ac5de",
  },
  {
    id: "21",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-400x200.jpg?alt=media&token=ee3f6e6b-7a43-4dcc-87c0-de03ec7232ec",
  },
  {
    id: "22",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-410x200.jpg?alt=media&token=0c96a2f4-ece8-4fd3-9768-ba31ae85a5e6",
  },
  {
    id: "23",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-470x200.jpg?alt=media&token=051f8f76-2ccc-49ef-8113-777abfdfbfee",
  },
  {
    id: "24",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200%20(1).jpg?alt=media&token=e2f1935a-d545-4828-ae8b-3f93e286187f",
  },
  {
    id: "25",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-480x200.jpg?alt=media&token=3522c761-ddfd-4bb1-b143-9f355fae556c",
  },
  {
    id: "26",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200%20(1).jpg?alt=media&token=5a0bcb1c-cce7-447e-a1ce-9bcb3bc6b638",
  },
  {
    id: "27",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-500x200.jpg?alt=media&token=f8a611ae-0ffe-4011-866f-d8b4f6eb3054",
  },
  {
    id: "28",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-530x200.jpg?alt=media&token=9f504de5-7fc4-4854-af53-f2df358f9b23",
  },
  {
    id: "29",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimage-550x200.jpg?alt=media&token=61070019-103d-4d14-8745-d09c9f004b39",
  },
  {
    id: "30",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg1.jpg?alt=media&token=dfba517d-20b3-45a3-8967-aa3703aea7ef",
  },
  {
    id: "31",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg2.jpg?alt=media&token=63f9251e-f900-4675-b9ca-47ea30755cb9",
  },
  {
    id: "32",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg3.jpg?alt=media&token=9e4ba32d-b61c-4b88-9e04-00d4b1a35e6c",
  },
  {
    id: "33",
    logo: "https://firebasestorage.googleapis.com/v0/b/byizzy-5aa57.appspot.com/o/website%2Fourbrands%2Fimg.png?alt=media&token=6b4e8195-e182-45de-8d95-988d797ac37a",
  },
];


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

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Static site with custom fonts",
};

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


 useEffect(() => {
   const counters = document.querySelectorAll("[id^='counter-']");

   counters.forEach((counter) => {
     const target = +counter.innerText.replace(/\D/g, ""); // Get number only
     let count = 0;

     const updateCounter = () => {
       count += Math.ceil(target / 100);
       if (count < target) {
         counter.innerText = count.toLocaleString() + "+";
         requestAnimationFrame(updateCounter);
       } else {
         counter.innerText = target.toLocaleString() + "+";
       }
     };

     const observer = new IntersectionObserver(
       (entries) => {
         if (entries[0].isIntersecting) {
           updateCounter();
           observer.disconnect();
         }
       },
       { threshold: 0.5 }
     );

     observer.observe(counter);
   });
 }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;


  return (
    <div>
      <Header />
      <LetterAnimation />
      <VideoBanner />
      <section id="features" className="py-20  bg-[#eff3fa]">
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
            <div className="px-3" data-aos="fade-left" data-aos-delay="200">
              <span
                className="text-xs sm:text-sm text-primary uppercase font-semibold tracking-wider text-default-950"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                India’s Fast-Growing Hardware & Procurement Platform
              </span>
              <h2
                className="animate-letters text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-4 text-[#050d20] leading-snug sm:leading-normal"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Empowering Businesses with Efficient & Sustainable Procurement
              </h2>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Learn More
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
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </a>
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

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div data-aos="fade-right ">

               <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
              Our Services
            </span>

              {/* <span className="px-4 text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
                Our Services
              </span> */}
              <h2
                className="px-4 animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our Services with Quality & Trust
              </h2>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#067afe] font-medium hover:underline"
              >
                All Services
                <i className="fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>

          <div className="space-y-6 bg-[#f1f1f1]">
            {[
              {
                title: "Procurement as a Service (PaaS)",
                desc: "Simplify and digitize your sourcing, procurement, and supply chain management through our AI-powered e-sourcing platform and verified supplier network.",
                // tags: ["Procurement", "Optimization", "Compliance"],
                img: "https://pscs.jabil.com/dam/jcr:7730bd3c-24e6-4e3e-8a80-cb2c79bb8123/Procurement--Managed-Services_16x9.jpg",
              },
              {
                title: "E-Sourcing Platform",
                desc: "We’re creating India’s first hardware store chain that blends online convenience with a great in-store experience.",
                // tags: ["E-Sourcing", "RFQ", "Automation"],
                img: "https://html.themewant.com/digix/assets/images/service/06.webp",
              },
              {
                title: "Industrial Products Aggregation",
                desc: "High complexity and low-value transactions have made Industrial MRO supply chain hard to manage well—even as value trickles away.",
                // tags: ["Hardware", "Aggregation", "Supply Chain"],
                img: "https://cdn1.expresscomputer.in/wp-content/uploads/2024/03/08132642/ec-smart-industry-robot-arms-digital-factory-production-technology-750.jpg",
              },
              {
                title: "Manufacturing as a Service (MaaS)",
                desc: "Transform your custom & non-standard spare parts supply chain with our AI-powered manufacturing platform and extensive supplier network. Achieve full visibility, reduce lead times, and enhance quality.",
                // tags: ["Manufacturing", "On-Demand", "Efficiency"],
                img: "https://www.capgemini.com/wp-content/uploads/2022/05/Key-Visual-Hannover-Messe-GettyImages-1022892534.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="
    group flex flex-wrap md:flex-nowrap items-center border-b border-indigo-100 py-8 
    transition-all duration-300 
    lg:hover:bg-[#067afe] lg:hover:px-6
  "
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-6 md:flex-[0_0_48%] w-full">
                  {/* Image */}
                  <div className="w-0 overflow-hidden transition-all duration-500 lg:group-hover:w-[273px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-auto w-full md:w-auto"
                    />
                  </div>

                  {/* Number + Title */}
                  <div className="flex items-center gap-4">
                    {/* Hide number on mobile & tablet */}
                    <span className="hidden lg:inline-block px-4 py-1 rounded-full border border-indigo-200 text-gray-700 group-hover:text-white group-hover:border-white transition">
                      {`0${idx + 1}`}
                    </span>
                    <h5 className="text-xl md:text-3xl font-semibold text-gray-900 lg:group-hover:text-white transition">
                      {item.title}
                    </h5>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-between md:flex-[0_0_50%] w-full mt-4 md:mt-0">
                  <div className="max-w-md w-full">
                    {/* Add mobile paragraph padding */}
                    <p className="text-gray-600 lg:group-hover:text-white transition px-4 md:px-0">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow — hide on mobile & tablet */}
                  <div className="hidden lg:flex ml-6">
                    <a
                      href="#"
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-900 text-gray-900 
        transition lg:group-hover:bg-white lg:group-hover:text-indigo-600 lg:group-hover:border-indigo-600"
                    >
                      <FaArrowRight className="w-4 h-4 text-black lg:group-hover:text-indigo-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-3">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Right Description */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            {/* Label */}
            {/* <span className="text-sm font-medium bg-white/50 px-3 py-1 rounded">
             
            </span> */}

              <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full mb-3">
               How It Works
            </span> 


            

            {/* Heading */}
            <h2
              className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-2 text-[#050d20]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Integrating India’s Hardware Ecosystem
            </h2>

            {/* Description */}
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Byyizzy connects suppliers, manufacturers, and local hardware
              stores to create a transparent and scalable procurement network
              that drives efficiency and growth.
            </p>
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              With AI-driven sourcing, e-auction platforms, and hyper-local
              delivery, we simplify complex industrial supply chains and deliver
              measurable value.
            </p>

            {/* Counters Section */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {[
                { value: 2500, label: "Suppliers Onboarded", icon: "🏭" },
                { value: 50000, label: "Products Delivered", icon: "📦" },
                { value: 120, label: "Cities Connected", icon: "🌆" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="  rounded-1xl p-6 text-center shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-3 text-4xl">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold" id={`counter-${index}`}>
                    {item.value.toLocaleString()}+
                  </h3>
                  <p className="text-gray-700 mt-1 text-sm font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-[#067afeef] text-white font-semibold rounded shadow-lg transition duration-300 hover:bg-[#056ae0] hover:shadow-xl mt-6">
              JOIN THE NETWORK →
            </button>
          </div>
          {/* Left Cards */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            {[
              {
                title: "Fastest Delivery of Industrial Products",
                description:
                  "Byyizzy ensures on-time and in-full delivery (OTIF) through optimized inventory and hyper-local fulfillment centers.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-truck"
                  >
                    <path d="M10 17h4v-6H2v6h2" />
                    <path d="M16 17h3v-3h5l2 3v4H16z" />
                    <circle cx="6" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                  </svg>
                ),
              },
              {
                title: "Easy Credit & EMI Facility",
                description:
                  "Providing flexible payment solutions for B2C customers to simplify industrial product purchases.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Optimized Inventory Model",
                description:
                  "Reducing dead inventory and improving margins with data-driven demand forecasting and local engagement.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-package"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4-7 4A2 2 0 0 0 5 8v8a2 2 0 0 0 1 1.73l7 4 7-4A2 2 0 0 0 21 16z" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-5 rounded-2xl dark:bg-[#0d1117]/70 backdrop-blur-xl p-6 border bg-[#eff3fa] border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.25)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Circle Container */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-inner shadow-[#067afe40] group-hover:shadow-[#067afe80] transition duration-500 overflow-hidden">
                  {/* Icon Wrapper (hidden until hover) */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full  text-[#067afe]  overflow-hidden">
                    <div className="transform  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)]">
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[#050d20] group-hover:text-[#067afe] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Glow Line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#067afe] to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#eff3fa] mx-auto py-16 px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          <span className="bg-[#067afe] text-white py-1 rounded-full mb-5">
            Product Categories
          </span>
          <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
            Our Innovative Products
          </h2>
        </div>

        {/* Category Grid */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SHOP_BY_CATEGORIES.slice(0, 16).map((category, index) => {
            const slug = slugify(category.title);
            return(
<>
            <Link href={`/shop/${slug}?sub=all`}>
            <div
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="group relative flex items-center p-4 bg-white  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] lg:min-h-[8rem]">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0 bg-white dark:bg-gray-800">
                  <img
                    src={category.images}
                    alt={category.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                <p className="font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] truncate w-[200px] !m-0">
                  {category.title}
                </p>
              </div>
            </div>
            </Link>
            </>
            )
            
            
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

      {/* services pages detail */}

      <section>
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
                Our Services
              </span>
              <h2 className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]">
                Manufacturing Products
              </h2>
            </div>

            <div className="relative space-y-12 md:space-y-16">
              {/* Product 1 - Content Left, Image Right */}
              <div className="sticky top-32 bg-[#067afeef] rounded-xl p-2 md:p-8  md:flex md:items-center mb-3">
                <div className="w-full md:w-1/2 text-white md:pr-6">
                  {/* <p className="section-tagline">
                    Procurement as a Service (PaaS)
                  </p> */}
                  <h3 className="mb-4 text-xl font-semibold">
                    Procurement as a Service (PaaS)
                  </h3>
                  <p className="mb-6">
                    Automate your Source-to-Pay process— for Just <b>*1.5%</b>{" "}
                    of Your Spend
                  </p>
                  <ul className="mb-6 space-y-4">
                    {[
                      "Global Sourcing Expertise — Access verified suppliers worldwide  ",
                      "Local Fulfillment Network — Fast, reliable, and cost-effective delivery",
                      "AI-Powered Digital Ecosystem — Automate RFQs, quotes & analytics",
                      "Full Visibility & Control — Track spend, performance, and savings in real time",
                      "Zero Tech Investment — End-to-end procurement support with transparent pricing",
                    ].map((item) => (
                      <li className="flex items-center gap-x-2" key={item}>
                        <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
                          <svg
                            stroke="#067afe"
                            fill="#067afe"
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
                    <Link href="/services/paas">
                    <li className="px-3 py-1 border border-white rounded-full text-white">
                      More Details
                    </li>
                    </Link>

                    <Link href="/contact">
                      <li className="px-3 py-1 border border-white rounded-full text-white">
                        Contact us
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-procurement-list-illustration-svg-download-png-9251758.png"
                    alt="E2E Procurement"
                    className="w-full rounded-lg "
                  />
                </div>
              </div>

              {/* Product 2 - Image Left, Content Right */}
              <div className="sticky top-32 bg-[#067afef1] rounded-xl p-8 md:flex md:items-center mb-3">
                <div className="w-full md:w-1/2 md:pr-6">
                  <img
                    src="https://simfoni.com/wp-content/uploads/2022/06/Source-to-Pay.png.webp"
                    alt="Source-to-Pay"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white md:pl-6">
                  {/* <p className="section-tagline">Source-to-Pay</p> */}
                  <h3 className="mb-4 text-xl font-semibold">
                    Byyizzy Powered Hardware Store Chain
                  </h3>
                  <p className="mb-6">
                    Building India’s First Hardware Store Chain!
                  </p>
                  <ul className="mb-6 space-y-4">
                    {[
                      "Technology-driven chain of Hyperlocal Hardware Stores  ",
                      "Best Prices, Smarter Technology, Reducing unsold inventory and Higher profits",
                      "Great In-Store Experience, Online Convenience",
                      "Integrated B2B & B2C ecosystem",
                      "Easy credit & EMI Facility to B2C Customer",
                    ].map((item) => (
                      <li className="flex items-center gap-x-2" key={item}>
                        <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
                          <svg
                            stroke="#067afe"
                            fill="#067afe"
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
                    <Link href="/services/HardwareStoreChain">
                    <li className="px-3 py-1 border border-white rounded-full text-white">
                      More Details
                    </li>
                    </Link>
                    <Link href="/contact">
                      <li className="px-3 py-1 border border-white rounded-full text-white">
                        Contact us
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              {/* Product 3 - Content Left, Image Right Manufacturing as a Service (MaaS)   */}
              <div className="sticky top-32 bg-[#067afe] rounded-xl p-8 md:flex md:items-center mb-3">
                <div className="w-full md:w-1/2 text-white md:pr-6">
                  {/* <p className="section-tagline">
                    Procurement as a Service (PaaS)
                  </p> */}
                  <h3 className="mb-4 text-xl font-semibold">
                    Manufacturing as a Service (MaaS)
                  </h3>
                  <p className="mb-6">
                    Streamline Your Customized and Non-Standard Spare Parts
                    Supply Chain
                  </p>
                  <ul className="mb-6 space-y-4">
                    {[
                      "Bridging SMEs and Large Clients",
                      "AI-Driven Production Management",
                      "Real-Time Visibility & Control",
                      "Global Manufacturing Network",
                      "Access to best Production Capabilities",
                    ].map((item) => (
                      <li className="flex items-center gap-x-2" key={item}>
                        <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
                          <svg
                            stroke="#067afe"
                            fill="#067afe"
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
                    <Link href="/services/maas"> 
                    <li className="px-3 py-1 border border-white rounded-full text-white">
                      More Details
                    </li>
                    </Link>
                    <Link href="/contact">
                      <li className="px-3 py-1 border border-white rounded-full text-white">
                        Contact us
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <img
                    src="https://www.sagesoftware.co.in/wp-content/uploads/2025/05/ERP-Implementation-process.png"
                    alt="Procurement as a Service"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Product 4 - Image Left, Content Right Industrial Products Aggregation */}
              <div className="sticky top-32 bg-[#067afef1] rounded-xl p-8 md:flex md:items-center">
                <div className="w-full md:w-1/2 md:pr-6">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/hardware-store-illustration-svg-download-png-3811077.png"
                    alt="Chain of Hardware Stores"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white md:pl-6">
                  {/* <p className="section-tagline"></p> */}
                  <h3 className="mb-4 text-xl font-semibold">
                    Industrial Products Aggregation
                  </h3>
                  <p className="mb-6">
                    Streamline your procurement. Create value. Generate savings
                    from tail-spend.
                  </p>
                  <ul className="mb-6 space-y-4">
                    {[
                      "Fastest Delivery – within just 24 hours! (Via Byyizzy-powered hardware stores)  ",
                      "Transparent Pricing",
                      "100% Process Visibility",
                      "Local Business Engagement",
                      "Integrated B2B & B2C Ecosystem",
                      "End-to-End Tracking & Catalog-Based Buying",
                      "Supporting Local, Saving Community Wealth",
                    ].map((item) => (
                      <li className="flex items-center gap-x-2" key={item}>
                        <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
                          <svg
                            stroke="#067afe"
                            fill="#067afe"
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
                    <Link href="/services/IndustrialProductsAggregation"> 
                    <li className="px-3 py-1 border border-white rounded-full text-white">
                      More Details
                    </li>
                    </Link>
                    <Link href="/contact">
                      <li className="px-3 py-1 border border-white rounded-full text-white">
                        Contact us
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-28 bg-[#eff3fa] dark:bg-gray-900"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <div
            className="text-center mb-16"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <span
              className="inline-block bg-[#067afe] text-white px-4 py-1 rounded-full mb-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Our Clients
            </span>
            <h2
              className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Trusted <br className="hidden lg:block" />
              Brands
            </h2>
            <div className="flex justify-center">
              <p
                className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                We take pride in collaborating with industry-leading clients who
                trust us for quality, reliability, and innovation.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-6 overflow-hidden">
            {/* First Marquee - Left to Right */}
            <div className="flex w-max animate-marquee-ltr gap-6">
              {brandLogo.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100} // stagger animation
                >
                  <img
                    src={item.logo}
                    alt={`brand-${item.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}

              {brandLogo.map((item, index) => (
                <div
                  key={`dup-${item.id}`}
                  className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <img
                    src={item.logo}
                    alt={`brand-dup-${item.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>

            {/* Second Marquee - Right to Left */}
            <div className="flex w-max animate-marquee-rtl gap-6">
              {brandLogo1.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <img
                    src={item.logo}
                    alt={`brand1-${item.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}

              {brandLogo1.map((item, index) => (
                <div
                  key={`dup-${item.id}`}
                  className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <img
                    src={item.logo}
                    alt={`brand1-dup-${item.id}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-ltr {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          @keyframes marquee-rtl {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee-ltr {
            display: flex;
            width: max-content;
            animation: marquee-ltr 30s linear infinite;
          }
          .animate-marquee-rtl {
            display: flex;
            width: max-content;
            animation: marquee-rtl 30s linear infinite;
          }
        `}</style>
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
      <Footer />
      <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
    </div>
  );
}
