import { Clock, Users, Lock, AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "12-18 months building infrastructure",
      description: "Onboarding labs, verifying doctors, integrating pharmacies",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Manual ops at scale",
      description: "Excel reconciliation, SLA chasing, fragmented vendors",
      color: "text-destructive"
    },
    {
      icon: Lock,
      title: "Can't expand beyond metros",
      description: "Network quality breaks in Tier 2/3 cities",
      color: "text-secondary"
    },
    {
      icon: AlertTriangle,
      title: "Broken care loops",
      description: "Prescriptions → diagnostics → reports never connect",
      color: "text-warning"
    },
    {
      icon: TrendingDown,
      title: "Systems don't talk",
      description: "Legacy tech requires manual stitching",
      color: "text-destructive"
    },
    {
      icon: DollarSign,
      title: "High CAC, flat LTV",
      description: "Building ops instead of products",
      color: "text-primary"
    }
  ];

  return (
    <section className="mobile-section-padding bg-muted/20">
      <div className="container mx-auto mobile-safe-padding">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="mobile-section-title font-heading font-bold mb-6">
            Why Healthcare <span className="text-gradient">Innovation Stalls</span>
          </h2>
          <p className="mobile-subheading text-muted-foreground max-w-3xl mx-auto">
            Every healthtech rebuilds the same infrastructure. Innovation slows. Growth stalls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="card-gradient mobile-card-padding rounded-xl card-hover group mobile-hover-lift mobile-tap-highlight"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:scale-110 transition-smooth ${problem.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mobile-card-title font-heading font-semibold mb-2 text-foreground">
                      {problem.title}
                    </h3>
                    <p className="mobile-text-readable text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-destructive/10 border border-destructive/20 px-4 sm:px-6 py-3 rounded-full mobile-touch-target">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
            <span className="text-destructive font-medium text-sm sm:text-base">
              Result: Delayed launches, rising costs, stalled growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;