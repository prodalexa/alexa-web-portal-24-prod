"use client";

import React from "react";
import RegisterDebug from "@/components/alexaverse-v2/RegisterDebug";
import ContactUs from "@/components/alexaverse-v2/ContactUs";

const RegisterDebugPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#030645] via-[#1A052A] to-[#511e5b]">
      <RegisterDebug />
      <ContactUs />
    </main>
  );
};

export default RegisterDebugPage;
