"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/dicroic_hero.jpg";
import mobileHero from "@/public/images/mobile_hero.jpeg";

const HomeHero = () => {
  return (
    <section className="relative w-full" data-aos="fade-in" data-aos-duration="1600">
      {/* Mobile Version */}
      <div className="relative h-screen max-h-[800px] min-h-[600px] md:hidden">
        <Image
          src={mobileHero}
          alt="Dicroic Hero"
          fill
          className="object-center"
          priority
          sizes="100vw"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/80" />
        
        {/* Content - perfectly centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-2xl">
              Dicroic
            </h1>
            <p className="text-2xl italic font-extrabold drop-shadow-xl">
              &quot;Profesionalna rješenja od 1992.
            </p>
            <p className="text-lg font-bold leading-relaxed drop-shadow-lg max-w-xl mx-auto">
              Ekskluzivni zastupnik vodećih svjetskih brendova u pro-audio,
              pro-video i broadcast sustavima.
            </p>

            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary/90 px-10 py-4 rounded-lg font-bold text-lg transition hover:scale-105 shadow-2xl"
              >
                Kontaktirajte nas
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/o-nama"
                  className="bg-white/20 hover:bg-white/30 border border-white/50 px-8 py-3 rounded-lg font-semibold transition hover:scale-105 backdrop-blur-sm"
                >
                  Više o nama
                </Link>
                <Link
                  href="/projekti"
                  className="bg-white/20 hover:bg-white/30 border border-white/50 px-8 py-3 rounded-lg font-semibold transition hover:scale-105 backdrop-blur-sm"
                >
                  Naši projekti
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Larger Screens */}
      <div className="relative hidden md:block h-screen max-h-[900px] min-h-[700px]">
        <Image
          src={heroImage}
          alt="Dicroic Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/60" />

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