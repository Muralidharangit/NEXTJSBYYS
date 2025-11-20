
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


export default function TermsPage() {
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
  className="text-center justify-start text-secondary-navy text-4xl lg:text-[50px] font-bold leading-tight lg:leading-[50px] max-w-7xl mx-auto w-full aos-init aos-animate"
>
           General Terms and Conditions
            </h2>
            <p>For Byyizzy E-Commerce Marketplace — Effective Date: 01/11/2025</p>
          </div>

         

 

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
                     General Terms and Conditions<br/>
                 For Byyizzy E-Commerce Marketplace — Effective Date: 01/11/2025
                </p>
              </div> */}



              {/* points starts */}
 {/* Intro */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed mt-20">
            <p className="font-semibold text-[#050D20]">
              Welcome to Byyizzy.com — Your E-Commerce Marketplace for
              Industrial &amp; Hardware Products
            </p>
            <p>
              These General Terms and Conditions (the &quot;Agreement&quot;)
              govern your access to and use of the Byyizzy platform (the
              &quot;Platform&quot;). By accessing, browsing, registering, or
              using our website, mobile application, or any associated services
              (collectively, the &quot;Services&quot;), you acknowledge that you
              have read, understood, and agree to be bound by this Agreement and
              our Privacy Policy.
            </p>
            <p>
              By using the Platform, you confirm your acceptance of this
              Agreement. We encourage you to review this Agreement and the
              Privacy Policy periodically, as Byyizzy may update them from time
              to time. Continued use of the Platform constitutes your acceptance
              of any modifications.
            </p>
          </div>





          {/* points 1 */}
             {/* 1️⃣ */}
              <div className="my-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1.Definitions
                </h3>
                <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">User(s)</span> refers to
                  individuals or entities that access or use the Platform.
                </li>
                <li>
                  <span className="font-semibold">Seller(s)</span> refers to
                  individuals or entities that list goods or services for sale
                  on the Platform.
                </li>
                <li>
                  <span className="font-semibold">Buyer(s)</span> refers to
                  individuals or entities that purchase goods or services
                  through the Platform.
                </li>
              </ul>
              </div>


               {/* points2 */}
              <div className="my-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Acceptance of Terms
                </h3>
               <p>By using the Platform, you confirm that you are at least 18 years old and capable of entering into a binding agreement. If you use the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
              </div>

 {/* points 3 */}
              <div className="my-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. Marketplace Services
                </h3>
               <p>Byyizzy provides an online marketplace where Sellers can list products and Buyers can purchase them.</p>
              </div>

 {/* points 4 */}
<div className="my-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Seller Responsibilities
                </h3>
                <ul className="list-disc list-inside space-y-1">
                <li>
             Ensure all listings are accurate, complete, and comply with applicable laws and regulations.
                </li>
                <li>
                Ensure product/service quality and fulfill orders in a timely manner.
                </li>
                <li>
              Provide clear product descriptions, prices, shipping costs, and delivery timelines.
                </li>
                <li>
                    Bear responsibility for packing and forwarding charges, which should be included in the listed price.
                </li>
              </ul>
              </div>

{/* 5. Buyer Responsibilities */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    5. Buyer Responsibilities
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>Provide accurate information during registration and purchase.</li>
    <li>
      Review product details, prices, and Seller ratings before making a purchase.
    </li>
    <li>
      Comply with all applicable laws when purchasing products or services via the Platform.
    </li>
  </ul>
</div>

{/* 6. Payment Terms */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    6. Payment Terms
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>
      All transactions are subject to the payment terms displayed at the time of purchase.
    </li>
    <li>
      Buyers agree to pay the total amount due, including applicable taxes and shipping, at checkout.
    </li>
    <li>
      Payments may be processed through third-party payment gateways.
    </li>
  </ul>
</div>

{/* 7. Shipping and Delivery */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    7. Shipping and Delivery
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>
      Sellers are responsible for shipping products within the timeframe specified in their listings.
    </li>
    <li>
      Buyers should review shipping policies and estimated delivery times before purchase.
    </li>
    <li>
      Packaging must support inspection at destination. Any damage, loss, or quality
      deterioration due to inadequate packing is the Seller&apos;s responsibility.
    </li>
  </ul>
</div>

{/* 8. Returns and Refunds */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    8. Returns and Refunds
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>
      Return and refund policies are defined by individual Sellers and must be clearly stated
      on their listings.
    </li>
    <li>
      Buyers must follow the Seller&apos;s stated process for any return or exchange.
    </li>
  </ul>
</div>

{/* 9. Warranty */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    9. Warranty
  </h3>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    <li>
      Sellers warrant that they have proper title and authority to sell, lease, or license the goods.
    </li>
    <li>
      Goods shall be of first-class quality, free from defects, and suitable for their intended purpose.
    </li>
    <li>
      If goods are found defective in material, workmanship, performance, design, or manufacturing
      within 12 months from usage or 18 months from acceptance (whichever is earlier),
      the Seller must replace them at their own cost.
    </li>
  </ul>
</div>


{/* 10. Dispute Resolution */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    10. Dispute Resolution
  </h3>
  <p className="text-gray-700">
    Any disputes arising from this Agreement that cannot be resolved amicably
    shall be subject to the jurisdiction of the competent courts in Chennai.
  </p>
</div>

{/* 11. Modifications to Terms */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    11. Modifications to Terms
  </h3>
  <p className="text-gray-700">
    Byyizzy reserves the right to modify these Terms and Conditions at any time.
    Updates will be posted on the Platform. Continued use of the Platform after
    such updates constitutes acceptance of the revised terms.
  </p>
</div>

{/* 12. Governing Law */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    12. Governing Law
  </h3>
  <p className="text-gray-700">
    This Agreement is governed by and construed in accordance with the laws of
    India. Any disputes shall be subject to the exclusive jurisdiction of the
    courts in Chennai.
  </p>
</div>

{/* 13. Contact Information */}
<div className="my-3">
  <h3 className="text-lg font-semibold text-gray-900 mb-3">
    13. Contact Information
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
