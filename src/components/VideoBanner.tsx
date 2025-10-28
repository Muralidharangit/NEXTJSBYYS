import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = ["/videos/1.webm"];
const poster = "/images/video-poster.webp"; // 🧠 lightweight static image (you can export it from the first frame of your video)

export default function VideoBanner() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // ✅ Delayed AOS init
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Rotate video only if more than one
  useEffect(() => {
    if (videos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Lazy-load video only after mount
  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[25vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden"
      data-aos="fade-up"
    >
      {/* 🖼️ Image fallback until video loads */}
      {!videoLoaded && (
        <img
          src={poster}
          alt="Video preview"
          className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
        />
      )}

      {/* 🎬 Lazy-loaded video */}
      {videoLoaded &&
        videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className={`absolute left-0 top-0 w-full h-full object-cover transition-all duration-1000 transform ${
              currentVideo === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            data-aos={currentVideo === index ? "zoom-in" : ""}
          >
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ))}
    </section>
  );
}
