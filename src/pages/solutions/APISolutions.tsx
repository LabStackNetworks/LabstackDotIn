import { Code, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { apiSolutionsFAQs } from "@/lib/faqs/api-solutions-faqs";

const APISolutions = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Healthcare API Solutions",
    description: "Developer-first healthcare APIs for diagnostics, pharmacy, consultations. Modern RESTful APIs with webhooks, SDKs, and comprehensive documentation.",
    url: "https://labstack.in/solutions/api-solutions"
  });

  const faqSchema = generateFAQSchema(apiSolutionsFAQs);
  const structuredData = [productSchema, faqSchema];

  const apiFeatures = [
    {
      title: "RESTful Healthcare APIs",
      description: "Complete API coverage for diagnostics, pharmacy, consultations, and home care with webhooks for real-time updates"
    },
    {
      title: "Prescription Monetization",
      description: "Enable prescription-to-fulfillment automation and grow ARPU by 15% through seamless pharmacy integration"
    },
    {
      title: "Care Coordination",
      description: "Cross-service handoffs from consult → test → pharmacy → follow-up with no manual intervention"
    },
    {
      title: "Developer-Friendly Docs",
      description: "Interactive API docs, SDKs, reference implementations, and direct engineering support during rollout"
    }
  ];

  const integrationOptions = [
    { title: "API-First", desc: "Programmatic control of the full healthcare workflow" },
    { title: "Embeddable Widgets", desc: "White-label booking & results inside your app" },
    { title: "Console for Teams", desc: "Ops can manage fulfillment without engineering" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare API Solutions"
        description="Developer-first healthcare APIs for diagnostics, pharmacy, consultations. Modern RESTful APIs with webhooks, SDKs, and comprehensive documentation."
        keywords="healthcare API, medical API integration, diagnostics API, pharmacy API, telemedicine API, healthcare developer tools"
        canonical="https://labstack.in/solutions/api-solutions"
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
                <Button size="lg" variant="outline">
                  API Documentation
                </Button>
              </div>
            </div>

            {/* API Features */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Complete API Suite</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover">
                    <Code className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Options */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Integrate Once. Deploy Everywhere.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {integrationOptions.map((option, index) => (
                  <div key={index} className="bg-gradient-hero rounded-2xl p-8 border border-border/50 text-center card-hover">
                    <FileCode className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-bold mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Experience */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-8">
                Built for Developer Speed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card/50 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-semibold mb-2">Vendor-Agnostic API</h3>
                  <p className="text-sm text-muted-foreground">One interface for all providers. Standardized booking, reporting, and billing flows.</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-semibold mb-2">Webhook Support</h3>
                  <p className="text-sm text-muted-foreground">Instant status updates and event notifications for real-time integration.</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-semibold mb-2">Sandbox to Production</h3>
                  <p className="text-sm text-muted-foreground">Prebuilt flows and reference apps. Go live in days, not months.</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-semibold mb-2">Direct Engineering Support</h3>
                  <p className="text-sm text-muted-foreground">Access to our team during rollout for rapid issue resolution.</p>
                </div>
              </div>

              <div className="mt-8 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "We integrated Labstack's APIs into our wellness app in under a week. The widgets made it possible to go live without building custom flows from scratch."
                </p>
              </div>
            </div>

            {/* Revenue Impact Metrics */}
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

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Labstack enabled prescription monetization directly in our journeys, improving ARPU by 15% without changing customer flows."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={apiSolutionsFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APISolutions;
