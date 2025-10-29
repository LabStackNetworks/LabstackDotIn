import { Code, Heart, Zap, Users, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Help Build the <span className="text-gradient">Rails for Healthcare</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Join a team of builders, clinicians, and operators obsessed with making healthcare infrastructure invisible so innovation can thrive.
              </p>
            </div>

            {/* Why Labstack */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Labstack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Massive Impact</h3>
                  <p className="text-muted-foreground">
                    Your work enables healthcare for millions. Every API call, every SLA improvement, every quality check — it all matters.
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Code className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Hard Problems</h3>
                  <p className="text-muted-foreground">
                    Healthcare infrastructure is complex. You'll solve real challenges at the intersection of tech, operations, and healthcare delivery.
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Great Team</h3>
                  <p className="text-muted-foreground">
                    Work with healthcare veterans, product builders, and engineers who care deeply about getting healthcare right.
                  </p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Mission-Driven</h3>
                  <p className="text-muted-foreground">
                    We're not building a "cool app." We're building infrastructure that makes healthcare accessible across all of India.
                  </p>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">We're Looking For</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Builders, clinicians, and operators with a simple obsession: make infra invisible
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-2">Engineering & AI</h3>
                  <p className="text-muted-foreground mb-4">
                    Reliability, security, and developer experience at scale. Build APIs and systems that healthcare companies trust.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Backend Engineers (Node.js, Python, Go)</li>
                    <li>• Frontend Engineers (React, TypeScript)</li>
                    <li>• DevOps/SRE Engineers</li>
                    <li>• ML/AI Engineers</li>
                  </ul>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-2">Healthcare & Clinical</h3>
                  <p className="text-muted-foreground mb-4">
                    Clinical quality, compliance, and protocols. Ensure every interaction meets healthcare standards.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clinical Quality Managers</li>
                    <li>• Healthcare Compliance Specialists</li>
                    <li>• Medical Advisors</li>
                  </ul>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-2">Network & Operations</h3>
                  <p className="text-muted-foreground mb-4">
                    Provider success, coverage expansion, and SLA enforcement. Build and maintain the healthcare network.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Network Expansion Managers</li>
                    <li>• Operations Managers</li>
                    <li>• Provider Success Managers</li>
                  </ul>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-2">Product & Design</h3>
                  <p className="text-muted-foreground mb-4">
                    B2B infrastructure products that developers and ops teams love. Design systems that just work.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Product Managers</li>
                    <li>• Product Designers</li>
                    <li>• Technical Writers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center bg-card-gradient p-12 rounded-3xl border border-border/20">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Build Healthcare Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Send your resume and a note about why you want to join Labstack.
              </p>
              <a href="mailto:careers@labstack.in">
                <Button size="lg" className="btn-gradient">
                  Email us at careers@labstack.in
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                Based in Bangalore, India. Remote-friendly for exceptional talent.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
