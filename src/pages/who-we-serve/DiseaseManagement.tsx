import { Heart, Activity, TrendingUp, ArrowRight, CheckCircle, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
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
        title="Protocol-driven care for disease management | LabStack"
        description="Care delivery platform with home sample collection, pharmacy delivery, and teleconsults for disease management companies. API or console launch. Available nationwide."
        keywords="disease management programs, chronic care management, diabetes care programs, care pathways India, patient adherence"
        canonical="https://labstack.in/who-we-serve/disease-management"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Protocol-driven care delivery platform for disease management programs. Close care loops with automated pathways for diagnostics, consultations, and pharmacy. 90%+ completion rates with structured data."
            keyPoints={[
              "Protocol-driven care pathways for chronic disease management",
              "Delivery modes: home collection, teleconsult, pharmacy delivery, care coordination",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "90%+ pathway completion rates with adherence automation",
              "Structured health data for longitudinal tracking and outcomes"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Protocol-driven care delivery platform that disease management programs use to close care loops with automated pathways for diagnostics, consultations, and pharmacy across India.
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
                  "Protocol pathways—tests, consults, pharmacy linked",
                  "Raw digital values—longitudinal structured data",
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

        {/* How It Works */}
        <section className="py-20 bg-background">
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

        {/* Care Delivery Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Care Delivery Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple fulfillment options for complete care coordination
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Care Mode</th>
                      <th className="p-4 text-left font-heading">Services</th>
                      <th className="p-4 text-left font-heading">Patient Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        mode: "Home Diagnostics",
                        services: "Pathology, HbA1c, lipid panel, chronic markers",
                        experience: "Home sample collection with protocol-specific tests"
                      },
                      {
                        mode: "Teleconsultation",
                        services: "GP and specialist consults with protocol workflows",
                        experience: "Video consults with care pathway integration"
                      },
                      {
                        mode: "Pharmacy Delivery",
                        services: "Prescription fulfillment with adherence tracking",
                        experience: "Medicine delivery with refill reminders"
                      },
                      {
                        mode: "Care Coordination",
                        services: "Automated follow-ups, lifestyle coaching, monitoring",
                        experience: "Smart nudges for adherence and milestone tracking"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.mode}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.services}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Care Delivery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Care Delivery</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch disease management programs across 9,000+ pincodes from metros to Tier-3 cities. Complete care coordination with diagnostics, consultations, pharmacy. 90%+ pathway completion with adherence automation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Diabetes Care", "Hypertension", "PCOS Management", "Cardiac Programs", "Chronic Care", "Lifestyle Programs", "Preventive Care", "All Programs"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Quality */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
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

        {/* Workflow Example */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Diabetes Care Pathway Example
              </h2>
              <p className="text-center text-muted-foreground mb-12">Protocol-driven care from diagnosis to ongoing management</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "Book HbA1c", desc: "Home test scheduled" },
                  { step: "Flag Values", desc: "Abnormal → consult" },
                  { step: "E-Rx to Pharmacy", desc: "Meds delivered same day" },
                  { step: "Auto Follow-Up", desc: "Repeat tests + lifestyle" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-gradient-hero rounded-xl p-6 border border-border/50 text-center">
                      <Heart className="w-8 h-8 text-success mx-auto mb-3" />
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Close Care Loops From Day One
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Protocol Pathways",
                    badge: "90%+ completion",
                    desc: "Pre-built workflows: diabetes, hypertension, PCOS, cardiac.",
                    color: "success"
                  },
                  {
                    title: "Structured Data",
                    badge: "Longitudinal",
                    desc: "Raw digital values for trend analysis, clinical decisions.",
                    color: "primary"
                  },
                  {
                    title: "Adherence Engine",
                    badge: "Smart nudges",
                    desc: "AI-driven reminders for tests, meds, appointments.",
                    color: "success"
                  },
                  {
                    title: "White-Label Journeys",
                    badge: "Your brand",
                    desc: "Customize enrollment, comms, tracking under your brand.",
                    color: "secondary"
                  },
                  {
                    title: "Care Program Builder",
                    badge: "Customizable",
                    desc: "Design programs—configure tests, consults, protocols.",
                    color: "primary"
                  },
                  {
                    title: "Unified Analytics",
                    badge: "Full visibility",
                    desc: "Track completion, adherence, outcomes, ROI.",
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

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Program Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Target className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">90%+</div>
                  <p className="text-sm text-muted-foreground">Pathway Completion</p>
                  <p className="text-xs text-muted-foreground mt-2">With adherence automation</p>
                </div>
                <div>
                  <Activity className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Structured Data</p>
                  <p className="text-xs text-muted-foreground mt-2">Digital raw values</p>
                </div>
                <div>
                  <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9K+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                  <p className="text-xs text-muted-foreground mt-2">Nationwide care delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={diseaseManagementFAQs} />
          </div>
        </section>

      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Disease Management" limit={3} />
      
      <Footer />
    </div>
  );
};

export default DiseaseManagement;
