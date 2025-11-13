
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


export default function IndustrialProductsAggregation() {
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
              Industrial Products Aggregation
            </h2>
            <p
              data-aos="fade"
              data-aos-delay={300}
              className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init"
            >
             Streamline your procurement. Create value. Generate savings from tail-spend 
            </p>
          </div>
        </section>



    {/* HERO */}
        <section className="py-20 bg-white">
          {/* Section Heading */}
       

          <div className="max-w-7xl mx-auto">
            {/* Left: Text Content */}
          <ul className="my-0 pb-3">
   <li className="mb-3">•	⚡ Fastest Delivery – within just 24 hours! (Via Byyizzy-powered hardware stores)</li>
  <li className="mb-3">
    •	💎 Transparent Pricing


  </li>
  <li className="mb-3">
    •	🤝 Local Business Engagement
  </li>
 <li className="mb-3">
    
•	👁️ 100% Process Visibility
  </li>
   <li className="mb-3">
    
•	🌐 Integrated B2B & B2C Ecosystem

  </li>

 <li className="mb-3">•	🔍 End-to-End Tracking & Catalog-Based Buying</li>
</ul>

          </div>
        </section>


        {/* HERO */}
        <section className="py-20 bg-white pt-0">
          {/* Section Heading */}
          <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            MRO Tail-Spend Aggregation
          </h2>

          <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12 mt-15">
            {/* Left: Text Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-gray-700 mb-4">
                High complexity and low-value transactions have made the
                Industrial MRO supply chain hard to manage—even as value
                trickles away.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                The result? Industrial buyers lose time, productivity, and
                revenue just waiting for supplies. In a world where groceries
                arrive in 10 minutes, why wait days or months for spare parts?
              </p>
              <p className="text-gray-700 mb-8">
                Byyizzy aggregates low-value, high-volume MRO spend into a
                single, smart, managed platform. We consolidate suppliers,
                categories, and operations to deliver efficiency and scale.
              </p>
            </div>

            {/* Right: Features */}
            <div className="lg:w-1/2">
              <ul className="grid sm:grid-cols-2 gap-6">
                {[
                  "📦 Consolidation of categories, operations & suppliers",
                  "🤝 Supplier Rationalization",
                  "📈 Better Economies of Scale",
                  "🧠 Technical Expertise & Catalog-Based Buying",
                  "⚙️ Automated, Low-Cost Operations",
                  "💡 Light Asset, Agile Business Model",
                ].map((feature, idx) => {
                  const [emoji, ...rest] = feature.split(" ");
                  const text = rest.join(" ").trim();
                  return (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <span className="text-4xl">{emoji}</span>
                      <span className="text-gray-700 font-medium">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-20 bg-[#f0f4fb]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <span
                className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full"
                data-aos="fade-up"
              >
                Challenges
              </span>

              <h2 className="animate-letters mt-4 text-3xl md:text-4xl font-semibold text-[#050d20] leading-tight">
                The Challenges We Solve
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="max-w-4xl mx-auto bg-white border shadow-md overflow-hidden">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th className="py-4 px-6 text-left text-gray-800 text-lg font-semibold border">
                      🧾 Sourcing
                    </th>
                    <th className="py-4 px-6 text-left text-gray-800 text-lg font-semibold border">
                      🏭 Fulfillment
                    </th>
                    <th className="py-4 px-6 text-left text-gray-800 text-lg font-semibold border">
                      💵 Working Capital
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-left border">
                  {[
                    [
                      "Fragmented Supply Base (High Ordering costs)",
                      "Unreliable deliveries",
                      "Advance/ Credit Exposure",
                    ],
                    [
                      "Responsible, Ethical and Efficient sourcing is a big challenge",
                      "Quality issues",
                      "Bad Debt/NPA",
                    ],
                    [
                      "Price Variability and huge Markups due to Large SKU mix",
                      "Geographic/service limitations",
                      "Huge Inventory carrying costs",
                    ],
                    [
                      "Technical Expertise, Product authenticity & quality",
                      "Lack of economies of scale",
                      "Payment Terms mismatch",
                    ],
                    [
                      "Supplier Reliability and Performance",
                      "High pilferage/waste",
                      "Inventory Management",
                    ],
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors border"
                    >
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className="py-5 px-6 text-gray-700 font-medium border"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
              What We Do
            </h2>

            {/* Card Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
              {/* 1️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1.Consolidation of Fragmented Spend
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For large manufacturing companies, 80% of the suppliers
                  contribute only 20% of the supply value (spend) – illustrating
                  the Pareto analysis (80:20 rule) A high number of transactions
                  (due to numerous suppliers) & repeated PR-PO process create
                  inefficiencies in the supply chain Need to unlock time spent
                  on operational activities and focus more on strategic category
                  management At Byyizzy, we aggregate the highly fragment MRO
                  purchases into a single managed platform to bring more
                  efficiency and to create value in the MRO supply chain
                </p>
              </div>

              {/* 2️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2.Hyperlocal Fulfillment Network
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our integrated tech-powered local hardware hubs deliver
                  faster, verified, cost-effective supplies. Inventory
                  optimization through our Byyizzy Powered Hardware Stores
                </p>
              </div>

              {/* 3️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3.Digital Procurement Platform
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI automates sourcing, quotes, approvals, POs, and tracking —
                  boosting speed, compliance, and control.
                </p>
              </div>

              {/* 4️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4.Transparent Pricing & Strategic Sourcing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We negotiate better rates through aggregated buying power and
                  pass every saving directly to you.
                </p>
              </div>

              {/* 5️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5.Catalog-Based Buying
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Pre-approved product catalogs streamline ordering — no
                      repetitive RFQs, just click and order.
                    </li>
                    <li>Easy & intuitive e-commerce like buying experience</li>
                    <li>SKU price & quality standardization</li>
                  </ul>
                </p>
              </div>

              {/* 6️⃣ */}
              <div className="bg-white rounded-2xl shadow-sm p-6 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  6.Tail-Spend Intelligence & Reporting
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gain real-time analytics, control leakage, and identify new
                  savings opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f0f4fb]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Heading */}
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Strengths
            </h2>

            {/* Strengths List */}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-15">
              {[
                "🛠️ Integrated with Local hardware store network",
                "🏭 Extensive supplier network across India",
                "💎 Transparent Pricing",
                "🤝 Local Business Engagement",
                "🧾 Centralized billing & documentation",
                "🤖 AI-based sourcing engine",
                "📉 Reduced indirect procurement workload",
                "💳 Credit purchasing options",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-gray-700 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
            {/* Left Side - Text */}
            <div className="lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-up">
              <h3 className="animate-letters text-2xl font-semibold mb-4">
                🌍Why It Matters
              </h3>
              <p className="text-gray-700 mb-6">
                80% of procurement effort goes into 20% of your spend — we fix
                that. Byyizzy helps companies:
              </p>
              <ul className="space-y-2 text-gray-700 font-medium list-disc list-inside">
                <li>Save 15–20% on tail-spend</li>
                <li>Improve supply chain visibility</li>
                <li>Empower local economies</li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2 flex justify-center" data-aos="fade-up">
              <img
                src="https://www.simplypsychology.org/wp-content/uploads/Pareto-Principle.jpg"
                alt="Why It Matters"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f0f4fb]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
              Importance for customers
            </h2>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1️⃣ Competitive pricing */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <CurrencyDollarIcon className="h-8 w-8 text-green-500" />
                <p className="font-medium text-gray-800">Competitive pricing</p>
              </div>

              {/* 2️⃣ Multiple SKUs */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <CubeIcon className="h-8 w-8 text-orange-500" />
                <p className="font-medium text-gray-800">
                  Multiple SKUs/Range of products from single supplier
                </p>
              </div>

              {/* 3️⃣ Credit / Financing */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <UsersIcon className="h-8 w-8 text-yellow-500" />
                <p className="font-medium text-gray-800">
                  Credit payment terms /Financing
                </p>
              </div>

              {/* 4️⃣ Immediate Material availability */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <TruckIcon className="h-8 w-8 text-purple-500" />
                <p className="font-medium text-gray-800">
                  Immediate Material availability
                </p>
              </div>

              {/* 5️⃣ Technical Knowledge & expertise */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <SparklesIcon className="h-8 w-8 text-blue-500" />
                <p className="font-medium text-gray-800">
                  Technical Knowledge & expertise
                </p>
              </div>

              {/* 6️⃣ Value Added services */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <ClipboardDocumentListIcon className="h-8 w-8 text-red-500" />
                <p className="font-medium text-gray-800">
                  Value Added services
                </p>
              </div>

              {/* 7️⃣ Logistics & SCM */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <TruckIcon className="h-8 w-8 text-red-500" />
                <p className="font-medium text-gray-800">Logistics & SCM</p>
              </div>

              {/* 8️⃣ E-Commerce Platform Digitalization */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <MapIcon className="h-8 w-8 text-green-500" />
                <p className="font-medium text-gray-800">
                  E-Commerce Platform Digitalization
                </p>
              </div>

              {/* 9️⃣ Social Obligations */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <HeartIcon className="h-8 w-8 text-red-500" />
                <p className="font-medium text-gray-800">Social Obligations</p>
              </div>

              {/* 10️⃣ Better Customer support */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500" />
                <p className="font-medium text-gray-800">
                  Better Customer support & service
                </p>
              </div>

              {/* 11️⃣ ESG compliance */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <UserGroupIcon className="h-8 w-8 text-green-500" />
                <p className="font-medium text-gray-800">ESG compliance</p>
              </div>

              {/* 12️⃣ Collaborative Business relationships */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
                <UsersIcon className="h-8 w-8 text-orange-500" />
                <p className="font-medium text-gray-800">
                  Collaborative Business relationships
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 1 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
              Byyizzy’s Value Proposition
            </h2>
            <div className="relative w-full max-w-4xl mx-auto mt-10">
              <Image
                src="/images/service/fourth-1.png"
                alt="Byyizzy Value Proposition"
                width={800}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-20 bg-[#f0f4fb]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
              Product Supply Chain
            </h2>
            <div className="relative w-full max-w-4xl mx-auto mt-10">
              <Image
                src="/images/service/fourth-3.png"
                alt="Product Supply Chain"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
              MRO Supply Chain
            </h2>
            <div className="relative w-full max-w-4xl mx-auto mt-10">
              <Image
                src="/images/service/fourth-2.png"
                alt="MRO Supply Chain"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-20 bg-[#f0f4fb]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="animate-letters text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
              MRO spend is fragment
              {/* 20% of the MRO spend is fragmented with 80% of the suppliers (Pareto Rule) */}
            </h2>
            <div className="relative w-full max-w-4xl mx-auto mt-10 mb-10">
              <Image
                src="/images/service/fourth-4.png"
                alt="Pareto Rule"
                width={700}
                height={500}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            {/* Text below image */}
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              20% of the MRO spend is fragmented with 80% of the suppliers
            </h4>
            <p className="text-gray-700">
              80-20 rule: 80% of your procurement effort often goes into
              managing 20% of low-value.
            </p>
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
             Let Byyizzy help you save time, cut costs, and strengthen your local suppy chain.
            </h4>
            <p className="mt-3 text-lg text-white/80 max-w-2xl">
              Get started with Byyizzy.com — Supporting Local, Saving Community Wealth
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
