import { MapPin, Clock, Microscope, Pill, Home, ArrowRight, CheckCircle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/structured-data";
import { healthcareInfrastructureFAQs } from "@/lib/faqs/healthcare-infrastructure-faqs";

const HealthcareInfrastructure = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Healthcare Infrastructure Platform",
    description: "Complete healthcare infrastructure platform. Launch diagnostics, consultations, pharmacy, and home care services across 9,000+ pincodes in India.",
    url: "https://labstack.in/solutions/healthcare-infrastructure"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Solutions", url: "https://labstack.in/solutions" },
    { name: "Healthcare Infrastructure", url: "https://labstack.in/solutions/healthcare-infrastructure" }
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Launch Healthcare Infrastructure",
    description: "Launch complete healthcare delivery infrastructure in 14 days",
    steps: [
      { name: "Select Services", text: "Choose from diagnostics, pharmacy, consultations, specialized networks" },
      { name: "Configure Platform", text: "Set pricing, eligibility, service parameters via console or API" },
      { name: "Activate Networks", text: "Instantly access 9,000+ pincode provider networks" },
      { name: "Go Live", text: "Start fulfilling orders with SLA-backed delivery nationwide" }
    ]
  });

  const faqSchema = generateFAQSchema(healthcareInfrastructureFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema, howToSchema];

  const services = [
    {
      icon: Microscope,
      title: "Diagnostics Network",
      coverage: "9,000+ pincodes",
      description: "Pathology, radiology, cardiac, genetic, allergy testing. Home sample collection and 2,600+ centers nationwide.",
      features: ["100% report verification", "Digital raw values", "CSAT-based lab selection", "Phlebo blacklisting"]
    },
    {
      icon: Users,
      title: "Consultations",
      coverage: "Pan-India coverage",
      description: "Tele-consults and in-clinic visits with proprietary SaaS platform. EMR and e-prescription integration built-in.",
      features: ["Premium & mass networks", "No third-party dependency", "All specialties covered", "Unified scheduling"]
    },
    {
      icon: Pill,
      title: "Pharmacy Network",
      coverage: "60-min delivery",
      description: "E-pharmacies, local chains, and dark stores. Fraud prevention with SKU-level controls.",
      features: ["Nationwide delivery", "Prescription verification", "Real-time tracking", "Automated reconciliation"]
    },
    {
      icon: Home,
      title: "Specialized Networks",
      coverage: "Multiple services",
      description: "Ambulance, vision, dental, mental health, physiotherapy, home care activated via one API.",
      features: ["SLA-backed fulfilment", "Quality frameworks", "One integration", "Tier-1 to Tier-3"]
    }
  ];

  const qualityFrameworks = [
    "Pre-analytical quality score framework",
    "Analytical quality with multi-lab validation",
    "Continuous feedback loops and geo-specific blacklisting",
    "Internal report checks before delivery"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Complete healthcare infrastructure platform | LabStack"
        description="Launch diagnostics, consultations, pharmacy, home care nationwide in 14 days. API or console launch across 9,000+ pincodes. 30K+ orders/month capacity."
        keywords="healthcare infrastructure, healthcare delivery network, diagnostics network India, pharmacy network, telemedicine infrastructure, healthcare API"
        canonical="https://labstack.in/solutions/healthcare-infrastructure"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Complete healthcare infrastructure platform to launch diagnostics, pharmacy, consultations, and specialized services nationwide. API or console deployment across 9,000+ pincodes in 14 days."
            keyPoints={[
              "All-in-one platform: diagnostics, pharmacy, consultations, specialized networks",
              "Delivery modes: home collection, center visits, teleconsult, pharmacy delivery",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "14-day average launch time from integration to go-live",
              "30K+ orders/month capacity with 99.5% uptime"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Complete healthcare delivery infrastructure that businesses use to launch diagnostics, pharmacy, consultations, and specialized services nationwide without building ops teams or provider networks.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">HEALTHCARE INFRASTRUCTURE</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Launch Nationwide in <span className="text-gradient">14 Days</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                Skip 12-18 months of network building. One integration for diagnostics, consultations, pharmacy, and home care across 9,000+ pincodes.
              </p>

              <div className="bg-success/10 border border-success/20 rounded-xl p-4 inline-flex items-center space-x-2 mb-8">
                <Clock className="w-5 h-5 text-success" />
                <span className="text-success font-semibold">14 Days vs 12-18 Months</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/start-building">
                  <Button size="lg" variant="outline">
                    Explore Platform
                  </Button>
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card-gradient p-8 rounded-2xl card-hover">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{service.coverage}</p>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Launch complete healthcare infrastructure in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Select Services", description: "Choose diagnostics, pharmacy, consultations, specialized networks" },
                { step: "2", title: "Configure Platform", description: "Set pricing, eligibility, service parameters via console or API" },
                { step: "3", title: "Activate Networks", description: "Instant access to 9,000+ pincode provider networks" },
                { step: "4", title: "Go Live", description: "Start fulfilling orders with SLA-backed delivery nationwide" }
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

        {/* Delivery Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Service Delivery Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple fulfillment options for every healthcare service
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Delivery Mode</th>
                      <th className="p-4 text-left font-heading">Services Available</th>
                      <th className="p-4 text-left font-heading">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        mode: "Home Collection/Delivery",
                        services: "Diagnostics sample collection, pharmacy delivery",
                        coverage: "9,000+ pincodes"
                      },
                      {
                        mode: "Center Visits",
                        services: "Diagnostics, specialist consultations",
                        coverage: "2,600+ centers"
                      },
                      {
                        mode: "Teleconsultation",
                        services: "GP and specialist consults via video/audio",
                        coverage: "Pan-India"
                      },
                      {
                        mode: "Specialized Home Services",
                        services: "Ambulance, physiotherapy, mental health, home care",
                        coverage: "Major cities"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.mode}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.services}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.coverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Healthcare Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch complete healthcare services across 9,000+ pincodes from metros to Tier-3 cities. All services available with consistent quality and SLAs. 30K+ orders/month capacity with 99.5% uptime.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Diagnostics", "Consultations", "Pharmacy", "Specialized Networks", "Home Care", "Health Camps", "Chronic Care", "All Services"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Quality */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Integration Options</h2>
                  <ul className="space-y-3">
                    {[
                      "RESTful APIs for programmatic control of all services",
                      "Console access for ops teams to manage fulfillment",
                      "Embeddable widgets for white-label booking flows",
                      "Real-time webhooks for order status updates"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality Assurance</h2>
                  <ul className="space-y-3">
                    {qualityFrameworks.map((framework, index) => (
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

        {/* Before vs After */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Before vs After Labstack
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                  <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                    <span className="text-destructive mr-2">✗</span>
                    Building Yourself
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">12-18 months</strong> signing contracts with labs, pharmacies, doctors
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">No standard SLAs</strong> or integrations; ops break city by city
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Engineers distracted</strong> building compliance and APIs instead of core product
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">High capex</strong> and hidden operational costs
                    </li>
                  </ul>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-2xl p-8">
                  <h3 className="text-xl font-heading font-bold mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-success" />
                    With Labstack
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">48-hour launch</strong> with infrastructure ready across all services
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">SLA-backed fulfillment</strong> with unified billing and compliance
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">One API • One Console</strong> for your entire ops, billing, and tracking
                    </li>
                    <li className="text-sm text-muted-foreground">
                      <strong className="text-foreground">No capex</strong> - operational costs only, pay-as-you-grow
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Proof Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Infrastructure That Scales
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">30,000+</div>
                  <p className="text-sm text-muted-foreground">Orders/Month</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">API Uptime</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Reports Verified</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Labstack helped us expand coverage into Tier-2 & Tier-3 cities in under a month. Something that would have taken 12-18 months on our own."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={healthcareInfrastructureFAQs} />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Related Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "API Solutions", url: "/solutions/api-solutions", description: "Developer-first healthcare APIs" },
                  { title: "Digital Platform", url: "/solutions/digital-platform", description: "White-label patient experience platform" },
                  { title: "Coverage Expansion", url: "/solutions/coverage-expansion", description: "Geographic expansion to Tier-2/3 markets" },
                  { title: "Digital Health Platforms", url: "/who-we-serve/digital-health-platforms", description: "Solutions for healthtech companies" }
                ].map((link, index) => (
                  <Link key={index} to={link.url} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover group">
                    <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">{link.title}</h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                    <div className="flex items-center text-primary font-medium mt-4">
                      Learn more 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthcareInfrastructure;
