import { TrendingUp, Repeat, IndianRupee, ArrowRight, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { brokersCorporateWellnessFAQs } from "@/lib/faqs/brokers-corporate-wellness-faqs";

const BrokersCorporateWellness = () => {
  const structuredData = generateFAQSchema(brokersCorporateWellnessFAQs);

  const challenges = [
    "Policies look the same — OPD benefits under-monetized",
    "Execution breaks outside metros — Tier-2/3 uncovered",
    "Commission capped at ₹500-2,000 per policy, then nothing",
    "Difficult to reconcile multi-city programs and vendors"
  ];

  const outcomes = [
    "OPD bundles (diagnostics + consults + pharmacy) differentiate your policies",
    "Nationwide fulfillment with SLAs across Tier-1 to Tier-3 cities",
    "Prescription monetization built into policies — grow ARPU by ~15%",
    "Pure B2B model — your client, your brand, your revenue"
  ];

  const goToMarketFlow = [
    { step: "Bundle OPD", desc: "Add OPD benefits to policy quotes" },
    { step: "Map Rules", desc: "Configure eligibility and SKU controls" },
    { step: "Clients Use", desc: "Coverage finder + booking flows" },
    { step: "Reconcile", desc: "Single invoice for all services" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Solutions for Insurance Brokers & Corporate Wellness"
        description="Differentiate policies with OPD benefits. Grow ARPU by 15% through prescription monetization. Nationwide fulfillment across 9,000+ pincodes."
        keywords="insurance broker solutions, OPD insurance, corporate wellness programs, policy differentiation, ARPU growth, insurance benefits"
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
                Healthcare Revenue. <span className="text-gradient">Zero Infrastructure.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch white-label OPD and wellness offerings in days. Build your healthcare business on plug-and-play infrastructure—we stay behind the curtain.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Expand Your Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6">Current Challenge</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-destructive mt-1">✗</span>
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-success mt-1">✓</span>
                      <span className="text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Go-to-Market Flow */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {goToMarketFlow.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < goToMarketFlow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Build Your Healthcare Business on Our Platform
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Launch branded health offerings without building network or operations. We power your success behind the scenes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Plug-and-Play Health Services</h3>
                  <p className="text-sm text-muted-foreground">Activate diagnostics, OPD consults, pharmacy, preventive care, and wellness programs across 9,000+ pincodes instantly—no network contracts needed.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">White-Label Customer Journeys</h3>
                  <p className="text-sm text-muted-foreground">Design your branded experience—booking flows, care plans, communications. Your customers see your brand. We handle the delivery.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Custom Health Packages</h3>
                  <p className="text-sm text-muted-foreground">Build your own offerings—corporate wellness, preventive care subscriptions, family health plans. Configure pricing, services, and care protocols.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Network Selection & Config</h3>
                  <p className="text-sm text-muted-foreground">Choose standard or premium provider networks by region. Configure eligibility rules, coverage tiers, and service inclusion/exclusion.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Operations Handled End-to-End</h3>
                  <p className="text-sm text-muted-foreground">Fulfillment, SLA management, quality control, and customer support—fully managed. You focus on distribution and growth.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Monetization & Growth Tools</h3>
                  <p className="text-sm text-muted-foreground">Revenue optimization, cross-sell opportunities, engagement analytics, and retention insights to maximize ARPU and LTV.</p>
                </div>
              </div>
            </div>

            {/* Proof Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Business Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">~15%</div>
                  <p className="text-sm text-muted-foreground">ARPU Uplift</p>
                  <p className="text-xs text-muted-foreground mt-2">Via OPD bundling</p>
                </div>
                <div>
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                  <p className="text-xs text-muted-foreground mt-2">Tier-1 to Tier-3 coverage</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">Pure B2B</div>
                  <p className="text-sm text-muted-foreground">No Competition</p>
                  <p className="text-xs text-muted-foreground mt-2">Your client, your brand</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "We added OPD benefits via Labstack and lifted ARPU by 15% while keeping client experience clean."
                </p>
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
      <Footer />
    </div>
  );
};

export default BrokersCorporateWellness;
