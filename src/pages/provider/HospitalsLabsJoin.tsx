import { Building2, TrendingUp, Users, Shield, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const HospitalsLabsJoin = () => {
  const benefits = [
    { icon: TrendingUp, title: "Increase Utilization", description: "Access to enterprise clients and aggregators" },
    { icon: Users, title: "Expand Reach", description: "Get discovered by patients across India" },
    { icon: Shield, title: "Quality Standards", description: "Enhanced reputation through certification" },
    { icon: Zap, title: "Operational Efficiency", description: "Streamlined booking and reporting systems" }
  ];

  const outcomes = [
    { metric: "60-70%", label: "Utilization Rate", sublabel: "From 40% baseline" },
    { metric: "2x", label: "Revenue Growth", sublabel: "Via B2B demand channels" },
    { metric: "30 days", label: "Payment Terms", sublabel: "Guaranteed settlements" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">FOR HOSPITALS & LABS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Fill Capacity. <span className="text-gradient">No Sales Team Needed.</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Access steady B2B demand from insurers, corporates, and digital health platforms. 
                Get the AI-native platform that runs your operations and grows your business.
              </p>

              <Link to="/provider/hospitals-labs/apply">
                <Button size="lg" className="btn-gradient">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Join Labstack Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-card-gradient p-6 rounded-2xl border border-border/20 text-center card-hover">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Platform */}
            <div className="max-w-6xl mx-auto mb-20">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">The Technology Platform You Get</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Beyond demand aggregation. We're your operating system. AI-native tools for engagement, workflows, and growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">AI-Powered Patient Engagement</h3>
                    <p className="text-sm text-muted-foreground">WhatsApp & voice AI agents automate bookings, report explanations, reminders, and follow-ups in local languages reducing no-shows by 40%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Unified Order & Appointment Management</h3>
                    <p className="text-sm text-muted-foreground">Manage home collections, walk-ins, and corporate bookings in one dashboard. Real-time slots, calendar sync, automated confirmations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">At-Home Care Coordination</h3>
                    <p className="text-sm text-muted-foreground">Plug-and-play access to phlebotomists, nurses, ECG techs across 9,000+ pincodes. Extend your services beyond your lab seamlessly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Complete Patient CRM</h3>
                    <p className="text-sm text-muted-foreground">Full patient history, test trends, health insights, and automated follow-ups. Turn episodic tests into long-term relationships.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Deep System Integrations</h3>
                    <p className="text-sm text-muted-foreground">Seamless LIS/HIS integration with autonomous AI agents. Your existing systems work smarter, not harder.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-6 bg-card-gradient rounded-xl border border-border/20">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold mb-2">Growth & Marketing Engine</h3>
                    <p className="text-sm text-muted-foreground">Digital presence, local SEO, patient acquisition campaigns, referral tracking. Grow without hiring a sales team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className="max-w-5xl mx-auto mb-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">Partner Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {outcomes.map((outcome, index) => (
                  <div key={index}>
                    <div className="text-4xl font-heading font-bold text-gradient mb-2">{outcome.metric}</div>
                    <p className="text-lg font-medium text-foreground mb-1">{outcome.label}</p>
                    <p className="text-sm text-muted-foreground">{outcome.sublabel}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <p className="text-success font-medium italic">
                  "Partnering with Labstack doubled our enterprise bookings and improved payment cycles significantly."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Ready to grow your healthcare business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 500+ hospitals and labs already partnering with Labstack
              </p>
              <Link to="/provider/hospitals-labs/apply">
                <Button size="lg" className="btn-gradient">
                  Apply to Join Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalsLabsJoin;
