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

      <div className="container mx-auto mobile-safe-padding">
        <div className="pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mobile-no-scroll-x">
            {/* Callout Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6 mobile-touch-target">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">The Growth Engine for Healthcare</span>
            </div>

            {/* Main Headline */}
            <h1 className="mobile-hero-title font-heading font-bold mb-6 leading-tight text-center">
              <span className="text-gradient">Healthcare that runs on code,</span>
              <br />
              not coordination
            </h1>

            {/* Sub-headline */}
            <p className="mobile-subheading text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-center">
              The operating system for healthcare delivery. Access verified labs, doctors, pharmacies, and home care across <span className="text-foreground font-semibold">9,000+ pincodes</span>. One integration. Predictable delivery. Nationwide scale.
            </p>

            {/* Value Props */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-12 text-sm lg:text-base">
              <div className="flex items-center justify-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-full border border-border/50 mobile-touch-target">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-center">Launch in 14 days, not 12 months</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-full border border-border/50 mobile-touch-target">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-center">98% on-time delivery, &lt;2% rejection</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-full border border-border/50 mobile-touch-target">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-center">AI-powered quality & intelligence</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="btn-gradient mobile-btn-lg mobile-tap-highlight">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-gradient mobile-btn-lg mobile-tap-highlight">
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
              <div className="relative overflow-hidden mobile-no-scroll-x">
                <div className="flex animate-scroll space-x-6 sm:space-x-8 lg:space-x-12">
                  {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 text-muted-foreground/60 hover:text-muted-foreground transition-smooth font-medium text-base sm:text-lg whitespace-nowrap"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
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