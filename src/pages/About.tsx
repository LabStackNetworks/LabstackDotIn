import { Target, Users, Zap, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Making quality healthcare accessible across every pincode in India"
    },
    {
      icon: Users,
      title: "Patient-First",
      description: "Every decision optimized for better patient outcomes and experience"
    },
    {
      icon: Zap,
      title: "Speed & Scale",
      description: "Building infrastructure that helps healthcare reach millions instantly"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous provider vetting and continuous quality monitoring"
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
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">ABOUT LABSTACK</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Building the <span className="text-gradient">Healthcare OS</span> for India
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Labstack is India's healthcare infrastructure platform. We give companies instant access to nationwide diagnostics, pharmacy, consultations, and home care through one API.
              </p>
            </div>

            {/* Story Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-card-gradient p-8 lg:p-12 rounded-2xl border border-border/20">
                <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-6">The Problem We're Solving</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Healthcare companies spend 12-18 months building provider networks, negotiating contracts, and setting up operations city by city. Engineers get pulled into compliance and logistics instead of building core product. Growth stalls because infrastructure can't keep up.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Meanwhile, providers—labs, clinics, doctors—struggle with low utilization (40-50%) and unpredictable demand. They want more volume but lack digital access to B2B buyers.
                </p>
                <p className="text-foreground font-semibold leading-relaxed">
                  Labstack connects both sides. Companies get instant nationwide infrastructure. Providers get steady B2B demand. Patients get faster, better care.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">What Drives Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-card-gradient p-8 rounded-xl border border-border/20 card-hover">
                    <value.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-muted-foreground">Pincodes Covered</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">30K+</div>
                  <p className="text-muted-foreground">Orders Per Month</p>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-muted-foreground">API Uptime</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                Join the Healthcare Infrastructure Revolution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're building healthcare products or delivering care, we'd love to work with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
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

export default About;
