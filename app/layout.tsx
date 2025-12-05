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
  title: "Dicroic d.o.o. Audio, video i multimedia rješenja",
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
    "rješenja",
    "sustavi",
    "sistemi",
  ],
  icons:{
    icon: "/icons/favicon.ico",
    apple:"/icons/apple-touch-icon.png",
    other:[
      { rel: 'icon', url: '/icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/icons/icon-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/icons/icon-512x512.png', sizes: '512x512' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${montSerrat.variable} antialiased`}
      >
        <Navbar />
        <AOSWrapper />
        {children}
        <AOSWrapper/>
        <Footer />
      </body>
    </html>
  );
}
