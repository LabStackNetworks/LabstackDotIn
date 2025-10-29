import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = {
    platform: [
      { name: "Overview", href: "/platform-overview" },
      { name: "Diagnostics", href: "/platform/diagnostics" },
      { name: "Consultations", href: "/platform/consultations" },
      { name: "Pharmacy", href: "/platform/pharmacy" },
      { name: "Specialized Networks", href: "/platform/specialized-networks" },
      { name: "Integrations", href: "/platform/integrations" }
    ],
    solutions: [
      { name: "Healthcare Infrastructure", href: "/solutions/healthcare-infrastructure" },
      { name: "Digital Platform", href: "/solutions/digital-platform" },
      { name: "API Solutions", href: "/solutions/api-solutions" },
      { name: "Coverage Expansion", href: "/solutions/coverage-expansion" }
    ],
    whoWeServe: [
      { name: "Insurers & TPAs", href: "/who-we-serve/insurers-tpas" },
      { name: "Brokers & Aggregators", href: "/who-we-serve/brokers-aggregators" },
      { name: "Disease Management", href: "/who-we-serve/disease-management" },
      { name: "Digital Health Platforms", href: "/who-we-serve/digital-health-platforms" },
      { name: "Providers", href: "/who-we-serve/providers" }
    ],
    providers: [
      { name: "Hospitals & Labs", href: "/join-network/hospitals-labs" },
      { name: "Nurses & Phlebotomists", href: "/join-network/field-staff" },
      { name: "Join Network", href: "/join-network/providers" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#cases" },
      { name: "Whitepapers", href: "#whitepapers" },
      { name: "API Documentation", href: "#docs" },
      { name: "Support", href: "#support" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Book Demo", href: "/book-demo" },
      { name: "Start Building", href: "/start-building" }
    ]
  };

  const social = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png" 
                  alt="Labstack Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                The growth engine for healthcare. Launch diagnostics, consultations, pharmacy, 
                and home care services across 9,000+ pincodes. One API, one platform.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@labstack.in</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 80 4040 2030</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {social.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-primary hover:text-white transition-smooth flex items-center justify-center group"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Platform</h3>
                  <ul className="space-y-3">
                    {navigation.platform.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        {item.href.startsWith('/') ? (
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Who We Serve</h3>
                  <ul className="space-y-3">
                    {navigation.whoWeServe.map((item) => (
                      <li key={item.name}>
                        {item.href.startsWith('/') ? (
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Providers</h3>
                  <ul className="space-y-3">
                    {navigation.providers.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
                  <ul className="space-y-3">
                     {navigation.company.map((item) => (
                      <li key={item.name}>
                        {item.href.startsWith('/') ? (
                          <Link
                            to={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-foreground transition-smooth">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-foreground transition-smooth">Terms of Service</Link>
              <Link to="/partner-terms" className="hover:text-foreground transition-smooth">Partner Terms</Link>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 Labstack Networks Pvt. Ltd.</p>
              <p className="mt-1">
                Built with code, coffee ☕ and love ❤️ in Bangalore
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;