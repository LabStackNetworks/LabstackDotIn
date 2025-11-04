/**
 * Hero Section Component
 * 
 * Main hero section for the homepage featuring:
 * - Animated badge with pulse effect
 * - Responsive gradient headline
 * - Key value propositions
 * - Primary and secondary CTAs
 * - Scrolling logo wall with 41 healthcare partners
 * - Animated background elements
 * 
 * Uses 6 distinctive fonts for partner logos:
 * Manrope, DM Sans, Work Sans, Outfit, Lexend, Plus Jakarta Sans
 * 
 * @component
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButtons from "@/components/CTAButtons";

const Hero = () => {
  // Partner logos with Sora Bold font
  const trustedLogos = [
    "Plum Benefits",
    "Health Assure",
    "Star Health Insurance",
    "Fitterfly",
    "Onsurity",
    "Twin Health",
    "SugarFit",
    "Qua Nutrition",
    "Orange Health",
    "Thyrocare",
    "Redcliffe Labs",
    "Metropolis Lab",
    "PharmEasy",
    "TATA 1mg",
    "Vijaya Diagnostic",
    "Manipal Hospitals",
    "Apollo Hospitals",
    "Apollo Clinic",
    "Sakra World Hospital",
    "MySugar",
    "Zoconut",
    "Aamya",
    "Alyve Health",
    "My BerryBox",
    "Wockhardt Hospital",
    "Agilus",
    "Apollo Diagnostic",
    "Neethi Lab",
    "Medicover Hospitals",
    "Lucid Medical Diagnostic",
    "Aarthi Scans & Labs",
    "Neuberg Diagnostics",
    "The Gene Box",
    "Dr. Bakshi Advance Diagnostics",
    "Lipomic Life Sciences",
    "Prima Diagnostics",
    "Medray Diagnostics",
    "Healthians",
    "Bioline Lab",
    "Narayana Health",
    "Sparsh Hospitals",
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
                <div className="flex animate-scroll space-x-12 sm:space-x-16 lg:space-x-20">
                  {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 text-foreground/50 hover:text-foreground/80 transition-smooth font-sora font-bold whitespace-nowrap text-3xl"
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
    </section>
  );
};

export default Hero;