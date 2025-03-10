"use client"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full h-[500px] -mt-48 md:mt-32 relative overflow-hidden font-NCS">
      <div className="absolute -inset-1">
        <Image
          src="/carrynclutch/Contact_Us.png"
          alt="Contact Us"
          fill
          className="pt-72 md:pt-0 x-20"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-start md:items-end pb-10 px-6 md:px-10 z-10 pt-72 md:pt-[400px]">
        <div className="w-full flex flex-row gap-x-4 justify-between md:block">
          <div className="text-white mt-28 md:mt-0 text-xs md:text-5xl font-bold">
            <Link href="mailto:alexadevsrm@gmail.com">
              <p className="mb-2">alexadevsrm@gmail.com</p>
            </Link>
            <Link href="https://www.alexadevsrm.org">
              <p>
                www.<span className="text-[#4be3ff]">alexadevsrm</span>.org
              </p>
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-20 md:mt-0 md:hidden">
            <Link
              href="https://www.facebook.com/alexadevsrm">
              <div className="flex items-center gap-2">
                <Image
                  src="/carrynclutch/Facebook.png"
                  alt="Facebook"
                  height={500}
                  width={500}
                  className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
                />
                <span className="text-white text-xs ml-2 md:ml-0 md:text-3xl font-bold">alexadevsrm</span>
              </div>
            </Link>
            <Link
              href="https://instagram.com/alexadevsrm">
              <div className="flex items-center gap-4">
                <Image
                  src="/carrynclutch/Instagram.png"
                  alt="Instagram"
                  height={500}
                  width={500}
                  className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
                />
                <span className="text-white text-xs md:text-3xl font-bold">alexadevsrm</span>
              </div>
            </Link>
            <Link
              href="https://x.com/alexadevsrm">
              <div className="flex items-center gap-4">
                <Image
                  src="/carrynclutch/Twitter.png"
                  alt="Twitter"
                  height={500}
                  width={500}
                  className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
                />
                <span className="text-white text-xs md:text-3xl font-bold">alexadevsrm</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col mr-8 gap-4 mt-8 md:mt-0">
          <Link
            href="https://www.facebook.com/alexadevsrm">
            <div className="flex items-center gap-4">
              <Image
                src="/carrynclutch/Facebook.png"
                alt="Facebook"
                height={500}
                width={500}
                className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
              />
              <span className="text-white text-xs md:text-3xl font-bold">alexadevsrm</span>
            </div>
          </Link>
          <Link
            href="https://instagram.com/alexadevsrm" >
            <div className="flex items-center gap-4">
              <Image
                src="/carrynclutch/Instagram.png"
                alt="Instagram"
                height={500}
                width={500}
                className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
              />
              <span className="text-white text-sm md:text-3xl font-bold">alexadevsrm</span>
            </div>
          </Link>
          <Link
            href="https://x.com/alexadevsrm"
            className="cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/carrynclutch/Twitter.png"
                alt="Twitter"
                height={500}
                width={500}
                className="w-[30px] md:w-[38px] pl-1 object-contain relative z-10"
              />
              <span className="text-white text-sm md:text-3xl font-bold">alexadevsrm</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer