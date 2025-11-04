import PageTemplate from "@/components/PageTemplate";
import TLDR from "@/components/design-system/TLDR";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Stethoscope, Syringe, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/structured-data";

const ProvidersOverview = () => {
  const providerTypes = [
    {
      icon: Building2,
      title: "Hospitals & Labs",
      description: "Expand your reach beyond geographical boundaries. Connect with digital health platforms, insurers, and corporate wellness programs.",
      benefits: ["Increased patient volume", "Digital integration", "Automated billing"],
      href: "/provider/hospitals-labs/apply"
    },
    {
      icon: Stethoscope,
      title: "Doctors",
      description: "Join India's largest healthcare network. Offer teleconsultations and in-clinic visits to patients across the country.",
      benefits: ["Flexible scheduling", "Secure platform", "Fair compensation"],
      href: "/provider/doctors/apply"
    },
    {
      icon: Heart,
      title: "Nutritionists & Health Coaches",
      description: "Scale your practice nationwide. Provide virtual consultations and personalized care plans to a wider patient base.",
      benefits: ["National reach", "EMR integration", "Professional growth"],
      href: "/provider/nutritionists-health-coaches/apply"
    },
    {
      icon: Syringe,
      title: "Nurses & Phlebotomists",
      description: "Access consistent assignments across 9,000+ pincodes. Get reliable earnings with SLA-backed workflows.",
      benefits: ["Regular work", "Timely payments", "Professional support"],
      href: "/provider/field-staff"
    }
  ];

  const platformFeatures = [
    {
      title: "AI-Powered Patient Engagement",
      description: "WhatsApp & voice AI agents handle bookings, reminders, report explanations, and follow-ups in multiple Indian languages reducing no-shows and manual work."
    },
    {
      title: "Smart Appointment & Order Management",
      description: "Unified dashboard for clinic visits, home collections, and teleconsults. Real-time slot management, calendar sync, and automated patient reminders."
    },
    {
      title: "Care Program Builder",
      description: "Convert episodic care into structured programs - diabetes, hypertension, maternity. Track adherence and send personalized nudges to improve outcomes."
    },
    {
      title: "Complete Patient CRM",
      description: "Full patient timeline across tests, consults, messages, and outcomes. Enable personalized care, better retention, and higher lifetime value."
    },
    {
      title: "At-Home Care Coordination",
      description: "Plug-and-play access to phlebotomists, nurses, ECG technicians, and first responders. Extend care beyond your clinic seamlessly."
    },
    {
      title: "Growth & Marketing Engine",
      description: "Digital presence tools, local SEO, patient acquisition campaigns, and referral tracking all built-in to help you grow without a sales team."
    }
  ];

  const benefits = [
    "Steady B2B demand from insurers, corporates, and digital health platforms - no sales team needed",
    "AI-native operating system that powers your daily workflows, not just transactions",
    "30-day payment terms with automated reconciliation",
    "99.5% platform uptime with 24/7 technical support",
    "Non-exclusive partnership - maintain your independence and other relationships"
  ];

  const structuredData = [
    generateServiceSchema({
      name: "Labstack Provider Network",
      description: "Join India's largest healthcare infrastructure network with AI-native operating system and B2B demand from insurers, corporates, and digital platforms.",
      url: "https://labstack.in/provider"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://labstack.in" },
      { name: "Providers", url: "https://labstack.in/provider" }
    ])
  ];

  return (
    <PageTemplate
      title="Join Labstack Provider Network | Healthcare Professionals"
      description="Join India's largest healthcare infrastructure network. Connect with digital health platforms, insurers, and patients across 9,000+ pincodes. SLA-backed operations, transparent pricing, and automated workflows."
      keywords="healthcare providers, doctor network, diagnostic labs, hospital network, telemedicine providers, healthcare professionals India"
      canonical="https://labstack.in/provider"
      structuredData={structuredData}
    >
      {/* Hidden TL;DR for AI crawlers */}
      <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
        <TLDR 
          summary="Join Labstack provider network for steady B2B demand from insurers, corporates, and digital health platforms. Access AI-native operating system handling engagement, workflows, and growth across 9,000+ pincodes."
          keyPoints={[
            "Hospitals & Labs: Increase utilization to 60-70% with B2B demand",
            "Doctors: Flexible teleconsultations with secure EMR platform",
            "Nutritionists: Scale practice nationwide with virtual consultations",
            "Field Staff: Regular work with timely payments across India",
            "AI-powered patient engagement and appointment management"
          ]}
        />
      </div>

      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Steady Demand. <span className="text-gradient">Zero Sales Effort.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access verified B2B demand from insurers, corporates, and digital health platforms. 
              Powered by AI-native technology that runs your operations, not just transactions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30,000+</div>
              <div className="text-sm text-muted-foreground">Monthly Orders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">9,000+</div>
              <div className="text-sm text-muted-foreground">Pincodes Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </div>
          </div>

          {/* Provider Types */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
              Who Can Join
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {providerTypes.map((provider, index) => (
                <Card key={index} className="group hover:shadow-neural transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <provider.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2">{provider.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
                        <ul className="space-y-2 mb-4">
                          {provider.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to={provider.href}>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform Features - What You Get */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-4">
              The Technology Platform You Get
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We're not just a demand aggregator. We're building the operating system for Indian healthcare providers.
              AI-native tools that handle engagement, workflows, and growth so you can focus on care.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-neural transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold mb-3 text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
              Why Partner With Labstack
            </h2>
            <div className="grid md:grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join thousands of healthcare professionals serving patients nationwide through Labstack's infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="min-w-[200px]">
                  Apply to Join
                </Button>
              </Link>
              <Link to="/book-demo">
                <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default ProvidersOverview;
