"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((img, i) => (
          <CarouselItem key={i}>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
              <Image
                src={img}
                alt={`${title} - slika ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-800 group-hover:bg-black/20" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-xl border" />
      <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-xl border" />
    </Carousel>
  );
}

const projects = [
  {
    title: "Međugorje",
    description: [
      "Sustav ozvučenja prostora vanjskog oltara",
      "Novi sustav ozvučenja Crkve Sv. Jakova u Međugorju",
    ],
    images: ["/images/medugorje_home_1.jpg", "/images/medugorje_home_2.jpg", "/images/medugorje_home_3.jpg"],
  },
  {
    title: "Radio Mir Međugorje",
    description: ["Implementacija audio-video opreme za potrebe radijskog studija."],
    images: ["/images/radio_mir_1.jpg", "/images/radio_mir_2.jpg", "/images/radio_mir_3.jpg"],
  },
  {
    title: "Hotel Lone - Rovinj",
    description: [
      "Pušten u rad audio-video-multimedijalni sustav hotela Lone u Rovinju.",
      "Hotel Lone predstavlja srce konferencijske ponude Maistre uz najmoderniju AV opremu.",
      "Najveća dvorana ima kapacitet od 600 mjesta, uz HD video sustav i vrhunsku obradu signala.",
    ],
    images: ["/images/hotel_rovinj_1.jpg", "/images/hotel_rovinj_2.jpg", "/images/hotel_rovinj_3.jpg"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Naši Projekti
            </span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Preko 30 godina realiziramo najzahtjevnije audio-video i multimedijalne sustave u regiji.
          </p>
        </div>

        <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <Link
            href="/projekti"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Svi projekti
            <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-20 lg:gap-28">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-3xl border border-border/50 bg-card/95 backdrop-blur
                         shadow-2xl hover:shadow-3xl hover:border-primary/30
                         /* Ultra-smooth hover lift */
                         transition-all duration-800 ease-out hover:-translate-y-3 p-0"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Gentle glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800" />

              <div className="relative">
                {/* Carousel - always on top */}
                <div className="relative">
                  <ProjectCarousel images={project.images} title={project.title} />
                </div>

                {/* Text Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-black mb-8 bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <ul className="space-y-4 text-lg text-muted-foreground mb-10">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-primary ">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* FIXED: Fully clickable button */}
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/projekti" className="flex items-center justify-center gap-3 text-lg font-semibold">
                      Detalji projekta
                      <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}