import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const benefits = [
    "See Labstack in action across diagnostics, pharmacy, and home care",
    "Discuss your specific use case and integration needs",
    "Get custom pricing based on your scale",
    "14-day average go-live timeline"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Left Column - Info */}
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium text-sm">BOOK A DEMO</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                  See Healthcare Infrastructure <span className="text-gradient">in Action</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8">
                  Discover how Labstack powers healthcare delivery at scale. Get a personalized walkthrough of our platform.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-hero rounded-2xl p-6 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Average Response Time</p>
                  <p className="text-2xl font-heading font-bold text-gradient">&lt; 4 hours</p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-card-gradient rounded-3xl p-8 lg:p-12 shadow-card border border-border/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="What healthcare services are you looking to launch or scale?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-gradient text-lg py-6 h-auto">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground/60 text-center">
                    Free consultation • No commitment required
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;
