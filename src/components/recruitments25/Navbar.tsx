"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = pathname === "/recruitment25registerform" ? "/recruitments25" : "";

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center h-[80px] px-5 md:px-10 py-5 w-full">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex items-start justify-start md:items-center">
            <Image
              src="/recruitments25/AlexaLogo.svg"
              alt="Alexa Developers SRM"
              height={300}
              width={300}
              className="w-[250px] md:w-[300px] mr-5"
            />
          </div>
          
          {/* Hamburger menu button for mobile */}
          <button 
            className="md:hidden text-white text-4xl" 
            onClick={() => setMobileMenuOpen(true)} 
            aria-label="Open Menu"
          >
            <HiMenu />
          </button>
        </div>
        
        <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 list-none">
            <li>
              <a
                href="/"
                className="text-[#bbb] text-[16px] font-montserrat-alternates md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={`${basePath}#domain`}
                className="text-[#bbb] text-[16px] font-montserrat-alternates md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
              >
                Domain
              </a>
            </li>
            <li>
              <a
                href={`${basePath}#roadmap`}
                className="text-[#bbb] text-[16px] font-montserrat-alternates md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
              >
                Roadmap
              </a>
            </li>
          </ul>
          <a
            href="/recruitment25registerform"
            className="font-montserrat-alternates bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] text-white py-2 px-6 rounded-full text-[16px] md:text-[20px] font-semibold no-underline transition-all duration-300 hover:scale-110"
          >
            Registrations Closed
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[url('/recruitments25/background.svg')] bg-cover bg-center z-50 md:hidden overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Close button */}
            <button 
              className="absolute top-6 right-5 text-white text-4xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <HiX />
            </button>
            
            {/* Menu items */}
            <ul className="flex flex-col items-center space-y-10 list-none">
              <li>
                <a
                  href={`${basePath}#home`}
                  className="text-white text-3xl font-montserrat-alternates no-underline transition-colors duration-300 hover:text-[#00bcd4]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#domain`}
                  className="text-white text-3xl font-montserrat-alternates no-underline transition-colors duration-300 hover:text-[#00bcd4]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Domain
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#roadmap`}
                  className="text-white text-3xl font-montserrat-alternates no-underline transition-colors duration-300 hover:text-[#00bcd4]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Roadmap
                </a>
              </li>
            </ul>
            
            {/* Register button */}
            <a
              href="/recruitment25registerform"
              className="mt-10 font-montserrat-alternates bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] text-white py-3 px-8 rounded-full text-xl font-semibold no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00CDC1] hover:to-[#00B5FF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Registrations Closed
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;