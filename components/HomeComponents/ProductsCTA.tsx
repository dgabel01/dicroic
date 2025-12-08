"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useCallback, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

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
  // We no longer need to separate featured and regular products for the desktop layout,
  // but we keep them here if the mobile/carousel logic still relies on 'products'.
  // const featured = products.filter(p => p.featured);
  // const regular = products.filter(p => !p.featured);

  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    // Cleanup function
    return () => {
        embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Dio naše ponude
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground max-w-5xl mx-auto leading-relaxed ">
            Partneri smo s vodećim svjetskim proizvođačima profesionalne audio, video i multimedijalne opreme.
          </p>
          <div className="h-1 w-20 bg-red-600 rounded-full mx-auto mt-6" />
        </div>


        {/* Mobile: Single Carousel for All Products (No Change) */}
        <div className="lg:hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            setApi={(api) => setEmbla(api ?? null)}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id}>
                  <Link href="/proizvodi" className="block group">
                    <Card
                      className="overflow-hidden rounded-2xl border border-border/50 bg-card
                                 h-full flex flex-col shadow-lg hover:shadow-xl hover:border-primary/40
                                 transition-all duration-700 hover:-translate-y-2"
                      data-aos="fade-up"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain transition-transform duration-1000 group-hover:scale-110"
                          sizes="100vw"
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-8 px-12">
              <CarouselPrevious
                onClick={scrollPrev}
                className="left-2 lg:left-0 size-8 md:size-9 lg:size-10 static translate-y-0"
              />
              <div className="text-md text-muted-foreground">
                {selectedIndex + 1} / {products.length}
              </div>
              <CarouselNext
                onClick={scrollNext}
                className="right-2 lg:right-0 size-8 md:size-9 lg:size-10 static translate-y-0"
              />
            </div>
          </Carousel>
        </div>

        {/* Desktop: Unified Layout with Equal Sized Cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <Link href="/proizvodi" key={product.id} className="block group">
                <Card
                  className="overflow-hidden rounded-2xl border border-border/50 bg-card/90 backdrop-blur
                             h-full flex flex-col shadow-lg hover:shadow-2xl hover:border-primary/40
                             transition-all duration-700 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="relative aspect-4/3 overflow-hidden"> 
                    <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
        {/* All Products Button */}
        <div className="flex justify-center my-16" data-aos="fade-up">
          <Link
            href="/proizvodi"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Svi proizvodi
            <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}