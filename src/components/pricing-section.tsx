import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Single Pack",
      quantity: "1 Envelope",
      price: "₹149",
      originalPrice: "₹199",
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material", 
        "Perfect Gift Presentation",
        "Campus Delivery Available"
      ]
    },
    {
      id: 2,
      name: "Duo Pack",
      quantity: "2 Envelopes",
      price: "₹279",
      originalPrice: "₹398",
      popular: true,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation", 
        "Campus Delivery Available",
        "Save ₹119"
      ]
    },
    {
      id: 3,
      name: "Family Pack",
      quantity: "3 Envelopes", 
      price: "₹399",
      originalPrice: "₹597",
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available", 
        "Save ₹198"
      ]
    },
    {
      id: 5,
      name: "Celebration Pack",
      quantity: "5 Envelopes",
      price: "₹649",
      originalPrice: "₹995", 
      popular: false,
      features: [
        "Premium Gold Foil Design",
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
        "Save ₹346",
        "Bulk Discount"
      ]
    },
    {
      id: 10,
      name: "Premium Bulk",
      quantity: "10 Envelopes",
      price: "₹1199",
      originalPrice: "₹1990",
      popular: false,
      features: [
        "Premium Gold Foil Design", 
        "Crystal Clear Material",
        "Perfect Gift Presentation",
        "Campus Delivery Available",
        "Save ₹791",
        "Maximum Savings",
        "Perfect for Groups"
      ]
    }
  ];

  const handleWhatsAppOrder = (plan: typeof plans[0]) => {
    const message = `Hi! I want to order ${plan.name} (${plan.quantity}) for ${plan.price}. Please help me with the order process.`;
    const phoneNumber = "918888888888"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-6 h-6 text-accent-gold mr-2" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              CHOOSE YOUR PACK
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Premium Pricing
            </span>
            <br />
            <span className="text-foreground">For Every Need</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect pack size for your celebration. 
            Bigger packs mean bigger savings!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative card-glass p-6 hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-accent-gold shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{plan.quantity}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-accent-gold">{plan.price}</span>
                  <span className="text-lg text-foreground/50 line-through ml-2">{plan.originalPrice}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent-gold mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleWhatsAppOrder(plan)}
                className={`w-full ${plan.popular ? 'btn-primary' : 'btn-glass'}`}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Grab Now
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            Need a custom quantity? We've got you covered!
          </p>
          <Button variant="outline" className="btn-glass">
            Contact for Custom Orders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;