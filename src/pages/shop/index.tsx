import Link from "next/link";

import Image from "next/image";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";

export const metadata = { title: "Products" };

export default function ProductsIndex() {
  return (
    <div className="bg-[#edf6ff]">
      {/* Start Page Title Area */}
      <div className="mt-[110px] w-full bg-[#edf6ff] py-5">
        <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center space-x-2">
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Byyizzy
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="#" className="font-medium hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#1c90f2]">About</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title Area */}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="relative h-64 overflow-hidden md:h-96">
          <Image
            src="https://tnswp.com/DIGIGOV/themes/tnswp/images/prelogin-pages-images/sectors/focus/Machine%20tool/machine_banner.png"
            alt="About Banner"
            fill
            sizes="100vw"
            className="object-cover blur-xs filter"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Product Categories
            </h1>
          </div>
        </div>
      </div>

      {/* Overview Section */}

      <div className="mx-auto max-w-7xl bg-[#edf6ff] p-6">
        <h1 className="mb-4 text-2xl font-semibold">
          Product <span className="text-[#1c90f2]">Categories</span>{" "}
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SHOP_BY_CATEGORIES.map((cat) => {
            const catSlug = slugify(cat.title);
            return (
              <Link key={cat.id} href={`/shop/${catSlug}?sub=all`} className="">
                <div className="flex h-full min-h-[120px] cursor-pointer flex-row items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden">
                    {/* <img
                      src={cat.images}
                      alt={cat.title}
                      className="h-full w-full object-contain"
                    /> */}
                    <Image src={cat.images} alt={cat.title} width={20} height={20} sizes="20px" />
                  </div>

                  {/* Text */}
                  <h6 className="line-clamp-2 text-sm font-semibold text-gray-700">{cat.title}</h6>
                </div>

                {/* {cat.title} */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
