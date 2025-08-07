// layout.tsx
import "../../globals.css";
import {
  Nunito,
  Moul,
  Roboto,
  Space_Grotesk,
  Anton,
  Inter,
} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
});

const moul = Moul({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-moul",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${nunito.variable}
        ${moul.variable}
        ${roboto.variable}
        ${spaceGrotesk.variable}
        ${anton.variable}
        ${inter.variable}
      `}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-transparent font-sans">
        {children}
      </body>
    </html>
  );
}
