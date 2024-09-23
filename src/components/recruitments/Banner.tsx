import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      id="banner"
      className="flex flex-col-reverse md:flex-row justify-between items-center pt-10 md:px-10 py-10 gap-5 bg-black  h-[calc(100dvh-80px)] w-screen"
    >
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-[70%]">
        <h1 className="text-4xl md:text-8xl font-extrabold bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] bg-clip-text text-transparent">
          Recruitments <span className="text-white">‘24</span>
        </h1>
        <p className="text-white text-xl md:text-2xl mt-5 max-w-[600px] p-2">
          The official developers&apos; club of Amazon Alexa at SRMIST is now
          open to recruiting first and second year students!
        </p>
        <a
          href="https://lu.ma/event/evt-EQTXfYbxktqOuHt"
          data-luma-action="checkout"
          data-luma-event-id="evt-EQTXfYbxktqOuHt"
          className="luma-checkout--button mt-10 max-w-[200px] bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] text-white py-4 px-10 rounded-full text-[16px] md:text-[20px] font-bold no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00CDC1] hover:to-[#00B5FF] flex justify-center items-center"
        >
          Apply Now
        </a>
      </div>

      <div className="relative w-auto h-auto md:w-[30%]">
        <Image
          src="/recruitment/Vector.png"
          alt="Alexa Background"
          height={500}
          width={500}
          className="w-auto h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
