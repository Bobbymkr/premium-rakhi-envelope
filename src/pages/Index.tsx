import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import PricingSection from "@/components/pricing-section";
import HowItWorks from "@/components/how-it-works";
import FloatingWhatsApp from "@/components/floating-whatsapp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-premium">
      <HeroSection />
      <ProductShowcase />
      <PricingSection />
      <HowItWorks />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
