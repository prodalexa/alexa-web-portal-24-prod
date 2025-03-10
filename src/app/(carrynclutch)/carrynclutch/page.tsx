import Navbar from "@/components/carrynclutch/Navbar";
import Hero from "@/components/carrynclutch/Hero";
import Details from "@/components/carrynclutch/Details";
import Prize from "@/components/carrynclutch/Prize";
import Rules from "@/components/carrynclutch/Rules";
import Eligibility from "@/components/carrynclutch/Eligibility";
import TeamDetails from "@/components/carrynclutch/TeamDetails";
import Footer from "@/components/carrynclutch/Footer";

export default function CarrynClutch() {
  return (
    <div className="h-full w-screen">
      <div className="bg-[url(/carrynclutch/Hero.png)] bg-cover bg-[center_top] md:bg-center bg-no-repeat min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Details />
      <Prize />
      <Rules />
      <Eligibility />
      <TeamDetails />
      <Footer />
    </div>
  );
}
