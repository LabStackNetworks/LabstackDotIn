import React, { useState, useEffect } from 'react';
import { Network, Zap, CreditCard, Brain, CheckCircle } from 'lucide-react';

const InfrastructureScrollSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const infrastructureLayers = [
    {
      id: 0,
      icon: Network,
      title: "Provider Network",
      subtitle: "1000+ verified labs, doctors, pharmacies, home care, and specialised services.",
      bullets: [
        "Quality-assured providers",
        "Nationwide coverage", 
        "Real-time availability",
        "Tier-1 to Tier-3 reach"
      ],
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      id: 1,
      icon: Zap,
      title: "Operations & Automation", 
      subtitle: "SLA-backed routing, fulfilment, escalations, and real-time tracking.",
      bullets: [
        "Automated workflows",
        "Smart routing",
        "SLA monitoring", 
        "Quality assurance"
      ],
      gradient: "from-purple-500 via-indigo-500 to-blue-600"
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Financials",
      subtitle: "Transparent pricing, automated reconciliation, billing, and analytics.",
      bullets: [
        "Unified billing",
        "Real-time analytics",
        "Cost optimisation",
        "Revenue tracking"
      ],
      gradient: "from-indigo-500 via-purple-500 to-pink-600"
    },
    {
      id: 3,
      icon: Brain,
      title: "AI & Intelligence",
      subtitle: "Predictive scoring, raw values, and structured health insights.",
      bullets: [
        "Structured data",
        "Quality scoring",
        "Predictive insights",
        "Smart analytics"
      ],
      gradient: "from-blue-500 via-purple-500 to-indigo-600"
    }
  ];

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const sections = infrastructureLayers.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollY = window.scrollY + window.innerHeight / 2;
      
      let newActiveSection = 0;
      sections.forEach((section, index) => {
        if (section && scrollY >= section.offsetTop) {
          newActiveSection = index;
        }
      });
      
      setActiveSection(newActiveSection);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isMobile, infrastructureLayers.length]);

  const handleNavClick = (index: number) => {
    setActiveSection(index);
    if (!isMobile) {
      const element = document.getElementById(`section-${index}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="infrastructure-scroll"
      className="min-h-screen bg-background py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Labstack's <span className="text-gradient">Infrastructure Layer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium, dark-themed infrastructure that scales from Tier-1 to Tier-3 markets
          </p>
        </div>

        {/* Desktop Layout */}
        {!isMobile && (
          <div className="grid grid-cols-12 gap-8 min-h-screen">
            {/* Left Sticky Navigation */}
            <div className="col-span-4">
              <div className="sticky top-32">
                <nav className="space-y-6">
                  {infrastructureLayers.map((layer, index) => {
                    const IconComponent = layer.icon;
                    const isActive = activeSection === index;
                    return (
                      <div
                        key={layer.id}
                        onClick={() => handleNavClick(index)}
                        className={`cursor-pointer p-6 rounded-xl transition-all duration-500 border-2 ${
                          isActive 
                            ? 'border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 shadow-glow' 
                            : 'border-border/30 bg-card/50 hover:border-border/50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-br ${layer.gradient}` 
                              : 'bg-muted'
                          }`}>
                            <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <h3 className={`text-lg font-heading font-bold transition-colors duration-300 ${
                              isActive ? 'text-gradient' : 'text-foreground'
                            }`}>
                              {layer.title}
                            </h3>
                            <div className={`text-sm transition-colors duration-300 ${
                              isActive ? 'text-foreground/80' : 'text-muted-foreground'
                            }`}>
                              {index + 1} of {infrastructureLayers.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right Scroll Content */}
            <div className="col-span-8">
              <div className="space-y-32">
                {infrastructureLayers.map((layer, index) => {
                  const IconComponent = layer.icon;
                  const isActive = activeSection === index;
                  return (
                    <div
                      key={layer.id}
                      id={`section-${index}`}
                      className={`min-h-screen flex items-center transition-all duration-700 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                      }`}
                    >
                      <div className={`w-full p-8 lg:p-12 rounded-3xl border-2 transition-all duration-700 ${
                        isActive 
                          ? 'border-primary/30 bg-gradient-to-br from-card to-card-hover shadow-elegant' 
                          : 'border-border/20 bg-card/30'
                      }`}>
                        <div className="relative">
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-5 rounded-3xl transition-opacity duration-700 ${
                            isActive ? 'opacity-10' : 'opacity-5'
                          }`}></div>
                          
                          <div className="relative z-10">
                            {/* Icon */}
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-8 transition-all duration-500 ${
                              isActive ? 'scale-110 shadow-glow' : 'scale-100'
                            }`}>
                              <IconComponent className="w-10 h-10 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className={`text-3xl lg:text-4xl font-heading font-bold mb-4 transition-colors duration-500 ${
                              isActive ? 'text-gradient' : 'text-foreground'
                            }`}>
                              {layer.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                              {layer.subtitle}
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              {layer.bullets.map((bullet, bulletIndex) => (
                                <div 
                                  key={bulletIndex}
                                  className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-500 ${
                                    isActive ? 'bg-primary/5 border border-primary/10' : 'bg-muted/30'
                                  }`}
                                  style={{ transitionDelay: `${bulletIndex * 100}ms` }}
                                >
                                  <CheckCircle className={`w-5 h-5 transition-colors duration-300 ${
                                    isActive ? 'text-primary' : 'text-muted-foreground'
                                  }`} />
                                  <span className={`text-sm font-medium transition-colors duration-300 ${
                                    isActive ? 'text-foreground' : 'text-muted-foreground'
                                  }`}>
                                    {bullet}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="space-y-8">
            {/* Progress Dots */}
            <div className="flex justify-center space-x-3 mb-8">
              {infrastructureLayers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === index 
                      ? 'bg-primary shadow-glow scale-125' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Swipeable Cards */}
            <div className="overflow-x-hidden scrollbar-hide">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ 
                  transform: `translateX(-${activeSection * 100}%)`,
                  width: `${infrastructureLayers.length * 100}%`
                }}
              >
                {infrastructureLayers.map((layer, index) => {
                  const IconComponent = layer.icon;
                  const isActive = activeSection === index;
                  return (
                    <div
                      key={layer.id}
                      className={`flex-shrink-0 p-8 rounded-3xl border-2 transition-all duration-700 ${
                        isActive 
                          ? 'border-primary/30 bg-gradient-to-br from-card to-card-hover shadow-elegant' 
                          : 'border-border/20 bg-card/50'
                      }`}
                      style={{ width: `${100 / infrastructureLayers.length}%` }}
                    >
                      <div className="relative min-h-[500px] flex flex-col">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-5 rounded-3xl`}></div>
                        
                        <div className="relative z-10 flex-1">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-6`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">
                            {layer.title}
                          </h3>

                          {/* Subtitle */}
                          <p className="text-muted-foreground mb-8 leading-relaxed">
                            {layer.subtitle}
                          </p>

                          {/* Features */}
                          <div className="space-y-4">
                            {layer.bullets.map((bullet, bulletIndex) => (
                              <div 
                                key={bulletIndex}
                                className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                              >
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Swipe Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                disabled={activeSection === 0}
                className="px-4 py-2 rounded-lg bg-muted text-muted-foreground disabled:opacity-30 transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveSection(Math.min(infrastructureLayers.length - 1, activeSection + 1))}
                disabled={activeSection === infrastructureLayers.length - 1}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-30 transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfrastructureScrollSection;