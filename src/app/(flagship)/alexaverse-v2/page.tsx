"use client";

import HeroSection from "@/components/alexaverse-v2/HeroSection";
import OurEvents from "@/components/alexaverse-v2/OurEvents";
// import Sponsers from "@/components/alexaverse-v2/Sponsers"
import ContactUs from "@/components/alexaverse-v2/ContactUs"

export default function AlexaVersePage() {
  return (
    <main>
      <HeroSection />
      <div className="bg-gradient-to-br from-[#030645] via-[#1A052A] to-[#511e5b]">
        <OurEvents />
        {/* <Sponsers /> */}
        <ContactUs />
      </div>
    </main>
  );
}
