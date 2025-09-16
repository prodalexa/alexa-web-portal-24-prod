import HeroSection from "@/components/recruitments25/HeroSection";
import DomainSection from "@/components/recruitments25/DomainSection";
import RoadToAlexa from "@/components/recruitments25/RoadToAlexa";
import ContactUs from "@/components/recruitments25/ContactUs";

export default function Recruitments25Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-90 z-0"
        style={{
          backgroundImage: `url('/recruitments25/background.svg')`,
        }}
      />
      
      <div className="fixed inset-0 bg-black/40 z-0" />

      <div className="relative z-10">
        <HeroSection />
        <DomainSection />
        <RoadToAlexa />
        <ContactUs />
      </div>
    </main>
  );
}
