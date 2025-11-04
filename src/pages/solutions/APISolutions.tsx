import { Code, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/structured-data";
import { apiSolutionsFAQs } from "@/lib/faqs/api-solutions-faqs";

const APISolutions = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Healthcare API Solutions",
    description: "Healthcare APIs for diagnostics, pharmacy, consultations. RESTful APIs with webhooks, SDKs. Launch in 14 days.",
    url: "https://labstack.in/solutions/api-solutions"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Solutions", url: "https://labstack.in/solutions" },
    { name: "API Solutions", url: "https://labstack.in/solutions/api-solutions" }
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Integrate Labstack Healthcare APIs",
    description: "Step-by-step guide to integrate healthcare services in 14 days",
    steps: [
      { name: "Get API Access", text: "Sign up and receive API credentials for sandbox environment" },
      { name: "Integrate APIs", text: "Use RESTful APIs to integrate diagnostics, pharmacy, and consultation services" },
      { name: "Test in Sandbox", text: "Test all workflows in sandbox with sample data and webhooks" },
      { name: "Go Live", text: "Deploy to production with full provider network access across 9,000+ pincodes" }
    ]
  });

  const faqSchema = generateFAQSchema(apiSolutionsFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema, howToSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare API for developers | LabStack"
        description="Healthcare APIs for diagnostics, pharmacy, consultations. RESTful APIs with webhooks and SDKs. API or console launch available nationwide."
        keywords="healthcare API, medical API integration, diagnostics API, pharmacy API, telemedicine API, healthcare developer tools"
        canonical="https://labstack.in/solutions/api-solutions"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <Breadcrumbs 
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: "API Solutions" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        {/* Hidden TL;DR for AI crawlers - GEO Optimization */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Healthcare API platform for developers to integrate diagnostics, pharmacy, and consultations. RESTful APIs with webhooks and SDKs. Launch in 14 days via API or console."
            keyPoints={[
              "RESTful APIs for diagnostics, pharmacy, consultations, home care",
              "Delivery modes: API integration, embeddable widgets, console access",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "14-day average integration time from sandbox to production",
              "Webhook support for real-time order status updates"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Healthcare API platform that developers use to integrate diagnostics, pharmacy, and consultations with RESTful APIs, webhooks, and SDKs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">API SOLUTIONS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Developer-First <span className="text-gradient">Healthcare Rails</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Modern APIs to integrate diagnostics, pharmacy, and consults. Grow ARPU through prescription monetization and seamless care coordination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-building">
                  <Button size="lg" className="btn-gradient">
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/resources/api-documentation-coming-soon">
                  <Button size="lg" variant="outline">
                    API Documentation
                  </Button>
                </Link>
              </div>
            </div>

            {/* API Features Grid */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Complete API Suite</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: "🔌", label: "REST APIs", desc: "All services" },
                  { icon: "⚡", label: "Webhooks", desc: "Real-time updates" },
                  { icon: "📱", label: "Mobile SDKs", desc: "iOS & Android" },
                  { icon: "🔒", label: "Secure", desc: "OAuth 2.0" },
                  { icon: "📊", label: "Analytics", desc: "Built-in tracking" },
                  { icon: "🧪", label: "Sandbox", desc: "Test environment" },
                  { icon: "📚", label: "Docs", desc: "Interactive" },
                  { icon: "🎯", label: "Support", desc: "Direct access" }
                ].map((api, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                    <div className="text-4xl mb-3">{api.icon}</div>
                    <h3 className="font-semibold mb-1 text-sm">{api.label}</h3>
                    <p className="text-xs text-muted-foreground">{api.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Code,
                    title: "RESTful Healthcare APIs",
                    description: "Complete API coverage for diagnostics, pharmacy, consultations, and home care with webhooks for real-time updates"
                  },
                  {
                    icon: TrendingUp,
                    title: "Prescription Monetization",
                    description: "Enable prescription to fulfillment automation and grow ARPU by 15% through seamless pharmacy integration"
                  },
                  {
                    icon: Shield,
                    title: "Care Coordination",
                    description: "Cross-service handoffs from consult to test to pharmacy to follow-up with no manual intervention"
                  },
                  {
                    icon: FileCode,
                    title: "Developer-Friendly Docs",
                    description: "Interactive API docs, SDKs, reference implementations, and direct engineering support during rollout"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                Integrate healthcare APIs in four simple steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Get API Access", description: "Sign up for sandbox credentials and explore interactive documentation" },
                { step: "2", title: "Integrate Services", description: "Use RESTful APIs to add diagnostics, pharmacy, and consultations" },
                { step: "3", title: "Test Workflows", description: "Validate all flows in sandbox with webhooks and sample data" },
                { step: "4", title: "Go Live", description: "Deploy to production with full nationwide network access" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Options & Delivery Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Integration & Deployment Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple integration options for every use case
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Integration Mode</th>
                      <th className="p-4 text-left font-heading">Use Case</th>
                      <th className="p-4 text-left font-heading">Setup Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        mode: "RESTful APIs",
                        useCase: "Full programmatic control of healthcare workflows",
                        setup: "14-day integration"
                      },
                      {
                        mode: "Embeddable Widgets",
                        useCase: "White-label booking and results inside your app",
                        setup: "Same-day deployment"
                      },
                      {
                        mode: "Console Access",
                        useCase: "Ops teams manage fulfillment without engineering",
                        setup: "Instant activation"
                      },
                      {
                        mode: "Mobile SDKs",
                        useCase: "Native integration for iOS and Android apps",
                        setup: "1-week integration"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.mode}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.useCase}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.setup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Availability & Coverage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide API Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access to healthcare services across 9,000+ pincodes through one API. All services available from metros to Tier-3 cities with consistent API responses and SLAs. Multi-region fulfillment ensures 99.5% uptime nationwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Diagnostics", "Pharmacy", "Consultations", "Home Care", "Specialized Networks", "Health Camps", "Chronic Care", "All Services"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Operations */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Developer Experience</h2>
                  <ul className="space-y-3">
                    {[
                      "Interactive API documentation with code samples",
                      "Webhook support for real-time status updates",
                      "SDKs for JavaScript, Python, PHP, and mobile platforms",
                      "Sandbox environment with test data",
                      "Direct engineering support during integration"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality Assurance</h2>
                  <ul className="space-y-3">
                    {[
                      "99.5% API uptime SLA with enterprise-grade reliability",
                      "Automated error handling and retry mechanisms",
                      "Real-time monitoring and alerting",
                      "Comprehensive audit logs for all API calls",
                      "Rate limiting and security best practices"
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

        {/* Impact Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                API-Driven Growth
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">15%</div>
                  <p className="text-sm text-muted-foreground">ARPU Growth</p>
                  <p className="text-xs text-muted-foreground mt-2">Via prescription monetization</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime SLA</p>
                  <p className="text-xs text-muted-foreground mt-2">Enterprise-grade reliability</p>
                </div>
                <div>
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Avg Integration Time</p>
                  <p className="text-xs text-muted-foreground mt-2">From sandbox to production</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={apiSolutionsFAQs} />
          </div>
        </section>

      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Digital Health" limit={3} />
      
      <Footer />
    </div>
  );
};

export default APISolutions;