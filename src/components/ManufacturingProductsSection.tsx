import Image from "next/image";
import Link from "next/link";

const ACCESSIBLE_BLUE = "bg-blue-600"; // Replace with your color class

export default function ManufacturingProductsSection() {
  const products = [
    {
      title: "Procurement as a Service (PaaS)",
      desc: "Automate your Source-to-Pay process— for Just 1.5% of Your Spend",
      features: [
        "Global Sourcing Expertise — Access verified suppliers worldwide",
        "Local Fulfillment Network — Fast, reliable, and cost-effective delivery",
        "AI-Powered Digital Ecosystem — Automate RFQs, quotes & analytics",
        "Full Visibility & Control — Track spend, performance, and savings in real time",
        "Zero Tech Investment — End-to-end procurement support with transparent pricing",
      ],
      img: "/images/s1.webp",
      moreLink: "/services/paas",
    },
    {
      title: "Byyizzy Powered Hardware Store Chain",
      desc: "Building India’s First Hardware Store Chain!",
      features: [
        "Technology-driven chain of Hyperlocal Hardware Stores",
        "Best Prices, Smarter Technology, Reducing unsold inventory and Higher profits",
        "Great In-Store Experience, Online Convenience",
        "Integrated B2B & B2C ecosystem",
        "Easy credit & EMI Facility to B2C Customer",
      ],
      img: "/images/s2.webp",
      moreLink: "/services/HardwareStoreChain",
    },
    {
      title: "Manufacturing as a Service (MaaS)",
      desc: "Streamline Your Customized and Non-Standard Spare Parts Supply Chain",
      features: [
        "Bridging SMEs and Large Clients",
        "AI-Driven Production Management",
        "Real-Time Visibility & Control",
        "Global Manufacturing Network",
        "Access to best Production Capabilities",
      ],
      img: "/images/s3.png",
      moreLink: "/services/maas",
    },
    {
      title: "Industrial Products Aggregation",
      desc: "Streamline your procurement. Create value. Generate savings from tail-spend.",
      features: [
        "Fastest Delivery – within just 24 hours! (Via Byyizzy-powered hardware stores)",
        "Transparent Pricing",
        "100% Process Visibility",
        "Local Business Engagement",
        "Integrated B2B & B2C Ecosystem",
        "End-to-End Tracking & Catalog-Based Buying",
        "Supporting Local, Saving Community Wealth",
      ],
      img: "/images/s4.webp",
      moreLink: "/services/IndustrialProductsAggregation",
    },
  ];

  return (
    <section>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950"></span> */}

            <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full mb-3">
              Our Services
            </span>
            <h2 className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]">
              Manufacturing Products
            </h2>
          </div>

          <div className="relative space-y-12 md:space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`sticky top-32 ${ACCESSIBLE_BLUE} rounded-xl p-8 md:flex md:items-center mb-3`}
              >
                {/* Content Left / Image Right for odd index */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                  } text-white`}
                >
                  <h3 className="mb-4 text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="mb-6">{product.desc}</p>
                  <ul className="mb-6 space-y-4">
                    {product.features.map((item, i) => (
                      <li className="flex items-center gap-x-2" key={i}>
                        <span className="flex h-7 w-7 justify-center items-center rounded-full bg-white">
                          <svg
                            stroke="#0057b3"
                            fill="#0057b3"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="h-4 w-4"
                          >
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <Link
                        href={product.moreLink}
                        className="px-3 py-1 border border-white rounded-full text-white block"
                      >
                        More Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="px-3 py-1 border border-white rounded-full text-white block"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Image Right / Content Left */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <Image
                    src={product.img}
                    alt={product.title}
                    className="w-full rounded-lg"
                    width={1200}
                    height={675}
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
