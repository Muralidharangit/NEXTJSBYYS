import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Load the tiny client piece only on small screens usage
const HeaderClient = dynamic(() => import("./HeaderClient"), { ssr: false });

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Category", href: "/category" },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-shadow">
      <nav className="mx-auto container flex items-center justify-between py-3 lg:px-8 px-2">
        {/* Left: Logo */}
        <div className="flex flex-1">
          <Link href="/" className="p-1.5" aria-label="Go to Homepage">
            {/* Keep exactly one priority image above the fold */}
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
           
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold text-[#071431] dark:text-white hover:text-[#0569dc] dark:hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Login */}
        <div className="hidden lg:flex lg:flex-1 justify-end">
          <Link
            href="/"
            className="rounded-lg px-5 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Search
          </Link>
          <Link
            href="/"
            className="rounded-lg px-5  mx-3 py-2 text-sm font-semibold shadow-md bg-[#067afe] text-white hover:bg-[#0047a0] transition"
          >
            Supplier Registration 
          </Link>
        </div>

        {/* Mobile Controls (tiny client component) */}
        <div className="flex lg:hidden">
          <HeaderClient menuItems={menuItems} />
        </div>
      </nav>
    </header>
  );
}