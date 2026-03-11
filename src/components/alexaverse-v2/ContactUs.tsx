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
    <div id="footer" className="w-full bg-[#1a0035] flex flex-col items-center">

      {/* Top green line */}
      <div className="w-full max-w-[1600px] px-4">
        <div className="border-t-[5px] border-[#00DD73]" />
      </div>

      {/* Main Footer Container */}
      <div className="w-full max-w-[700px] px-6 py-16">

        {/* Text block */}
        <div className="text-left">

          <div className="text-white font-semibold text-[36px] md:text-[42px]">
            Embrace the
          </div>

          <div className="text-[#00DD73] font-bold text-[64px] md:text-[84px] leading-none mb-8">
            FUTURE.
          </div>

          <div className="text-white text-[18px] font-semibold mb-6">
            Got any queries? Contact us at
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 mb-4">
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

          {/* Email */}
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
      <div className="w-full border-t border-white/10" />

      {/* Copyright */}
      <div className="w-full bg-[#150028] py-4 flex justify-center">
        <span className="text-white/60 text-[14px]">
          © 2026 Alexa Developers SRM. All rights reserved.
        </span>
      </div>

    </div>
  )
}