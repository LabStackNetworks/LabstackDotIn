import { useState } from "react";
import { Rocket, Heart, Building, Shield, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhoWeServe = () => {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      id: "insurers",
      icon: Shield,
      label: "Insurers & TPAs",
      title: "Cashless OPD with Zero Fraud Risk",
      description: "Launch OPD benefits in 24 hours. Real-time fraud detection. PPMC in <48hrs. Convert OPD from a cost center to growth driver with predictable delivery and measurable outcomes.",
      challenges: [
        "15-20% fraud in OPD claims",
        "₹200-400 processing cost on ₹500-2,000 claims",
        "PPMC delays killing sales (5-10 days = 8-12% conversion loss)",
        "No preventive care infrastructure"
      ],
      benefits: [
        "OPD fraud reduced to <5%",
        "PPMC completed in <48 hours",
        "Processing cost reduced to <₹100",
        "Preventive programs with underwriting data"
      ],
      proof: "Conversion jumped >75% with instant PPMC",
      cta: "Transform OPD"
    },
    {
      id: "disease-management",
      icon: Heart,
      label: "Disease Management",
      title: "Close the Care Loop, Prove Efficacy",
      description: "Stop losing patients between services. 95%+ test completion. Structured data for outcomes. Nursing, specialists, pharmacy—all connected. Scale to multiple conditions without operations overhead.",
      challenges: [
        "25-35% patients never complete testing",
        "Care loops break: diagnostics gaps, no specialist network, missing home care",
        "Can't prove efficacy without complete data",
        "High CAC, low LTV, stuck in single condition"
      ],
      benefits: [
        ">90% test completion with 24hr turnaround",
        "Reports auto-flow to care teams",
        "Home care & specialist consults across 9,000 pincodes",
        "Churn drops from 35% to <15%"
      ],
      proof: "LTV improved 2.5-3x with complete care delivery",
      cta: "Scale Disease Management"
    },
    {
      id: "brokers",
      icon: Users,
      label: "Brokers & Aggregators",
      title: "Own the Full Health Wallet",
      description: "Turn ₹1,500 insurance commission into ₹3,000+ recurring revenue. Add PPMC, OPD, preventive, emergency without building anything. Win RFPs, reduce churn, expand wallet share.",
      challenges: [
        "Commission capped at ₹500-2,000, then nothing",
        "Rising CAC, flat LTV",
        "HR renews on experience—cashless failure = lost account",
        "No new revenue from existing customers"
      ],  
      benefits: [
        "Revenue per customer doubles in 12 months",
        "Full-stack health platform under your brand",
        "Win RFPs with unmatched benefits",
        "30-40% revenue growth without new headcount"
      ],
      proof: "LTV increased 3-5x with healthcare wallet expansion",
      cta: "Expand Revenue"
    },
    {
      id: "digital-health",
      icon: Smartphone,
      label: "Digital Health Platforms",
      title: "Go Full-Stack in 14 Days",
      description: "Turn single-service apps into full-stack health platforms. True connected care: prescriptions → diagnostics → reports → follow-ups. Revenue per customer jumps 2-3x.",
      challenges: [
        "Single-service models have thin margins (10-15%)",
        "High CAC, low repeat",
        "Can't scale to Tier 2/3—gaps push users away",
        "Connected care is marketing, not reality"
      ],
      benefits: [
        "Launch diagnostics, teleconsult, pharmacy, home care via one API",
        "Reports auto-flow back for true care continuity",
        "Revenue per customer increases 73% (₹800→₹1,380)",
        "Churn drops 30-50%, LTV/CAC >3"
      ],
      proof: "Full-stack platforms see 2-3x revenue per customer",
      cta: "Build Full-Stack Health"
    },
    {
      id: "providers",
      icon: Building,
      label: "Providers",
      title: "Fill Capacity, Modernize Operations",
      description: "40-50% utilization? Join Labstack to access steady B2B demand. Increase utilization to 60-70%, double revenue, improve margins 15-25%. Payment in 15 days, not 90.",
      challenges: [
        "40-50% capacity utilization, fixed costs crushing margins",
        "Can't tap digital/B2B demand without tech",
        "60-90 day reconciliation cycles",
        "Price wars eroding margins"
      ],
      benefits: [
        "Steady B2B demand fills idle capacity",
        "Utilization increases to 60-70%",
        "Revenue doubles, margins improve 15-25%",
        "Payment in 15 days, logistics handled"
      ],
      proof: "Labs doubled revenue with improved utilization",
      cta: "Join Provider Network"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="mobile-section-title font-heading font-bold mb-6">
            Built for Every Player in <span className="text-gradient">Healthcare</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground">
            From insurers and healthtech to providers and disease management platforms—infrastructure that scales with your ambition
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