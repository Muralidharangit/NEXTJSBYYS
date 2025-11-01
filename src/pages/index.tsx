import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import brandsJson from "@/Data/Brand.json";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/Loader";

// ✅ Dynamic imports with lightweight skeletons for above-the-fold sections
const VideoBanner = dynamic(() => import("@/components/VideoBanner"), {
  ssr: false,
  loading: () => <div className="h-[80vh] bg-gray-200 animate-pulse" />,
});

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const Counterpart = dynamic(() => import("@/components/Counterpart"), {
  loading: () => <div className="h-[150px] bg-gray-100 animate-pulse" />,
});

// ✅ Below-the-fold (lazy)
const CategoriesSection = dynamic(
  () => import("@/components/CategoriesSection"),
  { ssr: false }
);
const ManufacturingProductsSection = dynamic(
  () => import("@/components/ManufacturingProductsSection"),
  { ssr: false }
);
const ClientsSection = dynamic(() => import("@/components/ClientsSection"), {
  ssr: false,
});
const CallToActionSection = dynamic(
  () => import("@/components/CallToActionSection"),
  { ssr: false }
);

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

 

export default function Home() {
  const brands = normalizeBrands(brandsJson as unknown as BrandsFile);



   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 100);
     return () => clearTimeout(timer);
   }, []);

   if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>My App Home Page</title>
        <meta
          name="description"
          content="A fast and modern Next.js site optimized for all devices."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta property="og:title" content="My App Home Page" />
        <meta
          property="og:description"
          content="A fast and modern Next.js site optimized for all devices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link
          rel="dns-prefetch"
          href="https://firebasestorage.googleapis.com"
        />
      </Head>

      <main className="">
        {/* ✅ Above-the-fold first */}
        <VideoBanner />
        <FeaturesSection />
        <ServicesSection />

        {/* ✅ Below-the-fold lazy */}
        <CategoriesSection />
        <Counterpart />
        <ManufacturingProductsSection />
        <ClientsSection brands={brands} />
        <CallToActionSection />
      </main>

      {/* ✅ Non-blocking script loading */}
      <Script src="/assets/js/scroll-trigger.js" strategy="lazyOnload" />
      <Script src="/assets/js/smooth-scroll.js" strategy="lazyOnload" />
    </>
  );
}
