"use client";

import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const RegisterDebug: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
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
              href="/alexaverse2.0#home"
              className="text-white font-audiowide text-[32px] hover:text-purple-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/alexaverse2.0#events"
              className="text-white font-audiowide text-[32px] hover:text-purple-300 transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-white font-audiowide text-[32px] hover:text-purple-300 transition-colors"
            >
              Contact Us
            </a>
          </div>

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
              href="/alexaverse2.0#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-audiowide text-4xl hover:text-purple-300 transition"
            >
              HOME
            </a>
            <a
              href="/alexaverse2.0#events"
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

          <p className="text-center text-[14px] sm:text-xl font-nunito text-white font-semibold px-4 whitespace-nowrap mb-6">
            Designed and Developed by{" "}
            <span className="bg-gradient-to-r from-[#C5126C] via-[#7942FF] to-[#CAFB12] bg-clip-text text-transparent font-bold">
              Alexa Developers SRM.
            </span>
          </p>
        </div>
      )}

      <section
        id="register-debug"
        className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-16
      bg-gradient-to-br
      from-[#030645]
      via-[#1A052A]
      to-[#511e5b]"
      >
        <div className="relative max-w-[85rem] w-[90vw] h-[40vw] min-h-[120px] mt-10 mb-10" style={{ left: '-5vw' }}>
          <div
            className="absolute top-[7.2vw] left-[15.6vw] w-[68.4vw] h-[18vw] rounded-[2.1vw] border-[0.06vw] backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(115,115,115,0.25)_1.74%,rgba(50,50,50,0.25)_1.75%,rgba(163,163,163,0.25)_33.05%,rgba(112,112,112,0.25)_97.16%)]"
            style={{
              borderImage: `radial-gradient(88.13% 63.48% at 26.09% 25.74%, #FFFFFF 0%, rgba(255, 255, 255, 0.905829) 8.52%, rgba(255, 255, 255, 0.801323) 40.45%, rgba(255, 255, 255, 0.595409) 40.46%, rgba(255, 255, 255, 0.29) 96.15%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%) linear-gradient(180deg, rgba(0, 0, 0, 0.2) 18.72%, rgba(255, 30, 0, 0.2) 43.64%, rgba(0, 0, 0, 0.2) 67.21%)`,
              borderImageSlice: 1,
            }}
          >
            <div className="absolute top-[1.2vw] left-[19.8vw] right-[2.4vw] flex justify-between text-white">
              <span className="text-[1.08vw] min-text-[12px] font-space">VENUE</span>
              <span className="text-[1.08vw] min-text-[12px] font-space">TIME</span>
              <span className="text-[1.08vw] min-text-[12px] font-space">DATE</span>
            </div>
            <div className="absolute top-[3vw] left-[19.8vw] right-[2.4vw] flex justify-between text-white">
              <div className="flex flex-col">
                <span className="text-[1.44vw] min-text-[16px] font-space font-bold">MINI HALL 2</span>
              </div>
              <div className="text-[1.44vw] min-text-[16px] font-space font-bold">8:00 AM - 5:00 PM</div>
              <div className="text-[1.44vw] min-text-[16px] font-space font-bold">05-09-2025</div>
            </div>
          </div>
          <div
            className="absolute top-[15.6vw] left-[12vw] w-[76.8vw] h-[17.4vw] rounded-[2.1vw] border-[0.06vw] backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(180,180,180,0.25)_1.74%,rgba(79,79,79,0.25)_1.75%,rgba(255,255,255,0.25)_33.05%,rgba(175,175,175,0.25)_97.16%)]"
            style={{
              borderImage: `radial-gradient(88.13% 63.48% at 26.09% 25.74%, #FFFFFF 0%, rgba(255, 255, 255, 0.905829) 8.52%, rgba(255, 255, 255, 0.801323) 40.45%, rgba(255, 255, 255, 0.595409) 40.46%, rgba(255, 255, 255, 0.29) 96.15%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0) 100%) linear-gradient(180deg, rgba(0, 0, 0, 0.2) 18.72%, rgba(255, 30, 0, 0.2) 43.64%, rgba(0, 0, 0, 0.2) 67.21%)`,
              borderImageSlice: 1,
            }}
          >
            <div className="absolute left-[25.2vw] top-[1.8vw]">
              <h1 className="text-white text-[1.08vw] min-text-[12px] font-space mb-[-0.6vw]">EVENT</h1>
              <h2 className="text-white text-[2.52vw] min-text-[24px] font-anton">DEBUG THE CAMPUS</h2>
            </div>
            <div className="absolute right-[5vw] top-[2.5vw] text-right">
              <p className="text-white text-[1.1vw] min-text-[14px] font-inter">
                <p>Discover and Decrypt:</p>
                <span>Classic treasure hunt with a modern flavor!</span>
              </p>
            </div>
          </div>
          <img
            src="/alexaverse2.0/debug-img.svg"
            alt="Debug Image"
            className="absolute top-[4.8vw] left-[-14.4vw] w-[76.8vw] h-[19.8vw] object-contain rounded-[2.1vw]"
          />
          <div
            className="relative top-[26.4vw] left-[15vw] w-[18.6vw] h-[4.32vw] rounded-[3.12vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(144,144,144,0.25)_1.74%,rgba(63,63,63,0.25)_1.75%,rgba(204,204,204,0.25)_33.05%,rgba(140,140,140,0.25)_97.16%)]"
          >
            <img
              src="/alexaverse2.0/rewind-button.png"
              alt="Rewind Button"
              className="absolute left-[0.96vw] top-1/2 -translate-y-1/2 w-[1.92vw] h-[2.52vw] object-contain invert"
            />
            <img
              src="/alexaverse2.0/fast-forward-button.png"
              alt="Fast Forward Button"
              className="absolute left-[15.96vw] top-1/2 -translate-y-1/2 w-[1.92vw] h-[2.52vw] object-contain invert"
            />
            <div
              className="absolute left-[9.36vw] top-[2.16vw] -translate-x-1/2 -translate-y-1/2 w-[9.36vw] h-[5.04vw] rounded-[3.12vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-white"
            >
              <img
                src="/alexaverse2.0/play-button.png"
                alt="Play Button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6.24vw] h-[1.92vw] object-contain"
              />
            </div>
          </div>
          <div
            className="absolute top-[22.2vw] left-[37.2vw] w-[48vw] h-[2.52vw] rounded-[3.12vw] border-[0.1vw] border-white backdrop-blur-[5vw]"
            style={{
              background: 'linear-gradient(to right, black 80%, transparent 0%)'
            }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[5.04vw] h-[3.12vw] rounded-[3.12vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-white"
              style={{
                left: '80%',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>
          </div>
          <div
            className="absolute top-[27vw] left-[37.2vw] w-[48vw] h-[5.04vw] rounded-[1.44vw] border-[0.1vw] border-white backdrop-blur-[5vw] flex items-center justify-center p-[1.2vw]"
            style={{
              background: 'black'
            }}
          >
            <p className="text-white text-center font-inter text-[1.08vw] min-text-[14px] leading-tight">
              Find the numerous QR codes hidden around and debug the puzzles with your teammates. Be quick because the time is ticking!
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl font-audiowide mb-10 text-center whitespace-nowrap">
          Registration Form
        </h2>

        <form className="w-full max-w-3xl space-y-8">
          {[1, 2, 3, 4, 5].map((studentNum) => (
            <div key={studentNum} className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-audiowide text-center text-purple-300">
                Student {studentNum}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor={`name-${studentNum}`}
                    className="block mb-2 font-semibold font-[var(--font-moul)] text-white"
                  >
                    Name{studentNum <= 3 ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input
                    type="text"
                    id={`name-${studentNum}`}
                    required={studentNum <= 3}
                    pattern="^[a-zA-Z\s]+$"
                    title="Only letters and spaces allowed"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 font-[var(--font-moul)] placeholder-gray-500 text-black bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`regno-${studentNum}`}
                    className="block mb-2 font-semibold font-[var(--font-moul)] text-white"
                  >
                    Register Number{studentNum <= 3 ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input
                    type="text"
                    id={`regno-${studentNum}`}
                    required={studentNum <= 3}
                    pattern="^RA\\d{13}$"
                    placeholder="RAXXXXXXXXXXXXX"
                    title="Must start with RA followed by 13 digits"
                    className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 font-[var(--font-moul)] placeholder-gray-500 text-black bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`phone-${studentNum}`}
                    className="block mb-2 font-semibold font-[var(--font-moul)] text-white"
                  >
                    Phone Number{studentNum <= 3 ? <span className="text-red-500">*</span> : null}
                  </label>
                  <div className="w-full flex items-center border border-gray-400 rounded bg-white focus-within:ring-2 focus-within:ring-purple-500 overflow-hidden">
                    <span className="px-3 text-black text-sm font-[var(--font-moul)] border-r border-gray-400 bg-gray-100">
                      +91&nbsp;
                    </span>
                    <input
                      type="tel"
                      id={`phone-${studentNum}`}
                      required={studentNum <= 3}
                      pattern="^[0-9]{10}$"
                      placeholder="012 345 6789"
                      title="Enter a valid 10-digit phone number"
                      className="flex-1 px-3 py-2 text-black placeholder-gray-500 bg-white focus:outline-none font-[var(--font-moul)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`email-${studentNum}`}
                    className="block mb-2 font-semibold font-[var(--font-moul)] text-white"
                  >
                    SRMIST Email{studentNum <= 3 ? <span className="text-red-500">*</span> : null}
                  </label>
                  <input
                    type="email"
                    id={`email-${studentNum}`}
                    required={studentNum <= 3}
                    pattern="^[a-zA-Z0-9._%+-]+@srmist\\.edu\\.in$"
                    placeholder="xyz@srmist.edu.in"
                    title="Email must be an SRMIST ID ending with @srmist.edu.in"
                    className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 font-[var(--font-moul)] placeholder-gray-500 text-black bg-white"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="mx-auto px-20 py-6 bg-[#130025] border-2 border-white rounded-[50px] text-white font-[var(--font-roboto)] text-2xl flex items-center justify-center gap-4 hover:bg-[#2b0a47] transition duration-300"
          >
            Register
            <img
              src="/alexaverse2.0/right-arrow.png"
              alt="Arrow"
              className="w-6 h-6 object-contain filter invert ml-auto"
            />
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterDebug;