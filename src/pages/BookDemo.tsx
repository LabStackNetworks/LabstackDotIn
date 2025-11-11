import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Calendar, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import TLDR from "@/components/design-system/TLDR";
import { generateContactPageSchema } from "@/lib/structured-data";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(2, "Company name is required").max(150),
  phone: z.string().trim().max(20).optional(),
  companySize: z.string().trim().max(50).optional(),
  useCase: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const BookDemo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      companySize: "",
      useCase: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title = "Book a Demo | Labstack";
  }, []);

  const onSubmit = async (values: FormValues) => {
    const API_ENDPOINT = "http://localhost:3000"; // move to env var later
    if (!API_ENDPOINT) {
      toast({
        title: "Configuration Error",
        description: "API endpoint not configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    const fullUrl = `${API_ENDPOINT}/api/dev/forms/book-demo`;
    setIsSubmitting(true);

    try {
      console.log("Submitting demo request to:", fullUrl);
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 429) {
          toast({
            title: "Too Many Requests",
            description: data.message || "Please wait before submitting again.",
            variant: "destructive",
          });
        } else if (response.status >= 400 && response.status < 500) {
          toast({
            title: "Submission Error",
            description:
              data.message ||
              "Invalid input or request. Please check the form details and try again.",
            variant: "destructive",
          });
        } else {
          throw new Error(data.message || "Unexpected server error occurred.");
        }
        return;
      }

      toast({
        title: "Demo Request Received!",
        description:
          data.message ||
          "Our team will reach out within 4 hours to schedule your personalized demo.",
      });

      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: Zap, text: "See the platform in action across diagnostics, pharmacy, and home care" },
    { icon: Users, text: "Discuss your specific use case and integration needs" },
    { icon: CheckCircle, text: "Get custom pricing based on your scale" },
    { icon: Calendar, text: "14-day average go-live timeline" },
  ];

  const structuredData = generateContactPageSchema({
    name: "Book a Demo - Labstack",
    url: "https://labstack.in/book-demo",
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Book a Demo"
        description="See Labstack's healthcare infrastructure platform in action. Schedule a personalized demo to discuss your specific needs and integration options."
        keywords="healthcare platform demo, labstack demo, healthcare API demo, diagnostics platform demonstration"
        canonical="https://labstack.in/book-demo"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hidden TL;DR for AI crawlers */}
        <div
          className="sr-only"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        >
          <TLDR
            summary="Book a personalized demo of Labstack's healthcare infrastructure platform. See diagnostics, pharmacy, consultations, and home care services in action. Discuss your specific use case, integration options, and custom pricing. Average 14-day go-live timeline."
            keyPoints={[
              "Live platform demonstration across all services",
              "Discuss specific use case and integration needs",
              "Custom pricing based on your scale",
              "14-day average go-live timeline",
              "Technical team available for architecture discussions",
            ]}
          />
        </div>

        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-medium text-sm">BOOK A DEMO</span>
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                    See Healthcare Infrastructure{" "}
                    <span className="text-gradient">in Action</span>
                  </h1>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Discover how Labstack powers healthcare delivery at scale. Get a personalized walkthrough.
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-xl bg-card/50 border border-border/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed pt-2">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

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

                <div className="card-gradient rounded-xl p-6 border border-border/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card"></div>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-card"></div>
                      <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-card"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Join 50+ Healthcare Companies</p>
                      <p className="text-xs text-muted-foreground">
                        Powering care delivery across India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-3 bg-card-gradient rounded-3xl p-6 lg:p-10 shadow-card border border-border/20">
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-bold mb-2">
                    Schedule Your Demo
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and we'll be in touch within 4 hours
                  </p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <input type="hidden" name="_subject" value="Demo Request - Book Demo Page" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input placeholder="Your full name" {...form.register("name")} />
                    </div>
                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input type="email" placeholder="your.email@company.com" {...form.register("email")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input placeholder="Your Company" {...form.register("company")} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" placeholder="+91 98765 43210" {...form.register("phone")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="companySize">Company Size</Label>
                      <select
                        {...form.register("companySize")}
                        className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="useCase">Primary Use Case</Label>
                      <select
                        {...form.register("useCase")}
                        className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select use case</option>
                        <option value="diagnostics">Diagnostics Network</option>
                        <option value="pharmacy">Pharmacy Services</option>
                        <option value="telehealth">Telehealth Platform</option>
                        <option value="insurance">Insurance/TPA</option>
                        <option value="corporate">Corporate Wellness</option>
                        <option value="disease-mgmt">Disease Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <textarea
                      {...form.register("message")}
                      rows={4}
                      placeholder="What healthcare services are you looking to launch or scale?"
                      className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-gradient text-base py-6 h-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Schedule Demo"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
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
