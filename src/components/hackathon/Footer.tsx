"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "X",
      url: "https://x.com/alexadevsrm",
      icon: "/hacktrax/X.png"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/alexadevsrm",
      icon: "/hacktrax/Instagram.png"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/alexadevsrm/",
      icon: "/hacktrax/LinkedIn.png"
    }
  ];

  return (
    <footer className="py-12 md:py-16 relative overflow-hidden bg-hack_bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex justify-center">
            <Image
              src="/hacktrax/AlexaLogo.png"
              width={300}
              height={150}
              alt="Alexa Developers SRM"
              className="w-[250px] md:w-[300px]"
            />
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="https://www.google.com/maps/place/Department+of+computer+sciences,Tech+park,SRM/@12.8248752,80.0444448,219m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52f70d1e2bf683:0x24a458beb785a1ca!8m2!3d12.8248752!4d80.0450885!16s%2Fg%2F11c380k9c_!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:-translate-y-1 transition duration-200"
            >
              <Image
                src="/hacktrax/Map.png"
                width={600}
                height={300}
                alt="Location Map"
                className="rounded-lg shadow-lg w-[250px] md:w-[300px] cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <div className="grid space-y-8">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:-translate-y-1 transition duration-200"
                >
                  <div className="flex">
                    <Image
                      src={link.icon}
                      width={35}
                      height={35}
                      alt={link.name}
                    />
                    <p className="pl-4 text-xl text-white">@alexadevsrm</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;