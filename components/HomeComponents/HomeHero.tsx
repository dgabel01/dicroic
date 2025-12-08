"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/dicroic_hero.jpg";
// Assuming this path resolves to your SVG file
import mobileBackground from "@/public/images/topography.svg";


// -------------------------------------------------------------------
// Mobile Hero Component: Uses SVG Background (Topography)
// -------------------------------------------------------------------
const MobileHeroGradient = () => (
  <div className="relative h-screen max-h-[800px] min-h-[600px] lg:hidden overflow-hidde mb-24">
    
    {/* 1. SVG Background Image */}
    <Image
        src={mobileBackground}
        alt="Topography Pattern Background"
        fill
        // Use object-cover to ensure the pattern fills the height/width
        // Set low opacity so it's subtle and white text remains readable
        className="object-cover opacity-5 text-teal-300" 
        priority
        sizes="100vw"
    />

    {/* 2. Content Container: Added h-full and flex-1 to inner elements for proper centering */}
    {/* The z-10 ensures content is *above* the SVG background */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl space-y-7">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
          {/* Text is now dark to contrast with the light/white background */}
          <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Dicroic d.o.o
          </span>
        </h1>

        <p className="text-2xl font-medium italic text-gray-800">
          Profesionalna rješenja od{" "}
          <span className="font-bold text-red-600">1993.</span>
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-muted-foreground max-w-5xl mx-auto leading-relaxed">
          Ekskluzivni zastupnik vodećih svjetskih brendova u pro-audio,
          pro-video i broadcast sustavima.
        </p>

        <div className="flex flex-col gap-4 pt-6">
          <Link
            href="/kontakt"
            className="bg-primary w-64 mx-auto text-white px-12 py-4.5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Kontaktirajte nas
          </Link>

          <div className="flex flex-col w-44  text-nowrap mx-auto sm:flex-row gap-4 justify-center">
            <Link
              href="/o-nama"
              className="border-2  border-gray-300 hover:border-red-600 text-gray-800 hover:text-red-600 bg-white/90 hover:bg-white px-9 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Više o nama
            </Link>
            <Link
              href="/projekti"
              className="border-2 w-44 mx-auto text-nowrap border-gray-300 hover:border-red-600 text-gray-800 hover:text-red-600 bg-white/90 hover:bg-white px-9 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Naši projekti
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
// -------------------------------------------------------------------
// Main HomeHero Component
// -------------------------------------------------------------------
const HomeHero = () => {
  return (
    <section className="relative w-full" data-aos="fade-in" data-aos-duration="1600">

      {/* Mobile Version: Uses the SVG background Hero */}
      <MobileHeroGradient />

      {/* Desktop & Larger Screens */}
      <div className="relative hidden lg:block h-screen max-h-[900px] min-h-[700px]">
        <Image
          src={heroImage}
          alt="Dicroic Hero"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/60 via-black/50 to-primary/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  px-8 text-center text-white">
          <div className="max-w-6xl space-y-8">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight drop-shadow-2xl">
              Dicroic
            </h1>
            <p className="text-4xl lg:text-5xl font-bold drop-shadow-xl italic">
              Profesionalna rješenja od 1992.
            </p>
            <p className="text-2xl lg:text-3xl font-bold leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
              Ekskluzivni zastupnik vodećih svjetskih brendova u pro-audio,
              pro-video i broadcast sustavima.
            </p>

            <div className="flex flex-col items-center gap-6 pt-8">
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary/90 px-16 lg:px-20 py-5 rounded-lg font-bold text-2xl transition hover:scale-105 shadow-2xl"
              >
                Kontaktirajte nas
              </Link>
              <div className="flex flex-col lg:flex-row gap-6">
                <Link
                  href="/o-nama"
                  className="bg-white/20 hover:bg-white/30 border-2 border-white/50 px-12 py-4 rounded-lg font-bold text-xl transition hover:scale-105 backdrop-blur-sm"
                >
                  Više o nama
                </Link>
                <Link
                  href="/projekti"
                  className="bg-white/20 hover:bg-white/30 border-2 border-white/50 px-12 py-4 rounded-lg font-bold text-xl transition hover:scale-105 backdrop-blur-sm"
                >
                  Naši projekti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;