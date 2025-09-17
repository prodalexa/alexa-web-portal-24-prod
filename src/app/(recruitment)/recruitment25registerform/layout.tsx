import "./globals.css";
import { Montserrat_Alternates, Montserrat } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserratAlternates.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
