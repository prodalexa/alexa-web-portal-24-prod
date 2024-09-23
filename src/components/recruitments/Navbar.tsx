import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center h-[80px] px-5 md:px-10 py-5 bg-black w-full">
      <div className="flex items-start justify-start md:items-center mb-4 md:mb-0">
        <Image
          src="/recruitment/AlexaLogo.png"
          alt="Alexa Developers SRM"
          height={300}
          width={300}
          className="w-[250px] md:w-[300px] mr-5"
        />
      </div>
      <div className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 list-none">
          <li>
            <a
              href="#home"
              className="text-[#00bcd4] text-[16px] md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#domain"
              className="text-[#bbb] text-[16px] md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Domain
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="text-[#bbb] text-[16px] md:text-[20px] no-underline transition-colors duration-300 hover:text-[#00bcd4]"
            >
              Roadmap
            </a>
          </li>
        </ul>
        <a
          href="https://lu.ma/event/evt-EQTXfYbxktqOuHt"
          data-luma-action="checkout"
          data-luma-event-id="evt-EQTXfYbxktqOuHt"
          className="luma-checkout--button bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] text-white py-2 px-6 rounded-full text-[16px] md:text-[20px] font-bold no-underline transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00CDC1] hover:to-[#00B5FF]"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
