import { Activity, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DiseaseManagement = () => {
  const careGaps = [
    "Diagnostics: Limited network, metro-only, inconsistent experience",
    "Specialists: No coverage, patients skip or self-search",
    "Home care: Daily insulin, wound care, physio missing",
    "Pharmacy: Limited network, no local fulfillment",
    "Emergency: No SOS support, trust collapses"
  ];

  const labstackFix = [
    "Diagnostics in 24hrs, reports auto-flow to platform",
    "Specialist consults available anywhere",
    "Nursing & home care across 9,000 pincodes",
    "Meds delivered with tracking",
    "Ambulances dispatched on-demand"
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
                Close Every Gap in the <span className="text-gradient">Care Loop</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                End-to-end infrastructure for diabetes, cardiac, cancer care. 95%+ test completion drives proven outcomes.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiseaseManagement;
