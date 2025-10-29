import { useState } from "react";
import { Rocket, Heart, Building, Shield, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      id: "insurers",
      icon: Shield,
      label: "Insurers & TPAs",
      title: "OPD with Built-in Fraud Controls",
      description: "Launch in 24hrs. Fraud <5%. PPMC <48hrs. Processing cost <₹100.",
      challenges: [
        "15-20% fraud in claims",
        "₹200-400 processing on ₹500 claims",
        "PPMC delays = lost sales",
        "No preventive infrastructure"
      ],
      benefits: [
        "Fraud drops to <5%",
        "PPMC in 48 hours",
        "Processing <₹100 per claim",
        "Preventive care built-in"
      ],
      proof: "Conversion >75% with fast PPMC",
      cta: "Transform OPD",
      link: "/who-we-serve/insurers-tpas"
    },
    {
      id: "disease-management",
      icon: Heart,
      label: "Disease Management",
      title: "Close Care Loops, Prove Outcomes",
      description: "95%+ test completion. Structured data. Nursing, specialists, pharmacy connected.",
      challenges: [
        "25-35% drop-off on tests",
        "Broken care loops",
        "Can't prove efficacy",
        "High CAC, low LTV"
      ],
      benefits: [
        ">90% completion, 24hr turnaround",
        "Auto-flow to care teams",
        "9,000 pincode coverage",
        "Churn: 35% → <15%"
      ],
      proof: "LTV improved 2.5-3x",
      cta: "Scale Care",
      link: "/who-we-serve/disease-management"
    },
    {
      id: "brokers",
      icon: Users,
      label: "Brokers & Aggregators",
      title: "2x Revenue Per Customer",
      description: "₹1,500 commission → ₹3,000+ recurring. Add PPMC, OPD, preventive instantly.",
      challenges: [
        "Capped commission",
        "Rising CAC, flat LTV",
        "No service differentiation",
        "Zero recurring revenue"
      ],  
      benefits: [
        "Revenue 2x in 12 months",
        "White-label platform",
        "Win more RFPs",
        "+30-40% without headcount"
      ],
      proof: "LTV increased 3-5x",
      cta: "Expand Revenue",
      link: "/who-we-serve/brokers-aggregators"
    },
    {
      id: "digital-health",
      icon: Smartphone,
      label: "Digital Health",
      title: "Go Full-Stack in 14 Days",
      description: "One API for diagnostics, teleconsult, pharmacy, home care. Revenue +73%.",
      challenges: [
        "Thin margins (10-15%)",
        "High CAC, low repeat",
        "Can't reach Tier 2/3",
        "No care continuity"
      ],
      benefits: [
        "Full stack via one API",
        "Auto-flow reports",
        "Revenue: ₹800 → ₹1,380",
        "Churn -30-50%"
      ],
      proof: "Revenue per customer 2-3x",
      cta: "Go Full-Stack",
      link: "/who-we-serve/digital-health-platforms"
    },
    {
      id: "providers",
      icon: Building,
      label: "Providers",
      title: "Fill Capacity, Double Revenue",
      description: "40% → 60-70% utilization. Margins +15-25%. Payment in 15 days.",
      challenges: [
        "40-50% utilization",
        "No digital demand access",
        "60-90 day payment cycles",
        "Margin erosion"
      ],
      benefits: [
        "Steady B2B demand",
        "Utilization to 60-70%",
        "Revenue doubles, margins +15-25%",
        "15-day payments"
      ],
      proof: "Labs doubled revenue",
      cta: "Join Network",
      link: "/who-we-serve/providers"
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
            Infrastructure for insurers, healthtech, providers, and disease management
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

                    <Link to={persona.link}>
                      <Button size="lg" className="btn-gradient w-full sm:w-auto">
                        {persona.cta}
                      </Button>
                    </Link>
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