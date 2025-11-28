"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"

//TODO:upscale + logo links

const LogoSlider = () => {
    useEffect(() => {
            AOS.init({
                duration:1000,
                once: true,
            });
        }, []);

    const logos = [
        { src: "/images/auvitran_logo.png", alt: "Auvitran" },
        { src: "/images/barco_logo.png", alt: "Barco" },
        { src: "/images/beyer_logo.png", alt: "Beyer" },
        { src: "/images/conrac_logo.png", alt: "Conrac" },
        { src: "/images/eela_logo.png", alt: "EELA" },
        { src: "/images/extron_logo.png", alt: "Extron" },
        { src: "/images/innovason_logo.png", alt: "Innovason" },
        { src: "/images/klotz_logo.png", alt: "Klotz" },
        { src: "/images/lacoustics_logo.png", alt: "L-Acoustics" },
        { src: "/images/lawo_logo.png", alt: "Lawo" },
        { src: "/images/multidyne_logo.png", alt: "Multidyne" },
        { src: "/images/neumann_logo.png", alt: "Neumann" },
        { src: "/images/orpheo_logo.png", alt: "Orpheo" },
        { src: "/images/picturall_logo.png", alt: "Picturall" },
        { src: "/images/rcf_logo.png", alt: "RCF" },
        { src: "/images/riedel_logo.png", alt: "Riedel" },
        { src: "/images/sabine_logo.png", alt: "Sabine" },
        { src: "/images/schulzkabel_logo.png", alt: "Schulz Kabel" },
        { src: "/images/sennheiser_logo.png", alt: "Sennheiser" },
        { src: "/images/vaddio_logo.png", alt: "Vaddio" },
    ]

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos]

    return (
        <section className="py-12 mt-24 text-foreground bg-transparent overflow-hidden border rounded-xl shadow-md" data-aos="fade-up" data-aos-duration="1000"> 
            <div className="container mx-auto">
                {/* Infinite Slider Container */}
                <div className="relative overflow-hidden">
                    <style>{`
                        @keyframes scroll-left {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        
                        .logo-slider-track {
                            display: flex;
                            animation: scroll-left 10s linear infinite;
                            gap: 50px;
                        }
                        
                        .logo-slider-track:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="logo-slider-track">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="shrink-0 h-10 md:h-12 lg:h-14 flex items-center justify-center"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={120}
                                    className="h-full w-auto object-contain rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoSlider