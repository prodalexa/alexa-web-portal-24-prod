import Image from "next/image";
import React from "react";
import Technical from "./technical";
import Events from "./events";
import Creatives from "./creatives";
import Business from "./business";
import { MeteorsDemo } from "./domain-card";

type Props = {};

function Domains({}: Props) {
  const domainList = [
    {
      title: "Technical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/home/js.svg",
    },
    {
      title: "Creatives",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/home/ux.svg",
    },
    {
      title: "Events",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/home/social.svg",
    },
    {
      title: "Business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/home/business.svg",
    },
  ];

  return (
    <div className="h-full w-fill flex flex-col items-center justify-center gap-4">
      <div className="text-5xl font-bold text-center text-white flex flex-col items-center justify-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">
          Our Domains
        </h1>
        <Image
          src="hero-sep.svg"
          height={10}
          width={300}
          alt="Hero Separator"
          className="mt-5 pl-14 items-center justify-center justify-items-center place-items-center"
        />
      </div>
      <Technical />
      <Creatives />
      <Events />
      <Business />
      {domainList.map((domain, key) => (
        <MeteorsDemo key={key} domain={domain} />
      ))}
    </div>
  );
}

export default Domains;
