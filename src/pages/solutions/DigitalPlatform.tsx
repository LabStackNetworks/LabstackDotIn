import { Smartphone, Activity, FileText, ArrowRight, TrendingUp, Users, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Link } from "react-router-dom";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/structured-data";
import { digitalPlatformFAQs } from "@/lib/faqs/digital-platform-faqs";

const DigitalPlatform = () => {
  const productSchema = generateProductSchema({
    name: "Labstack Digital Platform",
    description: "White-label patient experience platform with structured health data, digital results, and cross-service continuity. No more PDFs.",
    url: "https://labstack.in/solutions/digital-platform"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://labstack.in" },
    { name: "Solutions", url: "https://labstack.in/solutions" },
    { name: "Digital Platform", url: "https://labstack.in/solutions/digital-platform" }
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Launch White-Label Patient Experience Platform",
    description: "Launch digital patient experience with structured health data",
    steps: [
      { name: "Configure Branding", text: "Set up white-label branding, colors, logos for patient portal" },
      { name: "Activate Services", text: "Enable diagnostics, consultations, pharmacy with digital flows" },
      { name: "Customize Journeys", text: "Configure booking, tracking, results delivery workflows" },
      { name: "Go Live", text: "Launch patient-facing platform with structured health data" }
    ]
  });

  const faqSchema = generateFAQSchema(digitalPlatformFAQs);
  const structuredData = [productSchema, faqSchema, breadcrumbSchema, howToSchema];

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
        title="White-label patient experience platform | LabStack"
        description="White-label patient experience with structured health data, digital results, cross-service continuity. Seamless digital health journeys. Grow NPS +25 points."
        keywords="white-label health platform, patient engagement platform, digital health records, structured health data, patient experience platform"
        canonical="https://labstack.in/solutions/digital-platform"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="White-label patient experience platform with structured health data instead of PDFs. Digital results, cross-service continuity, engagement analytics. Grow NPS by +25 points."
            keyPoints={[
              "White-label patient flows under your brand",
              "Delivery modes: digital results, booking flows, tracking, notifications",
              "Structured health data with trend charts and clinical insights",
              "Cross-service continuity from consult to diagnostics to pharmacy",
              "+25 NPS point improvement with digital patient experience"
            ]}
          />
        </div>

        {/* Definition Section */}
        <section className="py-12 bg-gradient-hero border-b border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                White-label patient experience platform that healthcare businesses use to deliver digital health journeys with structured data, seamless care coordination, and engagement analytics.
              </p>
            </div>
          </div>
        </section>

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
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Launch white-label patient experience in four steps
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Configure Branding", description: "Set up white-label branding, colors, logos for patient portal" },
                { step: "2", title: "Activate Services", description: "Enable diagnostics, consultations, pharmacy with digital flows" },
                { step: "3", title: "Customize Journeys", description: "Configure booking, tracking, results delivery workflows" },
                { step: "4", title: "Go Live", description: "Launch patient-facing platform with structured health data" }
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

        {/* Patient Experience Modes */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Digital Patient Experience Features</h2>
              <p className="text-center text-muted-foreground mb-12">
                Comprehensive digital touchpoints for patient engagement
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border/20">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="p-4 text-left font-heading">Feature</th>
                      <th className="p-4 text-left font-heading">Patient Experience</th>
                      <th className="p-4 text-left font-heading">Business Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Digital Results",
                        experience: "Structured data with trend charts, not scanned PDFs",
                        impact: "+25 NPS points"
                      },
                      {
                        feature: "Booking Flows",
                        experience: "Seamless appointment scheduling with prep instructions",
                        impact: "30% higher completion"
                      },
                      {
                        feature: "Real-Time Tracking",
                        experience: "Live status updates for home visits and deliveries",
                        impact: "40% fewer support calls"
                      },
                      {
                        feature: "Care Coordination",
                        experience: "Auto-handoffs from consult → test → pharmacy → follow-up",
                        impact: "2x service utilization"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-border/10 last:border-0">
                        <td className="p-4 font-semibold">{item.feature}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.experience}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.impact}</td>
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
              <h2 className="text-3xl font-heading font-bold mb-6">White-Label Patient Platform Features</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Complete patient experience platform with structured health data. Digital results delivery, cross-service continuity, engagement analytics. Grow NPS by +25 points with digital patient journeys.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Digital Results", "Booking Flows", "Real-Time Tracking", "Care Coordination", "Engagement Analytics", "Trend Charts", "Notifications", "All Features"].map((service, index) => (
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
                  <h2 className="text-3xl font-heading font-bold mb-6">Platform Integration</h2>
                  <ul className="space-y-3">
                    {[
                      "White-label patient portal with your branding",
                      "Embeddable widgets for booking and results",
                      "Mobile SDKs for iOS and Android apps",
                      "Webhook support for real-time event notifications"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Data & Analytics</h2>
                  <ul className="space-y-3">
                    {[
                      "Structured health data with digital raw values",
                      "Auto-generated trend charts for patient progress",
                      "Patient journey analytics and completion tracking",
                      "NPS measurement and engagement scoring"
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

        {/* PDFs to Raw Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
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
        <section className="py-20 bg-gradient-hero border-y border-border/50">
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
