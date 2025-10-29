import { Code, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const APISolutions = () => {
  const apiFeatures = [
    "RESTful healthcare APIs with webhooks",
    "Prescription to fulfillment automation",
    "Real-time order tracking & updates",
    "Structured health data (no PDF parsing)",
    "Enterprise-grade security & uptime"
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
                <span className="text-primary font-medium text-sm">API SOLUTIONS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Developer-First <span className="text-gradient">Healthcare APIs</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Modern APIs to integrate diagnostics, pharmacy, and consults. Grow ARPU through prescription monetization.
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
            <div className="max-w-3xl mx-auto mb-16">
              <div className="space-y-4">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-xl">
                    <Code className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Impact */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">15%</div>
                  <p className="text-sm text-muted-foreground">ARPU Growth via Prescription Monetization</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime SLA</p>
                </div>
                <div>
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Average Integration Time</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APISolutions;
