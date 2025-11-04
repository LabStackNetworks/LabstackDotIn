import PageTemplate from "@/components/PageTemplate";
import TLDR from "@/components/design-system/TLDR";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Building2, Code, Rocket } from "lucide-react";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

const CustomSolutions = () => {
  const structuredData = [
    generateServiceSchema({
      name: "Custom Healthcare Solutions",
      description: "Tailored healthcare infrastructure, integrations, and platforms designed for specific business needs.",
      url: "https://labstack.in/custom-solutions"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://labstack.in" },
      { name: "Solutions", url: "https://labstack.in/solutions" },
      { name: "Custom Solutions", url: "https://labstack.in/custom-solutions" }
    ])
  ];

  return (
    <PageTemplate
      title="Custom Healthcare Solutions | Tailored Infrastructure & Integration"
      description="Need a custom healthcare solution? Our team architects and implements tailored healthcare infrastructure, integrations, and platforms designed for your specific needs."
      keywords="custom healthcare solutions, healthcare infrastructure, custom medical platform, healthcare integration services, tailored health tech"
      canonical="https://labstack.in/custom-solutions"
      structuredData={structuredData}
    >
      {/* Hidden TL;DR for AI crawlers */}
      <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
        <TLDR 
          summary="Custom healthcare infrastructure and integration solutions tailored to your specific needs. From complex multi-stakeholder workflows to specialized delivery models and legacy system integrations."
          keyPoints={[
            "Discovery: Share requirements and goals",
            "Proposal: Architecture, timeline, and investment plan",
            "Implementation: Build with your continuous input",
            "Launch: Go live with ongoing support and maintenance"
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Build Your <span className="text-gradient">Perfect Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              When off-the-shelf doesn't fit, we architect custom healthcare infrastructure tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Schedule Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/book-demo">
                <Button size="lg" variant="outline">
                  See Platform First
                </Button>
              </Link>
            </div>
          </div>

          {/* When Custom Makes Sense */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              When <span className="text-gradient">Custom</span> Makes Sense
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Complex multi-stakeholder workflows",
                "Region-specific regulatory requirements",
                "Specialized delivery models",
                "Large-scale custom architecture",
                "Legacy system integrations",
                "Unique data models or workflows"
              ].map((scenario, i) => (
                <div key={i} className="flex items-start space-x-3 p-5 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{scenario}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Our <span className="text-gradient">Process</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Building2, num: "1", title: "Discovery", desc: "Share requirements & goals" },
                { icon: Code, num: "2", title: "Proposal", desc: "Architecture, timeline, investment" },
                { icon: Zap, num: "3", title: "Implementation", desc: "Build with your input" },
                { icon: Rocket, num: "4", title: "Launch", desc: "Go live with ongoing support" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                      {step.num}
                    </div>
                    <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block w-full h-0.5 bg-border mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Build Your <span className="text-gradient">Custom Solution</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a discovery call. We'll design and implement the perfect healthcare solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline">
                  View Standard Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default CustomSolutions;
