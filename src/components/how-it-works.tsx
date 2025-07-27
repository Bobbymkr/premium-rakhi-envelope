import { MessageCircle, CheckCircle, CreditCard, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "DM",
      description: "Send us a message on WhatsApp with your order details",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "Confirm", 
      description: "We'll confirm your order and share the final amount",
      step: "02"
    },
    {
      icon: CreditCard,
      title: "Pay",
      description: "Make secure payment via UPI, bank transfer, or cash",
      step: "03"
    },
    {
      icon: Truck,
      title: "Delivered",
      description: "Get your premium envelopes delivered safely",
      step: "04"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple 4-step process to get your premium Rakhi envelopes
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="card-glass w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-gold/50 to-transparent"></div>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card-glass p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Free Campus Delivery
            </h3>
            <p className="text-foreground/70 text-sm">
              Free delivery within campus premises. Quick and safe delivery guaranteed.
            </p>
          </div>

          <div className="card-glass p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Home Delivery Available
            </h3>
            <p className="text-foreground/70 text-sm">
              Home delivery with minimal extra charges. We deliver to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;