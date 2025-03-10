"use client";
import Image from "next/image";

const Prize = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center justify-between relative z-10 w-full mx-8 px-0 md:px-4 pointer-events-none select-none">
        <div className="w-full flex justify-center -mt-64 md:mt-0 -mb-72 md:-mb-32 pl-0 md:pl-4">
          <Image
            src="/carrynclutch/Prize_Pool.png"
            alt="22"
            height={500}
            width={500}
            className="w-screen object-contain relative"
          />
        </div>
      </div>
    </div>
  )
}

export default Prize;