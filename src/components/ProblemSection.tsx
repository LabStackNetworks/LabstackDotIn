import { Clock, Users, Lock, AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "12–18 months wasted",
      description: "Building infra instead of innovating",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Chaos managing vendors",
      description: "Multiple providers, inconsistent experience",
      color: "text-destructive"
    },
    {
      icon: Lock,
      title: "Provider lock-in",
      description: "Stuck with a single vendor's limitations",
      color: "text-secondary"
    },
    {
      icon: AlertTriangle,
      title: "Broken integrations",
      description: "Compliance debt and technical overhead",
      color: "text-warning"
    },
    {
      icon: TrendingDown,
      title: "Inconsistent quality",
      description: "Delayed reports, poor patient experience",
      color: "text-destructive"
    },
    {
      icon: DollarSign,
      title: "Cost overruns",
      description: "Poor ROI on infrastructure investments",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Why Healthcare Infrastructure <span className="text-gradient">Fails</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Healthcare companies waste months building basic infrastructure instead of focusing on what matters — 
            delivering exceptional patient care and growing their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="card-gradient p-6 lg:p-8 rounded-xl card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:scale-110 transition-smooth ${problem.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-destructive/10 border border-destructive/20 px-6 py-3 rounded-full">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-medium">
              Result: Delayed launches, higher costs, frustrated patients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;