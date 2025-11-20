
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


export default function PrivacyPolicy() {
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
              className=" text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-medium leading-tight lg:leading-[50px] max-w-7xl mx-auto aos-init aos-animate w-full"
            >
              Privacy Policy
            </h2>
            <p>
              for Byyizzy E-Commerce Marketplace Effective Date: 01/11/2025
                
            </p>
          </div>
        </section>

 

  {/* SOLUTION SECTION */}
        <section>
          <div className="">
            <div className="container mx-auto">
              {/* Our Solution */}
              {/* <div className="max-w-12xl mx-auto mb-16 p-10 mb-0">
           
                <p
                  className="relative bg-yellow-50/80 p-6 sm:p-8 rounded-lg shadow-lg text-gray-700 text-lg sm:text-xl leading-relaxed font-sans border-l-4 border-yellow-400"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundSize: "100% 25px",
                  }}
                >
                    Privacy Policy for Byyizzy E-Commerce Marketplace <br/>Effective Date: 01/11/2025
                
                </p>
              </div> */}


{/* ============================================== */}
{/* Intro */}
<div className="mt-20">

  <p className="text-gray-700 mt-2">
    At Byyizzy Business Solutions Private Limited (&quot;Byyizzy,&quot; &quot;we,&quot; &quot;us,&quot; or
    &quot;our&quot;), we are committed to protecting your privacy. This Privacy Policy explains how
    we collect, use, disclose, and safeguard your information when you use our e-commerce
    marketplace platform (the &quot;Platform&quot;). If you do not agree with the terms of this
    Privacy Policy, please do not access the Platform.
  </p>
</div>

{/* 1. Information We Collect */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    1. Information We Collect
  </h3>

  {/* 1.1 Personal Information */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    1.1 Personal Information
  </h4>
  <p className="text-gray-700 mb-1">
    When you register on our Platform, purchase products, or interact with us, we may
    collect personal information that can identify you, such as:
  </p>
  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
    <li>Name</li>
    <li>Email address</li>
    <li>Phone number</li>
    <li>Shipping address</li>
    <li>Billing address</li>
    <li>Payment information (such as credit/debit card details)</li>
  </ul>

  {/* 1.2 Non-Personal Information */}
  <h4 className="text-base font-semibold text-gray-900 mb-1">
    1.2 Non-Personal Information
  </h4>
  <p className="text-gray-700 mb-1">
    We may also collect non-personal information that does not identify you individually, including:
  </p>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>Browser type</li>
    <li>Device type</li>
    <li>IP address</li>
    <li>Pages visited on our Platform</li>
    <li>Time and date of visits</li>
  </ul>
</div>

{/* 2. How We Use Your Information */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    2. How We Use Your Information
  </h3>
  <p className="text-gray-700 mb-2">
    Byyizzy uses the information we collect for the following purposes:
  </p>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>To process transactions and manage your orders.</li>
    <li>To communicate with you about your account, orders, or inquiries.</li>
    <li>To improve our Platform and enhance user experience.</li>
    <li>
      To send you promotional materials, newsletters, and other information that may be of
      interest to you (you may opt out at any time).
    </li>
    <li>To comply with legal obligations and resolve disputes.</li>
  </ul>
</div>

{/* 3. Disclosure of Your Information */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    3. Disclosure of Your Information
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>
      <span className="font-semibold">Service Providers:</span> We may share your information
      with third-party vendors who perform services on our behalf, such as payment
      processing, shipping, and marketing.
    </li>
    <li>
      <span className="font-semibold">Legal Requirements:</span> We may disclose your information
      if required by law or in response to valid requests by public authorities.
    </li>
    <li>
      <span className="font-semibold">Business Transfers:</span> In connection with a merger,
      acquisition, or sale of assets, your information may be transferred as part of that
      transaction.
    </li>
  </ul>
</div>

{/* 4. Data Security */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    4. Data Security
  </h3>
  <p className="text-gray-700">
    We implement reasonable technical and organizational measures to protect your
    information from unauthorized access, use, or disclosure. However, no method of
    transmission over the internet or electronic storage is 100% secure, and we cannot
    guarantee absolute security.
  </p>
</div>

{/* 5. Your Rights */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    5. Your Rights
  </h3>
  <p className="text-gray-700 mb-2">
    Depending on your jurisdiction, you may have the right to:
  </p>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>Access the personal information we hold about you.</li>
    <li>Request correction of inaccurate or incomplete personal information.</li>
    <li>Request deletion of your personal information, subject to legal obligations.</li>
    <li>
      Object to or request restriction of the processing of your personal information.
    </li>
  </ul>
  <p className="text-gray-700 mt-2">
    To exercise these rights, please contact us using the details provided below.
  </p>
</div>

{/* 6. Cookies and Tracking Technologies */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    6. Cookies and Tracking Technologies
  </h3>
  <p className="text-gray-700">
    We use cookies and similar tracking technologies to enhance your experience on our
    Platform. Cookies are small data files stored on your device. You may choose to accept
    or decline cookies through your browser settings; however, disabling cookies may affect
    certain features of the Platform.
  </p>
</div>

{/* 7. Third-Party Links */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    7. Third-Party Links
  </h3>
  <p className="text-gray-700">
    Our Platform may contain links to third-party websites or services. We do not control
    these third-party sites and are not responsible for their privacy practices. We
    encourage you to review the privacy policies of any third-party websites you visit.
  </p>
</div>

{/* 8. Changes to This Privacy Policy */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    8. Changes to This Privacy Policy
  </h3>
  <p className="text-gray-700">
    We may update this Privacy Policy from time to time. Any changes will be posted on the
    Platform. Your continued use of the Platform after such changes constitutes your
    acknowledgment of the updated Privacy Policy and your consent to be bound by it.
  </p>
</div>

{/* 9. Contact Us */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    9. Contact Us
  </h3>
  <p className="text-gray-700 font-semibold">
    Byyizzy Business Solutions Private Limited
  </p>
  <p className="text-gray-700">
    45, VANIDASAN STREET, Saram(Py), Pondicherry, India, 605013
  </p>
  <p className="text-gray-700">
    Email:{" "}
    <a
      href="mailto:support@byyizzy.com"
      className="text-blue-600 hover:underline"
    >
      support@byyizzy.com
    </a>
    {", "}
    <a
      href="mailto:care@byyizzy.com"
      className="text-blue-600 hover:underline"
    >
      care@byyizzy.com
    </a>
  </p>
</div>
















































{/* ========================================= */}




            </div>
          </div>
        </section>




        {/* Contact Us */}
        <CallToActionSection/>

        {/* <Footer /> */}
        <Script
          src="/assets/js/scroll-trigger.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
      </>
    );
}
