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
    <>
    <div className="bg-[#050D20] px-4">

<footer className="container w-full text-[#99a1af] border-t border-[#0f172a]">
  <div className="">
    {/* Top Grid */}
    <div className="pt-8 pb-10 grid gap-10 lg:grid-cols-12 items-start">
      {/* Brand + Description + Contact */}
      <div className="lg:col-span-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/white.png"
            alt="Byyizzy Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </Link>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-[#99a1af]">
          We are transforming India’s fragmented industrial and hardware market
          through a fully integrated B2B & B2C ecosystem powered by hyperlocal
          stores and advanced technology. Our mission is to build India’s most
          trusted supply network for smarter, faster, and more efficient
          procurement.
        </p>

        <div className="mt-5 space-y-1 text-sm mb-0">
          <p className="text-white font-semibold mb-0">Contact Us</p>
          <p className="mb-0">
            Email:{" "}
            <a
              href="mailto:Support@byyizzy.com"
              className="hover:text-white transition-colors duration-200"
            >
              Support@byyizzy.com
            </a>
          </p>
          <p>Phone: +91 96989 03089</p>
        </div>
      </div>

      {/* Company */}
      <div className="lg:col-span-2">
        <h6 className="text-base font-semibold mb-4 text-white">Company</h6>
        <ul className="space-y-2 text-sm">
          <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
          <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
          <li><Link href="/" className="hover:text-white transition-colors duration-200">Become a Partner</Link></li>
          <li><Link href="/" className="hover:text-white transition-colors duration-200">Careers</Link></li>
        </ul>
      </div>

      {/* Explore */}
      <div className="lg:col-span-3">
        <h6 className="text-base font-semibold mb-4 text-white">Explore</h6>
        <ul className="space-y-2 text-sm">
          <li><Link href="/services/IndustrialProductsAggregation" className="hover:text-white transition-colors duration-200">Industrial Products Aggregation</Link></li>
          <li><Link href="/services/paas" className="hover:text-white transition-colors duration-200">Procurement as a Service (PaaS)</Link></li>
          <li><Link href="/services/HardwareStoreChain" className="hover:text-white transition-colors duration-200">Hardware Store Chain</Link></li>
          <li><Link href="/services/maas" className="hover:text-white transition-colors duration-200">Manufacturing as a Service (MaaS)</Link></li>
          <li><Link href="/category" className="hover:text-white transition-colors duration-200">Product Categories</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div className="lg:col-span-2">
        <h6 className="text-base font-semibold mb-4 text-white">Support</h6>
        <ul className="space-y-2 text-sm">
          <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
          <li><Link href="/Contact" className="hover:text-white transition-colors duration-200">Help Center</Link></li>
          <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">Terms and Conditions</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 py-4">
      <p className="text-center text-xs sm:text-sm text-[#6b7280]">
        © 2025{" "}
        <Link href="/" className="hover:text-white transition-colors duration-200">
          Byyizzy.com
        </Link>{" "}
        . All rights reserved.
      </p>
    </div>
  </div>
</footer>
      </div>
    </>
  );
};

export default Footer;
