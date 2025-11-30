'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/constants/routes';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Force-close the drawer when a link is clicked
  const closeDrawer = () => {
    const checkbox = document.getElementById('mobile-drawer') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="navbar bg-background/80 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-border/50">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Dicroic Logo"
            width={110}
            height={55}
            priority
            className="w-28 h-16 object-contain"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-6 py-3 text-base hover:text-white font-semibold rounded-xl transition-all duration-300
                  ${pathname === href
                    ? 'bg-primary text-white shadow-lg'
                    : 'hover:bg-base-200 hover:text-primary'
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
      <div className="drawer-side z-9999">
        <label htmlFor="mobile-drawer" aria-label="close menu" className="drawer-overlay" />

        <div className="min-h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <Image
              src="/images/logo.jpg"
              alt="Dicroic"
              width={140}
              height={70}
              className="object-contain"
            />
            <label
              htmlFor="mobile-drawer"
              className="btn btn-circle btn-ghost hover:bg-primary/10"
            >
              <X className="h-6 w-6" />
            </label>
          </div>

          {/* Menu Items – NOW GUARANTEED TO CLOSE */}
          <ul className="menu p-6 space-y-3 flex-1">
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