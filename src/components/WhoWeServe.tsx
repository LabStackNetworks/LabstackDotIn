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
      title: "Turn Claim Costs Into Revenue",
      description: "OPD fulfillment platform that healthcare insurers launch with API or console. Cut leakage 12%. Boost NPS 25 points. 99%+ SLA adherence with automated ops.",
      challenges: [
        "OPD claims are pure cost centers",
        "12-15% leakage from fraud and misuse",
        "Fragmented networks = poor NPS",
        "Manual reconciliation drains ops"
      ],
      benefits: [
        "Convert claim costs into profit centers",
        "SKU-level controls eliminate 12% leakage",
        "Premium services drive additional revenue",
        "Automated ops reduce cost-to-serve by 40%"
      ],
      proof: "12% cost savings + 40% lower ops cost per transaction",
      cta: "Transform Member Experience",
      link: "/who-we-serve/insurers-tpas"
    },
    {
      id: "insuretech",
      icon: Rocket,
      label: "InsureTech",
      title: "Make Healthcare Benefits a Revenue Engine",
      description: "Healthcare delivery platform that InsureTech companies launch with API or console. Turn benefits into revenue streams. Launch nationwide in 14 days. Higher renewals, incremental revenue.",
      challenges: [
        "Low utilization = lost outcomes and revenue",
        "Fragmented delivery kills trust",
        "Ops friction stalls launches",
        "Support cost rises with uncertainty"
      ],
      benefits: [
        "Incremental revenue from service fulfillment",
        "Faster launches (≈14 days nationwide)",
        "Higher renewal and NPS with real value",
        "Own the healthcare wallet beyond premiums"
      ],
      proof: "40% higher renewals with active healthcare usage",
      cta: "Launch Healthcare Services",
      link: "/who-we-serve/insuretech"
    },
    {
      id: "disease-management",
      icon: Heart,
      label: "Disease Management",
      title: "Close Care Loops. Zero Vendor Maze",
      description: "Care delivery platform that disease management companies launch with API or console. Protocol-driven pathways with 90%+ completion rates and structured longitudinal data.",
      challenges: [
        "Patients drop off: test → consult → meds",
        "Reports stuck in PDFs, no clinical insight",
        "Manual nudges don't scale",
        "Limited network prevents continuity"
      ],
      benefits: [
        "Protocol pathways for tests, consults, pharmacy linked",
        "Raw digital values with longitudinal structured data",
        "Automated follow-ups for adherence",
        "Nationwide coverage ensures continuity"
      ],
      proof: "90%+ completion rates with protocol-driven care",
      cta: "See Full Care Journey",
      link: "/who-we-serve/disease-management"
    },
    {
      id: "brokers",
      icon: Users,
      label: "Brokers & Corporate Wellness",
      title: "Turn Policies Into Revenue Machines",
      description: "OPD benefits platform that insurance brokers launch with API or console. Grow ARPU 15%. Embedded OPD benefits with prescription monetization across 9,000+ pincodes.",
      challenges: [
        "Policies look same with OPD under-monetized",
        "Execution breaks outside metros",
        "Commission capped at ₹500-2K",
        "Multi-city vendor reconciliation pain"
      ],  
      benefits: [
        "OPD bundles differentiate policies",
        "Nationwide fulfillment Tier-1 to Tier-3",
        "Prescription monetization to grow ARPU ~15%",
        "Pure B2B model with your brand, your revenue"
      ],
      proof: "~15% ARPU uplift with prescription monetization",
      cta: "Expand Your Portfolio",
      link: "/who-we-serve/brokers-corporate-wellness"
    },
    {
      id: "digital-health",
      icon: Smartphone,
      label: "Digital Health Platforms",
      title: "Launch Nationwide in 14 Days",
      description: "Healthcare infrastructure platform that digital health companies launch with one API. Skip 18 months of ops building. 30K+ orders/month capacity. Scale revenue without scaling headcount.",
      challenges: [
        "12-18 months lost signing vendor contracts",
        "No standard SLAs with ops break city by city",
        "Engineers pulled into compliance vs growth",
        "Investors want nationwide coverage yesterday"
      ],
      benefits: [
        "48 hour launch with infra ready nationwide",
        "One API • One Console • One Network",
        "9K+ pincodes, 30K+ orders/month capacity",
        "Pure B2B model where your customers remain yours"
      ],
      proof: "14 days to go live vs 12-18 months building",
      cta: "Explore Integration",
      link: "/who-we-serve/digital-health-platforms"
    },
    {
      id: "providers",
      icon: Building,
      label: "Healthcare Providers",
      title: "Fill Your Calendar. Zero Marketing Spend",
      description: "Partner network that healthcare providers join to receive steady B2B demand via API or console. Guaranteed patient volumes from insurers, enterprises, and digital health platforms.",
      challenges: [
        "40-50% utilization with fixed costs crushing margins",
        "Can't tap digital/B2B demand without tech platform",
        "Price wars shrink margins further",
        "60-90 day reconciliation cycles"
      ],
      benefits: [
        "Steady B2B demand from insurers, corporates, healthtech",
        "Utilization jumps from 40% to 60-70%",
        "Revenue doubles, margins increase 15 to 25%",
        "Payment in 30 days"
      ],
      proof: "Utilization 60 to 70% with predictable B2B revenue",
      cta: "Join the Network",
      link: "/who-we-serve/providers"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-background">
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