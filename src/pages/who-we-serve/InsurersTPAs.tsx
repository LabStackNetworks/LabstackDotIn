import { Shield, IndianRupee, Clock, CheckCircle, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
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
                OPD at Scale. <span className="text-gradient">Zero Setup.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Launch in days. Cut leakage 12%. Boost NPS 25 points. 99%+ SLA adherence.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Transform Member Experience <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Challenges</h3>
                {[
                  "OPD claims leakage and misuse",
                  "Fragmented networks = poor NPS",
                  "Weak SKU controls, no playbooks",
                  "Manual reconciliation drains ops"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Labstack Solution</h3>
                {[
                  "API-first rails: eligibility → booking → reconciliation",
                  "SKU-level controls + audit trails",
                  "SLA frameworks with real-time escalations",
                  "Automated reconciliation across services"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Target Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <IndianRupee className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">12%</div>
                  <p className="text-sm text-muted-foreground">Leakage Reduction</p>
                </div>
                <div>
                  <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">+25</div>
                  <p className="text-sm text-muted-foreground">NPS Point Gain</p>
                </div>
                <div>
                  <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">99%+</div>
                  <p className="text-sm text-muted-foreground">SLA Adherence</p>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Speed Without Setup
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Plug-and-Play Services",
                    badge: "Days to launch",
                    desc: "Diagnostics, consults, pharmacy, chronic care—nationwide instantly.",
                    color: "success"
                  },
                  {
                    title: "White-Label Journeys",
                    badge: "Your brand",
                    desc: "Customize booking flows, care comms—we stay invisible.",
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
