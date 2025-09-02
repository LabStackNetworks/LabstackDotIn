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
  const infrastructureLayers = [{
    id: 0,
    icon: Network,
    title: "Provider Network",
    subtitle: "1000+ verified labs, doctors, pharmacies, home care, and specialised services.",
    bullets: ["Quality-assured providers", "Nationwide coverage", "Real-time availability", "Tier-1 to Tier-3 reach"],
    gradient: "from-cyan-400 via-blue-500 to-purple-600"
  }, {
    id: 1,
    icon: Zap,
    title: "Operations & Automation",
    subtitle: "SLA-backed routing, fulfilment, escalations, and real-time tracking.",
    bullets: ["Automated workflows", "Smart routing", "SLA monitoring", "Quality assurance"],
    gradient: "from-purple-500 via-indigo-500 to-blue-600"
  }, {
    id: 2,
    icon: CreditCard,
    title: "Financials",
    subtitle: "Transparent pricing, automated reconciliation, billing, and analytics.",
    bullets: ["Unified billing", "Real-time analytics", "Cost optimisation", "Revenue tracking"],
    gradient: "from-indigo-500 via-purple-500 to-pink-600"
  }, {
    id: 3,
    icon: Brain,
    title: "AI & Intelligence",
    subtitle: "Predictive scoring, raw values, and structured health insights.",
    bullets: ["Structured data", "Quality scoring", "Predictive insights", "Smart analytics"],
    gradient: "from-blue-500 via-purple-500 to-indigo-600"
  }];
  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const sections = infrastructureLayers.map((_, index) => document.getElementById(`section-${index}`));
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
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="relative py-24 bg-[#0B0B10] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Infrastructure Layers
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Four core layers that power modern healthcare infrastructure at scale
          </p>
        </div>

        {isMobile ? (
          // Mobile: Full-screen cards with progress dots
          <div className="relative">
            {/* Progress dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
              {infrastructureLayers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === index 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Mobile cards */}
            <div className="space-y-8">
              {infrastructureLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  id={`section-${index}`}
                  className={`min-h-screen flex items-center transition-all duration-700 ${
                    activeSection === index ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className={`w-full p-8 rounded-2xl bg-gradient-to-br ${layer.gradient} bg-opacity-10 border border-white/10 backdrop-blur-sm`}>
                    <layer.icon className="w-16 h-16 mb-6 text-blue-400" />
                    <h3 className="text-3xl font-bold text-white mb-4">{layer.title}</h3>
                    <p className="text-gray-300 text-lg mb-8">{layer.subtitle}</p>
                    <div className="space-y-3">
                      {layer.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-200">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop: Two-column layout
          <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Left navigation */}
            <div className="col-span-4 sticky top-1/2 -translate-y-1/2 h-fit">
              <div className="space-y-4">
                {infrastructureLayers.map((layer, index) => (
                  <button
                    key={layer.id}
                    onClick={() => handleNavClick(index)}
                    className={`w-full p-6 rounded-xl text-left transition-all duration-300 group ${
                      activeSection === index
                        ? `bg-gradient-to-r ${layer.gradient} bg-opacity-20 border-2 border-blue-400/50 shadow-lg shadow-blue-500/25`
                        : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <layer.icon className={`w-8 h-8 ${
                        activeSection === index ? 'text-blue-400' : 'text-gray-400'
                      }`} />
                      <div>
                        <h3 className={`text-lg font-semibold ${
                          activeSection === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {layer.title}
                        </h3>
                        <p className={`text-sm ${
                          activeSection === index ? 'text-gray-200' : 'text-gray-500'
                        }`}>
                          Layer {index + 1}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right content */}
            <div className="col-span-8 space-y-32">
              {infrastructureLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  id={`section-${index}`}
                  className={`transition-all duration-700 ${
                    activeSection === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-40 translate-y-8'
                  }`}
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${layer.gradient} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group`}>
                    <layer.icon className="w-20 h-20 mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-4xl font-bold text-white mb-4">{layer.title}</h3>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed">{layer.subtitle}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {layer.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                          <span className="text-gray-200 text-lg">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default InfrastructureScrollSection;