import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DualCTA = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Builders */}
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-medium text-sm">FOR BUILDERS</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  Launch in 14 Days
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  One API for diagnostics, teleconsults, pharmacy, home care. Nationwide.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">14-day go-live</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">98% on-time, &lt;2% rejection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">9,000+ pincodes</span>
                </div>
              </div>

              <Link to="/book-demo" className="w-full">
                <Button size="lg" className="w-full btn-gradient text-lg py-3 h-auto shadow-elegant">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground/60">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>
          </div>

          {/* For Providers */}
          <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-4">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-secondary font-medium text-sm">FOR PROVIDERS</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  Fill Capacity, Earn More
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Join India's healthcare network. Steady B2B demand. 40% → 60-70% utilization. 15-day payments.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Steady B2B demand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Revenue 2x, margins +15-25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Logistics handled</span>
                </div>
              </div>

              <Link to="/who-we-serve/providers" className="w-full">
                <Button size="lg" variant="outline" className="w-full btn-outline-gradient text-lg py-3 h-auto">
                  <Users className="mr-2 h-5 w-5" />
                  Join the Network
                </Button>
              </Link>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground/60">
                  Apply today • Get verified • Start earning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
              <div className="text-sm text-muted-foreground">Pincodes covered nationwide</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient mb-2">2,600+</div>
              <div className="text-sm text-muted-foreground">Service centers across India</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">On-time delivery guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;