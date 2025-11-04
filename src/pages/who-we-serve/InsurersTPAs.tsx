import { Shield, IndianRupee, Clock, CheckCircle, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data";
import { insurersTPAsFAQs } from "@/lib/faqs/insurers-tpas-faqs";
import RelatedBlogs from "@/components/RelatedBlogs";
import { PAGE_SEO } from "@/lib/seo-config";

const InsurersTPAs = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Insurers & TPAs", url: "https://labstack.in/who-we-serve/insurers-tpas" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Solutions for Insurers & TPAs",
    description: "Turn OPD claims into profit centers. Reduce claims leakage by 12%, improve member NPS by 25 points, and achieve 99%+ SLA adherence with automated healthcare operations.",
    url: "https://labstack.in/who-we-serve/insurers-tpas",
    areaServed: "India"
  });

  const structuredData = [
    generateFAQSchema(insurersTPAsFAQs),
    breadcrumbSchema,
    serviceSchema
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="OPD fulfilment for healthcare insurers | LabStack"
        description="OPD service with home sample collection, pharmacy delivery, and teleconsults for healthcare insurers. API or console launch. Available across major Indian cities."
        keywords="health insurance OPD, TPA healthcare services, claims management, healthcare fraud prevention, cashless OPD India"
        canonical="https://labstack.in/who-we-serve/insurers-tpas"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers - GEO Optimization */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="A diagnostics, pharmacy, and consultation fulfillment platform that healthcare insurers and TPAs use to launch OPD services with API or console. Covers 9,000+ pincodes nationwide with fraud controls and automated reconciliation."
            keyPoints={[
              "OPD fulfillment platform for healthcare insurers and TPAs",
              "Delivery modes: home sample collection, pharmacy delivery, teleconsults, health camps",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3 cities",
              "Launch in 14 days via API or console integration",
              "SKU-level fraud controls reduce claims fraud to under 1%"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                A diagnostics, pharmacy, and consultation fulfillment platform that healthcare insurers and TPAs can launch with API or console.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR INSURERS & TPAs</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Turn <span className="text-gradient">Claim Costs Into Revenue.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Convert OPD claims from expense centers to profit centers. Cut leakage 12%. Boost NPS 25 points. 99%+ SLA adherence.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Transform Member Experience <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Reality</h3>
                {[
                  "OPD claims are pure cost centers",
                  "12-15% leakage from fraud and misuse",
                  "Fragmented networks = poor NPS",
                  "Manual reconciliation drains ops"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Revenue Transformation</h3>
                {[
                  "Convert claim costs into profit centers",
                  "SKU-level controls eliminate 12% leakage",
                  "Premium services drive additional revenue",
                  "Automated ops reduce cost-to-serve by 40%"
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
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Revenue Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <IndianRupee className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">12%</div>
                  <p className="text-sm text-muted-foreground">Cost Savings From Leakage Control</p>
                </div>
                <div>
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">Lower Ops Cost Per Transaction</p>
                </div>
                <div>
                  <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">+25</div>
                  <p className="text-sm text-muted-foreground">NPS Gain Drives Retention</p>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Speed Without Setup
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Plug-and-Play Services",
                    badge: "Days to launch",
                    desc: "Diagnostics, consults, pharmacy, chronic care—nationwide instantly.",
                    color: "success"
                  },
                  {
                    title: "White-Label Journeys",
                    badge: "Your brand",
                    desc: "Customize booking flows, care comms—we stay invisible.",
                    color: "primary"
                  },
                  {
                    title: "SKU-Level Controls",
                    badge: "12% savings",
                    desc: "Fraud prevention built into every transaction.",
                    color: "success"
                  },
                  {
                    title: "Network Configuration",
                    badge: "Flexible",
                    desc: "Standard, premium, specialty networks by region.",
                    color: "secondary"
                  },
                  {
                    title: "Unified SLA Operations",
                    badge: "99%+ uptime",
                    desc: "Auto fulfillment, tracking, escalations.",
                    color: "primary"
                  },
                  {
                    title: "Auto Reconciliation",
                    badge: "Zero ops drain",
                    desc: "Single billing. Fraud detection. Full audit trails.",
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

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Launch OPD services in four simple steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Integrate via API or Console", description: "48-hour integration with pre-built SDKs or use console for no-code setup" },
                { step: "2", title: "Configure Services", description: "Set SKU-level controls, member eligibility, and fraud detection rules" },
                { step: "3", title: "Launch Nationwide", description: "Go live across 9,000+ pincodes with automated fulfillment" },
                { step: "4", title: "Monitor & Optimize", description: "Real-time dashboards for claims, fraud detection, and NPS" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
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
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Delivery Modes & Coverage</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple fulfillment options for every service
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Service</th>
                      <th className="p-4 text-left font-heading">Delivery Modes</th>
                      <th className="p-4 text-left font-heading">Coverage</th>
                      <th className="p-4 text-left font-heading">Turnaround</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        service: "Diagnostics",
                        modes: "Home collection, Lab visits, Health camps",
                        coverage: "9,000+ pincodes",
                        turnaround: "Same-day reports for routine tests"
                      },
                      {
                        service: "Pharmacy",
                        modes: "Home delivery, Store pickup, Quick commerce",
                        coverage: "18,000+ pincodes",
                        turnaround: "6-24 hour delivery"
                      },
                      {
                        service: "Consultations",
                        modes: "Teleconsult (video/audio/chat), In-clinic",
                        coverage: "Nationwide 24/7",
                        turnaround: "Instant for teleconsult"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.service}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.modes}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.coverage}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.turnaround}</td>
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
                Full OPD coverage across 9,000+ pincodes from metros to Tier-3 cities. Diagnostics, pharmacy, and consultations available in all major Indian cities and expanding to smaller towns. Multi-region fulfillment ensures consistent service quality nationwide.
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
                      "API and Console access for tech and non-tech teams",
                      "Webhooks for order status updates and reconciliation",
                      "White-label widgets for member portals",
                      "SDK for mobile app integration"
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
                      "SKU-level fraud controls reduce claims fraud to under 1%",
                      "Automated escalation protocols for SLA breaches",
                      "24/7 ops support with dedicated account management",
                      "Audit trails and quality scorecards for all providers"
                    ].map((framework, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{framework}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={insurersTPAsFAQs} />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Diagnostics Platform", url: "/platform/diagnostics", description: "Home collection and lab network for OPD fulfillment" },
                  { title: "API Solutions", url: "/solutions/api-solutions", description: "Integrate healthcare services via API" },
                  { title: "Providers Network", url: "/who-we-serve/providers", description: "Quality-assured provider network" },
                  { title: "Claims Automation", url: "/resources/blog/insurers-claims-automation", description: "How insurers reduce claims processing time" }
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
      <RelatedBlogs category="Insurers" limit={3} />

      <Footer />
    </div>
  );
};

export default InsurersTPAs;
