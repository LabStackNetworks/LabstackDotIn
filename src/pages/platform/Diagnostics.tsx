import { TestTube, MapPin, CheckCircle, ArrowRight, Shield, Clock, FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import FAQ from "@/components/FAQ";
import TLDR from "@/components/design-system/TLDR";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { diagnosticsFAQs } from "@/lib/faqs/diagnostics-faqs";

const Diagnostics = () => {
  const structuredData = [
    generateProductSchema({
      name: "Labstack Diagnostics Network",
      description: "Complete diagnostics network across 9,000+ pincodes. Pathology, radiology, cardiac, genetic testing with quality frameworks built in.",
      url: "https://labstack.in/platform/diagnostics"
    }),
    generateFAQSchema(diagnosticsFAQs)
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Diagnostics Network Platform"
        description="Complete diagnostics network across 9,000+ pincodes. Pathology, radiology, cardiac, genetic testing with quality frameworks built in."
        keywords="diagnostics network India, pathology services, radiology network, home sample collection, diagnostic testing API, lab network"
        canonical="https://labstack.in/platform/diagnostics"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Diagnostics, <span className="text-gradient">Delivered Nationwide.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Complete diagnostics network with pathology, radiology, cardiac, genetic, and allergy testing. 9,000+ pincodes coverage with quality frameworks built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Check Coverage
                </Button>
              </div>
            </div>

            {/* Problems */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Diagnostics is Broken Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Opaque systems: No visibility into pricing, availability, or turnaround times",
                  "Fragmented providers: Data silos and inconsistent service quality",
                  "Dark providers: Outdated or no technology, no integration",
                  "Poor customer experience: Missed collections, long waits, inaccurate reports"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 font-semibold">
                Result: High complaints, low trust, and poor patient outcomes.
              </p>
            </div>

            {/* Labstack Advantage */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">The Labstack Advantage: Diagnostics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <TestTube className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Largest Test Network</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Pathology, radiology, genetics, cardiac</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Microbiome, food allergy (IgG/IgE)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Widest Coverage</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>9,000+ pincodes (home sample collection)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>2,600+ pincodes (center visits)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Optimised Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Single console across the entire network for booking & tracking
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Frameworks */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-6">Quality isn't optional. It's built in.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Labstack actively enforces diagnostic quality through automated frameworks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">100% report checks before delivery</h4>
                    <p className="text-sm text-muted-foreground">Every report verified for accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Digital raw values</h4>
                    <p className="text-sm text-muted-foreground">Smart reporting with trend charts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phlebo/lab blacklisting by pincode</h4>
                    <p className="text-sm text-muted-foreground">Continuous quality monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">CSAT-based lab auto-selection</h4>
                    <p className="text-sm text-muted-foreground">Best providers prioritized</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Download Quality Whitepaper
              </Button>
            </div>

            {/* Customer Experience */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Diagnostics, Reimagined.</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Enhanced patient experience at every touchpoint
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Real-time appointment slots & confirmations",
                  "Home visits + center visits + Health Camps across cities",
                  "Cashless booking with ID verification",
                  "Patient prep instructions (fasting, pre-tests)",
                  "Online report downloads + raw values for structured analytics",
                  "Feedback collection (white-labelled option)",
                  "PhleboNet for on-demand phlebotomy services"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-card-gradient rounded-xl border border-border/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expanded Coverage */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Expanded Test & Network Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Genetic, microbiome, and allergy panels supported nationwide",
                  "Center visit network extended to 5,000+ serviceable pincodes",
                  "Independent phlebo networks powering nationwide reach",
                  "Customer experience metrics dashboard with trend analytics"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground italic mb-4">
                  "Labstack helped us expand diagnostics coverage into Tier-2 & Tier-3 cities in under a month. Something that would've taken 12–18 months on our own."
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <FAQ items={diagnosticsFAQs} title="Diagnostics FAQ" />
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Scale diagnostics without the cost and chaos of building networks.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Talk to Sales
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

export default Diagnostics;
