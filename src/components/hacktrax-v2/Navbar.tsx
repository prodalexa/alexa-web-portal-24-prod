'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
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
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToSection = (id: string) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    setTimeout(() => {
      if (id === 'heroSection') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = `/#${id}`;
        }
      }
    }, 100);
  };

  return (
    <div id = "heroSection"
    style={{
      position: "relative",
      width: "100%",
      height: isMobile ? "100vh" : "1400px",
      minHeight: isMobile ? "917px" : "1400px",
    }}>
      {/* Desktop Navbar */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            width: 'calc(100% - 88px)',
            height: '62px',
            top: '65px',
            left: '44px',
            right: '44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transform: 'rotate(0deg)',
            opacity: 1,
            zIndex: 10,
          }}
        >
          {/* Inner rectangle component on the left */}
          <div
            style={{
              position: 'relative',
              width: '315.15216064453125px',
              height: '61.57374954223633px',
              transform: 'rotate(0deg)',
              opacity: 1,
            }}
          >
            {/* SVG image box on the left */}
            <div
              style={{
                position: 'absolute',
                width: '61.57374954223633px',
                height: '61.57374954223633px',
                top: '0.21px',
                left: '0px',
                transform: 'rotate(0deg)',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img 
                src="/hacktrax-v2/Vector.svg" 
                alt="Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>

            {/* Text box inside inner rectangle */}
            <div
              style={{
                position: 'absolute',
                width: '239.1721649169922px',
                height: '25.106952667236328px',
                top: '19.86px',
                left: '75.98px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '19.07px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
              }}
            >
              Alexa Developers SRM
            </div>
          </div>

          {/* Rectangle component 3 on the right */}
          <div
            style={{
              height: '25px',
              transform: 'rotate(0deg)',
              opacity: 1,
              display: 'flex',
              gap: '22.14px',
              alignItems: 'center',
            }}
          >
            {/* HOME button */}
            <button
              onClick={() => scrollToSection('heroSection')}
              style={{
                width: '68px',
                height: '25px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '20.67px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                boxShadow: '0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              HOME
            </button>

            {/* DETAILS button */}
            <button
              onClick={() => scrollToSection('eventDetails')}
              style={{
                width: '89px',
                height: '25px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '20.67px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                boxShadow: '0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              DETAILS
            </button>

            {/* REGISTER NOW button */}
            <button
             onClick={() => scrollToSection("formSection")}
              style={{
                width: '167px',
                height: '25px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '20.67px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#ECC000',
                background: 'transparent',
                boxShadow: '0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              REGISTER NOW
            </button>

            {/* CONTACT US button */}
            <button
              onClick={() => scrollToSection('footer')}
              style={{
                width: '137px',
                height: '25px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '20.67px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                boxShadow: '0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobile && !isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '39.82999801635742px',
            top: '34px',
            left: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 26px',
            boxSizing: 'border-box',
            transform: 'rotate(0deg)',
            opacity: 1,
            zIndex: 10,
          }}
        >
          {/* Left side container */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: '39.82999801635742px',
            }}
          >
            {/* Rectangle box B - SVG Logo */}
            <div
              style={{
                position: 'relative',
                height: '39.82999801635742px',
                transform: 'rotate(0deg)',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* SVG image box */}
              <div
                style={{
                  width: '39.82999801635742px',
                  height: '39.82999801635742px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img 
                  src="/hacktrax-v2/Vector.svg" 
                  alt="Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div>

            {/* Rectangle component D - Text */}
            <div
              style={{
                marginLeft: '12px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '11.8px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Alexa Developers SRM
            </div>
          </div>

          {/* Rectangle box C - Right side (Hamburger menu button) */}
          <button
            onClick={handleMobileMenuToggle}
            style={{
              width: '40px',
              height: '20px',
              transform: 'rotate(0deg)',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '11px',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {/* Line component A */}
            <div
              style={{
                width: '40px',
                height: '0px',
                borderTop: '2px solid #FFFFFF',
                transform: 'rotate(0deg)',
                opacity: 1,
              }}
            />
            {/* Line component B */}
            <div
              style={{
                width: '40px',
                height: '0px',
                borderTop: '2px solid #FFFFFF',
                transform: 'rotate(0deg)',
                opacity: 1,
              }}
            />
            {/* Line component C */}
            <div
              style={{
                width: '40px',
                height: '0px',
                borderTop: '2px solid #FFFFFF',
                transform: 'rotate(0deg)',
                opacity: 1,
              }}
            />
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay - Component C1 and Close Button C11 */}
      {isMobile && isMobileMenuOpen && (
        <>
          {/* Rectangular component C1 - Mobile Menu */}
          <div
            style={{
              position: 'absolute',
              width: 'calc(100vw - 120px)',
              maxWidth: '400px',
              height: '320px',
              top: '299px',
              left: '50%',
              transform: 'translateX(-50%) rotate(0deg)',
              opacity: 1,
              background: '#1a1a2e',
              border: 'none',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '20px 0',
              boxSizing: 'border-box',
            }}
          >
            {/* Button T1 - HOME */}
            <button
              onClick={() => scrollToSection('heroSection')}
              style={{
                width: 'auto',
                height: '47px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '38.86px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              HOME
            </button>

            {/* Button T2 - Details */}
            <button
              onClick={() => scrollToSection('eventDetails')}
              style={{
                width: 'auto',
                height: '47px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '38.86px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Details
            </button>

            {/* Button T3 - Register Now */}
            <button
              onClick={() => scrollToSection('formSection')}
              style={{
                width: 'auto',
                height: '47px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '38.86px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#ECC000',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Register Now
            </button>

            {/* Button T4 - Contact Us */}
            <button
              onClick={() => scrollToSection('footer')}
              style={{
                width: 'auto',
                height: '47px',
                transform: 'rotate(0deg)',
                opacity: 1,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '38.86px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textAlign: 'center',
                color: '#FFFFFF',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Button C11 - Close Button */}
          <button
            onClick={handleCloseMenu}
            style={{
              position: 'absolute',
              width: '26.328125px',
              height: '28.061038970947266px',
              top: '45px',
              right: '26px',
              transform: 'rotate(0deg)',
              opacity: 1,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 'bold',
              padding: 0,
            }}
          >
            ×
          </button>
        </>
      )}

      {/* HeroSection Image Component - Desktop */}
      {!isMobile && (
        <>
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '1286px',
              top: '130px',
              left: '0px',
              transform: 'rotate(0deg)',
              opacity: 1,
              zIndex: 0,
            }}
          >
            <img
              src="/hacktrax-v2/HeroSection.svg"
              alt="Hero Section"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.svg')) {
                  target.src = '/hacktrax-v2/HeroSection.png';
                } else if (target.src.endsWith('.png')) {
                  target.src = '/hacktrax-v2/HeroSection.jpg';
                } else if (target.src.endsWith('.jpg')) {
                  target.src = '/hacktrax-v2/HeroSection.jpeg';
                }
              }}
            />
          </div>

          {/* Button R1 - Desktop Register Button */}
          <button
            onClick={() => scrollToSection('formSection')}
            style={{
              position: 'absolute',
              width: '490.99999813924063px',
              height: '119.440253758779px',
              top: '1100px',
              left: '50%',
              marginLeft: '-245.5px',
              transform: 'rotate(0.41deg)',
              opacity: 1,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0,
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <img
              src="/hacktrax-v2/RegisterButton.svg"
              alt="Register Button"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.svg')) {
                  target.src = '/hacktrax-v2/RegisterButton.png';
                } else if (target.src.endsWith('.png')) {
                  target.src = '/hacktrax-v2/RegisterButton.jpg';
                }
              }}
            />
          </button>
        </>
      )}

      {/* HeroSection Image Component - Mobile (hidden when menu is open) */}
      {isMobile && !isMobileMenuOpen && (
        <>
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100%',
              top: '0px',
              left: '0px',
              transform: 'rotate(0deg)',
              opacity: 1,
              zIndex: 0,
            }}
          >
            <img
              src="/hacktrax-v2/HeroSectionM.svg"
              alt="Hero Section Mobile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.svg')) {
                  target.src = '/hacktrax-v2/HeroSectionM.png';
                } else if (target.src.endsWith('.png')) {
                  target.src = '/hacktrax-v2/HeroSectionM.jpg';
                } else if (target.src.endsWith('.jpg')) {
                  target.src = '/hacktrax-v2/HeroSectionM.jpeg';
                }
              }}
            />
          </div>

          {/* Button R1 - Mobile Register Button */}
          <button
            onClick={() => scrollToSection('formSection')}
            style={{
              position: 'absolute',
              width: 'calc(100vw - 160px)',
              maxWidth: '300px',
              height: '54.763938696267836px',
              top: '603px',
              left: '50%',
              transform: 'translateX(-50%) rotate(0.41deg)',
              opacity: 1,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0,
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <img
              src="/hacktrax-v2/RegisterButtonM.svg"
              alt="Register Button Mobile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.svg')) {
                  target.src = '/hacktrax-v2/RegisterButtonM.png';
                } else if (target.src.endsWith('.png')) {
                  target.src = '/hacktrax-v2/RegisterButtonM.jpg';
                }
              }}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;