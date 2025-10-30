import { useState } from "react";
import { ArrowRight, CheckCircle, Calendar, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const BookDemo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    useCase: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received!",
      description: "Our team will reach out within 4 hours to schedule your personalized demo.",
    });
    console.log("Form submitted:", formData);
  };

  const benefits = [
    { icon: Zap, text: "See the platform in action across diagnostics, pharmacy, and home care" },
    { icon: Users, text: "Discuss your specific use case and integration needs" },
    { icon: CheckCircle, text: "Get custom pricing based on your scale" },
    { icon: Calendar, text: "14-day average go-live timeline" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Book a Demo"
        description="See Labstack's healthcare infrastructure platform in action. Schedule a personalized demo to discuss your specific needs and integration options."
        keywords="healthcare platform demo, labstack demo, healthcare API demo, diagnostics platform demonstration"
        canonical="https://labstack.in/book-demo"
      />
      <Header />
      <main className="pt-20">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Left Column - Info (2 columns) */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-medium text-sm">BOOK A DEMO</span>
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                    See Healthcare Infrastructure <span className="text-gradient">in Action</span>
                  </h1>

                  <p className="text-base lg:text-lg text-muted-foreground">
                    Discover how Labstack powers healthcare delivery at scale. Get a personalized walkthrough.
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-card/50 border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed pt-2">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-hero rounded-xl p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Response Time</p>
                    <p className="text-xl font-heading font-bold text-gradient">&lt; 4 hours</p>
                  </div>
                  <div className="bg-gradient-hero rounded-xl p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Go-Live Time</p>
                    <p className="text-xl font-heading font-bold text-gradient">14 days avg</p>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="card-gradient rounded-xl p-6 border border-border/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-card"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-card"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Join 50+ Healthcare Companies</p>
                      <p className="text-xs text-muted-foreground">Powering care delivery across India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form (3 columns) */}
              <div className="lg:col-span-3 bg-card-gradient rounded-3xl p-6 lg:p-10 shadow-card border border-border/20">
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-bold mb-2">Schedule Your Demo</h2>
                  <p className="text-sm text-muted-foreground">Fill out the form and we'll be in touch within 4 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">Company *</Label>
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
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="companySize" className="text-sm font-medium">Company Size</Label>
                      <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="useCase" className="text-sm font-medium">Primary Use Case</Label>
                      <Select value={formData.useCase} onValueChange={(value) => setFormData({ ...formData, useCase: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select use case" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diagnostics">Diagnostics Network</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy Services</SelectItem>
                          <SelectItem value="telehealth">Telehealth Platform</SelectItem>
                          <SelectItem value="insurance">Insurance/TPA</SelectItem>
                          <SelectItem value="corporate">Corporate Wellness</SelectItem>
                          <SelectItem value="disease-mgmt">Disease Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Tell us about your needs</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="What healthcare services are you looking to launch or scale?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-gradient text-base py-6 h-auto">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground/60 text-center">
                    Free consultation • No commitment required • Response within 4 hours
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
