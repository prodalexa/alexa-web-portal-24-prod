"use client"

const typographyStyles = {
  mainTitle: {
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '110%',
    letterSpacing: '0%',
  },
  futureTitle: {
    fontSize: '64px',
    fontWeight: 800,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  contactText: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '140%',
    letterSpacing: '0%',
  },
  contactInfo: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '130%',
    letterSpacing: '0%',
  },
} as const

export default function ContactUs() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 sm:px-6 py-16">
      <div className="absolute inset-0 " />

      {/* Line 1 SVG at the top */}
      <div className="flex justify-center mb-16">
        <img 
          src="/recruitments25/Line-1.svg" 
          alt="Decorative Line"
          className="w-full max-w-[1400px] h-auto opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 max-w-6xl mx-auto lg:translate-x-20 sm:translate-x-0">
          {/* Left side - Embrace the FUTURE */}
          <div className="flex-1 text-center lg:text-left">
            <h2 
              className="font-semibold text-white leading-tight tracking-tight font-montserrat mb-4"
              style={typographyStyles.mainTitle}
            >
              Embrace the
            </h2>
            
            <h1 
              className="font-semibold leading-none tracking-tight font-montserrat relative bg-gradient-to-r from-[#00B5FF] to-[#00CDC1] bg-clip-text text-transparent"
              style={typographyStyles.futureTitle}
            >
              FUTURE
              <span className="bg-gradient-to-r from-[#00CDC1] to-[#00B5FF] bg-clip-text text-transparent">.</span>
            </h1>
          </div>

          {/* Right side - Contact Information */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p 
              className="text-white font-montserrat"
              style={typographyStyles.contactText}
            >
              Got any queries? Contact us at
            </p>

            <div className="space-y-4">
              {/* Instagram Contact */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="url(#gradient1)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient1" x1="4.7%" y1="0%" x2="95.97%" y2="100%" gradientUnits="objectBoundingBox">
                        <stop offset="4.7%" stopColor="#00B5FF" />
                        <stop offset="95.97%" stopColor="#00CDC1" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <a 
                  href="https://www.instagram.com/alexadevsrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-montserrat font-semibold hover:text-cyan-300 transition-colors duration-300"
                  style={typographyStyles.contactInfo}
                >
                  alexadevsrm
                </a>
              </div>

              {/* Email Contact */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="url(#gradient2)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="gradient2" x1="4.7%" y1="0%" x2="95.97%" y2="100%" gradientUnits="objectBoundingBox">
                        <stop offset="4.7%" stopColor="#00B5FF" />
                        <stop offset="95.97%" stopColor="#00CDC1" />
                      </linearGradient>
                    </defs>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:hello@alexadevsrm.com"
                  className="text-white font-montserrat font-semibold hover:text-cyan-300 transition-colors duration-300"
                  style={typographyStyles.contactInfo}
                >
                  hello@alexadevsrm.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative particles */}
      <div className="absolute top-1/4 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/2 right-12 w-2 h-2 bg-cyan-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse delay-2000"></div>
    </section>
  )
}