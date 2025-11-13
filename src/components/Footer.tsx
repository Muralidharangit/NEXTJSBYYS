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
     <div className="lg:col-span-2  text-left">
  <h6 className="text-lg font-semibold mb-4 text-white">Follow us</h6>

  <div className="flex flex-wrap justify-start items-center gap-2">
    {/* Facebook */}
    <a
      href="#"
      aria-label="Facebook"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2235] hover:bg-[#067afe] transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="#"
      aria-label="Instagram"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2235] hover:bg-[#067afe] transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
       viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      </svg>
    </a>

    {/* Twitter */}
    <a
      href="#"
      aria-label="Twitter"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2235] hover:bg-[#067afe] transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
       
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.72 1.04A4.24 4.24 0 0 0 16.11 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.68.11 1A12.08 12.08 0 0 1 3.1 5.16a4.25 4.25 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.94-.54v.05c0 2.06 1.46 3.78 3.39 4.17-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.93 3.97 2.96A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.49 1.9c7.79 0 12.05-6.45 12.05-12.05l-.01-.55A8.42 8.42 0 0 0 22.46 6z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      aria-label="LinkedIn"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2235] hover:bg-[#067afe] transition-all duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17v-7.3H5.67V17h2.67zm-1.34-8.3c.85 0 1.53-.69 1.53-1.54s-.68-1.53-1.53-1.53S5.47 6.3 5.47 7.16s.69 1.54 1.53 1.54zm9 8.3v-3.7c0-.89-.03-2.04-1.25-2.04-1.26 0-1.45.97-1.45 1.97V17h-2.67v-7.3h2.56v1h.04c.36-.68 1.25-1.4 2.57-1.4 2.75 0 3.26 1.81 3.26 4.16V17h-2.06z" />
      </svg>
    </a>
  </div>
</div>

    </div>

    {/* Bottom Bar */}
     <div className="  py-4 flex flex-col sm:flex-row justify-between items-center border-t border-[#1f2937]">
        {/* Left text */}
        <p className="text-xs sm:text-sm text-gray-400">
          © 2025{" "}
          <Link 
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Byyizzy.com
          </Link>{" "}
          . All rights reserved.
        </p>

        {/* Right links */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0 text-xs sm:text-sm text-gray-400">
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms
          </Link>
          <span className="text-gray-600">•</span>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy
          </Link>
          <span className="text-gray-600">•</span>
          <Link
            href="/refund"
            className="hover:text-white transition-colors duration-200"
          >
            Cookies
          </Link>
        </div>
      </div>

 {/* Support */}
<div className="lg:col-span-2">
  <h6 className="text-base font-semibold mb-4 text-white">Support</h6>

  <ul className="space-y-2 text-sm text-gray-300">
    <li>
      <Link href="/contact" className="hover:text-white transition-colors duration-200">
        Contact Us
      </Link>
    </li>
    <li>
      <Link href="/help-center" className="hover:text-white transition-colors duration-200">
        Help Center
      </Link>
    </li>
    <li>
      <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
        Terms &amp; Conditions
      </Link>
    </li>
    <li>
      <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
        Privacy Policy
      </Link>
    </li>
  </ul>

  {/* Social */}
  <div className="mt-5">
  {/* <h6 className="text-base font-semibold mb-4 text-white">Follow us</h6> */}
  <p className="text-white font-semibold mb-0">Follow us</p>
    <div className="flex items-center gap-3">
      <Link
        href="https://instagram.com/byyizzy" // update your handle
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl border border-gray-700 hover:border-white hover:text-white text-gray-300 transition"
      >
        <FaInstagram className="h-5 w-5" />
      </Link>

      <Link
        href="https://facebook.com/byyizzy"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl border border-gray-700 hover:border-white hover:text-white text-gray-300 transition"
      >
        <FaFacebookF className="h-5 w-5" />
      </Link>

      <Link
        href="https://x.com/byyizzy"
        aria-label="X (Twitter)"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl border border-gray-700 hover:border-white hover:text-white text-gray-300 transition"
      >
        <FaTwitter className="h-5 w-5" />
      </Link>

      <Link
        href="https://www.linkedin.com/company/byyizzy"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl border border-gray-700 hover:border-white hover:text-white text-gray-300 transition"
      >
        <FaLinkedinIn className="h-5 w-5" />
      </Link>

    
    </div>
  </div>
</div>
    </div>

 {/* Bottom Bar */}
<div className="border-t border-gray-800 py-4">
  <div className="container mx-auto px-3 flex flex-col sm:flex-row items-center justify-between gap-3">
    {/* Left */}
    <p className="text-center sm:text-left text-xs sm:text-sm text-[#6b7280]">
      © 2025{" "}
      <Link href="/" className="hover:text-white transition-colors duration-200">
        Byyizzy.com
      </Link>{" "}
      . All rights reserved.
    </p>

    {/* Right */}
    <nav aria-label="Legal" className="text-xs sm:text-sm text-[#6b7280]">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
            Terms
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/cookies-policy" className="hover:text-white transition-colors duration-200">
            Cookies
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</div>

  </div>
</footer>
      </div>
    </>
  );
};

export default Footer;
