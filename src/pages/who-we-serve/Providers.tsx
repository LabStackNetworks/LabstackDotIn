import { Building2, TrendingUp, IndianRupee, Zap, ArrowRight, CheckCircle, Users, Shield, Home, Stethoscope, Video, Truck } from "lucide-react";
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
import { providersFAQs } from "@/lib/faqs/providers-faqs";

const Providers = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "Providers", url: "https://labstack.in/who-we-serve/providers" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Provider Network Partnership",
    description: "B2B healthcare demand for providers including doctors, labs, pharmacies, hospitals. Increase patient volumes, access enterprise clients.",
    url: "https://labstack.in/who-we-serve/providers"
  });

  const faqSchema = generateFAQSchema(providersFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  const providerChallenges = [
    "40-50% utilization with fixed costs crushing margins",
    "Can't tap digital/B2B demand without tech platform",
    "Price wars shrink margins further",
    "60-90 day reconciliation cycles",
    "No consistent digital presence"
  ];

  const labstackValue = [
    "Steady B2B demand from insurers, corporates, healthtech",
    "Utilization jumps from 40% → 60-70%",
    "Revenue doubles, margins increase 15-25%",
    "Logistics & reconciliation handled",
    "Payment in 30 days"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare provider network partnership | LabStack"
        description="Provider network for doctors, labs, pharmacies, hospitals. Increase patient volumes, reduce acquisition costs, access enterprise clients nationwide."
        keywords="healthcare provider network India, diagnostic lab partnership, pharmacy network, doctor network, B2B healthcare demand"
        canonical="https://labstack.in/who-we-serve/providers"
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
                { label: "Providers" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="B2B healthcare provider network for doctors, labs, pharmacies, hospitals. Access guaranteed patient volumes from insurers, corporates, digital health platforms. Increase utilization from 40% to 60-70%."
            keyPoints={[
              "B2B demand from insurers, corporates, digital health platforms",
              "Delivery modes: home collection, center visits, teleconsult",
              "Nationwide network across 9,000+ pincodes",
              "Utilization boost from 40% to 60-70%",
              "30-day payment terms vs 60-90 day cycles"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Healthcare provider network that connects doctors, labs, pharmacies, and hospitals with guaranteed B2B patient volumes from insurers, enterprises, and digital health platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR PROVIDERS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Fill Your Calendar. <span className="text-gradient">Zero Marketing Spend.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Guaranteed patient volumes from insurers, enterprises, digital health platforms. Predictable revenue. No customer acquisition costs.
              </p>

              <Link to="/provider/join-network">
                <Button size="lg" className="btn-gradient">
                  Join the Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Challenges vs Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">Current Reality</h3>
                <ul className="space-y-3">
                  {providerChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-1 flex-shrink-0">✗</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {labstackValue.map((value, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-success mt-1 flex-shrink-0">✓</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Join the network and start receiving patients in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply to Network", description: "Submit credentials, compliance docs, service capacity" },
                { step: "2", title: "Verification", description: "Quality team verifies licenses, accreditations, infrastructure" },
                { step: "3", title: "Go Live", description: "Get onboarded to platform, start receiving patient bookings" },
                { step: "4", title: "Grow Revenue", description: "Access steady B2B demand, monthly reconciliation, 30-day payments" }
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

        {/* Service Delivery Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Service Delivery Options</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple fulfillment modes to maximize your capacity
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Home,
                    mode: "Home Collection/Visits",
                    provider: "Phlebotomists, nurses, allied health staff",
                    impact: "30-40% utilization boost",
                    color: "primary"
                  },
                  {
                    icon: Stethoscope,
                    mode: "Center Visits",
                    provider: "Labs, clinics, diagnostic centers",
                    impact: "20-30% utilization boost",
                    color: "success"
                  },
                  {
                    icon: Video,
                    mode: "Teleconsultation",
                    provider: "Doctors (GP and specialists)",
                    impact: "50-60% capacity increase",
                    color: "secondary"
                  },
                  {
                    icon: Truck,
                    mode: "Pharmacy Delivery",
                    provider: "Retail pharmacies",
                    impact: "25-35% revenue uplift",
                    color: "warning"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20">
                      <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 text-${item.color}`} />
                      </div>
                      <h4 className="font-heading font-bold mb-2">{item.mode}</h4>
                      <p className="text-xs text-muted-foreground mb-3">{item.provider}</p>
                      <div className="pt-3 border-t border-border/20">
                        <p className="text-xs font-semibold text-success">{item.impact}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Nationwide Availability */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">Nationwide Provider Network</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 2,600+ providers across 9,000+ pincodes. Access B2B demand from metros to Tier-3 cities. Steady patient flow, predictable revenue, zero marketing costs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Doctors", "Diagnostic Labs", "Pharmacies", "Hospitals", "Home Care Staff", "Nutritionists", "Allied Health", "All Providers"].map((type, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="text-sm font-medium">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features & Quality */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Platform Benefits</h2>
                  <ul className="space-y-3">
                    {[
                      "Digital presence without tech investment",
                      "Real-time booking management and patient scheduling",
                      "Automated logistics and reconciliation",
                      "30-day payment terms vs 60-90 day industry standard"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Quality Standards</h2>
                  <ul className="space-y-3">
                    {[
                      "Valid licenses and accreditations (NABH/NABL/MCI/NMC)",
                      "Compliance training and ongoing quality audits",
                      "CSAT-based performance monitoring",
                      "Quality improvement programs and peer benchmarking"
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

        {/* Impact Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Provider Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">60-70%</div>
                  <p className="text-sm text-muted-foreground">Utilization</p>
                  <p className="text-xs text-muted-foreground mt-2">From 40% baseline</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">2x</div>
                  <p className="text-sm text-muted-foreground">Revenue Growth</p>
                  <p className="text-xs text-muted-foreground mt-2">Via B2B demand</p>
                </div>
                <div>
                  <IndianRupee className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">15-25%</div>
                  <p className="text-sm text-muted-foreground">Margin Increase</p>
                  <p className="text-xs text-muted-foreground mt-2">Higher utilization</p>
                </div>
                <div>
                  <Building2 className="w-8 h-8 text-warning mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">30 days</div>
                  <p className="text-sm text-muted-foreground">Payment Terms</p>
                  <p className="text-xs text-muted-foreground mt-2">Vs 60-90 day cycles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={providersFAQs} />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Join the Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Doctors - Join Network", url: "/provider/doctors-join", description: "Access steady patient flow via teleconsult and clinic visits" },
                  { title: "Labs & Hospitals - Join", url: "/provider/hospitals-labs-join", description: "Increase diagnostics and consultation volumes" },
                  { title: "Nutritionists & Health Coaches", url: "/provider/nutritionists-health-coaches", description: "Partner for corporate wellness and chronic care" },
                  { title: "Provider Network Blog", url: "/resources/blog/providers-network", description: "How providers grow revenue with B2B demand" }
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

      {/* Related Resources */}
      <RelatedBlogs category="Providers" limit={3} />

      <Footer />
    </div>
  );
};

export default Providers;
