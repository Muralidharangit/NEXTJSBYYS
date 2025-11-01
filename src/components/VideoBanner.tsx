"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

export default function VideoBanner() {
  const [videoReady, setVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", handleCanPlay, { once: true });

    // Slight delay for smooth buffering
    const timer = setTimeout(() => {
      video.load();
      video.play().catch(() => {});
    }, 500);

    return () => {
      clearTimeout(timer);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <>
      {/* ✅ Preload the poster image for faster LCP */}
      <Head>
        <link
          rel="preload"
          as="image"
          href="/videos/poster.webp"
          fetchPriority="high"
        />
      </Head>

      <section className="relative w-full h-[25vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">
        {/* 🖼️ Poster while video loads */}
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

        {/* 🎬 Background Video */}
        <video
          ref={videoRef}
          id="heroVideo"
          muted={isMuted}
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="/videos/poster.webp"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/1.webm" type="video/webm" />
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        {/* 🔊 Responsive Sound Toggle Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 z-20 bg-black/50 text-white 
                     p-2 sm:p-3 md:p-3.5 rounded-full backdrop-blur-md 
                     hover:bg-black/70 active:scale-95 transition-transform duration-200"
        >
          {isMuted ? (
            <SpeakerXMarkIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          ) : (
            <SpeakerWaveIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          )}
        </button>
      </section>
    </>
  );
}
