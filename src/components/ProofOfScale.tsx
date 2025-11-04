import { useState } from "react";
import { MapPin, TrendingUp, CheckCircle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProofOfScale = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const metrics = [
    {
      icon: TrendingUp,
      value: "30,000+",
      label: "orders/month",
      description: "Growing healthcare services delivered",
      color: "text-primary"
    },
    {
      icon: MapPin,
      value: "5,000+",
      label: "active partners", 
      description: "Verified provider network",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      value: "Tier 3",
      label: "coverage",
      description: "Metros to tier-3 cities",
      color: "text-success"
    },
    {
      icon: Activity,
      value: "99.5%",
      label: "uptime",
      description: "Enterprise-grade reliability",
      color: "text-warning"
    }
  ];

  const coverageStats = [
    { region: "Metro Cities", coverage: "100%", color: "bg-primary" },
    { region: "Tier-1 Cities", coverage: "95%", color: "bg-secondary" },
    { region: "Tier-2 Cities", coverage: "80%", color: "bg-success" },
    { region: "Tier-3 Cities", coverage: "60%", color: "bg-warning" }
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Nationwide Scale</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Numbers that demonstrate our reach and reliability across India
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="card-gradient p-6 lg:p-8 rounded-2xl text-center card-hover group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-card flex items-center justify-center group-hover:scale-110 transition-smooth ${metric.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground/80">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Map Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Visualization */}
            <div className="relative">
              <div className="bg-card-gradient rounded-2xl p-8 border border-border/50 overflow-hidden">
                <div className="relative h-80 bg-muted/30 rounded-xl flex items-center justify-center mb-6">
                  {/* India Map with Healthcare Hotspots */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-50"></div>
                    
                    {/* Major Healthcare Hotspots across India */}
                    {/* Delhi/NCR */}
                    <div className="absolute top-[25%] left-[40%] group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-pulse-subtle glow-primary cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Delhi NCR - 500+ Centers
                      </div>
                    </div>
                    
                    {/* Mumbai */}
                    <div className="absolute top-[45%] left-[20%] group">
                      <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-subtle glow-secondary cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Mumbai - 400+ Centers
                      </div>
                    </div>
                    
                    {/* Bangalore */}
                    <div className="absolute bottom-[25%] left-[30%] group">
                      <div className="w-4 h-4 bg-success rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Bangalore - 350+ Centers
                      </div>
                    </div>
                    
                    {/* Chennai */}
                    <div className="absolute bottom-[20%] left-[35%] group">
                      <div className="w-4 h-4 bg-warning rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Chennai - 300+ Centers
                      </div>
                    </div>
                    
                    {/* Kolkata */}
                    <div className="absolute top-[35%] right-[25%] group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Kolkata - 250+ Centers
                      </div>
                    </div>
                    
                    {/* Hyderabad */}
                    <div className="absolute bottom-[35%] left-[45%] group">
                      <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Hyderabad - 200+ Centers
                      </div>
                    </div>
                    
                    {/* Pune */}
                    <div className="absolute top-[50%] left-[25%] group">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Pune - 180+ Centers
                      </div>
                    </div>
                    
                    {/* Ahmedabad */}
                    <div className="absolute top-[40%] left-[15%] group">
                      <div className="w-3 h-3 bg-warning rounded-full animate-pulse-subtle cursor-pointer"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Ahmedabad - 150+ Centers
                      </div>
                    </div>
                    
                    {/* Connecting lines animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                      <path d="M 32% 25% Q 40% 35% 48% 45%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                      </path>
                      <path d="M 20% 45% Q 35% 40% 48% 35%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite"/>
                      </path>
                    </svg>
                    
                    <div className="text-center z-10">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-muted-foreground">
                        Healthcare Network Across India
                      </div>
                      <div className="text-xs text-muted-foreground/70 mt-1">
                        2,600+ Active Service Centers
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">Live Network Status</span>
                    </div>
                    <div className="text-xs text-muted-foreground">99.5% Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Stats */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6 text-foreground">
                Comprehensive Geographic Coverage
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our network spans from metropolitan cities to tier-3 towns, ensuring consistent 
                healthcare access across India's diverse geography.
              </p>

              <div className="space-y-4 mb-8">
                {coverageStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${stat.color}`}></div>
                      <span className="font-medium text-foreground">{stat.region}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-bold text-foreground">{stat.coverage}</div>
                        <div className="text-xs text-muted-foreground">coverage</div>
                      </div>
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${stat.color} rounded-full transition-all duration-1000`}
                          style={{ width: stat.coverage }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Enterprise-Grade Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      Our infrastructure is built for mission-critical healthcare operations with 
                      99.5% uptime SLA and real-time monitoring across all service points.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/solutions/coverage-expansion">
            <Button size="lg" className="btn-gradient mobile-btn-lg mobile-tap-highlight">
              Explore Our Network
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProofOfScale;