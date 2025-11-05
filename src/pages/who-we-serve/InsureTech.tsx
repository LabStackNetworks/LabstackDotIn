import { TrendingUp, Target, CheckCircle, ArrowRight, Zap, Shield, Home, Video, Stethoscope, Users, Truck, HeartPulse, TestTube, Pill, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data";
import { insuretechFAQs } from "@/lib/faqs/insuretech-faqs";

const InsureTech = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "InsureTech", url: "https://labstack.in/who-we-serve/insuretech" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Infrastructure for InsureTech Companies",
    description: "White-label healthcare delivery platform for digital insurance companies. Launch diagnostics, consultations, pharmacy services nationwide in 14 days.",
    url: "https://labstack.in/who-we-serve/insuretech"
  });

  const faqSchema = generateFAQSchema(insuretechFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Infrastructure for InsureTech | Labstack"
        description="Launch healthcare benefits for digital insurance platforms. White-label diagnostics, teleconsults, pharmacy delivery. Scale nationwide in 14 days with zero operational setup."
        keywords="InsureTech healthcare, digital insurance OPD, health benefits platform, insurance technology, healthcare delivery API, white-label health services"
        canonical="https://labstack.in/who-we-serve/insuretech"
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
                { label: "InsureTech" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Healthcare delivery infrastructure for InsureTech companies. Launch diagnostics, consultations, pharmacy services nationwide. Turn healthcare benefits into revenue engine with 14-day deployment."
            keyPoints={[
              "Launch healthcare services in 14 days across 9,000+ pincodes",
              "White-label platform with your brand, your member relationships",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Incremental revenue streams from service fulfillment",
              "Pure B2B model with zero channel conflict with your insurance business"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                White-label healthcare delivery platform that InsureTech companies use to launch diagnostics, consultations, and pharmacy services nationwide in 14 days, turning healthcare benefits into revenue engines.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR INSURETECH COMPANIES</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Make Healthcare Benefits a <span className="text-gradient">Revenue Engine.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Launch faster, scale wider, earn from the complete healthcare wallet.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Launch Healthcare Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Current Blockers → What Changes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Blockers</h3>
                {[
                  "Low utilization equals lost outcomes and revenue",
                  "Fragmented delivery damages member trust",
                  "Operational friction delays market launches",
                  "Support costs rise with service uncertainty"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">What Changes with Labstack</h3>
                {[
                  "Health services that just work",
                  "Home-first access across cities",
                  "Faster launches (≈14 days)",
                  "Incremental revenue streams",
                  "Own the healthcare wallet"
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

        {/* Impact Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <IndianRupee className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">~15%</div>
                  <p className="text-sm text-muted-foreground">Additional Revenue via Services</p>
                </div>
                <div>
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Time to Nationwide Launch</p>
                </div>
                <div>
                  <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">+20</div>
                  <p className="text-sm text-muted-foreground">NPS Uplift from Better UX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Complete Service Coverage Nationwide</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Full healthcare services available across 9,000+ pincodes from Day 1
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <TestTube className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diagnostics</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home collection and center visits. SLA routing with fasting optimization.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    More completed checkups
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <HeartPulse className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Radiology</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    AERB certified MRI, CT, USG, X-ray. Plug into claims and chronic pathways.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Higher attach per member
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Users className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Workforce Health Programs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Food safety compliance, enterprise wellness, chronic care cohorts.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    B2B2C revenue expansion
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Stethoscope className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Health Camps</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Employer campuses and distributed worksites. Digital reporting included.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Revenue from every service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Without Setup */}
        <section className="py-12 lg:py-16 bg-background">
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
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Launch healthcare services in four simple steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Choose Integration Mode", description: "API or console setup. SDK support for React, Node, Python. Pre-built webhooks." },
                { step: "2", title: "Configure Services", description: "Set coverage limits, member eligibility rules, and white-label branding." },
                { step: "3", title: "Launch Nationwide", description: "Go live across 9,000+ pincodes with all delivery modes active." },
                { step: "4", title: "Monitor & Earn", description: "Track fulfillment, NPS, and revenue from dashboard." }
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

        {/* Delivery Modes & Coverage */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Delivery Modes & Coverage</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Four delivery modes designed for member convenience across 9,000+ pincodes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Home Collection */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Home Collection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sample collection at member's doorstep. Preferred for diagnostics and pharmacy delivery.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">6 AM to 9 PM booking slots</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">SOPs ensure &lt;2% rejection rate</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Available in 9,000+ pincodes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Medicine delivery in 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* Teleconsultation */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                      <Video className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Teleconsultation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Video and audio consultations with general practitioners and specialists.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">24/7 GP availability</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Specialist booking in 48 hours</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Digital prescriptions included</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Direct pharmacy fulfillment</span>
                    </div>
                  </div>
                </div>

                {/* Center Visit */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Center Visit</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Walk-in and scheduled appointments at diagnostic centers and hospitals.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">NABL certified labs nationwide</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">AERB certified radiology centers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">In-person specialist consultations</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Reports in 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* Health Camps */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Health Camps</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    On-site screening and checkups at employer worksites and community locations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Employer campus deployments</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Food safety compliance testing</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Cohort health screening programs</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Digital reporting included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Availability */}
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
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

        {/* Integration & Quality */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Integration Options</h2>
                  <ul className="space-y-3">
                    {[
                      "API integration for programmatic benefit delivery",
                      "Console access for ops teams to manage members",
                      "Custom member portals with your branding",
                      "Real-time dashboards for utilization and costs",
                      "White-label at every touchpoint. We remain invisible"
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
                      "AERB certified radiology centers",
                      "Registered pharmacists for all medicine orders",
                      "Verified doctors with valid NMC registration",
                      "Real-time SLA monitoring and escalation"
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
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={insuretechFAQs} />
          </div>
        </section>
      </main>

      {/* Related Resources */}
      <RelatedBlogs category="InsureTech" limit={3} />

      <Footer />
    </div>
  );
};

export default InsureTech;
