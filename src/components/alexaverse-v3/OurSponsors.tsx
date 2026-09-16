import React from "react";
import Image from "next/image";

const OurSponsors = () => {
  return (
    <section id="sponsors" className="w-full bg-black py-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      {/* Heading */}
      <div className="w-full max-w-[600px] mb-12 flex justify-center">
        <Image
          src="/alexaverse3.0/oursponser.svg"
          alt="Our Sponsors"
          width={500}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Sponsors Design */}
      <div className="w-full max-w-[800px] flex justify-center relative">
        {/* Central Eclipse Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          style={{
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(251, 216, 165, 0.4) 0%, rgba(251, 216, 165, 0.15) 50%, transparent 80%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
        <Image
          src="/alexaverse3.0/our-sponsers-design.svg"
          alt="Sponsors Design"
          width={800}
          height={400}
          className="w-full h-auto object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default OurSponsors;
