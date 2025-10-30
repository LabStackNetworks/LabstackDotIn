import { Building2, TrendingUp, IndianRupee, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { providersFAQs } from "@/lib/faqs/providers-faqs";

const Providers = () => {
  const structuredData = generateFAQSchema(providersFAQs);

  const providerChallenges = [
    "40-50% utilization with fixed costs crushing margins",
    "Can't tap digital/B2B demand without tech platform",
    "Price wars shrink margins further",
    "60-90 day reconciliation cycles",
    "No consistent digital presence"
  ];

  const labstackValue = [
    "Steady B2B demand from insurers, corporates, healthtech",
    "Utilization jumps from 40% → 60-70%",
    "Revenue doubles, margins increase 15-25%",
    "Logistics & reconciliation handled",
    "Payment in 30 days"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Partner Network for Healthcare Providers"
        description="Join India's healthcare network. Fill capacity from 40% to 60-70%. Earn predictably with 30-day payments. Serve B2B demand from insurers and corporates."
        keywords="healthcare provider network, diagnostic lab partnership, pharmacy network, doctor network, healthcare B2B demand"
        canonical="https://labstack.in/who-we-serve/providers"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR PROVIDERS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Fill Capacity. <span className="text-gradient">Earn Predictably</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Join India's healthcare network. Steady B2B demand takes utilization from 40% → 60-70%. 30-day payments.
              </p>

              <Link to="/provider/join-network">
                <Button size="lg" className="btn-gradient">
                  Join the Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Challenges vs Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">Current Reality</h3>
                <ul className="space-y-3">
                  {providerChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-1 flex-shrink-0">✗</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {labstackValue.map((value, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-success mt-1 flex-shrink-0">✓</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Provider Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">60-70%</div>
                  <p className="text-sm text-muted-foreground">Utilization</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2x</div>
                  <p className="text-sm text-muted-foreground">Revenue Growth</p>
                </div>
                <div>
                  <IndianRupee className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">15-25%</div>
                  <p className="text-sm text-muted-foreground">Margin Increase</p>
                </div>
                <div>
                  <Building2 className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">30 days</div>
                  <p className="text-sm text-muted-foreground">Payment Terms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={providersFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Providers;
