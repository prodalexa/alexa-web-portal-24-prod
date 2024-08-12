"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function AboutUs() {
  const para1 = "Welcome to Alexa Developers SRM, a thriving, student-run technical organization at SRMIST that brings technology and community together. We create an open atmosphere for tech enthusiasts to explore, learn, and grow, with a focus on voice-controlled technologies, application development, and UI/UX design via hands-on events and workshops. Our club is a hotbed of collaboration and innovation, where members can experiment, share expertise, and make a real difference. Whether you're a newcomer to technology or a seasoned professional, our wide range of workshops, hackathons, and contests provide ongoing learning and practical skill development.";
  const para4 = "Together we build a community, where creativity knows no bounds and collaboration is key.";

  return (
    <div className="h-full w-auto flex flex-col items-center justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden pb-8">
      
      {/* Title Section */}
      <div className="text-5xl font-bold text-center text-white items-center mb-8">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">
          About Us
        </h1>
        
        <Image
          src="hero-sep.svg"
          height={10}
          width={250}
          alt="Hero Separator"
          className="mt-3 md:mt-5"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row md:items-start md:text-right  w-auto px-2 space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-1/3 p-4 md:pt-10">
          <Image
            src="/club.png"
            height={400}
            width={400}
            alt="About Us Image"
            className="rounded-2xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-9/12  py-2 space-x-2 space-y-4 text-right sm:text-center ">
          
          <div className="w-auto text-justify leading-snug tracking-wide  ">
            <TextGenerateEffect words={para1} className="text-justify" />
          </div>

          <div className="w-auto leading-snug tracking-wide  ">
            <TextGenerateEffect words={para4} className="text-justify" />
          </div>
        </div>
      
      </div>
      
    </div>
  );
}
