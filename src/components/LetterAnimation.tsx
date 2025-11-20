"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LetterAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const headings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("h2.animate-letters")
    );

    // Build span-wrapped letters once per heading
    headings.forEach((el) => {
      if (el.dataset.processed === "true") return;

      const text = el.textContent ?? "";
      const frag = document.createDocumentFragment();

      // Keep original text for SR; hide visual spans from SR
      el.setAttribute("aria-label", text);

      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.className =
          "inline-block will-change-transform transition-all duration-300 opacity-0 translate-y-3";
        span.style.transitionDelay = `${i * 50}ms`;
        span.setAttribute("aria-hidden", "true");
        span.textContent = char === " " ? "\u00A0" : char;
        frag.appendChild(span);
      });

      // Replace content safely
      el.textContent = "";
      el.appendChild(frag);
      el.dataset.processed = "true";
    });

    if (prefersReduced) {
      // If reduced motion, show immediately and bail
      headings.forEach((h) =>
        h.querySelectorAll("span").forEach((s) => {
          s.classList.remove("opacity-0", "translate-y-3");
          s.classList.add("opacity-100", "translate-y-0");
          (s as HTMLElement).style.transitionDelay = "0ms";
        })
      );
      return;
    }

    // Observe visibility; reveal once
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll("span");
            spans.forEach((s) => {
              s.classList.add("opacity-100", "translate-y-0");
              s.classList.remove("opacity-0", "translate-y-3");
            });
            io.unobserve(entry.target); // reveal once
          }
        }
      },
      { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0 }
    );

    headings.forEach((h) => io.observe(h));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
