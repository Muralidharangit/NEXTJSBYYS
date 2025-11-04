import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#eff3fa]">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          {/* Image */}
          <div
            className="flex items-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <Image
              src="/images/pngind.png"
              alt="Byyizzy India Map"
              width={500}
              height={400}
              priority
              fetchPriority="high"
              className="rounded-xl mx-auto"
            />
          </div>

          {/* Text content */}
          <div
            className="px-3 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span
              className="text-xs sm:text-sm text-primary uppercase font-semibold tracking-wider text-default-950"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              India’s Fast-Growing Hardware & Procurement Platform
            </span>
            <h2
              className="animate-letters text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-4 text-[#050d20] leading-snug sm:leading-normal"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Empowering Businesses with Efficient & Sustainable Procurement
            </h2>

            <Link
              href="/service"
              className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Link>

            <hr className="border-gray-200 my-6" />

            {/* Feature 1 */}
            <div
              className="flex items-start gap-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-base text-[#067afe]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#050d20] font-semibold">
                  Integrated Hardware Chain Network
                </h3>
                <p className="text-base font-normal text-gray-500 mt-2">
                  Bringing India’s fragmented hardware stores together under one
                  brand — powered by Byyizzy’s expertise, technology, and
                  hyper-local model.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="flex items-start gap-5 mt-5"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layers-2 text-base text-[#067afe]"
                  >
                    <path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" />
                    <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#050d20] font-semibold">
                  Optimize Procurement & Supply Chain
                </h3>
                <p className="text-base font-normal text-gray-500 mt-2">
                  Simplifying Source-to-Pay, improving margins, and enabling
                  sustainable, transparent procurement through advanced digital
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
