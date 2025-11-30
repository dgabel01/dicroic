"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    title: "Qphonic A/V Technology",
    description:
      "Public address i emergency sound sustavi za zračne luke, stadione, hotele, kazališta i konferencijske centre diljem svijeta.",
    image: "/images/publicsys_home.jpg",
  },
  {
    id: 2,
    title: "AuviTran Audio Toolbox",
    description:
      "Vrhunska AV mrežna rješenja s Dante, MADI, AES/EBU i EtherSound podrškom — profesionalni standard u broadcast i live produkciji.",
    image: "/images/auvitran_home.jpg",
  },
  {
    id: 3,
    title: "Vaddio Robotic Cameras",
    description:
      "Profesionalne PTZ kamere s 22x/30x optičkim zoomom, Full HD senzorima i preciznim robotskim upravljanjem za studije i evente.",
    image: "/images/roboticcam_home.jpg",
  },
  {
    id: 4,
    title: "L-Acoustics K2 System",
    description:
      "Legendarni K2 line array u kompaktnom formatu — V-DOSC kvaliteta zvuka, 10° fleksibilnost, 100% kompatibilnost s K1 sustavom.",
    image: "/images/lacoustics_home.jpg",
  },
];

export default function ProductsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Dio naše premium ponude
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partneri smo s vodećim svjetskim proizvođačima profesionalne audio, video i multimedijalne opreme.
          </p>
        </div>

        {/* All Products Button */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <Link
            href="/proizvodi"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Svi proizvodi
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link href="/proizvodi" key={product.id} className="block group">
              <Card
                className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/90 backdrop-blur
                           h-full flex flex-col shadow-lg hover:shadow-2xl hover:border-primary/40
                           transition-all duration-700 ease-out hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-500 group-hover:text-primary">
                      {product.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-4">
                      {product.description}
                    </p>
                  </div>

                  {/* CTA: Always visible on mobile/tablet, hover-only on large screens (≥1024px) */}
                  <div
                    className={`
                      mt-6 flex items-center gap-2 text-primary font-semibold
                      /* Visible by default (mobile + tablet) */
                      lg:opacity-0 lg:translate-y-2
                      /* On large screens → reveal only on hover */
                      lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                      /* Smooth animation */
                      transition-all duration-700 ease-out lg:delay-100
                    `}
                  >
                    Saznaj više
                    <ArrowRightIcon
                      className="w-5 h-5 transition-transform duration-700 ease-out lg:group-hover:translate-x-3"
                    />
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