"use client";

import React from "react";

const Sponsors: React.FC = () => {
  const sponsorData = [
    {
      tier: "Title Sponsor",
      tierClass: "bg-gradient-to-r from-indigo-500 to-purple-600",
      name: "MyCaptain",
      logoUrl: "/alexaverse2.0/MyCaptain_bg2.jpg"
    },
    {
      tier: "Gold Sponsor", 
      tierClass: "bg-gradient-to-r from-yellow-400 to-orange-500",
      name: "Naish Solutions",
      logoUrl: "/alexaverse2.0/Naish_solutions.png"
    },
    {
      tier: "Silver Sponsor",
      tierClass: "bg-gradient-to-r from-gray-300 to-gray-500", 
      name: "Analytx",
      logoUrl: "/alexaverse2.0/Analytx.jpg"
    },
    {
      tier: "Intern Partner",
      tierClass: "bg-gradient-to-r from-green-400 to-cyan-400",
      name: "Enlight Wisdom",
      logoUrl: "/alexaverse2.0/EnlightWisdom.jpg"
    },
    {
      tier: "Food Sponsor",
      tierClass: "bg-gradient-to-r from-pink-500 to-yellow-400",
      name: "The Sober Social Cafe",
      logoUrl: "/alexaverse2.0/Sober social.jpg"
    }
  ];

  return (
    <section
      id="sponsors"
      className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-8 sm:py-16"
    >
      {/* Main Title */}
      <h1 className="text-[8vw] xs:text-[7vw] sm:text-6xl font-inter font-bold text-center mb-2 sm:mb-4 leading-tight">
        <span className="text-[#CAF012]">Meet</span>{" "}
        <span className="text-[#306EF9]">Our</span>{" "}
        <span className="text-[#FF4E78]">Sponsors</span>
      </h1>

      {/* Desktop Layout - organized by rows */}
      <div className="hidden lg:flex flex-col gap-16 items-center max-w-6xl">
        {/* Row 1: Title Sponsor - Horizontal Layout */}
        <div className="flex justify-center">
          <div className="relative border border-white/20 rounded-3xl p-8" style={{width: 'calc(288px * 4 + 32px * 3)'}}>
            {/* Centered Title Sponsor Badge */}
            <div className="flex justify-center mb-6">
              <span className={`inline-block px-6 py-3 rounded-full text-base font-inter font-bold uppercase tracking-wider text-white ${sponsorData[0].tierClass}`}>
                {sponsorData[0].tier}
              </span>
            </div>
            <div className="flex items-center gap-8">
              {/* Logo Container */}
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 -mt-4">
                <img
                  src={sponsorData[0].logoUrl}
                  alt={`${sponsorData[0].name} logo`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-2xl font-bold text-white/60">${sponsorData[0].name.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>
              {/* Text Content - Centered */}
              <div className="flex-1 flex justify-center">
                <h2 className="text-3xl font-inter font-medium leading-tight text-center">
                  <span className="text-[#FF6B35]">Alexa Developers SRM</span>{" "}
                  <span className="text-[#F7931E]">presents</span>{" "}
                  <span className="text-[#FFD23F]">Alexa Verse 2.0</span>{" "}
                  <span className="text-[#06FFA5]">Powered by</span>{" "}
                  <span className="text-[#4ECDC4] font-bold">MyCaptain</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Gold, Silver, Internship, Food Sponsors */}
        <div className="flex justify-center gap-8">
          {sponsorData.slice(1, 5).map((sponsor, index) => (
            <div
              key={index + 1}
              className="relative w-72 h-96 border border-white/20 rounded-3xl p-8 text-center"
            >
              <span className={`inline-block px-6 py-3 rounded-full text-base font-inter font-bold uppercase tracking-wider mb-6 text-white ${sponsor.tierClass}`}>
                {sponsor.tier}
              </span>
              <div className="w-36 h-36 mx-auto mb-5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-2xl font-bold text-white/60">${sponsor.name.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>
              <h3 className="text-2xl font-inter font-semibold text-white mb-3">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Layout - Optimized */}
      <div className="lg:hidden w-full max-w-6xl">
        {/* Mobile: Title Sponsor - Horizontal Layout */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative w-full max-w-4xl border border-white/20 rounded-3xl p-8 sm:p-10">
            {/* Centered Title Sponsor Badge */}
            <div className="flex justify-center mb-8">
              <span className={`inline-block px-6 py-3 rounded-full text-base font-inter font-bold uppercase tracking-wider text-white ${sponsorData[0].tierClass}`}>
                {sponsorData[0].tier}
              </span>
            </div>
            <div className="flex items-center gap-6 sm:gap-8">
              {/* Logo Container */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 -mt-4">
                <img
                  src={sponsorData[0].logoUrl}
                  alt={`${sponsorData[0].name} logo`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xl sm:text-2xl font-bold text-white/60">${sponsorData[0].name.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>
              {/* Text Content - Centered */}
              <div className="flex-1 flex justify-center">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-inter font-medium leading-tight text-center">
                  <span className="text-[#FF6B35]">Alexa Developers SRM</span>{" "}
                  <span className="text-[#F7931E]">presents</span>{" "}
                  <span className="text-[#FFD23F]">Alexa Verse 2.0</span>{" "}
                  <span className="text-[#06FFA5]">Powered by</span>{" "}
                  <span className="text-[#4ECDC4] font-bold">MyCaptain</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: All Other Sponsors - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 px-4">
          {sponsorData.slice(1, 5).map((sponsor, index) => (
            <div
              key={index + 1}
              className="relative border border-white/20 rounded-3xl p-8 text-center min-h-[280px] sm:min-h-[320px] flex flex-col"
            >
              <span className={`inline-block px-6 py-3 rounded-full text-base font-inter font-bold uppercase tracking-wider mb-6 text-white ${sponsor.tierClass}`}>
                {sponsor.tier}
              </span>
              <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-2xl font-bold text-white/60">${sponsor.name.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-inter font-semibold text-white mt-auto">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;