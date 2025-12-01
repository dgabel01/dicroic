"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BuildingOffice2Icon,
  FolderOpenIcon,
  CubeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function AboutCTA() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Intro – smooth fade-up + gradient reveal */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent inline-block">
              DICROIC d.o.o.
            </span>
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground max-w-5xl mx-auto leading-relaxed italic"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Osnovani 1993. u Splitu. Specijalizirani za <span className="font-bold">„ključ u ruke“ </span>projektiranje,
            isporuku i ugradnju <strong>tonskih, video, LED, rasvjetnih i multimedijalnih sustava</strong>.
          </p>
        </div>

        {/* Cards – staggered entrance from bottom */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: BuildingOffice2Icon,
              title: "O NAMA",
              text: "Više od 30 godina surađujemo s vodećim projektantima na najzahtjevnijim tehnološkim sustavima za kazališta, kongresne centre, hotele i sakralne objekte.",
              href: "/o-nama",
              linkText: "Više o nama",
            },
            {
              icon: FolderOpenIcon,
              title: "PROJEKTI",
              items: [
                "Hoteli i kongresni centri",
                "Kazališta i kulturne ustanove",
                "Sakralni objekti",
                "Sportski objekti",
                "Klubovi i event prostori",
              ],
              href: "/projekti",
              linkText: "Svi projekti",
            },
            {
              icon: CubeIcon,
              title: "PROIZVODI",
              items: [
                "L-Acoustics • Meyer Sound",
                "Robotic kamere • LED zidovi",
                "Digitalne miks pultove",
                "Akustične panele",
                "Optičke mreže i AVoIP",
              ],
              href: "/proizvodi",
              linkText: "Svi proizvodi",
            },
          ].map((card, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden border border-border/50 bg-card/95 backdrop-blur 
                         hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 200 + 500}   // 500ms after text, then staggered
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-linear-to-br from-red-600 to-red-700 shadow-lg">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>

                {card.text ? (
                  <p className="text-muted-foreground leading-relaxed mb-8">{card.text}</p>
                ) : (
                  <ul className="space-y-2 text-muted-foreground mb-8">
                    {card.items?.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-primary">•</span> {item}
                      </li>
                    ))}
                  </ul>
                )}

                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Link href={card.href} className="flex items-center justify-center gap-2">
                    {card.linkText}
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}