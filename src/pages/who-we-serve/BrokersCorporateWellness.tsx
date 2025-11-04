import { TrendingUp, Target, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { brokersCorporateWellnessFAQs } from "@/lib/faqs/brokers-corporate-wellness-faqs";
import RelatedBlogs from "@/components/RelatedBlogs";

const BrokersCorporateWellness = () => {
  const structuredData = generateFAQSchema(brokersCorporateWellnessFAQs);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="OPD benefits for insurance brokers | LabStack"
        description="OPD benefits platform with home diagnostics, pharmacy delivery, teleconsults for brokers and corporate wellness programs. API or console launch across 9,000+ pincodes."
        keywords="insurance broker solutions, OPD insurance India, corporate wellness programs, policy differentiation, broker technology platform"
        canonical="https://labstack.in/who-we-serve/brokers-corporate-wellness"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR BROKERS & CORPORATE WELLNESS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Turn Policies Into <span className="text-gradient">Revenue Machines.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Grow ARPU 15%. Differentiate with embedded OPD benefits. Prescription monetization across 9,000+ pincodes.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Expand Your Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Challenge</h3>
                {[
                  "Policies look same—OPD under-monetized",
                  "Execution breaks outside metros",
                  "Commission capped at ₹500-2K",
                  "Multi-city vendor reconciliation pain"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">With Labstack</h3>
                {[
                  "OPD bundles differentiate policies",
                  "Nationwide fulfillment Tier-1 to Tier-3",
                  "Prescription monetization—grow ARPU ~15%",
                  "Pure B2B—your brand, your revenue"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">~15%</div>
                  <p className="text-sm text-muted-foreground">ARPU Uplift</p>
                </div>
                <div>
                  <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                </div>
                <div>
                  <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Pure B2B</div>
                  <p className="text-sm text-muted-foreground">No Competition</p>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Grow Revenue From Day One
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Nationwide Coverage",
                    badge: "9K+ pincodes",
                    desc: "Activate across Tier-1 to Tier-3 instantly.",
                    color: "success"
                  },
                  {
                    title: "OPD Bundling",
                    badge: "~15% ARPU lift",
                    desc: "Bundle diagnostics, consults, pharmacy benefits.",
                    color: "primary"
                  },
                  {
                    title: "White-Label Brand",
                    badge: "Pure B2B",
                    desc: "Your clients remain yours—we stay invisible.",
                    color: "secondary"
                  },
                  {
                    title: "Custom Packages",
                    badge: "Flexible",
                    desc: "Build wellness bundles, preventive care subscriptions.",
                    color: "success"
                  },
                  {
                    title: "Unified Operations",
                    badge: "Single invoice",
                    desc: "We handle fulfillment, SLA, quality control.",
                    color: "primary"
                  },
                  {
                    title: "Rx Monetization",
                    badge: "Revenue+",
                    desc: "Pharmacy fulfillment integrated with consults.",
                    color: "success"
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading font-bold text-sm">{feature.title}</h3>
                      <span className={`text-xs bg-${feature.color}/10 text-${feature.color} px-2 py-1 rounded-full whitespace-nowrap`}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={brokersCorporateWellnessFAQs} />
          </div>
        </section>
      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Brokers" limit={3} />

      <Footer />
    </div>
  );
};

export default BrokersCorporateWellness;
