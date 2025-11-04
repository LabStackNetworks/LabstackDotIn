import { Smartphone, Globe, Zap, ArrowRight, CheckCircle, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data";
import { digitalHealthPlatformsFAQs } from "@/lib/faqs/digital-health-platforms-faqs";

const DigitalHealthPlatforms = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Digital Health Platforms", url: "https://labstack.in/who-we-serve/digital-health-platforms" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Infrastructure for Digital Health Platforms",
    description: "Complete healthcare fulfillment infrastructure for digital health companies. API or console deployment across 9,000+ pincodes.",
    url: "https://labstack.in/who-we-serve/digital-health-platforms"
  });

  const faqSchema = generateFAQSchema(digitalHealthPlatformsFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare fulfillment for health apps | LabStack"
        description="Diagnostics, pharmacy, teleconsults platform for digital health companies. API or console launch. 30K+ orders capacity across 9,000+ pincodes nationwide."
        keywords="digital health platform, healthtech infrastructure, healthcare API integration India, telemedicine platform, health startup solutions"
        canonical="https://labstack.in/who-we-serve/digital-health-platforms"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Complete healthcare infrastructure for digital health platforms to launch diagnostics, pharmacy, and consultations nationwide. API or console deployment. 30K+ orders/month capacity, 99.5% uptime."
            keyPoints={[
              "Plug-and-play healthcare infrastructure for healthtech startups",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "30K+ orders/month capacity with 99.5% uptime SLA",
              "Pure B2B—your users see only your brand"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Complete healthcare fulfillment infrastructure that digital health platforms use to launch diagnostics, pharmacy, and consultation services nationwide without building ops teams.
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
                <span className="text-primary font-medium text-sm">FOR DIGITAL HEALTH PLATFORMS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Launch Nationwide in <span className="text-gradient">14 Days.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Skip 18 months of ops building. 30K+ orders/month capacity, 99.5% uptime. Scale revenue without scaling headcount.
              </p>

              <Link to="/start-building">
                <Button size="lg" className="btn-gradient">
                  Explore Integration <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">What's Breaking</h3>
                {[
                  "12-18 months lost signing vendor contracts",
                  "No standard SLAs—ops break city by city",
                  "Engineers pulled into compliance vs growth",
                  "Investors want nationwide coverage yesterday"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">With Labstack</h3>
                {[
                  "48-hour launch—infra ready nationwide",
                  "One API • One Console • One Network",
                  "9K+ pincodes, 30K+ orders/month capacity",
                  "Pure B2B—your customers remain yours"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
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
                Launch nationwide healthcare services in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Integrate Platform", description: "API integration or console access—choose your deployment mode" },
                { step: "2", title: "Configure Services", description: "Activate diagnostics, pharmacy, consultations based on your product" },
                { step: "3", title: "White-Label Setup", description: "Your branding, your user experience, your customer relationship" },
                { step: "4", title: "Go Live Nationwide", description: "Instant access to 9,000+ pincodes with 30K+ orders capacity" }
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

        {/* Delivery Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Integration & Deployment Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple deployment options for every product architecture
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Mode</th>
                      <th className="p-4 text-left font-heading">Best For</th>
                      <th className="p-4 text-left font-heading">Setup Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        mode: "RESTful APIs",
                        best: "Full programmatic control and custom workflows",
                        setup: "48-hour integration"
                      },
                      {
                        mode: "Console Access",
                        best: "Ops teams managing fulfillment without engineering",
                        setup: "Instant activation"
                      },
                      {
                        mode: "Embeddable Widgets",
                        best: "Quick white-label booking inside your app",
                        setup: "Same-day deployment"
                      },
                      {
                        mode: "Mobile SDKs",
                        best: "Native iOS/Android integration",
                        setup: "1-week integration"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.mode}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.best}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.setup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Healthcare Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch healthcare services across 9,000+ pincodes from metros to Tier-3 cities. Complete coverage for diagnostics, pharmacy, and consultations. 30K+ orders/month capacity with 99.5% uptime SLA.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Diagnostics", "Pharmacy", "Consultations", "Home Care", "Chronic Care", "Specialized Services", "Health Camps", "All Services"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Quality */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Developer Experience</h2>
                  <ul className="space-y-3">
                    {[
                      "RESTful APIs with interactive documentation",
                      "Webhook support for real-time order updates",
                      "SDKs for JavaScript, Python, React Native",
                      "Direct engineering support during rollout"
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
                      "NABH/NABL accredited diagnostic partners",
                      "Licensed pharmacies with registered pharmacists",
                      "MCI/NMC registered doctors for consultations",
                      "Real-time SLA monitoring and auto-escalation"
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
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Scale From Idea to Nationwide</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                  <p className="text-xs text-muted-foreground mt-2">From integration to nationwide launch</p>
                </div>
                <div>
                  <Globe className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9K+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Live</p>
                  <p className="text-xs text-muted-foreground mt-2">Metros to Tier-3 cities</p>
                </div>
                <div>
                  <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                  <p className="text-xs text-muted-foreground mt-2">99.5% uptime capacity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={digitalHealthPlatformsFAQs} />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Healthcare Infrastructure", url: "/solutions/healthcare-infrastructure", description: "Complete healthcare delivery platform" },
                  { title: "API Solutions", url: "/solutions/api-solutions", description: "Developer-first healthcare APIs" },
                  { title: "Coverage Expansion", url: "/solutions/coverage-expansion", description: "Geographic expansion to Tier-2/3 markets" },
                  { title: "Digital Health Scale Blog", url: "/resources/blog/digital-health-scale", description: "How healthtech companies scale nationwide" }
                ].map((link, index) => (
                  <Link key={index} to={link.url} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover group">
                    <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">{link.title}</h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                    <div className="flex items-center text-primary font-medium mt-4">
                      Learn more 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalHealthPlatforms;
