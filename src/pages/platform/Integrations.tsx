import { Code, Zap, Puzzle, Webhook, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema } from "@/lib/structured-data";

const Integrations = () => {
  const structuredData = generateProductSchema({
    name: "Healthcare API Integrations",
    description: "One API for diagnostics, pharmacy, consultations, and specialized care. Vendor-agnostic integration platform.",
    url: "https://labstack.in/platform/integrations"
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare API Integrations"
        description="One API for diagnostics, pharmacy, consultations, and specialized care. Vendor-agnostic integration platform."
        keywords="healthcare API integration, medical service integration, healthcare middleware, unified healthcare API"
        canonical="https://labstack.in/platform/integrations"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Integrate Once. <span className="text-gradient">Deploy Everywhere.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                One API for diagnostics, pharmacy, consults, and specialized care. Vendor-agnostic integration with minimal engineering effort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Request API Access
                </Button>
              </div>
            </div>

            {/* Problems */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Why Integration Is Hard Without Labstack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Legacy systems — EMRs, billing, and provider portals don't talk to each other",
                  "Engineering drag — months wasted building custom integrations",
                  "API chaos — every provider has its own schema, making scale impossible"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 font-semibold">
                Result: Technical debt, compliance risks, and blocked launches.
              </p>
            </div>

            {/* Labstack Advantage */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                The Labstack Integration Advantage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Code className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Vendor-agnostic API</h3>
                  <p className="text-sm text-muted-foreground">
                    One interface for all providers with standardized schemas
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Unified Schema</h3>
                  <p className="text-sm text-muted-foreground">
                    Standardized booking, reporting, and billing flows
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Puzzle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">White-label Widgets</h3>
                  <p className="text-sm text-muted-foreground">
                    Drop-in booking, tele-consult, and report modules
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Console for Ops</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch and manage services without writing code
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Webhook className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Webhook Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant status updates and event notifications
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Sandbox to Production</h3>
                  <p className="text-sm text-muted-foreground">
                    Prebuilt flows and reference apps for rapid deployment
                  </p>
                </div>
              </div>
            </div>

            {/* API Documentation Hub */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Everything Developers Need, Out of the Box
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our documentation is written for speed — so your team spends days, not months, going live.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Interactive API docs",
                    description: "Explore endpoints, payloads, and sample requests"
                  },
                  {
                    title: "SDKs & libraries",
                    description: "Ready for popular languages and frameworks"
                  },
                  {
                    title: "Reference implementations",
                    description: "Plug-and-play modules for common use cases"
                  },
                  {
                    title: "Changelog & status page",
                    description: "Transparent versioning and uptime monitoring"
                  },
                  {
                    title: "Developer support",
                    description: "Direct access to our engineering team during rollout"
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="btn-gradient">
                Request API Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* How It Fits Into Your Stack */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                How It Fits Into Your Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <h3 className="text-xl font-heading font-bold mb-4">Diagnostics</h3>
                  <p className="text-muted-foreground">
                    Order tests, track status, fetch structured results
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <h3 className="text-xl font-heading font-bold mb-4">Consultations</h3>
                  <p className="text-muted-foreground">
                    Schedule consults, manage EMR, e-prescriptions
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <h3 className="text-xl font-heading font-bold mb-4">Pharmacy</h3>
                  <p className="text-muted-foreground">
                    Cashless orders, SKU-level controls, tracking
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <h3 className="text-xl font-heading font-bold mb-4">Specialized Networks</h3>
                  <p className="text-muted-foreground">
                    Ambulance, physio, dental, home care via API-first workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground italic">
                  "We integrated Labstack's APIs into our wellness app in under a week. The widgets made it possible to go live without building custom flows from scratch."
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Launch healthcare services without integration nightmares.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-gradient">
                  Request API Access
                </Button>
                <Link to="/book-demo">
                  <Button size="lg" variant="outline">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
