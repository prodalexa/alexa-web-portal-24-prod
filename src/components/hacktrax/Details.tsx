"use client";
import Image from "next/image";
import Grid from "./Grid";

const Details = () => {
  return (
    <section id="details" className="py-8 md:py-8 relative overflow-hidden">
      <div className="flex items-start justify-start md:items-center md:mb-0">
        <Image
          src="/hacktrax/StartLine.png"
          alt="Details"
          height={500}
          width={500}
          className="w-screen object-contain relative z-10"
        />
      </div>
      <div className="container mx-auto md:px-20 md:pt-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-1 flex flex-col gap-8 font-monsterrat">
            <Grid name="Venue" line1="Sir J.C. Bose" line2="Tech Park (12th floor)" className="order-1 md:order-1" />
            <Grid name="Team Size" line1="2-4" line2="Members" className="order-3 md:order-3" />
            <Grid name="Prize Pool" line1="To be announced" line2="" className="order-5 md:order-5" />
          </div>
          
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-8 md:pt-40 font-monsterrat">
            <Grid name="Duration" line1="24" line2="Hours" className="order-2 md:order-2" />
            <Grid name="Registration Cost" line1="₹150/- per team" line2="" className="order-4 md:order-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
