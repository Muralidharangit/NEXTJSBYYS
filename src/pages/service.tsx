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
            Learn what drives our team and how we turn visions into lasting
            structures.
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
                <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    className="inline-block"
                  >
                    <g clipPath="url(#clip0_267_145)">
                      <path
                        d="M31.344 0.00401357C25.0973 -0.107986 17.9733 3.15735 13.464 8.22268C9.15468 8.30401 4.95868 10.0707 1.86935 13.16C1.68935 13.3373 1.62535 13.6027 1.70401 13.8427C1.78401 14.084 1.99201 14.2587 2.24268 14.2947L7.38135 15.0307L6.74668 15.7413C6.51068 16.0053 6.52268 16.4067 6.77335 16.6573L15.3427 25.2267C15.472 25.356 15.6427 25.4213 15.8147 25.4213C15.9733 25.4213 16.132 25.3653 16.2587 25.252L16.9693 24.6173L17.7053 29.756C17.7413 30.0067 17.9387 30.1907 18.1773 30.2707C18.2387 30.2907 18.3027 30.3 18.368 30.3C18.5573 30.3 18.7507 30.2173 18.884 30.0853C21.9307 27.0387 23.6973 22.8427 23.7787 18.5333C28.8493 14.0147 32.1413 6.89335 31.996 0.65468C31.9867 0.300014 31.7 0.0133469 31.344 0.00401357ZM25.2 11.5133C24.5507 12.1627 23.6973 12.488 22.8427 12.488C21.988 12.488 21.1347 12.1627 20.4853 11.5133C19.1867 10.2133 19.1867 8.09868 20.4853 6.79868C21.7853 5.49868 23.9 5.49868 25.2 6.79868C26.5 8.09868 26.5 10.2147 25.2 11.5133Z"
                        fill="#067afe"
                      />
                      <path
                        d="M3.63208 22.54C2.20541 23.9667 0.246743 30.412 0.0280765 31.1413C-0.0425901 31.376 0.0227432 31.6307 0.194743 31.804C0.322743 31.932 0.492077 32 0.666743 32C0.730743 32 0.794743 31.9907 0.858743 31.972C1.58808 31.7533 8.03341 29.7947 9.46008 28.368C11.0667 26.7613 11.0667 24.1467 9.46008 22.54C7.85208 20.9333 5.23874 20.9347 3.63208 22.54Z"
                        fill="#067afe"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_267_145">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                  Marketing Automation
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
                <a
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
                </a>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={600}
                data-aos-once="true"
              >
                <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    className="inline-block"
                  >
                    <g clipPath="url(#clip0_267_148)">
                      <path
                        d="M31.0621 5.6253H18.8117L24.0618 1.68766C24.4766 1.37729 24.5608 0.789549 24.2495 0.375741C23.9392 -0.0408162 23.3514 -0.122315 22.9376 0.188056L15.9998 5.39137L9.06202 0.188056C8.64821 -0.120503 8.06134 -0.0398787 7.7501 0.375741C7.43885 0.789549 7.52304 1.37729 7.93778 1.68766L13.1879 5.6253H0.937489C0.419308 5.6253 0 6.04461 0 6.56279V27.3126C0 27.8307 0.419308 28.25 0.937489 28.25H6.23674L4.08714 30.3996C3.72096 30.7658 3.72096 31.3591 4.08714 31.7253C4.45332 32.0915 5.04663 32.0915 5.41281 31.7253L8.88808 28.25H23.1115L26.5868 31.7253C26.953 32.0915 27.5463 32.0915 27.9125 31.7253C28.2787 31.3591 28.2787 30.7658 27.9125 30.3996L25.7628 28.25H31.0621C31.5803 28.25 31.9996 27.8307 31.9996 27.3125V6.56273C31.9996 6.04461 31.5803 5.6253 31.0621 5.6253ZM16.5198 16.7802L14.8865 17.8697L15.271 19.7931C15.3323 20.1008 15.2362 20.4184 15.0146 20.64C14.7931 20.8625 14.4736 20.9559 14.1678 20.8964L12.4228 20.5476L11.2574 23.815C11.1246 24.1886 10.7712 24.4376 10.3748 24.4376C9.97838 24.4376 9.62501 24.1886 9.49226 23.815L8.32684 20.5476L6.58186 20.8964C6.27424 20.9568 5.95749 20.8625 5.735 20.64C5.51344 20.4184 5.41731 20.1008 5.47862 19.7931L5.86312 17.8697L4.22983 16.7802C3.96889 16.6062 3.81233 16.3132 3.81233 16.0002C3.81233 15.6871 3.96889 15.3941 4.22983 15.2202L5.86312 14.1307L5.47862 12.2072C5.41731 11.8996 5.51344 11.5819 5.735 11.3604C5.95656 11.1388 6.2733 11.0436 6.58186 11.104L8.50534 11.4885L9.59482 9.85519C9.9427 9.33332 10.807 9.33332 11.1549 9.85519L12.2444 11.4885L14.1678 11.104C14.4745 11.0445 14.7931 11.1388 15.0147 11.3604C15.2363 11.5819 15.3324 11.8996 15.2711 12.2072L14.8866 14.1307L16.5199 15.2202C16.7808 15.3941 16.9374 15.6871 16.9374 16.0002C16.9373 16.3133 16.7807 16.6062 16.5198 16.7802ZM27.2497 20.6876H19.7498C19.2316 20.6876 18.8123 20.2683 18.8123 19.7501C18.8123 19.232 19.2316 18.8127 19.7498 18.8127H27.2497C27.7679 18.8127 28.1872 19.232 28.1872 19.7501C28.1872 20.2683 27.7679 20.6876 27.2497 20.6876ZM27.2497 16.9377H19.7498C19.2316 16.9377 18.8123 16.5184 18.8123 16.0002C18.8123 15.482 19.2316 15.0627 19.7498 15.0627H27.2497C27.7679 15.0627 28.1872 15.482 28.1872 16.0002C28.1872 16.5184 27.7679 16.9377 27.2497 16.9377ZM27.2497 13.1877H19.7498C19.2316 13.1877 18.8123 12.7684 18.8123 12.2502C18.8123 11.732 19.2316 11.3127 19.7498 11.3127H27.2497C27.7679 11.3127 28.1872 11.732 28.1872 12.2502C28.1872 12.7684 27.7679 13.1877 27.2497 13.1877Z"
                        fill="#067afe"
                      />
                      <path
                        d="M12.9256 14.3788L13.1572 13.218L11.9963 13.4496C11.6191 13.5256 11.2428 13.3654 11.0323 13.0504L10.3749 12.0653L9.71753 13.0504C9.50697 13.3644 9.12428 13.5247 8.75348 13.4496L7.59262 13.218L7.82424 14.3788C7.89842 14.7515 7.74093 15.1323 7.42505 15.3429L6.43994 16.0003L7.42505 16.6576C7.74093 16.8682 7.89836 17.2491 7.82424 17.6217L7.59262 18.7825L8.75348 18.5509C9.1981 18.4594 9.66153 18.7089 9.82003 19.1552L10.3748 20.7097L10.9296 19.1552C11.0853 18.7166 11.5403 18.4548 11.9962 18.5509L13.1571 18.7825L12.9254 17.6217C12.8512 17.2491 13.0087 16.8682 13.3246 16.6576L14.3097 16.0003L13.3247 15.3428C13.0089 15.1323 12.8514 14.7514 12.9256 14.3788Z"
                        fill="#067afe"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_267_148">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                  Display Advertising
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
                <a
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
                </a>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={600}
                data-aos-once="true"
              >
                <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    className="inline-block"
                  >
                    <g clipPath="url(#clip0_267_152)">
                      <path
                        d="M12.5562 20.2413L12.0269 27.6867C12.7842 27.6867 13.1122 27.3613 13.5056 26.9707L17.0562 23.5773L24.4136 28.9653C25.7629 29.7173 26.7136 29.3213 27.0776 27.724L31.9069 5.09468L31.9082 5.09335C32.3362 3.09868 31.1869 2.31868 29.8722 2.80801L1.48557 13.676C-0.451763 14.428 -0.42243 15.508 1.15624 15.9973L8.41357 18.2547L25.2709 7.70668C26.0642 7.18135 26.7856 7.47201 26.1922 7.99735L12.5562 20.2413Z"
                        fill="#067afe"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_267_152">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-black text-[20px] md:text-[21px] font-semibold mb-[10px]">
                  Paid Social Media
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
                <a
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
                </a>
              </div>
              <div
                className="bg-white rounded-[20px] py-[50px] px-[35px] border border-[#FAF4F4] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={600}
                data-aos-once="true"
              >
                <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    className="inline-block"
                  >
                    <g clipPath="url(#clip0_267_154)">
                      <path
                        d="M8.6488 5.45081H6.24707V7.6728C6.24707 8.33495 6.78578 8.87366 7.44793 8.87366C8.11009 8.87366 8.6488 8.33495 8.6488 7.6728V5.45081Z"
                        fill="#067afe"
                      />
                      <path
                        d="M12.9247 7.67286V5.45081H10.5229V7.6728C10.5229 8.33495 11.0617 8.87366 11.7239 8.87366C12.386 8.87372 12.9247 8.33502 12.9247 7.67286Z"
                        fill="#067afe"
                      />
                      <path
                        d="M23.615 19.2139V10.6014C23.1594 10.4553 22.7501 10.2055 22.4142 9.88007C21.8603 10.4167 21.1064 10.748 20.2761 10.748C19.4459 10.748 18.6919 10.4167 18.1381 9.88007C17.5843 10.4167 16.8304 10.748 16.0001 10.748C15.1699 10.748 14.416 10.4167 13.8621 9.88007C13.3083 10.4167 12.5544 10.748 11.7241 10.748C10.8939 10.748 10.14 10.4167 9.58612 9.88007C9.2502 10.2056 8.84087 10.4553 8.38525 10.6014V19.214H11.3162V14.2145C11.3162 13.697 11.7358 13.2774 12.2533 13.2774H19.7469C20.2644 13.2774 20.684 13.697 20.684 14.2145V19.214L23.615 19.2139Z"
                        fill="#067afe"
                      />
                      <path
                        d="M13.1904 15.1516H18.8098V19.2139H13.1904V15.1516Z"
                        fill="#067afe"
                      />
                      <path
                        d="M17.201 7.67286V5.45081H14.7993V7.6728C14.7993 8.33495 15.338 8.87366 16.0002 8.87366C16.6623 8.87372 17.201 8.33502 17.201 7.67286Z"
                        fill="#067afe"
                      />
                      <path
                        d="M24.5519 8.87372C25.2141 8.87372 25.7528 8.33502 25.7528 7.67286V5.45081H23.3511V7.6728C23.351 8.33502 23.8897 8.87372 24.5519 8.87372Z"
                        fill="#067afe"
                      />
                      <path
                        d="M25.5717 29.5189H21.5832V26.2356H10.5573V29.5189H6.42831C5.91078 29.5189 5.49121 29.9385 5.49121 30.456C5.49121 30.9735 5.91078 31.3931 6.42831 31.3931H25.5717C26.0893 31.3931 26.5088 30.9735 26.5088 30.456C26.5088 29.9385 26.0892 29.5189 25.5717 29.5189Z"
                        fill="#067afe"
                      />
                      <path
                        d="M32 21.0881H0V23.4055C0 23.9334 0.427943 24.3614 0.955905 24.3614H31.0442C31.5721 24.3614 32.0001 23.9334 32.0001 23.4055L32 21.0881Z"
                        fill="#067afe"
                      />
                      <path
                        d="M21.477 7.67286V5.45081H19.0752V7.6728C19.0752 8.33495 19.6139 8.87366 20.2761 8.87366C20.9383 8.87366 21.477 8.33502 21.477 7.67286Z"
                        fill="#067afe"
                      />
                      <path
                        d="M31.0441 0.606934H0.955905C0.427943 0.606934 0 1.03488 0 1.56278V19.2139H6.51098V10.6014C5.27232 10.2041 4.37301 9.04178 4.37301 7.67286V4.75117C4.37301 4.10251 4.89885 3.57667 5.54751 3.57667H26.4525C27.1011 3.57667 27.627 4.10251 27.627 4.75123V7.67293C27.627 9.04184 26.7277 10.2042 25.489 10.6015V19.214H32V1.56278C32 1.03488 31.572 0.606934 31.0441 0.606934Z"
                        fill="#067afe"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_267_154">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-black text-[20px] md:text-[21px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                  Native Advertising
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
                <a
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
                </a>
              </div>
            </div>
            <div
              className="text-center max-w-[650px] mx-auto mt-[30px] md:mt-[40px] lg:mt-[40px] xl:mt-[60px] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={600}
              data-aos-once="true"
            >
              <p>
                Transforming your brand's online presence and generating
                meaningful results is our top priority at <strong>Adla</strong>.
                As a leading paid search ad agency.
              </p>

              {/* CTA Button */}
              <button className="px-6 py-3 bg-[#067afeef] text-white font-semibold rounded shadow-lg transition duration-300 hover:bg-[#056ae0] hover:shadow-xl mt-6">
                JOIN THE NETWORK →
              </button>
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
