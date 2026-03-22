"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const qrCodes = [
  "/hacktrax-v2/qrs/ankit.jpeg",
  "/hacktrax-v2/qrs/sneha.jpeg",
  "/hacktrax-v2/qrs/dharal.jpeg",
  "/hacktrax-v2/qrs/aastik.jpeg",
]

export default function PaymentPage() {

  const [qr, setQr] = useState<string>("")
  const [txnId, setTxnId] = useState("")
  const [teamData, setTeamData] = useState<any>(null)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  const router = useRouter()

  /* load team data */
  useEffect(() => {
    setMounted(true)
    const random = qrCodes[Math.floor(Math.random() * qrCodes.length)]
    setQr(random)

    const stored = sessionStorage.getItem("hacktraxTeamData")

    if (stored) {
      setTeamData(JSON.parse(stored))
    } else {
      router.replace("/hacktrax-v2")
    }
  }, [router])


  const handleSubmit = async () => {

    if (loading) return

    if (!txnId.trim()) {
      setMessage("Transaction ID is required")
      return
    }

    if (!teamData) {
      setMessage("Something went wrong. Please refill the form.")
      return
    }

    try {

      setLoading(true)
      setMessage("")

      const payload = {
        ...teamData,
        transaction_id: txnId.trim()
      }

      console.log("Submitting payload:", payload)

      const res = await fetch(
        "https://acktrax--gowtham6409728-qwsx9lla.leapcell.dev/v1/teams",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      )

      const data = await res.json()

      console.log("Backend response:", data)

      if (res.ok) {

        setMessage("Registration successful! Loading WhatsApp group QR...")

        sessionStorage.setItem("hacktraxPaymentDone", "true")

        sessionStorage.removeItem("hacktraxTeamData")
        sessionStorage.removeItem("hacktraxFormData")
        

        setTimeout(() => {
          router.push("/hacktrax-v2/whatsapp")
        }, 2000)

      } else {

        let backendMessage = "Submission failed. Try again."

        if (Array.isArray(data?.detail)) {
          backendMessage = data.detail.map((e: any) => e.msg).join(", ")
        }
        else if (typeof data?.detail === "string") {
          backendMessage = data.detail
        }
        else if (data?.message) {
          backendMessage = data.message
        }

        setMessage(backendMessage)

      }

    } catch (err) {

      console.error(err)
      setMessage("Server error. Please try again.")

    } finally {

      setLoading(false)

    }

  }

  if (!mounted || !teamData) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]">

      <div className="flex flex-col items-center gap-6 max-w-[420px] w-full">

        <h1 className="text-white text-[36px] md:text-[48px] font-['Saira_Stencil_One']">
          Scan & Pay
        </h1>

        {qr && (
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <Image
              src={qr}
              alt="Payment QR"
              width={280}
              height={280}
              priority
              className="rounded-lg"
            />
          </div>
        )}

        <p className="text-white text-center font-[Montserrat] text-sm">
          Scan the QR code using GPay / UPI and complete the payment of ₹150.
          After paying, enter your UPI transaction ID below to confirm your registration.
        </p>

        {/* Transaction ID input */}
        <input
          type="text"
          inputMode="numeric"
          maxLength={40}
          placeholder="Enter UPI Transaction ID"
          value={txnId}
          onChange={(e) => {
            const val = e.target.value
            if (val !== "" && !/^\d+$/.test(val)) {
              setMessage("Only numeric values are allowed")
            } else {
              setTxnId(val)
              setMessage("")
            }
          }}
          className="w-full px-4 py-2 rounded-lg border outline-none text-white font-[Montserrat]"
        />


        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#00DD73] text-white font-bold px-8 py-3 rounded-lg shadow-md hover:-translate-y-[2px] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Payment"}
        </button>

        {message && (
          <p className="text-white text-sm font-[Montserrat] text-center">
            {message}
          </p>
        )}

      </div>

    </div>
  )
}