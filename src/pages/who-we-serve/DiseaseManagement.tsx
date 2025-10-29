import { Activity, Users, TrendingUp, ArrowRight, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DiseaseManagement = () => {
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
                Make Continuous Care <span className="text-gradient">Actually Continuous</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Deliver diagnostics, consults, pharmacy, and follow-ups as one pathway — not a maze of disconnected vendors.
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

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Program Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Activity className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&gt;90%</div>
                  <p className="text-sm text-muted-foreground">Test Completion Rate</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&lt;20%</div>
                  <p className="text-sm text-muted-foreground">Patient Churn</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2.5-3x</div>
                  <p className="text-sm text-muted-foreground">LTV Increase</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Raw values and follow-up automation kept patients on protocol. Drop-offs reduced sharply."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseManagement;
