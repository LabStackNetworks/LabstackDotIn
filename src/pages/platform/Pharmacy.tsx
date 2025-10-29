import { Pill, Home, ShoppingCart, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import FAQ from "@/components/FAQ";
import TLDR from "@/components/design-system/TLDR";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { pharmacyFAQs } from "@/lib/faqs/pharmacy-faqs";

const Pharmacy = () => {
  const structuredData = [
    generateProductSchema({
      name: "Labstack Pharmacy Network",
      description: "Nationwide pharmacy network with 60-min delivery in metros, fraud prevention, and SKU-level controls. Home delivery or store pickup.",
      url: "https://labstack.in/platform/pharmacy"
    }),
    generateFAQSchema(pharmacyFAQs)
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Pharmacy Network Platform"
        description="Nationwide pharmacy network with 60-min delivery in metros, fraud prevention, and SKU-level controls. Home delivery or store pickup."
        keywords="pharmacy delivery network, online pharmacy India, medicine delivery API, pharmacy management system, prescription fulfilment"
        canonical="https://labstack.in/platform/pharmacy"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Pharmacy. <span className="text-gradient">Integrated, Nationwide.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Nationwide pharmacy network with 60-min delivery in metros, fraud prevention, and SKU-level controls. Home delivery or store pickup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Explore Pharmacy Network
                </Button>
              </div>
              
              {/* TLDR Summary */}
              <TLDR 
                summary="Launch pharmacy delivery in 48 hours with 20,000+ pincode coverage, prescription verification, and SKU-level fraud controls. 60-minute delivery in metros."
                keyPoints={[
                  "E-pharmacies, local chains, and dark stores",
                  "Automated prescription verification",
                  "Real-time inventory and substitution",
                  "Transparent pricing and reconciliation"
                ]}
              />
            </div>

            {/* Problems */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Pharmacy is Broken Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Low fulfilment rates: high order drop-offs and stock-outs",
                  "Fragmented vendors: hard to manage multiple pharmacies",
                  "Fraud & misuse: weak controls on prescription drugs",
                  "No unified tracking: difficult to reconcile orders across partners"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 font-semibold">
                Result: Unreliable delivery, compliance risks, and poor patient trust.
              </p>
            </div>

            {/* Labstack Advantage */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">The Labstack Advantage: Pharmacy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Pill className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Nationwide Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrated e-pharmacies, local chains, and dark stores across India
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Fastest Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    60-minute home delivery across 12 Indian cities
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Fraud Prevention</h3>
                  <p className="text-sm text-muted-foreground">
                    SKU-level control of inclusions and exclusions
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Flexible Fulfilment</h3>
                  <p className="text-sm text-muted-foreground">
                    Home delivery or store pickup options for patients
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Unified Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    Single console for tracking across multiple vendors
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">High Fulfilment</h3>
                  <p className="text-sm text-muted-foreground">
                    SLA-backed delivery with real-time tracking
                  </p>
                </div>
              </div>
            </div>

            {/* Fulfilment & Compliance */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Pharmacy, with Control Built In</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete operational control and compliance frameworks
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "SLA-backed fulfilment for every order",
                  "Automated reconciliation & billing across pharmacies",
                  "Escalation handling and 24/7 support",
                  "Order history and audit logs built-in",
                  "Native fraud detection engines",
                  "CSAT-based partner performance tracking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-card-gradient rounded-xl border border-border/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Experience */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-8">Customer Experience Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cashless Ordering",
                    description: "Seamless payment workflows integrated"
                  },
                  {
                    title: "Prescription Verification",
                    description: "Fraud checks and compliance built-in"
                  },
                  {
                    title: "Real-time Tracking",
                    description: "Live delivery status and updates"
                  },
                  {
                    title: "Patient Notifications",
                    description: "Automated reminders and confirmations"
                  },
                  {
                    title: "Unified Experience",
                    description: "Consistent across home delivery and store pickup"
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
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground italic">
                  "Labstack's pharmacy network helped us scale medicine delivery from metros to Tier-3 cities in 2 months. Their fraud prevention saved us from major losses."
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <FAQ items={pharmacyFAQs} title="Pharmacy FAQ" />
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                High fulfillment. Fast delivery. Fraud-free pharmacy.
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

export default Pharmacy;
