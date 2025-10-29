import { Globe, MapPin, TrendingUp, ArrowRight, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CoverageExpansion = () => {
  const expansionBenefits = [
    {
      title: "No Capex or Ops Hiring",
      description: "Launch in new markets without building local operations or signing individual vendor contracts"
    },
    {
      title: "No Ops Hiring",
      description: "Our local teams handle provider relationships, quality monitoring, and on-ground execution"
    },
    {
      title: "Quality-Assured Providers",
      description: "Every provider verified with CSAT monitoring, geo-level blacklisting, and SLA enforcement"
    },
    {
      title: "Consistent Experience",
      description: "Same patient experience and service quality across metros, Tier-2, and Tier-3 cities"
    }
  ];

  const tierBreakdown = [
    { tier: "Tier-1", cities: "Metros", coverage: "Complete" },
    { tier: "Tier-2", cities: "50+ Cities", coverage: "Full Service" },
    { tier: "Tier-3", cities: "200+ Cities", coverage: "Growing Fast" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">COVERAGE EXPANSION</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Tier-1 to Tier-3 <span className="text-gradient">Instantly</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Expand your healthcare services to untapped markets without building local operations. Quality-assured providers and consistent experiences across 9,000+ pincodes.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Explore Coverage Map
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Expansion Benefits */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">
                Geographic Expansion Without the Pain
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expansionBenefits.map((benefit, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover">
                    <CheckCircle className="w-8 h-8 text-success mb-4" />
                    <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier-wise Breakdown */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Coverage Across All City Tiers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tierBreakdown.map((tier, index) => (
                  <div key={index} className="bg-card/50 rounded-2xl p-8 text-center card-hover">
                    <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">{tier.tier}</h3>
                    <p className="text-muted-foreground mb-2">{tier.cities}</p>
                    <div className="inline-block bg-success/10 border border-success/20 px-3 py-1 rounded-full">
                      <span className="text-success text-sm font-medium">{tier.coverage}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                One integration. Nationwide reach. No vendor sprawl.
              </p>
            </div>

            {/* Market Entry Benefits */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Why Geographic Expansion Matters
              </h2>
              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                      <span className="text-destructive mr-2">✗</span>
                      Building Yourself
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>6-12 months per new city signing individual vendors</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>High capex for local teams and infrastructure</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Inconsistent quality across geographies</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Gaps push customers away to competitors</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2 text-success" />
                      With Labstack
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Instant access to Tier-2/3 markets via single API</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Zero capex — operational costs only</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-success mt-1">✓</span>
                        <span>Consistent experience with quality frameworks</span>
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-success mt-1">✓</span>
                        <span>20% conversion boost with wider coverage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Stats & Proof */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Network Scale & Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered</p>
                  <p className="text-xs text-muted-foreground mt-2">Metros to tier-3 cities</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2,600+</div>
                  <p className="text-sm text-muted-foreground">Service Centers</p>
                  <p className="text-xs text-muted-foreground mt-2">Across India</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">20%</div>
                  <p className="text-sm text-muted-foreground">Conversion Boost</p>
                  <p className="text-xs text-muted-foreground mt-2">After geographic expansion</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "We scaled nationwide in days with Labstack, saving a year of build. Conversions rose 20% once Tier-2/3 opened."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoverageExpansion;
