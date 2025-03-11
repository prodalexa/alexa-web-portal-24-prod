"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const handleRegisterClick = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8">
        <div className="px-4 sm:px-5 md:px-10">
          <Image
            src="/carrynclutch/CarrynClutchLogo.png"
            alt="Carry N Clutch"
            height={500}
            width={500}
            className="w-[250px] md:w-[600px] object-cover md:object-contain"
          />
        </div>
        <button
          onClick={handleRegisterClick}
          className="bg-gaming_button_bg px-6 sm:px-8 py-2 sm:py-3 text-sm md:text-3xl text-white font-valorant hover:opacity-90 border-2 border-white transition-opacity"
        >
          REGISTER
        </button>
      </div>
      <div className="absolute right-4 md:right-8 top-auto md:top-8 -rotate-90 origin-right whitespace-nowrap font-valorant text-lg md:text-xl lg:text-2xl font-monsterrat text-white font-bold tracking-widest z-10">
        VALORANT GAMING EVENT //
      </div>
      <div className="absolute bottom-0 md:-bottom-12 w-full text-[14vw] md:text-[15vw] bg-gradient-to-b from-transparent via-[#20103D]/80 to-[#20103D] font-bold text-white leading-none tracking-widest pointer-events-none select-none pl-4">
        <div className="bg-gradient-to-b from-white/40 via-white/15 to-transparent font-valorant bg-clip-text text-transparent">
          VALORANT
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
