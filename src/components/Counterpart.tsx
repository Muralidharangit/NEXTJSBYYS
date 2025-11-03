"use client";
import Link from "next/link";

const Counterpart = () => {
  return (
    <section className="py-16 px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Right Description */}
        <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
          {/* Label */}
          {/* <span className="text-sm font-medium bg-white/50 px-3 py-1 rounded">
             
            </span> */}

          <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full mb-3">
            How It Works
          </span>

          {/* Heading */}
          <h2
            className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-2 text-[#050d20]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Integrating India’s Hardware Ecosystem
          </h2>

          {/* Description */}
          <p className="text-gray-700" data-aos="fade-up" data-aos-delay="500">
            Byyizzy connects suppliers, manufacturers, and local hardware stores
            to create a transparent and scalable procurement network that drives
            efficiency and growth.
          </p>
          <p className="text-gray-700" data-aos="fade-up" data-aos-delay="600">
            With AI-driven sourcing, e-auction platforms, and hyper-local
            delivery, we simplify complex industrial supply chains and deliver
            measurable value.
          </p>

          {/* Counters Section */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {[
              { value: 2500, label: "Suppliers Onboarded", icon: "🏭" },
              { value: 50000, label: "Products Delivered", icon: "📦" },
              { value: 120, label: "Cities Connected", icon: "🌆" },
            ].map((item, index) => (
              <div
                key={index}
                className="  rounded-1xl p-6 text-center shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold" id={`counter-${index}`}>
                  {item.value.toLocaleString()}+
                </h3>
                <p className="text-gray-700 mt-1 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          {/* dgchngd */}

          {/* CTA Button */}
          {/* <button className="px-6 py-3 bg-[#067afeef] text-white font-semibold rounded shadow-lg transition duration-300 hover:bg-[#056ae0] hover:shadow-xl mt-6">
            JOIN THE NETWORK →
          </button> */}
        </div>
        {/* Left Cards */}
        <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
          {[
            {
              title: "Fastest Delivery of Industrial Products",
              description:
                "Byyizzy ensures on-time and in-full delivery (OTIF) through optimized inventory and hyper-local fulfillment centers.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck"
                >
                  <path d="M10 17h4v-6H2v6h2" />
                  <path d="M16 17h3v-3h5l2 3v4H16z" />
                  <circle cx="6" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                </svg>
              ),
            },
            {
              title: "Easy Credit & EMI Facility",
              description:
                "Providing flexible payment solutions for B2C customers to simplify industrial product purchases.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-credit-card"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              ),
            },
            {
              title: "Optimized Inventory Model",
              description:
                "Reducing dead inventory and improving margins with data-driven demand forecasting and local engagement.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4-7 4A2 2 0 0 0 5 8v8a2 2 0 0 0 1 1.73l7 4 7-4A2 2 0 0 0 21 16z" />
                </svg>
              ),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative flex items-start gap-5 rounded-2xl dark:bg-[#0d1117]/70 backdrop-blur-xl p-6 border bg-[#eff3fa] border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(6,122,254,0.25)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Circle Container */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-inner shadow-[#067afe40] group-hover:shadow-[#067afe80] transition duration-500 overflow-hidden">
                {/* Icon Wrapper (hidden until hover) */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full  text-[#067afe]  overflow-hidden">
                  <div className="transform  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1.25,0.5,1)]">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-[#050d20] group-hover:text-[#067afe] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Glow Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#067afe] to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counterpart;
