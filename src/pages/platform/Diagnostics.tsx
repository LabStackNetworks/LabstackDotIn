import { TestTube, MapPin, CheckCircle, ArrowRight, Shield, Clock, FileCheck, Target, Home, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/structured-data";
import { diagnosticsFAQs } from "@/lib/faqs/diagnostics-faqs";

const Diagnostics = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Diagnostics Network",
    description: "Complete diagnostics network across 9,000+ pincodes. Pathology, radiology, cardiac, genetic testing with quality frameworks built in.",
    url: "https://labstack.in/platform/diagnostics"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Platform", url: "https://labstack.in/platform" },
    { name: "Diagnostics", url: "https://labstack.in/platform/diagnostics" }
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Launch Diagnostics Services",
    description: "Launch nationwide diagnostics services with quality frameworks",
    steps: [
      { name: "Select Tests", text: "Choose from pathology, radiology, cardiac, genetic, allergy tests" },
      { name: "Configure Coverage", text: "Activate home collection or center visits by geography" },
      { name: "Set Quality Rules", text: "Enable report verification, lab selection, quality frameworks" },
      { name: "Go Live", text: "Start fulfilling diagnostic orders with 100% report verification" }
    ]
  });

  const faqSchema = generateFAQSchema(diagnosticsFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema, howToSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Diagnostics Network with Quality Frameworks | LabStack"
        description="Diagnostics network for home pickup, health camps, and center visits including pathology, radiology, cardiac, and genetic tests. Built-in quality frameworks and 100% report verification across 9,000+ pincodes."
        keywords="diagnostics network India, pathology services, radiology network, cardiac tests, genetic testing, home sample collection, health camps diagnostics, quality frameworks healthcare"
        canonical="https://labstack.in/platform/diagnostics"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <Breadcrumbs 
              items={[
                { label: "Platform", href: "/platform-overview" },
                { label: "Diagnostics" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Diagnostics network for home pickup, health camps, and center visits including pathology, radiology, cardiac, and genetic tests. Built-in quality frameworks and 100% report verification for Insurers, TPAs, Brokers, Corporate wellness, InsureTech, and Digital Health platforms."
            keyPoints={[
              "Services: pathology, radiology, cardiac, genetic tests",
              "Delivery modes: home pickup, health camps, center visits",
              "Built-in quality frameworks and 100% report verification",
              "For Insurers, TPAs, Brokers, Corporate wellness, InsureTech, Digital Health",
              "Nationwide coverage across 9,000+ pincodes"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Diagnostics network for home pickup, health camps, and center visits including pathology, radiology, cardiac, and genetic tests. Built-in quality frameworks and 100% report verification for Insurers, TPAs, Brokers, Corporate wellness, InsureTech, and Digital Health platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Diagnostics, <span className="text-gradient">Delivered Nationwide.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Complete diagnostics network with pathology, radiology, cardiac, genetic, and allergy testing. 9,000+ pincodes coverage with quality frameworks built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solutions/coverage-expansion">
                  <Button size="lg" variant="outline">
                    Check Coverage
                  </Button>
                </Link>
              </div>
            </div>

            {/* Problems */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Diagnostics is Broken Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Opaque systems: No visibility into pricing, availability, or turnaround times",
                  "Fragmented providers: Data silos and inconsistent service quality",
                  "Dark providers: Outdated or no technology, no integration",
                  "Poor customer experience: Missed collections, long waits, inaccurate reports"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 font-semibold">
                Result: High complaints, low trust, and poor patient outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Launch diagnostics services in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Select Tests", description: "Choose from pathology, radiology, cardiac, genetic, allergy tests" },
                { step: "2", title: "Configure Coverage", description: "Activate home collection or center visits by geography" },
                { step: "3", title: "Set Quality Rules", description: "Enable report verification, lab selection, quality frameworks" },
                { step: "4", title: "Go Live", description: "Start fulfilling orders with 100% report verification" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Modes - Visual Cards */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Diagnostics Delivery Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple options for sample collection and testing
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-8 rounded-2xl border border-border/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Home Collection</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">9,000+</p>
                  <p className="text-sm text-muted-foreground mb-4">Pincodes Covered</p>
                  <p className="text-xs text-muted-foreground">Phlebotomist visits for sample collection</p>
                </div>
                
                <div className="bg-card p-8 rounded-2xl border border-border/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Center Visits</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">2,600+</p>
                  <p className="text-sm text-muted-foreground mb-4">Centers Nationwide</p>
                  <p className="text-xs text-muted-foreground">Walk-in appointments at centers</p>
                </div>
                
                <div className="bg-card p-8 rounded-2xl border border-border/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Active Partners</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">5,000+</p>
                  <p className="text-sm text-muted-foreground mb-4">Verified Providers</p>
                  <p className="text-xs text-muted-foreground">Quality-assured partner network</p>
                </div>
                
                <div className="bg-card p-8 rounded-2xl border border-border/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-warning" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Health Camps</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">Nationwide</p>
                  <p className="text-sm text-muted-foreground mb-4">Coverage</p>
                  <p className="text-xs text-muted-foreground">On-site corporate screening programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Diagnostics Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch diagnostic services across 9,000+ pincodes from metros to Tier-3 cities. Complete test coverage including pathology, radiology, cardiac, genetic, allergy testing. 100% report verification with digital raw values.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Pathology Tests", "Radiology", "Cardiac Tests", "Genetic Testing", "Allergy Testing", "Microbiome", "Home Collection", "All Tests"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Frameworks */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality Frameworks</h2>
                  <ul className="space-y-3">
                    {[
                      "100% report verification before delivery to patients",
                      "Digital raw values with structured health data",
                      "CSAT-based lab selection and auto-routing",
                      "Phlebo/lab blacklisting by pincode for quality control"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Network Coverage</h2>
                  <ul className="space-y-3">
                    {[
                      "9,000+ pincodes for home sample collection",
                      "2,600+ diagnostic centers for walk-in visits",
                      "NABH/NABL accredited lab partners",
                      "Continuous quality monitoring and feedback loops"
                    ].map((framework, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{framework}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Labstack Advantage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">The Labstack Advantage: Diagnostics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <TestTube className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Largest Test Network</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Pathology, radiology, genetics, cardiac</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Microbiome, food allergy (IgG/IgE)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Widest Coverage</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>9,000+ pincodes (home sample collection)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>2,600+ pincodes (center visits)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Optimised Experience</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span> Single console across the entire network for booking & tracking</span>
                    </li>
                  </ul>  
                </div>
              </div>
            </div>

            {/* Quality Section */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-6">Quality isn't optional. It's built in.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Labstack actively enforces diagnostic quality through automated frameworks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">100% report checks before delivery</h4>
                    <p className="text-sm text-muted-foreground">Every report verified for accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Digital raw values</h4>
                    <p className="text-sm text-muted-foreground">Smart reporting with trend charts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phlebo/lab blacklisting by pincode</h4>
                    <p className="text-sm text-muted-foreground">Continuous quality monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">CSAT-based lab auto-selection</h4>
                    <p className="text-sm text-muted-foreground">Best providers prioritized</p>
                  </div>
                </div>
              </div>
              {/* <Button variant="outline" size="lg">
                Download Quality Whitepaper
              </Button> */}
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground italic mb-4">
                  "Labstack helped us expand diagnostics coverage into Tier-2 and Tier-3 cities in under a month. Something that would have taken 12-18 months on our own."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={diagnosticsFAQs} title="Diagnostics FAQ" />
          </div>
        </section>

      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Digital Health" limit={3} />
      
      <Footer />
    </div>
  );
};

export default Diagnostics;
