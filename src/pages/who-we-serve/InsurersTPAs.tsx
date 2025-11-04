import { Shield, IndianRupee, Clock, CheckCircle, ArrowRight, TrendingUp, Users, Zap, TestTube, Pill, Video, Store, Home, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data";
import { insurersTPAsFAQs } from "@/lib/faqs/insurers-tpas-faqs";
import RelatedBlogs from "@/components/RelatedBlogs";

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
        {/* Breadcrumbs */}
        <section className="py-4 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <Breadcrumbs 
              items={[
                { label: "Who We Serve", href: "/who-we-serve" },
                { label: "Insurers & TPAs" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
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
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Impact</h2>
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
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Complete OPD Services for Insurers</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Full suite of outpatient services with built-in fraud controls and automated operations
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <TestTube className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diagnostics & Labs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home collection, center visits, health camps. NABL certified partners with fraud detection.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    SKU-level fraud controls
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Pill className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Pharmacy Network</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home delivery and store pickup. Licensed pharmacists with prescription verification.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Automated claim validation
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Video className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Consultations</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    24/7 teleconsult and in-clinic visits. NMC registered doctors with digital records.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Real-time utilization tracking
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Store className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Health & Wellness</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Preventive care, chronic disease management, wellness programs for member retention.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Improves NPS and retention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Without Setup */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Speed Without Setup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Plug-and-Play Services",
                    badge: "Days to launch",
                    desc: "Diagnostics, consults, pharmacy, chronic care available nationwide instantly.",
                    color: "success"
                  },
                  {
                    title: "White-Label Journeys",
                    badge: "Your brand",
                    desc: "Customize booking flows, care comms. We stay invisible.",
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
        <section className="py-20 bg-gradient-hero border-y border-border/50">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Delivery Modes & Coverage</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple fulfillment options for every service
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: TestTube,
                    service: "Diagnostics",
                    modes: ["Home collection", "Lab visits", "Health camps"],
                    coverage: "9,000+ pincodes",
                    turnaround: "Same-day reports for routine tests",
                    color: "primary"
                  },
                  {
                    icon: Pill,
                    service: "Pharmacy",
                    modes: ["Home delivery", "Store pickup", "Quick commerce"],
                    coverage: "15,000+ pincodes",
                    turnaround: "6-24 hour delivery",
                    color: "success"
                  },
                  {
                    icon: Video,
                    service: "Consultations",
                    modes: ["Teleconsult (video/audio/chat)", "In-clinic"],
                    coverage: "Nationwide 24/7",
                    turnaround: "Instant for teleconsult",
                    color: "secondary"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                      <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <h4 className="font-heading font-bold mb-3">{item.service}</h4>
                      <div className="space-y-2 mb-4">
                        {item.modes.map((mode, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{mode}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border/20 space-y-2">
                        <p className="text-xs text-muted-foreground"><span className="font-semibold">Coverage:</span> {item.coverage}</p>
                        <p className="text-xs text-muted-foreground"><span className="font-semibold">Turnaround:</span> {item.turnaround}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Availability & Coverage */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Availability</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Full healthcare service coverage across India
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { service: "Diagnostics", coverage: "9,000+ pincodes" },
                  { service: "Center Visit", coverage: "2,600+ pincodes" },
                  { service: "Pharmacy", coverage: "15,000+ pincodes" },
                  { service: "Consultation", coverage: "Nationwide" },
                  { service: "Home Care", coverage: "5,000+ pincodes" },
                  { service: "Emergency", coverage: "Metros" },
                  { service: "Health Camps", coverage: "Nationwide" },
                  { service: "All Services", coverage: "Pan-India" }
                ].map((item, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.service}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Operations */}
        <section className="py-20 bg-background">
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
                      "NABH/NABL accredited diagnostic partners",
                      "Licensed pharmacies with registered pharmacists",
                      "MCI/NMC registered doctors for consultations",
                      "Real-time SLA monitoring and auto-escalation"
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
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={insurersTPAsFAQs} />
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
