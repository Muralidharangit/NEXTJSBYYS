import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section
      className="relative bg-[#067afe] py-20 overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className="container mx-auto px-4"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Build Tomorrow, Today
            </h2>
            <p className="mt-3 text-lg text-white/80 max-w-2xl">
              We provide advanced manufacturing solutions with precision,
              quality, and innovation.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#067afe] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              <span>Let’s talk now</span>
              <span className="flex items-center gap-1">➝</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
