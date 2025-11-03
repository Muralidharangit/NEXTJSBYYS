import Image from "next/image";
import Link from "next/link";
import { SHOP_BY_CATEGORIES, slugify } from "data/shopBycatlog";


export default function CategoriesSection() {
  return (
    <section className="bg-[#eff3fa] mx-auto py-16 px-6">
      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
        {/* <span className="bg-[#067afe] text-white py-1 rounded-full mb-5"></span> */}
        {/* <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full mb-3">
          Product Categories
        </span> */}
        <span className="inline-block text-sm font-medium bg-[#067afe]/10 text-[#067afe] px-4 py-1 rounded-full">
          Product Categories
        </span>
        <h2 className="animate-letters text-3xl md:text-4xl/tight font-semibold mt-4 text-[#050d20]">
          Our Innovative Products
        </h2>
      </div>

      {/* Category Grid */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SHOP_BY_CATEGORIES.slice(0, 16).map((category, index) => {
          const slug = slugify(category.title);
          const key = category.id ?? `${slug}-${index}`; // safe unique key


  return (
    // <Link key={key} href={`/shop/${slug}?sub=all`}>
  <Link key={key} href="/category">
  <div data-aos="fade-up" data-aos-delay={index * 100} className="group">
    <div className="relative flex items-center p-4 bg-white rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] lg:min-h-[8rem] hover:bg-[#067afe]">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-md transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0 bg-white group-hover:scale-110">
        <Image
          src={category.images}
          alt={category.title}
          className="sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
          width={80}
          height={80}
        />
      </div>

      {/* Default blue text; turns white on hover */}
      <p className="font-semibold transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] truncate w-[200px] !m-0 text-gray-600 dark:text-gray-300 group-hover:text-white">
        {category.title} 
      </p>
    </div>
  </div>
</Link>

  );
})}


      {/*        return (
            <Link key={key} href={`/shop/${slug}?sub=all`}>
              <div data-aos-delay={index * 100}>
                <div className="group relative flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] lg:min-h-[8rem]">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 mr-3 sm:mr-4 flex-shrink-0 bg-white dark:bg-gray-800">
                    <Image
                      src={category.images}
                      alt={category.title}
                      className="sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] truncate w-[200px] !m-0">
                    {category.title}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
 */}
      </div>

      {/* Button */}
      {/* <div
                  className="mt-12 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <button className="rounded-lg border bg-[#067afe] border-white px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-[#067afe]">
                    Try it for 30 days, no credit card required
                  </button>
                </div> */}
    </section>
  );
}
