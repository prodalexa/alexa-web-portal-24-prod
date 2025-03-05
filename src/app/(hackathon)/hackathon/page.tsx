import Navbar from "@/components/hackathon/Navbar";
import Banner from "@/components/hackathon/Banner";
import About from "@/components/hackathon/About";
import Tracks from "@/components/hackathon/Tracks";
import Details from "@/components/hackathon/Details";
import Footer from "@/components/hackathon/Footer";
import TeamDetails from "@/components/hackathon/TeamDetails";

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