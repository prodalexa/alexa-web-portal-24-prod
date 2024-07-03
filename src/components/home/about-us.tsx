"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  
  const para1 = "Welcome to Alexa Developers SRM – a vibrant, student-run technical club at SRMIST where technology meets the community. Our mission is to cultivate an open environment where tech enthusiasts can explore, learn, and grow, all while pushing the boundaries of voice-controlled technology, application development, and UI/UX design through various events and workshops, focusing on upskilling through hands-on learning";
  const para2 = "At Alexa Developers SRM, we believe in the power of collaboration and creativity. Our club is a melting pot of ideas, skills, and passions, offering members a platform to not only learn but also to innovate and make a tangible impact. We are dedicated to providing a nurturing environment that fosters friendships, shares knowledge, and supports each student’s educational journey."
  const para3 = "We curate a diverse array of workshops, hackathons, and competitions designed to inspire and empower aspiring developers. Whether you’re new to the world of technology or a seasoned professional, our events offer continuous learning and collaboration opportunities, emphasizing hands-on learning, ensuring participants not only grasp concepts but also acquire practical skills for real-world application. We are dedicated to crafting interactive and engaging learning experiences, sparking a passion for continuous improvement."
  const para4 = "Together we build a community, where creativity knows no bounds and collaboration is key."
  
return (
    <div className="h-screen w-full rounded-md flex flex-col md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden" >
      <div className="flex flex-col items-center justify-evenly h-full gap-2 md:gap-6">
        <TextGenerateEffect words={para1} />
        <div className="text-5xl font-bold text-center text-white items-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">About Us</h1>
        <Image
            src="hero-sep.svg"
            height={10}
            width={250}
            alt="Hero Separator"
            className="mt-3 md:mt-5"
          />
        </div>
        <TextGenerateEffect words={para2} />
        <TextGenerateEffect words={para3} />
        <TextGenerateEffect words={para4} />
        <p className="mt-4 text-lg text-center text-white">
          
        </p>
      </div>
    </div>
  );
}
