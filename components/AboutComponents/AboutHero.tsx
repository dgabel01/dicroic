"use client";

import Image from "next/image";
import isoImage from "@/public/images/iso-90001.jpg";
import heroImage from "@/public/images/dicroic_hero.jpg";

const services = [
  {
    title: "PROFESIONALNA RASVJETA",
    items: [
      "scenska rasvjeta",
      "inteligentna rasvjeta kao scanner-i, moving head-ovi, laser-i i sl.",
      "sustavi upravljanja scenskom rasvjetom",
    ],
  },
  {
    title: "OZVUČENJA",
    items: [
      "koncertna ozvučenja",
      "ozvučenja disco klubova, noćnih barova, kabarea, restorana, i sl.",
      "ozvučenja hotela, robnih kuća, prodajnih centara, i sl.",
      "veliki sustavi ozvučenja",
    ],
  },
  {
    title: "KONGRESNI SUSTAVI",
    items: [
      "video konferencije",
      "video i multimedijalne aplikacije",
      "sustavi simultanog prevođenja",
      "video i tonski sustavi - snimanja",
      "konferencijski sustavi",
    ],
  },
  { title: "TV I RADIO POSTAJE", items: ["tehnološki sustavi 'ključ u ruke'"] },
  { title: "KAZALIŠTA", items: ["kompletni tehnološki sustavi"] },
  { title: "SAKRALNI OBJEKTI", items: [] },
  { title: "VIDEO LED SUSTAVI", items: ["kompletna rješenja u LED tehnologiji"] },
  { title: "KOMUNIKACIJSKI SUSTAVI", items: [] },
];

export default function AboutHero() {
  return (
    <>
      {/* Full-width cinematic hero */}
      <div className="relative -mt-20 overflow-hidden">
        <Image
          src={heroImage}
          alt="DICROIC d.o.o. - 30+ godina izvrsnosti"
          className="w-full object-cover h-[50vh] md:h-[70vh] brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
      </div>

      <section className="relative bg-linear-to-b from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

          {/* Main Intro + ISO Badge */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start mb-24">

            {/* Full original text – untouched */}
            <div className="lg:col-span-2 space-y-7 text-lg md:text-xl leading-relaxed text-foreground/90" data-aos="fade-right" data-aos-duration="2000">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  DICROIC d.o.o.
                </span>
              </h1>

              <p>
                <span className="font-semibold">DICROIC d.o.o.</span> je osnovan{" "}
                <span className="font-semibold text-red-600">1993 godine</span> u Splitu.
                Od samoga početka aktivni smo na teritoriju hrvatske i Bosne i Hercegovine.
                Naša specijalnost je{" "}
                <span className="font-semibold">stručna suradnja, projektiranje, isporuka i izvođenje radova</span>{" "}
                po sistemu <span className="italic">„ključ u ruke“</span> tonskih, video, LED, rasvjetnih i multimedijalnih tehnoloških sustava.
              </p>

              <p>
                Naglašavamo <span className="font-semibold">višegodišnju suradnju</span> sa{" "}
                <span className="font-semibold">vodećim projektantskim uredima</span> na projektiranju
                tehnoloških sustava{" "}
                <span className="font-semibold text-red-600">
                  kazališta, RTV, tonskih i video postprodukcijskih studija,
                  konferencijskih i kongresnih centara
                </span>
                , prosvjetnih ustanova, medicinskih sustava, sportskih dvorana i ugostiteljskih objekata.
              </p>

              <p>
                Od strane brojnih investitora <span className="font-semibold">DICROIC d.o.o.</span> je
                prepoznat kao tvrtka čiji su sustavi{" "}
                <span className="font-semibold">ergonomski jednostavni za upravljanje</span> te{" "}
                <span className="font-semibold">pouzdani i izdržljivi u radu</span>, zahvaljujući{" "}
                <span className="italic">praktičnom i teoretskom znanju i iskusnom kadru</span>.
                Nastojimo konstantnim usavršavanjem uvijek ponuditi{" "}
                <span className="font-semibold text-red-600">najkvalitetnija tehnološka rješenja</span>.
              </p>

              <p>
                Zastupamo niz{" "}
                <span className="font-semibold">vrhunskih tonskih, video, LED i multimedijalnih oprema</span>{" "}
                te svoje djelovanje širimo na sve republike bivše Jugoslavije. Danas smo među{" "}
                <span className="font-semibold text-red-600">
                  vodećim tvrtkama u Hrvatskoj
                </span>{" "}
                u integraciji tonskih, video, LED i multimedijalnih sustava.
              </p>
            </div>

            {/* Floating ISO card */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="group relative p-8 rounded-3xl bg-card/95 backdrop-blur border border-border/50 shadow-2xl
                           hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 ease-out"
                data-aos="fade-left"
              >
                <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={isoImage}
                  alt="ISO 9001:2015 Certifikat"
                  className="relative z-10 w-64 md:w-80 rounded-xl shadow-xl"
                />
                <p className="mt-6 text-center font-bold text-foreground/80">
                  ISO 9001:2015 certificirani
                </p>
              </div>
            </div>
          </div>

          {/* Services Section – original text preserved */}
          <div className="mt-32" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-center text-4xl md:text-5xl font-black mb-16">
              <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Naše djelatnosti uključuju:
              </span>
              <div className="h-1 w-20 bg-red-600 rounded-full mx-auto my-6" />
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/90 backdrop-blur
                             p-8 shadow-xl hover:shadow-2xl hover:border-primary/40
                             transition-all duration-700 ease-out hover:-translate-y-3 hover:text-red-500"
                  data-aos="fade-up"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hover:text-red-500" />

                  <h3 className="relative text-2xl font-black mb-6 text-foreground">
                    {service.title}
                  </h3>

                  {service.items.length > 0 && (
                    <ul className="space-y-3 text-muted-foreground text-base">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}