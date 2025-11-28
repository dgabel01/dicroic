"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import AOS from "aos"
import "aos/dist/aos.css"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

      useEffect(() => {
            AOS.init({ 
                duration: 1000,
                once: true
    
            })
        }, [])

   
    const heroImages = [
        { src: "/images/barco_hero.jpg", alt: "Barco" },
        { src: "/images/dicroic_hero.jpg", alt: "Dicroic" },
        { src: "/images/eclipse_hero.jpg", alt: "Eclipse" },
        { src: "/images/hajduk_hero.jpg", alt: "Hajduk" },
        { src: "/images/jocavi_hero.jpg", alt: "Jocavi" },
        { src: "/images/kiva_hero.jpg", alt: "Kiva" },
        { src: "/images/lacoustics_hero.jpg", alt: "L-Acoustics" },
        { src: "/images/riedel_hero.jpg", alt: "Riedel" },
        { src: "/images/riedel2_hero_up.jpg", alt: "Riedel 2" },
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            data-aos ="fade-up"
            data-aos-duration="1000"
        >
            <CarouselContent>
                {heroImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-full pl-0">
                        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-112 xl:h-128">
                            
                            {/*Povisit visinu slike na mobile */}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-contain object-center rounded-xl"
                                priority={index === 0}
                                sizes="100vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:left-0 size-6 md:size-9 lg:size-10" />
            <CarouselNext className="right-2 lg:right-0 size-6 md:size-9 lg:size-10" />
        </Carousel>
    )
}
