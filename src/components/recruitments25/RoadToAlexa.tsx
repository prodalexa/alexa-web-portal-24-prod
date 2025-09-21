"use client"

import { useMemo } from "react"

const timelineSteps = [
  {
    id: 1,
    title: "Registration",
    description: "Fill the form below by entering required details to get your journey started!",
    icon: "1.svg",
  },
  {
    id: 2,
    title: "Email",
    description:
      "Keep yourself up to date by checking registered email address on the regular. (Sneak a peek in the spam folder too!)",
    icon: "2.svg",
  },
  {
    id: 3,
    title: "Tests/Tasks",
    description:
      "Let the fire in you be kindled. Showcase your talent through tests and tasks to make your mark among the competitors.",
    icon: "3.svg",
  },
  {
    id: 4,
    title: "Interviews",
    description: "You are just one step away. Keep calm and get ready for a small casual interview.",
    icon: "4.svg",
  },
  {
    id: 5,
    title: "Welcome",
    description:
      "Look at that! You are now officially a part of the Alexa Developers SRM family. Much surprises await on the other side!",
    icon: "5.svg",
  },
]

const desktopPositions = [
  { x: 220, y: -240 },
  { x: 220, y: -120 },
  { x: 220, y: 0 },
  { x: 220, y: 120 },
  { x: 220, y: 240 },
]

const MOBILE_POSITIONING = {
  START_PERCENT: 15,
  END_PERCENT: 85,
} as const

const getIconSize = (title: string, isMobile: boolean) => {
  const isTestsTask = title === "Tests/Tasks"
  
  if (isMobile) {
    return {
      containerSize: isTestsTask ? 72 : 64,
      imageSize: isTestsTask ? 64 : 56,
    }
  }
  
  return {
    containerSize: isTestsTask ? 88 : 80,
    imageSize: isTestsTask ? 80 : 72,
  }
}

const typographyStyles = {
  title: {
    fontSize: '32px',
    fontWeight: 800,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  mobileStepTitle: {
    fontSize: '16px',
    fontWeight: 800,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  mobileStepDescription: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  desktopStepTitle: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
  desktopStepDescription: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '0%',
  },
} as const

export default function RoadToAlexa() {
  const mobilePositions = useMemo(() => {
    const { START_PERCENT, END_PERCENT } = MOBILE_POSITIONING
    const totalSteps = timelineSteps.length
    const availablePercent = END_PERCENT - START_PERCENT
    const stepPercent = availablePercent / (totalSteps - 1)
    
    return timelineSteps.map((_, index) => 
      START_PERCENT + (index * stepPercent)
    )
  }, [])

  return (
    <div id="roadmap" className="min-h-screen relative overflow-hidden px-6 py-12">
      <div className="lg:hidden relative z-10">
        <h1 
          className="text-4xl font-extrabold text-center mb-16 text-balance relative z-20 leading-none tracking-tight font-montserrat-alternates"
          style={typographyStyles.title}
        >
          <span className="text-white">Road to </span>
          <span className="text-cyan-400 font-extrabold">Alexa</span>
        </h1>

        <div 
          className="relative max-w-md mx-auto bg-slate-900/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-2xl" 
          style={{ backdropFilter: 'blur(40px)' }}
        >
          {timelineSteps.map((step, index) => {
            const { containerSize, imageSize } = getIconSize(step.title, true)
            const branchPercent = mobilePositions[index]

            return (
              <div 
                key={`branch-${step.id}`} 
                className="absolute left-2 z-10" 
                style={{ top: `${branchPercent}%` }}
              >
                <svg 
                  width="80" 
                  height="20" 
                  viewBox="0 0 80 20" 
                  className="opacity-80"
                  style={{ position: 'relative', zIndex: 15 }}
                >
                  <circle 
                    cx="1" 
                    cy="10" 
                    r="4" 
                    fill="rgba(255, 255, 255, 0.9)"
                    stroke="rgba(6, 182, 212, 0.6)"
                    strokeWidth="1"
                  />
                  <line 
                    x1="5" 
                    y1="10" 
                    x2="60" 
                    y2="10" 
                    stroke="rgba(255, 255, 255, 0.8)" 
                    strokeWidth="2"
                  />
                </svg>
                
                <div className="absolute left-16 top-1/2 -translate-y-1/2 z-10">
                  <div 
                    className="flex items-center justify-center bg-transparent"
                    style={{ 
                      width: `${containerSize}px`, 
                      height: `${containerSize}px` 
                    }}
                  >
                    <img 
                      src={`/recruitments25/${step.icon}`} 
                      alt={step.title} 
                      className="drop-shadow-lg transition-all duration-300 hover:scale-110" 
                      style={{ 
                        width: `${imageSize}px`, 
                        height: `${imageSize}px`, 
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}

          <div className="relative z-10 ml-4 mt-16">
            {timelineSteps.map((step) => (
              <div key={`text-${step.id}`} className="relative mb-20 last:mb-8">
                <div className="ml-24 pr-4">
                  <h3 
                    className="text-lg font-extrabold mb-2 drop-shadow-sm leading-none tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-montserrat-alternates"
                    style={typographyStyles.mobileStepTitle}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-white/90 leading-tight drop-shadow-sm font-montserrat"
                    style={typographyStyles.mobileStepDescription}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-2 top-6 bottom-6 w-0.5 z-0 rounded-full bg-gradient-to-b from-transparent via-white/80 to-transparent" />
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center min-h-screen p-8 relative z-10">
        <h1 
          className="text-6xl font-extrabold text-center mb-12 text-balance relative z-20 leading-none tracking-tight font-montserrat-alternates"
          style={typographyStyles.title}
        >
          <span className="text-white">Road to </span>
          <span className="text-cyan-400 font-extrabold">Alexa</span>
        </h1>

        <div 
          className="relative w-full max-w-7xl h-[650px] bg-slate-900/10 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl mx-auto" 
          style={{ backdropFilter: 'blur(40px)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative" style={{ transform: "scale(0.5) translateX(-400px)" }}>
              <img
                src="/recruitments25/road-to-alexa-design.svg"
                alt="Road to Alexa Design Desktop"
                className="w-full h-auto"
              />
            </div>

            {timelineSteps.map((step, index) => {
              const { containerSize, imageSize } = getIconSize(step.title, false)
              const position = desktopPositions[index]

              return (
                <div
                  key={step.id}
                  className="absolute flex items-center gap-6 z-20"
                  style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                >
                  <div 
                    className="flex items-center justify-center bg-transparent"
                    style={{ 
                      width: `${containerSize}px`, 
                      height: `${containerSize}px` 
                    }}
                  >
                    <img 
                      src={`/recruitments25/${step.icon}`} 
                      alt={step.title} 
                      className="drop-shadow-lg" 
                      style={{ 
                        width: `${imageSize}px`, 
                        height: `${imageSize}px`, 
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <div className="max-w-xs text-left">
                    <h3 
                      className="text-2xl font-extrabold text-cyan-400 mb-2 drop-shadow-sm leading-none tracking-tight font-montserrat-alternates"
                      style={typographyStyles.desktopStepTitle}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-white/90 leading-tight drop-shadow-sm font-montserrat"
                      style={typographyStyles.desktopStepDescription}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
