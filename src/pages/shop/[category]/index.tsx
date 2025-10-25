"use client";

import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { filterProductsBy, getMainBySlug, getSubcats } from "data/shopBycatlog";
// import { filterProductsBy, getMainBySlug, getSubcats } from "@/data/shopBycatlog";
// import EnquiryDialog from "@/components/EnquiryDialog";

type Tab = { slug: string; name: string };

export default function CategoryPage() {
  // ✅ Hooks must be at the top, before any conditional logic
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ name?: string; code?: string } | null>(null);

  // ✅ Route & query params
  const params = useParams<{ category: string }>();
  const searchParams = useSearchParams();

  const category = params.category; // no optional chaining
  const sub = (searchParams.get("sub") ?? "all").toLowerCase();

  // ✅ Derived data
  const cat = useMemo(() => getMainBySlug(category), [category]);
  const subs = useMemo(() => getSubcats(category), [category]);
  const products = useMemo(() => filterProductsBy(category, sub), [category, sub]);
  const tabs: Tab[] = useMemo(() => [{ slug: "all", name: "All" }, ...subs], [subs]);

  // ✅ Early return if category not found
  if (!cat) return <main className="p-6">Category not found.</main>;

  function openEnquiry(name?: string, code?: string) {
    setSelected({ name, code });
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#edf6ff] text-gray-900">
      {/* Breadcrumbs */}
      <div className="w-full bg-white py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="/" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="font-medium hover:text-black">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#1c90f2]">{cat.title}</li>
          </ol>
        </nav>
      </div>

      <main className="container mx-auto mt-6 grid grid-cols-1 gap-8 px-6 lg:grid-cols-4">
        {/* Sidebar - Tabs */}
        <aside className="sticky top-6 self-start rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-bold text-black">Categories</h2>
          <ul className="space-y-1 text-gray-700">
            {tabs.map((t) => {
              const href =
                t.slug === "all" ? `/shop/${category}?sub=all` : `/shop/${category}?sub=${t.slug}`;
              const active = sub === t.slug;
              return (
                <li key={t.slug} className="border-b border-gray-200">
                  <Link
                    href={href}
                    className={`flex items-center justify-between px-2 py-3 transition ${
                      active ? "font-semibold text-[#1c90f2]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{t.name}</span>
                    <i className="ri-arrow-right-s-line text-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Products Grid */}
        <section className="space-y-12 lg:col-span-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              products.map((product, idx) => (
                <div
                  key={`${product.materialCode ?? idx}`}
                  className="group relative overflow-hidden rounded-sm shadow-lg transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.materialName || "Product"}
                      width={800}
                      height={600}
                      className="h-95 w-full transform object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-3 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-md transition hover:bg-pink-500 hover:text-white"
                      aria-label="Add to wishlist"
                    >
                      <i className="ri-heart-line text-xl" />
                    </button>
                  </div>

                  {/* Info Panel */}
                  <div className="relative z-10 -mt-10 bg-white p-5 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900">{product.materialName}</h3>
                    <p>{product.materialCode}</p>
                    {product.price && (
                      <div className="mt-1 text-sm text-gray-600">
                        ₹ {Number(product.price).toLocaleString("en-IN")}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => openEnquiry(product.materialName, product.materialCode)}
                      className="mt-4 rounded bg-[#067afd] px-5 py-2 text-white hover:bg-blue-700"
                    >
                      Add Enquiry
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Enquiry Dialog */}
        {/* <EnquiryDialog
          open={open}
          onOpenChange={setOpen}
          productName={selected?.name}
          productCode={selected?.code}
        /> */}
      </main>
    </div>
  );
}
