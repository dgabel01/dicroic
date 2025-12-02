import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/10 to-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center">

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight mb-8">
          <span className="bg-linear-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stranica nije pronađena
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          Žao nam je, stranica koju tražite ne postoji ili je privremeno nedostupna.
          Možda ste unijeli pogrešnu adresu ili je stranica premještena.        </p>

        <Button
          asChild
          size="lg"
          className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Link href="/">
            Povratak na početnu
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </Button>

        {/* Responsive navigation links */}
        <div className="mt-10 text-muted-foreground">
          <p className="text-xl mb-3 sm:mb-4">Ili posjetite:</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-md font-bold text-lg">
            <Link
              href="/projekti"
              className="text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80"
            >
              Projekti
            </Link>
            <Link
              href="/proizvodi"
              className="text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80"
            >
              Proizvodi
            </Link>
            <Link
              href="/kontakt"
              className="text-primary hover:underline underline-offset-4 transition-all hover:text-primary/80"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}