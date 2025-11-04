import { Heart, Activity, TrendingUp, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { diseaseManagementFAQs } from "@/lib/faqs/disease-management-faqs";

const DiseaseManagement = () => {
  const structuredData = generateFAQSchema(diseaseManagementFAQs);

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

            {/* Workflow Example */}
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
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
