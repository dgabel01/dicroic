"use client";
import Image from "next/image";

const LogoSlider = () => {
  const logos = [
    { src: "/images/auvitran_logo.png", alt: "Auvitran" },
    { src: "/images/barco_logo.png", alt: "Barco" },
    { src: "/images/beyer_logo.png", alt: "Beyer" },
    { src: "/images/conrac_logo.png", alt: "Conrac" },
    { src: "/images/eela_logo.png", alt: "EELA" },
    { src: "/images/extron_logo.png", alt: "Extron" },
    { src: "/images/innovason_logo.png", alt: "Innovason" },
    { src: "/images/klotz_logo.png", alt: "Klotz" },
    { src: "/images/lacoustics_logo.png", alt: "L-Acoustics" },
    { src: "/images/lawo_logo.png", alt: "Lawo" },
    { src: "/images/multidyne_logo.png", alt: "Multidyne" },
    { src: "/images/neumann_logo.png", alt: "Neumann" },
    { src: "/images/orpheo_logo.png", alt: "Orpheo" },
    { src: "/images/picturall_logo.png", alt: "Picturall" },
    { src: "/images/rcf_logo.png", alt: "RCF" },
    { src: "/images/riedel_logo.png", alt: "Riedel" },
    { src: "/images/sabine_logo.png", alt: "Sabine" },
    { src: "/images/schulzkabel_logo.png", alt: "Schulz Kabel" },
    { src: "/images/sennheiser_logo.png", alt: "Sennheiser" },
    { src: "/images/vaddio_logo.png", alt: "Vaddio" },
  ];

  const logoSet = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 my-16" data-aos="fade-up">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Elegant container with subtle border & shadow */}
        <div className="overflow-hidden">
          <style jsx>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee {
              animation: marquee linear infinite;
              will-change: transform;
              animation-timing-function: linear;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
            /* Mobile = faster, Desktop = slower & smoother */
            @media (max-width: 640px) {
              .marquee { animation-duration: 20s !important; }
            }
            @media (min-width: 641px) {
              .marquee { animation-duration: 15s; }
            }
          `}</style>

          <div className="space-y-10 py-10">
            {/* ROW 1 */}
            <div className="overflow-hidden">
              <div className="flex marquee gap-10 md:gap-16">
                {logoSet.map((logo, i) => (
                  <div
                    key={`row1-${i}`}
                    className="shrink-0 flex items-center justify-center px-4 md:px-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={80}
                      className="h-8 md:h-12 w-auto object-contain opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2 – reverse direction */}
            <div className="overflow-hidden">
              <div
                className="flex marquee gap-10 md:gap-16"
                style={{ animationDirection: "reverse", animationDuration: "15s" }}
              >
                {logoSet.slice(5).concat(logoSet.slice(0, 5)).map((logo, i) => (
                  <div
                    key={`row2-${i}`}
                    className="shrink-0 flex items-center justify-center px-4 md:px-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={80}
                      className="h-8 md:h-12 w-auto object-contain opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clean fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-card to-transparent z-10" />
        </div>
      </div>
      {/* Optional small caption below */}
        <p className="text-center font-bold text-xl text-muted-foreground mt-8 italic">
          <q>Partneri i brendovi s kojima surađujemo više od 30 godina</q>
        </p>
    </section>
  );
};

export default LogoSlider;