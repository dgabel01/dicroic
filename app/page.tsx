import HomeHero from "@/components/HomeComponents/HomeHero";
import AboutCTA from "@/components/HomeComponents/AboutCTA";
import Numbers from "@/components/HomeComponents/Numbers";
import ProductsCTA from "@/components/HomeComponents/ProductsCTA";
import LogoSlider from "@/components/LogoSlider";
import ProjectsCTA from "@/components/HomeComponents/ProjectsCTA";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <HomeHero/>
      <AboutCTA />
      <Numbers/>
      <ProductsCTA />
      <LogoSlider/>
      <ProjectsCTA/>
      <ContactCTA/>
    </main>
  );
}