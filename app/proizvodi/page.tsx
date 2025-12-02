"use client"
import LogoSlider from "@/components/LogoSlider";
import ContactCTA from "@/components/ContactCTA";
import ProductShowcase from "@/components/ProductComponents/ProductShowcase";
import PartnersShowcase from "@/components/ProductComponents/PartnerShowcase";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsPage = () => {
  useEffect(() => {
      // give Next.js time to render the DOM + images
      const timer = setTimeout(() => {
        AOS.refreshHard(); // refresh all elements
      }, 200); // 200ms usually enough
      return () => clearTimeout(timer);
    }, []);
    
  return <main>
    <ProductShowcase />
    <PartnersShowcase />
    <LogoSlider />
    <ContactCTA />
  </main>;
}

export default ProductsPage;