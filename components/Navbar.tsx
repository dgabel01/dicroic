'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/constants/routes';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const closeDrawer = () => {
    const checkbox = document.getElementById('mobile-drawer') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  const isHome = pathname === '/';

  return (
    <div className="navbar bg-background/80 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-border/50">
      {/* Logo + Home indicator */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center group relative">
          <Image
            src="/images/logo_no_bg.png"
            alt="Dicroic Logo"
            width={110}
            height={55}
            priority
            className="w-28 h-16 object-contain transition-transform group-hover:scale-105 duration-300"
          />
          {/* Subtle "Home" glow only on homepage */}
          {isHome && (
            <div className="absolute -inset-2  rounded-full" />
          )}
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          {/* Special Home button – always first */}
          <li>
            {/* Special Home button – always first */}
            {!isHome && (

              <Link
                href="/"
                className={`relative flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300
        hover:bg-primary/10 hover:text-primary
      `}
              >
                <Home className="w-5 h-5" />
                Početna
              </Link>

            )}
          </li>

          {/* Other routes */}
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300
                  ${pathname === href
                    ? 'bg-primary text-white shadow-lg'
                    : 'hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Trigger */}
      <div className="navbar-end lg:hidden">
        <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
          <Menu className="h-7 w-7" />
        </label>
      </div>

      {/* Mobile Drawer */}
      <input type="checkbox" id="mobile-drawer" className="drawer-toggle" />
      <div className="drawer-side z-50">
        <label htmlFor="mobile-drawer" aria-label="close menu" className="drawer-overlay" />

        <div className="min-h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <Image
              src="/images/logo_no_bg.png"
              alt="Dicroic"
              width={140}
              height={70}
              className="object-contain"
            />
            <label htmlFor="mobile-drawer" className="btn btn-circle btn-ghost hover:bg-primary/10">
              <X className="h-6 w-6" />
            </label>
          </div>

          {/* Mobile Menu – Home first with icon */}
          <ul className="menu p-6 space-y-3 flex-1">
            {/* Homepage item */}
            {!isHome && (
              <li>
                <Link
                  href="/"
                  onClick={closeDrawer}
                  className="flex items-center gap-4 w-full py-5 px-6 text-xl font-bold rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  <Home className="w-6 h-6" />
                  Početna
                </Link>
              </li>
            )}
            {/* Other routes */}
            {routes.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeDrawer}
                  className={`block w-full py-5 px-6 text-xl font-semibold rounded-xl transition-all duration-300 text-left
                    ${pathname === href
                      ? 'bg-primary text-white shadow-lg'
                      : 'hover:bg-primary/10 hover:text-primary active:bg-primary/20'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="p-6 border-t border-border/30 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DICROIC d.o.o. • Split
          </div>
        </div>
      </div>
    </div>
  );
}