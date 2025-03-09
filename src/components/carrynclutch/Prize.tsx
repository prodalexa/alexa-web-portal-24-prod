"use client";
import Image from "next/image";

const Prize = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden -my-96 md:py-0">
      <div className="flex flex-col items-center justify-between relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pointer-events-none select-none">
        <div className="w-full flex justify-center">
          <Image
            src="/carrynclutch/Prize_Pool.png"
            alt="Prize Pool"
            height={800}
            width={1200}
            priority
            className="w-[400px] md:w-screen object-contain relative"
          />
        </div>
      </div>
    </div>
  )
}

export default Prize;