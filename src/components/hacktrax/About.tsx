"use client";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-5 text-white py-16 md:pt-16 bg-hack_bg overflow-x-hidden">
      <div className="flex flex-row items-center justify-between w-full max-w-[1920px] mx-auto px-2 md:px-8 gap-4 md:gap-8">
        <div className="relative w-[150px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] flex flex-col items-center">
          <div className="w-full h-8 md:h-24 bg-hack_orange"></div>
          <div className="flex items-center justify-center bg-hack_white rounded-full w-[100px] h-[100px] md:w-[250px] md:h-[250px] absolute top-[-35px] md:top-[-85px] z-10">
            <span className="text-black text-[60px] md:text-[140px] font-bold font-keniaOne">24</span>
          </div>
        </div>
        <div className="grid md:flex-col items-center justify-center text-[30px] md:text-[90px] font-bold tracking-wider z-10 mx-2 md:mx-4 lg:mx-6 xl:mx-8 font-keniaOne">
          <span className="leading-[1.1]">M</span>
          <span className="leading-[1.1] pl-1 md:pl-2">A</span>
          <span className="leading-[1.1] pl-1 md:pl-2">R</span>
        </div>
        <div className="relative w-[150px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] flex flex-col items-center">
          <div className="w-full h-8 md:h-24 bg-hack_orange"></div>
          <div className="flex items-center justify-center bg-hack_white rounded-full w-[100px] h-[100px] md:w-[250px] md:h-[250px] absolute top-[-35px] md:top-[-85px] z-10">
            <span className="text-black text-[60px] md:text-[140px] font-bold font-keniaOne">25</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
