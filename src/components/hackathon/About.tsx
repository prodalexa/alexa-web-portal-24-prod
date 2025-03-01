"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About the Hackathon
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join us for an exciting 36-hour hackathon where innovation meets technology. 
              Whether you're a seasoned developer or just starting out, this is your chance 
              to showcase your skills, learn from peers, and create something amazing.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">36 Hours</h3>
                <p className="text-gray-400">Non-stop coding and innovation</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">₹1,00,000</h3>
                <p className="text-gray-400">Worth of prizes to be won</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/hackathon/about-image.jpg"
                alt="Hackathon Environment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;