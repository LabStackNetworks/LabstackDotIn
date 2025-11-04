import { Globe, MapPin, TrendingUp, ArrowRight, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { coverageExpansionFAQs } from "@/lib/faqs/coverage-expansion-faqs";

const CoverageExpansion = () => {
  const productSchema = generateProductSchema({
    name: "Coverage Expansion Solutions",
    description: "Healthcare coverage expansion to Tier-2/3 markets. Quality-assured providers with local operations.",
    url: "https://labstack.in/solutions/coverage-expansion"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Solutions", url: "https://labstack.in/solutions" },
    { name: "Coverage Expansion", url: "https://labstack.in/solutions/coverage-expansion" }
  ]);

  const faqSchema = generateFAQSchema(coverageExpansionFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Geographic expansion for healthcare businesses | LabStack"
        description="Healthcare coverage expansion with diagnostics, pharmacy, consultations to Tier-2/3 markets. API or console launch across 9,000+ pincodes nationwide."
        keywords="healthcare market expansion, tier 2 tier 3 healthcare, geographic expansion healthcare, healthcare coverage India"
        canonical="https://labstack.in/solutions/coverage-expansion"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Healthcare coverage expansion platform for businesses to launch services in Tier-2/3 cities. API or console deployment across 9,000+ pincodes with quality-assured providers."
            keyPoints={[
              "Geographic expansion platform for healthcare businesses",
              "Delivery modes: home visits, center visits, teleconsult, health camps",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "Instant expansion via API or console integration",
              "Quality-assured provider networks in all regions"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Healthcare coverage expansion platform that businesses use to launch services in new markets with API or console.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">COVERAGE EXPANSION</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Metros to Tier-3 <span className="text-gradient">Instantly</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Expand healthcare services to untapped markets. 20% conversion boost with zero setup time.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Explore Coverage Map
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem vs Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Building Yourself</h3>
                {[
                  "6-12 months per new city signing vendors",
                  "High capex for local teams and infrastructure",
                  "Inconsistent quality across geographies",
                  "Coverage gaps push customers to competitors"
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
                  "Instant access via single API integration",
                  "Zero capex - operational costs only",
                  "Consistent experience with quality frameworks",
                  "20% conversion boost with wider coverage"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Expand to new markets in four simple steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Select Markets", description: "Choose target cities and service types from coverage map" },
                { step: "2", title: "Configure Services", description: "Set pricing, eligibility, and service parameters" },
                { step: "3", title: "Activate Networks", description: "Instantly activate verified provider networks in selected regions" },
                { step: "4", title: "Monitor & Scale", description: "Track performance and expand to additional markets" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-success">{item.step}</span>
                  </div>
                  <h4 className="font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Modes Table */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Coverage by Tier</h2>
              <p className="text-center text-muted-foreground mb-12">
                Complete healthcare services across all city tiers
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">City Tier</th>
                      <th className="p-4 text-left font-heading">Coverage</th>
                      <th className="p-4 text-left font-heading">Services Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        tier: "Metro Cities",
                        coverage: "Complete coverage",
                        services: "All services: diagnostics, pharmacy, consultations, home care, specialized"
                      },
                      {
                        tier: "Tier-1 Cities",
                        coverage: "Full service coverage",
                        services: "Diagnostics, pharmacy, consultations, specialized networks"
                      },
                      {
                        tier: "Tier-2 (50+ cities)",
                        coverage: "Core service coverage",
                        services: "Diagnostics, pharmacy, consultations, health camps"
                      },
                      {
                        tier: "Tier-3 (200+ cities)",
                        coverage: "Expanding rapidly",
                        services: "Core services with home collection and teleconsult"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.tier}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.coverage}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Availability & Coverage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Availability</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Healthcare services across 9,000+ pincodes from metros to Tier-3 cities. Complete coverage for diagnostics, pharmacy, and consultations. Multi-region fulfillment with consistent service quality nationwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Mumbai", "Delhi NCR", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Tier 2/3 Cities"].map((city, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Operations */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Integration Options</h2>
                  <ul className="space-y-3">
                    {[
                      "API integration for programmatic market expansion",
                      "Console access for manual market activation",
                      "Real-time coverage maps and availability data",
                      "Webhook notifications for network updates"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality Assurance</h2>
                  <ul className="space-y-3">
                    {[
                      "All providers verified with compliance checks",
                      "CSAT-based performance monitoring in all regions",
                      "Automated escalation for SLA breaches",
                      "Consistent quality frameworks across all tiers"
                    ].map((framework, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{framework}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={coverageExpansionFAQs} />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Related Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "API Solutions", url: "/solutions/api-solutions", description: "Integrate healthcare services with RESTful APIs" },
                  { title: "Digital Platform", url: "/solutions/digital-platform", description: "White-label platform for healthcare businesses" },
                  { title: "Healthcare Infrastructure", url: "/solutions/healthcare-infrastructure", description: "Complete healthcare delivery infrastructure" },
                  { title: "Scaling to Tier-2/3 Cities", url: "/resources/blog/scaling-tier2-tier3", description: "How platforms expand to new markets" }
                ].map((link, index) => (
                  <Link key={index} to={link.url} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover group">
                    <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">{link.title}</h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                    <div className="flex items-center text-primary font-medium mt-4">
                      Learn more 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Digital Health" limit={3} />
      
      <Footer />
    </div>
  );
};

export default CoverageExpansion;