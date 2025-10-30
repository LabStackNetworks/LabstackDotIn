import { Building2, TrendingUp, Users, Shield, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HospitalsLabsJoin = () => {
  const benefits = [
    { icon: TrendingUp, title: "Increase Utilization", description: "Access to enterprise clients and aggregators" },
    { icon: Users, title: "Expand Reach", description: "Get discovered by patients across India" },
    { icon: Shield, title: "Quality Standards", description: "Enhanced reputation through certification" },
    { icon: Zap, title: "Operational Efficiency", description: "Streamlined booking and reporting systems" }
  ];

  const outcomes = [
    { metric: "40%+", label: "Revenue Growth", sublabel: "Within first year" },
    { metric: "25%", label: "Higher Margins", sublabel: "vs. Traditional channels" },
    { metric: "Net-15", label: "Payment Terms", sublabel: "Guaranteed settlements" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">FOR HOSPITALS & LABS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Join India's Leading <span className="text-gradient">Healthcare Network</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Partner with Labstack to access enterprise clients, increase utilization, and grow revenue with guaranteed payment terms.
              </p>

              <Link to="/provider/hospitals-labs/apply">
                <Button size="lg" className="btn-gradient">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Join Labstack Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-2xl border border-border/20 text-center card-hover">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">What You Get as a Partner</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Access to pan-India enterprise clients",
                  "Standardized booking and reporting systems",
                  "Quality certification and enhanced reputation",
                  "Marketing support and visibility",
                  "Operational training and onboarding",
                  "Guaranteed payment terms (Net-15)",
                  "Real-time performance dashboards",
                  "Dedicated partner success manager"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-card-gradient rounded-xl border border-border/20">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Partner Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {outcomes.map((outcome, index) => (
                  <div key={index}>
                    <div className="text-4xl font-heading font-bold text-gradient mb-2">{outcome.metric}</div>
                    <p className="text-lg font-medium text-foreground mb-1">{outcome.label}</p>
                    <p className="text-sm text-muted-foreground">{outcome.sublabel}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Partnering with Labstack doubled our enterprise bookings and improved payment cycles significantly."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Ready to grow your healthcare business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 500+ hospitals and labs already partnering with Labstack
              </p>
              <Link to="/provider/hospitals-labs/apply">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalsLabsJoin;
