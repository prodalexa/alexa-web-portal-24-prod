"use client";
import Image from "next/image";
import React from "react";

const Rules = () => {
  return (
    <div className="w-screen md:h-screen flex items-center justify-center relative overflow-hidden -mt-96 md:my-32">
      <div className="flex flex-col items-center justify-between relative z-10 w-full pointer-events-none -mt-96 md:mt-0 select-none">
        <div className="w-full flex justify-center -mt-96 md:mt-0 -mb-64 md:-mb-32">
          <Image
            src="/carrynclutch/Rules.png"
            alt="22"
            height={500}
            width={500}
            className="w-screen object-contain relative"
          />
        </div>
      </div>
    </div>
  )
}

export default Rules;