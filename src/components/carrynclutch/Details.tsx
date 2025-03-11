"use client";
import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center -mt-48 -mb-96 md:mb-0 md:mt-0 relative overflow-hidden">
      <div className="flex flex-col items-center justify-between relative z-10 w-full px-2 md:px-4 pointer-events-none select-none md:gap-4">
        <div className="w-full flex justify-start md:-mb-16 pl-2 md:pl-4">
          <Image
            src="/carrynclutch/22.png"
            alt="22"
            height={500}
            width={500}
            className="w-[200px] md:w-[450px] object-contain relative z-10"
          />
        </div>
        <Image
          src="/carrynclutch/March.png"
          alt="March"
          height={500}
          width={500}
          className="w-[250px] md:w-[500px] object-contain mx-auto relative z-20 -mt-2 md:-mt-8"
        />
        <div className="w-full flex justify-end -mt-4 md:-mt-16 pr-2 md:pr-4">
          <Image
            src="/carrynclutch/23.png"
            alt="23"
            height={500}
            width={500}
            className="w-[200px] md:w-[450px] object-contain relative z-10"
          />
        </div>
      </div>
      <Image
        src="/carrynclutch/Background.png"
        alt="Background"
        height={1920}
        width={1080}
        className="absolute inset-0 w-full h-full object-contain -z-0"
        priority
      />
    </div>
  );
};

export default Details;