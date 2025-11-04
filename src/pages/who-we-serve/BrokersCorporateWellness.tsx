import { TrendingUp, Target, CheckCircle, ArrowRight, Zap, Shield, Home, Video, Stethoscope, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/structured-data";
import { brokersCorporateWellnessFAQs } from "@/lib/faqs/brokers-corporate-wellness-faqs";

const BrokersCorporateWellness = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Brokers & Corporate Wellness", url: "https://labstack.in/who-we-serve/brokers-corporate-wellness" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "OPD Benefits Platform for Insurance Brokers",
    description: "White-label OPD benefits platform for insurance brokers and corporate wellness programs. Nationwide diagnostics, pharmacy, consultations delivery.",
    url: "https://labstack.in/who-we-serve/brokers-corporate-wellness"
  });

  const faqSchema = generateFAQSchema(brokersCorporateWellnessFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="OPD benefits for insurance brokers | LabStack"
        description="OPD benefits platform with home diagnostics, pharmacy delivery, teleconsults for brokers and corporate wellness programs. API or console launch across 9,000+ pincodes."
        keywords="insurance broker solutions, OPD insurance India, corporate wellness programs, policy differentiation, broker technology platform"
        canonical="https://labstack.in/who-we-serve/brokers-corporate-wellness"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Breadcrumbs */}
        <section className="py-4 bg-background border-b border-border/50">
          <div className="container mx-auto px-6">
            <Breadcrumbs 
              items={[
                { label: "Who We Serve", href: "/who-we-serve" },
                { label: "Brokers & Corporate Wellness" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="White-label OPD benefits platform for insurance brokers and corporate wellness programs. Launch diagnostics, pharmacy, consultations nationwide. Grow ARPU ~15% via prescription monetization."
            keyPoints={[
              "White-label OPD benefits for policy differentiation",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Nationwide coverage across 9,000+ pincodes from metros to Tier-3",
              "Prescription monetization to grow ARPU by ~15%",
              "Pure B2B platform where your clients remain yours"
            ]}
          />
        </div>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR BROKERS & CORPORATE WELLNESS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Turn Policies Into <span className="text-gradient">Revenue Machines.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Grow ARPU 15%. Differentiate with embedded OPD benefits. Prescription monetization across 9,000+ pincodes.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Expand Your Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Problem → Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Challenge</h3>
                {[
                  "Policies look same with OPD under monetized",
                  "Execution breaks outside metros",
                  "Commission capped at ₹500-2K",
                  "Multi-city vendor reconciliation pain"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">With Labstack</h3>
                {[
                  "OPD bundles differentiate policies",
                  "Nationwide fulfillment Tier-1 to Tier-3",
                  "Prescription monetization to grow ARPU ~15%",
                  "Pure B2B model with your brand, your revenue"
                ].map((solution, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-success/5 border border-success/10 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-10 h-10 text-success mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">~15%</div>
                  <p className="text-sm text-muted-foreground">ARPU Uplift</p>
                </div>
                <div>
                  <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                </div>
                <div>
                  <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Pure B2B</div>
                  <p className="text-sm text-muted-foreground">No Competition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">OPD Services Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Diagnostics", "Consultations", "Pharmacy", "Wellness Programs", "Health Camps", "Chronic Care"].map((service, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20 text-center">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Speed Without Setup */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Speed Without Setup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Plug-and-Play Services", badge: "Days to launch", desc: "All OPD services available instantly nationwide.", color: "success" },
                  { title: "White-Label Platform", badge: "Your brand", desc: "Complete customization under your branding.", color: "primary" },
                  { title: "Revenue Monetization", badge: "~15% uplift", desc: "Earn from prescription and service fulfillment.", color: "success" }
                ].map((feature, i) => (
                  <div key={i} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading font-bold text-sm">{feature.title}</h3>
                      <span className={`text-xs bg-${feature.color}/10 text-${feature.color} px-2 py-1 rounded-full whitespace-nowrap`}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Launch white-label OPD benefits in four steps</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Configure Benefits", description: "Build OPD bundles: diagnostics, consultations, pharmacy benefits" },
                { step: "2", title: "White-Label Setup", description: "Your branding, your client portal, your customer relationship" },
                { step: "3", title: "Activate Nationwide", description: "Instant access to 9,000+ pincodes fulfillment network" },
                { step: "4", title: "Monetize Rx", description: "Enable prescription fulfillment, grow ARPU through pharmacy delivery" }
              ].map((item, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">{item.step}</span>
                  </div>
                  <h4 className="font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Modes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-12 text-center">Delivery Modes & Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Home, mode: "Home Collection", color: "primary" },
                  { icon: Video, mode: "Teleconsultation", color: "success" },
                  { icon: Stethoscope, mode: "Center Visit", color: "secondary" },
                  { icon: Users, mode: "Health Camps", color: "warning" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                      <Icon className={`w-10 h-10 text-${item.color} mx-auto mb-3`} />
                      <h4 className="font-heading font-bold">{item.mode}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Availability */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Availability</h2>
              <p className="text-lg text-muted-foreground mb-8">Full healthcare service coverage across India</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { service: "Diagnostics", coverage: "9,000+ pincodes" },
                  { service: "Center Visit", coverage: "2,600+ pincodes" },
                  { service: "Pharmacy", coverage: "15,000+ pincodes" },
                  { service: "Consultation", coverage: "Nationwide" },
                  { service: "Home Care", coverage: "5,000+ pincodes" },
                  { service: "Emergency", coverage: "Metros" },
                  { service: "Health Camps", coverage: "Nationwide" },
                  { service: "All Services", coverage: "Pan-India" }
                ].map((item, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.service}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Quality */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Integration Options</h2>
                  <ul className="space-y-3">
                    {[
                      "API integration for programmatic benefit delivery",
                      "Console access for ops teams to manage members",
                      "Custom member portals with your branding",
                      "Real-time dashboards for utilization and costs"
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
                    {[
                      "NABH/NABL accredited diagnostic partners",
                      "Registered pharmacists for all medicine orders",
                      "Verified doctors with valid MCI/NMC registration",
                      "Real-time SLA monitoring and escalation"
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

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={brokersCorporateWellnessFAQs} />
          </div>
        </section>
      </main>

      <RelatedBlogs category="Brokers" limit={3} />
      <Footer />
    </div>
  );
};

export default BrokersCorporateWellness;
