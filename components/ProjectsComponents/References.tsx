"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { referencesData, categoryIcons, type CategoryKey } from "@/lib/references-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function References() {
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryKey>("Projekti");
    const [isOpen, setIsOpen] = React.useState(false);

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
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                        Više od 30 godina iskustva u najzahtjevnijim audio-video projektima u Hrvatskoj i regiji
                    </p>
                </div>

                {/* Dropdown Selector */}
                <div className="max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between rounded-3xl border border-border/50 bg-card/95 backdrop-blur px-10 py-8 text-left shadow-2xl hover:shadow-3xl hover:border-primary/40 transition-all duration-500 group"
                    >
                        <div className="flex items-center gap-6">
                            {Icon && <Icon className="w-10 h-10 text-primary" />}
                            <div>
                                <h3 className="text-3xl font-black text-foreground">
                                    {selectedCategory}
                                </h3>
                                <p className="text-lg text-muted-foreground">
                                    {referencesData[selectedCategory].length} realiziranih projekata
                                </p>
                            </div>
                        </div>
                        <ChevronDown className={`w-8 h-8 text-muted-foreground transition-transform duration-300 group-hover:scale-110 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
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
                                        className={`w-full flex items-center gap-6 px-10 py-6 text-left transition-all hover:bg-primary/5 ${selectedCategory === cat ? "bg-primary/10" : ""
                                            }`}
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

                {/* Projects Grid */}
                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-aos="fade-up" data-aos-delay="200">
                    {referencesData[selectedCategory].map((project, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/95 backdrop-blur p-5 shadow-md hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 hover:text-lg"
                        >
                            <p className="text-md font-semibold leading-relaxed text-foreground/90 group-hover:text-foreground">
                                &#x2022; {project}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <section className="mt-36">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-4xl font-bold text-zinc-900 sm:text-5xl">
                        <span className="ext-5xl md:text-6xl  font-black mb-6 bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">Spremni za vaš sljedeći projekt?</span>
                    </h2>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 rounded-full bg-primary p-4 text-lg font-semibold text-white shadow-lg transition-all  hover:gap-3 hover:shadow-xl mt-4"
                    >
                        Kontaktirajte nas danas
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </section>
    );
}