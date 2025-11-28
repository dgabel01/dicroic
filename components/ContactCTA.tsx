"use client"
import {useEffect} from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ContactCTA = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="py-20 bg-linear-to-r from-cyan-800  to-cyan-500" data-aos="fade-up" data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    Imate pitanje ili želite suradnju?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                    Kontaktirajte nas i naš tim će Vam brzo odgovoriti te pružiti detaljne informacije o našim projektima i uslugama.
                </p>

                <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                >
                    Kontaktirajte nas
                    <ArrowRightIcon className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default ContactCTA;
