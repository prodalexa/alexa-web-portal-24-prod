"use client";

import React from "react";
import Image from "next/image";
import IdeathonPayment from "@/components/alexaverse-v3/IdeathonPayment";
import ContactUs from "@/components/alexaverse-v3/ContactUs";

const IdeathonPaymentPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/alexaverse3.0/form-bg.svg"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10">
        <IdeathonPayment />
        <ContactUs />
      </div>
    </main>
  );
};

export default IdeathonPaymentPage;
