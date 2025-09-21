"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div
      id="banner"
      className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center pt-4 md:pt-10 md:px-10 py-5 md:py-10 gap-5 min-h-[calc(100vh-80px)] w-full px-4"
    >
      {/* Content container - shifted to right on desktop */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-[60%] order-2 md:order-1 md:translate-x-20 max-md:translate-y-[-30px]">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] bg-clip-text text-transparent font-montserrat-alternates whitespace-nowrap">
          Recruitments <span className="text-white">&apos;25</span>
        </h1>
        <p className="text-white text-lg md:text-2xl mt-6 md:mt-10 max-w-[600px] font-montserrat">
          The official developers&apos; club of Amazon Alexa at SRMIST is now
          open to recruiting first and second year students!
        </p>
        <Link
          href="/recruitment25registerform"
          className="relative font-montserrat-alternates mt-8 md:mt-14 w-full max-w-[280px] md:max-w-[250px] bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] text-white py-3 md:py-4 px-8 rounded-full text-lg md:text-xl font-semibold no-underline transition-all duration-300 border border-white flex justify-center items-center shadow-lg hover:shadow-xl hover:scale-105"
        >
          Register Now
        </Link>
      </div>

      {/* Image container - order changes based on screen size */}
      <div className="relative w-80 h-80 md:w-[600px] md:h-auto order-1 md:order-2 md:transform md:-translate-x-20 max-md:translate-y-[-45px]">
        <Image
          src="/recruitments25/AlexaHeroLogo.svg"
          alt="Alexa SRM Club Logo"
          height={600}
          width={600}
          className="w-full h-auto z-[10]"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;