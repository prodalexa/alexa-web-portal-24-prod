"use client";

export default function ContactUs() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center mb-12 text-lg">
          Have questions or want to know more? Fill out the form below and we’ll get back to you!
        </p>

        <form className="max-w-2xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
