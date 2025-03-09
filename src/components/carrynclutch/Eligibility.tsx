"use client";
import Image from "next/image";
import React from "react";

const Eligibility = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden -mt-72 md:mt-0">
      <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-6xl mx-auto px-4 space-y-8 pointer-events-none select-none">
        <Image
          src="/carrynclutch/Eligibility.png"
          alt="Eligibility"
          height={800}
          width={1200}
          className="w-full max-w-4xl object-contain relative"
        />
        <Image
          src="/carrynclutch/Players.png"
          alt="Players"
          height={600}
          width={1000}
          className="w-full max-w-3xl object-contain relative"
        />
      </div>
    </div>
  )
}

export default Eligibility;