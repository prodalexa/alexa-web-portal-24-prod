import Image from "next/image";
import React from "react";

type Props = {
  domainData: {
    title: string;
    slogan: string;
    description: string;
    image: string;
  };
};

function Business({domainData}: Props) {
  return (
    <div className="hidden w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40">
      <div className="w-1/2 h-full flex items-start justify-start relative">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#31B553] to-[#0AA294] transform scale-[0.80] rounded-full blur-[100px]" />
        <Image
          src={domainData.image}
          height={10}
          width={600}
          alt={`${domainData.title} Image`}
          className="z-10"
        />
      </div>
      <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6 text-end">
        <div className="w-full text-7xl">
          <span>{domainData.title}</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <div className="w-full text-2xl font-thin">
          {domainData.description}
        </div>
      </div>
    </div>
  );
}

export default Business;
