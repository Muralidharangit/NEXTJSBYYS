"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
    { name: "Services", href: "/service" }, // Using '/services' path
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? "fixed top-0 left-0 bg-[#067afe] shadow-md animate-slideDown"
          : "relative bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="mx-auto flex container items-center justify-between py-3 lg:px-8">
        {/* Left: Logo - Updated href to '/' */}
        <div className="flex flex-1">
          <a href="#" className="p-1.5">
            <Image
              src={scrolled ? "/images/white.png" : "/images/blue.png"}
              alt="Logo"
              width={160}
              height={40}
              className="object-contain transition-all duration-300"
            />
          </a>
        </div>

        {/* Center: Menu - Updated href to use path from menuItems */}
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href} // LINK ADDED HERE
              className={`font-semibold transition-colors duration-300 ${
                scrolled ? "text-white" : "text-[#071431] dark:text-white"
              } hover:text-[#0569dc] dark:hover:text-gray-300`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Button - Kept as '#' for now, assuming this leads to a separate login page/modal */}
        <div className="hidden lg:flex lg:flex-1 justify-end">
          <a
            href="/login" // LINK ADDED HERE - Changed to a common '/login' path
            className={`rounded-lg px-5 py-2 text-sm font-semibold shadow-md transition-all duration-300 ${
              scrolled
                ? "bg-white text-[#067afe] hover:bg-gray-100"
                : "bg-[#067afe] text-white hover:bg-[#0569dc]"
            }`}
          >
            Log in →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? "text-white" : "text-[#071431] dark:text-gray-400"
            }`}
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
            {/* Logo in Mobile Dialog - Updated href to '/' */}
            <a href="#">
              <Image
                src="/images/blue.png"
                alt="Logo"
                width={140}
                height={40}
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            {/* Mobile Menu Links - Updated href to use path from menuItems */}
            <div className="space-y-2 py-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href} // LINK ADDED HERE
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-[#071431] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Login Button - Updated href to '/login' */}
            <a
              href="/login" // LINK ADDED HERE
              className="block rounded-lg bg-[#067afe] px-3 py-2.5 text-base font-semibold text-white text-center shadow-md hover:bg-[#0569dc]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in →
            </a>
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
