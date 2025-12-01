"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import * as React from "react";

const allProjects = [
    {
        title: "Međugorje - Vanjski oltar i Crkva Sv. Jakova",
        category: "Sakralni objekti",
        description: [
            "Potpuno novi line-array sustav ozvučenja vanjskog oltara",
            "Digitalni miks i mrežna distribucija zvuka u crkvi",
            "Integracija s postojećim video i rasvjetnim sustavima",
        ],
        images: ["/images/medugorje_home_1.jpg", "/images/medugorje_home_2.jpg", "/images/medugorje_home_3.jpg"],
        featured: true,
    },
    {
        title: "Radio Mir Međugorje",
        category: "Mediji i broadcasting",
        description: [
            "Kompletan broadcast studio: mikrofoni, mikser, monitoring",
            "Video produkcija i streaming infrastruktura",
            "Akustička obrada prostora",
        ],
        images: ["/images/radio_mir_1.jpg", "/images/radio_mir_2.jpg", "/images/radio_mir_3.jpg"],
        featured: true,
    },
    {
        title: "Hotel Lone - Rovinj",
        category: "Hoteli i kongresni centri",
        description: [
            "Multimedijalni sustav za 600 mjesta",
            "LED zidovi, projekcije, konferencijski mikrofoni",
            "Centralizirano upravljanje svim dvoranama",
        ],
        images: ["/images/hotel_rovinj_1.jpg", "/images/hotel_rovinj_2.jpg", "/images/hotel_rovinj_3.jpg"],
        featured: true,
    },
    {
        title: "1st L'acoustics system KARA in Slovenia",
        category: "Projekti",
        description: [
            "Prvi KARA L'acoustics sistem u Sloveniji.",
            "Kompletan sistem ima 36x KARA, 8x SB 28 (cardio mode), 2x 108P, 2x 112 i 12x 115HiQ za monitore.",
            "Cijeli zvučnički sutav spojen je na LA8 pojačala.",
        ],
        images: ["/images/kara_1.jpg", "/images/kara_2.jpg", "/images/kara_3.jpg"],
        featured: true,
    },

];

export default function ProjectsHero() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(1);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        setCount(api.scrollSnapList().length);
        onSelect(); // initial
        api.on("select", onSelect);

        return (): void => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <>
            {/* Hero */}
            <section className="px-6 py-24 lg:px-8" data-aos="fade-up" data-aos-duration="2000">
                <div className="mx-auto max-w-4xl text-center flex flex-col items-center justify-center gap-4">
                    <h2>
                        <span className="text-5xl md:text-6xl  font-black mb-6 bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                            Naši projekti
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-zinc-600 sm:text-xl">
                        Pregledajte najzahtjevnije audio-video i multimedijalne sustave koje smo
                        realizirali diljem regije.
                    </p>
                </div>
            </section>

            {/* Carousel + Controls + Counter */}
            <div className="relative space-y-6 px-6 pb-16 lg:px-8" data-aos="fade-up" data-aos-duration="2000">
                <Carousel
                    setApi={setApi}
                    opts={{ loop: true }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="mx-auto w-full max-w-7xl"
                >
                    <CarouselContent>
                        {allProjects.map((project, index) => (
                            <CarouselItem key={index}>
                                <Card className="border-zinc-200 bg-white shadow-lg">
                                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                        {/* Image side with nested carousel */}
                                        <div className="relative">
                                            <Carousel opts={{ loop: true }} className="w-full">
                                                <CarouselContent>
                                                    {project.images.map((img, i) => (
                                                        <CarouselItem key={i}>
                                                            <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-zinc-100">
                                                                <Image
                                                                    src={img}
                                                                    alt={`${project.title} ${i + 1}`}
                                                                    fill
                                                                    className="object-cover"
                                                                    unoptimized
                                                                />
                                                            </div>
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>
                                                <CarouselPrevious className="left-4 border-2  bg-white " />
                                                <CarouselNext className="right-4 border-2  bg-white" />
                                            </Carousel>

                                            {project.featured && (
                                                <div className="absolute left-4 top-4 z-10 rounded-full  px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                                                    ISTAKNUTI PROJEKT
                                                </div>
                                            )}
                                        </div>

                                        {/* Text side */}
                                        <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12">
                                            <div>
                                                <div className="mb-3 text-md font-bold uppercase tracking-wider ">
                                                    {project.category}
                                                </div>
                                                <h3 className="mb-6 text-3xl font-bold bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent lg:text-4xl">
                                                    {project.title}
                                                </h3>
                                                <ul className="space-y-3 text-zinc-700">
                                                    {project.description.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 bullet-point">
                                                            <span className="text-primary ">▸</span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
                                                <span className="font-semibold text-zinc-900">Tehnologije:</span>
                                                <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                                                    L-Acoustics
                                                </span>
                                                <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                                                    Dante
                                                </span>
                                                <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                                                    LED Wall
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Controls + Counter */}
                    <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-8 px-4">
                        <CarouselPrevious className="static translate-y-0 border-2  bg-white " />

                        <div className="flex items-center gap-2 text-xl font-semibold text-zinc-900 ">
                            <span className="text-red-600">Projekt</span>
                            <span className="text-red-600">{current}</span>
                            <span className="text-zinc-400">/</span>
                            <span className="text-zinc-500">{count}</span>
                        </div>

                        <CarouselNext className="static translate-y-0 border-2  bg-white " />
                    </div>
                </Carousel>
            </div>
        </>
    );
}