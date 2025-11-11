import { useState, useEffect } from "react";
import { Code, Zap, ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/* --------------------------- ✅ Zod Schema --------------------------- */
const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s+()-]{7,15}$/.test(val),
      "Enter a valid phone number"
    ),
  apiInterest: z.string().min(1, "Please select your API interest"),
  message: z.string().max(1000, "Message should be under 1000 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

const StartBuilding = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      apiInterest: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title = "Start Building | Labstack";
  }, []);

  /* --------------------------- ✅ Submit Handler --------------------------- */
  const onSubmit = async (values: FormValues) => {
    const API_ENDPOINT = "http://localhost:3000"; // Move to env var later
    const fullUrl = `${API_ENDPOINT}/api/dev/forms/start-building-form`;

    setIsSubmitting(true);

    try {
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
            description:
              data.message || "Please wait before submitting again.",
            variant: "destructive",
          });
        } else if (response.status >= 400 && response.status < 500) {
          toast({
            title: "Submission Error",
            description:
              data.message ||
              "Invalid input. Please check your form details and try again.",
            variant: "destructive",
          });
        } else {
          throw new Error(data.message || "Unexpected server error occurred.");
        }
        return;
      }

      toast({
        title: "Request Received!",
        description:
          data.message ||
          "We'll send your sandbox credentials and API documentation within 2 hours.",
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

  /* --------------------------- ✅ UI Rendering --------------------------- */
  const quickstartSteps = [
    {
      step: "1",
      title: "Sign up & Get API Keys",
      description:
        "Create your account and receive sandbox credentials instantly",
      time: "2 min",
    },
    {
      step: "2",
      title: "Integrate APIs",
      description:
        "Use our RESTful APIs to connect diagnostics, pharmacy, and consults",
      time: "1-2 days",
    },
    {
      step: "3",
      title: "Configure Workflows",
      description:
        "Set up service areas, pricing, and care journeys via console",
      time: "3-5 days",
    },
    {
      step: "4",
      title: "Go Live",
      description: "Launch with full network access and real-time support",
      time: "14 days avg",
    },
  ];

  const features = [
    {
      icon: Code,
      title: "Developer-Friendly APIs",
      description: "Modern RESTful APIs with comprehensive docs",
    },
    {
      icon: Zap,
      title: "Instant Sandbox Access",
      description: "Test all features in sandbox before going live",
    },
    {
      icon: Calendar,
      title: "14-Day Go-Live",
      description:
        "Launch healthcare services in 14 days vs 12–18 months normally",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium text-sm">
                    START BUILDING
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                  Launch Healthcare Services{" "}
                  <span className="text-gradient">in 14 Days</span>
                </h1>

                <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Skip 12–18 months of infrastructure building. Integrate once,
                  access nationwide healthcare delivery.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="card-gradient p-6 rounded-2xl text-center border border-border/20"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-heading font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="bg-card-gradient rounded-3xl p-8 lg:p-12 shadow-card border border-border/20 mb-16">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-3">
                      Get Sandbox Access & API Keys
                    </h2>
                    <p className="text-muted-foreground">
                      Start integrating in minutes. We'll send you sandbox
                      credentials instantly.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          name="name"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          name="email"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your.email@company.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          name="company"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          name="phone"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+91 98765 43210"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        name="apiInterest"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>API Interest</FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="What are you building?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="diagnostics">
                                    Diagnostics Integration
                                  </SelectItem>
                                  <SelectItem value="pharmacy">
                                    Pharmacy Network
                                  </SelectItem>
                                  <SelectItem value="telehealth">
                                    Telehealth Platform
                                  </SelectItem>
                                  <SelectItem value="full-stack">
                                    Full Healthcare Stack
                                  </SelectItem>
                                  <SelectItem value="prescription">
                                    Prescription Monetization
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="message"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Technical Requirements (Optional)</FormLabel>
                            <FormControl>
                              <textarea
                                rows={3}
                                placeholder="Tell us about your technical setup and integration needs..."
                                className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full btn-gradient text-base py-6 h-auto"
                      >
                        {isSubmitting ? "Submitting..." : "Get Sandbox Access"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-xs text-muted-foreground/60 text-center">
                        Sandbox credentials sent instantly • API docs included •
                        No credit card required
                      </p>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Quickstart Steps */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
                  Your Path to{" "}
                  <span className="text-gradient">Go-Live</span>
                </h2>

                <div className="space-y-6">
                  {quickstartSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-6 items-start bg-card-gradient p-6 rounded-2xl border border-border/20"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <h3 className="text-lg lg:text-xl font-heading font-bold">
                            {step.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-success/10 border border-success/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-success mb-1">
                        14 Days Average Go-Live
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Most B2B healthcare companies spend 12–18 months
                        building infrastructure. With Labstack, you're live in
                        14 days.
                      </p>
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

export default StartBuilding;
