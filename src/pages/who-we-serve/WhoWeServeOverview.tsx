import { TrendingUp, Building2, Heart, Smartphone, ArrowRight, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const WhoWeServeOverview = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Insurers & TPAs",
      description: "Launch OPD services with fraud controls, automated reconciliation, and 99%+ fulfillment rates. Reduce claims leakage by 12%.",
      link: "/who-we-serve/insurers-tpas",
      color: "primary",
      metrics: ["12% leakage reduction", "99%+ SLA adherence", "+25 NPS points"]
    },
    {
      icon: Smartphone,
      title: "InsureTech",
      description: "Turn healthcare benefits into revenue engine. Launch nationwide in 14 days. Higher renewals, incremental revenue, zero ops drag.",
      link: "/who-we-serve/insuretech",
      color: "success",
      metrics: ["14-day launch", "Revenue uplift", "Pure B2B"]
    },
    {
      icon: TrendingUp,
      title: "Brokers & Corporate Wellness",
      description: "Differentiate policies with OPD benefits. Grow ARPU by 15% through prescription monetization across 9,000+ pincodes.",
      link: "/who-we-serve/brokers-corporate-wellness",
      color: "secondary",
      metrics: ["~15% ARPU lift", "9K+ pincodes", "Pure B2B model"]
    },
    {
      icon: Heart,
      title: "Disease Management",
      description: "Protocol-driven care pathways with structured health data, automated follow-ups, and 90%+ test completion rates.",
      link: "/who-we-serve/disease-management",
      color: "success",
      metrics: ["90%+ completion", "Longitudinal data", "Automated adherence"]
    },
    {
      icon: Heart,
      title: "Digital Health Platforms",
      description: "Scale nationwide in 14 days with one API. 30K+ orders/month capacity with 99.5% uptime across all services.",
      link: "/who-we-serve/digital-health-platforms",
      color: "warning",
      metrics: ["14-day launch", "30K+ orders/month", "99.5% uptime"]
    }
  ];

  const benefits = [
    {
      title: "Speed Without Setup",
      description: "Launch in days, not months. Plug-and-play infrastructure with no vendor contracts or network building required.",
      icon: CheckCircle
    },
    {
      title: "White-Label Your Brand",
      description: "Customize journeys, care flows, and engagement under your brand. We stay behind the curtain.",
      icon: Users
    },
    {
      title: "Nationwide Coverage",
      description: "9,000+ pincodes, Tier-1 to Tier-3 cities. One platform, one API, complete healthcare delivery.",
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Who We Serve - Healthcare Ecosystem Solutions"
        description="B2B healthcare growth platform for insurers, brokers, disease management companies, and digital health platforms. Launch nationwide healthcare services in days."
        keywords="healthcare B2B platform, insurance OPD services, disease management solutions, digital health infrastructure, healthcare growth platform"
        canonical="https://labstack.in/who-we-serve"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">HEALTHCARE ECOSYSTEM</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                The Growth Engine <span className="text-gradient">Behind Healthcare Businesses</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Launch, grow, and monetize healthcare services without building the network or operations. 
                One platform powering insurers, brokers, disease management companies, and digital health platforms.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Core Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card-gradient p-6 rounded-xl border border-border/20 text-center">
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Audience Cards */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Who We Power
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                From insurance companies to digital health startups become the platform that enables their healthcare business without them building infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {audiences.map((audience, index) => (
                  <Link
                    key={index}
                    to={audience.link}
                    className="group bg-card-gradient rounded-2xl border border-border/20 p-8 card-hover"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${audience.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <audience.icon className={`w-7 h-7 text-${audience.color}`} />
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {audience.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {audience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {audience.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-success/10 text-success px-3 py-1 rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more 
                      <ArrowRight className="ml-1 w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Why Businesses Choose Labstack
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                We become the invisible engine that powers their healthcare business. 
                They focus on distribution and customer experience. We handle network, operations, compliance, and growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <h3 className="font-heading font-bold mb-3">One Platform, Complete Stack</h3>
                  <p className="text-sm text-muted-foreground">
                    Diagnostics, consultations, pharmacy, chronic care, and home services. One API, one console, unified operations across all geographies.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Launch in Days, Not Months</h3>
                  <p className="text-sm text-muted-foreground">
                    48-hour integration with pre-built SDKs. Go from idea to live healthcare services across 9,000+ pincodes in 14 days.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Your Brand, Our Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">
                    White-label everything including journeys, care flows, communications. Pure B2B model. Your customers remain yours. We stay invisible.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <h3 className="font-heading font-bold mb-3">Built-In Growth Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Monetization, cross-sell opportunities, engagement analytics, and retention insights. Scale revenue without scaling ops headcount.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeServeOverview;
