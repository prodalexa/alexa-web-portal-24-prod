import AboutUs from "@/components/home/about-us";
import Domains from "@/components/home/domains";
import Landing from "@/components/home/landing";
import OurEvents from "@/components/home/our-events";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Landing />
      <AboutUs />
      <Domains />
      <OurEvents />
    </div>
  );
}
