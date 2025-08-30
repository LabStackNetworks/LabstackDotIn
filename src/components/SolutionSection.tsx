import { Network, Zap, CreditCard, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import networkImage from "@/assets/network-3d.jpg";
import operationsImage from "@/assets/operations-3d.jpg";
import financialsImage from "@/assets/financials-3d.jpg";
import aiIntelligenceImage from "@/assets/ai-intelligence-3d.jpg";

const SolutionSection = () => {
  const layers = [
    {
      icon: Network,
      title: "Provider Network",
      description: "1000+ verified labs, doctors, pharmacies, home care, specialised services across all tiers",
      features: ["Quality-assured providers", "Nationwide coverage", "Real-time availability", "Tier-1 to Tier-3 reach"],
      gradient: "from-primary to-primary/60",
      image: networkImage
    },
    {
      icon: Zap,
      title: "Operations & Automation", 
      description: "SLA-backed routing, fulfilment, escalations, real-time tracking with intelligent workflows",
      features: ["Automated workflows", "Smart routing", "SLA monitoring", "Quality assurance"],
      gradient: "from-secondary to-secondary/60",
      image: operationsImage
    },
    {
      icon: CreditCard,
      title: "Financials",
      description: "Transparent pricing, automated reconciliation, billing, analytics with full visibility",
      features: ["Unified billing", "Real-time analytics", "Cost optimization", "Revenue tracking"],
      gradient: "from-primary to-secondary",
      image: financialsImage
    },
    {
      icon: Brain,
      title: "AI & Intelligence",
      description: "Raw values, predictive scoring, quality frameworks powered by advanced intelligence",
      features: ["Structured data", "Quality scoring", "Predictive insights", "Smart analytics"],
      gradient: "from-secondary to-primary",
      image: aiIntelligenceImage
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-success font-medium text-sm uppercase tracking-wider">THE SOLUTION</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            The Infrastructure Layer for <span className="text-gradient">Connected Care</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8">
            <span className="text-gradient font-semibold">One API. One Console. One Network.</span>
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Labstack abstracts away the complexity of healthcare infrastructure, 
            giving you enterprise-grade capabilities from day one.
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative mb-16">
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-8 lg:gap-12 min-w-max px-4">
              {layers.map((layer, index) => {
                const IconComponent = layer.icon;
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-80 lg:w-96 card-gradient rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                    style={{ 
                      animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 lg:h-56 overflow-hidden">
                      <img 
                        src={layer.image} 
                        alt={layer.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center shadow-elegant transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 lg:p-10">
                      <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-4 transition-colors duration-300 group-hover:text-gradient">
                        {layer.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
                        {layer.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {layer.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3 transform transition-all duration-300" style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {layers.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-gradient text-lg px-8 py-3 h-auto shadow-elegant hover:shadow-glow transform transition-all duration-300 hover:scale-105">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;