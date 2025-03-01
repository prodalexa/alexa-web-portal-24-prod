import Navbar from "@/components/hackathon/Navbar";
import Banner from "@/components/hackathon/Banner";
import About from "@/components/hackathon/About";
import Prizes from "@/components/hackathon/Prizes";
import Timeline from "@/components/hackathon/Timeline";
import Footer from "@/components/hackathon/Footer";

export default function Hackathon() {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <Banner />
      <About />
      <Prizes />
      <Timeline />
      <Footer />
    </div>
  )
}