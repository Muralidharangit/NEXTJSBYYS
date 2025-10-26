import VideoBanner from "@/components/VideoBanner";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import CategoriesSection from "@/components/CategoriesSection";
import ManufacturingProductsSection from "@/components/ManufacturingProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Counterpart from "@/components/Counterpart";

// If your Brand.json is under src/components/Data/Brand.json, use this path:
import brandsJson from "@/Data/Brand.json";
import Head from "next/head";

// ---------- Types & Guards (no `any`) ----------
type Brand = {
  id?: string | number;
  name?: string;
  logo?: string;
  [k: string]: unknown;
};

type BrandsFile = Brand[] | { brands: Brand[] } | Record<string, Brand>;

const isBrand = (v: unknown): v is Brand =>
  typeof v === "object" &&
  v !== null &&
  ("logo" in (v as object) || "name" in (v as object) || "id" in (v as object));

const isBrandArray = (x: unknown): x is Brand[] =>
  Array.isArray(x) && x.every(isBrand);

const hasBrandsArray = (x: unknown): x is { brands: Brand[] } =>
  typeof x === "object" &&
  x !== null &&
  Array.isArray((x as Record<string, unknown>).brands) &&
  (x as { brands: unknown }).brands !== undefined &&
  ((x as { brands: unknown }).brands as unknown[]).every(isBrand);

// Normalize JSON to Brand[]
function normalizeBrands(data: unknown): Brand[] {
  if (isBrandArray(data)) return data;
  if (hasBrandsArray(data)) return data.brands;
  if (typeof data === "object" && data !== null) {
    const values = Object.values(data as Record<string, unknown>);
    const arr = values.filter(isBrand);
    if (arr.length) return arr as Brand[];
  }
  return [];
}

export default function Home() {
  const brands = normalizeBrands(brandsJson as unknown as BrandsFile);

  return (
    <>
      <Head>
        <title>My App Home Page</title>
        <meta name="description" content="A brief summary for search engines." />
        <meta property="og:title" content="My App Home Page" />
        <meta property="og:description" content="A brief summary for search engines." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/og-image.jpg" />
      </Head>

      <main>
        <VideoBanner />
        <FeaturesSection />
        <ServicesSection />
        <Counterpart />
        <CategoriesSection />
        <ManufacturingProductsSection />
        <ClientsSection brands={brands} />
        <CallToActionSection />
      </main>
    </>
  );
}