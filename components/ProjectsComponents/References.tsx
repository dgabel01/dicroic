"use client";
import * as React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { referencesData, categoryIcons, type CategoryKey } from "@/lib/references-data";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function References() {
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryKey>("Projekti");
  const [isOpen, setIsOpen] = React.useState(false);

  // Mobile carousel state
  const [mobileApi, setMobileApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const currentProjects = referencesData[selectedCategory];

  // Sync selected index with carousel
  React.useEffect(() => {
    if (!mobileApi) return;

    const onSelect = () => {
      setSelectedIndex(mobileApi.selectedScrollSnap());
    };

    onSelect();
    mobileApi.on("select", onSelect);
    mobileApi.on("reInit", onSelect);

    return () => {
      mobileApi.off("select", onSelect);
      mobileApi.off("reInit", onSelect);
    };
  }, [mobileApi]);

  // Reset to first slide when category changes
  React.useEffect(() => {
    setSelectedIndex(0);
    mobileApi?.scrollTo(0);
  }, [selectedCategory, mobileApi]);

  const Icon = categoryIcons[selectedCategory];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center justify-center gap-4" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Reference
            </span>
            <div className="h-1 w-20 bg-red-600 rounded-full mx-auto mt-6" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Više od 30 godina iskustva u najzahtjevnijim audio-video projektima u Hrvatskoj i regiji
          </p>
        </div>

        {/* Dropdown Selector */}
        <div className="max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between rounded-2xl sm:rounded-3xl border border-border/50 bg-card/95 backdrop-blur px-6 sm:px-6 md:px-10 py-6 sm:py-6 md:py-8 text-left shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl hover:border-primary/40 transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 sm:gap-4 md:gap-6 flex-1">
              {Icon && <Icon className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary shrink-0" />}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-black text-red-600 truncate">
                  {selectedCategory}
                </h3>
                <p className="text-base mt-2 sm:text-base md:text-lg text-muted-foreground">
                  Realiziranih projekata: {currentProjects.length}
                </p>
              </div>
              <ChevronDown className={`w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 text-muted-foreground transition-transform duration-300 group-hover:scale-110 shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

          {isOpen && (
            <div className="mt-4 rounded-3xl border border-border/50 bg-card/95 backdrop-blur shadow-3xl overflow-hidden">
              {(Object.keys(referencesData) as CategoryKey[]).map((cat) => {
                const CatIcon = categoryIcons[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-6 px-10 py-6 text-left transition-all hover:bg-primary/5 ${selectedCategory === cat ? "bg-primary/10" : ""}`}
                  >
                    {CatIcon && <CatIcon className={`w-8 h-8 ${selectedCategory === cat ? "text-primary" : "text-muted-foreground"}`} />}
                    <div>
                      <p className={`text-xl font-bold ${selectedCategory === cat ? "text-primary" : "text-foreground"}`}>
                        {cat}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {referencesData[cat].length} projekata
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile: Carousel with Arrows + Counter (fixed!) */}
        <div className="block md:hidden" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            setApi={setMobileApi}
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {currentProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-[90%]">
                  <div className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur p-6 shadow-md hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500">
                    <span className="text-2xl mt-0.5 text-primary/80">•</span>
                    <p className="text-lg font-semibold leading-relaxed text-foreground/90 group-hover:text-foreground">
                      {project}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows + Counter – now correctly inside Carousel */}
            <div className="flex items-center justify-center gap-6 mt-4 pb-4">
              <CarouselPrevious className="static translate-y-0 size-9 rounded-full border border-border/50 bg-card/95 backdrop-blur shadow-md hover:shadow-lg hover:border-primary/40 transition-all" />
              <span className="text-md font-medium text-muted-foreground">
                {selectedIndex + 1} / {currentProjects.length}
              </span>
              <CarouselNext className="static translate-y-0 size-9 rounded-full border border-border/50 bg-card/95 backdrop-blur shadow-md hover:shadow-lg hover:border-primary/40 transition-all" />
            </div>
          </Carousel>
        </div>

        {/* Desktop: Original Grid */}
        <div className="hidden md:grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-aos="fade-up" data-aos-delay="200">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur p-5 shadow-md hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
            >
              <p className="text-md font-semibold leading-relaxed text-foreground/90 group-hover:text-foreground">
                • {project}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <section className="mt-36" data-aos="fade-up" data-aos-duration="2000">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-zinc-900 sm:text-5xl">
            <span className="text-5xl md:text-6xl font-black bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Spremni za vaš sljedeći projekt?
            </span>
          </h2>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary p-4 text-lg font-semibold text-white shadow-lg transition-all hover:gap-3 hover:shadow-xl mt-4"
          >
            Kontaktirajte nas danas
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </section>
  );
}