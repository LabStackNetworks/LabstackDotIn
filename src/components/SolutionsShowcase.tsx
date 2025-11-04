import { Stethoscope, Smartphone, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionsShowcase = () => {
  const solutions = [
    {
      icon: Stethoscope,
      title: "Healthcare Infrastructure",
      subtitle: "Launch in days, scale nationwide",
      description: "Complete healthcare infrastructure platform with provider networks, operations automation, and compliance frameworks. Skip the 12-18 month build cycle.",
      features: [
        "Provider network access",
        "Operations automation", 
        "Compliance frameworks",
        "Real-time monitoring"
      ],
      proof: "Cut launch time from 12 months to 6 weeks",
      cta: "Explore Platform",
      link: "/solutions/healthcare-infrastructure",
      gradient: "from-primary to-primary/60"
    },
    {
      icon: Smartphone,
      title: "Digital Platform",
      subtitle: "White-label patient experiences",
      description: "Seamless digital health journeys from tests to consultations to medications. Structured data, not PDFs. Built for engagement and retention.",
      features: [
        "White-label patient flows",
        "Structured health data",
        "Cross-service continuity",
        "Engagement analytics"
      ],
      proof: "NPS jumped 25 points with digital flows",
      cta: "Start Building",
      link: "/solutions/digital-platform",
      gradient: "from-secondary to-secondary/60"
    },
    {
      icon: Code,
      title: "API Solutions",
      subtitle: "Developer-first healthcare rails",
      description: "Modern APIs for healthcare services. Higher ARPU through prescription monetization, diagnostics integration, and care coordination.",
      features: [
        "RESTful healthcare APIs",
        "Prescription monetization",
        "Care coordination tools",
        "Developer-friendly docs"
      ],
      proof: "Prescription monetization grew ARPU by 15%",
      cta: "Explore API Hub",
      link: "/solutions/api-solutions",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Globe,
      title: "Coverage Expansion",
      subtitle: "Tier-1 to Tier-3 instantly",
      description: "Expand your healthcare services to untapped markets. Quality-assured providers, consistent experiences, and local market expertise.",
      features: [
        "Tier-2/3 market access",
        "Quality assurance",
        "Local partnerships",
        "Market intelligence"
      ],
      proof: "20% conversion boost after geographic expansion",
      cta: "Expand Coverage",
      link: "/solutions/coverage-expansion",
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Solutions Built for <span className="text-gradient">Healthcare Scale</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Four core solutions that power modern healthcare companies
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <div className="flex space-x-6 lg:space-x-8 overflow-x-auto pb-6 scrollbar-hide">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Link 
                  key={index}
                  to={solution.link}
                  className="flex-shrink-0 w-80 lg:w-96 card-gradient rounded-2xl p-8 lg:p-10 card-hover group relative overflow-hidden block cursor-pointer"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-elegant`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-4">
                        {solution.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Proof Point */}
                    <div className="bg-success/10 border border-success/20 rounded-xl p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-success font-medium text-xs leading-relaxed">
                          "{solution.proof}"
                        </span>
                      </div>
                    </div>

                    {/* CTA (visual only, entire card navigates) */}
                    <div role="button" aria-hidden className="w-full btn-gradient text-sm text-center rounded-md py-2 select-none">
                      {solution.cta}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {solutions.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-muted rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Our team can help architect the perfect healthcare infrastructure for your specific needs.
          </p>
          <Link to="/custom-solutions">
            <Button size="lg" variant="outline" className="btn-outline-gradient">
              Discuss Custom Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;