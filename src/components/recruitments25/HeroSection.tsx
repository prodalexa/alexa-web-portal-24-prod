"use client";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to Alexa Recruitments 2025!</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Join our community of tech enthusiasts and build amazing projects with us.
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Apply Now
      </button>
    </section>
  );
}
