import { FileText, Download, TrendingUp, Shield, Globe, ArrowRight, BookOpen, Target, Users, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { whitepapersFAQs } from "@/lib/faqs/whitepapers-faqs";
import { caseStudiesFAQs } from "@/lib/faqs/case-studies-faqs";

const ResearchHub = () => {
  // Combine FAQs from both sections
  const combinedFAQs = [...caseStudiesFAQs, ...whitepapersFAQs];
  const structuredData = generateFAQSchema(combinedFAQs);

  const featuredReports = [
    {
      title: "The State of Healthcare Infrastructure in India 2024",
      description: "Comprehensive market analysis covering 9,000+ pincodes, provider density, pricing dynamics, and growth opportunities in Tier-2/3 markets.",
      pages: "45 pages",
      published: "Q4 2024",
      category: "Market Research",
      icon: TrendingUp,
      type: "whitepaper"
    },
    {
      title: "Healthcare Regulatory Compliance Framework",
      description: "Complete guide to IT Act 2000, DISHA, Telemedicine Practice Guidelines 2020, ABDM integration, and data protection requirements.",
      pages: "32 pages",
      published: "Q4 2024",
      category: "Compliance",
      icon: Shield,
      type: "whitepaper"
    },
    {
      title: "Scaling to Tier-2 & Tier-3 Cities: Playbook",
      description: "Step-by-step expansion guide for Jaipur, Lucknow, Indore, Chandigarh, and 200+ cities. Provider onboarding, pricing strategies, and operational best practices.",
      pages: "28 pages",
      published: "Q3 2024",
      category: "Geographic Expansion",
      icon: Globe,
      type: "whitepaper"
    }
  ];

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

  const recentPublications = [
    {
      title: "OPD Benefit Economics: ROI Analysis for Insurers",
      type: "Whitepaper",
      description: "Cost-benefit analysis of OPD benefits with real data from 12 insurance partners. Leakage control, member satisfaction, and premium impact."
    },
    {
      title: "API-First Architecture for Healthcare Platforms",
      type: "Technical Report",
      description: "Architecture patterns, scalability strategies, and best practices for building healthcare platforms on API-first foundations."
    },
    {
      title: "Telemedicine Adoption Trends Q3 2024",
      type: "Quarterly Report",
      description: "Analysis of consultation volumes, specialties, pricing, geographic patterns, and patient satisfaction across 30,000+ consultations."
    },
    {
      title: "Build vs Buy: Healthcare Infrastructure ROI Model",
      type: "Financial Analysis",
      description: "12-18 month build costs vs API integration. Real data from 25 companies showing time-to-market and total cost of ownership."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Research, Case Studies & Whitepapers - Labstack"
        description="In-depth market research, customer success stories, regulatory guides, and ROI models. Real results from insurers, digital health platforms, and disease management programs."
        keywords="healthcare whitepapers, case studies, healthtech research, market analysis, regulatory compliance guides, ROI models, customer success stories"
        canonical="https://labstack.in/resources/research-hub"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">RESEARCH & SUCCESS STORIES</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Research Reports & <span className="text-gradient">Customer Success</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Data-driven insights, market intelligence, regulatory frameworks, and real customer success stories showing measurable results.
              </p>

              <div className="sr-only">
                <TLDR summary="Comprehensive research covering market sizing (9,000+ pincodes), regulatory compliance (IT Act 2000, DISHA), real customer results (12% leakage reduction, 14-day launches, 90%+ adherence), and strategic playbooks. All freely downloadable." />
              </div>
            </div>

            {/* Featured Case Studies */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Customer Success Stories</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Real results from healthcare companies that scaled nationwide, reduced costs, and improved outcomes
              </p>
              <div className="space-y-8">
                {featuredCases.map((caseStudy, index) => (
                  <div key={index} className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium mb-4">
                            {caseStudy.industry}
                          </div>
                          <h3 className="font-heading font-bold text-2xl mb-2">{caseStudy.company}</h3>
                        </div>
                        <caseStudy.icon className="w-12 h-12 text-success" />
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
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Research Reports */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Featured Research Reports</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Market analysis, regulatory frameworks, and strategic playbooks for healthcare technology leaders
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredReports.map((report, index) => (
                  <div key={index} className="bg-card-gradient rounded-2xl border border-border/20 overflow-hidden card-hover">
                    <div className="bg-gradient-primary p-6 text-white">
                      <report.icon className="w-10 h-10 mb-4" />
                      <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                        {report.category}
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2">{report.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm mb-4">{report.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{report.pages}</span>
                        <span>{report.published}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Publications */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Recent Publications</h2>
              <div className="space-y-4">
                {recentPublications.map((pub, index) => (
                  <div key={index} className="bg-gradient-hero rounded-xl p-6 border border-border/50 card-hover">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="text-xs font-medium text-primary">{pub.type}</span>
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-2">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground">{pub.description}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Categories */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Research Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/50 rounded-xl p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold mb-2">Market Analysis</h3>
                  <p className="text-sm text-muted-foreground">Market sizing, growth projections, competitive landscape, and pricing benchmarks</p>
                </div>
                <div className="bg-card/50 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-heading font-bold mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">IT Act 2000, DISHA, Telemedicine Guidelines, ABDM, data protection</p>
                </div>
                <div className="bg-card/50 rounded-xl p-6">
                  <Globe className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-heading font-bold mb-2">Geographic Expansion</h3>
                  <p className="text-sm text-muted-foreground">Tier-2/3 market entry, provider networks, operational strategies</p>
                </div>
                <div className="bg-card/50 rounded-xl p-6">
                  <BookOpen className="w-8 h-8 text-warning mb-4" />
                  <h3 className="font-heading font-bold mb-2">Customer Success</h3>
                  <p className="text-sm text-muted-foreground">Real results from insurers, platforms, and disease management programs</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center text-white mb-20">
              <FileText className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">Get Research & Success Stories</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to receive new research reports, case studies, and industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center border border-border/50">
              <Award className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-heading font-bold mb-4">See Yourself in These Stories?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a demo to learn how Labstack can help you achieve similar results in your healthcare business.
              </p>
              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchHub;