"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = ["/videos/1.mp4"];

export default function VideoBanner() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out", // easing style
      once: true, // animation only once
    });
  }, []);

  // Video rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[25vh] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden"
      data-aos="fade-up"
    >
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={` left-0 w-full h-full object-cover transition-all duration-1000 transform ${
            currentVideo === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          data-aos={currentVideo === index ? "zoom-in" : ""}
        />
      ))}
    </section>


   
  );
}
