"use client";
import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [starsCount, setStarsCount] = useState(700);

  useEffect(() => {
    const sky = document.querySelector(".sky");
    if (!sky) return;

    // Function to determine star count based on screen size
    const getStarsCount = () => {
      if (window.innerWidth < 768) {
        return 200; // Mobile: fewer stars for better performance
      } else if (window.innerWidth < 1024) {
        return 400; // Tablet: medium count
      } else {
        return 700; // Desktop: full count
      }
    };

    // Set initial star count
    setStarsCount(getStarsCount());

    // Handle resize events
    const handleResize = () => {
      const newCount = getStarsCount();
      if (newCount !== starsCount) {
        setStarsCount(newCount);
        // Clear existing stars and recreate
        sky.innerHTML = "";
        createStars(sky, newCount);
      }
    };

    // Create stars function
    const createStars = (skyElement: Element, count: number) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        skyElement.appendChild(star);
      }
    };

    // Create initial stars
    createStars(sky, starsCount);

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (sky) sky.innerHTML = "";
    };
  }, [starsCount]);

  return <div className="sky absolute inset-0 pointer-events-none z-5" />;
}
