"use client";

import { useEffect } from "react";
import AboutHero from "@/components/AboutComponents/AboutHero";
import LogoSlider from "@/components/LogoSlider";
import ContactCTA from "@/components/ContactCTA";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    // give Next.js time to render the DOM + images
    const timer = setTimeout(() => {
      AOS.refreshHard(); // refresh all elements
    }, 200); // 200ms usually enough
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AboutHero />
      <LogoSlider />
      <div className="my-24"></div>
      <ContactCTA />
    </main>
  );
};

export default AboutPage;
