import { Code, Rocket, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";

const APIDocumentationComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="API Documentation Coming Soon - Labstack"
        description="Healthcare API documentation launching soon. Request early access to developer docs, SDKs, and integration guides."
        keywords="healthcare API documentation, API docs, developer documentation, healthcare API"
        canonical="https://labstack.in/resources/api-documentation-coming-soon"
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              {/* Animated Icon */}
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-hero rounded-3xl p-8 border border-border/50">
                  <Code className="w-20 h-20 text-primary mx-auto animate-pulse" />
                  <Sparkles className="w-8 h-8 text-secondary absolute top-2 right-2 animate-bounce" />
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                API Documentation <span className="text-gradient">Coming Soon</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                We're crafting comprehensive developer documentation with interactive examples, SDKs, and quickstart guides. Be among the first to access our healthcare APIs.
              </p>

              {/* Early Access Form */}
              <div className="max-w-md mx-auto mb-12">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-card-gradient rounded-xl border border-border/20 p-6">
                      <h3 className="font-heading font-bold mb-4">Get Early Access</h3>
                      <div className="space-y-3">
                        <Input 
                          type="email" 
                          placeholder="your.email@company.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full"
                        />
                        <Button type="submit" size="lg" className="w-full btn-gradient">
                          Request API Access
                          <Rocket className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="bg-success/10 border border-success/20 rounded-xl p-6">
                    <h3 className="font-heading font-bold text-success mb-2">Request Received!</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll reach out shortly with API documentation access and integration support.
                    </p>
                  </div>
                )}
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50 mb-8">
                <h2 className="text-2xl font-heading font-bold mb-6">What's Coming</h2>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Interactive API reference with live examples",
                    "Official SDKs for JS, Python, PHP, Java",
                    "Quickstart guides for all healthcare services",
                    "Webhook setup and event handling docs",
                    "Sandbox environment with test data",
                    "Video tutorials and code samples"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-card-gradient rounded-2xl border border-border/20 p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-4">
                  Need Immediate Access?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team can provide custom documentation and integration support for urgent projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="btn-gradient">
                      Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/book-demo">
                    <Button size="lg" variant="outline">
                      Book a Demo
                    </Button>
                  </Link>
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

export default APIDocumentationComingSoon;
