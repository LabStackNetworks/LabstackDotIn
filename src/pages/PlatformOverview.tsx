import { Network, Code, BarChart3, Shield, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTAButtons from "@/components/CTAButtons";
import SEOHead from "@/components/SEOHead";
import { generateOrganizationSchema, generateProductSchema } from "@/lib/structured-data";

const PlatformOverview = () => {
  const structuredData = [
    generateOrganizationSchema(),
    generateProductSchema({
      name: "Labstack Healthcare Platform",
      description: "Complete healthcare operating system. Launch diagnostics, consultations, pharmacy, and specialized networks in days, not months.",
      url: "https://labstack.in/platform-overview"
    })
  ];

  const platformLayers = [
    {
      icon: Network,
      title: "Provider Network Layer",
      description: "Labs, doctors, pharmacy, hospitals, wellness, home care",
      features: ["Instant onboarding", "Multi-city coverage", "AI-enabled quality checks before service delivery"]
    },
    {
      icon: BarChart3,
      title: "Operations & Automation Layer",
      description: "Smart routing and SLA management",
      features: ["Automated fulfillment with real-time monitoring", "Escalation handling and 24/7 support", "Continuous monitoring and escalation protocols"]
    },
    {
      icon: Code,
      title: "Financial & Billing Layer",
      description: "Transparent pricing with automated reconciliation",
      features: ["B2B billing and invoicing built-in", "Revenue optimisation and analytics", "Audit trails and quality scorecards"]
    },
    {
      icon: Shield,
      title: "AI & Intelligence Layer",
      description: "Predictive health risk scoring",
      features: ["Automated care pathways and clinical decision support", "Intelligent report analysis and digital raw values", "Smart protocols and AI-driven clinical insights"]
    }
  ];

  const whyLabstack = [
    "Widest Provider Network: 1000+ verified labs, doctors, pharmacies, and wellness providers",
    "Seamless Operations: Automated routing, SLAs, escalations, and fulfilment",
    "Financial Clarity: Transparent pricing, reconciliation, and revenue analytics",
    "AI Intelligence: Smart care protocols, predictive scoring, and clinical insights",
    "Pure B2B: Non-conflict model. No exclusivity. No lock-in"
  ];

  const customerQuotes = [
    "Labstack enabled us to launch new healthcare services in 48 hours instead of 12 months.",
    "Their infra helped us improve conversions by 20% with better coverage.",
    "Prescription monetisation through Labstack improved ARPU by 15%."
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Platform Overview - Healthcare Operating System"
        description="One API for diagnostics, consultations, pharmacy, and home care. Launch in 48 hours across 9,000+ pincodes. Healthcare infrastructure built for scale."
        keywords="healthcare platform, healthcare API, diagnostics platform, telemedicine API, pharmacy API, healthcare integrations"
        canonical="https://labstack.in/platform-overview"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">PLATFORM</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                One API. One Console. <span className="text-gradient">One Network.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch diagnostics, consultations, pharmacy, and home care in 48 hours. One API. One integration. Built-in networks, compliance, and intelligence.
              </p>

              <CTAButtons 
                primaryText="Book a Demo"
                secondaryText="Start Building"
                secondaryLink="/start-building"
                className="justify-center"
              />
            </div>

            {/* Why Labstack Platform */}
            <div className="max-w-5xl mx-auto mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">Why Labstack Platform</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The operating system for healthcare delivery. Networks, automation, billing, and intelligence unified in one platform.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {whyLabstack.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card-gradient rounded-xl border border-border/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Layers */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Platform Layers</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Five layers that make healthcare scalable and measurable
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {platformLayers.map((layer, index) => (
                  <div key={index} className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                    <layer.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-heading font-bold mb-2">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{layer.description}</p>
                    <ul className="space-y-2">
                      {layer.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/platform/diagnostics">
                  <Button variant="outline" size="lg">
                    Explore Diagnostics
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Integrations Section */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-6">Connect once. Deploy everywhere.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vendor-agnostic APIs and white-label widgets. No lock-in. Sandbox to production in days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Vendor-agnostic API and webhooks</h4>
                    <p className="text-sm text-muted-foreground">One interface for all providers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">White-label widgets</h4>
                    <p className="text-sm text-muted-foreground">For booking and reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Seamless EMR, EHR integrations</h4>
                    <p className="text-sm text-muted-foreground">Connect with existing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Sandbox-to-production in days</h4>
                    <p className="text-sm text-muted-foreground">Launch faster with ready APIs</p>
                  </div>
                </div>
              </div>
              <Link to="/platform/integrations">
                <Button size="lg" className="btn-gradient">
                  Request API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Trust & Compliance */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-6">Built-in Trust & Compliance</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                ABDM-ready. 99.5% uptime. Audit trails. Continuous monitoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card-gradient rounded-xl border border-border/20">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">ABDM Readiness</h4>
                  <p className="text-sm text-muted-foreground">Data security frameworks</p>
                </div>
                <div className="text-center p-6 bg-card-gradient rounded-xl border border-border/20">
                  <Zap className="w-10 h-10 text-warning mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">99.5% Uptime</h4>
                  <p className="text-sm text-muted-foreground">SLA-backed operations</p>
                </div>
                <div className="text-center p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-10 h-10 text-success mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Audit Trails</h4>
                  <p className="text-sm text-muted-foreground">Quality scorecards and blacklisting</p>
                </div>
                <div className="text-center p-6 bg-card-gradient rounded-xl border border-border/20">
                  <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Continuous Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Escalation protocols 24/7</p>
                </div>
              </div>
            </div>

            {/* Customer Quotes */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Businesses Choose Labstack</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {customerQuotes.map((quote, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                    <p className="text-muted-foreground italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signals */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Built for Scale</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Zap className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">48hrs</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                  <p className="text-xs text-muted-foreground mt-2">vs 12-18 months building yourself</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered</p>
                  <p className="text-xs text-muted-foreground mt-2">Tier-1 to Tier-3 cities</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime</p>
                  <p className="text-xs text-muted-foreground mt-2">Enterprise-grade reliability</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Launch in 48 hours. Scale to 9,000+ pincodes.
              </h2>
              <CTAButtons 
                primaryText="Book a Demo"
                secondaryText="Join Network"
                secondaryLink="/join-network/providers"
                className="justify-center"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformOverview;
