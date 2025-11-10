import { useState } from "react";
import { Clock, Settings, Network, Cpu, TrendingUp, ArrowRight } from "lucide-react";

const ValuePropositionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "time-to-market",
      icon: Clock,
      label: "Time to Market",
      title: "Deploy in Days with Ready APIs",
      description: "Stop spending 12-18 months building healthcare infrastructure. Our pre-built APIs and networks let you launch nationwide healthcare services in days, not months.",
      features: [
        "14-day go-live capability",
        "Pre-integrated provider networks", 
        "Production-ready APIs",
        "Automated compliance frameworks"
      ],
      stat: "95% faster launch time",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "operations",
      icon: Settings,
      label: "Operations",
      title: "Automated Workflows, Fewer Errors",
      description: "Eliminate operational complexity with intelligent automation. Our platform handles routing, escalations, SLA monitoring, and quality control automatically.",
      features: [
        "Smart routing algorithms",
        "Automated escalation workflows",
        "Real-time SLA monitoring", 
        "Quality assurance automation"
      ],
      stat: "99.5% uptime guaranteed",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Network,
      label: "Network Access",
      title: "Metros to Tier-3 Coverage",
      description: "Access 5,000+ verified healthcare partners across India. From metros to tier-3 cities, deliver consistent care with nationwide reach.",
      features: [
        "Diagnostics: 9,000+ pincodes (home)",
        "Pharmacy: 15,000+ pincodes",
        "Center visits: 2,600+ locations", 
        "Consultations: Nationwide coverage"
      ],
      stat: "5,000+ active partners",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: "technology",
      icon: Cpu,
      label: "Technology",
      title: "Single API, Infinite Scale",
      description: "Modern, developer-friendly APIs built for scale. Get structured data, not PDFs. Integrate once and access our entire healthcare ecosystem.",
      features: [
        "RESTful APIs with real-time data",
        "Structured health data formats",
        "Comprehensive webhook support",
        "Comprehensive SDKs"
      ],
      stat: "One API for everything",
      color: "from-orange-500 to-red-600"
    },
    {
      id: "business-model",
      icon: TrendingUp,
      label: "Business Model",
      title: "Transaction-Based Pricing",
      description: "Pay only for what you use. No upfront costs, no hidden fees. Scale economics that grow with your business.",
      features: [
        "Usage-based pricing model",
        "Transparent per-transaction costs",
        "No vendor lock-in",
        "White-label capabilities"
      ],
      stat: "100% partner-friendly",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Why Modern Healthcare Teams <span className="text-gradient">Love Labstack</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Five core advantages that make healthcare infrastructure effortless
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Compact Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center space-x-2 px-6 py-4 rounded-2xl transition-all duration-500 font-medium border ${
                    activeTab === index
                      ? 'bg-gradient-primary text-white shadow-elegant border-transparent scale-105'
                      : 'bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-card border-border/50 hover:border-border hover:scale-102'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span className="text-xs sm:text-sm lg:text-base whitespace-nowrap">{tab.label}</span>
                
                </button>
              );
            })}
          </div>

          {/* Enhanced Tab Content */}
          <div className="relative">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`transition-all duration-700 transform ${
                  activeTab === index 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible absolute inset-0 translate-y-4'
                }`}
              >
                <div className="bg-card-gradient rounded-3xl mobile-card-padding shadow-card border border-border/20 overflow-hidden relative mobile-hover-lift mobile-tap-highlight">
                  {/* Background gradient for active tab */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500`}></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                      <div>
                        <h3 className="mobile-card-title lg:text-4xl font-heading font-bold mb-4 lg:mb-6 text-foreground leading-tight">
                          {tab.title}
                        </h3>
                        <p className="mobile-text-readable lg:text-lg text-muted-foreground leading-relaxed">
                          {tab.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                        {tab.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="flex items-center space-x-3 group mobile-touch-target"
                            style={{ 
                              animation: `fade-in 0.5s ease-out ${featureIndex * 0.1}s both`
                            }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                            <span className="mobile-text-readable text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-border/20 gap-4">
                        <div className="inline-flex items-center space-x-3 bg-primary/10 border border-primary/20 px-4 sm:px-6 py-3 rounded-full mobile-touch-target">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-primary font-semibold text-sm sm:text-base">{tab.stat}</span>
                        </div>
                        
                        <ArrowRight className="w-6 h-6 text-muted-foreground/50 hidden sm:block" />
                      </div>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="relative order-1 lg:order-2">
                      <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 border border-border/50 relative overflow-hidden mobile-hover-lift">
                        <div className={`absolute inset-0 bg-gradient-to-br ${tab.color} opacity-10`}></div>
                        <div className="relative z-10 flex items-center justify-center h-48 sm:h-64">
                          <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${tab.color} flex items-center justify-center shadow-elegant transform transition-all duration-500 hover:scale-110 hover:rotate-6 mobile-tap-highlight`}>
                            <tab.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                          </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className={`absolute top-6 right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${tab.color} opacity-20 blur-xl`}></div>
                        <div className={`absolute bottom-6 left-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${tab.color} opacity-30 blur-lg`}></div>
                      </div>
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

export default ValuePropositionTabs;