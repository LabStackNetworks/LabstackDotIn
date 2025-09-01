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
  return;
};
export default InfrastructureScrollSection;