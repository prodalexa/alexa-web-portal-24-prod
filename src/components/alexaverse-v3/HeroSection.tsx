"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="home" className="relative z-0 w-full min-h-screen overflow-hidden">

      {/* ── Layer 1: Solid Black Base ── */}
      <div className="absolute inset-0 -z-30 bg-black" />

      {/* ── Layer 2: Background Image ── */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <Image
          src="/alexaverse3.0/Background image 2.svg"
          alt="AlexaVerse 3.0 Background"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* ── Layer 2.5: Uniform dark overlay ── */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ zIndex: -15 }} />

      {/* ── Layer 3: Vignette Overlay (over the image) ── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 15%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.95) 80%, #000000 100%)" }}
      />

      {/* ── Navbar ── */}
      <nav className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-4 flex justify-between items-center">

        {/* Logo container */}
        <div className="flex-shrink-0">
          {/* Mobile view: Only the icon */}
          <Image
            src="/alexaverse3.0/icon.svg"
            alt="Alexa Developers SRM Icon"
            width={48}
            height={48}
            className="block md:hidden h-8 w-auto object-contain"
          />
          {/* Desktop view: Full logo with wordmark */}
          <Image
            src="/alexaverse3.0/Alexa Logo.svg"
            alt="Alexa Developers SRM"
            width={364}
            height={52}
            className="hidden md:block h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-10 items-center">
          {[
            { label: "Home", href: "#home" },
            { label: "Events", href: "#events" },
            { label: "Sponsors", href: "#sponsors" },
            { label: "Contact Us", href: "#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white text-xl hover:text-white/70 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger — inline SVG, no libraries */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 bg-black/85 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <button
          className="absolute top-5 right-6 text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>
        {[
          { label: "HOME", href: "#home" },
          { label: "OUR EVENTS", href: "#events" },
          { label: "OUR SPONSORS", href: "#sponsors" },
          { label: "CONTACT US", href: "#contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl hover:text-white/70 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-72px)] px-6 sm:px-10 lg:px-16">

        {/* Left — text content */}
        <div className="flex flex-col items-start w-full lg:max-w-[700px]">

          {/* alexaverse.svg — the full ALEXAVERSE title + swoosh underline */}
          <div className="w-full mb-5">
            <Image
              src="/alexaverse3.0/alexaverse.svg"
              alt="ALEXAVERSE"
              width={800}
              height={300}
              className="w-full max-w-[650px] h-auto object-contain"
            />
          </div>

          {/* Description — inherits Crimson Pro 600/22px from body */}
          <p
            style={{
              textAlign: "center",
              textShadow: "0 1px 6px rgba(0,0,0,0.9)",
            }}
            className="text-white mb-8 w-full max-w-[650px]"
          >
            ALEXAVERSE 3.0 is back - bigger, bolder, and unmissable! From 13th
            to 15th October 2026, dive into three electrifying days of innovation
            and imagination.
          </p>

          {/* button.svg — centered relative to the title */}
          <div className="w-full max-w-[650px] flex justify-center">
            <Link href="#events" className="relative group inline-block">
              <Image
                src="/alexaverse3.0/button.svg"
                alt="Explore Events"
                width={325}
                height={68}
                className="w-[220px] sm:w-[260px] h-auto object-contain group-hover:brightness-110 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Right — character and eclipse glow */}
        <div
          className="absolute right-[5%] bottom-0 hidden md:block pointer-events-none select-none"
          style={{ width: "28%", height: "50%" }}
        >
          {/* Character */}
          <Image
            src="/alexaverse3.0/character.svg"
            alt="AlexaVerse Character"
            fill
            className="object-contain object-bottom relative z-10 -translate-y-[33%]"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.6))" }}
          />
        </div>
      </div>

      {/* ── Character glow — originates from character center, spreads full section ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 80% 50%, rgba(251, 216, 165, 0.55) 0%, rgba(251, 216, 165, 0.25) 15%, rgba(251, 216, 165, 0.05) 35%, transparent 50%)",
          filter: "blur(25px)",
        }}
      />
    </section>
  );
};

export default HeroSection;
