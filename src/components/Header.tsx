"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link"; // Import Link for internal navigation

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map of menu item display name to its Next.js path
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Category", href: "/category" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  const logoSrc = scrolled ? "/images/white.png" : "/images/blue.png";

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? "fixed top-0 left-0 bg-[#067afe] shadow-md animate-slideDown"
          : "relative bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="mx-auto flex container items-center justify-between py-3 lg:px-8">
        {/* Left: Logo - Updated to Link component and added priority */}
        <div className="flex flex-1">
          {/* FIX 1: Use Link component for internal navigation */}
          <Link href="/" className="p-1.5" aria-label="Go to Homepage">
            <Image
              src={logoSrc}
              alt="Company Logo"
              width={160}
              height={40}
              // FIX 2: Add priority={true} to disable lazy loading and set fetchpriority=high
              priority={true}
              className="object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Center: Menu - Updated to Link component */}
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <Link // FIX 3: Use Link component for menu navigation
              key={item.name}
              href={item.href}
              className={`font-semibold transition-colors duration-300 ${
                scrolled ? "text-white" : "text-[#071431] dark:text-white"
              } hover:text-[#0569dc] dark:hover:text-gray-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Button - Updated to Link component and correct href */}
        <div className="hidden lg:flex lg:flex-1 justify-end">
          {/* FIX 4: Use Link component and ensure proper contrast */}
          <Link
            href="/login" // Assuming this leads to a /login page
            className="rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#0056D4] text-white hover:bg-[#0047a0] transition"
          >
            Log in →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? "text-white" : "text-[#071431] dark:text-gray-400"
            }`}
            aria-label="Open main menu" // Accessibility improvement
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            {/* Logo in Mobile Dialog - Use Link component */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Go to Homepage"
            >
              <Image
                src="/images/blue.png"
                alt="Company Logo"
                width={140}
                height={40}
                priority={true} // FIX 2: Add priority={true} here as well
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              aria-label="Close menu" // Accessibility improvement
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            {/* Mobile Menu Links - Use Link component */}
            <div className="space-y-2 py-6">
              {menuItems.map((item) => (
                <Link // FIX 3: Use Link component for mobile menu navigation
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-[#071431] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Login Button - Used Link component and correct href/contrast */}
            <div>
              <Link // FIX 4: Use Link component and ensure proper contrast
                href="/login" // Assuming this leads to a /login page
                className="block rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#0056D4] text-white hover:bg-[#0047a0] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in →
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <style jsx global>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
}
