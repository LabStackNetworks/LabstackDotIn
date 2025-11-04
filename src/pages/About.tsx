import { Target, Users, Zap, Shield, ArrowRight, Network, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { generateOrganizationSchema } from "@/lib/structured-data";

const About = () => {
  const structuredData = generateOrganizationSchema();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Labstack"
        description="Building the world's most dependable infrastructure for delivering care. Partner growth first, depth over aggregation, predictability builds trust."
        keywords="about labstack, healthcare infrastructure company, healthcare technology Bangalore, health tech India"
        canonical="https://labstack.in/about"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Labstack is building the operating system for healthcare delivery in India. Making healthcare run on code, not coordination. Infrastructure platform connecting insurers, brokers, disease management companies, and digital health platforms with nationwide provider networks across 9,000+ pincodes."
            keyPoints={[
              "Healthcare infrastructure platform for B2B businesses",
              "Nationwide coverage: 9,000+ pincodes, 30K+ orders/month capacity",
              "Complete services: diagnostics, pharmacy, consultations, chronic care",
              "Partner-first approach with SLA-backed operations",
              "Predictable platform enabling healthcare businesses to scale"
            ]}
          />
        </div>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                The Operating System for <span className="text-gradient">Healthcare Delivery</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                Making healthcare run on code, not coordination.
              </p>
              <p className="text-xl font-semibold text-foreground">
                The growth engine for healthcare.
              </p>
            </div>

            {/* What We See */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold mb-6">What We See</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                India's healthcare is powerful but fragmented. Thousands of providers, each with their own systems and processes, make it hard to deliver care at scale.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  Businesses lose 12-18 months just to get basic services live
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Providers operate in silos with no shared standards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Patients face delays, confusion, and uneven quality</span>
                </li>
              </ul>
            </div>

            {/* What We're Building */}
            <div className="max-w-4xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-6">What We're Building</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A nationwide, API-powered healthcare infrastructure: diagnostics, consultations, pharmacy, home care, and specialised services stitched together with standardised operations, billing, and quality controls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">One API. One Console. One Network.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Raw digital values, not just PDFs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">SLA-backed fulfilment and transparent reconciliation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Pure B2B, non-conflict model. Your brand, your customer</span>
                </div>
              </div>
            </div>

            {/* Impact Stats with Visual Cards */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Impact (So Far)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 text-center">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">5,000+</div>
                  <p className="text-sm text-muted-foreground">Active Partners</p>
                  <p className="text-xs text-muted-foreground mt-2">Verified providers</p>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 text-center">
                  <Target className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                  <p className="text-xs text-muted-foreground mt-2">Growing 40% MoM</p>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 text-center">
                  <Zap className="w-10 h-10 text-warning mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Tier 3</div>
                  <p className="text-sm text-muted-foreground">Coverage</p>
                  <p className="text-xs text-muted-foreground mt-2">SLA-backed</p>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Verified Reports</p>
                  <p className="text-xs text-muted-foreground mt-2">Quality assured</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Our Values</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                These principles guide every decision we make and every product we build.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border/20">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">Partner Growth First</h3>
                  <p className="text-sm text-muted-foreground">Our success is measured by partner revenue and reach. Your growth is our growth.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/20">
                  <Network className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">Depth Over Aggregation</h3>
                  <p className="text-sm text-muted-foreground">Real scale comes from deep integration between data, people, and systems.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/20">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">Predictability Builds Trust</h3>
                  <p className="text-sm text-muted-foreground">Reliability is mandatory: measured, auditable, repeatable.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/20">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">Experience at Scale</h3>
                  <p className="text-sm text-muted-foreground">Growth is only sustainable if every interaction improves patient experience and outcomes.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-8">
                If You're Building in Healthcare
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-left">
                  <h3 className="font-semibold mb-2">For Builders</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to offer diagnostics, consults, or pharmacy inside your product?
                  </p>
                  <Link to="/book-demo">
                    <Button className="btn-gradient w-full">Book a Demo</Button>
                  </Link>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-left">
                  <h3 className="font-semibold mb-2">For Providers</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hospital, lab, or clinic looking to modernise ops and tap digital demand?
                  </p>
                  <Link to="/join-network/providers">
                    <Button variant="outline" className="w-full">Become a Provider</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
