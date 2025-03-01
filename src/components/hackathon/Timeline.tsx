"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";

const Timeline = () => {
  const events = [
    {
      date: "March 15, 2024",
      time: "6:00 PM",
      title: "Registration Opens",
      description: "Start your journey by registering for the hackathon",
    },
    {
      date: "March 20, 2024",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Last chance to join the hackathon",
    },
    {
      date: "March 22, 2024",
      time: "10:00 AM",
      title: "Hackathon Begins",
      description: "Opening ceremony and team formation",
    },
    {
      date: "March 23, 2024",
      time: "10:00 PM",
      title: "Project Submission",
      description: "Submit your projects for evaluation",
    },
    {
      date: "March 24, 2024",
      time: "2:00 PM",
      title: "Results & Prize Distribution",
      description: "Closing ceremony and winner announcement",
    },
  ];

  return (
    <section id="timeline" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Event Timeline
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mark your calendar for these important dates
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center mb-12 last:mb-0"
            >
              <div className="flex-1 flex items-center justify-end pr-8">
                <BackgroundGradient className="p-1 bg-transparent rounded-lg">
                  <div className="bg-black p-6 rounded-lg">
                    <div className="text-sm text-gray-400">{event.date}</div>
                    <div className="text-lg font-bold text-white">{event.time}</div>
                  </div>
                </BackgroundGradient>
              </div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#31B553] to-[#0AA294] relative z-10">
                <div className="absolute w-px h-full bg-gradient-to-b from-[#31B553] to-[#0AA294] left-1/2 transform -translate-x-1/2 -z-10"></div>
              </div>
              <div className="flex-1 pl-8">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;