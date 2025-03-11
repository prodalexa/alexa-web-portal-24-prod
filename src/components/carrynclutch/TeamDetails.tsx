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
    SRM: "#", // Replace with actual SRM registration link
    NON_SRM: "#" // Replace with actual Non-SRM registration link
  };

  return (
    <div className="flex justify-center w-full">
      <a href={registrationLinks[eligibilityType]} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          disabled={pending}
          className="bg-gradient-to-r from-[#460156] to-[#9902BC] text-white font-bold py-4 px-12 text-lg rounded-xl hover:bg-opacity-90 transition-opacity border-4 border-white inline-flex items-center"
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