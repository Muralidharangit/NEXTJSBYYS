import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import LetterAnimation from "@/components/LetterAnimation";

import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/Loader";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";
import { useEffect, useState } from "react";
import Image from "next/image";
import EnquiryDialog from "@/components/EnquiryDialog";
import ClientsSection from "@/components/ClientsSection";
import brandsJson from "@/Data/Brand.json";
// ---------- Type guards ----------
type Brand = { id?: string | number; name?: string; logo?: string };
type BrandsFile = Brand[] | { brands: Brand[] } | Record<string, Brand>;

const isBrand = (v: unknown): v is Brand =>
  typeof v === "object" &&
  v !== null &&
  ("logo" in v || "name" in v || "id" in v);

const isBrandArray = (x: unknown): x is Brand[] =>
  Array.isArray(x) && x.every(isBrand);

const hasBrandsArray = (x: unknown): x is { brands: Brand[] } =>
  typeof x === "object" &&
  x !== null &&
  "brands" in x &&
  Array.isArray((x as { brands?: unknown }).brands);

function normalizeBrands(data: unknown): Brand[] {
  if (isBrandArray(data)) return data;
  if (hasBrandsArray(data)) return data.brands;
  if (typeof data === "object" && data !== null)
    return Object.values(data as Record<string, unknown>).filter(
      isBrand
    ) as Brand[];
  return [];
}


export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Static site with custom fonts",
};

export default function Home() {

   const brands = normalizeBrands(brandsJson as unknown as BrandsFile);


  // UI state
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{
    name?: string;
    code?: string;
  } | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  function openEnquiry(name?: string, code?: string) {
    setSelected({ name, code });
    setOpen(true);
  }
  return (
    <div>
      {/* <Header /> */}
      <LetterAnimation />

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
            Shop by Category 
          </h2>
          <p
            data-aos="fade"
            data-aos-delay={300}
            className="text-center justify-start text-base-grey text-lg font-normal leading-tight lg:leading-relaxed max-w-[750px] aos-init mb-0"
          >
           Standard and customized MRO spares, Consumables and Hardware Products
          </p>
          <p>Source direct-from-factory || Fastest Delivery|| Best prices & trade assurance || OTIF|| Quality Assurance || Byyizzy-Powered Local Hardware Stores</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className=" mx-auto py-16 px-6">
        {/* Section Header */}
        {/* <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          <span className="bg-[#067afe] text-white px-4 py-1 rounded-full mb-5">
            Product Categories
          </span>
          <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
            Product Categories
          </span>

          <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
            Our Innovative Product
          </h2>
        </div> */}

        {/* Category Grid */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SHOP_BY_CATEGORIES.map((category, index) => {
            const slug = slugify(category.title);
            return (
              <>
                {/* <Link href={`/shop/${slug}?sub=all`}> */}
                <div
                  key={category.id}
                  data-aos-delay={index * 100}
                  onClick={() => openEnquiry(category.title)}
                >
                  <div className="group relative flex items-center p-4 bg-white  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] lg:min-h-[8rem] hover:bg-[#067afe]">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0 bg-white dark:bg-gray-800">
                      <Image
                        src={category.images}
                        alt={category.title}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                        width={160}
                        height={40}
                      />
                    </div>
                    <p className="font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] truncate w-[200px] !m-0 group-hover:text-white">
                      {category.title}
                    </p>
                  </div>
                </div>

                {/* </Link> */}
              </>
            );
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

     

          <ClientsSection brands={brands} />
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
               Ready to simplify your MRO Procurement?
              </h2>
              <p className="mt-2 text-lg md:text-xl text-white/80 max-w-2xl">
                Let Byyizzy help you save time, cut costs, and strengthen your local supply chain.
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

      {/* Enquiry Dialog */}
    <EnquiryDialog
        open={open}
        onOpenChange={(v) => {
          if (!v) setSelected(null); // optional: clear on close
          setOpen(v);
        }}
        productName={selected?.name}
        productCode={selected?.code}
      />
      {/* <Footer /> */}
      <Script src="/assets/js/scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
    </div>
  );
}
