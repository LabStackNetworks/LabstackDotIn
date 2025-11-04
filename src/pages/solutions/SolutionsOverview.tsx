import { Zap, Building2, Code, Globe, ArrowRight, CheckCircle, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Healthcare Infrastructure",
      description: "Complete healthcare backbone for enterprises. Launch diagnostics, pharmacy, consultations, and home care services nationwide without building the network.",
      link: "/solutions/healthcare-infrastructure",
      color: "primary",
      features: ["9K+ pincodes", "30K+ orders/month", "99.5% uptime"]
    },
    {
      icon: Globe,
      title: "Digital Platform",
      description: "End-to-end digital healthcare solutions with white-label journeys, care programs, and engagement tools. Your brand, our infrastructure.",
      link: "/solutions/digital-platform",
      color: "secondary",
      features: ["White-label", "Custom journeys", "Built-in engagement"]
    },
    {
      icon: Code,
      title: "API Solutions",
      description: "Developer-first healthcare APIs. One integration for diagnostics, pharmacy, consults. 48-hour setup with SDKs and webhooks.",
      link: "/solutions/api-solutions",
      color: "success",
      features: ["48-hour setup", "One API", "Pre-built SDKs"]
    },
    {
      icon: Network,
      title: "Coverage Expansion",
      description: "Scale to new markets with existing infrastructure. Launch in Tier-2/3 cities overnight with verified provider networks and operations.",
      link: "/solutions/coverage-expansion",
      color: "primary",
      features: ["Instant expansion", "Verified networks", "Regional ops"]
    }
  ];

  const benefits = [
    {
      title: "Plug and Play",
      description: "No vendor contracts, no network building, no ops team required. Launch in days with complete healthcare infrastructure.",
      icon: Zap
    },
    {
      title: "One Platform, Complete Stack",
      description: "Diagnostics, consultations, pharmacy, chronic care, home services. One API, one console, unified operations.",
      icon: Building2
    },
    {
      title: "Scale Without Complexity",
      description: "From 100 to 100,000 orders. From one city to nationwide. Infrastructure that grows with you automatically.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Healthcare Solutions Overview - Complete Platform"
        description="Complete healthcare solutions for enterprises and startups. Infrastructure, APIs, digital platforms, and coverage expansion. Launch nationwide in days."
        keywords="healthcare platform solutions, healthcare infrastructure, healthcare APIs, digital health platform, healthcare expansion"
        canonical="https://labstack.in/solutions"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">HEALTHCARE SOLUTIONS</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Build Healthcare Businesses <span className="text-gradient">Without Building Infrastructure</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                Complete healthcare solutions for every stage—from API integrations to full white-label platforms. 
                Launch nationwide services in days with plug-and-play infrastructure.
              </p>

              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Impact Stats */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Go Live Time</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">99.5%</div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div className="bg-card-gradient p-6 rounded-xl border border-border/20">
                  <div className="text-4xl font-heading font-bold text-gradient mb-2">Zero</div>
                  <p className="text-sm text-muted-foreground">Setup Needed</p>
                </div>
              </div>
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

            {/* Solutions Cards */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">
                Choose Your Path to Healthcare Delivery
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Whether you need simple API access or a complete white-label platform—we have the solution that fits your business model and growth stage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.link}
                    className="group bg-card-gradient rounded-2xl border border-border/20 p-8 card-hover"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${solution.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <solution.icon className={`w-7 h-7 text-${solution.color}`} />
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {solution.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-success/10 text-success px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more 
                      <ArrowRight className="ml-1 w-5 w-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-hero border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                One Platform, Multiple Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Start with APIs, grow into white-label platforms, expand to new markets—all on the same infrastructure. 
                No migration, no vendor lock-in, no complexity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-heading font-bold mb-3">Start Simple</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin with API access. Integrate diagnostics, pharmacy, or consultations with 48-hour setup.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-secondary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-heading font-bold mb-3">Grow Your Brand</h3>
                  <p className="text-sm text-muted-foreground">
                    Add white-label journeys, custom care programs, and engagement tools as you scale.
                  </p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                    <span className="text-success font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-heading font-bold mb-3">Expand Nationwide</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch in new cities overnight. Same infrastructure, instant expansion, zero setup time.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-demo">
                  <Button size="lg" className="btn-gradient">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/start-building">
                  <Button size="lg" variant="outline">
                    Start Building
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-hero rounded-3xl p-8 lg:p-12 border border-border/50">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Why Businesses Choose Our Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">14 Days</div>
                  <p className="text-sm text-muted-foreground">Idea to Live</p>
                  <p className="text-xs text-muted-foreground mt-2">vs 12-18 months building</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">9,000+</div>
                  <p className="text-sm text-muted-foreground">Pincodes Covered</p>
                  <p className="text-xs text-muted-foreground mt-2">Tier-1 to Tier-3 cities</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">Zero</div>
                  <p className="text-sm text-muted-foreground">Setup Required</p>
                  <p className="text-xs text-muted-foreground mt-2">Plug and play infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsOverview;
