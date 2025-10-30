import { Activity, Users, TrendingUp, ArrowRight, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { diseaseManagementFAQs } from "@/lib/faqs/disease-management-faqs";

const DiseaseManagement = () => {
  const structuredData = generateFAQSchema(diseaseManagementFAQs);

  const careGaps = [
    "Patients drop off between test → consult → meds → follow-up",
    "Reports stuck in PDFs, useless for long-term clinical insight",
    "Manual nudges don't scale; low adherence, poor outcomes",
    "Limited network coverage prevents continuous care delivery"
  ];

  const labstackFix = [
    "Protocol-driven pathways — tests, consults, pharmacy linked by API",
    "Raw digital values — structured, longitudinal data for care decisions",
    "Follow-up automation for adherence and protocol compliance",
    "Nationwide coverage ensures care continuity across geographies"
  ];

  const workflowExample = [
    { step: "Book HbA1c", desc: "Home test scheduled automatically" },
    { step: "Flag Values", desc: "Abnormal results trigger consult" },
    { step: "E-Rx to Pharmacy", desc: "Medications delivered same day" },
    { step: "Automated Follow-Up", desc: "Reminders for repeat tests & lifestyle checks" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Disease Management Program Solutions"
        description="Protocol-driven care pathways with structured health data, automated follow-ups, and 90%+ test completion rates. Close care loops for chronic disease management."
        keywords="disease management programs, chronic care management, diabetes care programs, care pathways, health monitoring, patient adherence"
        canonical="https://labstack.in/who-we-serve/disease-management"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">FOR DISEASE MANAGEMENT</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Continuous Care. <span className="text-gradient">Zero Vendor Maze.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch protocol-driven care programs in days. One platform connects tests, consults, pharmacy, and follow-ups—no fragmented vendor management.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  See Full Care Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Care Gaps vs Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">Where Care Loops Break</h3>
                <ul className="space-y-3">
                  {careGaps.map((gap, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                      <span className="text-destructive mt-1 flex-shrink-0">✗</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">Labstack Closes Gaps</h3>
                <ul className="space-y-3">
                  {labstackFix.map((fix, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                      <span className="text-success mt-1 flex-shrink-0">✓</span>
                      <span>{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Workflow Example */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Diabetes Care Pathway Example
              </h2>
              <p className="text-center text-muted-foreground mb-12">Protocol-driven care from diagnosis to ongoing management</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {workflowExample.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-hero rounded-xl p-6 border border-border/50 text-center card-hover">
                      <Heart className="w-8 h-8 text-success mx-auto mb-3" />
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < workflowExample.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                The Care Delivery Platform You Get
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Build branded chronic care programs without managing fragmented vendors. Launch nationwide in days with protocol-driven pathways built-in.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Protocol-Driven Care Pathways</h3>
                  <p className="text-sm text-muted-foreground">Pre-built workflows for diabetes, hypertension, PCOS, cardiac care. Tests → consults → pharmacy → follow-ups linked by API, not manual coordination.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">White-Label Patient Journeys</h3>
                  <p className="text-sm text-muted-foreground">Customize enrollment, care communications, progress tracking, and engagement under your brand. We power the delivery behind the scenes.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Care Program Builder</h3>
                  <p className="text-sm text-muted-foreground">Design custom chronic care programs—configure test frequency, specialist consults, medication protocols, and lifestyle interventions.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Structured Health Data</h3>
                  <p className="text-sm text-muted-foreground">Raw digital values, not PDFs. Longitudinal data for clinical decisions, trend analysis, and personalized care adjustments over time.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Automated Adherence & Follow-Ups</h3>
                  <p className="text-sm text-muted-foreground">AI-driven reminders for tests, medications, and appointments. Automated escalations for abnormal values or protocol deviations.</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Unified Operations & Analytics</h3>
                  <p className="text-sm text-muted-foreground">Track completion rates, patient adherence, clinical outcomes, and program ROI. We handle fulfillment, quality, and SLA management.</p>
                </div>
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
      <Footer />
    </div>
  );
};

export default DiseaseManagement;
