"use client";

import React from "react";

const Sponsors: React.FC = () => {
  return (
    <section
      id="sponsors"
      className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-16
      bg-gradient-to-br
      from-[#511e5b]
      via-[#1A052A]
      to-[#030645]"
    >
      <h1 className="whitespace-nowrap text-[7vw] sm:text-6xl font-audiowide text-center mb-16">
        <span style={{ color: "#CAFB12" }}>Meet</span>{" "}
        <span style={{ color: "#563AFF" }}>Our</span>{" "}
        <span style={{ color: "#FF4E78" }}>Sponsors</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-12 sm:gap-y-16 sm:gap-x-16 md:gap-x-40 justify-items-center items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gray-200 shadow flex items-center justify-center text-gray-600 text-lg"
          >
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;