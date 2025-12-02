"use client"
import LogoSlider from "@/components/LogoSlider";
import ContactHero from "@/components/ContactComponents/ContactHero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
      // give Next.js time to render the DOM + images
      const timer = setTimeout(() => {
        AOS.refreshHard(); // refresh all elements
      }, 200); // 200ms usually enough
      return () => clearTimeout(timer);
    }, []);

  return <main>
    <ContactHero />
    <LogoSlider />
  </main>
}
export default ContactPage;