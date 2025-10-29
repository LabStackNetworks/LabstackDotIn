import { Code, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const StartBuilding = () => {
  const quickstartSteps = [
    {
      step: "1",
      title: "Sign up & Get API Keys",
      description: "Create your account and receive sandbox credentials instantly",
      time: "2 min"
    },
    {
      step: "2",
      title: "Integrate APIs",
      description: "Use our RESTful APIs to connect diagnostics, pharmacy, and consults",
      time: "1-2 days"
    },
    {
      step: "3",
      title: "Configure Workflows",
      description: "Set up service areas, pricing, and care journeys via console",
      time: "3-5 days"
    },
    {
      step: "4",
      title: "Go Live",
      description: "Launch with full network access and real-time support",
      time: "14 days avg"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Developer-Friendly APIs",
      description: "Modern RESTful APIs with comprehensive docs and SDKs"
    },
    {
      icon: Zap,
      title: "Instant Sandbox Access",
      description: "Test all features in sandbox before going live"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "HIPAA-ready infrastructure with encryption at rest and in transit"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">START BUILDING</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Launch Healthcare Services <span className="text-gradient">in 14 Days</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Skip 12-18 months of infrastructure building. Integrate once, access nationwide healthcare delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient text-lg py-6 h-auto">
                    Book Technical Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg py-6 h-auto">
                  View API Docs
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="card-gradient p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Quickstart Steps */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                Your Path to <span className="text-gradient">Go-Live</span>
              </h2>

              <div className="space-y-6">
                {quickstartSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start bg-card-gradient p-6 rounded-2xl border border-border/20">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                        <span className="text-sm text-muted-foreground">{step.time}</span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to build? Schedule a technical walkthrough.
                </p>
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartBuilding;
