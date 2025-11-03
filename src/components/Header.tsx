"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  // Close all menus on any route change (Pages Router)
  useEffect(() => {
    const close = () => {
      setCategoryOpen(false);
      setMobileCategoryOpen(false);
      setMobileMenuOpen(false);
    };
    router.events.on("routeChangeStart", close);
    router.events.on("routeChangeComplete", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("routeChangeComplete", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  // Close desktop category when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setCategoryOpen(false);
    setMobileCategoryOpen(false);
    setMobileMenuOpen(false);
  };
const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const scheduleClose = () => { closeTimer.current = setTimeout(() => setCategoryOpen(false), 150); };
const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm transition-all">
      <nav className="container mx-auto flex items-center justify-between py-3 px-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeAllMenus}>
          <Image
            src="/images/blue.png"
            alt="Logo"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          <Link
            href="/"
            onClick={closeAllMenus}
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeAllMenus}
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            About
          </Link>

          {/* Category Dropdown (Desktop) */}
         <div className="relative" ref={categoryRef}>
  <button
    onClick={() => setCategoryOpen((prev) => !prev)}
    className="flex items-center gap-1 font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
    aria-expanded={categoryOpen}
    aria-haspopup="menu"
  >
    Categories
    <ChevronDownIcon className={`w-4 h-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
  </button>

  {categoryOpen && (
    <div
      role="menu"
      // add a tiny hover bridge so moving down doesn't flicker
      className="absolute left-1/2 -translate-x-1/2 top-full
                 mt-3 before:content-[''] before:absolute before:top-[-12px] before:left-0 before:right-0 before:h-3
                 flex flex-col items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                 rounded-2xl shadow-2xl z-50 w-[800px] p-6 animate-fadeIn"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {SHOP_BY_CATEGORIES.slice(0, 12).map((category) => (
          <Link
            key={category.id}
            href="/category"
            onClick={() => setCategoryOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#067afe]/10 transition"
          >
            <div className="min-w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
              <Image src={category.images} alt={category.title} width={40} height={40} className="object-contain" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{category.title}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/category"
          onClick={() => setCategoryOpen(false)}
          className="px-6 py-2 text-sm font-semibold text-white bg-[#067afe] hover:bg-[#046be0] rounded-full shadow-md transition"
        >
          Show All Categories
        </Link>
      </div>
    </div>
  )}
</div>


          <Link
            href="/service"
            onClick={closeAllMenus}
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Services
          </Link>

          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/category"
            onClick={closeAllMenus}
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Search
          </Link>

          <Link
            href="/"
            onClick={closeAllMenus}
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Supplier Registration
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4"
        >
          <ul className="flex flex-col gap-2 py-3">
            <li>
              <Link
                href="/"
                onClick={closeAllMenus}
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeAllMenus}
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                onClick={closeAllMenus}
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
              >
                Contact
              </Link>
            </li>

            {/* Mobile Category Dropdown */}
            <li>
              <button
                onClick={() => setMobileCategoryOpen((prev) => !prev)}
                className="flex items-center justify-between w-full py-2 px-2 text-gray-800 dark:text-gray-200 font-semibold hover:text-[#067afe]"
                aria-expanded={mobileCategoryOpen}
                aria-controls="mobile-categories"
              >
                Categories
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${mobileCategoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileCategoryOpen && (
                <div id="mobile-categories" className="mt-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                  {SHOP_BY_CATEGORIES.slice(0, 12).map((category) => {
                    const slug = slugify(category.title);
                    return (
                      <Link
                        key={category.id}
                        href={`/shop/${slug}?sub=all`}
                        onClick={closeAllMenus}
                        className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#067afe]/10 transition"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                          <Image
                            src={category.images}
                            alt={category.title}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate w-[200px]">
                          {category.title}
                        </span>
                      </Link>
                    );
                  })}

                  <div className="mt-3">
                    <Link
                      href="/categories"
                      onClick={closeAllMenus}
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
