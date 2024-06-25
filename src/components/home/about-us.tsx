"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const para1 = "Welcome to Alexa Developers SRM, where we fuse the power of voice with the prowess of technology. Unite with fellow enthusiasts to delve into captivating workshops, exhilarating hackathons, and riveting online competitions at a club supported by Amazon. Embrace the voice-controlled revolution and let's build a harmonious future together!";
  const para2 = "Discover a community of innovation at the Alexa Developers Club at SRMIST. Supported by Amazon Alexa, our club offers practical workshops and events tailored for aspiring developers. Dive into hands-on learning experiences, ensuring you’re equipped with real-world development skills. Whether you’re starting out or seasoned in the field, our community promotes growth and teamwork. Dive in, learn, and collaborate with the Alexa Developers SRM Club. Begin your tech journey with us."
  return (
    <div className="h-screen w-full rounded-md flex flex-col md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden" >
      <div className="flex flex-col items-center justify-evenly h-full gap-5 md:gap-10">
        <TextGenerateEffect words={para1} />
        <div className="text-5xl font-bold text-center text-white items-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">About Us</h1>
        <Image
            src="hero-sep.svg"
            height={10}
            width={250}
            alt="Hero Separator"
            className="mt-5"
          />
        </div>
        <TextGenerateEffect words={para2} />
        <p className="mt-4 text-lg text-center text-white">
          
        </p>
      </div>
    </div>
  );
}
