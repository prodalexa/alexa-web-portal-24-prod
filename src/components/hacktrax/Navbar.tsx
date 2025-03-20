"use client";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center min-h-[80px] px-5 md:px-10 mt-2 pt-5 bg-hack_bg w-full relative overflow-x-hidden">
      <div className="flex items-start justify-between md:items-center my-4 md:mb-0 w-full md:w-auto">
        <Image
          src="/hacktrax/AlexaLogo.svg"
          alt="Alexa Developers SRM"
          height={300}
          width={300}
          className="w-[200px] sm:w-[250px] md:w-[300px]"
        />
        <MobileNav />
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto pb-4 md:pb-0">
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 list-none w-full md:w-auto">
          <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
            <a
              href="/"
              className="text-white text-xl md:text-2xl whitespace-nowrap hover:text-gray-300 transition-colors font-monsterrat"
            >
              Home
            </a>
            <a
              href="#hacktrax"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/hacktrax/HACKTRAX_White.png"
                alt="Alexa Developers SRM"
                height={200}
                width={200}
                className="w-[140px] sm:w-[160px] md:w-[140px]"
              />
            </a>
            {/* <a
              href="/carrynclutch"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/hacktrax/CarrynClutch.png"
                alt="Alexa Developers SRM"
                height={200}
                width={200}
                className="w-[140px] sm:w-[160px] md:w-[140px]"
              />
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
