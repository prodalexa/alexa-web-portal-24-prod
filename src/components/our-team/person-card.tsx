import React from "react";
import AvatarImage from "./avatar";
import Image from "next/image";

type Props = {
  person: {
    name: string;
    initials: string;
    role: string;
    imageUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    githubUrl: string;
  };
};

const PersonCard = ({ person }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <AvatarImage
        name={person.name}
        initials={person.initials}
        url={person.imageUrl}
      />
      <h2 className="font-bold text-white md:text-lg">{person.name}</h2>
      <h2 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent md:text-lg">
        {person.role}
      </h2>
      <div className="flex flex-row gap-3 md:gap-5 mt-2">
        <a href={person.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/our-team/instagram.svg"
            alt="Instagram"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </a>
        <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/our-team/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </a>
        <a href={person.githubUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/our-team/github.svg"
            alt="Github"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default PersonCard;
