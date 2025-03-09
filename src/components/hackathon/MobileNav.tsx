"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-12 right-4 z-[60] px-2 py-0.5 text-white focus:outline-none"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-hack_orange z-[50] overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full w-full py-10 px-4 font-monsterrat">
            <div className="flex flex-col items-center justify-center space-y-12 text-white text-2xl font-bold text-center w-full">
              <Link
                href="/"
                className="hover:text-gray-200 transition-colors w-full"
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link
                href="#hacktrax"
                className="hover:text-gray-200 transition-colors w-full flex justify-center"
                onClick={toggleMenu}
              >
                <Image
                  src="/hacktrax/HACKTRAX_White.png"
                  width={300}
                  height={150}
                  alt="Alexa Developers SRM"
                  className="w-[250px] md:w-[300px]"
                />
              </Link>
              <Link
                href="#carrynclutch"
                className="hover:text-gray-200 transition-colors w-full flex justify-center"
                onClick={toggleMenu}
              >
                <Image
                  src="/hacktrax/CarrynClutch.png"
                  width={300}
                  height={150}
                  alt="Alexa Developers SRM"
                  className="w-[250px] md:w-[300px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;