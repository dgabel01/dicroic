"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    title: "L-Acoustics",
    subtitle: "Novi K2 • 5XT • SB15m",
    description:
      "Legendarni K2 line array u kompaktnom formatu • Ultra-lagani 5XT koaksijalni zvučnici • Moćni SB15m subwoofer s DED tehnologijom.",
    logo: "/images/lacoustics_logo.png",
    href: "https://www.l-acoustics.com/",
  },
  {
    title: "LAWO",
    subtitle: "mc²36 Audio Console",
    description:
      "Nagrađivana nova generacija profesionalnih audio konzola • Savršena za broadcast, live i studijsku produkciju.",
    logo: "/images/lawo_logo.png",
    href: "https://lawo.com/",
  },
  {
    title: "Qphonic A/V Technology",
    subtitle: "Public Address & Emergency Sound",
    description:
      "Globalno korišteni sustavi za zračne luke, stadione, hotele, kazališta i vladine objekte diljem svijeta.",
    logo: "/images/publicsys_home.jpg",
    href: "qhonics.com",
  },
  {
    title: "JOCAVI Acoustic Panels",
    subtitle: "Portugal • Premium akustika",
    description:
      "Najmoderniji akustični paneli i rješenja za profesionalnu obradu prostora • Kazališta, studiji, kongresni centri.",
    logo: "/images/jocavi.jpg",
    href: "https://jocavi.net/",
  },
  {
    title: "AuviTran Audio Toolbox",
    subtitle: "Dante • MADI • EtherSound • AES/EBU",
    description:
      "Vrhunska AV mrežna rješenja • AVBx3 platforma s potpunom kompatibilnošću modernih audio protokola.",
    logo: "/images/auvitran_logo.png",
    href: "https://www.auvitran.com/",
  },
  {
    title: "Vaddio Robotic Cameras",
    subtitle: "HD-22 • HD-30 PTZ",
    description:
      "Profesionalne robotske kamere s 22x/30x optičkim zoomom • Full HD • HDMI • Idealne za evente i hibridne konferencije.",
    logo: "/images/vaddio_logo.png",
    href: "https://www.legrandav.com/products/vaddio",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Naša Premium Ponuda
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Ekskluzivni zastupnici i distributeri vodećih svjetskih brendova profesionalne audio, video i akustične opreme.
          </p>
          <div className="h-1 w-20 bg-red-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/95 backdrop-blur 
                         shadow-xl hover:shadow-2xl hover:border-primary/30 
                         transition-all duration-700 hover:-translate-y-3 flex flex-col h-full"
              data-aos="fade-up"
            >
              {/* Subtle glow overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-8 flex flex-col flex-1">
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                    <Image
                      src={product.logo}
                      alt={product.title}
                      fill
                      className="object-contain drop-shadow-lg opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 "
                    />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-black text-center mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-primary font-bold text-center mb-4 tracking-wider">
                  {product.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center flex-1">
                  {product.description}
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:gap-4"
                  >
                    Saznaj više
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-btn-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}