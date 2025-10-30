import { Smartphone, TrendingUp, Repeat, ArrowRight, CheckCircle, Zap } from "lucide-react";
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

  const currentIssues = [
    "12-18 months lost signing contracts with labs, pharmacies, doctors",
    "No standard SLAs or integrations; ops break city by city",
    "Engineers pulled into compliance and APIs instead of growth",
    "Investors pressing for nationwide coverage yesterday"
  ];

  const withLabstack = [
    "48-hour launch — infra ready across diagnostics, pharmacy, consults",
    "One API • One Console • One Network for your entire ops",
    "Nationwide coverage: 9,000+ pincodes, 30,000+ orders/month capacity",
    "Pure B2B model — your customers remain yours, no competition"
  ];

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
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR DIGITAL HEALTH PLATFORMS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Nationwide Healthcare. <span className="text-gradient">Zero Build Time.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch in 14 days with plug-and-play healthcare infrastructure. One API for diagnostics, consults, pharmacy—no vendor contracts, no ops headcount.
              </p>

              <Link to="/start-building">
                <Button size="lg" className="btn-gradient">
                  Explore Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">What's Breaking</h3>
                <ul className="space-y-3">
                  {currentIssues.map((issue, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground text-sm">
                      <span className="text-destructive mt-1 flex-shrink-0">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {withLabstack.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground text-sm">
                      <span className="text-success mt-1 flex-shrink-0">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technology Platform with Business Impact */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Speed Without Building: Scale From Idea to Nationwide in 14 Days
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Launch with plug-and-play infrastructure in 48 hours. Cover 9,000+ pincodes with 30K+ orders/month capacity and 99.5% uptime—without hiring ops teams or signing vendor contracts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">48-Hour Integration</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">14-day launch</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">One API for diagnostics, pharmacy, consults, chronic care. Pre-built SDKs, webhooks, and documentation. Launch nationwide in days, not 12-18 months.</p>
                  <p className="text-xs text-success font-medium">Impact: Go from idea to live in 14 days vs 12-18 months</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Nationwide from Day One</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">9K+ pincodes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Launch across 9,000+ pincodes instantly. 30K+ orders/month capacity with 99.5% uptime. No city-by-city vendor contracts or regional breakdowns.</p>
                  <p className="text-xs text-primary font-medium">Impact: Meet investor expectations for nationwide coverage</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">White-Label Your Brand</h3>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Pure B2B</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Customize booking flows, care journeys, and notifications across your app and web. Your users see your brand—we stay invisible.</p>
                  <p className="text-xs text-secondary font-medium">Impact: Your customers remain yours, no B2C competition</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Build Custom Health Products</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Flexible</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Create packages, subscriptions, care programs—diabetes care, women's health, preventive health. Configure services, pricing, and protocols.</p>
                  <p className="text-xs text-success font-medium">Impact: Launch differentiated health products without ops complexity</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Operations on Autopilot</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Zero ops team</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Provider coordination, quality control, SLA management, escalations, reconciliation—fully automated. Engineers focus on product, not healthcare ops.</p>
                  <p className="text-xs text-primary font-medium">Impact: Free engineering from compliance and vendor management</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold">Growth & Monetization Tools</h3>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Built-in</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Revenue optimization, cross-sell opportunities, engagement funnels, retention analytics. Grow profitably with data-driven insights.</p>
                  <p className="text-xs text-success font-medium">Impact: Scale revenue without scaling ops headcount</p>
                </div>
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
