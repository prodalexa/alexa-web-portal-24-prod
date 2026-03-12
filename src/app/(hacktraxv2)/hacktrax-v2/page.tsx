import HeroSection from "@/components/hacktrax-v2/HeroSection";
import EventDetails from "@/components/hacktrax-v2/EventDetails"
import Form from "@/components/hacktrax-v2/form";
import Footer from "@/components/hacktrax-v2/Footer";
// import Details from "@/components/hacktrax/Details";
// import Footer from "@/components/hacktrax/Footer";
// import TeamDetails from "@/components/hacktrax/TeamDetails";
// import ComingSoon from "@/components/hacktrax/ComingSoon";

export default function Hackathon() {
  return (
    <div className="h-full w-screen">
      <HeroSection />
      
      <EventDetails />
      <Form />
      <Footer />
      {/* <Banner />
      <HeroPage />
      <Tracks />
      <Details />
      <TeamDetails />
      {/* <ComingSoon /> */}
      {/* <Footer /> */}
    </div>
  )
}