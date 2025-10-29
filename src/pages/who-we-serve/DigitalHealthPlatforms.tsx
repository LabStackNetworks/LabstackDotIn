import { Smartphone, TrendingUp, Repeat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DigitalHealthPlatforms = () => {
  const currentIssues = [
    "Single-service models bleed (pharmacy 10-15%, doctor booking ₹50-150)",
    "Can't scale to tier-2/3, gaps push users away",
    "'Connected care' is marketing - prescriptions → patient chases lab → report never returns",
    "High CAC, low repeat, stagnant revenue"
  ];

  const withLabstack = [
    "Go full-stack in 14 days via single API",
    "True connected care: doctor prescribes → sample collected → report flows back → follow-up booked",
    "Revenue per customer 2-3x (e.g., pharmacy ₹800 + diagnostics ₹400 + consults ₹180 = ₹1,380)",
    "Churn reduced by 30-50%"
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
                From Single Service to <span className="text-gradient">Full-Stack Health</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                One API. Nationwide coverage. True connected care that finally closes the loop.
              </p>

              <Link to="/start-building">
                <Button size="lg" className="btn-gradient">
                  Explore Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem vs Solution */}
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

            {/* Revenue Growth */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Revenue Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2-3x</div>
                  <p className="text-sm text-muted-foreground">Revenue Per Customer (12 months)</p>
                </div>
                <div>
                  <Repeat className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">-30-50%</div>
                  <p className="text-sm text-muted-foreground">Churn Reduction</p>
                </div>
                <div>
                  <Smartphone className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&gt;3</div>
                  <p className="text-sm text-muted-foreground">LTV/CAC Ratio</p>
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

export default DigitalHealthPlatforms;
