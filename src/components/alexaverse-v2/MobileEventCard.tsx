import React from "react";

interface EventCardProps {
  imageSrc: string;
  eventName: string;
  tagline: string;
  description: string;
  venue: string;
  date: string;
  startTime: string;
  endTime: string;
  entryFee: string;
  registerLink: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  eventName,
  tagline,
  description,
  venue,
  date,
  startTime,
  endTime,
  entryFee,
  registerLink,
}) => {
  return (
    <div className="bg-purple-900 text-white rounded-xl p-6 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
      {/* Left Section - Image & Register Button */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={eventName}
          className="rounded-lg w-full h-auto object-cover"
        />
        <a
          href={registerLink}
          className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition"
        >
          Register
        </a>
      </div>

      {/* Right Section - Event Details */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 className="text-3xl font-extrabold">{eventName}</h2>
          <p className="mt-2 text-lg italic">{tagline}</p>
          <p className="mt-4 bg-black text-white p-4 rounded-lg">
            {description}
          </p>
        </div>
        <div className="mt-6 text-sm space-y-2">
          <p>
            <span className="font-bold">Venue:</span> {venue}
          </p>
          <p>
            <span className="font-bold">Date:</span> {date}
          </p>
          <p>
            <span className="font-bold">Time:</span> {startTime} - {endTime}
          </p>
          <p>
            <span className="font-bold">Entry:</span> {entryFee}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
