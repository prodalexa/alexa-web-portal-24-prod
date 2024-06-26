import PersonCard from "@/components/our-team/person-card";
import Image from "next/image";
import React from "react";

type Props = {};

const OurTeam = (props: Props) => {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
        <PersonCard person={personList[0]} />
        <PersonCard person={personList[1]} />
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
        <PersonCard person={personList[2]} />
        <PersonCard person={personList[3]} />
        <PersonCard person={personList[4]} />
        <PersonCard person={personList[5]} />
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-20">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          max-w-fit
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
        <PersonCard person={personList[6]} />
        <PersonCard person={personList[7]} />
        <PersonCard person={personList[8]} />
        <PersonCard person={personList[9]} />
        <PersonCard person={personList[10]} />
        <PersonCard person={personList[11]} />
        <PersonCard person={personList[12]} />
        <PersonCard person={personList[13]} />
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-20">
        <Image
          src="hero-sep.svg"
          height={10}
          width={10}
          max-w-fit
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
        <PersonCard person={personList[14]} />
        <PersonCard person={personList[15]} />
        <PersonCard person={personList[16]} />
        <PersonCard person={personList[17]} />
        <PersonCard person={personList[18]} />
        <PersonCard person={personList[19]} />
        <PersonCard person={personList[20]} />
        <PersonCard person={personList[21]} />
      </div>
    </div>
  );
};

const personList = [
  {
    name: "Talat Khushkhwan",
    initials: "TK",
    role: "President",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/talatkhushkhwan/",
    linkedinUrl: "https://www.linkedin.com/in/talat-khushkhwan/",
    githubUrl: "https://github.com/talatkhushkhwan",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Vice President",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Head",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Head",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Head",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Head",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Lead",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Technical Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Events Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Creatives Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
  {
    name: "Shivain Kohli",
    initials: "SK",
    role: "Business Executive",
    imageUrl: "/our-team/person.png",
    instagramUrl: "https://www.instagram.com/shivainkohli/",
    linkedinUrl: "https://www.linkedin.com/in/shivainkohli/",
    githubUrl: "https://github.com/shivainkohli",
  },
];

export default OurTeam;
