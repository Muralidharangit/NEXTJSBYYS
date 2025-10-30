"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function VideoBanner() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // 🎯 Load video lazily only after the page is idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        const video = document.getElementById("heroVideo") as HTMLVideoElement;
        if (video) {
          const handleCanPlay = () => setVideoReady(true);
          video.addEventListener("canplay", handleCanPlay, { once: true });
          video.load(); // triggers lazy loading of video
        }
      });
    } else {
      // fallback
      const timer = setTimeout(() => setVideoReady(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* ✅ Preload the hero image for faster LCP */}
      <Head>
        <link
          rel="preload"
          as="image"
          href="/videos/poster.webp"
          fetchPriority="high"
        />
      </Head>

      <section className="relative w-full h-[25vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">
        {/* 🖼️ Poster as LCP image */}
        <Image
          src="/videos/poster.webp"
          alt="Hero preview"
          priority
          width={1920}
          height={1080}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/videos/poster-blur.webp"
          className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* 🎬 Lazy-loaded video */}
        <video
          id="heroVideo"
          muted
          loop
          playsInline
          autoPlay
          preload="none" // ✅ prevent early loading
          poster="/videos/poster.webp"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/1.webm" type="video/webm" />
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
