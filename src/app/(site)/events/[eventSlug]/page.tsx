import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    eventSlug: string;
  };
};

const EventView = ({ params }: Props) => {
  return (
    <div className="w-full h-full mx-20 mt-10 flex flex-col md:flex-row items-center">
      {/* left */}
      <div className="w-2/3 flex flex-col">
        <div className="px-4 py-2 w-fit rounded-full relative bg-[#2EB45A] bg-opacity-40 text-white text-sm hover:shadow-2xl hover:shadow-[#2EB45A]/[0.1] transition duration-200 border border-[#2EB45A]">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20 font-bold text-[#2EB45A]">
            Upcoming Event
          </span>
        </div>
        <div className="mt-1 px-4 py-2 w-fit rounded-full relative bg-[#E26760] bg-opacity-40 text-white text-sm hover:shadow-2xl hover:shadow-[#E26760]/[0.1] transition duration-200 border border-[#E26760]">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20 font-bold text-[#E26760]">
            Event Ended
          </span>
        </div>
        <h1 className="text-5xl mt-8 font-bold text-white">EVENT TITLE</h1>
        <p className="text-xl mt-4 md:mr-16 text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
          maxime tenetur, vel itaque iste possimus sit beatae accusantium
          tempore corporis commodi quas facilis porro neque aperiam hic fugit
          amet!
        </p>
        <div className="mt-14 mb-8">
          <p className="font-normal text-white">
            Do not miss out the chance to be part of something amazing!!
          </p>
          <p className="font-normal text-white">
            Checkout your certificates and images here
          </p>
        </div>
        <div className=" flex flex-row gap-2">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Certificates
            </div>
          </button>
          <button className="shadow-[0_0_0_3px_#000000_inset] shadow-[#2EB45A] px-6 py-2 bg-[#2EB45A] bg-opacity-20 border border-[#2EB45A] text-[#2EB45A] rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Image Gallery
          </button>
        </div>
      </div>
      {/* right */}
      <div
        className={cn(
          "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-2xl overflow-hidden relative group"
        )}
      >
        <Image
          alt="Event Image"
          className={cn("h-full w-full object-cover")}
          width="1000"
          height="1000"
          src={"/events/event.png"}
        />
      </div>
    </div>
  );
};

export default EventView;
