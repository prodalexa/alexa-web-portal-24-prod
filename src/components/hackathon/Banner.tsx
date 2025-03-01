"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-24">
        <Image
          src="/hacktrax/HACKTRAX_Orange.png"
          alt="Alexa Developers SRM"
          height={200}
          width={200}
          className="w-[180px] md:w-[720px]"
        />
      </div>
      <div className="flex justify-center items-center mt-16">
        <button className="bg-hack_button rounded-full flex justify-center items-center">
          <Image
            src="/hacktrax/REGISTER.png"
            alt="Alexa Developers SRM"
            height={200}
            width={200}
            className="w-[180px] md:w-[180px] px-8 py-6"
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
