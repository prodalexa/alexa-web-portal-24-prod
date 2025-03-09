import type { Metadata } from "next";
import { Saira_Stencil_One, Keania_One, Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import "./globals.css";

const sariaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sariaStencilOne",
});

const keniaOne = Keania_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-keniaOne",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-monsterrat",
});

export const metadata: Metadata = {
  title: "Welcome | ADS!",
  description: "Created with ♥️ by the ADS team.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen h-full bg-gaming_bg font-sans antialiased",
          keniaOne.variable,
          sariaStencilOne.variable,
          montserrat.variable,
        )}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}