"use client";
import { useEffect } from "react";

export default function StarsBackground() {
  useEffect(() => {
    const sky = document.querySelector(".sky");
    if (!sky) return;

    const starsCount = 700;

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      sky.appendChild(star);
    }

    // cleanup stars on unmount
    return () => {
      if (sky) sky.innerHTML = "";
    };
  }, []);

  return <div className="sky absolute inset-0 pointer-events-none z-5" />;
}
