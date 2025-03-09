"use client";
import Image from "next/image";
import React from "react";

const TeamDetails = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col overflow-hidden">
      <div className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/carrynclutch/Border.png"
          alt="Border"
          width={1920}
          height={1080}
          className="absolute w-[50%] h-[120%] object-contain pointer-events-none"
          priority
        />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center font-monsterrat tracking-wider px-16">
          TEAM DETAILS
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8">
        <form className="space-y-8 font-monsterrat">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Team Name*</label>
                <input
                  type="text"
                  placeholder="Team Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Campus*</label>
                <select className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white appearance-none">
                  <option value="SRMIST">SRMIST</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 1 (Lead)*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID*</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number*</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="xy1234@srmist.edu.in"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 2*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID*</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number*</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 3*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID*</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number*</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 4*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID*</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number*</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 5*</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID*</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number*</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email*</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Player 6</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Riot ID</label>
                <input
                  type="text"
                  placeholder="EarlGreyTeemo#sip"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-lg mb-2">Phone Number</label>
                <div className="flex">
                  <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                  <input
                    type="tel"
                    placeholder="012 345 6789"
                    className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-lg mb-2">Email</label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center pt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#460156] to-[#9902BC] text-white font-bold py-4 px-12 text-lg rounded-xl hover:bg-opacity-90 transition-opacity border-4 border-white inline-flex items-center"
            >
              <span>Pay & Register</span>
              <Image
                src="/carrynclutch/Chevron_Right.png"
                alt="Chevron Right"
                height={10}
                width={10}
                className="ml-4 object-contain"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamDetails;