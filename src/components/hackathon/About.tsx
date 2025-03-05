"use client";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-5 text-white py-16 md:pt-16 bg-hack_bg overflow-x-hidden">
      <div className="flex flex-row items-center justify-between w-full max-w-screen px-2 md:px-0 md:gap-0">
        <div className="relative w-[150px] md:w-[400px] flex flex-col items-center">
          <div className="w-full md:w-[400px] h-8 md:h-24 bg-hack_orange"></div>
          <div className="flex items-center justify-center bg-[#CED2D1] rounded-full w-[100px] h-[100px] md:w-[250px] md:h-[250px] absolute top-[-35px] md:top-[-85px] z-10">
            <span className="text-black text-[60px] md:text-[140px] font-bold font-custom">24</span>
          </div>
        </div>
        <div className="grid md:flex-col items-center justify-center text-[30px] md:text-[90px] font-bold tracking-wider z-10 mx-2 md:mx-32 font-custom">
          <span className="leading-[1.1]">M</span>
          <span className="leading-[1.1]">A</span>
          <span className="leading-[1.1]">R</span>
        </div>
        <div className="relative w-[150px] md:w-[400px] flex flex-col items-center">
          <div className="w-full md:w-[400px] h-8 md:h-24 bg-hack_orange"></div>
          <div className="flex items-center justify-center bg-[#CED2D1] rounded-full w-[100px] h-[100px] md:w-[250px] md:h-[250px] absolute top-[-35px] md:top-[-85px] z-10">
            <span className="text-black text-[60px] md:text-[140px] font-bold font-custom">25</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
