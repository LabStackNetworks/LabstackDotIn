import { Network, Code, BarChart3, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlatformOverview = () => {
  const platformComponents = [
    {
      icon: Network,
      title: "Provider Network",
      description: "9,000+ pincodes • Diagnostics, consultations, pharmacy, home care",
      features: ["Quality-assured providers", "Real-time availability", "SLA monitoring", "Tier-1 to Tier-3 reach"]
    },
    {
      icon: Code,
      title: "APIs & Integrations",
      description: "RESTful APIs • Webhooks • SDKs • Console",
      features: ["Developer-friendly docs", "Sandbox environment", "99.5% uptime", "14-day avg integration"]
    },
    {
      icon: BarChart3,
      title: "Operations Console",
      description: "Self-serve dashboard for fulfilment and tracking",
      features: ["Order management", "Provider coordination", "Real-time tracking", "Automated workflows"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "ABDM-ready • Data encryption • Audit trails",
      features: ["HIPAA compliant", "SOC 2 ready", "Automated backups", "Role-based access"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">PLATFORM</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                One API. One Console. <span className="text-gradient">One Network.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Complete healthcare infrastructure through a single platform. Launch nationwide in days, not months.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/start-building">
                  <Button size="lg" variant="outline">
                    Start Building
                  </Button>
                </Link>
              </div>
            </div>

            {/* Platform Components */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {platformComponents.map((component, index) => (
                  <div key={index} className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                    <component.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-heading font-bold mb-2">{component.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{component.description}</p>
                    <ul className="space-y-2">
                      {component.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signals */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Built for Scale</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Zap className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">48hrs</div>
                  <p className="text-sm text-muted-foreground">Go-Live Time</p>
                  <p className="text-xs text-muted-foreground mt-2">vs 12-18 months building yourself</p>
                </div>
                <div>
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered</p>
                  <p className="text-xs text-muted-foreground mt-2">Tier-1 to Tier-3 cities</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime</p>
                  <p className="text-xs text-muted-foreground mt-2">Enterprise-grade reliability</p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {["Sign Up", "Integrate", "Go Live", "Scale"].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold">{step}</h3>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8">
                From sandbox to production in days. Our team supports you at every step.
              </p>
              <Link to="/start-building">
                <Button size="lg" className="btn-gradient">
                  Start Building Now
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

export default PlatformOverview;
