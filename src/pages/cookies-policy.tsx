
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


export default function CookiesPolicy() {
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
                    <Link
                      href="/"
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      Home
                    </Link>
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
                   Cookies Policy
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
              Cookies Policy
            </h2>
          </div>
        </section>

 

  {/* SOLUTION SECTION */}
        <section>
          <div className="">
            <div className="container mx-auto">
              {/* Our Solution */}
              <div className="max-w-12xl mx-auto mb-16 p-10 mb-0">
           
                <p
                  className="relative bg-yellow-50/80 p-6 sm:p-8 rounded-lg shadow-lg text-gray-700 text-lg sm:text-xl leading-relaxed font-sans border-l-4 border-yellow-400"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundSize: "100% 25px",
                  }}
                >
Cookies Policy for Byyizzy E-Commerce Marketplace <br/>Effective Date: 01/11/2025
                
                </p>
              </div>


{/* ============================================== */}

{/* Intro */}
<div className="my-3">
 
  <p className="text-gray-700 mt-2">
    At Byyizzy Business Solutions Private Limited (&quot;Byyizzy,&quot; &quot;we,&quot; &quot;us,&quot; or
    &quot;our&quot;), we use cookies and similar tracking technologies to enhance your
    experience on our e-commerce marketplace platform (the &quot;Platform&quot;). This
    Cookies Policy explains what cookies are, how we use them, and the choices
    you have regarding their use.
  </p>
</div>
{/* 1. What Are Cookies? */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    1. What Are Cookies?
  </h3>
  <p className="text-gray-700">
    Cookies are small text files that are placed on your device (computer,
    tablet, or mobile) when you visit a website. Cookies help the website
    recognize your device and store certain information about your preferences
    or past actions.
  </p>
</div>

{/* 2. How We Use Cookies */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    2. How We Use Cookies
  </h3>
  <p className="text-gray-700 mb-2">
    Byyizzy uses cookies for various purposes, including:
  </p>

  <div className="px-6">
    {/* 2.1 Essential Cookies */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    2.1 Essential Cookies
  </h4>
  <p className="text-gray-700 mb-2">
    These cookies are necessary for the operation of our Platform. They enable
    you to navigate the site and use its features, such as accessing secure
    areas.
  </p>
  </div>

<div className="px-4">
  {/* 2.2 Performance Cookies */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    2.2 Performance Cookies
  </h4>
  <p className="text-gray-700 mb-2">
    These cookies collect information about how you use our Platform, such as
    which pages you visit most often and whether you receive error messages.
    This information helps us improve the performance of our site.
  </p>
</div>


  <div className="px-4">
  {/* 2.3 Functional Cookies */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    2.3 Functional Cookies
  </h4>
  <p className="text-gray-700 mb-2">
    These cookies allow our Platform to remember choices you make (such as your
    username, language, or region) and provide enhanced, more personalized
    features.
  </p>
  </div>

<div className="px-4">
 {/* 2.4 Advertising Cookies */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    2.4 Advertising Cookies
  </h4>
  <p className="text-gray-700">
    These cookies are used to deliver advertisements relevant to you and your
    interests, and to help measure the effectiveness of our advertising campaigns.
  </p>
</div>
 



</div>

{/* 3. Third-Party Cookies */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    3. Third-Party Cookies
  </h3>
  <p className="text-gray-700">
    In addition to our own cookies, we may use third-party cookies provided by
    trusted partners to help us analyze how our Platform is used and to deliver
    targeted advertisements. These third-party cookies are governed by the
    privacy and cookie policies of the respective third parties.
  </p>
</div>

{/* 4. Managing Cookies */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    4. Managing Cookies
  </h3>
  <p className="text-gray-700 mb-2">
    You have the right to decide whether to accept or reject cookies. You can
    manage your cookie preferences in the following ways:
  </p>

<div className="px-4">


  {/* 4.1 Browser Settings */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    4.1 Browser Settings
  </h4>
  <p className="text-gray-700 mb-2">
    Most web browsers allow you to control cookies through their settings. You
    can choose to accept or reject cookies, delete existing cookies, and set
    preferences for future cookies. Please refer to your browser&apos;s help
    section for instructions.
  </p>
</div>


<div className="px-4">

  {/* 4.2 Cookie Consent Banner */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    4.2 Cookie Consent Banner
  </h4>
  <p className="text-gray-700 mb-2">
    When you visit our Platform for the first time, you will see a cookie
    consent banner that allows you to accept or reject non-essential cookies.
    You can change your preferences at any time via the cookie settings on our
    Platform.
  </p>



</div>

<div className="px-4">
  {/* 4.3 Opting Out of Advertising Cookies */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    4.3 Opting Out of Advertising Cookies
  </h4>
  <p className="text-gray-700">
    You can opt out of certain targeted advertising cookies through:
  </p>
  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-1">
    <li>Network Advertising Initiative</li>
    <li>Digital Advertising Alliance</li>
    <li>Your Online Choices</li>
  </ul>
</div>


</div>

{/* 5. Changes to This Cookies Policy */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    5. Changes to This Cookies Policy
  </h3>
  <p className="text-gray-700">
    We may update this Cookies Policy from time to time. We will notify you of
    any changes by posting the new Cookies Policy on our Platform. Your
    continued use of the Platform after such modifications constitutes your
    acknowledgment and consent to the updated policy.
  </p>
</div>

{/* 6. Contact Us */}
<div className="my-3 mb-20">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    6. Contact Us
  </h3>
  <p className="text-gray-700 font-semibold">If you have any questions or concerns about this Cookies Policy or our use of cookies, please contact us at:</p>
  <p className="text-gray-700 font-semibold">
    Byyizzy Business Solutions Private Limited
  </p>
  <p className="text-gray-700 mb-0">
    45, VANIDASAN STREET, Saram(Py), Pondicherry, India, 605013
  </p>
  <p className="text-gray-700 mb-0">
    Email:{" "}
    <a href="mailto:support@byyizzy.com mb-0" className="text-blue-600 hover:underline">
      support@byyizzy.com
    </a>
    {", "}
    <a href="mailto:care@byyizzy.com mb-0" className="text-blue-600 hover:underline">
      care@byyizzy.com
    </a>
  </p>
</div>

















































{/* ========================================= */}




            </div>
          </div>
        </section>




        {/* Contact Us */}
        {/* <CallToActionSection/> */}

        {/* <Footer /> */}
        <Script
          src="/assets/js/scroll-trigger.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
      </>
    );
}
