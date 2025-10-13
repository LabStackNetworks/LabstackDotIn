import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                  Build Products, Not Plumbing
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Stop rebuilding infrastructure. Launch diagnostics, teleconsults, pharmacy, and home care 
                  in 14 days. One API. One network. Nationwide scale.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">14-day average go-live (not 12 months)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">98% on-time delivery, &lt;2% rejection rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Deep integration—not aggregation</span>
                </div>
              </div>

              <Button size="lg" className="w-full btn-gradient text-lg py-3 h-auto shadow-elegant">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

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
                  Fill Capacity. Earn Predictably.
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Join India's most credentialed healthcare network. Access steady B2B demand. 
                  Increase utilization from 40% to 60-70%. Payment in 15 days, not 90.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Steady B2B demand fills idle capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Revenue doubles, margins +15-25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Logistics & reconciliation handled</span>
                </div>
              </div>

              <Button size="lg" variant="outline" className="w-full btn-outline-gradient text-lg py-3 h-auto">
                <Users className="mr-2 h-5 w-5" />
                Join the Network
              </Button>

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