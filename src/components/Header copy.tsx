"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? "fixed top-0 left-0 bg-[#067afe] shadow-md animate-slideDown"
          : "relative bg-white dark:bg-gray-900"
      }`}
      style={{
        position: scrolled ? "fixed" : "relative",
      }}
    >
      <nav
        className="mx-auto flex container items-center justify-between py-3 lg:px-8"
        aria-label="Global"
      >
        {/* Left Menu */}
        <PopoverGroup
          className={`hidden lg:flex lg:gap-x-8 ${
            scrolled ? "text-white" : "text-[#071431]"
          }`}
        >
          {["Video1", "Video2", "Video3"].map((item) => (
            <a
              key={item}
              href="#"
              className={`font-semibold ${
                scrolled ? "text-white" : "text-[#071431] dark:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </PopoverGroup>

        {/* Center Logo */}
        <div className="flex lg:flex-1 justify-center">
          <a href="#" className="p-1.5">
            <Image
              src={scrolled ? "/images/white.png" : "/images/blue.png"}
              alt="Logo"
              width={200}
              height={40}
              className="object-contain transition-all duration-300"
            />
          </a>
        </div>

        {/* Right Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {["About", "Category", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className={`font-semibold ${
                scrolled ? "text-white" : "text-[#071431] dark:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className={`rounded-lg px-5 py-2 text-sm font-semibold shadow-md transition-all duration-300
              ${
                scrolled
                  ? "bg-white text-[#067afe] hover:bg-gray-100"
                  : "bg-[#067afe] text-white hover:bg-[#0569dc]"
              }`}
          >
            Log in →
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? "text-white" : "text-[#071431] dark:text-gray-400"
            }`}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Image
              src="/images/blue.png"
              alt="Logo"
              width={160}
              height={40}
              quality={60} // 🔥 smaller payload for logos
              sizes="(max-width: 768px) 120px, 160px" // ✅ responsive image size hints
              priority // ✅ only if this logo is visible above the fold (e.g., in header)
              className="object-contain"
              fetchPriority="high" // ✅ helps LCP if this logo is part of header/hero
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <div className="space-y-2 py-6">
              {[
                "Video1",
                "Video2",
                "Video3",
                "About",
                "Category",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-[#071431] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block rounded-lg bg-[#067afe] px-3 py-2.5 text-base font-semibold text-white text-center shadow-md hover:bg-[#0569dc]"
            >
              Log in →
            </a>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Animation Keyframes */}
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
      `}</style>
    </header>
  );
}
