"use client";
import Image from "next/image";
import React, { useState } from "react";

export type EligibilityType = "SRM" | "NON_SRM";

interface EligibilityProps {
  onEligibilityChange?: (type: EligibilityType) => void;
}

const Eligibility: React.FC<EligibilityProps> = ({ onEligibilityChange }) => {
  const [selectedType, setSelectedType] = useState<EligibilityType>("SRM");

  const registrationLinks = {
    SRM: "https://rzp.io/rzp/carrynclutchsrm",
    NON_SRM: "https://rzp.io/rzp/carrynclutchnonsrm"
  };

  const handleTypeSelect = (type: EligibilityType) => {
    setSelectedType(type);
    onEligibilityChange?.(type);
  };

  return (
    <div id="register" className="py-16 px-4 md:py-24 relative">
      <div className="flex flex-col items-center justify-center relative z-30 w-full max-w-6xl mx-auto space-y-4 md:space-y-8">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/carrynclutch/Eligibility.png"
            alt="Eligibility"
            height={800}
            width={1200}
            className="w-full max-w-[90vw] md:max-w-4xl object-contain relative mx-auto pointer-events-none select-none"
          />
          <Image
            src="/carrynclutch/Players.svg"
            alt="Players"
            height={600}
            width={1000}
            className="w-full max-w-[80vw] md:max-w-3xl object-contain relative mx-auto mt-4 md:mt-8 pointer-events-none select-none"
          />
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-64 mt-4 md:mt-8 font-valorant space-y-4 md:space-y-0 z-40 relative">
          <a
            href={registrationLinks.SRM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleTypeSelect("SRM")}
            className={`px-6 md:px-8 py-2 md:py-3 text-lg md:text-xl rounded-lg transition-all duration-300 ${
              selectedType === "SRM"
                ? "bg-gaming_button_bg text-white"
                : "bg-gray-500 text-gray-300"
            } border-2 border-white hover:opacity-90 active:scale-95 cursor-pointer inline-flex items-center justify-center`}
            style={{ touchAction: "manipulation" }}
          >
            SRM
          </a>
          <a
            href={registrationLinks.NON_SRM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleTypeSelect("NON_SRM")}
            className={`px-6 md:px-8 py-2 md:py-3 text-lg md:text-xl rounded-lg transition-all duration-300 ${
              selectedType === "NON_SRM"
                ? "bg-gaming_button_bg text-white"
                : "bg-gray-500 text-gray-300"
            } border-2 border-white hover:opacity-90 active:scale-95 cursor-pointer inline-flex items-center justify-center`}
            style={{ touchAction: "manipulation" }}
          >
            Non-SRM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;