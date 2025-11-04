import { Ambulance, Eye, Smile, Brain, Activity, Syringe, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import TLDR from "@/components/design-system/TLDR";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { specializedNetworksFAQs } from "@/lib/faqs/specialized-networks-faqs";

const SpecializedNetworks = () => {
  const structuredData = [
    generateProductSchema({
      name: "Specialized Healthcare Networks",
      description: "Ambulance, vision, dental, mental health, physiotherapy, home care. One API for specialized healthcare services.",
      url: "https://labstack.in/platform/specialized-networks"
    }),
    generateFAQSchema(specializedNetworksFAQs)
  ];
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
                Ambulance, vision, dental, mental health, physiotherapy, and home care. All via one API and console. Specialized networks you don't have to build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

              {/* TLDR Summary - Hidden from users, visible only for SEO/GEO */}
              <div className="sr-only">
                <TLDR 
                  summary="Access ambulance, vision, dental, mental health, physiotherapy, and home care through one API. Launch specialized services in days without vendor sprawl or operational complexity."
                  keyPoints={[
                    "8+ specialized service types via single platform",
                    "Standard workflows across all services",
                    "Nationwide coverage with quality SLAs",
                    "Consolidated billing and reconciliation"
                  ]}
                />
              </div>
            </div>

            {/* Definition Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold mb-6">What are Specialized Healthcare Networks?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Labstack Specialized Networks provides instant access to ambulance services, vision care, dental clinics, mental health professionals, physiotherapy centers, home care providers, and more—all through a single API and unified console. Instead of managing multiple vendors with different contracts, billing systems, and quality standards, you get standardized workflows and consolidated operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a health insurer expanding member benefits, a digital health platform adding new services, or a disease management company building comprehensive care pathways, our specialized networks eliminate vendor sprawl and accelerate time-to-market.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">How Specialized Networks Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Service Selection</h3>
                  <p className="text-muted-foreground">
                    Patient or care coordinator selects specialized service (ambulance, dental, physio, etc.). System checks eligibility, coverage rules, and finds available providers based on location and service type.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Booking & Fulfilment</h3>
                  <p className="text-muted-foreground">
                    Provider confirms appointment or service. Patient receives booking details with standard tracking across all service types. Real-time updates via SMS/push notifications.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Quality & Settlement</h3>
                  <p className="text-muted-foreground">
                    Post-service feedback and ratings. Automated reconciliation across all specialized providers. Consolidated invoicing with transparent pricing and audit trails.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Delivery Modes */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Specialized Service Delivery Modes</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Different specialized services with unified booking, tracking, and quality standards
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-heading">Service Type</th>
                      <th className="text-left p-4 font-heading">Response Time</th>
                      <th className="text-left p-4 font-heading">Delivery Mode</th>
                      <th className="text-left p-4 font-heading">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Ambulance Services</td>
                      <td className="p-4 text-muted-foreground">15-30 minutes</td>
                      <td className="p-4 text-muted-foreground">Emergency & non-emergency transport</td>
                      <td className="p-4 text-muted-foreground">100+ cities</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Mental Health</td>
                      <td className="p-4 text-muted-foreground">Same-day or scheduled</td>
                      <td className="p-4 text-muted-foreground">Video, audio, or in-person therapy</td>
                      <td className="p-4 text-muted-foreground">Pan-India</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Physiotherapy</td>
                      <td className="p-4 text-muted-foreground">24-48 hours</td>
                      <td className="p-4 text-muted-foreground">Home visit or clinic-based</td>
                      <td className="p-4 text-muted-foreground">50+ cities</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Vision & Dental</td>
                      <td className="p-4 text-muted-foreground">Scheduled appointments</td>
                      <td className="p-4 text-muted-foreground">Clinic-based services</td>
                      <td className="p-4 text-muted-foreground">200+ locations</td>
                    </tr>
                    <tr>
                      <td className="p-4">Home Care Services</td>
                      <td className="p-4 text-muted-foreground">12-24 hours</td>
                      <td className="p-4 text-muted-foreground">Skilled nursing, injections, post-op care</td>
                      <td className="p-4 text-muted-foreground">75+ cities</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Nationwide Availability */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Specialized Care Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized networks span metro cities to Tier-2 locations with consistent quality standards. Each service type follows the same booking workflows, SLA monitoring, and settlement processes—no matter which geography or provider.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <h4 className="font-heading font-bold mb-2">Metro Coverage</h4>
                  <p className="text-sm text-muted-foreground mb-3">Full service availability across all 8 specialized types</p>
                  <p className="text-xs text-muted-foreground">Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <h4 className="font-heading font-bold mb-2">Tier-2 Cities</h4>
                  <p className="text-sm text-muted-foreground mb-3">Core services with expanding network partners</p>
                  <p className="text-xs text-muted-foreground">50+ cities including Jaipur, Lucknow, Indore, Coimbatore</p>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                  <h4 className="font-heading font-bold mb-2">Virtual Services</h4>
                  <p className="text-sm text-muted-foreground mb-3">Mental health and consultations available pan-India</p>
                  <p className="text-xs text-muted-foreground">Teleconsults, video therapy, remote monitoring</p>
                </div>
              </div>
            </div>

            {/* Integration & Quality */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Integration & Quality Assurance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Integration Options</h3>
                  <div className="space-y-3">
                    {[
                      "REST API for all specialized services",
                      "Webhooks for real-time status updates",
                      "White-label booking widgets",
                      "Console for operations management",
                      "Cross-service handoffs and referrals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Quality Controls</h3>
                  <div className="space-y-3">
                    {[
                      "Partner verification and licensing",
                      "SLA monitoring per service type",
                      "Feedback and rating systems",
                      "Automated escalation protocols",
                      "Compliance and audit logging"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                  "Vendor sprawl: different contracts, billing, and portals for each service type",
                  "No common SLAs: ambulances operate differently than physiotherapists",
                  "Coverage gaps: uneven quality and availability across cities",
                  "Reconciliation chaos: manual effort to close financial loops"
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
                    One platform to tap ambulance fleets, dental clinics, physio networks, mental health providers. All verified and onboarded.
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
                    Bookings, status, exceptions. Everything in one Console.
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
                  "We stood up ambulance and home-care services across multiple cities in weeks. Everything runs through the same dashboards and SLAs we use for labs."
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <FAQ items={specializedNetworksFAQs} title="Specialized Networks FAQ" />
            </div>

            {/* Related Resources */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Explore Related Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/platform/consultations" className="bg-card-gradient p-6 rounded-2xl border border-border/20 card-hover">
                  <h3 className="text-lg font-heading font-bold mb-2">Doctor Consultations</h3>
                  <p className="text-sm text-muted-foreground mb-3">Connect specialized services to primary care providers</p>
                  <span className="text-primary text-sm font-semibold">Learn more →</span>
                </Link>
                <Link to="/platform/diagnostics" className="bg-card-gradient p-6 rounded-2xl border border-border/20 card-hover">
                  <h3 className="text-lg font-heading font-bold mb-2">Diagnostic Services</h3>
                  <p className="text-sm text-muted-foreground mb-3">Bundle labs with physio, dental, and vision services</p>
                  <span className="text-primary text-sm font-semibold">Learn more →</span>
                </Link>
                <Link to="/solutions/healthcare-infrastructure" className="bg-card-gradient p-6 rounded-2xl border border-border/20 card-hover">
                  <h3 className="text-lg font-heading font-bold mb-2">Healthcare Infrastructure</h3>
                  <p className="text-sm text-muted-foreground mb-3">See how specialized networks fit into complete care delivery</p>
                  <span className="text-primary text-sm font-semibold">Learn more →</span>
                </Link>
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
