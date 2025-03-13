"use client";
import Image from "next/image";
import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  eligibilityType: "SRM" | "NON_SRM";
}

function SubmitButton({ eligibilityType }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  
  // Define registration links based on eligibility type
  const registrationLinks = {
    SRM: "https://rzp.io/rzp/carrynclutchsrm", 
    NON_SRM: "https://rzp.io/rzp/carrynclutchnonsrm"
  };

  return (
    <div id="register" className="flex justify-center font-monsterrat md:mt-8 mt-4 w-full relative z-40">
      <a href={registrationLinks[eligibilityType]} target="_blank" rel="noopener noreferrer" 
         className="w-full max-w-md mx-4 md:mx-0 relative z-40">
        <button
          type="button"
          disabled={pending}
          className="w-full bg-gradient-to-r from-[#460156] to-[#9902BC] text-white font-bold py-4 px-12 text-lg rounded-xl 
                     hover:bg-opacity-90 active:scale-95 transition-all duration-200 border-4 border-white 
                     inline-flex items-center justify-center cursor-pointer select-none"
          style={{ touchAction: "manipulation" }}
        >
          <span>{pending ? "Processing..." : "Pay & Register"}</span>
          <Image
            src="/carrynclutch/Chevron_Right.png"
            alt="Chevron Right"
            height={10}
            width={10}
            className="ml-4 object-contain"
          />
        </button>
      </a>
    </div>
  )
}

export default SubmitButton;