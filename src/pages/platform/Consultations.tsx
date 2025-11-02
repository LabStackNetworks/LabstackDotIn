import { Video, Users, FileText, ArrowRight, CheckCircle, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import FAQ from "@/components/FAQ";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { consultationsFAQs } from "@/lib/faqs/consultations-faqs";

const Consultations = () => {
  const structuredData = [
    generateProductSchema({
      name: "Labstack Consultations Platform",
      description: "Pan-India doctor network with proprietary teleconsultation SaaS, EMR, and e-prescriptions. Launch online and offline consultations instantly.",
      url: "https://labstack.in/platform/consultations"
    }),
    generateFAQSchema(consultationsFAQs)
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Consultations Platform"
        description="Pan-India doctor network with proprietary teleconsultation SaaS, EMR, and e-prescriptions. Launch online and offline consultations instantly."
        keywords="telemedicine platform, doctor consultation network, teleconsultation software, EMR system, e-prescription platform, online doctor consultation"
        canonical="https://labstack.in/platform/consultations"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
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
              
              {/* TLDR Summary - Hidden from users, visible only for SEO/GEO */}
              <div className="sr-only">
                <TLDR 
                  summary="Launch teleconsultations in 14 days with 2,000+ verified doctors, proprietary video platform, and integrated EMR. No third-party dependencies."
                  keyPoints={[
                    "Pan-India coverage across all specialties",
                    "White-label video consultation platform",
                    "DISHA-compliant e-prescriptions",
                    "EMR integration and automation"
                  ]}
                />
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

            {/* Labstack Advantage */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">The Labstack Advantage: Consultations</h2>
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
              <div className="text-center mt-8">
                <Button size="lg" className="btn-gradient">
                  Get a Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Experience Layer */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">A Seamless Consultation Journey</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-6">Doctor-Side Features</h3>
                  <ul className="space-y-4">
                    {[
                      "Integrated electronic medical records",
                      "Digital prescription writing",
                      "Access to lab & pharmacy orders from within console",
                      "Unified scheduling and reminders"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold mb-6">Patient-Side Features</h3>
                  <ul className="space-y-4">
                    {[
                      "Tele-consult with prep instructions & secure login",
                      "In-clinic appointment confirmations",
                      "Cashless workflows supported",
                      "Reports and prescriptions accessible online"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
                <h3 className="text-2xl font-heading font-bold mb-6">Operational Strengths</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "SLA-backed consultation fulfilment",
                    "Real-time status updates & escalation handling",
                    "Unified console for bookings across multiple doctors & cities",
                    "Feedback collection & CSAT-based performance tracking"
                  ].map((strength, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{strength}</p>
                    </div>
                  ))}
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

            {/* FAQ Section */}
            <div className="mb-20">
              <FAQ items={consultationsFAQs} title="Consultations FAQ" />
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Offer doctor consultations anywhere in India, instantly.
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
      
      {/* Related Resources */}
      <RelatedBlogs category="Digital Health" limit={3} />
      
      <Footer />
    </div>
  );
};

export default Consultations;
