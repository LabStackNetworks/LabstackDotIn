import { Globe, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CoverageExpansion = () => {
  const expansionBenefits = [
    "Instant access to tier-2/3 markets",
    "Quality-verified local providers",
    "No upfront capex or ops hiring",
    "Consistent experience across geographies",
    "20% conversion boost with wider coverage"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">COVERAGE EXPANSION</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Expand from Metros to <span className="text-gradient">Tier-3 Instantly</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Unlock untapped markets without building local operations. 9,000+ pincodes ready to serve.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Explore Coverage Map
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Benefits */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="space-y-4">
                {expansionBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-xl">
                    <Globe className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Stats */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered Nationwide</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2,600+</div>
                  <p className="text-sm text-muted-foreground">Service Centers Across India</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">20%</div>
                  <p className="text-sm text-muted-foreground">Conversion Boost with Geographic Expansion</p>
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

export default CoverageExpansion;
