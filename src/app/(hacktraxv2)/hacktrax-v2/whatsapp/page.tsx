"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function WhatsAppGroupQR() {

  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {

    const paymentDone = sessionStorage.getItem("hacktraxPaymentDone")

    if (!paymentDone) {
      router.replace("/hacktrax-v2")
    } else {
      setAuthorized(true)
    }

  }, [router])

  if (!authorized) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]">

      <div className="flex flex-col items-center gap-6 max-w-[520px] w-full">

        <h1 className="text-white text-center text-[36px] md:text-[48px] font-['Saira_Stencil_One']">
          Join WhatsApp Group
        </h1>

        <div className="bg-white p-3 rounded-xl shadow-lg">
          <Image
            src="/hacktrax-v2/qrs/whatsapp-gc-qr.jpeg"
            alt="WhatsApp Group QR"
            width={320}
            height={320}
            className="rounded-lg"
          />
        </div>

        <p className="text-white text-center text-sm font-[Montserrat]">
          Join this WhatsApp group to receive all updates and announcements
          regarding HackTrax 2.0.
        </p>

      </div>

    </div>
  )
}