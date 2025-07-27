import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    const message =
      "Hi! I want to order Premium Rakhi Envelopes. Can you help me?";
    const phoneNumber = "919723727200"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-premium-cream via-ivory to-background">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-rose-gold/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_0%,rgba(255,215,0,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_80%_100%,rgba(218,165,32,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,215,0,0.03)_0deg,transparent_60deg,rgba(255,192,203,0.03)_120deg,transparent_180deg,rgba(221,160,221,0.03)_240deg,transparent_300deg,rgba(255,215,0,0.03)_360deg)]" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-6 h-6 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-40 blur-[1px] shadow-lg" />
        <div
          className="floating-element absolute top-32 left-1/3 w-2 h-2 bg-accent-gold rounded-full opacity-60"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="floating-element absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-lavender to-rose-gold rounded-full opacity-30 blur-[2px] shadow-xl"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="floating-element absolute top-60 right-1/3 w-3 h-3 bg-rose-gold rounded-full opacity-50"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="floating-element absolute bottom-32 left-1/4 w-5 h-5 bg-gradient-to-br from-accent-gold via-rose-gold to-lavender rounded-full opacity-35 blur-[1px] shadow-lg"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating-element absolute bottom-40 right-1/4 w-4 h-4 bg-lavender rounded-full opacity-45"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="floating-element absolute top-1/2 left-16 w-2 h-2 bg-accent-gold rounded-full opacity-70"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="flex items-center justify-center lg:justify-start mb-8 group">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-accent-gold mr-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <div className="absolute -inset-1 bg-accent-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-accent-gold to-luxury-bronze bg-clip-text text-transparent">
                Premium Collection 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze bg-clip-text text-transparent drop-shadow-sm animate-pulse">
                Kyun Na Iss Baar
              </span>
              <br />
              <span className="text-foreground drop-shadow-sm relative">
                Kuch Anokha Ho Jaye?
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full opacity-80" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-medium">
              Not Just an Envelope. It's a Feeling.{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent font-semibold">
                Celebrate bonds with style
              </span>{" "}
              and make this Raksha-Bandhan unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Button
                onClick={handleWhatsAppOrder}
                size="lg"
                className="btn-primary group relative overflow-hidden px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent-gold/50"
              >
                <span className="relative z-10 flex items-center">
                  Order via WhatsApp
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold via-rose-gold to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 text-sm font-medium">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose-gold to-lavender rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <div
                    className="absolute inset-0 w-3 h-3 bg-rose-gold rounded-full animate-ping opacity-20"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
                <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  Premium Quality
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-lavender to-accent-gold rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <div
                    className="absolute inset-0 w-3 h-3 bg-lavender rounded-full animate-ping opacity-20"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  Loved by Hundreds
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Product Images */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative z-10 perspective-1000 group">
              <div className="card-glass p-10 transform hover:rotate-y-2 hover:scale-105 transition-all duration-700 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-2xl hover:shadow-accent-gold/30">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/lovable-uploads/d8a6a91a-fea2-4d9f-8d6b-14eb539585d1.png"
                    alt="Premium Rakhi Envelope - Happy Raksha Bandhan with Gold Foil"
                    className="w-full h-auto rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/10 via-transparent to-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold via-rose-gold to-lavender rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </div>
            </div>

            {/* Enhanced Secondary Images */}
            <div className="absolute -bottom-12 -right-12 transform rotate-12 opacity-90 hover:opacity-100 hover:scale-110 hover:rotate-6 transition-all duration-500">
              <div className="relative">
                <img
                  src="/lovable-uploads/350dacf5-a9c1-44ed-b69e-ee0b6a86251b.png"
                  alt="Premium ₹500 Note in Luxury Envelope"
                  className="w-36 h-auto rounded-xl shadow-2xl border-2 border-white/40 backdrop-blur-sm"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-gold to-accent-gold rounded-xl blur opacity-50 -z-10" />
              </div>
            </div>

            <div className="absolute -top-8 -left-8 transform -rotate-6 opacity-80 hover:opacity-100 hover:scale-110 hover:-rotate-3 transition-all duration-500">
              <div className="relative">
                <img
                  src="/lovable-uploads/d8a6a91a-fea2-4d9f-8d6b-14eb539585d1.png"
                  alt="Happy Raksha Bandhan Gold Foil Design"
                  className="w-28 h-auto rounded-xl shadow-2xl border-2 border-white/40 backdrop-blur-sm"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-lavender to-rose-gold rounded-xl blur opacity-40 -z-10" />
              </div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-rose-gold/20 rounded-full blur-xl animate-pulse" />
            <div
              className="absolute bottom-1/4 -left-4 w-12 h-12 bg-gradient-to-br from-lavender/20 to-accent-gold/20 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
