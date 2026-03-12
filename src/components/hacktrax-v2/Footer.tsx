"use client"

const InstagramIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="24" height="24" rx="6.5" stroke="#00DD73" strokeWidth="2.4"/>
    <circle cx="14" cy="14" r="5.2" stroke="#00DD73" strokeWidth="2.4"/>
    <circle cx="20.5" cy="7.5" r="1.8" fill="#00DD73"/>
  </svg>
)

const EmailIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="2" y="6" width="24" height="16" rx="3" stroke="#00DD73" strokeWidth="2.4"/>
    <polyline points="2,7.5 14,17 26,7.5" stroke="#00DD73" strokeWidth="2.4"/>
  </svg>
)

export default function Footer() {
  return (
    <div
  id="footer"
  className="w-full flex flex-col items-center bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]"
>

      {/* Top line */}
      <div className="w-full max-w-[1600px] px-4">
        <div className="border-t-[5px] border-[#00DD73]" />
      </div>

      {/* Main section */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-16">

        {/* Left */}
        <div className="flex flex-col leading-tight">

          <span className="text-white font-semibold text-[42px]">
            Embrace the
          </span>

          <span className="text-[#00DD73] font-bold text-[84px]">
            FUTURE.
          </span>

        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">

          <span className="text-white font-semibold text-[18px]">
            Got any queries? Contact us at
          </span>

          <div className="flex items-center gap-4">
            <InstagramIcon/>
            <a
              href="https://www.instagram.com/alexadevsrm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[18px]"
            >
              alexadevsrm
            </a>
          </div>

          <div className="flex items-center gap-4">
            <EmailIcon/>
            <a
              href="mailto:hello@alexadevsrm.com"
              className="text-white text-[18px]"
            >
              hello@alexadevsrm.com
            </a>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="w-full max-w-[1600px] border-t border-white/10 px-4" />

      {/* Copyright */}
      <div className="w-full bg-[#150028] py-4 flex justify-center">
        <span className="text-white/60 text-[14px]">
          © 2026 Alexa Developers SRM. All rights reserved.
        </span>
      </div>

    </div>
  )
}