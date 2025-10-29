import { Ambulance, Eye, Smile, Brain, Activity, Syringe, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema } from "@/lib/structured-data";

const SpecializedNetworks = () => {
  const structuredData = generateProductSchema({
    name: "Specialized Healthcare Networks",
    description: "Ambulance, vision, dental, mental health, physiotherapy, home care. One API for specialized healthcare services.",
    url: "https://labstack.in/platform/specialized-networks"
  });
  const services = [
    { icon: Ambulance, name: "Ambulance Services", description: "Emergency and non-emergency transport" },
    { icon: Eye, name: "Vision Care", description: "Eye tests, glasses, and treatments" },
    { icon: Smile, name: "Dental Care", description: "Consultations and procedures" },
    { icon: Brain, name: "Mental Health", description: "Therapy and counseling services" },
    { icon: Activity, name: "Physiotherapy", description: "Rehabilitation and wellness" },
    { icon: Syringe, name: "Injection at Home", description: "Skilled nursing services" },
    { icon: Activity, name: "Audiometry", description: "Hearing tests and care" },
    { icon: Heart, name: "Home Care", description: "Post-op care and elderly support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Specialized Healthcare Networks"
        description="Ambulance, vision, dental, mental health, physiotherapy, home care. One API for specialized healthcare services."
        keywords="specialized healthcare networks, ambulance services, mental health network, dental care network, home healthcare services"
        canonical="https://labstack.in/platform/specialized-networks"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Switch On <span className="text-gradient">Specialised Care.</span> Instantly.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Ambulance, vision, dental, mental health, physiotherapy, and home care — all via one API and console. Specialized networks you don't have to build.
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
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">All Specialized Services. One Platform.</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Expand your service offerings without the complexity of managing multiple vendors
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-2xl border border-border/20 text-center card-hover">
                    <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-bold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Complexity */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                The Complexity You're Avoiding
              </h2>
              <p className="text-center text-muted-foreground mb-8 text-lg">
                When you try to add specialized services yourself, you face:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Vendor sprawl — different contracts, billing, and portals for each service type",
                  "No common SLAs — ambulances operate differently than physiotherapists",
                  "Coverage gaps — uneven quality and availability across cities",
                  "Reconciliation chaos — manual effort to close financial loops"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Labstack Does */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                What Labstack Does for You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Network aggregation</h3>
                  <p className="text-muted-foreground mb-4">
                    One platform to tap ambulance fleets, dental clinics, physio networks, mental health providers — all verified and onboarded.
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Standard workflows</h3>
                  <p className="text-muted-foreground mb-4">
                    Booking, tracking, escalations, and cancellations work the same way across all services.
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Quality &#x26; SLAs</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time monitoring, feedback loops, and partner ratings ensure service reliability.
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Reconciliation &#x26; billing</h3>
                  <p className="text-muted-foreground mb-4">
                    Consolidated invoices, automated settlements, transparent rates.
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Security by design</h3>
                  <p className="text-muted-foreground mb-4">
                    ABDM-ready workflows, access controls, full logs.
                  </p>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-4">Single view of ops</h3>
                  <p className="text-muted-foreground mb-4">
                    Bookings, status, exceptions — everything in one Console.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Fits */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                How It Fits Into Your Product
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">API-first</h4>
                    <p className="text-sm text-muted-foreground">
                      Create, track, and complete specialised orders programmatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Embeddable widgets</h4>
                    <p className="text-sm text-muted-foreground">
                      White-label booking & results inside your app
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Console for teams</h4>
                    <p className="text-sm text-muted-foreground">
                      Ops can manage fulfilment without engineering
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Cross-service handoffs</h4>
                    <p className="text-sm text-muted-foreground">
                      Auto-route from consult → test → pharmacy → physio with no swivel-chair work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className="max-w-5xl mx-auto mb-20 bg-card-gradient rounded-3xl p-8 lg:p-12 border border-border/20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Outcomes You Can Bank On
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Launch new lines in days (no vendor sprawl)",
                  "Expand into Tier-2 & Tier-3 without building networks manually",
                  "Lift NPS and reduce complaints with standardised service delivery",
                  "Unlock new revenue through bundled care pathways"
                ].map((outcome, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-gradient-hero p-8 rounded-2xl border border-border/50">
                <p className="text-lg text-muted-foreground italic">
                  "We stood up ambulance and home-care services across multiple cities in weeks — and everything runs through the same dashboards and SLAs we use for labs."
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Add specialised services without adding complexity.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Talk to Sales
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

export default SpecializedNetworks;
