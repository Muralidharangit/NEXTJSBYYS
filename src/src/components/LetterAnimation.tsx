"use client";

import { useEffect } from "react";

export default function LetterAnimation() {
  useEffect(() => {
    const headings = document.querySelectorAll("h2.animate-letters");

    headings.forEach((h) => {
      const el = h as HTMLElement;
      if (!el.dataset.processed) {
        const letters = el.textContent?.split("") || [];
        el.innerHTML = letters
          .map((l) => {
            if (l === " ") {
              // Add non-breaking space for visual spacing
              return `<span class="inline-block">&nbsp;</span>`;
            }
            return `<span class="opacity-0 transform translate-y-3 inline-block transition-all duration-300">${l}</span>`;
          })
          .join("");
        el.dataset.processed = "true";
      }
    });

    const revealLetters = () => {
      const windowHeight = window.innerHeight;
      headings.forEach((h) => {
        const spans = h.querySelectorAll("span");
        const elementTop = h.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          spans.forEach((span, i) => {
            setTimeout(() => {
              span.classList.add("opacity-100", "translate-y-0");
            }, i * 50);
          });
        }
      });
    };

    window.addEventListener("scroll", revealLetters);
    window.addEventListener("load", revealLetters);

    return () => {
      window.removeEventListener("scroll", revealLetters);
      window.removeEventListener("load", revealLetters);
    };
  }, []);

  return null;
}
