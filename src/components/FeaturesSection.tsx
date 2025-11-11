import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Reusable inline ReadMore toggle */
function ReadMore({
  id,
  lead,
  rest,
  className = "text-base font-normal text-gray-500 mt-2",
}: {
  id: string;
  lead: string;
  rest: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <p className={className}>
      {lead}{" "}
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="font-semibold text-[#0569dc] underline underline-offset-4 hover:no-underline"
          aria-expanded={open}
          aria-controls={id}
        >
          Learn more
        </button>
      ) : (
        <>
          <span id={id} className="inline">
            {rest}
          </span>{" "}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-semibold text-[#0569dc] underline underline-offset-4 hover:no-underline"
            aria-expanded={open}
            aria-controls={id}
          >
            Show less
          </button>
        </>
      )}
    </p>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-15 bg-[#eff3fa]">
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
            <h3
              className="animate-letters text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-4 text-[#050d20] leading-snug sm:leading-normal"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Building India’s Most Trusted Industrial & Hardware Supply Network
            </h3>

            <p className="text-base text-gray-700 mt-2">
              Transforming the supply chain with AI technology, Strategic
              Sourcing and Byyizzy-powered hardware stores for a lean,
              sustainable model
            </p>

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
                <h5 className="text-xl text-[#050d20] font-semibold">
                  Integrated Industrial & Hardware Chain Network
                </h5>

                <ReadMore
                  id="f1-more"
                  lead="TCO optimization through a seamlessly integrated B2B & B2C business ecosystem"
                  rest=" Connecting India’s fragmented hardware stores under one trusted brand — Byyizzy — powered by cutting-edge technology, procurement expertise, and a hyper-local fulfillment model."
                />
              </div>
            </div>

            {/* Feature 2 (optional: also use ReadMore the same way) */}
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
                {/* <h5 className="text-xl text-[#050d20] font-semibold">
                  Optimize Procurement & Supply Chain
                </h5> */}

                {/* Keep full text, or convert to ReadMore like Feature 1 */}
                {/* Example:
                <ReadMore
                  id="f2-more"
                  lead="Digitize the Source-to-Pay process with full transparency, improved cost control, and technology-driven tail-spend optimization"
                  rest=" Empowering businesses with smart, sustainable procurement and SCM solutions."
                />
                */}
                {/* <p className="text-base font-normal text-gray-500 mt-2">
                  Digitize the Source-to-Pay process with full transparency,
                  improved cost control, and technology-driven tail-spend
                  optimization. Empowering businesses with smart, sustainable
                  procurement and SCM solutions.
                </p> */}

                <div>
                <h5 className="text-xl text-[#050d20] font-semibold">
                 Optimize Procurement & Supply Chain
                </h5>


                <ReadMore
                  id="f1-more"
                  lead="Digitize the Source-to-Pay process with full transparency, improved cost control, and technology-driven tail-spend optimization."
                  rest="Empowering businesses with smart, sustainable procurement and SCM solutions."
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
