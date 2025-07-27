import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/d8a6a91a-fea2-4d9f-8d6b-14eb539585d1.png",
      alt: "Premium Rakhi Envelope - Happy Raksha Bandhan with Gold Foil",
      title: "Gold Foil Raksha Bandhan Design"
    },
    {
      src: "/lovable-uploads/350dacf5-a9c1-44ed-b69e-ee0b6a86251b.png", 
      alt: "Premium ₹500 Note in Luxury Transparent Envelope",
      title: "Perfect for Currency Notes"
    },
    {
      src: "/lovable-uploads/d8a6a91a-fea2-4d9f-8d6b-14eb539585d1.png",
      alt: "Transparent Envelope with Gold Border",
      title: "Luxury Transparent Design"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-accent-gold mr-2" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              PRODUCT SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Luxury That Wraps
            </span>
            <br />
            <span className="text-foreground">Your Love</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Handcrafted with premium gold foil and elegant designs. Each envelope 
            is a masterpiece that makes your gift truly special.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="card-glass p-8 perspective-1000">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500 shadow-glow"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 btn-glass p-2 opacity-80 hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 btn-glass p-2 opacity-80 hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 mt-6 justify-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index 
                      ? 'border-accent-gold shadow-glow' 
                      : 'border-white/20 opacity-60 hover:opacity-80'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Premium Gold Foil Finish
              </h3>
              <p className="text-foreground/70">
                Each envelope features luxurious gold foil typography that catches 
                light beautifully and adds an elegant premium touch.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Crystal Clear Design
              </h3>
              <p className="text-foreground/70">
                Transparent material with raised gold lettering creates a stunning 
                visual effect that makes your gift stand out.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Perfect for Gift Money
              </h3>
              <p className="text-foreground/70">
                Specially designed to hold currency notes safely while showcasing 
                them elegantly. Makes money gifting truly special.
              </p>
            </div>

            <Button className="btn-primary w-full">
              Order Your Premium Set
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;