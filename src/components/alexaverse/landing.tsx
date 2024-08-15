import Image from "next/image";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="flex flex-col w-full mx-auto rounded-md h-[92vh] max-h-[calc(100vh-20%)] overflow-hidden justify-center items-center">
      <Image
        src="/alexaverse/logo.png"
        alt="AlexaVerse"
        height={550}
        width={550}
        // layout="fill"
        // objectFit="cover"
        objectPosition="center"
        className="-mt-32 -mr-14"
      />
      <Image
        src="/alexaverse/title.png"
        alt="AlexaVerse"
        height={450}
        width={450}
        // layout="fill"
        // objectFit="cover"
        objectPosition="center"
        className="-mt-8 px-5"
      />
    </div>
  );
};

export default Landing;
