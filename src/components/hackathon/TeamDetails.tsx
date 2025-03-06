"use client";
import React from "react";

const TeamDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 md:px-8 mt-16 md:mt-32 bg-hack_bg">
      <h1 className="text-white text-4xl md:text-6xl mb-8 md:mb-12 text-center font-sairaStencilOne">TEAM DETAILS</h1>
      <form className="w-full space-y-6 md:space-y-8 font-monsterrat">
        <div className="grid justify-center w-full">
          <label className="text-hack_orange text-lg md:text-xl mb-2 block">Team Name*</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-96 bg-white rounded-lg p-3 md:p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
          />
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex-col">
                <h2 className="text-hack_orange text-lg md:text-xl mb-2">Member 1 (Lead)*</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-lg p-3 md:p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-lg md:text-xl mb-2">SRM Email ID *</h2>
                <input
                  type="email"
                  placeholder="xy1234@srmist.edu.in"
                  className="w-full bg-white rounded-lg p-3 md:p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-lg md:text-xl mb-2">Phone Number*</h2>
                <div className="flex w-full bg-white rounded-lg">
                  <span className="p-3 md:p-4 text-black border-r border-black">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full p-3 md:p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-hack_orange text-lg md:text-xl mb-2">Registration Number*</h2>
                <input
                  type="text"
                  placeholder="RAXXXXXXXXXXXXXX"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-col">
                <h2 className="text-hack_orange text-xl">Member 2*</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">SRM Email ID *</h2>
                <input
                  type="email"
                  placeholder="xy1234@srmist.edu.in"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Phone Number*</h2>
                <div className="flex w-full bg-white rounded-lg">
                  <span className="p-4 text-black border-r border-black">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Registration Number*</h2>
                <input
                  type="text"
                  placeholder="RAXXXXXXXXXXXXXX"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-col">
                <h2 className="text-hack_orange text-xl">Member 3</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">SRM Email ID</h2>
                <input
                  type="email"
                  placeholder="xy1234@srmist.edu.in"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Phone Number</h2>
                <div className="flex w-full bg-white rounded-lg">
                  <span className="p-4 text-black border-r border-black">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Registration Number</h2>
                <input
                  type="text"
                  placeholder="RAXXXXXXXXXXXXXX"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-white my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-col">
                <h2 className="text-hack_orange text-xl">Member 4</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">SRM Email ID</h2>
                <input
                  type="email"
                  placeholder="xy1234@srmist.edu.in"
                  className="w-full bg-white rounded-lg p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Phone Number</h2>
                <div className="flex w-full bg-white rounded-lg">
                  <span className="p-4 text-black border-r border-black">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-hack_orange text-xl">Registration Number</h2>
                <input
                  type="text"
                  placeholder="RAXXXXXXXXXXXXXX"
                  className="w-full bg-white rounded-lg p-3 md:p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="bg-hack_orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 text-xl mt-8 flex items-center gap-2"
          >
            Pay & Register
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none" className="ml-2">
              <path d="M0 14.9665L5 8.99981L0 3.03315L1 0.646484L8 8.99981L1 17.3531L0 14.9665Z" fill="white" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamDetails;