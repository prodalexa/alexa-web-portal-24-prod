'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    setTimeout(() => {
      if (id === 'heroSection') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.location.href = `/#${id}`;
      }
    }, 100);
  };

  return (
    <div
      id="heroSection"
      className={`relative w-full overflow-x-hidden ${
        isMobile ? 'h-screen min-h-[917px]' : 'h-[1400px] min-h-[1400px]'
      }`}
    >
      {/* Desktop Navbar */}
      {!isMobile && (
        <div className="absolute top-[35px] left-0 w-full px-[44px] h-[62px] flex items-center justify-between z-10">

          {/* Logo + Text */}
          <div className="relative w-[315px] h-[62px] flex items-center">

            <div className="w-[62px] h-[62px] flex items-center justify-center">
              <img
                src="/hacktrax-v2/Vector.svg"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="ml-[14px] text-white font-medium text-[19px] font-[Montserrat] whitespace-nowrap">
              Alexa Developers SRM
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-[22px] items-center">

            <button
              onClick={() => scrollToSection('heroSection')}
              className="text-white font-semibold text-[20px] font-[Montserrat] cursor-pointer"
            >
              HOME
            </button>

            <button
              onClick={() => scrollToSection('eventDetails')}
              className="text-white font-semibold text-[20px] font-[Montserrat] cursor-pointer"
            >
              DETAILS
            </button>

            <button
              onClick={() => scrollToSection('formSection')}
              className="text-[#ECC000] font-semibold text-[20px] font-[Montserrat] cursor-pointer"
            >
              REGISTER NOW
            </button>

            <button
              onClick={() => scrollToSection('footer')}
              className="text-white font-semibold text-[20px] font-[Montserrat] cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobile && !isMobileMenuOpen && (
        <div className="absolute top-[34px] left-0 w-full px-[26px] h-[40px] flex items-center justify-between z-10">

          <div className="flex items-center">

            <img
              src="/hacktrax-v2/Vector.svg"
              alt="Logo"
              className="w-[40px] h-[40px]"
            />

            <span className="ml-3 text-white text-[12px] font-medium font-[Montserrat] whitespace-nowrap">
              Alexa Developers SRM
            </span>
          </div>

          <button
            onClick={handleMobileMenuToggle}
            className="flex flex-col gap-[11px]"
          >
            <span className="w-[40px] border-t-2 border-white"></span>
            <span className="w-[40px] border-t-2 border-white"></span>
            <span className="w-[40px] border-t-2 border-white"></span>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-[#5d0b8c] flex flex-col items-center justify-center z-[1000]">

            <button
              onClick={() => scrollToSection('heroSection')}
              className="text-white text-[38px] font-semibold font-[Montserrat]"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('eventDetails')}
              className="text-white text-[38px] font-semibold font-[Montserrat]"
            >
              Details
            </button>

            <button
              onClick={() => scrollToSection('formSection')}
              className="text-[#ECC000] text-[38px] font-semibold font-[Montserrat]"
            >
              Register Now
            </button>

            <button
              onClick={() => scrollToSection('footer')}
              className="text-white text-[38px] font-semibold font-[Montserrat]"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={handleCloseMenu}
            className="absolute top-[45px] right-[26px] text-white text-[24px] font-bold z-[1001]"
          >
            ×
          </button>
        </>
      )}

      {/* Desktop Hero Image */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/hacktrax-v2/HeroSection.jpg"
              alt="Hero Section"
              className="w-full h-full object-cover"
            />
          </div>

          {/* <button
            onClick={() => scrollToSection('formSection')}
            className="absolute top-[915px] left-[47%] -translate-x-1/2 rotate-[0.41deg] z-[1]"
          >
            <img
              src="/hacktrax-v2/RegisterButton.svg"
              alt="Register Button"
              className="w-[560px] h-[135px] object-contain"
            />
          </button> */}
        </>
      )}

      {/* Mobile Hero */}
      {isMobile && !isMobileMenuOpen && (
        <>
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/hacktrax-v2/HeroSectionM.svg"
              alt="Hero Mobile"
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={() => scrollToSection('formSection')}
            className="absolute top-[603px] left-1/2 -translate-x-1/2 rotate-[0.41deg] z-[1]"
          >
            <img
              src="/hacktrax-v2/RegisterButtonM.svg"
              alt="Register Button"
              className="w-[300px] h-[55px] object-contain"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSection;