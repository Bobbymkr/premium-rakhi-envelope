import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    const message = "Hi! I want to order Premium Rakhi Envelopes. Can you help me?";
    const phoneNumber = "918888888888"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-premium">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,194,194,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-accent-gold rounded-full opacity-20" />
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-lavender rounded-full opacity-30" style={{ animationDelay: '1s' }} />
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-rose-gold rounded-full opacity-25" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-6 h-6 text-accent-gold mr-2" />
              <span className="text-sm font-medium text-foreground/80 tracking-wide">
                PREMIUM COLLECTION 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Kyun Na Iss Baar
              </span>
              <br />
              <span className="text-foreground">
                Kuch Anokha Ho Jaye?
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl">
              Not Just an Envelope. It's a Feeling. Celebrate bonds with style 
              and make this Raksha-Bandhan unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsAppOrder}
                size="lg"
                className="btn-primary group"
              >
                Order via WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-glass"
              >
                View Collection
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold rounded-full" />
                <span>Handcrafted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold rounded-full" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold rounded-full" />
                <span>Loved by Hundreds</span>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative">
            <div className="relative z-10 perspective-1000">
              <div className="card-glass p-8 transform hover:rotate-y-5 transition-transform duration-700">
                <img 
                  src="/lovable-uploads/94f2d63c-1e9d-406e-8c4a-49954e2871cc.png"
                  alt="Premium Rakhi Envelope - Happy Raksha Bandhan"
                  className="w-full h-auto rounded-lg shadow-glow"
                />
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="absolute -bottom-10 -right-10 transform rotate-12 opacity-80">
              <img 
                src="/lovable-uploads/ad33bffe-0129-489e-b9a8-c59b3fe83d66.png"
                alt="Premium Rakhi Envelope Design"
                className="w-32 h-auto rounded-lg shadow-soft"
              />
            </div>
            
            <div className="absolute -top-5 -left-5 transform -rotate-6 opacity-60">
              <img 
                src="/lovable-uploads/226c6185-a72f-4586-b299-69638902e829.png"
                alt="Premium Rakhi Envelope in Hand"
                className="w-24 h-auto rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;