import LogoSlider from "@/components/LogoSlider";
import ContactCTA from "@/components/ContactCTA";
import ProductShowcase from "@/components/ProductComponents/ProductShowcase";
import PartnersShowcase from "@/components/ProductComponents/PartnerShowcase";


const ProductsPage = () => {

  return <main>
    <ProductShowcase />
    <PartnersShowcase />
    <LogoSlider />
    <ContactCTA />
  </main>;
}

export default ProductsPage;