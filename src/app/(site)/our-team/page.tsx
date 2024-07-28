import PersonCard from "@/components/our-team/person-card";
import {
  getExecutiveData,
  getHeadData,
  getLeadData,
  getPresidentData,
  getTeamData,
  getVicePresidentData,
} from "@/sanity/data/team-data";
import { Member } from "@/sanity/schemas/member-schema";
import Image from "next/image";
import React from "react";

type Props = {};

const OurTeam = async (props: Props) => {
  const teamData = await getTeamData();
  const presidentData = await getPresidentData();
  const vicePresidentData = await getVicePresidentData();
  const headData = await getHeadData();
  const leadData = await getLeadData();
  const executiveData = await getExecutiveData();
  return (
    <div className="flex flex-col gap-4 p-8 md:p-16 lg:px-20 w-full">
      <div className="text-5xl font-bold text-center text-white flex flex-col items-start justify-center">
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">
          Our Team
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
        Our team at the SRM Alexa Developer Club includes passionate members,
        dedicated executives, and a visionary head, all working together to
        foster innovation, learning, and community engagement through dynamic
        events and activities.
      </h2>
      <div className="flex flex-row w-full items-center justify-center mt-10">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
        <div className="w-full text-2xl md:text-4xl font-bold text-white max-w-fit">
          <span>The Core</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
      </div>
      <div className="flex flex-row justify-around items-center">
        <PersonCard person={presidentData[0]} />
        <PersonCard person={vicePresidentData[0]} />
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-20">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
        <div className="w-full text-2xl md:text-4xl font-bold text-white max-w-fit">
          <span>The Heads</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 justify-around items-center">
        {headData.map((person: Member, idx: number) => (
          <PersonCard key={idx} person={person} />
        ))}
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-20">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
        <div className="w-full text-2xl md:text-4xl font-bold text-white max-w-fit">
          <span>The Leads</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 justify-around items-center">
        {leadData.map((person: Member, idx: number) => (
          <PersonCard key={idx} person={person} />
        ))}
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-20">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
        <div className="w-full text-2xl md:text-4xl font-bold text-white max-w-fit">
          <span>The Executives</span>
          <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">
            .
          </span>
        </div>
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          alt="Hero Separator"
          className="mx-4 min-w-[40%] hidden md:flex"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 justify-around items-center">
        {executiveData.map((person: Member, idx: number) => (
          <PersonCard key={idx} person={person} />
        ))}
      </div>
    </div>
  );
};

const personList = [
  {
    name: "Talat Khushkhwan",
    initials: "TK",
    role: "President",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/talatkhushkhwan/",
    linkedin: "https://www.linkedin.com/in/talat-khushkhwan/",
    github: "https://github.com/talatkhushkhwan",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Vice President",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Head",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Head",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Head",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Head",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Lead",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Executive",
    photo: "/our-team/person.png",
    instagram: "https://www.instagram.com/shivainkohli/",
    linkedin: "https://www.linkedin.com/in/shivainkohli/",
    github: "https://github.com/shivainkohli",
  },
];

export default OurTeam;
