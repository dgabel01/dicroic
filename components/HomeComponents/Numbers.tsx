"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// Assuming "@/public/images/hero_1.jpg" is correct
import backgroundImage from "@/public/images/hero_1.jpg";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    // Capture the current node here
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the captured node in the cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Also cleanup the observer itself
      observer.disconnect();
    };
    // The dependency array remains empty ([]) because the effect only needs to run once.
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref} className="font-black tabular-nums">
      {count.toLocaleString("hr-HR")}
      {suffix}
    </span>
  );
};

export default function Numbers() {
  return (
    // 1. INCREASED VERTICAL PADDING: py-24 md:py-36 lg:py-48
    <section className="relative w-full py-24 md:py-36 lg:py-48 overflow-hidden" data-aos="fade-in" data-aos-duration="2000">
      {/* Background Image – now properly behind content */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Dicroic u brojkama"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content – now on top (z-index not needed, just normal flow) */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          {/* 2. INCREASED HEADER MARGIN: mb-24 md:mb-32 lg:mb-40 */}
          <div className="text-center mb-24 md:mb-32 lg:mb-40" data-aos="fade-up">
            <h2 className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="bg-linear-to-l from-red-200 via-red-300 to-red-500 bg-clip-text text-transparent">
                Dicroic u brojkama
              </span>
            </h2>
            <div className="h-1.5 w-32 bg-red-600 rounded-full mx-auto mt-8" />
          </div>

          {/* Numbers Grid */}
          {/* 3. INCREASED GRID GAP ON LARGE SCREENS: xl:gap-36 */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 xl:gap-36 max-w-7xl mx-auto">

            {/* --- Example Counter Block --- */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              {/* 4. REDUCED NUMBER FONT SIZE ON XL: xl:text-7xl */}
              <div className="text-6xl xs:text-7xl md:text-8xl lg:text-7xl xl:text-7xl font-black text-red-500 leading-tight">
                <Counter end={30} suffix="+" />
              </div>
              {/* 5. REDUCED DESCRIPTION FONT SIZE ON XL: xl:text-xl */}
              <p className="mt-6 text-xl md:text-2xl lg:text-xl xl:text-xl font-bold text-gray-200">
                godina iskustva
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-6xl xs:text-7xl md:text-8xl lg:text-7xl xl:text-7xl font-black text-red-500 leading-tight">
                <Counter end={1000} suffix="+" />
              </div>
              <p className="mt-6 text-xl md:text-2xl lg:text-xl xl:text-xl font-bold text-gray-200">
                završenih projekata
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-6xl xs:text-7xl md:text-8xl lg:text-7xl xl:text-7xl font-black text-red-500 leading-tight">
                <Counter end={3000} suffix="+" />
              </div>
              <p className="mt-6 text-xl md:text-2xl lg:text-xl xl:text-xl font-bold text-gray-200">
                zadovoljnih klijenata
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="text-6xl xs:text-7xl md:text-8xl lg:text-7xl xl:text-7xl font-black text-red-500 leading-tight">
                <Counter end={10} suffix="+" />
              </div>
              <p className="mt-6 text-xl md:text-2xl lg:text-xl xl:text-xl font-bold text-gray-200">
                zemalja u regiji
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}