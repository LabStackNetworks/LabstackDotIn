import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  role: z.enum(["Phlebotomist", "Nurse"], { required_error: "Select your role" }),
  fullName: z.string().min(2, "Full name is required"),
  city: z.string().min(2, "City is required"),
  experienceYears: z.string().min(1, "Enter years of experience"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  availability: z.string().min(2, "Please share availability"),
  certifications: z.string().optional(),
  message: z.string().optional(),
  agreeToPartnerTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Partner Terms & Conditions",
  }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  })
});

type FormValues = z.infer<typeof schema>;

const FieldStaffJoin = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: {
    role: "Phlebotomist",
    fullName: "",
    city: "",
    experienceYears: "",
    email: "",
    phone: "",
    availability: "",
    certifications: "",
    message: "",
    agreeToPartnerTerms: false,
    agreeToTerms: false,
    agreeToPrivacy: false,
  }});

  useEffect(() => { document.title = "Join the Network – Phlebotomists & Nurses | Labstack"; }, []);

const onSubmit = async (values: FormValues) => {
  const API_ENDPOINT = "http://localhost:3000"; // Move to env var later

  if (!API_ENDPOINT) {
    toast({
      title: "Configuration Error",
      description: "API endpoint is not configured. Please contact support.",
      variant: "destructive",
    });
    return;
  }

  const fullUrl = `${API_ENDPOINT}/api/dev/forms/field-staff-application`;

  setIsSubmitting(true);

  try {
    console.log("Submitting field staff data to:", fullUrl);

    const response = await fetch(fullUrl, {
      method: "POST",
      body: JSON.stringify(values), // If backend expects multipart/form-data
      // If backend expects JSON instead, use:
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(payload),
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
            "Invalid input. Please check your form details and try again.",
          variant: "destructive",
        });
      } else {
        throw new Error(data.message || "Unexpected server error occurred.");
      }
      return;
    }

    toast({
      title: "Application Received!",
      description:
        data.message ||
        "Our team will reach out within 2 business days.",
    });

    form.reset();
  } catch (error) {
    console.error("Submission error:", error);
    toast({
      title: "Error",
      description:
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please check your connection and try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const structuredData = [
    generateServiceSchema({
      name: "Field Staff Network - Phlebotomists & Nurses",
      description: "Join Labstack field staff network for regular work assignments across 9,000+ pincodes with timely payments.",
      url: "https://labstack.in/provider/field-staff"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://labstack.in" },
      { name: "Providers", url: "https://labstack.in/provider" },
      { name: "Field Staff", url: "https://labstack.in/provider/field-staff" }
    ])
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Join Field Staff Network - Phlebotomists & Nurses | Labstack"
        description="Join Labstack's field staff network. Get regular work assignments across 9,000+ pincodes with timely payments and professional support."
        keywords="phlebotomist jobs India, nursing jobs India, healthcare field staff, medical technician jobs, home healthcare jobs"
        canonical="https://labstack.in/provider/field-staff"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">JOIN THE NETWORK</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-3">Paramedics: Phlebotomists & Nurses</h1>
              <p className="text-muted-foreground">Apply to join our network. We work with top providers nationwide.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card-gradient p-6 rounded-2xl border border-border/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="role" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full bg-background border border-border rounded-md p-2.5 text-sm">
                          {(["Phlebotomist","Nurse"] as const).map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormDescription>Select the role you are applying for</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="fullName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Pune" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="experienceYears" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of experience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g., +91 98XXXXXXX" autoComplete="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField name="availability" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 6 days/week, 7am to 3pm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="certifications" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certifications (optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="List relevant certifications" rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />


                <FormField name="message" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Anything else we should know?" rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="space-y-4 pt-4 border-t border-border/20">
                  <FormField name="agreeToPartnerTerms" control={form.control} render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I have read and agree to the{" "}
                          <Link to="/partner-terms" target="_blank" className="text-primary hover:underline">
                            Labstack Partner Terms & Conditions
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )} />

                  <FormField name="agreeToTerms" control={form.control} render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I agree to the{" "}
                          <Link to="/terms-conditions" className="text-primary hover:underline" target="_blank">
                            Terms of Service
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )} />

                  <FormField name="agreeToPrivacy" control={form.control} render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I agree to the{" "}
                          <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                            Privacy Policy
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )} />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">We never share your details. By submitting, you agree to be contacted about onboarding.</p>
                  <Button type="submit" size="lg" className="btn-gradient" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Provider organization? <Link to="/provider/join-network" className="story-link text-foreground">Apply here</Link>.
                </div>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FieldStaffJoin;
