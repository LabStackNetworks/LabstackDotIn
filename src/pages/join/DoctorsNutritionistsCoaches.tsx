import { Stethoscope, Heart, Users, TrendingUp, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { doctorsNutritionistsCoachesFAQs } from "@/lib/faqs/doctors-nutritionists-coaches-faqs";
const DoctorsNutritionistsCoaches = () => {
  const structuredData = generateFAQSchema(doctorsNutritionistsCoachesFAQs);

  const challenges = [
    "Limited patient reach beyond your immediate area",
    "No-shows and cancellations impact revenue",
    "Managing multiple platforms and technologies is complex",
    "Payment delays and reconciliation issues",
    "Difficulty accessing corporate and insurance patients"
  ];

  const labstackBenefits = [
    "Access to verified patients from insurers, corporate programs, and digital health platforms across India",
    "Integrated EMR, e-prescription, teleconsultation platform, and scheduling—all in one place",
    "Guaranteed timely payments with transparent invoicing and automated settlements",
    "No exclusivity required—maintain your practice and work with other platforms",
    "24/7 technical support and dedicated account management"
  ];

  const outcomes = [
    { icon: Users, value: "3-5x", label: "Patient Volume Increase", desc: "Access digital health ecosystem" },
    { icon: TrendingUp, value: "40%", label: "Revenue Growth", desc: "Via corporate and OPD programs" },
    { icon: Clock, value: "100%", label: "On-Time Payments", desc: "Bi-weekly automated settlements" },
    { icon: Shield, value: "99.9%", label: "Platform Uptime", desc: "Reliable technology stack" }
  ];

  const howItWorks = [
    { step: "Apply Online", desc: "Submit credentials and registration details for verification" },
    { step: "Get Verified", desc: "5-7 day credential check and compliance onboarding" },
    { step: "Set Schedule", desc: "Choose availability, fees, and consultation types" },
    { step: "See Patients", desc: "Verified patients from digital ecosystem routed to you" },
    { step: "Get Paid", desc: "Automated settlements every two weeks" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Join Labstack as a Doctor, Nutritionist or Health Coach in India"
        description="Grow your practice with Labstack. Access verified patients from insurance, corporate wellness, and digital health platforms across India. Integrated EMR, teleconsultation tools, and guaranteed timely payments."
        keywords="doctor jobs, nutritionist opportunities, health coach network, teleconsultation platform, medical practice growth, healthcare provider network, doctor registration"
        canonical="https://labstack.in/join/doctors-nutritionists-coaches"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* TLDR Section */}
        <TLDR
          summary="Join Labstack's healthcare network to access verified patients from insurers, corporate wellness programs, and digital health platforms. Get integrated EMR, teleconsultation tools, 100% on-time payments, and 24/7 support—all with no exclusivity required."
          keyPoints={[
            "Access verified patients from insurers, corporate wellness programs, and digital health platforms",
            "Integrated technology: EMR, e-prescriptions, teleconsultation, scheduling—all in one platform",
            "100% on-time payments with transparent invoicing and bi-weekly settlements",
            "No exclusivity required—maintain your independent practice",
            "24/7 support and compliance assistance included"
          ]}
        />

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR HEALTHCARE PROFESSIONALS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Grow Your Practice. <span className="text-gradient">See More Patients.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Join India's largest healthcare network for doctors, nutritionists, and health coaches. 
                Access verified patients from insurers, corporate wellness programs, and digital health platforms across India.
              </p>

              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Network
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
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {howItWorks.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center card-hover">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Professional Outcomes
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
                  "Joining Labstack tripled my patient consultations and eliminated payment delays. The integrated EMR and teleconsultation platform make my work seamless."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Partner Doctor, Bangalore</p>
              </div>
            </div>

            {/* Who Can Join */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Who Can Join
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                  <Stethoscope className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Doctors</h3>
                  <p className="text-muted-foreground text-sm">
                    General practitioners and specialists across all specialties. Provide teleconsultations, in-clinic appointments, and preventive care.
                  </p>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                  <Heart className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Nutritionists & Dietitians</h3>
                  <p className="text-muted-foreground text-sm">
                    Certified nutritionists and dietitians. Offer diet counseling, meal planning, and wellness coaching for chronic conditions and preventive health.
                  </p>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                  <Users className="w-12 h-12 text-success mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Health Coaches</h3>
                  <p className="text-muted-foreground text-sm">
                    Certified health and wellness coaches. Provide lifestyle modification support, fitness guidance, stress management, and preventive health education.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Platform */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Technology Platform Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Integrated EMR</h3>
                    <p className="text-sm text-muted-foreground">Electronic medical records with patient history, clinical notes, and treatment tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">E-Prescription Tools</h3>
                    <p className="text-sm text-muted-foreground">Digital prescription writing with pharmacy integration and medication tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Teleconsultation Platform</h3>
                    <p className="text-sm text-muted-foreground">Secure video conferencing with screen sharing and digital consultation tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Scheduling & Reminders</h3>
                    <p className="text-sm text-muted-foreground">Automated appointment booking, patient reminders, and calendar management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Lab Integration</h3>
                    <p className="text-sm text-muted-foreground">Direct lab test ordering and result viewing within the platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Payment Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time earnings tracking, transparent invoicing, and automated settlements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Grow Your Practice?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of healthcare professionals serving patients across India through Labstack's trusted network.
              </p>
              <Link to="/contact">
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
            <FAQ items={doctorsNutritionistsCoachesFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorsNutritionistsCoaches;
