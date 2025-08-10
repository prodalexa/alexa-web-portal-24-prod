"use client";

import React from "react";
import RegisterHangman from "@/components/alexaverse-v2/RegisterHangman";
import ContactUs from "@/components/alexaverse-v2/ContactUs";

const RegisterHangmanPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#030645] via-[#1A052A] to-[#511e5b]">
      <RegisterHangman />
      <ContactUs />
    </main>
  );
};

export default RegisterHangmanPage;
