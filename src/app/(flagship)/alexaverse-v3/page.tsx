"use client";

import HeroSection from "@/components/alexaverse-v3/HeroSection";
import OurSponsors from "@/components/alexaverse-v3/OurSponsors";
import ContactUs from "@/components/alexaverse-v3/ContactUs";

export default function AlexaVerseV3Page() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <OurSponsors />
      <ContactUs />
    </main>
  );
}
