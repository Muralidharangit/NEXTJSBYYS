"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050D20] text-gray-400">
      <div className="mx-auto container px-4 sm:px-6 lg:px-2">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          {/* 1. Logo, Company Description, & Contact (BYYIZZY CONTENT) */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            {/* FIX: Use Link for internal navigation and set href to homepage "/" */}
            <Link href="/" className="flex justify-center lg:justify-start">
              <Image
                src="/images/white.png" // Use your actual Byyizzy logo image
                alt="Byyizzy Logo"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* UPDATED COMPANY DESCRIPTION */}
            <p className="py-6 text-md text-[#99a1af] lg:max-w-md text-center lg:text-left">
              We are an integrated **B2B & B2C marketplace** and Indias
              fastest-growing Hardware & DIY Store chain, focused on
              revolutionizing the MRO, Spares, and Industrial Hardware supply
              chain with advanced technology.
            </p>

            {/* ADDED CONTACT DETAILS */}
            <div className="text-center lg:text-left">
              <p className="text-white font-medium mb-1">Contact Us</p>
              <p className="text-[#99a1af]">
                Email:{" "}
                <a href="mailto:info@byyizzy.com" className="hover:text-white">
                  info@byyizzy.com
                </a>
              </p>
              <p className="text-[#99a1af]">Phone: +91 XXXX XXXXX</p>
            </div>
          </div>

          {/* 2. Company (Quick Links) */}
          <div className="lg:mx-auto text-left">
            {/* FIX: Replaced inline style with Tailwind class text-white */}
            <h6 className="text-[20px] font-small mb-7 text-white">
              Quick Links
            </h6>
            <ul className="text-md transition-all text-[#99a1af] duration-500">
              <li className="mb-6">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-6">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-6">
                <Link href="/service" className="hover:text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/category" className="hover:text-white">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Services */}
          <div className="lg:mx-auto text-left">
            {/* FIX: Replaced inline style with Tailwind class text-white */}
            <h6 className="text-lg font-medium mb-7 text-white">Services</h6>
            <ul className="text-md transition-all text-[#99a1af] duration-500">
              <li className="mb-6">
                <Link href="/services/paas" className="hover:text-white">
                  Procurement as a Service (PaaS)
                </Link>
              </li>
              <li className="mb-6">
                {/* Link is correctly used here */}
                <Link
                  href="/services/HardwareStoreChain"
                  className="hover:text-white"
                >
                  Byyizzy Powered Hardware Store Chain
                </Link>
              </li>
              <li className="mb-6">
                {/* Link is correctly used here */}
                <Link
                  href="/services/IndustrialProductsAggregation"
                  className="hover:text-white"
                >
                  Industrial Products Aggregation
                </Link>
              </li>
              <li>
                {/* Link is correctly used here */}
                <Link href="/services/maas" className="hover:text-white">
                  Manufacturing as a Service (MaaS)
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Support */}
          <div className="lg:mx-auto text-left">
            {/* FIX: Replaced inline style with Tailwind class text-white */}
            <h6 className="text-lg font-medium mb-7 text-white">Support</h6>
            <ul className="text-md text-[#99a1af] transition-all duration-500">
              <li className="mb-6">
                {/* FIX: Using Link and assumed path for internal T&C page */}
                <Link href="/terms" className="hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-6">
                {/* FIX: Using Link and assumed path for internal Privacy Policy page */}
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Follow us */}
          <div className="lg:mx-auto text-left">
            {/* FIX: Replaced inline style with Tailwind class text-white */}
            <h6 className="text-lg font-medium mb-7 text-white">Follow us</h6>
            <div className="flex space-x-4 mb-6">
              <a
                href="#" // Replace with actual Facebook URL
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-colors"
                aria-label="Follow us on Facebook" // FIX: Added accessible label
              >
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a
                href="#" // Replace with actual Instagram URL
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-pink-500 transition-colors"
                aria-label="Follow us on Instagram" // FIX: Added accessible label
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a
                href="#" // Replace with actual Twitter URL
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-400 transition-colors"
                aria-label="Follow us on X (formerly Twitter)" // FIX: Added accessible label
              >
                <FaTwitter className="text-white w-4 h-4" />
              </a>
              <a
                href="#" // Replace with actual LinkedIn URL
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-700 transition-colors"
                aria-label="Connect with us on LinkedIn" // FIX: Added accessible label
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Updated Copyright) */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-md text-[#99a1af] ">
              © 2025 {/* FIX: Using Link for internal navigation */}
              <Link href="/" className="hover:text-white">
                Byyizzy.com
              </Link>
              . All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              {/* FIX: Using Link for internal navigation and assumed paths */}
              <Link href="/terms" className="text-[#99a1af] hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-[#99a1af] hover:text-white">
                Privacy
              </Link>
              <Link href="/cookies" className="text-[#99a1af] hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
