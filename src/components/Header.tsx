import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building2, Users, Stethoscope, FileText, Info } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { 
      label: "Platform", 
      href: "#platform",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "Healthcare Infrastructure",
          description: "Complete platform for modern healthcare delivery",
          href: "#infrastructure",
          icon: Building2
        },
        sections: [
          {
            title: "Core Services",
            items: [
              { label: "Diagnostics Network", href: "#diagnostics", description: "Lab tests & imaging" },
              { label: "Telemedicine", href: "#telemedicine", description: "Virtual consultations" },
              { label: "Pharmacy Network", href: "#pharmacy", description: "Medicine delivery" },
              { label: "Home Care", href: "#homecare", description: "Care at your doorstep" }
            ]
          },
          {
            title: "Technology",
            items: [
              { label: "API Integration", href: "#api", description: "Developer-first platform" },
              { label: "Dashboard", href: "#dashboard", description: "Real-time analytics" },
              { label: "Mobile Apps", href: "#mobile", description: "iOS & Android apps" }
            ]
          }
        ]
      }
    },
    { 
      label: "Solutions", 
      href: "#solutions",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "Enterprise Healthcare",
          description: "Scalable solutions for organizations of all sizes",
          href: "#enterprise",
          icon: Users
        },
        sections: [
          {
            title: "For Businesses",
            items: [
              { label: "Corporate Wellness", href: "#corporate", description: "Employee health programs" },
              { label: "Insurance Integration", href: "#insurance", description: "Seamless claim processing" },
              { label: "B2B Healthcare", href: "#b2b", description: "White-label solutions" }
            ]
          },
          {
            title: "For Healthcare Providers",
            items: [
              { label: "Practice Management", href: "#practice", description: "Streamline operations" },
              { label: "Patient Engagement", href: "#engagement", description: "Better patient experience" }
            ]
          }
        ]
      }
    },
    { 
      label: "Who We Serve", 
      href: "#who-we-serve",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "Healthcare Ecosystem",
          description: "Serving patients, providers, and enterprises nationwide",
          href: "#ecosystem",
          icon: Stethoscope
        },
        sections: [
          {
            title: "Patients & Families",
            items: [
              { label: "Individual Care", href: "#individual", description: "Personal healthcare needs" },
              { label: "Family Plans", href: "#family", description: "Comprehensive family coverage" },
              { label: "Chronic Care", href: "#chronic", description: "Long-term condition management" }
            ]
          },
          {
            title: "Healthcare Partners",
            items: [
              { label: "Hospitals", href: "#hospitals", description: "Large healthcare institutions" },
              { label: "Clinics", href: "#clinics", description: "Local healthcare providers" },
              { label: "Pharmacies", href: "#pharmacies", description: "Medicine retail partners" }
            ]
          }
        ]
      }
    },
    { 
      label: "Resources", 
      href: "#resources",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "Knowledge Hub",
          description: "Documentation, guides, and healthcare insights",
          href: "#knowledge",
          icon: FileText
        },
        sections: [
          {
            title: "Documentation",
            items: [
              { label: "API Docs", href: "#api-docs", description: "Technical integration guides" },
              { label: "SDKs", href: "#sdks", description: "Development kits" },
              { label: "Tutorials", href: "#tutorials", description: "Step-by-step guides" }
            ]
          },
          {
            title: "Content",
            items: [
              { label: "Blog", href: "#blog", description: "Healthcare insights" },
              { label: "Case Studies", href: "#cases", description: "Success stories" },
              { label: "Whitepapers", href: "#whitepapers", description: "Industry research" }
            ]
          }
        ]
      }
    },
    { 
      label: "Company", 
      href: "#company",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "About Labstack",
          description: "Mission-driven healthcare technology company",
          href: "#about",
          icon: Info
        },
        sections: [
          {
            title: "Company",
            items: [
              { label: "Our Story", href: "#story", description: "How we started" },
              { label: "Team", href: "#team", description: "Meet our experts" },
              { label: "Careers", href: "#careers", description: "Join our mission" }
            ]
          },
          {
            title: "Connect",
            items: [
              { label: "Contact", href: "#contact", description: "Get in touch" },
              { label: "Support", href: "#support", description: "Help & assistance" },
              { label: "Partnership", href: "#partnership", description: "Collaborate with us" }
            ]
          }
        ]
      }
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto mobile-safe-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png" 
              alt="Labstack Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium mobile-touch-target flex items-center group">
                  <span className="font-body">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>
                
                {/* Beautiful Asymmetrical Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-neural overflow-hidden z-50 animate-scale-in">
                    <div className="grid grid-cols-12 min-h-[400px]">
                      {/* Featured Section - Asymmetrical Large Tile */}
                      <div className="col-span-5 bg-gradient-primary p-8 flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                          <item.dropdown.featured.icon className="w-12 h-12 mb-4 text-white/90" />
                          <h3 className="text-xl font-heading font-bold mb-2">{item.dropdown.featured.title}</h3>
                          <p className="text-white/80 text-sm font-body leading-relaxed mb-6">{item.dropdown.featured.description}</p>
                        </div>
                        <a 
                          href={item.dropdown.featured.href}
                          className="relative z-10 inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
                        >
                          Learn more →
                        </a>
                        {/* Decorative Elements */}
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full"></div>
                      </div>
                      
                      {/* Navigation Sections - Smaller Tiles */}
                      <div className="col-span-7 p-6">
                        <div className="grid grid-cols-2 gap-6 h-full">
                          {item.dropdown.sections.map((section, sectionIdx) => (
                            <div key={section.title} className="flex flex-col">
                              <h4 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                {section.title}
                              </h4>
                              <div className="space-y-3 flex-1">
                                {section.items.map((subItem, idx) => (
                                  <a 
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="group block p-3 rounded-xl hover:bg-accent/50 transition-all duration-200 hover:scale-102"
                                  >
                                    <div className="text-sm font-medium font-body text-foreground group-hover:text-primary transition-colors">
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 font-body">
                                      {subItem.description}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground mobile-touch-target font-body">
              Login
            </Button>
            <Button size="sm" className="btn-gradient mobile-touch-target font-body font-medium">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-muted-foreground hover:text-foreground transition-smooth mobile-touch-target mobile-tap-highlight"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 mobile-safe-bottom">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-smooth mobile-nav-item mobile-tap-highlight font-body"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-center mobile-btn mobile-tap-highlight font-body">
                  Login
                </Button>
                <Button size="sm" className="w-full btn-gradient mobile-btn mobile-tap-highlight font-body font-medium">
                  Book a Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;