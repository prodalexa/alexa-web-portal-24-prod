import "./globals.css";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <body>{children}</body>
    </html>
  );
}
