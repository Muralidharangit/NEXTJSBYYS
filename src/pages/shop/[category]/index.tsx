"use client";

import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { filterProductsBy, getMainBySlug, getSubcats } from "data/shopBycatlog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryDialog from "@/components/EnquiryDialog";

type Tab = { slug: string; name: string };

export default function CategoryPage() {
  // UI state
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ name?: string; code?: string } | null>(null);

  // ---- Route & query params (SAFE) ----
  // useParams can return string | string[] | undefined for each segment.
  const rawParams = useParams() as { category?: string | string[] | undefined };
  const category: string = useMemo(() => {
    const c = rawParams?.category;
    return Array.isArray(c) ? c[0] ?? "" : c ?? "";
  }, [rawParams]);

  const searchParams = useSearchParams();
  const sub = (searchParams.get("sub") ?? "all").toLowerCase();

  // ---- Derived data ----
  const cat = useMemo(() => (category ? getMainBySlug(category) : null), [category]);
  const subs = useMemo(() => (category ? getSubcats(category) : [] as Tab[]), [category]);
  const products = useMemo(
    () => (category ? filterProductsBy(category, sub) : []),
    [category, sub]
  );
  const tabs: Tab[] = useMemo(() => [{ slug: "all", name: "All" }, ...subs], [subs]);

  // ---- Guards ----
  if (!category) return <main className="p-6">Category not found.</main>;
  if (!cat)       return <main className="p-6">Category not found.</main>;

  function openEnquiry(name?: string, code?: string) {
    setSelected({ name, code });
    setOpen(true);
  }

  return (
    <>
      {/* <Header /> */}

      <main className="">
        <section className="mt-30 px-5 lg:px-20 pb-20 flex flex-col lg:flex-row gap-10">
          {/* LEFT GRID */}
          <div className="container lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              products.map((product, idx) => (
                <div
                  key={`${product.materialCode ?? idx}`}
                  className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 flex flex-col overflow-hidden h-[380px]"
                  data-aos="fade-up"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-[250px] bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.materialName || "Product"}
                      width={800}
                      height={900}
                      className="w-full h-full object-contain"
                    />
                   
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-[#067afe] to-[#60a5fa] text-white text-xs px-3 py-1 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>

                

                  {/* 🧾 CONTENT */}
                  <div className="flex flex-col justify-between p-4 flex-grow">
                    <div>
                      <h3 className="text-base font-semibold text-[#0a1529] leading-tight line-clamp-2 mb-2">
                        {product.materialName}
                      </h3>
                      <div className="flex items-center justify-between text-sm"></div>
                    </div>

                    {/* Add Button */}
                    <button
                      className="mt-3 bg-[#067afe] hover:bg-[#055cd8] text-white text-sm font-medium py-2 rounded-full transition-all"
                      onClick={() =>
                        openEnquiry(product.materialName, product.materialCode)
                      }
                    >
                      Add Enquiry
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDEBAR (Scrollable categories) */}
          <aside className="w-full lg:w-1/4 h-[100vh] overflow-y-auto">
            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 sticky top-0">
              <h3 className="text-xl font-semibold text-[#0a1529] mb-4">
                Product Categories
              </h3>
              <ul className="space-y-2">
                {tabs.map((t) => {
                  const href =
                    t.slug === "all"
                      ? `/shop/${category}?sub=all`
                      : `/shop/${category}?sub=${t.slug}`;
                  const active = sub === t.slug;
                  return (
                    <>
                      <Link href={href} className="">
                        <li
                          key={t.slug}
                          className={`mt-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-pointer border transition-all
                   ${
                     active
                       ? "bg-[#067afe] text-white border-transparent shadow-md"
                       : "bg-gray-50 text-[#0a1529] border-gray-200 hover:bg-[#f0f6ff]"
                   }`}
                        >
                          {t.name}
                          <i className="ri-arrow-right-s-line text-gray-400" />
                        </li>
                      </Link>
                    </>
                  );
                })}
              </ul>
            </div>
          </aside>
        </section>

        {/* Enquiry Dialog */}
        <EnquiryDialog
          open={open}
          onOpenChange={setOpen}
          productName={selected?.name}
          productCode={selected?.code}
        />
      </main>
      {/* <Footer /> */}
    </>
  );
}
