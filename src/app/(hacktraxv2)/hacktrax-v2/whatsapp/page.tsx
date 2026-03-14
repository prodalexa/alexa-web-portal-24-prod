"use client"

import Image from "next/image"

export default function WhatsAppGroupQR() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]">

      <div className="flex flex-col items-center gap-6 max-w-[520px] w-full">

        <h1 className="text-white text-center text-[30px] sm:text-[40px] md:text-[48px] font-['Saira_Stencil_One'] whitespace-nowrap sm:whitespace-normal">
          Join WhatsApp Group
        </h1>

        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-lg">
          <Image
            src="/hacktrax-v2/qrs/whatsapp-gc-qr.jpeg"
            alt="WhatsApp Group QR"
            width={320}
            height={320}
            className="rounded-lg w-[240px] sm:w-[280px] md:w-[320px] h-auto"
          />
        </div>

        <p className="text-white text-center text-sm sm:text-base font-[Montserrat] leading-relaxed px-2">
          After completing the payment, join this WhatsApp group to receive
          all updates, announcements, and important information regarding
          HackTrax 2.0.
        </p>

      </div>

    </div>
  )
}