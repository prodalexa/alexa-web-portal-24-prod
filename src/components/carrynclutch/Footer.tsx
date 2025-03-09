"use client"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <div className="w-full h-[500px] mt-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute -inset-1">
        <Image
          src="/carrynclutch/Contact_Us.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contact information container */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-start md:items-center pt-24 md:pt-48 px-6 md:px-10 z-10">
        {/* Left side - Email and website */}
        <div className="text-white text-2xl md:text-5xl font-bold font-monsterrat">
          <p className="mb-2">alexadevsrm@gmail.com</p>
          <p>
            www.<span className="text-[#4be3ff]">alexadevsrm</span>.org
          </p>
        </div>

        {/* Right side - Social media */}
        <div className="flex flex-col gap-4 mt-8 md:mt-0 font-monsterrat">
          <div className="flex items-center gap-4">
            <Image
              src="/carrynclutch/Facebook.png"
              alt="Facebook"
              height={500}
              width={500}
              className="w-[20px] md:w-[38px] pl-1 object-contain relative z-10"
            />
            <span className="text-white text-2xl md:text-3xl font-bold">alexadevsrm</span>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/carrynclutch/Instagram.png"
              alt="Facebook"
              height={500}
              width={500}
              className="w-[20px] md:w-[38px] pl-1 object-contain relative z-10"
            />
            <span className="text-white text-2xl md:text-3xl font-bold">alexadevsrm</span>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/carrynclutch/Twitter.png"
              alt="Facebook"
              height={500}
              width={500}
              className="w-[20px] md:w-[38px] pl-1 object-contain relative z-10"
            />
            <span className="text-white text-2xl md:text-3xl font-bold">alexadevsrm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

