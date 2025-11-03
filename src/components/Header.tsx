"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // ✅ Close desktop category menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm transition-all">
      <nav className="container mx-auto flex items-center justify-between py-3 px-3 lg:px-8">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/blue.png"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {/* Home */}
          <Link
            href="/"
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            About
          </Link>

          {/* ✅ Category Dropdown (Desktop) */}
          <div className="relative" ref={categoryRef}>
            <button
              onClick={() => setCategoryOpen((prev) => !prev)}
              className="flex items-center gap-1 font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
            >
              Categories
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {categoryOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl z-50 w-[800px] p-6 animate-fadeIn">
                {/* Category Grid */}
                <div className="grid grid-cols-4 gap-5 w-full">
                  {SHOP_BY_CATEGORIES.slice(0, 12).map((category) => {
                    const slug = slugify(category.title);
                    return (
                      <Link
                        key={category.id}
                        href={`/shop/${slug}?sub=all`}
                        className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-[#067afe]/10 transition text-center"
                      >
                        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full mb-2">
                          <Image
                            src={category.images}
                            alt={category.title}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {category.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* ✅ Show All Button */}
                <div className="mt-6">
                  <Link
                    href="/categories"
                    className="px-6 py-2 text-sm font-semibold text-white bg-[#067afe] hover:bg-[#046be0] rounded-full shadow-md transition"
                  >
                    Show All Categories
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <Link
            href="/service"
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Services
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Contact
          </Link>
        </div>

        {/* ✅ Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/category"
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Search
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Supplier Registration
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4">
          <ul className="flex flex-col gap-2 py-3">
            <li>
              <Link
                href="/"
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Contact
              </Link>
            </li>

            {/* ✅ Mobile Category Dropdown */}
            <li>
              <button
                onClick={() => setMobileCategoryOpen((prev) => !prev)}
                className="flex items-center justify-between w-full py-2 px-2 text-gray-800 dark:text-gray-200 font-semibold hover:text-[#067afe]"
              >
                Categories
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    mobileCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileCategoryOpen && (
                <div className="mt-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                  {SHOP_BY_CATEGORIES.slice(0, 12).map((category) => {
                    const slug = slugify(category.title);
                    return (
                      <Link
                        key={category.id}
                        href={`/shop/${slug}?sub=all`}
                        className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#067afe]/10 transition"
                      >
                        {/* Left icon */}
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                          <Image
                            src={category.images}
                            alt={category.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>

                        {/* Right content */}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate w-[200px]">
                          {category.title}
                        </span>
                      </Link>
                    );
                  })}

                  {/* ✅ Show All Button */}
                  <div className="mt-3">
                    <Link
                      href="/categories"
                      className="block text-center text-sm font-semibold text-white bg-[#067afe] hover:bg-[#046be0] rounded-full py-2 px-4 transition"
                    >
                      Show All Categories
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
