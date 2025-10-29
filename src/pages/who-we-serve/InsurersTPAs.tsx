import { Shield, DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const InsurersTPAs = () => {
  const problems = [
    "OPD bleeds money due to fraud & abuse (15-20% losses)",
    "₹200-400 processing cost on ₹500-2,000 claims",
    "PPMC delays kill sales (5-10 days = 8-12% conversion loss/day)",
    "No preventive care infrastructure"
  ];

  const solutions = [
    "Cashless OPD across 9,000+ pincodes with real-time fraud detection",
    "PPMC completed in <48 hours",
    "Processing cost reduced to <₹100",
    "Preventive programs with data for underwriting"
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
                <span className="text-primary font-medium text-sm">FOR INSURERS & TPAs</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Turn OPD from Cost Center to <span className="text-gradient">Revenue Engine</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Cashless OPD, instant PPMC, fraud prevention, and preventive care that drives profitable growth.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problems & Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-destructive" />
                  What's Breaking
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-1">✗</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-success" />
                  Labstack Fix
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-success mt-1">✓</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Target Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&lt;5%</div>
                  <p className="text-sm text-muted-foreground">OPD Fraud Rate</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&lt;48hrs</div>
                  <p className="text-sm text-muted-foreground">PPMC Turnaround</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&gt;75%</div>
                  <p className="text-sm text-muted-foreground">Policy Conversion Rate</p>
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

export default InsurersTPAs;
