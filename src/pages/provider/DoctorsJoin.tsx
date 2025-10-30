import { Stethoscope, Users, TrendingUp, Clock, Shield, CheckCircle, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { doctorsFAQs } from "@/lib/faqs/doctors-faqs";

const DoctorsJoin = () => {
  const structuredData = generateFAQSchema(doctorsFAQs);

  const challenges = [
    "Limited patient reach beyond your immediate catchment area",
    "No-shows and last-minute cancellations affecting revenue",
    "Managing multiple platforms and technologies is complex",
    "Payment delays and reconciliation issues with aggregators",
    "Difficulty accessing corporate wellness and insurance patients"
  ];

  const labstackBenefits = [
    "Steady B2B patient demand from insurers, corporates, and digital platforms—no marketing needed",
    "AI-native platform: WhatsApp/voice AI handles bookings, reminders, follow-ups automatically",
    "Integrated EMR, e-prescription, teleconsultation, and smart scheduling in one place",
    "Guaranteed 100% on-time payments with transparent invoicing and bi-weekly settlements",
    "No exclusivity—maintain your independent practice and other platform relationships"
  ];

  const outcomes = [
    { icon: Users, value: "3-5x", label: "Patient Volume", desc: "Access to digital health ecosystem" },
    { icon: TrendingUp, value: "40%", label: "Revenue Growth", desc: "Via corporate & OPD programs" },
    { icon: Clock, value: "100%", label: "On-Time Payments", desc: "Bi-weekly automated settlements" },
    { icon: Shield, value: "99.9%", label: "Platform Uptime", desc: "Reliable, secure technology" }
  ];

  const howItWorks = [
    { step: "Apply Online", desc: "Submit MCI registration and credentials" },
    { step: "Verification", desc: "5-7 day credential and compliance check" },
    { step: "Onboarding", desc: "Platform training and profile setup" },
    { step: "Set Schedule", desc: "Choose availability and consultation fees" },
    { step: "See Patients", desc: "Verified patients routed to you" },
    { step: "Get Paid", desc: "Automated bi-weekly settlements" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Join Labstack as a Doctor - Grow Your Medical Practice in India"
        description="Expand your medical practice with Labstack. Access verified patients from insurance, corporate wellness, and digital health platforms. Integrated EMR, teleconsultation tools, and guaranteed on-time payments."
        keywords="doctor jobs India, medical practice growth, teleconsultation platform, doctor registration, healthcare provider network, medical practice expansion"
        canonical="https://labstack.in/provider/doctors"
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
                <span className="text-secondary font-medium text-sm">FOR DOCTORS & MEDICAL SPECIALISTS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                More Patients. <span className="text-gradient">Zero Marketing.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Access verified B2B demand from insurers, corporates, and digital health platforms. 
                Get the AI-native platform that handles engagement, scheduling, and patient management.
              </p>

               <Link to="/provider/doctors/apply">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Medical Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6">Current Challenges</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-destructive mt-1">✗</span>
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/10 border border-success/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold mb-6">With Labstack</h3>
                <ul className="space-y-3">
                  {labstackBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-success mt-1">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {howItWorks.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold mb-2 text-sm">{item.step}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Outcomes */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Professional Growth Outcomes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-heading font-bold text-gradient mb-2">{outcome.value}</div>
                      <p className="text-sm font-medium mb-1">{outcome.label}</p>
                      <p className="text-xs text-muted-foreground">{outcome.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Joining Labstack tripled my patient consultations from corporate and insurance channels. The integrated platform makes teleconsultations seamless, and payments are always on time."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Dr. Sharma, Cardiologist, Mumbai</p>
              </div>
            </div>

            {/* Specialties Welcome */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                All Medical Specialties Welcome
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "General Practice", "Internal Medicine", "Pediatrics", "Gynecology",
                  "Cardiology", "Dermatology", "Psychiatry", "Endocrinology",
                  "Orthopedics", "ENT", "Ophthalmology", "Pulmonology",
                  "Gastroenterology", "Nephrology", "Neurology", "Oncology"
                ].map((specialty, index) => (
                  <div key={index} className="bg-card-gradient p-4 rounded-xl border border-border/20 text-center card-hover">
                    <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Platform */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                The AI-Native Platform You Get
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Not just an EMR—your complete operating system for patient engagement, care delivery, and practice growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">AI Patient Engagement</h3>
                    <p className="text-sm text-muted-foreground">WhatsApp & voice AI agents handle appointment bookings, reminders, report explanations, and follow-ups in multiple languages—automatically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Smart Scheduling & Calendar Sync</h3>
                    <p className="text-sm text-muted-foreground">Unified view of clinic visits and teleconsults. Real-time slot management, automated confirmations, and 40% reduction in no-shows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Care Program Builder</h3>
                    <p className="text-sm text-muted-foreground">Create structured programs for diabetes, hypertension, and chronic conditions. Track adherence and send personalized nudges to improve outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Complete Patient CRM</h3>
                    <p className="text-sm text-muted-foreground">Full patient timeline—consultations, tests, prescriptions, and health trends. Enable personalized care and better retention.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Integrated EMR & E-Prescription</h3>
                    <p className="text-sm text-muted-foreground">Digital records, prescription writing with drug database, lab ordering, and pharmacy integration—all in one seamless interface.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">HD Video Consultation</h3>
                    <p className="text-sm text-muted-foreground">Secure teleconsultation with screen sharing, medical image viewing, and consultation recording for quality assurance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Expand Your Medical Practice?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of doctors serving patients across India through Labstack's trusted medical network.
              </p>
              <Link to="/provider/doctors/apply">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={doctorsFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorsJoin;
