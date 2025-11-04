import { Smartphone, Globe, Zap, ArrowRight, CheckCircle, Target, Shield, Code, Monitor, Tablet, Smartphone as Phone, TrendingUp, Users, IndianRupee, TestTube, Pill, Video, HeartPulse, Home, Stethoscope, Truck } from "lucide-react";
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
import { digitalHealthPlatformsFAQs } from "@/lib/faqs/digital-health-platforms-faqs";

const DigitalHealthPlatforms = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Digital Health Platforms", url: "https://labstack.in/who-we-serve/digital-health-platforms" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Infrastructure for Digital Health Platforms",
    description: "Complete healthcare fulfillment infrastructure for digital health companies. API or console deployment across 9,000+ pincodes.",
    url: "https://labstack.in/who-we-serve/digital-health-platforms"
  });

  const faqSchema = generateFAQSchema(digitalHealthPlatformsFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare fulfillment for health apps | LabStack"
        description="Diagnostics, pharmacy, teleconsults platform for digital health companies. API or console launch. 30K+ orders capacity across 9,000+ pincodes nationwide."
        keywords="digital health platform, healthtech infrastructure, healthcare API integration India, telemedicine platform, health startup solutions"
        canonical="https://labstack.in/who-we-serve/digital-health-platforms"
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
                { label: "Digital Health Platforms" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Complete healthcare infrastructure for digital health platforms to launch diagnostics, pharmacy, and consultations nationwide. API or console deployment. 30K+ orders/month capacity, 99.5% uptime."
            keyPoints={[
              "Plug-and-play healthcare infrastructure for healthtech startups",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "30K+ orders/month capacity with 99.5% uptime SLA",
              "Pure B2B model where your users see only your brand"
            ]}
          />
        </div>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR DIGITAL HEALTH PLATFORMS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Launch Nationwide in <span className="text-gradient">14 Days.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Skip 18 months of ops building. 30K+ orders/month capacity, 99.5% uptime. Scale revenue without scaling headcount.
              </p>

              <Link to="/start-building">
                <Button size="lg" className="btn-gradient">
                  Explore Integration <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">What's Breaking</h3>
                {[
                  "12-18 months lost signing vendor contracts",
                  "No standard SLAs with ops break city by city",
                  "Engineers pulled into compliance vs growth",
                  "Investors want nationwide coverage yesterday"
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
                  "14-day launch with infra ready nationwide",
                  "One API • One Console • One Network",
                  "9K+ pincodes, 30K+ orders/month capacity",
                  "Pure B2B model where your customers remain yours"
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
                  <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                </div>
                <div>
                  <Globe className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">15K+</div>
                  <p className="text-sm text-muted-foreground">Pharmacy Pincodes</p>
                </div>
                <div>
                  <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Complete Healthcare Infrastructure</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Full-stack healthcare services ready to power your platform from Day 1
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <TestTube className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diagnostics & Labs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home collection and center visits. NABL labs with digital reports and structured data.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    9,000+ pincodes coverage
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Pill className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Pharmacy Network</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home delivery and store pickup. Licensed pharmacists with 24-48hr fulfillment.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    15,000+ pincodes coverage
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Video className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Telemedicine Platform</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    24/7 video, audio, chat consultations. NMC registered doctors across specialties.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Nationwide availability
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <HeartPulse className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Chronic Care Programs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Protocol-driven pathways for diabetes, hypertension, PCOS with adherence tracking.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Care coordination included
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
                Launch nationwide healthcare services in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Integrate Platform", description: "API integration or console access to choose your deployment mode" },
                { step: "2", title: "Configure Services", description: "Activate diagnostics, pharmacy, consultations based on your product" },
                { step: "3", title: "White-Label Setup", description: "Your branding, your user experience, your customer relationship" },
                { step: "4", title: "Go Live Nationwide", description: "Instant access to 9,000+ pincodes with 30K+ orders capacity" }
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
                Multiple fulfillment options for seamless user experience
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
                    Sample collection and medicine delivery at user's doorstep for maximum convenience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">6 AM to 9 PM booking slots</span>
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
                    24/7 video, audio, and chat consultations with verified doctors.
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
                    Walk-in services at accredited diagnostic centers and clinics.
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
                      <span className="text-xs">Same-day appointments</span>
                    </div>
                  </div>
                </div>

                {/* Pharmacy Delivery */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Pharmacy Delivery</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Medicine home delivery with licensed pharmacist verification.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">15,000+ pincodes coverage</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">24-48 hour delivery</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Licensed pharmacist oversight</span>
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
                      "RESTful APIs with interactive documentation",
                      "Webhook support for real-time order updates",
                      "SDKs for JavaScript, Python, React Native",
                      "Direct engineering support during rollout"
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
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={digitalHealthPlatformsFAQs} />
          </div>
        </section>
      </main>

      <RelatedBlogs category="Digital Health" limit={3} />
      <Footer />
    </div>
  );
};

export default DigitalHealthPlatforms;
