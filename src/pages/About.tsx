import { Target, Users, Zap, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Think UPI <span className="text-gradient">for Healthcare</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                We're building the rails for healthcare in India — a unified infrastructure that lets any organisation launch care services in days, not months.
              </p>
              <p className="text-xl font-semibold text-foreground">
                If payments had UPI, healthcare now has Labstack.
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
                  <span>Businesses lose 12–18 months just to get basic services live</span>
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
                A nationwide, API-powered healthcare infrastructure — diagnostics, consultations, pharmacy, home care, and specialised services stitched together with standardised operations, billing, and quality controls.
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
                  <span className="text-sm">Pure B2B, non-conflict — your brand, your customer</span>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Impact (So Far)</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Serviceable</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders Per Month</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Report Verification</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Customer First", desc: "Every decision begins with: is it better for our customers and their patients?" },
                  { icon: Zap, title: "Innovation", desc: "We push the boundaries of healthcare technology so our partners don't have to" },
                  { icon: Shield, title: "Trust & Reliability", desc: "In healthcare, downtime is not an option. We build systems that run, 24/7" },
                  { icon: Users, title: "Accessibility", desc: "Healthcare must reach everyone, everywhere in India — Tier-1 to Tier-3" }
                ].map((value, i) => (
                  <div key={i} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                    <value.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
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
