import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsDesktop } from "@/components/ui/useIsDesktop";

const GiftingMoments = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const moments = [
    {
      src: "/lovable-uploads/7bf18d2b-a1cf-48ac-8f98-ec10aed6f11e.png",
      alt: "Premium gift box presentation with lavender and wrapped gifts",
      title: "Gift Box Vibes",
      description: "Perfect for premium gifting moments - pair it with your favorite wrapping style",
      hashtags: ["#GiftGoals", "#PremiumVibes", "#RakshaBandhan"]
    },
    {
      src: "/lovable-uploads/935fae02-1562-413a-ae39-4a24e3fe69de.png", 
      alt: "Traditional Raksha Bandhan setup with diyas and marigolds",
      title: "Festival Aesthetic",
      description: "Create that perfect traditional moment with diyas, flowers, and cultural vibes",
      hashtags: ["#FestivalVibes", "#Traditional", "#CulturalMoments"]
    }
  ];

  const onSelect = useCallback((embla) => {
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);
  const setApi = useCallback((embla) => {
    emblaApiRef.current = embla;
    if (embla) {
      embla.on("select", () => onSelect(embla));
      onSelect(embla);
    }
  }, [onSelect]);
  const scrollTo = (idx) => {
    if (emblaApiRef.current) emblaApiRef.current.scrollTo(idx);
  };

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  const isDesktop = useIsDesktop();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const emblaApiRef = useRef(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-accent-gold/5 via-background to-rose-gold/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender/5 via-transparent to-accent-gold/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_20%_50%,rgba(255,215,0,0.03),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_80%_20%,rgba(218,165,32,0.04),transparent)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-32 w-5 h-5 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-30" />
        <div 
          className="floating-element absolute top-40 right-20 w-4 h-4 bg-gradient-to-br from-lavender to-accent-gold rounded-full opacity-25"
          style={{ animationDelay: "1.5s" }}
        />
        <div 
          className="floating-element absolute bottom-32 left-20 w-6 h-6 bg-rose-gold rounded-full opacity-20"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <div className="flex items-center justify-center mb-6 group">
            <Heart className="w-6 h-6 text-rose-gold mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent">
              Gifting Moments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-rose-gold via-accent-gold to-luxury-bronze bg-clip-text text-transparent">
              Style Your
            </span>
            <br />
            <span className="text-foreground relative">
              Raksha Bandhan
              <div className="absolute -bottom-1 left-0 w-2/3 h-1 bg-gradient-to-r from-rose-gold to-accent-gold rounded-full opacity-80" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            From premium gift boxes to traditional setups - discover endless ways to make your gift{" "}
            <span className="bg-gradient-to-r from-accent-gold to-rose-gold bg-clip-text text-transparent font-semibold">
              Instagram-worthy
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div 
            className="relative animate-in slide-in-from-left duration-1000 delay-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel setApi={setApi}>
              <CarouselContent>
                {moments.map((moment, idx) => (
                  <CarouselItem key={moment.src}>
                    <img
                      src={moment.src}
                      alt={moment.alt}
                      className="w-full h-auto rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Arrows only on desktop */}
              {isDesktop && (
                <>
                  <button onClick={() => scrollTo(selectedIndex - 1 < 0 ? moments.length - 1 : selectedIndex - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border border-accent-gold/30 rounded-full p-3 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 shadow-xl">
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button onClick={() => scrollTo((selectedIndex + 1) % moments.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl border border-accent-gold/30 rounded-full p-3 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 shadow-xl">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}
              {/* Dots always clickable */}
              <div className="flex justify-center mt-6 gap-3">
                {moments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 h-3 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full"
                        : "w-3 h-3 bg-foreground/30 hover:bg-foreground/50 rounded-full hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-in slide-in-from-right duration-1000 delay-500">
            <div className="card-glass p-8 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-gold to-accent-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent">
                    {moments[selectedIndex].title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
                    {moments[selectedIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {moments[selectedIndex].hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-accent-gold/20 to-rose-gold/20 backdrop-blur-sm rounded-full text-sm font-medium text-foreground/80 border border-accent-gold/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Use Case Cards */}
            <div className="space-y-4">
              <div className="card-glass p-6 bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-semibold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  💝 Premium Gift Boxes
                </h4>
                <p className="text-foreground/70 text-sm">
                  Perfect for those luxury unboxing moments your followers will love
                </p>
              </div>

              <div className="card-glass p-6 bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-semibold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-rose-gold group-hover:to-lavender group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  🪔 Traditional Setups
                </h4>
                <p className="text-foreground/70 text-sm">
                  Create that authentic cultural vibe with diyas and flowers
                </p>
              </div>

              <div className="card-glass p-6 bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-semibold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-lavender group-hover:to-accent-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  📸 Content Creation
                </h4>
                <p className="text-foreground/70 text-sm">
                  Make your Raksha Bandhan posts stand out on social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingMoments;