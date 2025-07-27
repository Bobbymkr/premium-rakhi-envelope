import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    {
      src: "/lovable-uploads/d8a6a91a-fea2-4d9f-8d6b-14eb539585d1.png",
      alt: "Premium Rakhi Envelope - Happy Raksha Bandhan with Gold Foil",
      title: "Gold Foil Raksha Bandhan Design",
    },
    {
      src: "/lovable-uploads/350dacf5-a9c1-44ed-b69e-ee0b6a86251b.png",
      alt: "Premium ₹500 Note in Luxury Transparent Envelope",
      title: "Perfect for Currency Notes",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-premium-cream to-ivory">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/3 via-transparent to-rose-gold/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_30%_20%,rgba(255,215,0,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_70%_80%,rgba(218,165,32,0.03),transparent)]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-32 left-20 w-4 h-4 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-30 blur-[1px]" />
        <div
          className="floating-element absolute top-48 right-32 w-6 h-6 bg-gradient-to-br from-lavender to-accent-gold rounded-full opacity-25 blur-[2px]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="floating-element absolute bottom-40 left-1/3 w-3 h-3 bg-rose-gold rounded-full opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating-element absolute bottom-56 right-20 w-5 h-5 bg-gradient-to-br from-accent-gold to-lavender rounded-full opacity-20 blur-[1px]"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-in slide-in-from-bottom duration-1000">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <Sparkles className="w-7 h-7 text-accent-gold mr-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              <div className="absolute -inset-1 bg-accent-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-accent-gold to-luxury-bronze bg-clip-text text-transparent">
              Product Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze bg-clip-text text-transparent drop-shadow-sm">
              Luxury That Wraps
            </span>
            <br />
            <span className="text-foreground drop-shadow-sm relative">
              Your Love
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full opacity-80" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Handcrafted with premium gold foil and elegant designs. Each
            envelope is a{" "}
            <span className="bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent font-semibold">
              masterpiece
            </span>{" "}
            that makes your gift truly special.
          </p>
        </div>

        {/* Enhanced Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Carousel */}
          <div className="relative animate-in slide-in-from-left duration-1000 delay-300">
            <div
              className="relative z-10 perspective-1000 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-glass p-12 transform hover:rotate-y-1 hover:scale-105 transition-all duration-700 bg-gradient-to-br from-white/40 via-white/25 to-white/15 backdrop-blur-2xl border-2 border-white/40 shadow-2xl hover:shadow-accent-gold/40">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative">
                    <img
                      key={currentImage} // Add key for React to recognize changes
                      src={images[currentImage].src}
                      alt={images[currentImage].alt}
                      className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 shadow-2xl rounded-2xl filter group-hover:brightness-110"
                    />
                  </div>

                  {/* Enhanced Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border-2 border-accent-gold/30 rounded-full p-4 opacity-90 hover:opacity-100 hover:scale-110 hover:bg-white hover:border-accent-gold/60 transition-all duration-300 shadow-2xl z-10 group/btn"
                  >
                    <ChevronLeft className="w-6 h-6 text-foreground group-hover/btn:text-accent-gold transition-colors duration-300" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border-2 border-accent-gold/30 rounded-full p-4 opacity-90 hover:opacity-100 hover:scale-110 hover:bg-white hover:border-accent-gold/60 transition-all duration-300 shadow-2xl z-10 group/btn"
                  >
                    <ChevronRight className="w-6 h-6 text-foreground group-hover/btn:text-accent-gold transition-colors duration-300" />
                  </button>

                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/5 via-transparent to-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>

                {/* Enhanced glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold via-rose-gold to-lavender rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
              </div>

              {/* Enhanced Image indicator dots */}
              <div className="flex justify-center mt-8 gap-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImage(index);
                      setIsAutoPlay(false); // Stop auto-play when manually selecting
                      setTimeout(() => setIsAutoPlay(true), 5000); // Resume after 5 seconds
                    }}
                    className={`relative transition-all duration-300 ${
                      index === currentImage
                        ? "w-8 h-3 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full scale-110 shadow-lg"
                        : "w-3 h-3 bg-foreground/40 hover:bg-foreground/60 hover:scale-110 rounded-full"
                    }`}
                  >
                    {index === currentImage && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center mt-4">
                <div className="text-xs text-foreground/60 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {currentImage + 1} / {images.length}
                </div>
              </div>

              {/* Current image title */}
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-accent-gold to-rose-gold bg-clip-text text-transparent">
                  {images[currentImage].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Enhanced Features */}
          <div className="space-y-8 animate-in slide-in-from-right duration-1000 delay-500">
            <div className="card-glass p-8 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-rose-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Premium Gold Foil Finish
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Each envelope features luxurious gold foil typography that
                    catches light beautifully and adds an elegant premium touch.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-px bg-gradient-to-r from-accent-gold/20 via-rose-gold/20 to-lavender/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            <div className="card-glass p-8 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-gold to-lavender rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white/80 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-rose-gold group-hover:to-lavender group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Crystal Clear Design
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Transparent material with raised gold lettering creates a
                    stunning visual effect that makes your gift stand out.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-px bg-gradient-to-r from-rose-gold/20 via-lavender/20 to-accent-gold/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            <div className="card-glass p-8 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender to-accent-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-5 border-2 border-white rounded-sm bg-gradient-to-r from-accent-gold/30 to-rose-gold/30" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-lavender group-hover:to-accent-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Perfect for Gift Money
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Specially designed to hold currency notes safely while
                    showcasing them elegantly. Makes money gifting truly
                    special.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-px bg-gradient-to-r from-lavender/20 via-accent-gold/20 to-rose-gold/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
