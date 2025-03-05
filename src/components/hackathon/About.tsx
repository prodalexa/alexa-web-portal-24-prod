"use client";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-5 text-white pt-16 bg-hack_bg">
      <div className="flex flex-row items-center justify-center relative w-full max-w-screen">
        <div className="relative w-[400px] flex flex-col items-center">
          <div className="w-[400px] h-24 bg-[#FF4D00]"></div>
          <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full w-[250px] h-[250px] absolute top-[-85px] z-10">
            <span className="text-black text-[140px] font-bold font-custom">24</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-[90px] font-bold tracking-wider z-10 mx-32 font-custom">
          <span className="leading-[1.1]">M</span>
          <span className="leading-[1.1]">A</span>
          <span className="leading-[1.1]">R</span>
        </div>
        <div className="relative w-[400px] flex flex-col items-center">
          <div className="w-[400px] h-24 bg-[#FF4D00]"></div>
          <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full w-[250px] h-[250px] absolute top-[-85px] z-10">
            <span className="text-black text-[140px] font-bold font-custom">25</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
