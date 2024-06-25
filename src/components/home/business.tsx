import Image from "next/image";
import React from "react";

type Props = {};

function Business({}: Props) {
  return (
    <div className="hidden w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40">
      <div className="w-1/2 h-full flex items-start justify-start">
        <Image
          src="/home/business.svg"
          height={10}
          width={600}
          alt="business"
          className=""
        />
      </div>
      <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6 text-end">
        <div className="w-full text-7xl">
          <span>Business</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <div className="w-full text-2xl font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default Business;
