import { TrendingUp, Repeat, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BrokersAggregators = () => {
  const challenges = [
    "Commission capped at ₹500-2,000 per policy, then nothing",
    "Rising CAC squeezes margins",
    "No revenue from care journey (PPMC, OPD, preventive)",
    "Insurers building direct channels"
  ];

  const outcomes = [
    "Turn ₹1,500 commission into ₹3,000+ recurring revenue",
    "PPMC, OPD, preventive, emergency services",
    "Full-stack health platform under your brand",
    "Revenue per customer 2-3x in 12 months"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR BROKERS & AGGREGATORS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Own the Full <span className="text-gradient">Health Wallet</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Expand beyond insurance commissions. Add recurring healthcare revenue streams.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Explore Revenue Model
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">Current Challenge</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-destructive mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-success mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Revenue Per Customer</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold mb-2">₹50k</div>
                  <p className="text-xs text-muted-foreground">Insurance Commission</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold mb-2">₹22k</div>
                  <p className="text-xs text-muted-foreground">OPD Services</p>
                </div>
                <div>
                  <Repeat className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-2xl font-heading font-bold mb-2">₹35k</div>
                  <p className="text-xs text-muted-foreground">Preventive Care</p>
                </div>
                <div className="bg-primary/10 rounded-xl p-4">
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">₹1.07L</div>
                  <p className="text-xs text-muted-foreground font-medium">Total Annual Revenue</p>
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

export default BrokersAggregators;
