import { Network, Zap, CreditCard, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const layers = [
    {
      icon: Network,
      title: "Provider Network",
      description: "1000+ verified labs, doctors, pharmacies, home care, specialised services",
      features: ["Quality-assured providers", "Nationwide coverage", "Real-time availability"],
      gradient: "from-primary to-primary/60"
    },
    {
      icon: Zap,
      title: "Operations & Automation",
      description: "SLA-backed routing, fulfilment, escalations, real-time tracking",
      features: ["Automated workflows", "Smart routing", "SLA monitoring"],
      gradient: "from-secondary to-secondary/60"
    },
    {
      icon: CreditCard,
      title: "Financials",
      description: "Transparent pricing, automated reconciliation, billing, analytics",
      features: ["Unified billing", "Real-time analytics", "Cost optimization"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: Brain,
      title: "AI & Intelligence",
      description: "Raw values, predictive scoring, quality frameworks",
      features: ["Structured data", "Quality scoring", "Predictive insights"],
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-success font-medium text-sm">THE SOLUTION</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            The Infrastructure Layer for <span className="text-gradient">Connected Care</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8">
            <span className="text-gradient font-semibold">One API. One Console. One Network.</span>
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Labstack abstracts away the complexity of healthcare infrastructure, 
            giving you enterprise-grade capabilities from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {layers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <div 
                key={index}
                className="card-gradient p-8 lg:p-10 rounded-2xl card-hover group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth shadow-elegant`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground">
                      {layer.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {layer.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {layer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-gradient text-lg px-8 py-3 h-auto shadow-elegant">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;