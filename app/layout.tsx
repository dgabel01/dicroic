import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSWrapper from "@/lib/AOSwrapper";

const montSerrat= Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dicroic d.o.o.",
  description: "Dicroic d.o.o. SPLIT, TVRTKA ZA PROJEKTIRANJE, MONTAŽU I ODRŽAVANJE U PODRUČJU ELEKTROTEHNIKE",
  keywords: [
    "Dicroic",
    "Dicroic d.o.o.",
    "elektrotehnika",
    "projektiranje",
    "montaža",
    "održavanje",
    "Split",
    "tvrtka",
    "prodaja",
    "video",
    "audio",
    "multimedija",
    "multimedia",
    "razglas",
    "ozvučenja",
    "projektori",
    "projekcijska oprema",
    "konferencijska oprema",
    "light",
    "svjetlo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat.variable} antialiased`}
      >
        <Navbar />
        <AOSWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
