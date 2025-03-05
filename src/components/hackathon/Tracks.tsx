"use client";

const Tracks = () => {
  const tracks = [
    {
      title: "FINTECH",
    },
    {
      title: "OPEN INNOVATION",
    },
    {
      title: "BLOCKCHAIN",
    },
    {
      title: "AI/ML",
    },
  ];

  return (
    <section id="tracks" className="py-8 md:py-28 relative overflow-hidden px-4 md:px-0">
      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-16 text-center">
          TRACKS
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Top-left black rectangle */}
          <div className="absolute top-0 left-0 w-[60px] md:w-[120px] h-[12px] md:h-[20px] bg-black transform -translate-y-[15px] translate-x-[90px] md:translate-x-[170px] rounded-t-lg" />
          
          {/* Left black rectangle */}
          <div className="absolute left-0 w-[50vw] h-10 md:h-16 bg-black transform -translate-x-[calc(50vw-50%)]" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 bg-black py-3 px-3 md:px-12 rounded-3xl max-w-6xl mx-auto relative z-10">
            {tracks.map((track, index) => (
              <div key={index} className="relative group">
                <div className="w-[120px] h-[120px] md:w-56 md:h-56 rounded-full bg-hack_orange flex items-center justify-center transition-transform duration-300 transform relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/5 h-1/5 bg-[#CC3D00] rounded-bl-[70%]"></div>
                  <h3 className="text-base md:text-2xl font-bold text-white text-center px-3 relative z-10">
                    {track.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right black rectangle */}
          <div className="absolute right-0 w-[50vw] h-12 md:h-16 bg-black transform translate-x-[calc(50vw-50%)]" />
          
          {/* Bottom-right black rectangle */}
          <div className="absolute bottom-0 right-0 w-[240px] md:w-[320px] h-[15px] md:h-[20px] bg-black transform translate-y-[20px] -translate-x-[100px] md:-translate-x-[140px] rounded-b-lg" />
        </div>
      </div>
    </section>
  );
};

export default Tracks;
