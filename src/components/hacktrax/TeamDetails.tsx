"use client";
import Image from "next/image";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  const registrationLink = "https://rzp.io/rzp/adshacktrax";

  return (
    <div id="register" className="flex justify-center w-full">
      <a href={registrationLink} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          disabled={pending}
          className="bg-hack_orange font-monsterrat text-white font-bold py-4 px-12 text-lg rounded-xl hover:bg-opacity-90 transition-opacity inline-flex items-center"
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