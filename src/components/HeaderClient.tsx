// app/components/HeaderClient.tsx
"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

type Item = { name: string; href: string };

export default function HeaderClient({ menuItems }: { menuItems: Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open main menu"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#071431] dark:text-gray-300"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke="currentColor" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
        </svg>
      </button>

      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-[9999] lg:hidden">
            {/* Overlay */}
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-white"
            />
            {/* Panel */}
            <div className="absolute right-0 top-0 h-full w-full sm:max-w-sm bg-white dark:bg-gray-900 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setOpen(false)} aria-label="Go to Homepage">
                  <Image src="/images/blue.png" alt="Company Logo" width={140} height={40} />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke="currentColor" strokeWidth="1.5" d="M6 6l12 12M18 6L6 18"/>
                  </svg>
                </button>
              </div>

              <div className="mt-6 space-y-2 py-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-[#071431] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#0056D4] text-white hover:bg-[#0047a0] transition"
                >
                  Log in →
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
