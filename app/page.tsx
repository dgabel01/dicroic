import Hero from "@/components/HomeComponents/Hero";
import AboutCTA from "@/components/HomeComponents/AboutCTA";
import ProductsCTA from "@/components/HomeComponents/ProductsCTA";
import LogoSlider from "@/components/LogoSlider";
import ProjectsCTA from "@/components/HomeComponents/ProjectsCTA";
import ContactCTA from "@/components/ContactCTA";


//TODO:AOS DURATION HOME PAGE
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutCTA />
      <ProductsCTA />
      <LogoSlider/>
      <ProjectsCTA/>
      <ContactCTA/>
    </main>
  );
}