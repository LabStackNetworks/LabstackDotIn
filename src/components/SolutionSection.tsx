import { Network, Zap, CreditCard, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const infrastructureLayers = [
    {
      icon: Network,
      title: "Provider Network",
      description: "1000+ verified labs, doctors, pharmacies, home care, specialised services across all tiers",
      features: ["Quality-assured providers", "Nationwide coverage", "Real-time availability", "Tier-1 to Tier-3 reach"],
      gradient: "from-primary to-primary/60",
      position: "top-0 left-1/2 transform -translate-x-1/2"
    },
    {
      icon: Zap,
      title: "Operations & Automation", 
      description: "SLA-backed routing, fulfilment, escalations, real-time tracking with intelligent workflows",
      features: ["Automated workflows", "Smart routing", "SLA monitoring", "Quality assurance"],
      gradient: "from-secondary to-secondary/60",
      position: "top-1/2 right-0 transform -translate-y-1/2"
    },
    {
      icon: CreditCard,
      title: "Financials",
      description: "Transparent pricing, automated reconciliation, billing, analytics with full visibility",
      features: ["Unified billing", "Real-time analytics", "Cost optimization", "Revenue tracking"],
      gradient: "from-primary to-secondary",
      position: "bottom-0 left-1/2 transform -translate-x-1/2"
    },
    {
      icon: Brain,
      title: "AI & Intelligence",
      description: "Raw values, predictive scoring, quality frameworks powered by advanced intelligence",
      features: ["Structured data", "Quality scoring", "Predictive insights", "Smart analytics"],
      gradient: "from-secondary to-primary",
      position: "top-1/2 left-0 transform -translate-y-1/2"
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
        {/* Section 1: Infrastructure Layer */}
        <div className="max-w-4xl mx-auto text-center mb-32">
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
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16">
            Labstack abstracts away healthcare infrastructure complexity, 
            giving you enterprise-grade capabilities from day one.
          </p>

          {/* Central Orb with 4 Positioned Cards */}
          <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
            {/* Central Glowing Orb */}
            <div className="relative z-20">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-glow shadow-glow flex items-center justify-center">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-background/20 backdrop-blur border border-white/10 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur flex items-center justify-center">
                    <Brain className="w-6 h-6 lg:w-10 lg:h-10 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Connecting Lines */}
              <div className="absolute inset-0">
                {/* Top Left Line */}
                <div className="absolute w-24 h-px bg-gradient-to-l from-primary/60 to-transparent top-4 -left-24 lg:w-32 lg:-left-32 lg:top-6"></div>
                {/* Top Right Line */}
                <div className="absolute w-24 h-px bg-gradient-to-r from-primary/60 to-transparent top-4 -right-24 lg:w-32 lg:-right-32 lg:top-6"></div>
                {/* Bottom Left Line */}
                <div className="absolute w-24 h-px bg-gradient-to-l from-primary/60 to-transparent bottom-4 -left-24 lg:w-32 lg:-left-32 lg:bottom-6"></div>
                {/* Bottom Right Line */}
                <div className="absolute w-24 h-px bg-gradient-to-r from-primary/60 to-transparent bottom-4 -right-24 lg:w-32 lg:-right-32 lg:bottom-6"></div>
              </div>
            </div>

            {/* 4 Infrastructure Cards - Positioned around the orb */}
            {/* Top Left Card */}
            <div className="absolute top-0 left-0 w-56 lg:w-64 group cursor-pointer" style={{ animation: 'fade-in 0.8s ease-out 0.2s both' }}>
              <div className="card-gradient rounded-xl p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                    <Network className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                    Provider Network
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Quality-assured providers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Nationwide coverage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Real-time availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-0 right-0 w-56 lg:w-64 group cursor-pointer" style={{ animation: 'fade-in 0.8s ease-out 0.4s both' }}>
              <div className="card-gradient rounded-xl p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/60 opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                    Operations & Automation
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Automated workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Smart routing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">SLA monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-0 left-0 w-56 lg:w-64 group cursor-pointer" style={{ animation: 'fade-in 0.8s ease-out 0.6s both' }}>
              <div className="card-gradient rounded-xl p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                    <CreditCard className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                    Financials
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Unified billing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Real-time analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Cost optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-0 right-0 w-56 lg:w-64 group cursor-pointer" style={{ animation: 'fade-in 0.8s ease-out 0.8s both' }}>
              <div className="card-gradient rounded-xl p-4 lg:p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                    <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-base lg:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                    AI & Intelligence
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Structured data</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Quality scoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">Predictive insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Custom Solutions CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Need Something <span className="text-gradient">Custom</span>?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team can help architect tailored healthcare infrastructure for your unique needs.
            </p>
          </div>
          <Button size="lg" variant="outline" className="btn-outline-gradient text-lg px-8 py-3 h-auto shadow-elegant hover:shadow-glow transform transition-all duration-300 hover:scale-105">
            Discuss Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;