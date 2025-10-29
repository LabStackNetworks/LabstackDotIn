import { Puzzle, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CustomSolutions = () => {
  const useCases = [
    {
      icon: Puzzle,
      title: "Specialized Care Programs",
      description: "Diabetes management, cardiac care, cancer support with tailored provider networks and SOPs",
      examples: ["Disease-specific protocols", "Specialized provider vetting", "Custom data pipelines"]
    },
    {
      icon: Users,
      title: "Enterprise Health Platforms",
      description: "White-labeled infrastructure for insurers, corporates, and large healthcare networks",
      examples: ["Custom branding", "Dedicated capacity", "SLA customization"]
    },
    {
      icon: Target,
      title: "Geographic Expansion",
      description: "Rapid market entry with local partnerships and regulatory compliance support",
      examples: ["Tier 2/3 network setup", "Local ops support", "Regulatory navigation"]
    }
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
                <span className="text-secondary font-medium text-sm">CUSTOM SOLUTIONS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Healthcare Infrastructure <span className="text-gradient">Tailored for You</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Complex requirements? We build custom solutions while you focus on what makes you unique.
              </p>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="card-gradient p-8 rounded-2xl card-hover">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process Overview */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-6 text-center">
                How Custom Builds Work
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {["Discovery", "Design", "Build", "Scale"].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <p className="font-medium">{phase}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Typical custom projects go live in 6-10 weeks
                </p>
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Discuss Your Needs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                Have a Unique Use Case?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our team works with healthcare innovators to solve complex delivery challenges. Let's explore what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Schedule Strategy Call
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomSolutions;
