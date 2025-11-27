import AboutHero from "@/components/AboutComponents/AboutHero";
import LogoSlider from "@/components/LogoSlider";
import ContactCTA from "@/components/ContactCTA";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <LogoSlider />
      <div className="my-24"></div>
      <ContactCTA />
    </main>
  );
}
  export default AboutPage;