import { Target, TrendingUp, Users, Building2, ArrowRight, Award, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import StatCard from "@/components/design-system/StatCard";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { caseStudiesFAQs } from "@/lib/faqs/case-studies-faqs";

const CaseStudies = () => {
  const structuredData = generateFAQSchema(caseStudiesFAQs);

  const featuredCases = [
    {
      company: "Major Health Insurer",
      industry: "Insurance / TPA",
      challenge: "18% OPD claims leakage with poor member NPS",
      solution: "SKU-level controls, automated fraud detection, and SLA-backed fulfillment",
      results: [
        { metric: "12%", label: "Leakage Reduction" },
        { metric: "25 pts", label: "NPS Gain" },
        { metric: "99%+", label: "SLA Adherence" }
      ],
      icon: Building2
    },
    {
      company: "Digital Health Startup",
      industry: "Healthtech Platform",
      challenge: "12-18 month build timeline blocking nationwide launch",
      solution: "API-first integration with white-label platform",
      results: [
        { metric: "14 Days", label: "Go-Live Time" },
        { metric: "20%", label: "Conversion Boost" },
        { metric: "9K+", label: "Pincodes Live" }
      ],
      icon: Target
    },
    {
      company: "Disease Management Platform",
      industry: "Chronic Care",
      challenge: "Patient drop-offs between test → consult → meds",
      solution: "Protocol-driven pathways with automated follow-ups",
      results: [
        { metric: ">90%", label: "Completion Rate" },
        { metric: "<20%", label: "Patient Churn" },
        { metric: "2.5-3x", label: "LTV Increase" }
      ],
      icon: Users
    }
  ];

  const industries = [
    { name: "Insurers & TPAs", count: 12, icon: Building2 },
    { name: "Digital Health", count: 18, icon: Target },
    { name: "Disease Management", count: 8, icon: Users },
    { name: "Brokers & Aggregators", count: 6, icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Customer Success Stories & Case Studies - Labstack"
        description="Real results from insurers, digital health platforms, and disease management programs. 12% leakage reduction, 20% conversion boost, 90%+ care completion rates."
        keywords="healthcare case studies, customer success stories, healthtech ROI, insurance OPD results, telemedicine case studies, digital health implementation"
        canonical="https://labstack.in/resources/case-studies"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">CUSTOMER SUCCESS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Real Results from <span className="text-gradient">Real Companies</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Detailed case studies showing how healthcare companies scaled nationwide, reduced costs, and improved outcomes.
              </p>

              <TLDR summary="Success stories across insurers (12% leakage reduction), digital health platforms (14-day launches), disease management (90%+ adherence), and brokers (15% ARPU growth). Real data, real results." />
            </div>

            {/* Featured Case Studies */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Featured Success Stories</h2>
              <div className="space-y-8">
                {featuredCases.map((caseStudy, index) => (
                  <div key={index} className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                            {caseStudy.industry}
                          </div>
                          <h3 className="font-heading font-bold text-2xl mb-2">{caseStudy.company}</h3>
                        </div>
                        <caseStudy.icon className="w-12 h-12 text-primary" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-foreground">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Solution</h4>
                          <p className="text-foreground">{caseStudy.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/20">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-heading font-bold text-gradient mb-1">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Button variant="outline" className="w-full">
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browse by Industry */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Browse by Industry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-gradient-hero rounded-xl p-6 border border-border/50 card-hover cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <industry.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold">{industry.name}</h3>
                          <p className="text-sm text-muted-foreground">{industry.count} case studies</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-white mb-20">
              <Award className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">See Yourself in These Stories?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Book a demo to learn how Labstack can help you achieve similar results in your healthcare business.
              </p>
              <Link to="/book-demo">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* FAQ Section */}
            <FAQ items={caseStudiesFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
