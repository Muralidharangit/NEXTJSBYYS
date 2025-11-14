"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // ✅ If you're on App Router, see note below
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";

// ---------- Local types ----------
type CloseMenuFn = () => void;

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

type TopLinkProps = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
};

type ShopCategory = {
  id: string | number;
  title: string;
  images: string; // path or URL
};

const CATEGORIES = SHOP_BY_CATEGORIES as ShopCategory[];

// ---------- Small components (typed) ----------
const CategoryDropdownContent: React.FC<{ closeMenu: CloseMenuFn }> = ({ closeMenu }) => (
  <div
    role="menu"
    className="absolute left-0 right-0 top-full mt-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 w-full max-w-2xl p-3 animate-fadeIn"
  >
    <ul className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
      {CATEGORIES.slice(0, 10).map((category: ShopCategory) => (
        <li key={category.id}>
          <Link
            href={`/category`}
            onClick={closeMenu}
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#067afe]/10 rounded-lg transition group"
          >
            <div className="flex items-center gap-3">
              <div className="min-w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                <Image
                  src={category.images}
                  alt={category.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span>{category.title}</span>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-[#067afe]" />
          </Link>
        </li>
      ))}
    </ul>
    <Link
      href="/categories"
      onClick={closeMenu}
      className="block text-center text-sm font-semibold text-[#067afe] mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 hover:text-[#0569dc] transition"
    >
      View All Categories
    </Link>
  </div>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const categoryButtonRef = useRef<HTMLButtonElement | null>(null);
  const searchBarContainerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  // Close all menus on route change (Pages Router)
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchBarContainerRef.current &&
        !searchBarContainerRef.current.contains(e.target as Node)
      ) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus: CloseMenuFn = () => {
    setCategoryOpen(false);
    setMobileCategoryOpen(false);
    setMobileMenuOpen(false);
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link
      href={href}
      onClick={closeAllMenus}
      className="text-base font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition whitespace-nowrap"
    >
      {children}
    </Link>
  );

  const TopLink: React.FC<TopLinkProps> = ({ href, icon: Icon, children }) => (
    <Link
      href={href}
      className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#4ba3ff] transition"
    >
      <Icon className="w-4 h-4" />
      {children}
    </Link>
  );

  return (
    <header className="w-full sticky top-0 z-50 ">
      {/* Top bar */}
      <div className="w-full h-[44px] bg-[#067afe] text-white text-sm px-3 lg:px-8">
        <div className="container flex items-center justify-between h-full">
          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4 text-gray-200 font-bold">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 text-sm hover:text-[#4ba3ff] transition"
            >
              <Image src="/images/icons/phone.png" alt="Phone Icon" width={16} height={16} className="object-contain" />
              +91 98765 43210
            </a>

            <a
              href="mailto:support@byyizzy.com"
              className="flex items-center gap-1 text-sm hover:text-[#4ba3ff] transition"
            >
              <Image src="/images/icons/mail.png" alt="Mail Icon" width={16} height={16} className="object-contain" />
              support@byyizzy.com
            </a>
          </div>

          {/* Right Links */}
  <div className="flex items-center gap-4 mx-auto md:mx-0 font-bold text-[11px] sm:text-sm md:text-base lg:text-[17px]">
  <Link
    href="/"
    className="flex items-center gap-1 hover:text-[#4ba3ff] transition"
  >
    <Image src="/images/icons/team.png" alt="Team Icon" width={18} height={18} className="object-contain" />
    Become a Partner
  </Link>

  <Link
    href="/"
    className="flex items-center gap-1 hover:text-[#4ba3ff] transition"
  >
    <Image src="/images/icons/comment.png" alt="Quote Icon" width={18} height={18} className="object-contain" />
    Get Quotes
  </Link>

  <Link
    href="/" 
    className="flex items-center gap-1 hover:text-[#4ba3ff] transition"
  >
    <Image src="/images/icons/sign.png" alt="Sign Icon" width={18} height={18} className="object-contain" />
    Sign Up
  </Link>
</div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white dark:bg-gray-900/80 backdrop-blur-lg shadow-md transition-all">
        <div className="container flex items-center justify-between py-3 px-3 ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-max" onClick={closeAllMenus}>
            <Image src="/images/blue.png" alt="Logo" width={160} height={40} className="object-contain" priority />
          </Link>

          {/* Search + Categories */}
          <div className="hidden lg:block relative flex-1 mx-8 max-w-2xl z-50" ref={searchBarContainerRef}>
            <div className="flex w-full border border-gray-300 rounded-xl shadow-inner items-center">
              <button
                ref={categoryButtonRef}
                onClick={() => setCategoryOpen((prev) => !prev)}
                className="flex items-center gap-1 px-2 py-2 font-semibold text-sm text-gray-700 bg-gray-50 rounded-l-xl hover:bg-gray-100 transition"
                aria-expanded={categoryOpen}
                aria-haspopup="true"
              >
                Categories
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
              </button>

              <input
                type="search"
                placeholder="Search products, brands..."
                onClick={() => setCategoryOpen(true)}
                onFocus={() => setCategoryOpen(true)}
                disabled={false}
                readOnly
                className="flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none placeholder:text-gray-400 cursor-pointer"
              />

              <div className="px-2">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </div>
            </div>

            {categoryOpen && <CategoryDropdownContent closeMenu={() => setCategoryOpen(false)} />}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-8 items-center min-w-max">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/service">Solution</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>

            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-[#067afe] shadow">
              <Image src="/images/icons/cartblue.png" width={22} height={22} alt="Cart" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden p-2 ml-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md animate-fadeIn">
          <div className="flex flex-col px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="flex w-full border border-gray-300 rounded-lg items-center px-2 py-1 shadow-inner">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-2 py-1 text-sm text-gray-700 focus:outline-none"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 mt-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/service">Solution</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </div>

            {/* Mobile Categories */}
            <div className="mt-0">
              <button
                onClick={() => setMobileCategoryOpen((v) => !v)}
                className="flex items-center justify-between w-full px-2 py-2 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                Categories
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileCategoryOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileCategoryOpen && (
                <div className="mt-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 space-y-1 bg-white dark:bg-gray-900">
                  {CATEGORIES.slice(0, 6).map((category: ShopCategory) => (
                    <Link
                      key={category.id}
                      href={`/category`}
                      onClick={closeAllMenus}
                      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                    >
                      <Image src={category.images} alt={category.title} width={24} height={24} className="rounded-full" />
                      {category.title}
                    </Link>
                  ))}
                  <Link
                    href="/category"
                    onClick={closeAllMenus}
                    className="block text-center text-sm font-semibold text-[#067afe] hover:text-[#0569dc] mt-2 transition"
                  >
                    View All Categories
                  </Link>
                </div>
              )}
            </div>

            {/* CTA buttons */}
            {/* <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/"
                onClick={closeAllMenus}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#071431] bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <UserCircleIcon className="w-5 h-5" />
                Sign Up
              </Link>

              <Link
                href="/"
                onClick={closeAllMenus}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#071431] bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <Squares2X2Icon className="w-5 h-5" />
                Become a Partner
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
