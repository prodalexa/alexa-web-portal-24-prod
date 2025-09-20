import Navbar from "@/components/recruitments25/Navbar";
import RegisterForm from "@/components/recruitments25/RegisterForm";
import ContactUs from "@/components/recruitments25/ContactUs";
import StarsBackground from "@/components/recruitments25/StarsBackground";

export default function Recruitment25RegisterPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* --- Desktop Smokes --- */}
      <div className="hidden md:block">
        {/* Left side centered */}
        <img
          src="/recruitments25/Blue-Smoke.svg"
          alt="Blue Smoke Left"
          className="fixed left-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-80 z-0"
        />
        <img
          src="/recruitments25/Blue-Smoke2.svg"
          alt="Blue Smoke Left 2"
          className="fixed left-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-100 brightness-125 z-0"
        />
        <img
          src="/recruitments25/Blue-Smoke2.svg"
          alt="Blue Smoke Left 3"
          className="fixed left-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-100 brightness-80 z-0"
        />

        {/* Right side centered */}
        <img
          src="/recruitments25/Blue-Smoke.svg"
          alt="Blue Smoke Right"
          className="fixed right-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-80 scale-x-[-1] z-0"
        />
        <img
          src="/recruitments25/Blue-Smoke2.svg"
          alt="Blue Smoke Right 2"
          className="fixed right-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-100 brightness-125 scale-x-[-1] z-0"
        />
        <img
          src="/recruitments25/Blue-Smoke2.svg"
          alt="Blue Smoke Right 3"
          className="fixed right-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[900px] opacity-100 brightness-80 scale-x-[-1] z-0"
        />
      </div>

      {/* --- Mobile Smokes --- */}
<div className="block md:hidden">
  {/* Left stack at top */}
  <div className="fixed top-0 left-0 z-0">
    <img
      src="/recruitments25/Blue-Smoke.svg"
      alt="Blue Smoke Left"
      className="w-[450px] sm:w-[400px] opacity-80"
    />
    <img
      src="/recruitments25/Blue-Smoke2.svg"
      alt="Blue Smoke Left 2"
      className="absolute top-0 w-[450px] sm:w-[400px] opacity-100 brightness-125"
    />
    <img
      src="/recruitments25/Blue-Smoke2.svg"
      alt="Blue Smoke Left 3"
      className="absolute top-0 w-[450px] sm:w-[400px] opacity-100 brightness-80"
    />
  </div>

  {/* Right stack at bottom */}
  <div className="fixed bottom-0 right-0 z-0">
    <img
      src="/recruitments25/Blue-Smoke.svg"
      alt="Blue Smoke Right"
      className="w-[450px] sm:w-[400px] opacity-80 scale-x-[-1]"
    />
    <img
      src="/recruitments25/Blue-Smoke2.svg"
      alt="Blue Smoke Right 2"
      className="absolute top-0 w-[450px] sm:w-[400px] opacity-100 brightness-125 scale-x-[-1]"
    />
    <img
      src="/recruitments25/Blue-Smoke2.svg"
      alt="Blue Smoke Right 3"
      className="absolute top-0 w-[450px] sm:w-[400px] opacity-100 brightness-80 scale-x-[-1]"
    />
  </div>
</div>


      {/* Black overlay */}
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* Stars over the background but under content */}
      <div className="fixed inset-0 z-5">
        <StarsBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <RegisterForm />
        <ContactUs />
      </div>
    </main>
  );
}
