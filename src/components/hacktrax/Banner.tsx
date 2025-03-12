"use client";

const Banner = () => {
  const handleRegisterClick = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-hack_bg">
      <div className="flex text-hack_orange font-sairaStencilOne text-6xl md:text-9xl justify-center items-center mt-8 md:mt-20">
        HACKTRAX
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-16 px-4 md:px-0">
        <button
          onClick={handleRegisterClick}
          className="bg-hack_orange rounded-full font-sairaStencilOne text-white text-2xl md:text-5xl flex justify-center items-center px-4 md:px-6 py-3 md:py-4 transform hover:scale-105 transition-transform duration-200"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Banner;
