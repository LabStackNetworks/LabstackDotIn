import { Smartphone, Activity, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DigitalPlatform = () => {
  const capabilities = [
    "White-labeled patient journeys",
    "Structured health data (not PDFs)",
    "Cross-service continuity",
    "Real-time updates & notifications",
    "NPS >85 patient satisfaction"
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
                <span className="text-secondary font-medium text-sm">DIGITAL PLATFORM</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Patient Experiences <span className="text-gradient">That Scale</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                White-label digital care journeys with structured data and seamless service transitions.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  See Platform Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Capabilities */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-heading font-bold text-center mb-8">Platform Capabilities</h2>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-xl">
                    <Activity className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof Point */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 text-center">
              <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">From PDFs to Raw Digital Values</h3>
              <p className="text-lg text-muted-foreground">
                Transform legacy reports into structured, actionable health data that powers better care.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalPlatform;
