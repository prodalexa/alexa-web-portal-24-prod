"use client";

import React from "react";
import Image from "next/image";
import RegisterIdeathon from "@/components/alexaverse-v3/RegisterIdeathon";
import ContactUs from "@/components/alexaverse-v3/ContactUs";

const RegisterIdeathonPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/alexaverse3.0/form-bg.svg"
          alt=""
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      <div className="relative z-10">
        <RegisterIdeathon />
        <ContactUs />
      </div>
    </main>
  );
};

export default RegisterIdeathonPage;
