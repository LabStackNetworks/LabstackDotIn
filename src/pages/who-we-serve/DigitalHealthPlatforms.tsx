import { Smartphone, Globe, Zap, ArrowRight, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { digitalHealthPlatformsFAQs } from "@/lib/faqs/digital-health-platforms-faqs";

const DigitalHealthPlatforms = () => {
  const structuredData = generateFAQSchema(digitalHealthPlatformsFAQs);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Platform Solutions for Digital Health Startups"
        description="Scale nationwide in 14 days with one API. 9,000+ pincodes, 30K+ orders/month capacity, 99.5% uptime. Launch diagnostics, pharmacy, and consultations instantly."
        keywords="digital health platform, healthtech infrastructure, healthcare API integration, telemedicine platform, health startup solutions"
        canonical="https://labstack.in/who-we-serve/digital-health-platforms"
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
                <span className="text-primary font-medium text-sm">FOR DIGITAL HEALTH PLATFORMS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Nationwide. <span className="text-gradient">Zero Build Time.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Launch in 14 days. One API. 9K+ pincodes. 30K+ orders/month capacity.
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

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h3 className="text-2xl font-heading font-bold text-center mb-12">Scale From Idea to Nationwide</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                </div>
                <div>
                  <Globe className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9K+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Live</p>
                </div>
                <div>
                  <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Speed Without Building
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "48-Hour Integration",
                    badge: "14-day launch",
                    desc: "One API: diagnostics, pharmacy, consults, chronic care.",
                    color: "success"
                  },
                  {
                    title: "Nationwide Day One",
                    badge: "9K+ pincodes",
                    desc: "30K+ orders/month capacity with 99.5% uptime.",
                    color: "primary"
                  },
                  {
                    title: "White-Label Brand",
                    badge: "Pure B2B",
                    desc: "Your users see your brand—we stay invisible.",
                    color: "secondary"
                  },
                  {
                    title: "Custom Health Products",
                    badge: "Flexible",
                    desc: "Create packages, subscriptions, care programs.",
                    color: "success"
                  },
                  {
                    title: "Operations Autopilot",
                    badge: "Zero ops team",
                    desc: "Provider coordination, quality, SLA, reconciliation automated.",
                    color: "primary"
                  },
                  {
                    title: "Growth Tools",
                    badge: "Built-in",
                    desc: "Revenue optimization, cross-sell, retention analytics.",
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
            <FAQ items={digitalHealthPlatformsFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalHealthPlatforms;
