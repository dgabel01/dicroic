"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/numbers_background.jpg";
import mobileBackground from "@/public/images/mobile_hero.jpg";

export default function HomeHero() {
  return (
   <section className="relative w-full" data-aos="fade-in" data-aos-duration="1600">
     {/* ==================== MOBILE & TABLET (< lg) ==================== */}
     <div className="relative h-screen max-h-[800px] min-h-[600px] md:hidden overflow-hidden">
       {/* SVG Topography Background */}
       <Image
         src={mobileBackground}
         alt="Mobile hero"
         fill
         className="object-cover object-center brightness-45"
         priority
         sizes="100vw"
       />

       {/* Content */}
       <div className="relative z-10  h-full flex flex-col items-center justify-center px-6 text-center">
         <div className="max-w-2xl space-y-7">
           <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
             <span className="text-white">
               Dicroic d.o.o
             </span>
           </h1>

           <p className="text-2xl font-black italic text-white">
             Profesionalna rješenja od{" "}
             <span className="font-black text-red-600">1993.</span>
           </p>

           <p className="text-lg sm:text-xl font-black text-white leading-relaxed">
             Ekskluzivni zastupnik vodećih svjetskih brendova u pro-audio,
             pro-video i broadcast sustavima.
           </p>

           <div className="flex flex-col gap-4 pt-6">
             <Link
               href="/kontakt"
               className="mx-auto w-64 rounded-xl bg-primary px-12 py-4.5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
             >
               Kontaktirajte nas
             </Link>

             <div className="mx-auto flex flex-col gap-4 sm:flex-row sm:justify-center">
               <Link
                 href="/o-nama"
                 className="rounded-xl border-2 border-gray-300 bg-white/90 px-9 py-3.5 font-semibold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-600 hover:bg-white hover:text-red-600"
               >
                 Više o nama
               </Link>
               <Link
                 href="/projekti"
                 className="rounded-xl border-2 border-gray-300 bg-white/90 px-9 py-3.5 font-semibold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-600 hover:bg-white hover:text-red-600"
               >
                 Naši projekti
               </Link>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/* ==================== LAPTOP & DESKTOP (lg+) ==================== */}
     <div className="relative hidden md:block h-screen max-h-[900px] min-h-[700px]">
       {/* Photo Background */}
       <Image
         src={heroImage}
         alt="Dicroic Hero"
         fill
         className="object-cover object-center"
         priority
         sizes="100vw"
       />

       {/* Dark Gradient Overlay */}
       <div className="absolute inset-0 bg-linear-to-br from-primary/60 via-black/50 to-primary/60" />

       {/* Content */}
       <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
         <div className="max-w-6xl space-y-8">
           <h1 className="text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight drop-shadow-2xl">
             Dicroic
           </h1>

           <p className="text-4xl lg:text-5xl font-bold italic drop-shadow-xl">
             Profesionalna rješenja od 1993.
           </p>

           <p className="mx-auto max-w-4xl text-2xl lg:text-3xl font-bold leading-relaxed drop-shadow-lg">
             Ekskluzivni zastupnik vodećih svjetskih brendova u pro-audio,
             pro-video i broadcast sustavima.
           </p>

           <div className="flex flex-col items-center gap-6 pt-8">
             <Link
               href="/kontakt"
               className="rounded-lg border-2 border-white/50 bg-white/20 px-16 py-5 text-2xl font-bold shadow-2xl transition hover:scale-105 hover:bg-white/30 lg:px-20"
             >
               Kontaktirajte nas
             </Link>

             <div className="flex flex-col gap-6 lg:flex-row">
               <Link
                 href="/o-nama"
                 className="rounded-lg border-2 border-white/50 bg-white/20 px-12 py-4 text-xl font-bold backdrop-blur-sm transition hover:scale-105 hover:bg-white/30"
               >
                 Više o nama
               </Link>
               <Link
                 href="/projekti"
                 className="rounded-lg border-2 border-white/50 bg-white/20 px-12 py-4 text-xl font-bold backdrop-blur-sm transition hover:scale-105 hover:bg-white/30"
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
}