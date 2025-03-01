"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "/social-icons/instagram.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "/social-icons/linkedin.svg",
    },
    {
      name: "X",
      url: "https://x.com",
      icon: "/social-icons/x.svg",
    },
  ];

  return (
    <footer className="py-12 md:py-16 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Link href="/">
            <Image
              src="/hackathon/logo.png"
              width={200}
              height={100}
              alt="Hackathon Logo"
              className="object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition duration-200"
              >
                <Image
                  src={link.icon}
                  width={24}
                  height={24}
                  alt={link.name}
                  className="invert"
                />
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;