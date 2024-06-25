import Image from "next/image";
import React from "react";

type Props = {};

function Creatives({}: Props) {
  return (
    <div className="hidden w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40">
       <div
        className="w-1/2 h-full flex items-start justify-start"
      >
        <Image
          src="/home/ux.svg"
          height={10}
          width={600}
          alt="creatives"
          className=""
        />
      </div>
      <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6 text-end">
        <div className="w-full text-7xl">Creatives</div>
        <div className="w-full text-2xl font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default Creatives;
