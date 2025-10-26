import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Procurement as a Service (PaaS)",
    desc: "Simplify and digitize your sourcing, procurement, and supply chain management through our AI-powered e-sourcing platform and verified supplier network.",
    img: "/images/s04.webp",
    href: "/services/paas",
  },
  {
    title: "Hardware Store Chain",
    desc: "We’re creating India’s first hardware store chain that blends online convenience with a great in-store experience.",
    img: "/images/s02.webp",
    href: "/services/HardwareStoreChain",
  },
  {
    title: "Industrial Products Aggregation",
    desc: "High complexity and low-value transactions have made Industrial MRO supply chain hard to manage well—even as value trickles away.",
    img: "/images/s03.webp",
    href: "/services/IndustrialProductsAggregation",
  },
  {
    title: "Manufacturing as a Service (MaaS)",
    desc: "Transform your custom & non-standard spare parts supply chain with our AI-powered manufacturing platform and extensive supplier network. Achieve full visibility, reduce lead times, and enhance quality.",
    img: "/images/s01.webp",
    href: "/services/maas",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div data-aos="fade-right">
            <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
              Our Services
            </span>
            <h2
              className="px-4 animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Our Services with Quality & Trust
            </h2>
          </div>
          <div data-aos="fade-left" data-aos-delay={300}>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#067afe] font-medium hover:underline"
            >
              All Services <i className="fa-solid fa-chevron-right" />
            </a>
          </div>
        </div>

        {/* Service items */}
        <div className="space-y-6 bg-[#f1f1f1]">
          {services.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <div
                className="group flex flex-wrap md:flex-nowrap items-center border-b border-indigo-100 py-8 transition-all duration-300 lg:hover:bg-[#067afe] lg:hover:px-6"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Left side */}
                <div className="flex items-center gap-6 md:flex-[0_0_48%] w-full">
                  <div className="w-0 overflow-hidden transition-all duration-500 lg:group-hover:w-[273px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={273}
                      height={160}
                      className="h-auto w-full md:w-auto"
                      priority={idx === 0} // preload first image only
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden lg:inline-block px-4 py-1 rounded-full border border-indigo-200 text-gray-700 group-hover:text-white group-hover:border-white transition">
                      {`0${idx + 1}`}
                    </span>
                    <h3 className="text-xl md:text-3xl font-semibold text-gray-900 lg:group-hover:text-white transition">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center justify-between md:flex-[0_0_50%] w-full mt-4 md:mt-0">
                  <div className="max-w-md w-full">
                    <p className="text-gray-600 lg:group-hover:text-white transition px-4 md:px-0">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden lg:flex ml-6">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-900 text-gray-900 transition lg:group-hover:bg-white lg:group-hover:text-indigo-600 lg:group-hover:border-indigo-600">
                      <FaArrowRight className="w-4 h-4 text-black lg:group-hover:text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
