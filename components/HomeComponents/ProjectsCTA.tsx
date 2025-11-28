"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

const projects = [
    {
        title: "Međugorje",
        description: [
            "Sustav ozvučenja prostora vanjskog oltara",
            "Novi sustav ozvučenja Crkve Sv. Jakova u Međugorju",
        ],
        images: [
            "/images/medugorje_home_1.jpg",
            "/images/medugorje_home_2.jpg",
            "/images/medugorje_home_3.jpg",
        ],
    },
    {
        title: "Radio Mir Međugorje",
        description: [
            "Implementacija audio-video opreme za potrebe radijskog studija.",
        ],
        images: [
            "/images/radio_mir_1.jpg",
            "/images/radio_mir_2.jpg",
            "/images/radio_mir_3.jpg",

        ],
    },
    {
        title: "Hotel Lone - Rovinj",
        description: [
            "Pušten u rad audio-video-multimedijalni sustav hotela Lone u Rovinju.",
            "Hotel Lone predstavlja srce konferencijske ponude Maistre uz najmoderniju AV opremu.",
            "Najveća dvorana ima kapacitet od 600 mjesta, uz HD video sustav i vrhunsku obradu signala.",
        ],
        images: [
            "/images/hotel_rovinj_1.jpg",
            "/images/hotel_rovinj_2.jpg",
            "/images/hotel_rovinj_3.jpg",
        ],
    },
];

export default function ProjectsSection() {
    useEffect(() => {
        AOS.init({
           duration:1000
        });
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div
                    className="flex flex-col items-center justify-between mb-16 gap-4"
                    data-aos="fade-up"
                    data-aos-duration = "1000"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                        Naši Projekti
                    </h2>

                    <Link
                        href="/projekti"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Svi naši projekti
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>

                {/* Projects */}
                <div className="grid md:grid-cols-1 gap-24">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                            className="bg-white text-black rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Description */}
                                <ul className="space-y-2 list-disc text-lg text-gray-800">
                                    {project.description.map((d, i) => (
                                        <li key={i} className="my-2 ml-4">{d}</li>
                                    ))}
                                </ul>

                                {/* Images */}
                                <div className="space-y-6">
                                    {project.images.map((img, i) => (
                                        <div
                                            key={i}
                                            className="
                                                relative w-full aspect-video overflow-hidden rounded-xl border border-gray-300
                                                md:max-w-[80%] md:mx-auto
                                                "
                                        >
                                            <Image
                                                src={img}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="flex items-center justify-center mt-4">
                                    <Link
                                        href="/projekti"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Detalji
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
