import { useState } from "react";
import { MapPin, TrendingUp, CheckCircle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      value: "9,000+",
      label: "pincodes covered", 
      description: "From metros to tier-3 cities",
      color: "text-secondary"
    },
    {
      icon: CheckCircle,
      value: "2,600+",
      label: "service centres",
      description: "Quality-verified provider network",
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
    { region: "Tier-2 Cities", coverage: "85%", color: "bg-success" },
    { region: "Tier-3 Cities", coverage: "70%", color: "bg-warning" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Proof of <span className="text-gradient">Nationwide Scale</span>
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
                  {/* Simplified India Map Visualization */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-50"></div>
                    
                    {/* Glowing Coverage Points */}
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse-subtle glow-primary"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse-subtle glow-secondary"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-success rounded-full animate-pulse-subtle"></div>
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-warning rounded-full animate-pulse-subtle"></div>
                    
                    <div className="text-center z-10">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-muted-foreground">
                        Interactive Coverage Map
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full btn-outline-gradient"
                  onClick={() => setIsMapExpanded(!isMapExpanded)}
                >
                  Check Coverage in Your City
                </Button>
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
          <Button size="lg" className="btn-gradient mobile-btn-lg mobile-tap-highlight">
            Explore Our Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofOfScale;