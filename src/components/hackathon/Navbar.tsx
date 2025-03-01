"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center h-[80px] px-5 md:px-10 mt-4 py-5 bg-hack_bg w-full">
      <div className="flex items-start justify-start md:items-center mb-4 mt-4 md:mb-0">
        <Image
          src="/hacktrax/AlexaLogo.png"
          alt="Alexa Developers SRM"
          height={300}
          width={300}
          className="w-[250px] md:w-[300px] mr-5"
        />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-8">
        <ul className="flex flex-row items-center space-x-8 list-none">
          <li className="flex flex-row items-center space-x-8">
            <a
              href="#"
              className="text-white text-2xl whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#hacktrax"
              className="flex items-center"
            >
              <Image
                src="/hacktrax/HACKTRAX_White.png"
                alt="Alexa Developers SRM"
                height={200}
                width={200}
                className="w-[180px] md:w-[140px]"
              />
            </a>
            <a
              href="#carrynclutch"
              className="flex items-center"
            >
              <Image
                src="/hacktrax/CarrynClutch.png"
                alt="Alexa Developers SRM"
                height={200}
                width={200}
                className="w-[180px] md:w-[140px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
