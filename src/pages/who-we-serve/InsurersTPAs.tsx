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
                Healthcare at Scale. <span className="text-gradient">Zero Setup.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch OPD services in days, not months. Plug-and-play healthcare infrastructure with built-in controls, white-label journeys, and automated operations.
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

            {/* Technology Platform with Business Impact */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Speed Without Setup: The Platform Behind Your Success
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Launch OPD services in days with plug-and-play infrastructure. Cut claims leakage by 12%, improve NPS by 25+ points, maintain 99%+ SLA adherence—without building or managing the network.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Plug-and-Play Health Services</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Days to launch</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Activate diagnostics, doctor consults, pharmacy, and chronic care across India instantly. No vendor contracts or network building.</p>
                  <p className="text-xs text-success font-medium">Impact: Zero setup time, nationwide coverage from day one</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">White-Label Member Journeys</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Your brand</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Customize booking flows, care communications, and engagement across app, web, and WhatsApp. We power it behind the scenes.</p>
                  <p className="text-xs text-primary font-medium">Impact: +25 NPS point gain through seamless member experience</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">SKU Controls & Fraud Prevention</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">12% savings</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">SKU-level controls, audit trails, and real-time eligibility checks built into every transaction. Prevent misuse before it happens.</p>
                  <p className="text-xs text-success font-medium">Impact: 12% reduction in claims leakage and operational waste</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Network Configuration</h3>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Flexible</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Choose standard, premium, or specialty networks by region. Configure eligibility rules, SKU controls, and pricing to match your benefit design.</p>
                  <p className="text-xs text-secondary font-medium">Impact: Tailored quality without fragmented vendor management</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Unified SLA Operations</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">99%+ uptime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Automated fulfillment, tracking, escalations, and reconciliation. Real-time monitoring with SLA frameworks built in.</p>
                  <p className="text-xs text-primary font-medium">Impact: 99%+ SLA adherence with zero manual intervention</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Automated Reconciliation</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Zero ops drain</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Single unified billing across all services. Fraud detection, reporting, and reconciliation handled automatically with full audit trails.</p>
                  <p className="text-xs text-success font-medium">Impact: Free up ops resources from manual reconciliation</p>
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
