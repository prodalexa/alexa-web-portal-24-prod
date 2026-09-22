"use client";

import React from "react";
import Image from "next/image";
import RegisterDebug from "@/components/alexaverse-v3/RegisterDebug";
import ContactUs from "@/components/alexaverse-v3/ContactUs";

const RegisterDebugPage: React.FC = () => {
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
        <RegisterDebug />
        <ContactUs />
      </div>
    </main>
  );
};

export default RegisterDebugPage;
