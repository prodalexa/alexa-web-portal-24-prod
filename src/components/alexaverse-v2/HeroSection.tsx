"use client";

import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative w-full bg-transparent p-0 m-0 overflow-visible"
    >
      
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(214.78deg, #563AFF 6.26%, #AA44BB 32.5%, #FF4E78 68.75%, #663e0a 81%, #130025 95%),
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #130025 100%)`,
        }}
      />

     
      <nav
        className="absolute left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[1500px] px-6"
        style={{ top: "25px" }}
      >
        <div className="flex justify-between items-center h-[74px]">
          
          <img
            src="/alexaverse2.0/alexa-logo-navbar.svg"
            alt="Alexa Logo"
            className="h-10 sm:h-12 w-auto"
          />

         
          <div className="hidden md:flex gap-[32px] items-center">
            <a
              href="#home"
              className="text-white font-audiowide text-[24px] leading-[100%] hover:text-purple-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#events"
              className="text-white font-audiowide text-[24px] leading-[100%] hover:text-purple-300 transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-white font-audiowide text-[24px] leading-[100%] hover:text-purple-300 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white text-4xl"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#511e5b] via-[#1A052A] to-[#030645] z-50 flex flex-col justify-between items-center">
          
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>

          
          <div className="flex-grow flex flex-col items-center justify-center gap-10 mt-20">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-audiowide text-4xl hover:text-purple-300 transition"
            >
              HOME
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-audiowide text-4xl hover:text-purple-300 transition"
            >
              OUR EVENTS
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-audiowide text-4xl hover:text-purple-300 transition"
            >
              CONTACT US
            </a>
          </div>

          {/* Footer */}
          <p className="text-center text-[14px] sm:text-xl font-nunito text-white font-semibold px-4 whitespace-nowrap mb-6">
            Designed and Developed by{" "}
            <span className="bg-gradient-to-r from-[#C5126C] via-[#7942FF] to-[#306EF9] bg-clip-text text-transparent font-bold">
              Alexa Developers SRM.
            </span>
          </p>
        </div>
      )}

      
<div
  className="relative h-screen overflow-hidden flex justify-center items-center"
  style={{
    filter: "drop-shadow(30px 0px 60px rgba(0, 0, 0, 2))",
  }}
>
  <img
    src="/alexaverse2.0/poster-flyout.svg"
    alt="Hero"
    className="
      h-full w-auto object-contain                
      translate-x-[10px] translate-y-[-40%] scale-[1.6]      
      md:h-full md:w-auto md:object-cover md:scale-150 md:translate-x-0 md:translate-y-0
    "
    style={{
      objectPosition: "center bottom",
    }}
  />
</div>
    </section>
  );
};

export default HeroSection;