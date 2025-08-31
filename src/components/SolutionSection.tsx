import { Network, Zap, CreditCard, Brain, Stethoscope, Smartphone, Code, Globe } from "lucide-react";
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

  const solutions = [
    {
      icon: Stethoscope,
      title: "Healthcare Infrastructure",
      subtitle: "Launch in days, scale nationwide",
      description: "Skip the 12–18 month build cycle with complete healthcare infrastructure platform.",
      features: [
        "Provider network access",
        "Operations automation", 
        "Compliance frameworks",
        "Real-time monitoring"
      ],
      proof: "Cut launch time from 12 months to 6 weeks",
      cta: "Explore Platform",
      gradient: "from-primary to-primary/60"
    },
    {
      icon: Smartphone,
      title: "Digital Platform",
      subtitle: "White-label patient experiences",
      description: "Structured data, not PDFs. Built for engagement and retention with seamless health journeys.",
      features: [
        "White-label patient flows",
        "Structured health data",
        "Cross-service continuity",
        "Engagement analytics"
      ],
      proof: "NPS jumped 25 points with digital flows",
      cta: "Start Building",
      gradient: "from-secondary to-secondary/60"
    },
    {
      icon: Code,
      title: "API Solutions",
      subtitle: "Developer-first healthcare rails",
      description: "Modern APIs for healthcare services with higher ARPU through prescription monetization.",
      features: [
        "RESTful healthcare APIs",
        "Prescription monetization",
        "Care coordination tools",
        "Developer-friendly docs"
      ],
      proof: "Prescription monetization grew ARPU by 15%",
      cta: "Explore API Hub",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Globe,
      title: "Coverage Expansion",
      subtitle: "Tier-1 to Tier-3 instantly",
      description: "Expand to untapped markets with quality-assured providers and local market expertise.",
      features: [
        "Tier-2/3 market access",
        "Quality assurance",
        "Local partnerships",
        "Market intelligence"
      ],
      proof: "20% conversion boost after geographic expansion",
      cta: "Expand Coverage",
      gradient: "from-secondary to-primary"
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

          {/* Central Orb with Radiating Cards */}
          <div className="relative h-[600px] lg:h-[700px] mx-auto max-w-4xl">
            {/* Central Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-glow shadow-glow flex items-center justify-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
                    <Brain className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                </div>
                {/* Radiating Lines */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[0, 90, 180, 270].map((rotation, i) => (
                    <div 
                      key={i}
                      className="absolute w-px h-32 bg-gradient-to-t from-primary/50 to-transparent"
                      style={{ 
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: 'bottom center',
                        bottom: '50%',
                        left: '50%'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Surrounding Infrastructure Cards */}
            {infrastructureLayers.map((layer, index) => {
              const IconComponent = layer.icon;
              return (
                <div 
                  key={index}
                  className={`absolute w-64 lg:w-72 ${layer.position} group cursor-pointer`}
                  style={{ animation: `fade-in 0.8s ease-out ${index * 0.3}s both` }}
                >
                  <div className="card-gradient rounded-2xl p-6 lg:p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-glow">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-elegant`}>
                        <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg lg:text-xl font-heading font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
                        {layer.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {layer.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {layer.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Solutions Built for Healthcare Scale */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Solutions Built for <span className="text-gradient">Healthcare Scale</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Four core solutions powering modern healthcare companies
            </p>
          </div>

          {/* Horizontal Arc-Shaped Cards */}
          <div className="relative">
            <div className="flex space-x-6 lg:space-x-8 overflow-x-auto pb-6 scrollbar-hide">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-80 lg:w-96 card-gradient rounded-3xl p-8 lg:p-10 card-hover group relative overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
                    style={{ 
                      animation: `fade-in 0.6s ease-out ${index * 0.2}s both`,
                      transform: `perspective(1000px) rotateX(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="mb-8">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant hover:shadow-glow`}>
                          <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium mb-4">
                          {solution.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3 transform transition-all duration-300" style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-xs lg:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Proof Point */}
                      <div className="bg-success/10 border border-success/20 rounded-xl p-4 mb-6 group-hover:bg-success/15 transition-colors duration-300">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-success font-medium text-xs lg:text-sm leading-relaxed">
                            "{solution.proof}"
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button size="sm" className="w-full btn-gradient text-sm hover:shadow-glow transition-all duration-300">
                        {solution.cta}
                      </Button>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none rounded-3xl"></div>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {solutions.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-muted rounded-full opacity-30 hover:opacity-60 transition-opacity cursor-pointer"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Custom Solutions CTA */}
        <div className="text-center">
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