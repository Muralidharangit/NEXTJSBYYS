import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Link from 'next/link';

const ManufacturingProducts = () => {
    useEffect(() => {
        // 2. Initialize AOS in a useEffect hook
        AOS.init({
            duration: 1000, // Duration of the animation (in ms)
            once: true,      // Whether animation should only happen once - while scrolling down
        });
    }, []);

    return (
      <section>
        {/* rts product area start */}
        <div className=" py-20">
          <div className="container mx-auto px-4">
            {/* Header - Animate the header text */}
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
                Our Services
              </span>
              <h2 className="animate-letters text-4xl sm:text-5xl font-semibold leading-tight text-[#050d20]">
                Manufacturing Products for <br className="hidden sm:block" />{" "}
                Sales & Distribution
              </h2>
            </div>

            {/* Product List - Set a container animation or let children animate on their own */}
            <div className="relative space-y-8 md:space-y-0">
              {/* Product 1 */}
              {/* Animate product container to slide up with a small delay */}
              <div
                className="sticky top-32 bg-[#067afeef] rounded-xl p-8 md:flex md:items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Content Left, Image Right */}

                {/* Content */}
                <div className="w-full md:w-1/2 text-white md:pr-6">
                  {/* Inner elements can have their own animation for a staged look */}
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <p className="section-tagline">Data Integrations</p>
                    <h2 className="mb-8 max-lg:mb-4 text-white ">
                      A strong vision is crucial for the analysis of wealth.
                    </h2>
                    <p className="mb-11 max-lg:mb-5">
                      Until recently, the prevailing view assumed lorem ipsum
                      was born as a nonsense text nothing Before &amp; After
                      magazine.
                    </p>
                    <ul className="mb-5 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
                      {/* List items often look good with a staggered, delayed entrance (fade-right or zoom-in) */}
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-right"
                        data-aos-delay="200"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2"
                        data-aos="fade-right"
                        data-aos-delay="300"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                      {/* Buttons can have a final little zoom-in */}
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/services/details" // Replace with the actual details URL
                          className="hover:opacity-80 transition-opacity block"
                        >
                          More Details
                        </Link>
                      </li>
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/contact"
                          className="hover:opacity-80 transition-opacity block"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div
                  className="w-full md:w-1/2 mt-6 md:mt-0"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://html.themewant.com/digix/assets/images/project/14.webp"
                    alt="Industrial Machinery"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* --- */}

              {/* Product 2 - Image Left, Content Right */}
              <div
                className="sticky top-52 bg-[#067afef1] rounded-xl p-8 md:flex md:items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Image */}
                <div
                  className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-6"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://html.themewant.com/digix/assets/images/project/15.webp"
                    alt="Packaging Solutions"
                    className="w-full rounded-lg"
                  />
                </div>
                {/* Content */}
                <div className="w-full md:w-1/2 text-white md:pl-6">
                  <div data-aos="fade-left" data-aos-duration="1500">
                    <p className="section-tagline">Data Integrations</p>
                    <h2 className="mb-8 max-lg:mb-4 ">
                      A strong vision is crucial for the analysis of wealth.
                    </h2>
                    <p className="mb-11 max-lg:mb-5">
                      Until recently, the prevailing view assumed lorem ipsum
                      was born as a nonsense text nothing Before &amp; After
                      magazine.
                    </p>
                    <ul className="mb-5 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-left"
                        data-aos-delay="200"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2"
                        data-aos="fade-left"
                        data-aos-delay="300"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-left"
                        data-aos-delay="400"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                      <ul className="flex flex-wrap gap-2">
                        {/* Buttons can have a final little zoom-in */}
                        <li
                          className="px-3 py-1 border border-white rounded-full text-white"
                          data-aos="zoom-in"
                          data-aos-delay="500"
                        >
                          {/* FIX: Wrapped content in Link for navigation and accessibility */}
                          <Link
                            href="/services/details" // Replace with the actual details URL
                            className="hover:opacity-80 transition-opacity block"
                          >
                            More Details
                          </Link>
                        </li>
                        <li
                          className="px-3 py-1 border border-white rounded-full text-white"
                          data-aos="zoom-in"
                          data-aos-delay="600"
                        >
                          {/* FIX: Wrapped content in Link for navigation and accessibility */}
                          <Link
                            href="/contact"
                            className="hover:opacity-80 transition-opacity block"
                          >
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

              {/* --- */}

              {/* Product 3 - Content Left, Image Right */}
              <div
                className="sticky top-70 bg-[#067afe] rounded-xl p-8 md:flex md:items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Content */}
                <div className="w-full md:w-1/2 text-white md:pr-6">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <p className="section-tagline">Data Integrations</p>
                    <h2 className="mb-8 max-lg:mb-4 ">
                      A strong vision is crucial for the analysis of wealth.
                    </h2>
                    <p className="mb-11 max-lg:mb-5">
                      Until recently, the prevailing view assumed lorem ipsum
                      was born as a nonsense text nothing Before &amp; After
                      magazine.
                    </p>
                    <ul className="mb-5 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-right"
                        data-aos-delay="200"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2"
                        data-aos="fade-right"
                        data-aos-delay="300"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                      {/* Buttons can have a final little zoom-in */}
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/services/details" // Replace with the actual details URL
                          className="hover:opacity-80 transition-opacity block"
                        >
                          More Details
                        </Link>
                      </li>
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/contact"
                          className="hover:opacity-80 transition-opacity block"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Image */}
                <div
                  className="w-full md:w-1/2 mt-6 md:mt-0"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://html.themewant.com/digix/assets/images/project/14.webp"
                    alt="Raw Materials"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* --- */}

              {/* Product 4 - Image Left, Content Right */}
              <div
                className="sticky top-55 bg-[#067afe] rounded-xl p-8 md:flex md:items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* Image */}
                <div
                  className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-6"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://html.themewant.com/digix/assets/images/project/15.webp"
                    alt="Packaging Solutions"
                    className="w-full rounded-lg"
                  />
                </div>
                {/* Content */}
                <div className="w-full md:w-1/2 text-white md:pl-6">
                  <div data-aos="fade-left" data-aos-duration="1500">
                    <p className="section-tagline">Data Integrations</p>
                    <h2 className="mb-8 max-lg:mb-4 ">
                      A strong vision is crucial for the analysis of wealth.
                    </h2>
                    <p className="mb-11 max-lg:mb-5">
                      Until recently, the prevailing view assumed lorem ipsum
                      was born as a nonsense text nothing Before &amp; After
                      magazine.
                    </p>
                    <ul className="mb-5 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4 ">
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-left"
                        data-aos-delay="200"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2"
                        data-aos="fade-left"
                        data-aos-delay="300"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                      <li
                        className="flex items-center gap-x-2 "
                        data-aos="fade-left"
                        data-aos-delay="400"
                      >
                        {/* SVG and Span content remains */}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap gap-2">
                      {/* Buttons can have a final little zoom-in */}
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/ser" // Replace with the actual details URL
                          className="hover:opacity-80 transition-opacity block"
                        >
                          More Details
                        </Link>
                      </li>
                      <li
                        className="px-3 py-1 border border-white rounded-full text-white"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                      >
                        {/* FIX: Wrapped content in Link for navigation and accessibility */}
                        <Link
                          href="/contact"
                          className="hover:opacity-80 transition-opacity block"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts product area end */}
      </section>
    );
}

export default ManufacturingProducts;