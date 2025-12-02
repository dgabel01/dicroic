"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    title: "Qphonic A/V Technology",
    description: "Public address i emergency sound sustavi za zračne luke, stadione, hotele i konferencijske centre diljem svijeta.",
    image: "/images/publicsys_home.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "AuviTran Audio Toolbox",
    description: "Vrhunska AV mrežna rješenja s Dante, MADI, AES/EBU i EtherSound podrškom — standard u broadcast i live produkciji.",
    image: "/images/auvitran_home.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Vaddio Robotic Cameras",
    description: "Profesionalne PTZ kamere s 30x zoomom i preciznim robotskim upravljanjem za studije, evente i hibridne konferencije.",
    image: "/images/roboticcam_home.jpg",
  },
  {
    id: 4,
    title: "L-Acoustics K2 System",
    description: "Legendarni K2 line array — V-DOSC kvaliteta zvuka u kompaktnom formatu, idealan za velike turneje i stadione.",
    image: "/images/lacoustics_home.jpg",
  },
];

export default function ProductsCTA() {
  const featured = products.filter(p => p.featured);
  const regular = products.filter(p => !p.featured);

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Dio naše premium ponude
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partneri smo s vodećim svjetskim proizvođačima profesionalne audio, video i multimedijalne opreme.
          </p>
        </div>

        {/* All Products Button */}
        <div className="flex justify-center mb-16" data-aos="fade-up">
          <Link
            href="/proizvodi"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Svi proizvodi
            <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Featured Large Cards – 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featured.map((product, i) => (
            <Link href="/proizvodi" key={product.id} className="block group">
              <Card
                className="overflow-hidden rounded-3xl border border-border/60 bg-card/95 backdrop-blur
                           shadow-2xl hover:shadow-3xl hover:border-primary/40
                           transition-all duration-800 ease-out hover:-translate-y-3 p-0"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1200 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                  <h3 className="text-3xl lg:text-4xl font-black mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-90 font-semibold leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-white font-bold text-lg">
                    Saznaj više
                    <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Smaller Cards Below – 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {regular.map((product, i) => (
            <Link href="/proizvodi" key={product.id} className="block group">
              <Card
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/90 backdrop-blur
                           h-full flex flex-col shadow-lg hover:shadow-2xl hover:border-primary/40
                           transition-all duration-700 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-semibold">
                    Saznaj više
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}