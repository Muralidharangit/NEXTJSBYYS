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
            <a href="#" className="flex justify-center lg:justify-start">
              <Image
                src="/images/white.png" // Use your actual Byyizzy logo image
                alt="Byyizzy Logo"
                width={160}
                height={40}
                className="object-contain"
              />
            </a>
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

          {/* 2. Company (Updated from "Links") */}
          <div className="lg:mx-auto text-left">
            <h6
              className="text-[20px] font-small mb-7 "
              style={{ color: "white" }}
            >
              Quick Links
            </h6>
            <ul className="text-md transition-all  text-[#99a1af] duration-500">
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

          {/* 3. Services (Updated from "Pages") */}
          <div className="lg:mx-auto text-left">
            <h6 className="text-lg font-medium mb-7" style={{ color: "white" }}>
              Services
            </h6>
            <ul className="text-md transition-all text-[#99a1af]  duration-500">
              <li className="mb-6">
                <Link href="/services/paas" className="hover:text-white">
                  Procurement as a Service (PaaS)
                </Link>
              </li>
              <li className="mb-6">
                <a href="/services/HardwareStoreChain" className="hover:text-white">
                   Byyizzy Powered Hardware Store Chain
                </a>
              </li>
              <li className="mb-6">
                <a href="/services/IndustrialProductsAggregation" className="hover:text-white">
                  Industrial Products Aggregation
                </a>
              </li>
              <li>
                <a href="/services/maas" className="hover:text-white">
                  Manufacturing as a Service (MaaS)
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Support (Updated links for business model) */}
          <div className="lg:mx-auto text-left">
            <h6 className="text-lg font-medium mb-7" style={{ color: "white" }}>
              Support
            </h6>
            <ul className="text-md text-[#99a1af]  transition-all duration-500">
              <li className="mb-6">
                <a href="#" className="hover:text-white">
                  Teams and Condition
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className="hover:text-white">
                  Privacy and policy
                </a>
              </li>
            
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Follow us (Existing) */}
          <div className="lg:mx-auto text-left">
            <h6 className="text-lg font-medium mb-7" style={{ color: "white" }}>
              Follow us
            </h6>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-colors"
              >
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-pink-500 transition-colors"
              >
                <FaInstagram className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-400 transition-colors"
              >
                <FaTwitter className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-blue-700 transition-colors"
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
              © 2025 <a href="#">Byyizzy.com</a>. All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a href="#" className="text-[#99a1af]  hover:text-white">
                Terms
              </a>
              {/* sw */}
              <a href="#" className="text-[#99a1af]  hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-[#99a1af]  hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>



  );
};

export default Footer;
