import { useState } from "react";
import { Rocket, Heart, Building, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhoWeServe = () => {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      id: "startups",
      icon: Rocket,
      label: "HealthTech Startups",
      title: "Scale Nationwide in Days",
      description: "Launch your healthcare product across India with enterprise-grade infrastructure from day one. No 12-18 month build cycles, no vendor management headaches.",
      challenges: [
        "Infrastructure delays blocking launches",
        "Poor SLAs from individual providers", 
        "Compliance and regulatory overhead",
        "Limited coverage outside metros"
      ],
      benefits: [
        "48-hour go-live capability",
        "9,000+ pincodes covered instantly",
        "Built-in compliance frameworks",
        "One API for all services"
      ],
      proof: "+20% conversions after Tier-2/3 expansion",
      cta: "Book a Demo"
    },
    {
      id: "disease-management",
      icon: Heart,
      label: "Disease Management",
      title: "Seamless Continuous Care",
      description: "Deliver protocol-driven care without patient drop-offs. Get structured data, not PDFs. Automate follow-ups and care coordination.",
      challenges: [
        "Patient drop-offs between services",
        "Reports stuck in PDF formats",
        "Manual care coordination",
        "Inconsistent provider quality"
      ],
      benefits: [
        "Protocol-driven care flows",
        "Structured raw health data",
        "Automated follow-up systems",
        "Quality-assured providers"
      ],
      proof: "Drop-offs reduced sharply with raw values + reminders",
      cta: "Deliver Continuous Care"
    },
    {
      id: "corporate-wellness",
      icon: Building,
      label: "Corporate Wellness",
      title: "One API, One Invoice, Nationwide",
      description: "Unified wellness programs for your workforce. Single billing, white-label booking flows, comprehensive utilization analytics.",
      challenges: [
        "Managing multiple vendor relationships",
        "Inconsistent experience across locations",
        "Complex billing and reconciliation",
        "Limited coverage in smaller cities"
      ],  
      benefits: [
        "Unified billing across all services",
        "White-label employee experience",
        "Comprehensive utilization analytics",
        "Nationwide consistent coverage"
      ],
      proof: "Participation rose after nationwide rollout",
      cta: "Explore Wellness Solutions"
    },
    {
      id: "insurers",
      icon: Shield,
      label: "Insurers & TPAs",
      title: "Fraud-Controlled OPD, SLA-Backed",
      description: "Launch OPD benefits with built-in fraud controls. Real-time tracking, automated reconciliation, and member experience that drives engagement.",
      challenges: [
        "High leakage and fraud rates",
        "Poor provider networks",
        "No escalation protocols",
        "Manual claims processing"
      ],
      benefits: [
        "SKU-level fraud controls",
        "Real-time service tracking",
        "Automated reconciliation",
        "SLA-backed service delivery"
      ],
      proof: "12% leakage reduction, faster claims",
      cta: "Transform Member Experience"
    },
    {
      id: "brokers",
      icon: Users,
      label: "Insurance Brokers",
      title: "New Revenue via Bundled Care",
      description: "Differentiate your offerings with bundled healthcare benefits. Boost ARPU through prescription monetization and wellness add-ons.",
      challenges: [
        "No differentiation in competitive market",
        "Flat ARPU growth",
        "Limited value-added services",
        "Client retention challenges"
      ],
      benefits: [
        "Bundled care benefit packages",
        "Prescription monetization opportunities",
        "Nationwide service coverage",
        "White-label client portals"
      ],
      proof: "ARPU up 15% with bundled healthcare",
      cta: "Expand Portfolio"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="mobile-section-title font-heading font-bold mb-6">
            Who We <span className="text-gradient">Serve</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">
            Healthcare companies of all sizes trust Labstack to power their growth
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Persona Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {personas.map((persona, index) => {
              const IconComponent = persona.icon;
              return (
                <button
                  key={persona.id}
                  onClick={() => setActivePersona(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-smooth font-medium ${
                    activePersona === index
                      ? 'bg-gradient-primary text-white shadow-elegant'
                      : 'bg-card hover:bg-card-hover text-muted-foreground hover:text-foreground border border-border/50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="text-xs sm:text-sm lg:text-base whitespace-nowrap">{persona.label}</span>
                </button>
              );
            })}
          </div>

          {/* Persona Content */}
          <div className="bg-card-gradient rounded-2xl overflow-hidden shadow-card">
            {personas.map((persona, index) => (
              <div
                key={persona.id}
                className={`transition-all duration-500 ${
                  activePersona === index ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                        <persona.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                        {persona.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {persona.description}
                    </p>

                    {/* Before/After */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-destructive mb-3 text-sm uppercase tracking-wide">
                          Challenges Today
                        </h4>
                        <ul className="space-y-2">
                          {persona.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-success mb-3 text-sm uppercase tracking-wide">
                          With Labstack
                        </h4>
                        <ul className="space-y-2">
                          {persona.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Proof Point */}
                    <div className="bg-success/10 border border-success/20 rounded-xl p-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-success font-semibold text-sm">
                          "{persona.proof}"
                        </span>
                      </div>
                    </div>

                    <Button size="lg" className="btn-gradient w-full sm:w-auto">
                      {persona.cta}
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="bg-gradient-subtle p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-sm h-64 bg-muted/30 rounded-2xl flex items-center justify-center border border-border/30">
                      <persona.icon className="w-20 h-20 text-muted-foreground/50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;