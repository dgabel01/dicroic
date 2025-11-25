'use client';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/constants/routes';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
            <div className="container mx-auto px-6 md:px-12">
                {/* Main Footer Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-16">

                    {/* LEFT: Logo + Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="flex items-center gap-4 mb-6 group">
                            <Image
                                src="/images/logo.jpg"
                                alt="Dicroic Logo"
                                width={180}
                                height={60}
                                priority
                                className="h-12 w-auto sm:h-14 lg:h-16 transition-all duration-300 group-hover:scale-105 rounded-2xl"
                            />
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Dicroic d.o.o.
                            </span>
                        </Link>

                        {/* Clear, modern tagline layout */}
                        <div className="space-y-1 text-sm">
                            <p className="text-sm font-bold text-gray-200 uppercase tracking-widest mb-2">
                                Audio • Video • Multimedia
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-md text-primary font-semibold">
                                <span className=" text-gray-200 rounded-full ">
                                    Integrator
                                </span>
                                <span className="text-gray-200 ">→</span>
                                <span className="text-gray-200  rounded-full">
                                    Distributor
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 mt-4">
                            © {currentYear} Dicroic d.o.o. Sva prava zadržana.
                        </p>
                    </div>

                    {/* CENTER: Navigacija */}
                    <div className="flex flex-col items-center flex-1">
                        <h3 className="text-md font-semibold text-white mb-5">Navigacija</h3>
                        <ul className="flex flex-col items-center space-y-3">
                            {routes.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Back to Top */}
                    <div className="flex flex-col items-center md:items-end">
                        <button
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                            aria-label="Povratak na vrh"
                        >
                            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-primary transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                            <span className="text-sm whitespace-nowrap">Povratak na vrh</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}