import type { Metadata } from "next";
import Image from "next/image";
import { Inter_Tight, Inter, Onest, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import { FaArrowRight } from "react-icons/fa";
import LetterAnimation from "@/components/LetterAnimation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoBanner from "@/components/VideoBanner";
import Loader from "@/components/Loader";
import { CiSettings } from "react-icons/ci";
import { TbFileInvoice, TbPackages, TbTools } from "react-icons/tb";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights
  variable: "--font-inter-tight",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

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
      <Header />
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
                    SERVICE
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
            SERVICE
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
          >
           Explore aggregation, hardware, procurement, and manufacturing solutions tailored for you.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 ">
        <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
          <div className="container mx-auto">
            <div
              className="mx-auto mb-12 max-w-2xl text-center"
              data-aos="fade-up"
            >
              <span className="bg-[#067afe] text-white px-4 py-1 rounded-full mb-5">
                Product Categories
              </span>
              <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
                Our Innovative Products
              </h2>
            </div>
            <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={600}
                data-aos-once="true"
              >
                     <div className="inline-flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow-md mb-3">
      <TbPackages className="h-8 w-8" />
    </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                   Industrial Products Aggregation  
                </h3>
                <p>
                 Streamline your procurement. Create value. Generate savings from tail-spend.  
                </p>
                <Link
                  className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#067afe]"
                  href="/services/service-details/"
                >
                  read more{/* */}{" "}
                  <svg
                    className="inline-block relative -top-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="#067afe"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                    />
                  </svg>
                </Link>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={600}
                data-aos-once="true"
              >
                      <div className="inline-flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow-md mb-3">
      <TbTools className="h-8 w-8" />
    </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                  Hardware Store Chain  
                </h3>
                <p>
                 Building India’s First Integrated Industrial and Hardware Network for B2B and B2C  
                </p>
                <Link
                  className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#067afe]"
                  href="/services/service-details/"
                >
                  read more{/* */}{" "}
                  <svg
                    className="inline-block relative -top-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="#067afe"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                    />
                  </svg>
                </Link>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={600}
                data-aos-once="true"
              >
                     <div className="inline-flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow-md mb-3">
      <TbFileInvoice className="h-8 w-8" />
    </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                  Procurement as a Service (PaaS)  
                </h3>
                <p>
                 Automate your Source-to-Pay process— for Just *1.5% of Your Spend   
                </p>
                <Link
                  className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#067afe]"
                  href="/services/service-details/"
                >
                  read more{/* */}{" "}
                  <svg
                    className="inline-block relative -top-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="#067afe"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                    />
                  </svg>
                </Link>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={600}
                data-aos-once="true"
              >
                  <div className="inline-flex h-15 w-15 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow-md mb-3">
      <CiSettings className="h-8 w-8" />
    </div>
              
                <h3 className="text-black text-[20px] md:text-[21px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                 Manufacturing as a Service (MaaS)  
                </h3>
                <p>
                  Streamline Your Customized and Non-Standard Spare Parts Supply Chain 
                </p>
                <Link
                  className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#067afe]"
                  href="/services/service-details/"
                >
                  read more{/* */}{" "}
                  <svg
                    className="inline-block relative -top-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="#067afe"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                    />
                  </svg>
                </Link>
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
