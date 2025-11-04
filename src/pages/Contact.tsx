import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { generateContactPageSchema } from "@/lib/structured-data";
import { Link } from "react-router-dom";

const Contact = () => {
  const structuredData = generateContactPageSchema({
    name: "Contact Labstack",
    url: "https://labstack.in/contact"
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Labstack. Our team is ready to help you launch or scale your healthcare services. Response time within 4 hours."
        keywords="contact labstack, healthcare platform support, labstack sales, healthcare infrastructure inquiry"
        canonical="https://labstack.in/contact"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div className="sr-only" aria-hidden="true" style={{position: 'absolute', left: '-9999px'}}>
          <TLDR 
            summary="Contact Labstack for healthcare infrastructure solutions. Email: contact@labstack.in, Phone: +91 (available on request). Response time within 4 hours. Sales, technical support, and partnership inquiries welcome. Office located in Bangalore, India."
            keyPoints={[
              "Email: contact@labstack.in with 4-hour response time",
              "Sales inquiries for platform demos and pricing",
              "Technical support for integration and API questions",
              "Partnership opportunities for providers and enterprises",
              "Office: Bangalore, India with nationwide operations"
            ]}
          />
        </div>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium text-sm">CONTACT US</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                  Let's Build the Future of <span className="text-gradient">Healthcare Together</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're launching healthcare services or looking to scale, our team is ready to help.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="card-gradient rounded-2xl p-8">
                    <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">Email</h3>
                          <a href="mailto:contact@labstack.in" className="text-muted-foreground hover:text-primary transition-colors">
                            contact@labstack.in
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">We typically respond within 4 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">Phone</h3>
                          <a href="tel:+918047359194" className="text-muted-foreground hover:text-primary transition-colors">
                            080 47359194
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">Office</h3>
                          <p className="text-muted-foreground">
                            Labstack Networks Pvt. Ltd.<br />
                            Bangalore, Karnataka<br />
                            India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">Response Time</h3>
                          <p className="text-muted-foreground">
                            Average response: &lt; 4 hours<br />
                            Demo scheduling: Same day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="card-gradient rounded-2xl p-8">
                    <h3 className="text-xl font-heading font-bold mb-4">Looking for something specific?</h3>
                    <div className="space-y-3">
                      <Link to="/book-demo" className="block p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                        <span className="font-medium">Book a Demo →</span>
                        <p className="text-sm text-muted-foreground mt-1">See the platform in action</p>
                      </Link>
                      <Link to="/start-building" className="block p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                        <span className="font-medium">Start Building →</span>
                        <p className="text-sm text-muted-foreground mt-1">Get API access and start integrating</p>
                      </Link>
                      <Link to="/custom-solutions" className="block p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                        <span className="font-medium">Custom Solutions →</span>
                        <p className="text-sm text-muted-foreground mt-1">Discuss your specific needs</p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map/Image Placeholder */}
                <div className="card-gradient rounded-2xl p-2 lg:p-4 h-full">
                  <div className="bg-muted/30 rounded-xl h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-heading font-bold mb-2">Bangalore, India</h3>
                      <p className="text-muted-foreground mb-6">
                        Building healthcare infrastructure<br />from the heart of India's tech capital
                      </p>
                      <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span className="text-success font-medium text-sm">We're Hiring!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
