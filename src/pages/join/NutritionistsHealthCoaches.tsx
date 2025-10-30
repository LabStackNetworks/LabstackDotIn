import { Heart, Users, TrendingUp, Clock, Shield, CheckCircle, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/structured-data";
import { nutritionistsHealthCoachesFAQs } from "@/lib/faqs/nutritionists-health-coaches-faqs";

const NutritionistsHealthCoaches = () => {
  const structuredData = generateFAQSchema(nutritionistsHealthCoachesFAQs);

  const challenges = [
    "Limited client reach beyond local area and personal network",
    "Inconsistent client flow and unpredictable revenue",
    "Managing client progress tracking and follow-ups manually",
    "Payment collection challenges and delayed settlements",
    "Difficulty accessing corporate wellness and insurance clients"
  ];

  const labstackBenefits = [
    "Access corporate wellness programs, insurance preventive care, and digital health platform clients",
    "Client management system, progress tracking, meal planning tools, and video consultation platform",
    "Guaranteed timely payments with automated bi-weekly settlements and transparent invoicing",
    "No exclusivity—maintain your independent practice and other platform work",
    "Support for individual sessions, group coaching, workshops, and corporate wellness camps"
  ];

  const outcomes = [
    { icon: Users, value: "4-6x", label: "Client Base Growth", desc: "Corporate & insurance channels" },
    { icon: TrendingUp, value: "50%", label: "Revenue Increase", desc: "Consistent client pipeline" },
    { icon: Clock, value: "100%", label: "Payment Reliability", desc: "Bi-weekly settlements" },
    { icon: Shield, value: "24/7", label: "Platform Support", desc: "Technical & program guidance" }
  ];

  const howItWorks = [
    { step: "Apply", desc: "Submit credentials and certifications" },
    { step: "Verify", desc: "5-7 day qualification check" },
    { step: "Onboard", desc: "Platform training and program setup" },
    { step: "Design Programs", desc: "Create individual & group offerings" },
    { step: "Serve Clients", desc: "Corporate and insurance clients routed" },
    { step: "Get Paid", desc: "Automated settlements" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Join Labstack as a Nutritionist or Health Coach in India"
        description="Grow your nutrition and wellness practice with Labstack. Access corporate wellness programs, insurance clients, and digital health platforms. Get client management tools, progress tracking, and guaranteed payments."
        keywords="nutritionist jobs India, health coach opportunities, wellness coaching platform, nutrition practice growth, corporate wellness programs"
        canonical="https://labstack.in/join-network/nutritionists-health-coaches"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* TLDR Section */}
        <TLDR
          summary="Join Labstack's wellness network to access corporate wellness programs, insurance preventive care clients, and digital health platforms. Get client management tools, progress tracking, video consultation platform, and guaranteed timely payments—with no exclusivity required."
          keyPoints={[
            "Access corporate wellness, insurance preventive care, and digital health platform clients",
            "Client management system with progress tracking, meal planning, and video consultation tools",
            "100% on-time payments with bi-weekly settlements and transparent invoicing",
            "Offer individual consultations, group coaching, workshops, and corporate camps",
            "No exclusivity—maintain your independent practice and offline sessions"
          ]}
        />

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">FOR NUTRITIONISTS & HEALTH COACHES</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Grow Your Practice. <span className="text-gradient">Transform More Lives.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Join India's largest wellness network for nutritionists and health coaches. Access corporate wellness programs, 
                insurance preventive care clients, and digital health platforms across India.
              </p>

              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Wellness Network
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
                  "Labstack connected me to corporate wellness programs across India. My client base grew 5x, and I now run group sessions alongside individual coaching—all through one platform."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Priya Menon, Certified Nutritionist, Bangalore</p>
              </div>
            </div>

            {/* Who Can Join */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Who Can Join
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Nutritionists & Dietitians</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Certified nutritionists and dietitians with recognized degrees/diplomas. Provide diet counseling, meal planning, 
                    weight management, diabetes/cardiac nutrition, sports nutrition, and therapeutic diet planning.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Clinical Nutritionists</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Sports Nutritionists</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Registered Dietitians</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card-gradient p-8 rounded-2xl border border-border/20 card-hover">
                  <Users className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-3">Health & Wellness Coaches</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Certified health and wellness coaches from recognized institutions (ACE, NASM, ACSM, etc.). Provide lifestyle coaching, 
                    wellness guidance, behavioral change support, stress management, and preventive health education.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Certified Health Coaches</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Wellness Coaches</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Lifestyle Coaches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Offerings */}
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50 mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Services You Can Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-bold mb-4 text-primary">Nutrition Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Weight management programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Diabetes & cardiac diet counseling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Sports nutrition & fitness diets</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Therapeutic meal planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Preventive nutrition education</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold mb-4 text-secondary">Wellness Coaching</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Lifestyle modification programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Stress management coaching</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Behavioral change support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Corporate wellness workshops</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Preventive health education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Platform */}
            <div className="max-w-5xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Platform Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Client Management System</h3>
                    <p className="text-sm text-muted-foreground">Track client profiles, health history, goals, progress, and session notes in one place</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Video Consultation Platform</h3>
                    <p className="text-sm text-muted-foreground">Secure HD video sessions with screen sharing and session recording capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Meal Planning Tools</h3>
                    <p className="text-sm text-muted-foreground">Create customized meal plans, recipes, and nutrition guides for clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Progress Tracking Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Monitor client weight, measurements, health markers, and goal achievement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Group Session Support</h3>
                    <p className="text-sm text-muted-foreground">Host group coaching sessions, workshops, and webinars with multiple participants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Revenue & Analytics</h3>
                    <p className="text-sm text-muted-foreground">Real-time earnings tracking, session analytics, and transparent payment history</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Grow Your Wellness Practice?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of nutritionists and health coaches transforming lives across India through Labstack's trusted network.
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
            <FAQ items={nutritionistsHealthCoachesFAQs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NutritionistsHealthCoaches;
