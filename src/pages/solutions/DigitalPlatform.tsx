import { Smartphone, Activity, FileText, ArrowRight, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import CTAButtons from "@/components/CTAButtons";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema } from "@/lib/structured-data";
import { digitalPlatformFAQs } from "@/lib/faqs/digital-platform-faqs";

const DigitalPlatform = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Digital Platform",
    description: "White-label patient experience platform with structured health data, digital results, and cross-service continuity. No more PDFs.",
    url: "https://labstack.in/solutions/digital-platform"
  });

  const faqSchema = generateFAQSchema(digitalPlatformFAQs);
  const structuredData = [productSchema, faqSchema];

  const capabilities = [
    {
      title: "White-Label Patient Flows",
      description: "Complete patient journeys under your brand with customizable booking, tracking, and results delivery"
    },
    {
      title: "Structured Health Data",
      description: "Digital raw values instead of PDFs. Enable smart reporting, trend charts, and clinical decision support"
    },
    {
      title: "Cross-Service Continuity",
      description: "Seamless handoffs from consultation → diagnostics → pharmacy → follow-up with no data loss"
    },
    {
      title: "Engagement Analytics",
      description: "Patient journey analytics, completion rates, and NPS tracking to optimize experience"
    }
  ];

  const patientJourney = [
    { step: "Book Test", desc: "VIP booking flows with prep instructions" },
    { step: "Sample Collection", desc: "Home visit or center with real-time tracking" },
    { step: "Digital Results", desc: "Raw values with smart trend charts, not PDFs" },
    { step: "Follow-Up", desc: "Auto-scheduled consult if values are flagged" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Digital Platform Solutions"
        description="White-label patient experience platform with structured health data, digital results, and cross-service continuity. No more PDFs."
        keywords="white-label health platform, patient engagement platform, digital health records, structured health data, patient experience platform"
        canonical="https://labstack.in/solutions/digital-platform"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">DIGITAL PLATFORM</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                White-Label <span className="text-gradient">Patient Experiences</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Seamless digital health journeys from tests to consultations to medications. Structured data, not PDFs. Built for engagement and retention.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  See Platform Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Platform Capabilities */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-2xl font-heading font-bold text-center mb-12">Platform Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 card-hover">
                    <Activity className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-heading font-bold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PDFs to Raw Values */}
            <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 text-center mb-20">
              <FileText className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-6">
                From PDFs to <span className="text-gradient">Raw Digital Values</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform legacy reports into structured, actionable health data that powers better care decisions and patient engagement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card/50 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Structured Data</h4>
                  <p className="text-sm text-muted-foreground">Every test result as digital raw value, not scanned PDF</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Smart Trends</h4>
                  <p className="text-sm text-muted-foreground">Auto-generated trend charts showing health progression</p>
                </div>
                <div className="bg-card/50 p-6 rounded-xl">
                  <Activity className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Clinical Insights</h4>
                  <p className="text-sm text-muted-foreground">Flag abnormal values and trigger care pathways</p>
                </div>
              </div>
            </div>

            {/* Patient Journey Example */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Reimagined Patient Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {patientJourney.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < patientJourney.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Proof Metrics */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Platform Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">+25</div>
                  <p className="text-sm text-muted-foreground">NPS Point Improvement</p>
                  <p className="text-xs text-muted-foreground mt-2">With digital flows and structured data</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Report Verification</p>
                  <p className="text-xs text-muted-foreground mt-2">Before delivery to patients</p>
                </div>
                <div>
                  <Smartphone className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">&gt;85</div>
                  <p className="text-sm text-muted-foreground">Patient NPS Score</p>
                  <p className="text-xs text-muted-foreground mt-2">Industry-leading satisfaction</p>
                </div>
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Patient NPS rose by 25 points after introducing Labstack's digital reports and structured data flows."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={digitalPlatformFAQs} />
          </div>
        </section>
      </main>
      
      {/* Related Resources */}
      <RelatedBlogs category="Digital Health" limit={3} />
      
      <Footer />
    </div>
  );
};

export default DigitalPlatform;
