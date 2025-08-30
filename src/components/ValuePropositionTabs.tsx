import { useState } from "react";
import { Clock, Settings, Network, Cpu, TrendingUp } from "lucide-react";

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
        "48-hour go-live capability",
        "Pre-integrated provider networks",
        "Production-ready APIs",
        "Automated compliance frameworks"
      ],
      stat: "95% faster launch time"
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
      stat: "99.5% uptime guaranteed"
    },
    {
      id: "network-access",
      icon: Network,
      label: "Network Access",
      title: "Tier-1 to Tier-3 Coverage",
      description: "Access the largest verified healthcare network in India. From metros to tier-3 cities, deliver consistent care experiences across 9,000+ pincodes.",
      features: [
        "9,000+ pincodes covered",
        "2,600+ service centres",
        "Quality-verified providers",
        "Consistent care standards"
      ],
      stat: "Nationwide reach"
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
        "Enterprise-grade security"
      ],
      stat: "One API for everything"
    },
    {
      id: "business-model",
      icon: TrendingUp,
      label: "Business Model",
      title: "Pure B2B, No Exclusivity",
      description: "We're infrastructure, not competition. Build your brand while we handle the backend. No lock-ins, no competing interests.",
      features: [
        "Non-competitive infrastructure",
        "Transparent pricing model",
        "No vendor lock-in",
        "White-label capabilities"
      ],
      stat: "100% partner-friendly"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Why Modern Healthcare Teams <span className="text-gradient">Love Labstack</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Five core advantages that make healthcare infrastructure effortless
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 bg-card rounded-2xl p-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-smooth font-medium relative ${
                    activeTab === index
                      ? 'bg-gradient-primary text-white shadow-elegant'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  
                  {/* Active indicator */}
                  {activeTab === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-card-gradient rounded-2xl p-8 lg:p-12 shadow-card">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'opacity-100 visible' : 'opacity-0 invisible absolute'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4 text-foreground">
                      {tab.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {tab.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {tab.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center space-x-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary font-semibold text-sm">{tab.stat}</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
                      <div className="w-full h-48 bg-muted/50 rounded-xl flex items-center justify-center">
                        <tab.icon className="w-16 h-16 text-muted-foreground/50" />
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