import Hero from "@/components/HomeComponents/Hero";
import AboutCTA from "@/components/HomeComponents/AboutCTA";
import ProductsCTA from "@/components/HomeComponents/ProductsCTA";
import LogoSlider from "@/components/LogoSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutCTA />
      <ProductsCTA />
      <LogoSlider/>
    </main>
  );
}