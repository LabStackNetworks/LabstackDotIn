import { Shield, IndianRupee, Clock, CheckCircle, ArrowRight, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { insurersTPAsFAQs } from "@/lib/faqs/insurers-tpas-faqs";

const InsurersTPAs = () => {
  const structuredData = generateFAQSchema(insurersTPAsFAQs);

  const problems = [
    "OPD claims face leakage and misuse",
    "Fragmented networks = poor member NPS and complaints",
    "Weak controls on SKUs, no standard escalation playbooks",
    "Manual reconciliation drains ops resources"
  ];

  const solutions = [
    "API-first rails: eligibility → booking → tracking → reconciliation",
    "SKU-level controls + audit trails reduce misuse and leakage",
    "SLA frameworks with real-time escalations and CSAT monitoring",
    "Automated reconciliation and unified billing across services"
  ];

  const memberJourney = [
    { step: "Check Eligibility", desc: "Member verifies coverage and books consult/test" },
    { step: "Consult/Tele", desc: "Doctor consultation with e-Rx issued" },
    { step: "Pharmacy Fulfillment", desc: "Medicine delivery with SKU-level fraud rules" },
    { step: "Auto Reconciliation", desc: "Fraud detection, reporting, and billing automated" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Solutions for Insurers & TPAs"
        description="SLA-backed OPD services with fraud controls, automated reconciliation, and 99%+ fulfillment rates. Reduce claims leakage by 12% and improve member NPS."
        keywords="health insurance OPD, TPA healthcare services, claims management, healthcare fraud prevention, member experience, cashless OPD"
        canonical="https://labstack.in/who-we-serve/insurers-tpas"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR INSURERS & TPAs</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                SLA-Backed OPD with <span className="text-gradient">Built-in Controls</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Deliver diagnostics, consults, and pharmacy at scale — with audit trails and operational controls built in.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Transform Member Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problems & Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-destructive" />
                  Current Challenges
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-1">✗</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-success" />
                  Labstack Solution
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-success mt-1">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Member Journey Flow */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Member Journey with Operational Controls
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {memberJourney.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < memberJourney.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Why Insurers Choose Labstack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-xl">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold mb-2">SKU-Level Controls & Audit Trails</h3>
                  <p className="text-sm text-muted-foreground">
                    Control inclusions/exclusions at SKU level. Automated audit trails capture every transaction for compliance and reporting.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-heading font-bold mb-2">SLA-Backed Operations</h3>
                  <p className="text-sm text-muted-foreground">
                    99%+ fulfillment rate with real-time escalations. No more member complaints about delayed services or missed appointments.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-heading font-bold mb-2">Member NPS Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless member experience across diagnostics, consults, and pharmacy leads to measurable NPS improvements.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <IndianRupee className="w-8 h-8 text-warning mb-4" />
                  <h3 className="font-heading font-bold mb-2">Reduced Leakage</h3>
                  <p className="text-sm text-muted-foreground">
                    12% leakage reduction reported by partners through automated fraud detection and audit trails.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Outcomes Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Target Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <IndianRupee className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">12%</div>
                  <p className="text-sm text-muted-foreground">Operational Leakage Reduction</p>
                  <p className="text-xs text-muted-foreground mt-2">Through SKU-level rules and audit trails</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99%+</div>
                  <p className="text-sm text-muted-foreground">SLA Adherence</p>
                  <p className="text-xs text-muted-foreground mt-2">Real-time escalations and monitoring</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">+25</div>
                  <p className="text-sm text-muted-foreground">NPS Point Gain</p>
                  <p className="text-xs text-muted-foreground mt-2">Improved member experience</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Leakage dropped, NPS improved once OPD ran on Labstack infra instead of fragmented vendors."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={insurersTPAsFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsurersTPAs;
