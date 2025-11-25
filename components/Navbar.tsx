'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/constants/routes';

export default function Navbar() {
    const pathname = usePathname();

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem instanceof HTMLElement) elem.blur();
    };

    return (
        <div className="navbar bg-background shadow-sm sticky top-0 z-50 text-2xl">
            {/* Logo */}
            <div className="navbar-start">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.jpg"
                        alt="Dicroic Logo"
                        width={100}
                        height={50}
                        priority
                        className="w-24 h-16"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10 text-base font-medium">
                    {routes.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`px-5 py-3 rounded-xl transition-all duration-200 font-semibold ${pathname === href
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'hover:bg-base-200'
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Spacer */}
            <div className="navbar-end lg:hidden">
                <div className="w-32 md:w-40" />
            </div>

            {/* Mobile Hamburger with Animated X */}
            <div className="navbar-end lg:hidden fixed right-4 top-4 z-50">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        {/* Animated Hamburger to X */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                className="origin-center transition-all duration-300 ease-out
                           [.dropdown[open]_&]:rotate-45 [.dropdown[open]_&]:translate-y-1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16"
                            />
                            <path
                                className="origin-center transition-all duration-300 ease-out
                           [.dropdown[open]_&]:opacity-0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 12h16"
                            />
                            <path
                                className="origin-center transition-all duration-300 ease-out
                           [.dropdown[open]_&]:-rotate-45 [.dropdown[open]_&]:-translate-y-1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 18h16"
                            />
                        </svg>
                    </label>

                    {/* Animated Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-4 shadow-2xl bg-base-100/95 backdrop-blur-lg 
                       border border-base-300 rounded-xl w-80 mt-3 z-50 gap-2
                       transition-all duration-300 ease-out"
                    >
                        {routes.map(({ href, label }) => (
                            <li key={href} onClick={handleClick}>
                                <Link
                                    href={href}
                                    className={`text-lg font-medium py-4 px-6 rounded-lg transition-all duration-200 ${pathname === href
                                        ? 'bg-primary text-white shadow-md'
                                        : 'hover:bg-primary/10 hover:text-primary active:bg-primary/20'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}