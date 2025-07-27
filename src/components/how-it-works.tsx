import {
  MessageCircle,
  CreditCard,
  CheckCircle,
  Truck,
  Sparkles,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "DM",
      description: "Send us a message on WhatsApp with your order details",
      step: "01",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "Pay",
      description: "Make secure payment via UPI, bank transfer, or cash",
      step: "02",
      color: "from-green-500 to-green-600",
    },
    {
      icon: CheckCircle,
      title: "Confirm",
      description: "We'll confirm your order and start processing immediately",
      step: "03",
      color: "from-accent-gold to-rose-gold",
    },
    {
      icon: Truck,
      title: "Delivered",
      description:
        "Get your premium envelopes delivered safely to your doorstep",
      step: "04",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-ivory via-premium-cream to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/4 via-transparent to-accent-gold/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_700px_350px_at_20%_30%,rgba(255,215,0,0.03),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_70%,rgba(218,165,32,0.02),transparent)]" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-16 w-5 h-5 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-25 blur-[1px]" />
        <div
          className="floating-element absolute top-40 right-24 w-4 h-4 bg-gradient-to-br from-lavender to-accent-gold rounded-full opacity-30 blur-[2px]"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-rose-gold rounded-full opacity-35"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="floating-element absolute bottom-48 right-32 w-6 h-6 bg-gradient-to-br from-accent-gold to-lavender rounded-full opacity-20 blur-[1px]"
          style={{ animationDelay: "0.8s" }}
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
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze bg-clip-text text-transparent drop-shadow-sm">
              Simple 4-Step
            </span>
            <br />
            <span className="text-foreground drop-shadow-sm relative">
              Process
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full opacity-80" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Get your premium Rakhi envelopes with our{" "}
            <span className="bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent font-semibold">
              streamlined ordering process
            </span>{" "}
            - fast, secure, and hassle-free.
          </p>
        </div>

        {/* Enhanced Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center group animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  {/* Enhanced Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-accent-gold to-rose-gold text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Enhanced Icon Container */}
                  <div className="relative">
                    <div className="card-glass w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-gradient-to-br from-white/40 via-white/25 to-white/15 backdrop-blur-2xl border-2 border-white/40 shadow-2xl">
                      <Icon className="w-10 h-10 text-accent-gold group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/20 via-rose-gold/20 to-lavender/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>

                  {/* Enhanced Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-1 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent-gold/30 via-rose-gold/20 to-transparent relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-rose-gold opacity-60 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-foreground/80 text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Step indicator line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-accent-gold/50 to-rose-gold/30 mx-auto mt-8 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="card-glass p-8 text-center bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-in slide-in-from-left delay-600">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Truck className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Free CHARUSAT Campus Delivery
            </h3>
            <p className="text-foreground/80 text-base leading-relaxed">
              Free delivery within charusat campus premises. Quick and safe delivery
              guaranteed with our premium packaging.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-600 font-semibold">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available 12/7
            </div>
          </div>

          <div className="card-glass p-8 text-center bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-in slide-in-from-right delay-800">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Truck className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Home Delivery Available
            </h3>
            <p className="text-foreground/80 text-base leading-relaxed">
              Home delivery with minimal extra charges. We deliver to your
              doorstep with care and precision.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-600 font-semibold">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Nationwide Service
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-in slide-in-from-bottom delay-1000">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-gold/10 to-rose-gold/10 backdrop-blur-xl border border-accent-gold/20 rounded-2xl px-8 py-4">
            <Sparkles className="w-6 h-6 text-accent-gold animate-pulse" />
            <span className="text-lg font-semibold bg-gradient-to-r from-accent-gold to-rose-gold bg-clip-text text-transparent">
              Ready to Order? Let's Start the Process!
            </span>
            <Sparkles
              className="w-6 h-6 text-rose-gold animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
