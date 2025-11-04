import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButtons from "@/components/CTAButtons";

const Hero = () => {
  const trustedLogos = [
    { name: "Plum Benefits", font: "font-manrope" },
    { name: "Health Assure", font: "font-dm-sans" },
    { name: "Star Health Insurance", font: "font-work-sans" },
    { name: "Fitterfly", font: "font-outfit" },
    { name: "Onsurity", font: "font-lexend" },
    { name: "Twin Health", font: "font-jakarta" },
    { name: "SugarFit", font: "font-manrope" },
    { name: "Qua Nutrition", font: "font-dm-sans" },
    { name: "Orange Health", font: "font-work-sans" },
    { name: "Thyrocare", font: "font-outfit" },
    { name: "Redcliffe Labs", font: "font-lexend" },
    { name: "Metropolis Lab", font: "font-jakarta" },
    { name: "PharmEasy", font: "font-manrope" },
    { name: "TATA 1mg", font: "font-dm-sans" },
    { name: "Vijaya Diagnostic", font: "font-work-sans" },
    { name: "Manipal Hospitals", font: "font-outfit" },
    { name: "Apollo Hospitals", font: "font-lexend" },
    { name: "Apollo Clinic", font: "font-jakarta" },
    { name: "Sakra World Hospital", font: "font-manrope" },
    { name: "MySugar", font: "font-dm-sans" },
    { name: "Zoconut", font: "font-work-sans" },
    { name: "Aamya", font: "font-outfit" },
    { name: "Alyve Health", font: "font-lexend" },
    { name: "My BerryBox", font: "font-jakarta" },
    { name: "Wockhardt Hospital", font: "font-manrope" },
    { name: "Agilus", font: "font-dm-sans" },
    { name: "Apollo Diagnostic", font: "font-work-sans" },
    { name: "Neethi Lab", font: "font-outfit" },
    { name: "Medicover Hospitals", font: "font-lexend" },
    { name: "Lucid Medical Diagnostic", font: "font-jakarta" },
    { name: "Aarthi Scans & Labs", font: "font-manrope" },
    { name: "Neuberg Diagnostics", font: "font-dm-sans" },
    { name: "The Gene Box", font: "font-work-sans" },
    { name: "Dr. Bakshi Advance Diagnostics", font: "font-outfit" },
    { name: "Lipomic Life Sciences", font: "font-lexend" },
    { name: "Prima Diagnostics", font: "font-jakarta" },
    { name: "Medray Diagnostics", font: "font-manrope" },
    { name: "Healthians", font: "font-dm-sans" },
    { name: "Bioline Lab", font: "font-work-sans" },
    { name: "Narayana Health", font: "font-outfit" },
    { name: "Sparsh Hospitals", font: "font-lexend" },
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
              <span className="text-gradient">Healthcare infrastructure</span>
              <br />
              that scales like software
            </h1>

            {/* Sub-headline */}
            <p className="mobile-subheading text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-center">
              One API for diagnostics, consultations, pharmacy, and home care. <span className="text-foreground font-semibold">5,000+ active partners</span> across 9,000+ pincodes. Launch in 14 days.
            </p>

            {/* Value Props */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-12 text-sm lg:text-base">
              <div className="flex items-center justify-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-full border border-border/50 mobile-touch-target">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-center">Launch in 14 days vs 12-18 months</span>
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
            <div className="flex justify-center mb-16">
              <CTAButtons 
                primaryText="Book a Demo"
                secondaryText="Start Building"
                secondaryLink="/start-building"
                className="justify-center"
              />
            </div>

            {/* Trusted By Section */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                Trusted by leading healthcare companies
              </p>
              
              {/* Scrolling Logo Strip */}
              <div className="relative overflow-hidden mobile-no-scroll-x">
                <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16">
                  {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                    <div 
                      key={index}
                      className={`flex-shrink-0 text-foreground/70 hover:text-foreground transition-smooth font-black text-xl sm:text-2xl lg:text-3xl whitespace-nowrap ${logo.font}`}
                    >
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;