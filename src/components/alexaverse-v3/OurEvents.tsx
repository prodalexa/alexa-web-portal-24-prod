"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EventCard from "./MobileEventCard";

const OurEvents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [eventName, setEventName] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = (message: string, event: string) => {
    setModalMessage(message);
    setEventName(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const handleRegister = (name: string) => {
    openModal(`Registration for ${name} will open soon!`, name);
  };

  const events = [
    {
      imageSrc: "/alexaverse2.0/ideathon-img.svg",
      eventName: "IDEATHON",
      tagline: "Ideate, Innovate, Impress: Let your creativity convince us!",
      description:
        "Collaborate, create, and compete in this Ideathon to win the prize! Present your boldest solutions and impress the judges for a shot at victory.",
      venue: "TP Gaurakhan Auditorium",
      date: "12th October 2026",
      time: "8:00 am to 5:00 pm",
      entryFee: "250.0 Rs",
      progressValue: 0,
      registrationUrl: "/alexaverse-v3/RegisterDebug",
    },
    {
      imageSrc: "/alexaverse2.0/workshop-img.svg",
      eventName: "WORKSHOP",
      tagline: "Wisdom and Wonder: Tune in to learn from the best!",
      description:
        "An immersive journey led by two distinct speakers, delivering the most valuable insights from the ever-evolving realm of Generative AI.",
      venue: "TP Gaurakhan Auditorium",
      date: "12th October 2026",
      time: "9:00 am to 3:00 pm",
      entryFee: "250.0 Rs",
      progressValue: 25,
      registrationUrl: "/alexaverse-v3/RegisterWorkshop",
    },
    {
      imageSrc: "/alexaverse2.0/debug-img.svg",
      eventName: "DEBUG THE CAMPUS",
      tagline: "Discover and Decrypt: Classic treasure hunt with a modern flavor!",
      description:
        "Find the numerous QR codes hidden around and debug the puzzles with your teammates. Be quick because the time is ticking!",
      venue: "TP Gaurakhan Auditorium",
      date: "12th October 2026",
      time: "8:00 am to 5:00 pm",
      entryFee: "250.0 Rs",
      progressValue: 50,
      registrationUrl: "/alexaverse-v3/RegisterDebug",
    },
    {
      imageSrc: "/alexaverse2.0/vlogit-img.svg",
      eventName: "REEL IT",
      tagline: "Record and Roll: Capture the Essence of AlexaVerse!",
      description:
        "Eager to flex your filmmaking skills? Capture the chaos, edit it clean, and deliver a masterpiece that makes us say Absolute Cinema to win big!",
      venue: "TP Gaurakhan Auditorium",
      date: "12th October 2026",
      time: "8:00 am to 5:00 pm",
      entryFee: "250.0 Rs",
      progressValue: 75,
      registrationUrl: "/alexaverse-v3/RegisterVlogit",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  const desktopEvents = [
    {
      key: "Ideathon",
      label: "IDEATHON",
      tagline: "Ideate, Innovate, Impress: Let your creativity convince us!",
      description:
        "Collaborate, create, and compete in this Ideathon to win the prize! Present your boldest solutions and impress the judges for a shot at victory.",
      imgSrc: "/alexaverse2.0/ideathon-img.svg",
      imgAlt: "Ideathon Image",
      venue: "TP Gaurakhan Auditorium",
      time: "8:00 am to 5:00 pm",
      date: "12th October 2026",
      entry: "250.0 Rs",
      progress: 0,
      registrationUrl: "/alexaverse-v3/RegisterDebug",
    },
    {
      key: "Workshop",
      label: "WORKSHOP",
      tagline: "Wisdom and Wonder: Tune in to learn from the best!",
      description:
        "An immersive journey led by two distinct speakers, delivering the most valuable insights from the ever-evolving realm of Generative AI.",
      imgSrc: "/alexaverse2.0/workshop-img.svg",
      imgAlt: "Workshop Image",
      venue: "TP Gaurakhan Auditorium",
      time: "9:00 am to 3:00 pm",
      date: "12th October 2026",
      entry: "250.0 Rs",
      progress: 25,
      registrationUrl: "/alexaverse-v3/RegisterWorkshop",
    },
    {
      key: "Debug the Campus",
      label: "DEBUG THE CAMPUS",
      tagline: "Discover and Decrypt: Classic treasure hunt with a modern flavor!",
      description:
        "Find the numerous QR codes hidden around and debug the puzzles with your teammates. Be quick because the time is ticking!",
      imgSrc: "/alexaverse2.0/debug-img.svg",
      imgAlt: "Debug Image",
      venue: "TP Gaurakhan Auditorium",
      time: "8:00 am to 5:00 pm",
      date: "12th October 2026",
      entry: "250.0 Rs",
      progress: 50,
      registrationUrl: "/alexaverse-v3/RegisterDebug",
    },
    {
      key: "Reel It",
      label: "REEL IT",
      tagline: "Record and Roll: Capture the Essence of AlexaVerse!",
      description:
        "Eager to flex your filmmaking skills? Capture the chaos, edit it clean, and deliver a masterpiece that makes us say 'Absolute Cinema' to win big!",
      imgSrc: "/alexaverse2.0/vlogit-img.svg",
      imgAlt: "Reel It Image",
      venue: "TP Gaurakhan Auditorium",
      time: "8:00 am to 5:00 pm",
      date: "12th October 2026",
      entry: "250.0 Rs",
      progress: 75,
      registrationUrl: "/alexaverse-v3/RegisterVlogit",
    },
  ];

  return (
    <section
      id="events"
      className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-16"
    >
      <h1 className="text-5xl mb-0 py-20 font-audiowide text-center">
        <span className="text-[#563AFF]">Our</span>{" "}
        <span className="text-[#FF4E78]">Events</span>
      </h1>

      {/* Mobile layout */}
      {isMobile && (
        <div className="flex flex-col gap-7 w-full px-4">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      )}

      {/* Desktop layout */}
      <div
        className="hidden md:flex flex-col items-center gap-8 min-h-screen w-full max-w-[80rem] mx-auto"
        style={{ transform: `translateX(-5vw) translateY(-10vw)` }}
      >
        {desktopEvents.map((ev) => (
          <div
            key={ev.key}
            className="relative max-w-[85rem] w-[90vw] h-[32vw] min-h-[120px] mt-16 mb-10"
          >
            {/* Info bar (top) */}
            <div
              className="absolute top-[7.2vw] left-[15.6vw] w-[68.4vw] h-[18vw] rounded-[2.1vw] border-[0.06vw] backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(115,115,115,0.25)_1.74%,rgba(50,50,50,0.25)_1.75%,rgba(163,163,163,0.25)_33.05%,rgba(112,112,112,0.25)_97.16%)]"
              style={{
                borderImage: `radial-gradient(88.13% 63.48% at 26.09% 25.74%, #FFFFFF 0%, rgba(255,255,255,0.905829) 8.52%, rgba(255,255,255,0.801323) 40.45%, rgba(255,255,255,0.595409) 40.46%, rgba(255,255,255,0.29) 96.15%, rgba(255,255,255,0) 100%) linear-gradient(180deg, rgba(0,0,0,0.2) 18.72%, rgba(255,30,0,0.2) 43.64%, rgba(0,0,0,0.2) 67.21%)`,
                borderImageSlice: 1,
              }}
            >
              <div className="absolute top-[1.2vw] left-[19.8vw] right-[2.4vw] flex justify-between text-white">
                <span className="text-[1.08vw] font-space">VENUE</span>
                <span className="text-[1.08vw] font-space">TIME</span>
                <span className="text-[1.08vw] font-space">DATE</span>
                <span className="text-[1.08vw] font-space">ENTRY</span>
              </div>
              <div className="absolute top-[3vw] left-[19.8vw] right-[2.4vw] flex justify-between text-white">
                <div className="flex flex-col">
                  <span className="text-[1.44vw] font-space font-bold">{ev.venue}</span>
                </div>
                <div className="text-[1.44vw] font-space font-bold">{ev.time}</div>
                <div className="text-[1.44vw] font-space font-bold">{ev.date}</div>
                <div className="text-[1.44vw] font-space font-bold">{ev.entry}</div>
              </div>
            </div>

            {/* Name / tagline card */}
            <div
              className="absolute top-[15.6vw] left-[12vw] w-[76.8vw] h-[17.4vw] rounded-[2.1vw] border-[0.06vw] backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(180,180,180,0.25)_1.74%,rgba(79,79,79,0.25)_1.75%,rgba(255,255,255,0.25)_33.05%,rgba(175,175,175,0.25)_97.16%)]"
              style={{
                borderImage: `radial-gradient(88.13% 63.48% at 26.09% 25.74%, #FFFFFF 0%, rgba(255,255,255,0.905829) 8.52%, rgba(255,255,255,0.801323) 40.45%, rgba(255,255,255,0.595409) 40.46%, rgba(255,255,255,0.29) 96.15%, rgba(255,255,255,0) 100%) linear-gradient(180deg, rgba(0,0,0,0.2) 18.72%, rgba(255,30,0,0.2) 43.64%, rgba(0,0,0,0.2) 67.21%)`,
                borderImageSlice: 1,
              }}
            >
              <div className="absolute left-[25.2vw] top-[1.8vw]">
                <h2 className="text-white text-[1.08vw] font-space mb-[-0.6vw]">EVENT</h2>
                <h3 className="text-white text-[2.52vw] font-anton">{ev.label}</h3>
              </div>
              <div className="absolute right-[3.6vw] top-[3.6vw] text-right">
                <p className="text-white text-[1.32vw] font-inter">{ev.tagline}</p>
              </div>
            </div>

            {/* Character image */}
            <Image
              src={ev.imgSrc}
              alt={ev.imgAlt}
              width={800}
              height={220}
              className="absolute top-[4.8vw] left-[-14.4vw] w-[76.8vw] h-[19.8vw] object-contain rounded-[2.1vw] select-none pointer-events-none"
            />

            {/* Register button bar */}
            <div
              className="relative top-[26.4vw] left-[15vw] w-[18.6vw] h-[4.32vw] rounded-[3.12vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-[linear-gradient(122.72deg,rgba(144,144,144,0.25)_1.74%,rgba(63,63,63,0.25)_1.75%,rgba(204,204,204,0.25)_33.05%,rgba(140,140,140,0.25)_97.16%)]"
            >
              <Image
                src="/alexaverse2.0/rewind-button.png"
                alt="Rewind Button"
                width={30}
                height={40}
                className="absolute left-[0.96vw] top-1/2 -translate-y-1/2 w-[1.92vw] h-[2.52vw] object-contain invert"
              />
              <Image
                src="/alexaverse2.0/fast-forward-button.png"
                alt="Fast Forward Button"
                width={30}
                height={40}
                className="absolute left-[15.96vw] top-1/2 -translate-y-1/2 w-[1.92vw] h-[2.52vw] object-contain invert"
              />
              <a
                href={ev.registrationUrl}
                className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10vw] h-[4.9vw] rounded-[2.6vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-white flex items-center justify-center transition-all hover:scale-105"
              >
                <p className="font-anton text-[1.2vw] text-black">Register Now</p>
              </a>
            </div>

            {/* Progress bar */}
            <div
              className="absolute top-[22.2vw] left-[37.2vw] w-[48vw] h-[2.52vw] rounded-[3.12vw] border-[0.1vw] border-white backdrop-blur-[5vw]"
              style={{
                background: `linear-gradient(to right, black ${ev.progress}%, transparent ${ev.progress}%)`,
              }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 w-[5.04vw] h-[3.12vw] rounded-[3.12vw] border-[0.06vw] border-white backdrop-blur-[5vw] bg-white"
                style={{
                  left: `${ev.progress}%`,
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>

            {/* Description box */}
            <div
              className="absolute top-[27vw] left-[37.2vw] w-[48vw] h-[5.04vw] rounded-[1.44vw] border-[0.1vw] border-white backdrop-blur-[5vw] flex items-center justify-center p-[1.2vw]"
              style={{ background: "black" }}
            >
              <p className="text-white text-center font-inter text-[1.08vw] leading-tight">
                {ev.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white/10 backdrop-blur-md text-white py-12 px-16 rounded-2xl shadow-lg max-w-md w-full border border-white/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-white text-2xl hover:text-red-500 focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-space font-bold mb-4">{eventName} Update</h2>
            <p className="mb-6 font-inter">{modalMessage}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurEvents;
