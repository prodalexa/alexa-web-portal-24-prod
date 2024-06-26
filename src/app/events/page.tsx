import EventCard from "@/components/events/event-card";
import SlideShow from "@/components/events/slide-show";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import React from "react";

type Props = {};

function Events({}: Props) {
  return (
    <div className="flex flex-col gap-4 p-8 md:p-16 lg:px-20">
      <div className="text-5xl font-bold text-center text-white flex flex-col items-start justify-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">
          Our Events
        </h1>
        <Image
          src="hero-sep.svg"
          height={10}
          width={300}
          alt="Hero Separator"
          className="mt-5 pl-14 items-center justify-center justify-items-center place-items-center"
        />
      </div>
      <h2 className="text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event, idx) => (
          <EventCard
            key={idx}
            event={event}
          />
        ))}
      </div>
      <div className="w-full flex mt-10 mb-5 text-white justify-center font-bold text-5xl md:text-7xl items-center">
        <span>Our Gallary</span>
        <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
          .
        </span>
      </div>
      <SlideShow />
    </div>
  );
}

const eventList = [
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
  {
    title: "Make things float in air",
    slug: "make-things-float-in-air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/events/event.png",
  },
]

export default Events;
