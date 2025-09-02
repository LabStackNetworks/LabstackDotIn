import React, { useState, useEffect } from 'react';
import { Network, Zap, CreditCard, Brain, CheckCircle, ArrowDown } from 'lucide-react';
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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-60" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Infrastructure Layer for Connected Care
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white mb-4">
            One API. One Console. One Network.
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Four interconnected layers that power seamless healthcare delivery at scale
          </p>
        </div>

        {/* Network Flow Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {isMobile ? (
            // Mobile: Vertical Flow Design
            <div className="space-y-12">
              {infrastructureLayers.map((layer, index) => (
                <div key={layer.id} className="relative">
                  {/* Connection line to next layer */}
                  {index < infrastructureLayers.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-12 z-0">
                      <div className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-400 opacity-60">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-400 animate-pulse" />
                      </div>
                      <ArrowDown className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 text-purple-400 animate-bounce" />
                    </div>
                  )}
                  
                  <div 
                    className={`relative group cursor-pointer transition-all duration-500 ${
                      activeSection === index ? 'scale-105' : 'scale-100'
                    }`}
                    onClick={() => setActiveSection(activeSection === index ? -1 : index)}
                  >
                    {/* Central hexagon node */}
                    <div className={`relative mx-auto w-80 h-80 transition-all duration-500 ${
                      activeSection === index ? 'scale-110' : 'scale-100'
                    }`}>
                      {/* Hexagon background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-20 transform rotate-45 rounded-3xl`} />
                      <div className={`absolute inset-4 bg-gradient-to-br ${layer.gradient} opacity-10 transform -rotate-45 rounded-3xl`} />
                      
                      {/* Glowing border */}
                      <div className={`absolute inset-0 border-2 rounded-3xl transform rotate-45 transition-all duration-500 ${
                        activeSection === index 
                          ? 'border-blue-400 shadow-lg shadow-blue-400/50' 
                          : 'border-gray-600'
                      }`} />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <layer.icon className={`w-16 h-16 mb-4 transition-all duration-300 ${
                          activeSection === index ? 'text-blue-400 scale-110' : 'text-gray-400'
                        }`} />
                        <h3 className="text-2xl font-bold text-white mb-2">{layer.title}</h3>
                        <p className="text-sm text-gray-300">Layer {index + 1}</p>
                      </div>
                    </div>
                    
                    {/* Expandable content */}
                    <div className={`mt-6 transition-all duration-500 overflow-hidden ${
                      activeSection === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                        <p className="text-gray-300 text-center mb-6">{layer.subtitle}</p>
                        <div className="grid grid-cols-1 gap-3">
                          {layer.bullets.map((bullet, bulletIndex) => (
                            <div key={bulletIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-200">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Network Hub Design
            <div className="relative h-[800px]">
              {/* Central connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Network connections */}
                <path d="M 200 150 Q 400 250 600 150" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" />
                <path d="M 200 650 Q 400 550 600 650" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" />
                <path d="M 200 150 Q 300 400 200 650" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" />
                <path d="M 600 150 Q 700 400 600 650" stroke="url(#connectionGrad)" strokeWidth="2" fill="none" />
              </svg>
              
              {/* Layer nodes positioned in network formation */}
              {infrastructureLayers.map((layer, index) => {
                const positions = [
                  { top: '10%', left: '15%' },   // Provider Network - top left
                  { top: '10%', right: '15%' },  // Operations - top right  
                  { bottom: '10%', left: '15%' }, // Financials - bottom left
                  { bottom: '10%', right: '15%' } // AI - bottom right
                ];
                
                return (
                  <div
                    key={layer.id}
                    className="absolute group cursor-pointer"
                    style={positions[index]}
                    onClick={() => setActiveSection(activeSection === index ? -1 : index)}
                  >
                    {/* Ripple effect */}
                    <div className={`absolute inset-0 -m-8 rounded-full transition-all duration-1000 ${
                      activeSection === index 
                        ? 'bg-blue-400/20 scale-150 animate-pulse' 
                        : 'bg-transparent scale-100'
                    }`} />
                    
                    {/* Node container */}
                    <div className={`relative w-60 h-60 transition-all duration-500 ${
                      activeSection === index ? 'scale-110' : 'scale-100'
                    }`}>
                      {/* Hexagonal design */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-20 transform rotate-45 rounded-3xl`} />
                      <div className={`absolute inset-4 bg-gradient-to-br ${layer.gradient} opacity-10 transform -rotate-45 rounded-3xl border border-white/10`} />
                      
                      {/* Animated border */}
                      <div className={`absolute inset-0 border-2 rounded-3xl transform rotate-45 transition-all duration-500 ${
                        activeSection === index 
                          ? 'border-blue-400 shadow-2xl shadow-blue-400/50' 
                          : 'border-gray-600 group-hover:border-gray-500'
                      }`} />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <layer.icon className={`w-12 h-12 mb-3 transition-all duration-300 ${
                          activeSection === index ? 'text-blue-400 scale-110' : 'text-gray-400 group-hover:text-gray-300'
                        }`} />
                        <h3 className="text-lg font-bold text-white mb-1">{layer.title}</h3>
                        <p className="text-xs text-gray-400">Layer {index + 1}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Central info panel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96">
                {activeSection >= 0 ? (
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 shadow-2xl animate-scale-in">
                    <div className="text-center mb-6">
                      {React.createElement(infrastructureLayers[activeSection].icon, {
                        className: "w-16 h-16 mx-auto mb-4 text-blue-400"
                      })}
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {infrastructureLayers[activeSection].title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {infrastructureLayers[activeSection].subtitle}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {infrastructureLayers[activeSection].bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Connected Healthcare Infrastructure</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Click on any layer to explore how our interconnected infrastructure powers seamless healthcare delivery
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default InfrastructureScrollSection;