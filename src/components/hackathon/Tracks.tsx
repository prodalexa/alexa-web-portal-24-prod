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
    <section id="tracks" className="py-8 md:py-32 relative overflow-hidden">
      <div className="container mx-auto relative px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-20 text-center">
          TRACKS
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Top-left black rectangle */}
          <div className="absolute top-0 left-0 w-[60px] md:w-[180px] h-[12px] md:h-[20px] bg-black transform -translate-y-[10px] md:-translate-y-[20px] translate-x-[25px] md:translate-x-[230px] rounded-t-lg" />
          
          {/* Left black rectangle */}
          <div className="absolute left-0 w-[50vw] h-10 md:h-16 bg-black transform -translate-x-[calc(50vw-50%)]" />
          <div className="flex flex-nowrap justify-center gap-4 md:gap-16 bg-black py-6 md:py-12 px-4 md:px-16 rounded-3xl mx-auto relative z-10">
            {tracks.map((track, index) => (
              <div key={index} className="relative group">
                <div className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] rounded-full bg-hack_orange flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#CC3D00] rounded-bl-[100%]"></div>
                  <h3 className="text-xs md:text-2xl font-bold text-white text-center px-2 md:px-4 relative z-10">
                    {track.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 w-[50vw] h-10 md:h-16 bg-black transform translate-x-[calc(50vw-50%)]" />
          <div className="absolute bottom-0 right-0 w-[240px] md:w-[380px] h-[15px] md:h-[20px] bg-black transform translate-y-[10px] md:translate-y-[20px] -translate-x-[40px] md:-translate-x-[250px] rounded-b-lg" />
        </div>
      </div>
    </section>
  );
};

export default Tracks;
