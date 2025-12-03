"use client";
import Image from "next/image";

const LogoSlider = () => {
  const logos = [
    { src: "/images/auvitran_logo.png", alt: "Auvitran", link: "https://www.auvitran.com" },
    { src: "/images/barco_logo.png", alt: "Barco", link: "https://www.barco.com" },
    { src: "/images/beyer_logo.png", alt: "Beyer", link: "https://www.beyerdynamic.com" },
    { src: "/images/conrac_logo.png", alt: "Conrac", link: "https://www.conrac.de" },
    { src: "/images/eela_logo.png", alt: "EELA", link: "http://www.eela.nl" },
    { src: "/images/extron_logo.png", alt: "Extron", link: "https://www.extron.com" },
    { src: "/images/innovason_logo.png", alt: "Innovason", link: "https://www.l-acoustics.com" },
    { src: "/images/klotz_logo.png", alt: "Klotz", link: "https://www.klotz-ais.com" },
    { src: "/images/lacoustics_logo.png", alt: "L-Acoustics", link: "https://www.l-acoustics.com" },
    { src: "/images/lawo_logo.png", alt: "Lawo", link: "https://www.lawo.com" },
    { src: "/images/multidyne_logo.png", alt: "Multidyne", link: "https://www.multidyne.com" },
    { src: "/images/neumann_logo.png", alt: "Neumann", link: "https://www.neumann.com" },
    { src: "/images/orpheo_logo.png", alt: "Orpheo", link: "https://orpheogroup.com" },
    { src: "/images/picturall_logo.png", alt: "Picturall", link: "https://www.picturall.com" },
    { src: "/images/rcf_logo.png", alt: "RCF", link: "https://www.rcf.it" },
    { src: "/images/riedel_logo.png", alt: "Riedel", link: "https://www.riedel.net" },
    { src: "/images/sabine_logo.png", alt: "Sabine", link: "https://www.clearone.com/" },
    { src: "/images/schulzkabel_logo.png", alt: "Schulz Kabel", link: "https://www.schulz-kabel.de/" },
    { src: "/images/sennheiser_logo.png", alt: "Sennheiser", link: "https://www.sennheiser.com" },
    { src: "/images/vaddio_logo.png", alt: "Vaddio", link: "https://www.legrandav.com" },
  ];

  const logoSet = [...logos, ...logos, ...logos];

  return (
    <section className="pb-4 my-16" data-aos="fade-up">
      <div className="relative max-w-7xl mx-auto px-6">
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
                  <div key={`row1-${i}`} className="shrink-0 flex items-center justify-center px-4 md:px-8">
                    <a href={logo.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={180}
                        height={80}
                        className="h-8 md:h-12 w-auto object-contain opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      />
                    </a>
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
                {logoSet
                  .slice(5)
                  .concat(logoSet.slice(0, 5))
                  .map((logo, i) => (
                    <div key={`row2-${i}`} className="shrink-0 flex items-center justify-center px-4 md:px-8">
                      <a href={logo.link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={180}
                          height={80}
                          className="h-8 md:h-12 w-auto object-contain opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-linear-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-linear-to-l from-card to-transparent z-10" />
        </div>
      </div>

      <p className="text-center font-bold text-xl text-muted-foreground mt-8 italic">
        <q>Partneri i brendovi s kojima surađujemo više od 30 godina</q>
      </p>
    </section>
  );
};

export default LogoSlider;
