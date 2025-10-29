import { MapPin, Clock, Microscope, Pill, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HealthcareInfrastructure = () => {
  const services = [
    {
      icon: Microscope,
      title: "Diagnostics Network",
      coverage: "9,000+ pincodes",
      description: "Home sample collection and 2,600+ centers for pathology and radiology"
    },
    {
      icon: Pill,
      title: "Pharmacy Network",
      coverage: "Nationwide delivery",
      description: "Medicine delivery with verification and real-time tracking"
    },
    {
      icon: Home,
      title: "Home Care Services",
      coverage: "All major cities",
      description: "Nursing, physiotherapy, and chronic care management at home"
    }
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
                <span className="text-primary font-medium text-sm">HEALTHCARE INFRASTRUCTURE</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Complete Healthcare Network <span className="text-gradient">in 14 Days</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Skip 12-18 months of network building. One integration for nationwide healthcare delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card-gradient p-8 rounded-2xl card-hover">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{service.coverage}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Why Healthcare Teams Choose Labstack
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">14-Day Go-Live</h3>
                    <p className="text-sm text-muted-foreground">Launch nationwide vs 12-18 months building yourself</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Pan-India Coverage</h3>
                    <p className="text-sm text-muted-foreground">9,000+ pincodes from metros to tier-3 cities</p>
                  </div>
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

export default HealthcareInfrastructure;
