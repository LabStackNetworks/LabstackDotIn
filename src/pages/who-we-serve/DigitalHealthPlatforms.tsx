import { Smartphone, TrendingUp, Repeat, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DigitalHealthPlatforms = () => {
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
                Scale Healthcare <span className="text-gradient">Nationwide in Days</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                One API. Nationwide coverage. Launch in 48 hours instead of 12-18 months.
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

            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Platform Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Zap className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">48hrs</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                </div>
                <div>
                  <Repeat className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9K+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "We scaled nationwide in days with Labstack, saving a year of build. Conversions rose 20% once Tier-2/3 opened."
                </p>
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
