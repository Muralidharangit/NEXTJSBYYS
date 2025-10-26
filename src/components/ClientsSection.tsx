// S:\2025\OCT\NEXTJSBYYS\src\components\ClientsSection.tsx
import { useMemo } from "react";
import rawBrands from "../Data/Brand.json";

// --- Types -------------------------------------------------
type Brand = {
  id?: string | number;
  name?: string;
  logo?: string;
  [k: string]: unknown;
};

// Your JSON can be one of these shapes:
type BrandsJSON =
  | Brand[]                // [ { id, name, logo }, ... ]
  | { brands: Brand[] }    // { brands: [ ... ] }
  | Record<string, Brand>; // { acme: {..}, mega: {..} }

// Provide a typed view of the imported JSON
const brandsData = rawBrands as unknown as BrandsJSON;

type Props = {
  brands?: Brand[] | { brands?: Brand[] };
};

// --- Type guards (no `any`) -------------------------------
const isBrand = (v: unknown): v is Brand =>
  typeof v === "object" &&
  v !== null &&
  // at least one of these optional keys exists
  ("logo" in (v as object) || "name" in (v as object) || "id" in (v as object));

function isBrandArray(x: unknown): x is Brand[] {
  return Array.isArray(x) && x.every(isBrand);
}

function hasBrandsArray(x: unknown): x is { brands: Brand[] } {
  if (typeof x !== "object" || x === null) return false;
  const maybe = (x as Record<string, unknown>).brands;
  return Array.isArray(maybe) && maybe.every(isBrand);
}

// --- Component --------------------------------------------
export default function ClientsSection({ brands }: Props) {
  const brandList: Brand[] = useMemo(() => {
    // 1) Prop is already array
    if (isBrandArray(brands)) return brands;

    // 2) Prop has .brands array
    if (brands && hasBrandsArray(brands)) return brands.brands;

    // 3) Fallback to imported JSON (typed)
    if (isBrandArray(brandsData)) return brandsData;
    if (hasBrandsArray(brandsData)) return brandsData.brands;

    // 4) Object map -> values array
    if (typeof brandsData === "object" && brandsData !== null) {
      return Object.values(brandsData as Record<string, Brand>).filter(isBrand);
    }

    return [];
  }, [brands]);

  // Seamless scroll: duplicate each row to >= 200% width
  const firstChunk = brandList.slice(0, 17);
  const secondChunk = brandList.slice(17);

  const marqueeA = firstChunk.length ? [...firstChunk, ...firstChunk] : [];
  const marqueeB = secondChunk.length ? [...secondChunk, ...secondChunk] : [];

  const renderCard = (item: Brand, index: number, row: "a" | "b") => {
    const key = `${item.id ?? `${item.name ?? "brand"}-${index}`}-${row}-${index}`;
    return (
      <div
        key={key}
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
        title={item.name ?? ""}
      >
        {item?.logo ? (
          <img
            src={item.logo}
            alt={item.name ?? `brand-${item.id ?? index}`}
            className="w-full h-full object-contain p-2"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-xs text-gray-500 p-2">No logo</div>
        )}
      </div>
    );
  };

  return (
    <section
      className="py-28 bg-[#eff3fa] dark:bg-gray-900"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
          <span
            className="inline-block bg-[#067afe] text-white px-4 py-1 rounded-full mb-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our Clients
          </span>
          <h2
            className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Trusted Brands
          </h2>
          <div className="flex justify-center">
            <p
              className="text-gray-600 dark:text-gray-300 text-center max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We take pride in collaborating with industry-leading clients who trust us for
              quality, reliability, and innovation.
            </p>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto space-y-6 overflow-hidden">
          {/* Optional edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 fade-left" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 fade-right" />

          {brandList.length === 0 ? (
            <p className="text-center text-gray-500">No brands available.</p>
          ) : (
            <>
              <div className="flex w-max marquee-ltr gap-6">
                {marqueeA.map((item, index) => renderCard(item, index, "a"))}
              </div>

              <div className="flex w-max marquee-rtl gap-6">
                {marqueeB.map((item, index) => renderCard(item, index, "b"))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Smooth marquee animations */
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-ltr {
          display: flex;
          width: max-content;
          animation: marquee-ltr 30s linear infinite;
        }
        .marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 30s linear infinite;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-ltr,
          .marquee-rtl {
            animation: none;
            transform: none !important;
          }
        }

        /* Edge fades (optional) */
        .fade-left {
          background: linear-gradient(
            to right,
            rgba(239, 243, 250, 1),
            rgba(239, 243, 250, 0)
          );
        }
        .fade-right {
          background: linear-gradient(
            to left,
            rgba(239, 243, 250, 1),
            rgba(239, 243, 250, 0)
          );
        }
        :global(body.dark) .fade-left {
          background: linear-gradient(
            to right,
            rgba(17, 24, 39, 1),
            rgba(17, 24, 39, 0)
          );
        }
        :global(body.dark) .fade-right {
          background: linear-gradient(
            to left,
            rgba(17, 24, 39, 1),
            rgba(17, 24, 39, 0)
          );
        }
      `}</style>
    </section>
  );
}
