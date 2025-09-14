"use client";

export default function DomainSection() {
  const domains = [
    { title: "Web Development", description: "Build responsive and modern web apps." },
    { title: "AI & ML", description: "Work on cutting-edge AI and machine learning projects." },
    { title: "Mobile Apps", description: "Create amazing apps for Android and iOS." },
    { title: "Game Development", description: "Design and develop engaging games." },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Choose Your Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform"
            >
              <h3 className="text-2xl font-semibold mb-3">{domain.title}</h3>
              <p className="text-gray-600">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
