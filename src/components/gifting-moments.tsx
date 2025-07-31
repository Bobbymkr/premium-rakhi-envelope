import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

const GiftingMoments = () => {
  const [currentMoment, setCurrentMoment] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const moments = [
    {
      src: "/lovable-uploads/good_one.png",
      alt: "Premium gift box presentation with lavender and wrapped gifts",
      title: "Gift Box Vibes",
      description:
        "Perfect for premium gifting moments - pair it with your favorite wrapping style",
      hashtags: ["#GiftGoals", "#PremiumVibes", "#RakshaBandhan"],
    },
    {
      src: "/lovable-uploads/good_two.png",
      alt: "Traditional Raksha Bandhan setup with diyas and marigolds",
      title: "Festival Aesthetic",
      description:
        "Create that perfect traditional moment with diyas, flowers, and cultural vibes",
      hashtags: ["#FestivalVibes", "#Traditional", "#CulturalMoments"],
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentMoment((prev) => (prev + 1) % moments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, moments.length]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-accent-gold/8 via-background to-rose-gold/8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender/8 via-transparent to-accent-gold/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_500px_at_20%_50%,rgba(255,215,0,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_80%_20%,rgba(218,165,32,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_50%_80%,rgba(183,148,244,0.04),transparent)]" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-32 w-6 h-6 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-40 blur-[0.5px]" />
        <div
          className="floating-element absolute top-40 right-20 w-5 h-5 bg-gradient-to-br from-lavender to-accent-gold rounded-full opacity-35 blur-[1px]"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="floating-element absolute bottom-32 left-20 w-7 h-7 bg-gradient-to-br from-rose-gold to-luxury-bronze rounded-full opacity-25"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="floating-element absolute top-60 left-1/2 w-4 h-4 bg-gradient-to-br from-accent-gold to-lavender rounded-full opacity-30 blur-[2px]"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="floating-element absolute bottom-48 right-32 w-5 h-5 bg-gradient-to-br from-rose-gold to-accent-gold rounded-full opacity-35"
          style={{ animationDelay: "2.2s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-in slide-in-from-bottom duration-1000">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <Heart className="w-7 h-7 text-rose-gold mr-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              <div className="absolute -inset-1 bg-rose-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-rose-gold via-accent-gold to-luxury-bronze bg-clip-text text-transparent">
              Gifting Moments
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-rose-gold via-accent-gold to-luxury-bronze bg-clip-text text-transparent drop-shadow-sm">
              Style Your
            </span>
            <br />
            <span className="text-foreground drop-shadow-sm relative">
              Raksha Bandhan
              <div className="absolute -bottom-2 left-0 w-3/4 h-1.5 bg-gradient-to-r from-rose-gold via-accent-gold to-luxury-bronze rounded-full opacity-90" />
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-white/60 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed font-medium">
            From premium gift boxes to traditional setups - discover endless
            ways to make your gift{" "}
            <span className="bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze bg-clip-text text-transparent font-bold">
              Instagram-worthy
            </span>{" "}
            and create memories that last forever.
          </p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Image Section */}
          <div
            className="relative animate-in slide-in-from-left duration-1000 delay-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              {/* Image with enhanced effects and fixed dimensions */}
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[550px]">
                <img
                  src={moments[currentMoment].src}
                  alt={moments[currentMoment].alt}
                  className="w-full h-full object-cover object-[65%_center] transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-xl border-2 border-accent-gold/30 rounded-full px-4 py-2 shadow-xl">
                <span className="text-sm font-bold bg-gradient-to-r from-accent-gold to-rose-gold bg-clip-text text-transparent">
                  {currentMoment + 1} / {moments.length}
                </span>
              </div>
            </div>

            {/* Enhanced Dots Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              {moments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentMoment(index);
                    setIsAutoPlay(false);
                    setTimeout(() => setIsAutoPlay(true), 5000);
                  }}
                  className={`relative transition-all duration-300 group/dot ${
                    index === currentMoment
                      ? "w-10 h-4 bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze rounded-full scale-110 shadow-lg"
                      : "w-4 h-4 bg-foreground/40 hover:bg-foreground/60 hover:scale-125 rounded-full"
                  }`}
                >
                  {index === currentMoment && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze rounded-full animate-pulse" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/40 via-rose-gold/40 to-luxury-bronze/40 rounded-full blur opacity-75" />
                    </>
                  )}
                  <div className="absolute -inset-2 bg-accent-gold/20 rounded-full opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-10 animate-in slide-in-from-right duration-1000 delay-500">
            {/* Main Feature Card */}
            <div className="card-glass p-10 bg-gradient-to-br from-white/40 via-white/25 to-white/15 backdrop-blur-3xl border-2 border-white/40 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-700 group relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-rose-gold/10 to-lavender/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-gold via-accent-gold to-luxury-bronze rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-rose-gold/40 via-accent-gold/40 to-luxury-bronze/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-rose-gold via-accent-gold to-luxury-bronze bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left">
                    {moments[currentMoment].title}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed mb-6 text-lg font-medium">
                    {moments[currentMoment].description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {moments[currentMoment].hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-accent-gold/25 to-rose-gold/25 backdrop-blur-sm rounded-full text-sm font-bold text-foreground/90 border-2 border-accent-gold/40 hover:border-accent-gold/60 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Use Case Cards */}
            <div className="space-y-6">
              <div className="card-glass p-8 bg-gradient-to-br from-white/35 via-white/20 to-white/15 backdrop-blur-2xl border-2 border-white/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 to-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h4 className="font-black text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    💝 Premium Gift Boxes
                  </h4>
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    Perfect for those luxury unboxing moments your followers
                    will love - create that premium aesthetic
                  </p>
                </div>
              </div>

              <div className="card-glass p-8 bg-gradient-to-br from-white/35 via-white/20 to-white/15 backdrop-blur-2xl border-2 border-white/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h4 className="font-black text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-rose-gold group-hover:to-lavender group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    🪔 Traditional Setups
                  </h4>
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    Create that authentic cultural vibe with diyas, flowers, and
                    traditional elements
                  </p>
                </div>
              </div>

              <div className="card-glass p-8 bg-gradient-to-br from-white/35 via-white/20 to-white/15 backdrop-blur-2xl border-2 border-white/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-lavender/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h4 className="font-black text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-lavender group-hover:to-accent-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    📸 Content Creation
                  </h4>
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    Make your Raksha Bandhan posts stand out on social media
                    with stunning visuals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingMoments;
