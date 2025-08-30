import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const trustedLogos = [
    "Apollo", "Manipal", "Star Health", "Thyrocare", "Orange Health", 
    "Plum", "Onsurity", "Fitterfly", "Twin Health", "Metropolis"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-gradient">Healthcare Infrastructure</span>
            <br />
            Platform
          </h1>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Launch care services in <span className="text-foreground font-semibold">days, not months</span>. 
            One API, one Console, one Network — the fastest way to scale healthcare in India.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm lg:text-base">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Coverage from Tier-1 to Tier-3 cities</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Home visits & centre visits, built-in</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Structured, actionable data</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="btn-gradient text-lg px-8 py-3 h-auto">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-gradient text-lg px-8 py-3 h-auto">
              <Play className="mr-2 h-5 w-5" />
              Start Building
            </Button>
          </div>

          {/* Trusted By Section */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              Trusted by leading healthcare companies
            </p>
            
            {/* Scrolling Logo Strip */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8 lg:space-x-12">
                {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 text-muted-foreground/60 hover:text-muted-foreground transition-smooth font-medium text-lg"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;