'use client'

import React, { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

const EventDetails: React.FC = () => {
  const isMobile = useIsMobile()

  return (
    <section
      id="eventDetails"
      className="w-full flex justify-center px-6 py-16 bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]"
    >
      <img
        src={isMobile ? "/hacktrax-v2/EventDetailsM.svg" : "/hacktrax-v2/EventDetails.svg"}
        alt="Event Details"
        className="w-full max-w-[1400px] h-auto object-contain"
      />
    </section>
  )
}

export default EventDetails