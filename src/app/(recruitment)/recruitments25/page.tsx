"use client";

import Navbar from "@/components/recruitments25/Navbar";
import HeroSection from "@/components/recruitments25/HeroSection";
import DomainSection from "@/components/recruitments25/DomainSection";
import RoadToAlexa from "@/components/recruitments25/RoadToAlexa";
import ContactUs from "@/components/recruitments25/ContactUs";
import StarsBackground from "@/components/recruitments25/StarsBackground";

export default function Recruitments25Page() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Black overlay */}
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* Stars over the background but under content */}
      <div className="fixed inset-0 z-5">
        <StarsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <DomainSection />
        <RoadToAlexa />
        <ContactUs />
      </div>
    </main>
  );
}
