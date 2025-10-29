import { Network, Zap, CreditCard, Brain, Stethoscope, Smartphone, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      description: "Access comprehensive healthcare network including labs, pharmacies, home care, and specialist services.",
      features: [
        "Home sample pickup",
        "Center visits & consultations", 
        "Pharmacy partnerships",
        "At-home services"
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
        {/* Section 1: Healthcare Infrastructure Foundation */}
        <div className="mb-32">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm uppercase tracking-wider">THE FOUNDATION</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
                Healthcare Infrastructure <span className="text-gradient">Made Simple</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Labstack gives you a full healthcare delivery stack. Plug it into your product, launch care anywhere.
              </p>
            </div>

            {/* Main Feature Container */}
            <div className="bg-card rounded-xl shadow-lg border border-border p-8 mb-10 transition-all duration-300 hover:shadow-xl">
              {/* What Developers Get Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-heading font-bold text-center mb-8">
                  What developers get to <span className="text-gradient">build with</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* APIs Card */}
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full cursor-pointer group">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-muted rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Code className="h-10 w-10 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-gradient transition-colors duration-300">APIs</h4>
                      <p className="text-sm text-muted-foreground">Program bookings, prescriptions, home visits, and payments</p>
                    </div>
                  </div>

                  {/* Widgets Card */}
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full cursor-pointer group">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-muted rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Smartphone className="h-10 w-10 text-secondary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-gradient transition-colors duration-300">Widgets</h4>
                      <p className="text-sm text-muted-foreground">Care journeys that drop right into your UI</p>
                    </div>
                  </div>

                  {/* Console Card */}
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full cursor-pointer group">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-muted rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="h-10 w-10 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-gradient transition-colors duration-300">Console</h4>
                      <p className="text-sm text-muted-foreground">Run operations with zero new headcount</p>
                    </div>
                  </div>
                </div>

                {/* Pain Elimination Banner */}
                <div className="bg-gradient-to-r from-destructive/10 to-success/10 border border-border rounded-xl p-6 text-center">
                  <p className="text-lg font-semibold">
                    <span className="text-destructive line-through mr-2">No stitching.</span>
                    <span className="text-destructive line-through mr-2">No local setups.</span>
                    <span className="text-destructive line-through">No chasing providers.</span>
                  </p>
                </div>
              </div>

              {/* Flow Separator */}
              <div className="relative h-16 mb-10">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted-foreground"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                  <div className="bg-muted-foreground rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-card rotate-90">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:hidden flex justify-center items-center h-full">
                  <div className="w-1/3 h-0.5 bg-border"></div>
                  <div className="bg-muted-foreground rounded-full p-1 mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-card">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="w-1/3 h-0.5 bg-border"></div>
                </div>
              </div>

              {/* What Instantly Turns On */}
              <div className="mb-10">
                <h3 className="text-2xl font-heading font-bold text-center mb-8">
                  What instantly <span className="text-gradient">turns on</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Benefit Cards - Now 4 boxes */}
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="bg-success/20 rounded-full p-3 flex-shrink-0">
                        <Globe className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Nationwide Coverage</h4>
                        <p className="text-sm text-muted-foreground">Diagnostics, doctors, pharmacy, home care</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Predictable Operations</h4>
                        <p className="text-sm text-muted-foreground">SLA routing, compliance, real-time tracking</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Raw Values</h4>
                        <p className="text-sm text-muted-foreground">Harmonise values for each service, interoperable data across services</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="bg-success/20 rounded-full p-3 flex-shrink-0">
                        <Stethoscope className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Full Brand Control</h4>
                        <p className="text-sm text-muted-foreground">Your experience, powered quietly by us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Separator 2 */}
              <div className="relative h-16 mb-10">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted-foreground"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                  <div className="bg-muted-foreground rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-card rotate-90">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:hidden flex justify-center items-center h-full">
                  <div className="w-1/3 h-0.5 bg-border"></div>
                  <div className="bg-muted-foreground rounded-full p-1 mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-card">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="w-1/3 h-0.5 bg-border"></div>
                </div>
              </div>

              {/* How It Ramps */}
              <div className="bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg p-6 sm:p-8 mb-10 shadow-md">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-center mb-6">
                    How it <span className="text-gradient">ramps</span>
                  </h3>
                  
                  <div className="relative mb-6">
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full animate-progress"></div>
                    </div>
                  </div>
                  
                  <div className="grid gap-3 grid-cols-2 md:grid-cols-4 mb-6">
                    <div className="text-center p-3 rounded transition-all duration-1000 delay-[0ms] opacity-0 animate-fade-in border bg-card/50">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full p-2 mb-2 bg-primary/30 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-bold font-heading">Plan</span>
                      </div>
                    </div>
                    <div className="text-center p-3 rounded transition-all duration-1000 delay-[400ms] opacity-0 animate-fade-in border bg-card/50">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full p-2 mb-2 bg-primary/30 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm font-bold font-heading">Integrate</span>
                      </div>
                    </div>
                    <div className="text-center p-3 rounded transition-all duration-1000 delay-[800ms] opacity-0 animate-fade-in border bg-card/50">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full p-2 mb-2 bg-primary/30 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                            <path d="m3.3 7 8.7 5 8.7-5"></path>
                            <path d="M12 22V12"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-bold font-heading">Go Live</span>
                      </div>
                    </div>
                    <div className="text-center p-3 rounded transition-all duration-1000 delay-[1200ms] opacity-0 animate-fade-in border bg-card/50">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full p-2 mb-2 bg-secondary/30 text-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                            <path d="M16 16h5v5"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-bold font-heading">Optimize</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="bg-success/20 rounded-full p-2 mr-3">
                      <Brain className="h-5 w-5 text-success" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The system keeps improving itself through signals and AI routing
                    </p>
                  </div>
                </div>
              </div>

              {/* The Idea - Final Message */}
              <div className="bg-gradient-hero rounded-xl p-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                  The <span className="text-gradient">idea</span>
                </h3>
                <p className="text-lg text-foreground mb-2">
                  You focus on products and growth.
                </p>
                <p className="text-lg font-semibold">
                  Labstack handles care delivery <span className="text-gradient">everywhere</span>.
                </p>
              </div>
            </div>
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
          <Link to="/custom-solutions">
            <Button size="lg" variant="outline" className="btn-outline-gradient text-lg px-8 py-3 h-auto shadow-elegant hover:shadow-glow transform transition-all duration-300 hover:scale-105">
              Discuss Custom Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;