import { Microchip, Factory, Handshake, ArrowRight, CheckCircle, Code, Box, RefreshCcw, Rocket } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Features = () => {
  const modules = [
    {
      icon: Microchip,
      title: "WRLDS Proprietary Modules",
      description: "Our core technology components developed in-house"
    },
    {
      icon: Factory,
      title: "Vetted Off-the-Shelf Hardware", 
      description: "Carefully selected components that complement our technology"
    },
    {
      icon: Handshake,
      title: "Vetted Production Partners",
      description: "Expert manufacturing partners for quality and reliability"
    }
  ];

  const developmentStages = [
    { icon: CheckCircle, label: "Planning", completed: true },
    { icon: Code, label: "Development", completed: true },
    { icon: Box, label: "Testing", completed: true },
    { icon: RefreshCcw, label: "Review", active: true }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Features Grid */}
        <div className="bg-card rounded-xl shadow-lg border p-8 mb-10 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {modules.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-card to-muted/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border h-full cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-muted rounded-full p-4 mb-4">
                    <module.icon className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Separator with arrow */}
          <div className="relative h-16 mb-10">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted-foreground"></div>
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
              <div className="bg-muted-foreground rounded-full p-1">
                <ArrowRight className="w-5 h-5 text-background rotate-90" />
              </div>
            </div>
            <div className="md:hidden flex justify-center items-center h-full">
              <div className="w-1/3 h-0.5 bg-border"></div>
              <div className="bg-muted-foreground rounded-full p-1 mx-2">
                <ArrowRight className="w-5 h-5 text-background" />
              </div>
              <div className="w-1/3 h-0.5 bg-border"></div>
            </div>
          </div>

          {/* Adaptation Project Section */}
          <div className="bg-gradient-to-r from-muted/50 to-muted rounded-lg p-6 mb-10 shadow-md">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">Adaptation Project</h3>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">Iterative Development</span>
                  <RefreshCcw className="h-5 w-5 text-muted-foreground animate-spin" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Working iteratively with customers to tailor solutions to their needs</p>
              
              <div className="relative mb-2">
                <Progress value={78} className="h-3" />
              </div>
              
              <div className="grid gap-1 mt-4 grid-cols-4">
                {developmentStages.map((stage, index) => (
                  <div 
                    key={index} 
                    className={`text-center p-2 rounded transition-all ${
                      stage.active ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`rounded-full p-1 mb-1 ${
                        stage.completed ? 'bg-primary/10 text-primary' : 
                        stage.active ? 'bg-primary/10 text-primary' : 'bg-primary/10 text-primary'
                      }`}>
                        <stage.icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium">{stage.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">Customer feedback integrated at every stage</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
                  <span className="mr-2">Continuous improvement</span>
                  <div className="flex space-x-1">
                    <span className="inline-block w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse"></span>
                    <span className="inline-block w-2 h-2 bg-muted-foreground/70 rounded-full animate-pulse animation-delay-200"></span>
                    <span className="inline-block w-2 h-2 bg-muted-foreground rounded-full animate-pulse animation-delay-400"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Separator */}
          <div className="relative h-16 mb-10">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted-foreground"></div>
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
              <div className="bg-muted-foreground rounded-full p-1">
                <ArrowRight className="w-5 h-5 text-background rotate-90" />
              </div>
            </div>
            <div className="md:hidden flex justify-center items-center h-full">
              <div className="w-1/3 h-0.5 bg-border"></div>
              <div className="bg-muted-foreground rounded-full p-1 mx-2">
                <ArrowRight className="w-5 h-5 text-background" />
              </div>
              <div className="w-1/3 h-0.5 bg-border"></div>
            </div>
          </div>

          {/* Final Section - Hitting the Market */}
          <div className="bg-gradient-to-r from-muted/50 via-card to-muted/50 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="relative bg-card rounded-full p-4 border shadow-md">
                <Rocket className="h-10 w-10 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Hitting the Market</h3>
            <p className="text-muted-foreground">Ready to scale, produce, and launch</p>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-muted-foreground/50 animate-pulse"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-muted-foreground/70 animate-pulse animation-delay-200"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-muted-foreground animate-pulse animation-delay-400"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;