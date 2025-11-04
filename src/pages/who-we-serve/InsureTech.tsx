import { TrendingUp, Target, CheckCircle, ArrowRight, Zap, Shield, Home, Video, Stethoscope, Users, Truck, HeartPulse, TestTube, Pill } from "lucide-react";
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
import { insuretechFAQs } from "@/lib/faqs/insuretech-faqs";

const InsureTech = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Who We Serve", url: "https://labstack.in/who-we-serve" },
    { name: "InsureTech", url: "https://labstack.in/who-we-serve/insuretech" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Healthcare Infrastructure for InsureTech Companies",
    description: "White-label healthcare delivery platform for digital insurance companies. Launch diagnostics, consultations, pharmacy services nationwide in 14 days.",
    url: "https://labstack.in/who-we-serve/insuretech"
  });

  const faqSchema = generateFAQSchema(insuretechFAQs);
  const structuredData = [faqSchema, breadcrumbSchema, serviceSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Infrastructure for InsureTech | Labstack"
        description="Launch healthcare benefits for digital insurance platforms. White-label diagnostics, teleconsults, pharmacy delivery. Scale nationwide in 14 days with zero operational setup."
        keywords="InsureTech healthcare, digital insurance OPD, health benefits platform, insurance technology, healthcare delivery API, white-label health services"
        canonical="https://labstack.in/who-we-serve/insuretech"
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
                { label: "InsureTech" }
              ]}
            />
          </div>
        </section>

        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Healthcare delivery infrastructure for InsureTech companies. Launch diagnostics, consultations, pharmacy services nationwide. Turn healthcare benefits into revenue engine with 14-day deployment."
            keyPoints={[
              "Launch healthcare services in 14 days across 9,000+ pincodes",
              "White-label platform with your brand, your member relationships",
              "Delivery modes: home collection, teleconsult, center visits, pharmacy delivery",
              "Incremental revenue streams from service fulfillment",
              "Pure B2B model with zero channel conflict with your insurance business"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Healthcare delivery platform that InsureTech companies use to launch OPD benefits, drive member engagement, and create new revenue streams beyond insurance premiums.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">FOR INSURETECH COMPANIES</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Make Healthcare Benefits a <span className="text-gradient">Revenue Engine.</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Launch faster, scale wider, earn from the complete healthcare wallet.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Launch Healthcare Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* InsureTech's Next Chapter */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-8">Your Next Growth Chapter</h2>
              <p className="text-lg text-center text-muted-foreground mb-12">
                You already own the member relationship. Now unlock the parts of healthcare that drive real value: preventive care, diagnostics, imaging, and ongoing programs.
              </p>
            </div>

            {/* Current Blockers → What Changes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">Current Blockers</h3>
                {[
                  "Low utilization equals lost outcomes and revenue",
                  "Fragmented delivery damages member trust",
                  "Operational friction delays market launches",
                  "Support costs rise with service uncertainty"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold mb-6">What Changes with Labstack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Member Value</h4>
                    {[
                      "Health services that just work",
                      "Home-first access across cities",
                      "Predictable timelines",
                      "Consistent branded experience"
                    ].map((value, i) => (
                      <div key={i} className="flex items-start space-x-2 p-3 bg-success/5 border border-success/10 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wide">Business Value</h4>
                    {[
                      "Incremental revenue streams",
                      "Faster launches (≈14 days)",
                      "Higher renewal and NPS",
                      "Own the healthcare wallet"
                    ].map((value, i) => (
                      <div key={i} className="flex items-start space-x-2 p-3 bg-secondary/5 border border-secondary/10 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4 p-4 bg-accent/30 rounded-lg border border-border/20">
                  You stay the brand and the marketplace. We power the delivery behind the scenes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities You Can Activate */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Complete Service Coverage Nationwide</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Full healthcare services available across 9,000+ pincodes from Day 1
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <TestTube className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Diagnostics</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Home collection and center visits. SLA routing with fasting optimization.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    More completed checkups
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <HeartPulse className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-heading font-bold mb-2">Radiology</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    AERB certified MRI, CT, USG, X-ray. Plug into claims and chronic pathways.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Higher attach per member
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Users className="w-10 h-10 text-warning mb-4" />
                  <h4 className="font-heading font-bold mb-2">Workforce Health Programs</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Food safety compliance, enterprise wellness, chronic care cohorts.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    B2B2C revenue expansion
                  </div>
                </div>

                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <Stethoscope className="w-10 h-10 text-success mb-4" />
                  <h4 className="font-heading font-bold mb-2">Health Camps</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Employer campuses and distributed worksites. Digital reporting included.
                  </p>
                  <div className="flex items-center text-xs text-success">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Revenue from every service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Modes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Scale Without Operational Drag</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple delivery modes for every member need
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: Home,
                    mode: "Home Collection",
                    services: "Diagnostics, pharmacy delivery, sample collection",
                    color: "primary"
                  },
                  {
                    icon: Video,
                    mode: "Teleconsultation",
                    services: "24/7 GP, specialist video/audio consults",
                    color: "success"
                  },
                  {
                    icon: Stethoscope,
                    mode: "Center Visit",
                    services: "Diagnostics, radiology, in-person specialist care",
                    color: "secondary"
                  },
                  {
                    icon: Users,
                    mode: "Health Camps",
                    services: "Employer worksites, community screenings",
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
                      <p className="text-xs text-muted-foreground">{item.services}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-hero rounded-2xl p-8 border border-border/20">
                <h3 className="font-heading font-bold mb-6 text-center">Platform Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Single API and console for all services",
                    "Home, center, and camp delivery across 9,000+ pincodes",
                    "White-label notifications and member documents",
                    "Real-time status tracking reduces support volume",
                    "Data and consent workflows aligned to insurance claims",
                    "Pure B2B model. Zero channel conflict. You control economics."
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Success Looks Like */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">What Success Looks Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">98%</div>
                  <p className="text-sm text-muted-foreground">Reports delivered on time (24 to 48 hour TAT)</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">&lt;2%</div>
                  <p className="text-sm text-muted-foreground">Sample rejection rate (pre-collection SOPs)</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 days</div>
                  <p className="text-sm text-muted-foreground">Average time to launch in new cities</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Member renewals improve with visible health value",
                  "Revenue grows from services members already need",
                  "Healthcare utilization becomes predictable and monetizable"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card-gradient border border-border/20 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Example Impact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">Example Impact</h3>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <p className="text-muted-foreground mb-4">
                    A leading InsureTech expanded preventive checkups for a 5K-member enterprise across 5 cities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold text-gradient mb-1">37% → 71%</div>
                      <p className="text-xs text-muted-foreground">Completion rate in 30 days</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold text-gradient mb-1">↑ RPL</div>
                      <p className="text-xs text-muted-foreground">Revenue per covered life</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold text-gradient mb-1">Early</div>
                      <p className="text-xs text-muted-foreground">Renewal secured</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Home first routing transformed utilization and member satisfaction.
                  </p>
                </div>
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
                      "API integration for programmatic benefit delivery",
                      "Console access for ops teams to manage members",
                      "Custom member portals with your branding",
                      "Real-time dashboards for utilization and costs",
                      "White-label at every touchpoint. We remain invisible"
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
                      "AERB certified radiology centers",
                      "Registered pharmacists for all medicine orders",
                      "Verified doctors with valid NMC registration",
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={insuretechFAQs} />
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-gradient-hero border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Launch Healthcare Services with Labstack
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Turn healthcare benefits into your competitive advantage and revenue engine
              </p>
              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Related Resources */}
      <RelatedBlogs category="Insurers" limit={3} />

      <Footer />
    </div>
  );
};

export default InsureTech;
