import { TrendingUp, Target, CheckCircle, ArrowRight, Zap, Shield, Home, Video, Stethoscope, Users, IndianRupee, TestTube, Pill } from "lucide-react";
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
import { brokersCorporateWellnessFAQs } from "@/lib/faqs/brokers-corporate-wellness-faqs";

const BrokersCorporateWellness = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Brokers & Corporate Wellness", url: "https://labstack.in/who-we-serve/brokers-corporate-wellness" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "OPD Benefits Platform for Insurance Brokers",
    description: "White-label OPD benefits platform for insurance brokers and corporate wellness programs. Nationwide diagnostics, pharmacy, consultations delivery.",
    url: "https://labstack.in/who-we-serve/brokers-corporate-wellness"
  });

  const faqSchema = generateFAQSchema(brokersCorporateWellnessFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

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
        {/* Breadcrumbs */}
        <section className="py-4 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <Breadcrumbs 
              items={[
                { label: "Who We Serve", href: "/who-we-serve" },
                { label: "Brokers & Corporate Wellness" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="White-label OPD benefits platform for insurance brokers and corporate wellness programs. Launch diagnostics, pharmacy, consultations nationwide. Grow ARPU ~15% via prescription monetization."
            keyPoints={[
              "White-label OPD benefits for policy differentiation",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "Prescription monetization to grow ARPU by ~15%",
              "Pure B2B platform where your clients remain yours"
            ]}
          />
        </div>

        <section className="py-16 lg:py-24">
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
                  "Policies look same with OPD under monetized",
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
                  "Prescription monetization to grow ARPU ~15%",
                  "Pure B2B model with your brand, your revenue"
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

        {/* Impact */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Impact</h2>
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
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Complete OPD Services Portfolio</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Full healthcare benefits stack available across 9,000+ pincodes from Day 1
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <TestTube className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diagnostics & Radiology</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home collection and center visits. NABL certified labs with same-day reporting.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Higher member engagement
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Video className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Consultations</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Teleconsult 24/7 and in-clinic visits. NMC registered doctors across specialties.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Immediate member access
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Pill className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Pharmacy Benefits</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home delivery and store pickup. Licensed pharmacists with 24-48hr fulfillment.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Prescription monetization
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Users className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Corporate Wellness Programs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Health camps, chronic care, preventive screenings for employee groups.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Expand service offerings
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
              <p className="text-lg text-muted-foreground">Launch white-label OPD benefits in four steps</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Configure Benefits", description: "Build OPD bundles: diagnostics, consultations, pharmacy benefits" },
                { step: "2", title: "White-Label Setup", description: "Your branding, your client portal, your customer relationship" },
                { step: "3", title: "Activate Nationwide", description: "Instant access to 9,000+ pincodes fulfillment network" },
                { step: "4", title: "Monetize Rx", description: "Enable prescription fulfillment, grow ARPU through pharmacy delivery" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
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
                Multiple fulfillment options designed for member convenience
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
                    Sample collection and medicine delivery at member's doorstep for convenience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Flexible 6 AM to 9 PM slots</span>
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
                    24/7 video, audio, and chat consultations with verified doctors nationwide.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Instant access nationwide</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">NMC registered doctors</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Digital prescriptions included</span>
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
                    Walk-in services at accredited diagnostic centers and clinics nationwide.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">2,600+ locations nationwide</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">NABL/NABH accredited partners</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Same-day appointment slots</span>
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
                    On-site health screenings and preventive check-ups for corporate groups.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Nationwide availability</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Custom packages available</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Digital health reports</span>
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
              <p className="text-lg text-muted-foreground mb-8">Full healthcare service coverage across India</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { service: "Diagnostics", coverage: "9,000+ pincodes" },
                  { service: "Center Visit", coverage: "2,600+ pincodes" },
                  { service: "Pharmacy", coverage: "15,000+ pincodes" },
                  { service: "Consultation", coverage: "Nationwide" },
                  { service: "Home Care", coverage: "5,000+ pincodes" },
                  { service: "Emergency", coverage: "Metros" },
                  { service: "Health Camps", coverage: "Nationwide" },
                  { service: "All Services", coverage: "Pan-India" },
                  { service: "Active Partners", coverage: "5,000+" }
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
                      "Real-time dashboards for utilization and costs"
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
                      "Registered pharmacists for all medicine orders",
                      "Verified doctors with valid MCI/NMC registration",
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
            <FAQ items={brokersCorporateWellnessFAQs} />
          </div>
        </section>
      </main>

      <RelatedBlogs category="Brokers" limit={3} />
      <Footer />
    </div>
  );
};

export default BrokersCorporateWellness;
