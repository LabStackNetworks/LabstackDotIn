import { useState } from "react";
import { MapPin, TrendingUp, CheckCircle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProofOfScale = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  // Generate 200+ cities with service availability
  const generateCities = () => {
    const services = ['home', 'center', 'pharmacy', 'consult'];
    const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-warning'];
    
    const cities = [
      // Major metros and tier-1
      { name: 'Delhi NCR', x: 40, y: 25, size: 'large' },
      { name: 'Mumbai', x: 20, y: 45, size: 'large' },
      { name: 'Bangalore', x: 30, y: 75, size: 'large' },
      { name: 'Chennai', x: 35, y: 80, size: 'large' },
      { name: 'Kolkata', x: 75, y: 35, size: 'large' },
      { name: 'Hyderabad', x: 45, y: 65, size: 'large' },
      { name: 'Pune', x: 25, y: 50, size: 'medium' },
      { name: 'Ahmedabad', x: 15, y: 40, size: 'medium' },
      { name: 'Jaipur', x: 28, y: 32, size: 'medium' },
      { name: 'Lucknow', x: 48, y: 28, size: 'medium' },
      { name: 'Indore', x: 32, y: 45, size: 'medium' },
      { name: 'Chandigarh', x: 35, y: 22, size: 'medium' },
      { name: 'Coimbatore', x: 28, y: 72, size: 'medium' },
      { name: 'Kochi', x: 25, y: 82, size: 'medium' },
      { name: 'Nagpur', x: 42, y: 48, size: 'medium' },
      { name: 'Bhubaneswar', x: 78, y: 42, size: 'medium' },
      { name: 'Visakhapatnam', x: 82, y: 68, size: 'medium' },
      { name: 'Vadodara', x: 18, y: 43, size: 'small' },
      { name: 'Mysore', x: 32, y: 78, size: 'small' },
      { name: 'Guwahati', x: 88, y: 30, size: 'small' }
    ];

    // Generate 180+ more tier-2 and tier-3 cities
    const additionalCities = [];
    for (let i = 0; i < 180; i++) {
      const x = 15 + Math.random() * 70;
      const y = 20 + Math.random() * 65;
      const hasHome = Math.random() > 0.2;
      const hasCenter = Math.random() > 0.1;
      const hasPharmacy = Math.random() > 0.15;
      const hasConsult = Math.random() > 0.05;
      
      additionalCities.push({
        name: `City ${i + 21}`,
        x,
        y,
        size: 'tiny',
        hasHome,
        hasCenter,
        hasPharmacy,
        hasConsult
      });
    }

    return [...cities.map(c => ({
      ...c,
      hasHome: true,
      hasCenter: true,
      hasPharmacy: true,
      hasConsult: true
    })), ...additionalCities];
  };

  const cities = generateCities();

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
                  {/* India Map with 200+ Healthcare Points */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-50"></div>
                    
                    {/* Render 200+ cities with service indicators */}
                    {cities.map((city, index) => {
                      const sizeClass = 
                        city.size === 'large' ? 'w-4 h-4' :
                        city.size === 'medium' ? 'w-3 h-3' :
                        city.size === 'small' ? 'w-2 h-2' : 'w-1.5 h-1.5';
                      
                      const colorClass = 
                        city.hasHome && city.hasCenter && city.hasPharmacy && city.hasConsult ? 'bg-primary' :
                        city.hasHome && city.hasCenter && city.hasPharmacy ? 'bg-secondary' :
                        city.hasHome && city.hasCenter ? 'bg-success' :
                        city.hasHome || city.hasCenter ? 'bg-warning' : 'bg-muted';
                      
                      return (
                        <div 
                          key={index}
                          className="absolute group cursor-pointer"
                          style={{ top: `${city.y}%`, left: `${city.x}%` }}
                        >
                          <div className={`${sizeClass} ${colorClass} rounded-full ${city.size !== 'tiny' ? 'animate-pulse-subtle' : ''}`}></div>
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm text-xs px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 border border-border/50">
                            <div className="font-semibold mb-1">{city.name}</div>
                            <div className="flex flex-col gap-0.5 text-[10px]">
                              {city.hasHome && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Home Sample</div>}
                              {city.hasCenter && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Center Visit</div>}
                              {city.hasPharmacy && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-success rounded-full"></span>Pharmacy</div>}
                              {city.hasConsult && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-warning rounded-full"></span>Consult</div>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
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
                    
                    <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm p-3 rounded-lg border border-border/50">
                      <div className="text-xs font-semibold mb-2">Service Legend</div>
                      <div className="flex flex-col gap-1.5 text-[10px]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>All Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>3 Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span>2 Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-warning rounded-full"></div>
                          <span>1 Service</span>
                        </div>
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