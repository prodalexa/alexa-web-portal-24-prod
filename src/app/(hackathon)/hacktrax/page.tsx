import Navbar from "@/components/hacktrax/Navbar";
import Banner from "@/components/hacktrax/Banner";
import About from "@/components/hacktrax/About";
import Tracks from "@/components/hacktrax/Tracks";
import Details from "@/components/hacktrax/Details";
import Footer from "@/components/hacktrax/Footer";
import TeamDetails from "@/components/hacktrax/TeamDetails";

export default function Hackathon() {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <Banner />
      <About />
      <Tracks />
      <Details />
      <TeamDetails />
      <Footer />
    </div>
  )
}