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
      title: "OPD Fulfilment for Healthcare Insurers",
      description: "A diagnostics, pharmacy, and consultation fulfillment platform that healthcare insurers can launch with API or console. Turn claim costs into revenue with fraud controls and automated reconciliation.",
      challenges: [
        "15-20% claims fraud and leakage",
        "₹200-400 processing cost per ₹500 claim",
        "PPMC launch delays lose customers",
        "No preventive care infrastructure"
      ],
      benefits: [
        "Claims fraud reduced to under 1%",
        "PPMC launch in 14 days nationwide",
        "Processing cost under ₹100 per claim",
        "Built-in preventive care programs"
      ],
      proof: "Policy conversion over 75% with fast PPMC",
      cta: "Launch OPD Services",
      link: "/who-we-serve/insurers-tpas"
    },
    {
      id: "disease-management",
      icon: Heart,
      label: "Disease Management",
      title: "Protocol-Driven Care for Chronic Conditions",
      description: "A care delivery platform that disease management companies use to launch protocol-driven pathways via API or console. Close care loops with 95%+ test completion and structured health data.",
      challenges: [
        "25-35% patient drop-off on diagnostic tests",
        "Broken care loops between test and treatment",
        "Cannot prove clinical efficacy or outcomes",
        "High customer acquisition cost with low lifetime value"
      ],
      benefits: [
        "Over 90% test completion with 24-hour turnaround",
        "Automated data flow to care teams",
        "Nationwide coverage across 9,000 pincodes",
        "Patient churn reduced from 35% to under 15%"
      ],
      proof: "Customer lifetime value improved by 2.5 to 3 times",
      cta: "Launch Care Programs",
      link: "/who-we-serve/disease-management"
    },
    {
      id: "brokers",
      icon: Users,
      label: "Brokers & Corporate Wellness",
      title: "OPD Benefits for Insurance Brokers",
      description: "An OPD benefit platform that insurance brokers and corporate wellness programs can offer via API or console. Grow revenue per policy with nationwide healthcare service fulfillment.",
      challenges: [
        "Revenue capped at one-time commission",
        "Rising customer acquisition costs with flat lifetime value",
        "No service differentiation in competitive RFPs",
        "Zero recurring revenue streams"
      ],  
      benefits: [
        "Revenue doubles in 12 months with recurring streams",
        "White-label platform under broker brand",
        "Win more RFPs with differentiated OPD offerings",
        "Revenue growth of 30-40% without additional headcount"
      ],
      proof: "Customer lifetime value increased by 3 to 5 times",
      cta: "Launch OPD Benefits",
      link: "/who-we-serve/brokers-aggregators"
    },
    {
      id: "digital-health",
      icon: Smartphone,
      label: "Digital Health Platforms",
      title: "Full-Stack Healthcare for Healthtech",
      description: "A healthcare infrastructure platform that digital health companies can launch with one API. Go from single service to full-stack healthcare delivery nationwide in 14 days.",
      challenges: [
        "Thin operating margins of 10-15%",
        "High customer acquisition cost with low repeat usage",
        "Cannot reach Tier-2 and Tier-3 markets",
        "No care continuity across services"
      ],
      benefits: [
        "Full healthcare stack via one API integration",
        "Automated report and prescription flows",
        "Revenue per customer grows from ₹800 to ₹1,380",
        "Customer churn reduced by 30-50%"
      ],
      proof: "Revenue per customer increased by 2 to 3 times",
      cta: "Launch Full-Stack",
      link: "/who-we-serve/digital-health-platforms"
    },
    {
      id: "providers",
      icon: Building,
      label: "Healthcare Providers",
      title: "B2B Demand for Healthcare Providers",
      description: "A partner network that healthcare providers join to receive steady B2B demand via API or console. Increase utilization from 40% to 60-70% with 30-day payment terms.",
      challenges: [
        "Capacity utilization stuck at 40-50%",
        "No access to digital and B2B demand channels",
        "Payment cycles stretch to 60-90 days",
        "Price competition eroding margins"
      ],
      benefits: [
        "Steady B2B demand from insurers and healthtech",
        "Utilization increases to 60-70%",
        "Revenue doubles with margins up 15-25%",
        "Payment received within 30 days"
      ],
      proof: "Provider partners doubled revenue within 12 months",
      cta: "Join Provider Network",
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
            Healthcare fulfillment platform for insurers, brokers, disease management companies, digital health platforms, and providers
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