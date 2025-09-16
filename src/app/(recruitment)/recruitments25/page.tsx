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

      <div className="fixed inset-0 opacity-20 z-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const left = (i * 7.3) % 100
          const top = (i * 11.7) % 100
          const delay = (i * 0.1) % 3
          const duration = 2 + (i % 3)
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10">
        <HeroSection />
        <DomainSection />
        <RoadToAlexa />
        <ContactUs />
      </div>
    </main>
  );
}
