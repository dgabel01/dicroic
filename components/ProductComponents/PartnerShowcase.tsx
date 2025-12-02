"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const brandCategories = {
  "Pro-Audio": [
    "L'Acoustics - Francuska",
    "Klotz Digital - Njemačka",
    "Lawo - Njemačka",
    "RCF - Italija",
    "Eela Audio - Nizozemska",
    "Neumann - Njemačka",
    "Sennheiser - Njemačka",
    "Sabine - SAD",
    "Innovason - Francuska",
    "Beyerdynamic - Njemačka",
  ],
  "Pro-Video": [
    "Barco Projectors - Belgija",
    "Barco Digital Lighting - Belgija",
    "Barco LED Displays - Belgija",
    "JVC Pro - Japan",
    "Grass Valley - SAD",
    "Vaddio - SAD",
    "Conrac - Njemačka",
  ],
  "Pro-Sustavi": [
    "Riedel - Njemačka",
    "Westerstrand - Švedska",
    "Multidyne - SAD",
    "Extron Electronics - SAD",
    "Schulz Kabel - Njemačka",
  ],
};

export default function FullPartnersShowcase() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Naši Partneri 
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Više od 30 godina ekskluzivni zastupnici vodećih svjetskih proizvođača profesionalne opreme.
          </p>
        </div>

        {/* Highlighted Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-20">
          {[
            { logo: "/images/riedel_logo.png", title: "Riedel MediorNet", desc: "Real-time optičke mreže i signal distribution" },
            { logo: "/images/vaddio_logo.png", title: "Vaddio Robotic Cameras", desc: "Profesionalne PTZ kamere za broadcast i evente" },
            { logo: "/images/barco_logo.png", title: "Barco", desc: "Projekcija • LED zidovi • Procesiranje signala" },
          ].map((p, i) => (
            <div
              key={i}
              className="group relative bg-card/95 backdrop-blur border border-border/50 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative w-48 h-32">
                  <Image
                    src={p.logo}
                    alt={p.title}
                    fill
                    className="object-contain drop-shadow-xl  opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-md">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Collapsible Brand Categories */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {Object.entries(brandCategories).map(([category, brands]) => (
            <div
              key={category}
              className="border border-border/60 rounded-2xl overflow-hidden bg-card/95 backdrop-blur shadow-lg"
              data-aos="fade-up"
            >
              {/* Toggle Header */}
              <button
                onClick={() => setOpenSection(openSection === category ? null : category)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-2xl lg:text-3xl font-black text-primary">
                  {category}
                </h3>
                <ChevronDownIcon
                  className={`w-8 h-8 text-primary transition-transform duration-500 ${
                    openSection === category ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-8 transition-all duration-700 ease-in-out ${
                  openSection === category
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden pb-0"
                }`}
              >
                {brands.map((brand, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 border-b border-border/30 last:border-0 text-lg"
                  >
                    <span className="text-primary text-lg">•</span>
                    <span className="text-foreground font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}