"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import logos from "@/data/logos.json";
import logo2 from "@/data/logo2.json";

/** @typedef {{src:string, alt:string, w?:number|null, h?:number|null}} Logo */

/**
 * Marquee Row Component
 * @param {{items: Logo[], reverse?: boolean, speedMs?: number}} props
 */
type Logo = {
  src: string;
  alt: string;
  w?: number | null;
  h?: number | null;
};

type RowProps = {
  items: Logo[];
  reverse?: boolean;
  speedMs?: number;
};

function Row({ items, reverse = false, speedMs = 2000 }: RowProps) {
  return (
    <div
      className={`marquee-mask ${
        reverse ? "marquee-left" : "marquee-right"
      } ticker w-full max-w-[100vw] overflow-hidden`}
    >
      <Swiper
        modules={[Autoplay]}
        className="w-full  select-none"
        slidesPerView="auto"
        spaceBetween={7}
        allowTouchMove={false}
        speed={speedMs}
        autoplay={{
          delay: 0,
          reverseDirection: reverse,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        {items.map((logo, idx) => (
          <SwiperSlide key={`${logo.src}-${idx}`} className="!w-auto">
            <div className="flex items-center rounded-xl border bg-white px-6 py-3 shadow">
              <div className="relative h-[50px] w-[120px] sm:h-[60px] sm:w-[150px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 100px, 150px"
                  priority={idx < 3}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function DualMarqueeSwiper() {
  const SPEED = 4000; // ✅ slightly slower for smooth feel
  return (
    <div className="space-y-6">
      {/* TOP: left → right */}
      <Row items={logos} reverse speedMs={SPEED} />

      {/* BOTTOM: right → left */}
      <Row items={logo2} speedMs={SPEED} />
    </div>
  );
}
