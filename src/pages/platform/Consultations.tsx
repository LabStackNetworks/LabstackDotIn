import { Video, Users, FileText, ArrowRight, CheckCircle, Stethoscope, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import TLDR from "@/components/design-system/TLDR";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/structured-data";
import { consultationsFAQs } from "@/lib/faqs/consultations-faqs";

const Consultations = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Consultations Platform",
    description: "Pan-India doctor network with proprietary teleconsultation SaaS, EMR, and e-prescriptions. Launch online and offline consultations instantly.",
    url: "https://labstack.in/platform/consultations"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Platform", url: "https://labstack.in/platform" },
    { name: "Consultations", url: "https://labstack.in/platform/consultations" }
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Launch Consultation Services",
    description: "Launch teleconsultation and in-clinic consultation services nationwide",
    steps: [
      { name: "Select Doctor Networks", text: "Choose from premium or mass doctor networks across specialties" },
      { name: "Configure Platform", text: "Set up teleconsult SaaS, EMR, e-prescription workflows" },
      { name: "White-Label Setup", text: "Brand the consultation experience with your identity" },
      { name: "Go Live Nationwide", text: "Start consultations across India with SLA-backed delivery" }
    ]
  });

  const faqSchema = generateFAQSchema(consultationsFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema, howToSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Teleconsultation platform with EMR & e-prescriptions | LabStack"
        description="Pan-India doctor network with proprietary teleconsultation SaaS, EMR, e-prescriptions. API or console launch. Premium and mass networks available nationwide."
        keywords="telemedicine platform, doctor consultation network, teleconsultation software, EMR system, e-prescription platform, online doctor consultation"
        canonical="https://labstack.in/platform/consultations"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Pan-India teleconsultation platform with proprietary video SaaS, EMR, and e-prescriptions. Premium and mass doctor networks across all specialties. No third-party dependencies."
            keyPoints={[
              "Pan-India doctor network across all specialties",
              "Delivery modes: teleconsult (video/audio), in-clinic visits",
              "Proprietary video platform—no Zoom/Meet dependency",
              "Integrated EMR and DISHA-compliant e-prescriptions",
              "White-label consultation platform with your branding"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                Pan-India teleconsultation platform that healthcare businesses use to launch online and offline consultation services with proprietary video SaaS, integrated EMR, and e-prescriptions.
              </p>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Consultations <span className="text-gradient">Without Complexity.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Pan-India doctor network with proprietary teleconsultation SaaS, EMR, and e-prescriptions. Launch online and offline consultations instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Explore Doctors Network
                </Button>
              </div>
            </div>

            {/* Problems */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Consultations Are Broken Today</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Fragmented doctor networks: hard to find, onboard, and scale",
                  "No standard workflows: inconsistent tele-consults and in-person journeys",
                  "Third-party dependency: relying on external video software without control",
                  "Low integration: prescriptions, EMR, and pharmacy workflows don't sync"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-destructive/20">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 font-semibold">
                Result: Slow launches, poor patient experiences, and lost opportunities for revenue.
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
                Launch consultation services in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Select Networks", description: "Choose premium or mass doctor networks across specialties" },
                { step: "2", title: "Configure Platform", description: "Set up teleconsult SaaS, EMR, e-prescription workflows" },
                { step: "3", title: "White-Label Setup", description: "Brand consultation experience with your identity" },
                { step: "4", title: "Go Live", description: "Start consultations nationwide with SLA-backed delivery" }
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
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Consultation Delivery Modes</h2>
              <p className="text-center text-muted-foreground mb-12">
                Multiple consultation options for every patient need
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Mode</th>
                      <th className="p-4 text-left font-heading">Experience</th>
                      <th className="p-4 text-left font-heading">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        mode: "Video Teleconsult",
                        experience: "Proprietary video platform with EMR and e-prescription",
                        coverage: "Pan-India"
                      },
                      {
                        mode: "Audio Teleconsult",
                        experience: "Phone/WhatsApp consult with digital prescription",
                        coverage: "Pan-India"
                      },
                      {
                        mode: "In-Clinic Visit",
                        experience: "Book appointment, visit clinic with EMR integration",
                        coverage: "Major cities"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.mode}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.experience}</td>
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
              <h2 className="text-3xl font-heading font-bold mb-6">Pan-India Doctor Network</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Launch consultation services across India with premium and mass doctor networks. All specialties covered from GPs to super-specialists. Proprietary teleconsult platform with integrated EMR and e-prescriptions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["General Physicians", "Specialists", "Super-Specialists", "Teleconsult", "In-Clinic Visits", "EMR Integration", "E-Prescriptions", "All Services"].map((service, index) => (
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
                  <h2 className="text-3xl font-heading font-bold mb-6">Platform Features</h2>
                  <ul className="space-y-3">
                    {[
                      "Proprietary video platform—no third-party dependency",
                      "Integrated EMR with patient history and records",
                      "DISHA-compliant e-prescription generation",
                      "Seamless pharmacy integration for prescription fulfillment"
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
                      "MCI/NMC registered doctors with valid licenses",
                      "SLA-backed consultation fulfillment",
                      "Real-time status updates and escalation handling",
                      "CSAT-based doctor performance tracking"
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
              <h2 className="text-3xl font-heading font-bold text-center mb-12">The Labstack Advantage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Pan-India Doctor Network</h3>
                  <p className="text-muted-foreground mb-4">Premium and mass networks for every use case</p>
                  <p className="text-sm text-muted-foreground">All specialities covered: From GPs to super-specialists, across Tier-1 to Tier-3 cities</p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Video className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Teleconsultation SaaS</h3>
                  <p className="text-muted-foreground mb-4">Proprietary video platform</p>
                  <p className="text-sm text-muted-foreground">No dependency on Zoom/Meet. Complete control of the experience</p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Integrated Workflows</h3>
                  <p className="text-muted-foreground mb-4">EMR + e-prescriptions built-in</p>
                  <p className="text-sm text-muted-foreground">Syncing with pharmacy & diagnostics seamlessly</p>
                </div>

                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                  <Stethoscope className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-4">Custom APIs</h3>
                  <p className="text-muted-foreground mb-4">Control the full user workflow</p>
                  <p className="text-sm text-muted-foreground">via integration with your systems</p>
                </div>
              </div>
            </div>

            {/* Proof */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="bg-card-gradient p-8 rounded-2xl border border-border/20">
                <p className="text-lg text-muted-foreground italic">
                  "With Labstack's consultation network, we enabled both tele-consults and in-clinic visits nationwide within weeks. The SaaS stack gave us complete control of workflows with no external dependency."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <FAQ items={consultationsFAQs} title="Consultations FAQ" />
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Healthcare Infrastructure", url: "/solutions/healthcare-infrastructure", description: "Complete healthcare delivery platform" },
                  { title: "Diagnostics Network", url: "/platform/diagnostics", description: "9,000+ pincode diagnostics coverage" },
                  { title: "Pharmacy Network", url: "/platform/pharmacy", description: "60-min medicine delivery nationwide" },
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

export default Consultations;
