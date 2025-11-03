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
      value: "10,000+",
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
    { region: "Tier-2 Cities", coverage: "80%", color: "bg-success" },
    { region: "Tier-3 Cities", coverage: "60%", color: "bg-warning" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
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
                <div className="relative h-80 bg-muted/30 rounded-xl overflow-hidden mb-6">
                  {/* Google Maps Static Image with pins across India */}
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=22.5,78.9&zoom=5&size=640x640&maptype=roadmap&markers=color:red%7C28.6139,77.2090&markers=color:red%7C19.0760,72.8777&markers=color:red%7C13.0827,80.2707&markers=color:red%7C12.9716,77.5946&markers=color:red%7C22.5726,88.3639&markers=color:red%7C17.3850,78.4867&markers=color:red%7C18.5204,73.8567&markers=color:red%7C23.0225,72.5714&markers=color:red%7C26.9124,75.7873&markers=color:red%7C21.1458,79.0882&markers=color:red%7C15.2993,74.1240&markers=color:red%7C25.5941,85.1376&markers=color:red%7C11.0168,76.9558&markers=color:red%7C23.2599,77.4126&markers=color:red%7C30.7333,76.7794&markers=color:red%7C26.8467,80.9462&markers=color:red%7C22.7196,75.8577&markers=color:red%7C31.1048,77.1734&markers=color:red%7C10.8505,76.2711&markers=color:red%7C25.4358,81.8463&markers=color:blue%7C27.1767,78.0081&markers=color:blue%7C24.5854,73.7125&markers=color:blue%7C16.7050,74.2433&markers=color:blue%7C20.5937,78.9629&markers=color:blue%7C19.9975,73.7898&markers=color:blue%7C28.4595,77.0266&markers=color:blue%7C22.3072,73.1812&markers=color:blue%7C15.8281,74.4978&markers=color:blue%7C14.6819,77.5985&markers=color:blue%7C23.8103,91.2821&markers=color:green%7C24.7914,85.0002&markers=color:green%7C25.3176,82.9739&markers=color:green%7C29.9457,78.1642&markers=color:green%7C21.2514,81.6296&markers=color:green%7C23.3441,85.3096&markers=color:green%7C18.1124,83.3975&markers=color:green%7C14.4426,79.9865&markers=color:green%7C12.2958,76.6394&markers=color:green%7C27.5706,95.3174&markers=color:green%7C26.4499,87.2843&key=AIzaSyDummyKeyForVisualizationPurposes" 
                    alt="India coverage map showing 10000+ pincodes"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to original visualization if Google Maps fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback visualization if Google Maps doesn't load */}
                  <div className="absolute inset-0 hidden items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl opacity-50"></div>
                      
                      {/* Simplified pin visualization */}
                      <div className="absolute top-[25%] left-[40%]">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse-subtle"></div>
                      </div>
                      <div className="absolute top-[45%] left-[20%]">
                        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-subtle"></div>
                      </div>
                      <div className="absolute bottom-[25%] left-[30%]">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse-subtle"></div>
                      </div>
                      <div className="absolute bottom-[20%] left-[35%]">
                        <div className="w-3 h-3 bg-warning rounded-full animate-pulse-subtle"></div>
                      </div>
                      <div className="absolute top-[35%] right-[25%]">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse-subtle"></div>
                      </div>
                      
                      <div className="text-center z-10">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-muted-foreground">
                          10,000+ Pincodes Covered
                        </div>
                        <div className="text-xs text-muted-foreground/70 mt-1">
                          Pan-India Healthcare Network
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay badge showing pincode coverage */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs font-medium">Pincode Coverage</div>
                    <div className="text-lg font-bold">10,000+</div>
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