import { Heart, Activity, TrendingUp, ArrowRight, CheckCircle, Zap, Shield, Target, Home, Video, Truck, HeartPulse, IndianRupee, Users } from "lucide-react";
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
import { diseaseManagementFAQs } from "@/lib/faqs/disease-management-faqs";

const DiseaseManagement = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Disease Management", url: "https://labstack.in/who-we-serve/disease-management" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Protocol-Driven Disease Management Platform",
    description: "Care delivery platform with home sample collection, pharmacy delivery, teleconsults for disease management programs. Protocol-driven pathways across India.",
    url: "https://labstack.in/who-we-serve/disease-management"
  });

  const faqSchema = generateFAQSchema(diseaseManagementFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Protocol-Driven Care Platform for Disease Management | LabStack"
        description="Protocol-driven care platform for disease management delivering diabetes, weight loss, GLP-1, hypertension, PCOD/PCOS, and women's health pathways. Built-in diagnostics, consultation, and pharmacy with 90%+ completion across India."
        keywords="disease management platform, protocol-driven care, diabetes management, GLP-1 programs, Mounjaro programs, PCOD PCOS care, women's health pathways, chronic care India"
        canonical="https://labstack.in/who-we-serve/disease-management"
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
                { label: "Disease Management" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Protocol-driven care platform for disease management companies delivering diabetes, weight loss, GLP-1 (including Mounjaro programs), hypertension, PCOD/PCOS, and women's health pathways. Built-in diagnostics, consultation, and pharmacy delivery with structured data and 90%+ completion across India."
            keyPoints={[
              "Disease programs: diabetes, weight loss, GLP-1, hypertension, PCOD/PCOS, women's health",
              "Built-in diagnostics, consultation, and pharmacy delivery",
              "90%+ completion rates across India",
              "Structured data for longitudinal tracking",
              "Protocol-driven care pathways"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Protocol-driven care platform for disease management companies delivering diabetes, weight loss, GLP-1 (including Mounjaro programs), hypertension, PCOD/PCOS, and women's health pathways. Built-in diagnostics, consultation, and pharmacy delivery with structured data and 90%+ completion across India.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">FOR DISEASE MANAGEMENT</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Close Care Loops. <span className="text-gradient">Zero Vendor Maze.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Protocol-driven pathways in days. 90%+ completion rates. Structured data.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  See Full Care Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Where Care Loops Break</h3>
                {[
                  "Patients drop off: test → consult → meds",
                  "Reports stuck in PDFs, no clinical insight",
                  "Manual nudges don't scale",
                  "Limited network prevents continuity"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Labstack Closes Gaps</h3>
                {[
                  "Protocol pathways for tests, consults, pharmacy linked",
                  "Raw digital values with longitudinal structured data",
                  "Automated follow-ups for adherence",
                  "Nationwide coverage ensures continuity"
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
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">90%+</div>
                  <p className="text-sm text-muted-foreground">Pathway Completion</p>
                </div>
                <div>
                  <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Structured</div>
                  <p className="text-sm text-muted-foreground">Health Data</p>
                </div>
                <div>
                  <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Auto</div>
                  <p className="text-sm text-muted-foreground">Adherence Nudges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-12 lg:py-16 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Protocol-Driven Care Programs</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Complete care pathways for chronic disease management with 90%+ completion rates
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Activity className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diabetes Management</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    HbA1c monitoring, dietary guidance, medication adherence with automated care pathways.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    90%+ pathway completion
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <HeartPulse className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Hypertension Control</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    BP monitoring, lifestyle coaching, prescription management with longitudinal tracking.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Structured health data
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Heart className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Cardiac Care Programs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Post-event monitoring, cardiac rehab, preventive screening with protocol adherence.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Continuous monitoring
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Target className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Lifestyle Intervention</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    PCOS, weight management, metabolic health with nutrition and activity tracking.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Behavioral change support
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
                Launch protocol-driven care pathways in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Design Protocols", description: "Build care pathways: diagnostics → consult → pharmacy → follow-up" },
                { step: "2", title: "Configure Programs", description: "Set eligibility, frequency, escalation rules, adherence triggers" },
                { step: "3", title: "Activate Nationwide", description: "Instant access to 9,000+ pincode fulfillment network" },
                { step: "4", title: "Track Outcomes", description: "Monitor completion, adherence, clinical outcomes, program ROI" }
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

        {/* Delivery Modes & Coverage */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Delivery Modes & Coverage</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Multiple touchpoints for comprehensive care delivery and adherence
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Home Diagnostics */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Home Collection</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Regular monitoring tests at patient's doorstep to ensure pathway adherence.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Scheduled collections for protocol compliance</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Available in 9,000+ pincodes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Digital structured reports</span>
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
                    Regular follow-ups with specialist doctors for care plan adjustments.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Scheduled protocol consultations</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Specialist access nationwide</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Prescription management</span>
                    </div>
                  </div>
                </div>

                {/* Pharmacy Delivery */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Pharmacy Delivery</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Medication delivery with adherence tracking and refill automation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">15,000+ pincodes coverage</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Automated refill reminders</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Adherence monitoring</span>
                    </div>
                  </div>
                </div>

                {/* Care Coordination */}
                <div className="bg-card-gradient p-8 rounded-xl border border-border/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                      <HeartPulse className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">Care Coordination</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automated nudges and care team support for pathway completion.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Automated adherence nudges</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Care team escalation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Outcome tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Care Delivery */}
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
                      "API integration for programmatic care pathway management",
                      "Console access for care coordinators and ops teams",
                      "White-label patient apps with your branding",
                      "Real-time dashboards for adherence and outcomes tracking"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality & Outcomes</h2>
                  <ul className="space-y-3">
                    {[
                      "Structured health data for longitudinal tracking",
                      "Automated adherence protocols with smart nudges",
                      "Clinical outcome measurement and reporting",
                      "90%+ pathway completion rates across programs"
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
            <FAQ items={diseaseManagementFAQs} />
          </div>
        </section>
      </main>

      <RelatedBlogs category="Disease Management" limit={3} />
      <Footer />
    </div>
  );
};

export default DiseaseManagement;
