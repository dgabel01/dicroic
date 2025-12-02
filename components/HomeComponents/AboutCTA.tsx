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
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Intro */}
        <div className="text-center mb-16 lg:mb-20">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            data-aos="fade-up"
          >
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              DICROIC d.o.o.
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground max-w-5xl mx-auto leading-relaxed italic"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Osnovani 1993. u Splitu. Specijalizirani za <span className="font-bold">„ključ u ruke“</span> projektiranje,
            isporuku i ugradnju <strong>tonskih, video, LED, rasvjetnih i multimedijalnih sustava</strong>.
          </p>
        </div>

        {/* Cards – perfectly balanced on tablet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/95 backdrop-blur 
                         hover:shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2
                         flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={i * 150 + 300}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col flex-1">
                {/* Header – smaller, cleaner icon */}
                <div className="flex items-center gap-3 mb-5">
                  {/* Smaller icon container */}
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-red-600 to-red-700 shadow-md shrink-0">
                    <card.icon className="w-5 h-5 text-white" /> 
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  {card.text ? (
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {card.text}
                    </p>
                  ) : (
                    <ul className="space-y-2.5 text-muted-foreground text-sm sm:text-base">
                      {card.items?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Button */}
                <Button
                  asChild
                  size="lg"
                  className="mt-auto w-full bg-primary hover:bg-primary/90 font-bold text-base py-6"
                >
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