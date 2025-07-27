import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles, Star, Gift } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Single Pack",
      quantity: "1 Envelope",
      price: "₹111",
      originalPrice: "₹179",
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
      ],
    },
    {
      id: 3,
      name: "Trio Pack",
      quantity: "3 Envelopes",
      price: "₹299",
      originalPrice: "₹537",
      popular: true,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
        "Save ₹151",
        "Best Value",
      ],
    },
    {
      id: 5,
      name: "Family Pack",
      quantity: "5 Envelopes",
      price: "₹449",
      originalPrice: "₹895",
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
        "Save ₹301",
        "Family Perfect",
      ],
    },
    {
      id: 10,
      name: "Premium Bulk",
      quantity: "10 Envelopes",
      price: "₹849",
      originalPrice: "₹1790",
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
        "Save ₹651",
        "Maximum Savings",
        "Perfect for Groups",
      ],
    },
  ];

  // Dynamically add discount info
  const updatedPlans = plans.map((plan) => {
    const current = parseInt(plan.price.replace(/[₹,]/g, ""));
    const original = parseInt(plan.originalPrice.replace(/[₹,]/g, ""));
    const percentOff = Math.round(((original - current) / original) * 100);
    return {
      ...plan,
      discount: `${percentOff}% OFF`,
      savedAmount: original - current,
    };
  });

  const handleWhatsAppOrder = (plan: (typeof updatedPlans)[0]) => {
    const message = `Hi! I want to order ${plan.name} (${plan.quantity}) for ${plan.price}. Please help me with the order process.`;
    const phoneNumber = "919723727200"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCustomOrderWhatsApp = () => {
    const message =
      "Hi! I need a custom quantity order for Premium Rakhi Envelopes. Can you help me with personalized pricing and requirements?";
    const phoneNumber = "919723727200"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-ivory to-premium-cream">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/4 via-transparent to-rose-gold/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_25%_25%,rgba(255,215,0,0.05),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_350px_at_75%_75%,rgba(218,165,32,0.04),transparent)]" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-24 left-20 w-6 h-6 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full opacity-20 blur-[1px]" />
        <div
          className="floating-element absolute top-48 right-28 w-4 h-4 bg-gradient-to-br from-lavender to-accent-gold rounded-full opacity-25 blur-[2px]"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="floating-element absolute bottom-36 left-1/3 w-5 h-5 bg-rose-gold rounded-full opacity-30"
          style={{ animationDelay: "2.8s" }}
        />
        <div
          className="floating-element absolute bottom-52 right-24 w-3 h-3 bg-gradient-to-br from-accent-gold to-lavender rounded-full opacity-35 blur-[1px]"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-in slide-in-from-bottom duration-1000">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <Crown className="w-7 h-7 text-accent-gold mr-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
              <div className="absolute -inset-1 bg-accent-gold/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-accent-gold to-luxury-bronze bg-clip-text text-transparent">
              Choose Your Pack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-accent-gold via-rose-gold to-luxury-bronze bg-clip-text text-transparent drop-shadow-sm">
              Premium Pricing
            </span>
            <br />
            <span className="text-foreground drop-shadow-sm relative">
              For Every Need
              <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-accent-gold to-rose-gold rounded-full opacity-80" />
            </span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Choose the perfect pack size for your celebration.{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose-gold to-accent-gold bg-clip-text text-transparent font-semibold">
              Bigger packs mean bigger savings!
            </span>
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {updatedPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group animate-in slide-in-from-bottom duration-1000 ${
                plan.popular ? "lg:scale-110 z-10" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`card-glass p-8 h-full flex flex-col transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white/40 via-white/25 to-white/15 backdrop-blur-2xl border-2 ${
                  plan.popular
                    ? "border-accent-gold/60 shadow-2xl shadow-accent-gold/20"
                    : "border-white/40 shadow-xl hover:shadow-2xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent-gold to-rose-gold text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 animate-pulse" />
                      Most Popular
                      <Star className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                  {plan.discount}
                </div>

                <div className="text-center mb-8 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-rose-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Gift className="w-8 h-8 text-accent-gold drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/70 text-lg font-semibold mb-6">
                    {plan.quantity}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-black bg-gradient-to-r from-accent-gold to-rose-gold bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-xl text-foreground/50 line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      You save ₹{plan.savedAmount}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 bg-gradient-to-br from-accent-gold to-rose-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex-shrink-0">
                  <Button
                    onClick={() => handleWhatsAppOrder(plan)}
                    className={`w-full group/btn relative overflow-hidden px-6 py-4 text-base font-bold transform hover:scale-105 transition-all duration-300 shadow-xl ${
                      plan.popular
                        ? "btn-primary hover:shadow-accent-gold/50"
                        : "bg-white/20 hover:bg-white/30 backdrop-blur-xl border-2 border-accent-gold/30 hover:border-accent-gold/60 text-foreground hover:text-accent-gold"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Grab Now
                    </span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold via-rose-gold to-accent-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    )}
                  </Button>
                </div>

                <div
                  className={`absolute -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 ${
                    plan.popular
                      ? "bg-gradient-to-r from-accent-gold via-rose-gold to-accent-gold"
                      : "bg-gradient-to-r from-accent-gold/50 via-rose-gold/50 to-lavender/50"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom CTA */}
        <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-800">
          <div className="card-glass p-8 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl border-2 border-white/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Crown className="w-8 h-8 text-accent-gold mr-3 group-hover:scale-110 transition-transform duration-300" />
              <Sparkles className="w-6 h-6 text-rose-gold animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:bg-gradient-to-r group-hover:from-accent-gold group-hover:to-rose-gold group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Need a Custom Quantity?
            </h3>
            <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
              We've got you covered! Get personalized pricing for bulk orders
              and special requirements.
            </p>
            <Button
              onClick={handleCustomOrderWhatsApp}
              variant="outline"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-xl border-2 border-accent-gold/40 hover:border-accent-gold/70 text-foreground hover:text-accent-gold px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group/btn w-full sm:w-auto text-center"
            >
              <span className="flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="whitespace-nowrap">
                  Contact for Custom Orders
                </span>
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:scale-110 transition-transform duration-300" />
              </span>
            </Button>

            <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/20 via-rose-gold/20 to-lavender/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
