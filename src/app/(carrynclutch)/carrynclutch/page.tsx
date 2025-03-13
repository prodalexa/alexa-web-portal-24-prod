"use client";
import Navbar from "@/components/carrynclutch/Navbar";
import Hero from "@/components/carrynclutch/Hero";
import Details from "@/components/carrynclutch/Details";
import Prize from "@/components/carrynclutch/Prize";
import Rules from "@/components/carrynclutch/Rules";
import Eligibility from "@/components/carrynclutch/Eligibility";
import TeamDetails from "@/components/carrynclutch/TeamDetails";
import Footer from "@/components/carrynclutch/Footer";
import ComingSoon from "@/components/carrynclutch/ComingSoon";

import { useState } from "react";
import { EligibilityType } from "@/components/carrynclutch/Eligibility";

export default function CarrynClutch() {
  const [eligibilityType, setEligibilityType] = useState<EligibilityType>("SRM");

  return (
    <div className="h-full w-screen">
      <div className="bg-[url(/carrynclutch/Hero.png)] bg-cover bg-[75%_95%] md:bg-center bg-no-repeat min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Details />
      <Prize />
      <Rules />
      <Eligibility onEligibilityChange={setEligibilityType} />
      {/* <TeamDetails eligibilityType={eligibilityType} /> */}
      {/* <ComingSoon /> */}
      <Footer />
    </div>
  );
}
