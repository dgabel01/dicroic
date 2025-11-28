"use client"
import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InformationCircleIcon, FolderIcon, CubeIcon } from "@heroicons/react/24/outline"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutCTA() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])
    return (
        <section className="py-4 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-10" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-2xl md:text-3xl  font-extrabold mb-8 bg-linear-to-r from-red-700 via-red-500 to-white bg-clip-text text-transparent">
                        DICROIC d.o.o.
                    </h2>
                    <p className="text-2xl font-extrabold  leading-relaxed italic">
                        &quot;DICROIC d.o.o. je osnovan 1993 godine u Splitu. Od samoga početka aktivni smo na
                        teritoriju hrvatske i Bosne i Hercegovine. Naša specijalnost je stručna suradnja,
                        projektiranje, isporuka i izvođenje radova po sistemu &quot;ključ u ruke&quot; tonskih, video,
                        LED, rasvjetnih i multimedijalnih tehnoloških sustava&quot;.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-14 md:gap-24" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <Card className="flex flex-col flex-1 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <InformationCircleIcon className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle>O NAMA</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grow">
                            <p className="text-md  mb-2 leading-relaxed">
                                Naglašavamo višegodišnju suradnju sa vodećim projektantskim uredima na projektiranju tehnoloških sustava kazališta, RTV, tonskih i video postprodukcijskih studija, konferencijskih i kongresnih centara, prosvjetnih ustanova, medicinskih sustava, sportskih dvorana i ugostiteljskih objekata.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Link href="/o-nama" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                                Više o nama
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col flex-1 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <FolderIcon className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle>PROJEKTI</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grow">
                            <p className="mb-3 text-md ">Ističemo rad na raznim tipovima projekata u više regija, poput:
                            </p>
                            <ul className="text-md  space-y-1">
                                <li>• raznih institucija</li>
                                <li>• hotela</li>
                                <li>• kazališta</li>
                                <li>• sakralnih objekata</li>
                                <li>• opreme za klubove</li>
                                <li>...</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link href="/projekti" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                                Svi projekti
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col flex-1 shadow-lg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <CubeIcon className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle>PROIZVODI</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grow">
                            <div className="text-md  mb-2 font-semibold">Neki od proizvoda uključuju:</div>
                            <ul className="text-md  space-y-1">
                                <li>• akustične panele</li>
                                <li>• audio toolboxe</li>
                                <li>• optičke komunikacije</li>
                                <li>• robotic camera tehnologije</li>
                                <li>• digitalne projekcije</li>
                                <li>...</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link href="/proizvodi" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                                Svi proizvodi
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
