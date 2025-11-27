"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import isoImage from "@/public/images/iso-90001.jpg";
import heroImage from "@/public/images/dicroic_hero.jpg";

const services = [
    {
        title: "PROFESIONALNA RASVJETA",
        items: [
            "scenska rasvjeta",
            "inteligentna rasvjeta kao scanner-i, moving head-ovi, laser-i i sl.",
            "sustavi upravljanja scenskom rasvjetom",
        ],
    },
    {
        title: "OZVUČENJA",
        items: [
            "koncertna ozvučenja",
            "ozvučenja disco klubova, noćnih barova, kabarea, restorana, i sl.",
            "ozvučenja hotela, robnih kuća, prodajnih centara, i sl.",
            "veliki sustavi ozvučenja",
        ],
    },
    {
        title: "KONGRESNI SUSTAVI",
        items: [
            "video konferencije",
            "video i multimedijalne aplikacije",
            "sustavi simultanog prevođenja",
            "video i tonski sustavi - snimanja",
            "konferencijski sustavi",
        ],
    },
    { title: "TV I RADIO POSTAJE", items: ["tehnološki sustavi 'ključ u ruke'"] },
    { title: "KAZALIŠTA", items: ["kompletni tehnološki sustavi"] },
    { title: "SAKRALNI OBJEKTI", items: [] },
    { title: "VIDEO LED SUSTAVI", items: ["kompletna rješenja u LED tehnologiji"] },
    { title: "KOMUNIKACIJSKI SUSTAVI", items: [] },
];

const AboutHero = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <section>
            {/* Hero Image */}
            <div data-aos="fade-in" data-aos-duration="2000">
                <Image
                    src={heroImage}
                    alt="About Hero Background"
                    className="w-full object-contain object-center mb-12"
                    width={400}
                    height={300}
                />
            </div>

            <div className="max-w-7xl mx-auto p-6 md:p-8">

                {/* Main intro + ISO image */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-16 gap-8">

                    {/* TEXT COLUMN */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="flex-1 text-gray-800 space-y-4 leading-relaxed text-base md:text-lg"
                    >
                        <h1 className="text-2xl md:text-3xl font-extrabold mb-4 bg-linear-to-r from-red-700 via-red-500 to-white bg-clip-text text-transparent">
                            DICROIC d.o.o.
                        </h1>

                        <p>
                            <span className="font-semibold">DICROIC d.o.o.</span> je osnovan{" "}
                            <span className="font-semibold text-red-600">1993 godine</span> u Splitu.
                            Od samoga početka aktivni smo na teritoriju Hrvatske i Bosne i Hercegovine.
                            Naša specijalnost je{" "}
                            <span className="font-semibold">stručna suradnja, projektiranje, isporuka i izvođenje radova</span>{" "}
                            po sistemu <span className="italic">&apos;ključ u ruke&apos;</span><span className="mx-1"></span>
                            tonskih, video, LED, rasvjetnih i multimedijalnih tehnoloških sustava.
                        </p>

                        <p>
                            Naglašavamo <span className="font-semibold">višegodišnju suradnju</span> sa{" "}
                            <span className="font-semibold">vodećim projektantskim uredima</span> na projektiranju
                            tehnoloških sustava{" "}
                            <span className="font-semibold text-red-600">
                                kazališta, RTV, tonskih i video postprodukcijskih studija,
                                konferencijskih i kongresnih centara
                            </span>
                            , prosvjetnih ustanova, medicinskih sustava, sportskih dvorana i ugostiteljskih objekata.
                        </p>

                        <p>
                            Od strane brojnih investitora <span className="font-semibold">DICROIC d.o.o.</span> je
                            prepoznat kao tvrtka čiji su sustavi{" "}
                            <span className="font-semibold">ergonomski jednostavni za upravljanje</span> te{" "}
                            <span className="font-semibold">pouzdani i izdržljivi u radu</span>, zahvaljujući{" "}
                            <span className="italic">praktičnom i teoretskom znanju i iskusnom kadru</span>.
                            Nastojimo konstantnim usavršavanjem uvijek ponuditi{" "}
                            <span className="font-semibold text-red-600">najkvalitetnija tehnološka rješenja</span>.
                        </p>

                        <p>
                            Zastupamo niz{" "}
                            <span className="font-semibold">vrhunskih tonskih, video, LED i multimedijalnih oprema</span>{" "}
                            te svoje djelovanje širimo na sve republike bivše Jugoslavije. Danas smo među{" "}
                            <span className="font-semibold text-red-600">
                                vodećim tvrtkama u Hrvatskoj
                            </span>{" "}
                            u integraciji tonskih, video, LED i multimedijalnih sustava.
                        </p>
                    </div>

                    {/* ISO IMAGE */}
                    <div data-aos="fade-left" data-aos-duration="2000" className="shrink-0 w-48 md:w-64">
                        <Image
                            src={isoImage}
                            alt="ISO Certification"
                            className="rounded-xl shadow-lg object-contain"
                        />
                    </div>

                </div>

                {/* Subtitle */}
                <div className="flex items-center justify-center">
                    <p
                        className="text-2xl text-center mt-12 mb-16 font-bold"
                        data-aos="fade-down"
                        data-aos-duration="2000"
                    >
                        Naše djelatnosti uključuju:
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="2000"
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>

                            {service.items.length > 0 && (
                                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm md:text-base">
                                    {service.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutHero;
