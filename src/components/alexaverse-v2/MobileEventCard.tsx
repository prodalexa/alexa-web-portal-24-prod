import Image from "next/image"
import { SkipBack, SkipForward } from "lucide-react"

interface EventCardProps {
  imageSrc: string
  eventName: string
  tagline: string
  description: string
  venue: string
  date: string
  time: string
  entryFee?: string
  progressValue?: number
  onRegister: () => void  // Add this missing prop
}

export default function EventCard({
  imageSrc,
  eventName,
  tagline,
  description,
  venue,
  date,
  time,
  entryFee,
  progressValue = 25,
  onRegister,
}: EventCardProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-6xl mx-auto bg-white/20 backdrop-blur-md py-4 px-6 sm:p-8 rounded-2xl text-white font-sans border-2 border-white/30">
      {/* Mobile Layout */}
      <div className="block sm:hidden space-y-6">
        {/* Event Image */}
        <div className="relative">
          <Image
            src={imageSrc}
            alt={eventName}
            width={400}
            height={400}
            className="w-full aspect-square object-cover rounded-xl"
          />
        </div>

        {/* Media Controls */}
        <div className="flex items-center justify-between bg-white/10 rounded-full p-2">
          <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>

          <div className="flex-1 mx-4">
            <button 
              onClick={onRegister}  // Add the onClick handler
              className="w-full px-6 py-3 bg-white text-black font-bold font-anton tracking-wider text-md rounded-full hover:bg-gray-100 transition-colors"
            >
              REGISTER
            </button>
          </div>

          <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Event Header */}
        <div className="space-y-2 relative pl-8">
          <h1 className="text-sm font-bold font-inter tracking-wider opacity-80 transform -rotate-90 pl-6 origin-center absolute -left-8 top-4">
            EVENT
          </h1>
          <h1 className="text-4xl font-semibold font-anton tracking-tight tracking-wide">{eventName}</h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-lg font-inter leading-tight">{tagline}</h2>

        {/* Progress Bar - You might want to make this dynamic */}
        <div className="relative">
          <div className="w-full h-3 bg-black rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progressValue}%` }}
            />
          </div>
          <div
            className="absolute top-1/2 w-6 h-6 bg-white rounded-full transform -translate-y-1/2 shadow-lg"
            style={{ left: `calc(${progressValue}% - 12px)` }}
          />
          </div>

        {/* Description Box */}
        <div className="bg-black rounded-2xl border-2 border-white/80 p-4">
          <p className="text-base font-inter leading-relaxed">{description}</p>
        </div>
        <div className="w-full h-[0.01] bg-white rounded-full border-2 border-white/80 overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `25%` }}
            />
          </div>
        {/* Event Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Venue */}
          <div className="space-y-1">
            <h3 className="text-xl font-anton tracking-wider">VENUE</h3>
            <p className="text-sm font-medium font-inter leading-tight">{venue}</p>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <h3 className="text-xl font-anton tracking-wider">DATE</h3>
            <p className="text-sm font-medium font-inter leading-tight">{date}</p>
          </div>

          {/* Time */}
          <div className="space-y-1">
            <h3 className="text-xl font-anton tracking-wider">TIME</h3>
            <p className="text-sm font-medium font-inter leading-tight">{time}</p>
          </div>

          {/* Entry Fee */}
          <div className="space-y-1">
            <h3 className="text-xl font-anton tracking-wider">ENTRY</h3>
            <p className="text-sm font-medium font-inter leading-tight">{entryFee}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:grid sm:grid-cols-14 gap-8 items-start">
        {/* Left Section - Image and Controls */}
        <div className="col-span-4 space-y-6">
          {/* Event Image */}
          <div className="relative">
            <Image
              src={imageSrc}
              alt={eventName}
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-3xl"
            />
          </div>

          {/* Media Controls */}
          <div className="flex items-center justify-between bg-white/10 rounded-full p-2">
            <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>

            <div className="flex-1 mx-4">
              <button 
                onClick={onRegister}  // Add the onClick handler here too
                className="w-full px-6 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-gray-100 transition-colors"
              >
                REGISTER
              </button>
            </div>

            <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Rest of desktop layout with updated prop names */}
        <div className="col-span-1 flex justify-center">
          <div className="w-px h-full bg-white/30"></div>
        </div>

        <div className="col-span-5 space-y-6">
          <div className="space-y-2 relative pl-8">
            <div className="text-sm font-medium tracking-wider opacity-80 transform -rotate-90 origin-center absolute -left-8 top-8">
              EVENT
            </div>
            <h1 className="text-6xl font-black tracking-tight leading-none">{eventName}</h1>
          </div>

          <h2 className="text-2xl font-medium leading-tight">{tagline}</h2>

          <div className="relative">
            <div className="w-full h-3 bg-black rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `30%` }}
              />
            </div>
            <div
              className="absolute top-1/2 w-6 h-6 bg-white rounded-full transform -translate-y-1/2 shadow-lg"
              style={{ left: `calc(30% - 12px)` }}
            />
          </div>

          <div className="bg-black rounded-2xl p-6">
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="col-span-2 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-wide">VENUE</h3>
            <p className="text-xl font-medium leading-tight">{venue}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-wide">DATE</h3>
            <p className="text-xl font-medium">{date}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-wide">TIME</h3>
            <p className="text-xl font-medium">{time}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-wide">ENTRY</h3>
            <p className="text-xl font-medium">{entryFee}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
