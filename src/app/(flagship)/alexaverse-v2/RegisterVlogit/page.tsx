"use client";

import React from "react";
import RegisterVlogit from "@/components/alexaverse-v2/RegisterVlogit";
import ContactUs from "@/components/alexaverse-v2/ContactUs";

const RegisterVlogitPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#030645] via-[#1A052A] to-[#511e5b]">
      <RegisterVlogit />
      <ContactUs />
    </main>
  );
};

export default RegisterVlogitPage;
