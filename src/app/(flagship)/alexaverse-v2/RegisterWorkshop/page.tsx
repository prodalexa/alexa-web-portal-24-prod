"use client";

import React from "react";
import RegisterWorkshop from "@/components/alexaverse-v2/RegisterWorkshop";
import ContactUs from "@/components/alexaverse-v2/ContactUs";

const RegisterWorkshopPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#030645] via-[#1A052A] to-[#511e5b]">
      <RegisterWorkshop />
      <ContactUs />
    </main>
  );
};

export default RegisterWorkshopPage;
