"use client";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";

const Prizes = () => {
  const prizes = [
    {
      title: "First Prize",
      amount: "₹50,000",
      description: "Cash prize + Exciting goodies",
    },
    {
      title: "Second Prize",
      amount: "₹30,000",
      description: "Cash prize + Developer tools",
    },
    {
      title: "Third Prize",
      amount: "₹20,000",
      description: "Cash prize + Swag kit",
    },
  ];

  return (
    <section id="prizes" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Exciting Prizes
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Win big with our amazing prize pool worth ₹1,00,000
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <BackgroundGradient className="p-1 bg-transparent rounded-xl">
                <div className="p-8 bg-black rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {prize.title}
                  </h3>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#31B553] to-[#0AA294] mb-4">
                    {prize.amount}
                  </div>
                  <p className="text-gray-400">{prize.description}</p>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;