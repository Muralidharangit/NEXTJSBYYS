"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Category",
    href: "/category",
    subCategories: [
      {
        name: "Electronics",
        icon: DevicePhoneMobileIcon,
        href: "/category/electronics",
      },
      { name: "Furniture", icon: HomeModernIcon, href: "/category/furniture" },
      { name: "Clothing", icon: ShoppingBagIcon, href: "/category/clothing" },
      { name: "Books", icon: BookOpenIcon, href: "/category/books" },
    ],
  },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

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
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] transition"
              >
                {item.name}
                {item.subCategories && (
                  <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* ✅ Mega Dropdown */}
              {item.subCategories && (
                <div className="absolute left-0 mt-3 hidden group-hover:grid grid-cols-2 gap-4 w-96 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                  {item.subCategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <sub.icon className="w-5 h-5 text-[#067afe]" />
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {sub.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
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
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.subCategories ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center py-2 px-2 font-medium text-left text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>         -
                    {openDropdown === item.name && (
                      <div className="pl-5 mt-1 flex flex-col gap-2">
                        {item.subCategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-center gap-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#067afe]"
                          >
                            <sub.icon className="w-4 h-4 text-[#067afe]" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-2 text-gray-800 dark:text-gray-200 hover:text-[#067afe]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
