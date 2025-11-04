import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building2, Users, Stethoscope, FileText, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

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
          title: "Complete Healthcare Platform",
          description: "End-to-end healthcare infrastructure and services",
          href: "/platform-overview",
          icon: Building2
        },
        sections: [
          {
            title: "Core Services",
            items: [
              { label: "Overview", href: "/platform-overview", description: "Platform introduction" },
              { label: "Diagnostics", href: "/platform/diagnostics", description: "Lab tests & imaging" },
              { label: "Consultations", href: "/platform/consultations", description: "Virtual & in-person" },
              { label: "Pharmacy", href: "/platform/pharmacy", description: "Medicine delivery" }
            ]
          },
          {
            title: "Advanced Features",
            items: [
              { label: "Specialized Networks", href: "/platform/specialized-networks", description: "Expert care networks" },
              { label: "Integrations", href: "/platform/integrations", description: "Third-party connections" }
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
          title: "Healthcare Solutions",
          description: "Comprehensive solutions for modern healthcare delivery",
          href: "/solutions",
          icon: Users
        },
        sections: [
          {
            title: "Platform Solutions",
            items: [
              { label: "Solutions Overview", href: "/solutions", description: "Explore all solutions" },
              { label: "Healthcare Infrastructure", href: "/solutions/healthcare-infrastructure", description: "Complete healthcare backbone" },
              { label: "Digital Platform", href: "/solutions/digital-platform", description: "End-to-end digital solutions" },
              { label: "API Solutions", href: "/solutions/api-solutions", description: "Developer-first integrations" },
              { label: "Coverage Expansion", href: "/solutions/coverage-expansion", description: "Scale to new markets" }
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
          description: "Serving startups, enterprises, and healthcare providers",
          href: "/who-we-serve",
          icon: Stethoscope
        },
        sections: [
          {
            title: "Technology Partners",
            items: [
              { label: "Healthcare Ecosystem", href: "/who-we-serve", description: "Platform overview" },
              { label: "Insurers & TPAs", href: "/who-we-serve/insurers-tpas", description: "Insurance companies" },
              { label: "InsureTech", href: "/who-we-serve/insuretech", description: "Digital insurance platforms" },
              { label: "Brokers & Corporate Wellness", href: "/who-we-serve/brokers-corporate-wellness", description: "Insurance & wellness programs" },
              { label: "Disease Management", href: "/who-we-serve/disease-management", description: "Chronic care platforms" },
              { label: "Digital Health Platforms", href: "/who-we-serve/digital-health-platforms", description: "Health tech companies" }
            ]
          }
        ]
      }
    },
    { 
      label: "Providers", 
      href: "#providers",
      hasDropdown: true,
      dropdown: {
        featured: {
          title: "Provider Network",
          description: "Grow your practice with India's largest healthcare network",
          href: "/provider",
          icon: Users
        },
        sections: [
          {
            title: "Healthcare Professionals",
            items: [
              { label: "Overview", href: "/provider", description: "Provider network benefits" },
              { label: "Hospitals & Labs", href: "/provider/hospitals-labs", description: "Diagnostic centers & hospitals" },
              { label: "Doctors", href: "/provider/doctors", description: "Medical practitioners" },
              { label: "Nutritionists & Health Coaches", href: "/provider/nutritionists-health-coaches", description: "Wellness professionals" },
              { label: "Nurses & Phlebotomists", href: "/provider/field-staff", description: "Field healthcare staff" },
              { label: "Join Network", href: "/provider/join-network", description: "Apply to join our network" }
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
          description: "Resources, insights, and healthcare expertise",
          href: "#knowledge-hub",
          icon: FileText
        },
        sections: [
          {
            title: "Content & Insights",
            items: [
              { label: "Blog / Knowledge Hub", href: "/resources/blog", description: "Healthcare insights & trends" },
              { label: "Research & Case Studies", href: "/resources/research-hub", description: "Success stories & research" },
              { label: "API Documentation", href: "/resources/api-documentation-coming-soon", description: "Technical documentation" }
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
          href: "/about",
          icon: Info
        },
        sections: [
          {
            title: "Company Info",
            items: [
              { label: "About Us", href: "/about", description: "Our mission & vision" },
              { label: "Contact", href: "/contact", description: "Get in touch with us" }
            ]
          },
          {
            title: "Legal & Utilities",
            items: [
              { label: "API Docs", href: "/resources/api-documentation-coming-soon", description: "Technical documentation" },
              { label: "Privacy Policy", href: "/privacy-policy", description: "Data protection policy" },
              { label: "Terms of Service", href: "/terms-conditions", description: "Service terms" },
              { label: "Partner Terms", href: "/partner-terms", description: "Partnership conditions" },
              { label: "Careers", href: "/careers", description: "Join our team" }
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
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png" 
              alt="Labstack - Healthcare Growth Operating System" 
              className="h-8 w-auto"
              loading="eager"
            />
          </Link>

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
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-neural overflow-hidden z-50 animate-scale-in">
                    <div className="grid grid-cols-12 min-h-[400px]">
                      {/* Featured Section */}
                      <div className="col-span-5 bg-gradient-primary p-8 flex flex-col justify-between text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                          <item.dropdown.featured.icon className="w-12 h-12 mb-4 text-white/90" />
                          <h3 className="text-xl font-heading font-bold mb-2">{item.dropdown.featured.title}</h3>
                          <p className="text-white/80 text-sm font-body leading-relaxed mb-6">{item.dropdown.featured.description}</p>
                        </div>
                        {item.dropdown.featured.href.startsWith('/') ? (
                          <Link 
                            to={item.dropdown.featured.href}
                            className="relative z-10 inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
                          >
                            Learn more →
                          </Link>
                        ) : (
                          <a 
                            href={item.dropdown.featured.href}
                            className="relative z-10 inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors"
                          >
                            Learn more →
                          </a>
                        )}
                        {/* Decorative Elements */}
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full"></div>
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full"></div>
                      </div>
                      
                      {/* Navigation Sections */}
                      <div className="col-span-7 p-6">
                        <div className="grid grid-cols-2 gap-6 h-full">
                          {item.dropdown.sections.map((section, sectionIdx) => (
                            <div key={section.title} className="flex flex-col">
                              <h4 className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                {section.title}
                              </h4>
                              <div className="space-y-3 flex-1">
                                {section.items.map((subItem) => (
                                  subItem.href.startsWith('/') ? (
                                    <Link 
                                      key={subItem.label}
                                      to={subItem.href}
                                      className="group block p-3 rounded-xl hover:bg-accent/50 transition-all duration-200 hover:scale-102"
                                    >
                                      <div className="text-sm font-medium font-body text-foreground group-hover:text-primary transition-colors">
                                        {subItem.label}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-1 font-body">
                                        {subItem.description}
                                      </div>
                                    </Link>
                                  ) : (
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
                                  )
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
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground mobile-touch-target font-body">
                Login
              </Button>
            </Link>
            <Link to="/book-demo">
              <Button size="sm" className="btn-gradient mobile-touch-target font-body font-medium">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Actions: Theme + Menu */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-muted-foreground hover:text-foreground transition-smooth mobile-touch-target mobile-tap-highlight"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 mobile-safe-bottom max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="px-4 py-2">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{item.label}</h3>
                    {item.hasDropdown && item.dropdown && (
                      <div className="space-y-2 pl-2">
                        {item.dropdown.sections.map((section) => (
                          <div key={section.title} className="space-y-1">
                            {section.items.map((subItem) => (
                              subItem.href.startsWith('/') ? (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-smooth mobile-tap-highlight"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ) : (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-smooth mobile-tap-highlight"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </a>
                              )
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-border/50">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-center mobile-btn mobile-tap-highlight font-body">
                    Login
                  </Button>
                </Link>
                <Link to="/book-demo" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full btn-gradient mobile-btn mobile-tap-highlight font-body font-medium">
                    Book a Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;