import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageSquare, Settings, Zap } from "lucide-react";

const CustomSolutions = () => {
  const benefits = [
    {
      icon: Settings,
      title: "Tailored Architecture",
      description: "Custom healthcare infrastructure designed specifically for your unique requirements and workflows"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Fast deployment with our experienced team handling the technical complexity for you"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Dedicated support from planning through implementation and ongoing optimization"
    },
    {
      icon: MessageSquare,
      title: "Collaborative Process",
      description: "Work directly with our experts to ensure the solution perfectly fits your needs"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "Share your requirements, challenges, and goals with our solutions team"
    },
    {
      step: "2",
      title: "Custom Proposal",
      description: "Receive a detailed proposal with architecture, timeline, and investment"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Our team builds and deploys your custom solution with your input"
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Go live with ongoing support and optimization as you scale"
    }
  ];

  return (
    <PageTemplate
      title="Custom Healthcare Solutions | Tailored Infrastructure & Integration"
      description="Need a custom healthcare solution? Our team architects and implements tailored healthcare infrastructure, integrations, and platforms designed for your specific needs."
      keywords="custom healthcare solutions, healthcare infrastructure, custom medical platform, healthcare integration services, tailored health tech"
      canonical="https://labstack.in/custom-solutions"
    >
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Build Your <span className="text-gradient">Perfect Healthcare Solution</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When off-the-shelf solutions don't fit, we architect custom healthcare infrastructure 
                tailored to your unique needs, workflows, and vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-gradient w-full sm:w-auto">
                    Schedule Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/book-demo">
                  <Button size="lg" variant="outline" className="btn-outline-gradient w-full sm:w-auto">
                    See Platform Capabilities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need Custom Solutions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                When <span className="text-gradient">Custom Solutions</span> Make Sense
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Complex multi-stakeholder workflows requiring unique integrations",
                  "Regulatory or compliance requirements specific to your region or industry",
                  "Specialized healthcare delivery models not covered by standard platforms",
                  "Large-scale implementations requiring custom architecture",
                  "Legacy system integrations with specific technical requirements",
                  "Unique data models or workflows that need specialized handling"
                ].map((scenario, index) => (
                  <div key={index} className="card-gradient p-6 rounded-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-foreground leading-relaxed">{scenario}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                Why Choose <span className="text-gradient">Custom Development</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="card-gradient p-8 rounded-2xl">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                Our <span className="text-gradient">Collaborative Process</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <div key={index} className="card-gradient p-6 rounded-xl text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="card-gradient p-12 rounded-2xl">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  Ready to Build Your <span className="text-gradient">Custom Solution</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Schedule a discovery call to discuss your requirements. Our team will work with you 
                  to design and implement the perfect healthcare solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="btn-gradient w-full sm:w-auto">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/solutions">
                    <Button size="lg" variant="outline" className="btn-outline-gradient w-full sm:w-auto">
                      View Standard Solutions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTemplate>
  );
};

export default CustomSolutions;