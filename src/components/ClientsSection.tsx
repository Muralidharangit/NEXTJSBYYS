import Image from "next/image";
import brandsData from "../Data/Brand.json";

type Brand = {
  id?: string | number;
  name?: string;
  logo?: string;
  [k: string]: any;
};

type Props = {
  brands?: Brand | Brand[] | { brands?: Brand[] } | any;
};

export default function ClientsSection({ brands }: Props) {
  // Normalize possible shapes into an array:
  const normalizeBrands = (input: any): Brand[] => {
    // explicit prop passed and is an array
    if (Array.isArray(input)) return input;

    // prop passed as object with .brands array
    if (input && Array.isArray(input.brands)) return input.brands;

    // no prop passed — check imported JSON shapes
    if (Array.isArray(brandsData)) return brandsData;

    if (brandsData && Array.isArray((brandsData as any).brands))
      return (brandsData as any).brands;

    // If JSON is an object whose values are brand objects, convert to array
    if (
      brandsData &&
      typeof brandsData === "object" &&
      !Array.isArray(brandsData)
    ) {
      const vals = Object.values(brandsData);
      // if values are brand objects and not just primitives
      if (vals.length && typeof vals[0] === "object") return vals as Brand[];
    }

    // final fallback
    return [];
  };

  const brandList: Brand[] = normalizeBrands(brands);

  // split safely
  const firstChunk = brandList.slice(0, 17);
  const secondChunk = brandList.slice(17);

  // if you want the marquee to show something even for shorter lists:
  const marqueeA = [...firstChunk, ...firstChunk];
  const marqueeB = [...secondChunk, ...secondChunk];

  return (
    <section
      className="py-28 bg-[#eff3fa] dark:bg-gray-900"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
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
              We take pride in collaborating with industry-leading clients who
              trust us for quality, reliability, and innovation.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 overflow-hidden">
          {brandList.length === 0 ? (
            <p className="text-center text-gray-500">No brands available.</p>
          ) : (
            <>
              <div className="flex w-max animate-marquee-ltr gap-6">
                {marqueeA.map((item, index) => (
                  <div
                    key={`${item?.id ?? index}-a-${index}`}
                    className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  >
                    {item?.logo ? (
                      // using regular img because you're already using src paths from JSON
                      // but you can swap to <Image> if logos are static imported or remote allowed
                      // (Next/Image requires width/height or layout="fill" container styles).
                      // For simplicity we use <img> here:
                      <img
                        src={item.logo}
                        alt={item.name ?? `brand-${item.id ?? index}`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="text-xs text-gray-500 p-2">No logo</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex w-max animate-marquee-rtl gap-6">
                {marqueeB.map((item, index) => (
                  <div
                    key={`${item?.id ?? index}-b-${index}`}
                    className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-32 h-24 rounded-xl"
                  >
                    {item?.logo ? (
                      <img
                        src={item.logo}
                        alt={item.name ?? `brand-${item.id ?? index}`}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="text-xs text-gray-500 p-2">No logo</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
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
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marquee-ltr 30s linear infinite;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marquee-rtl 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
