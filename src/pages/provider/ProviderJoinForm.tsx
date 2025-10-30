import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  providerType: z.enum([
    "Hospital", 
    "Diagnostic Lab", 
    "Clinic", 
    "Imaging Center",
    "Doctor",
    "Nutritionist/Dietitian",
    "Health Coach",
    "Pharmacy",
    "Home Care Services",
    "Nurse/Phlebotomist",
    "Other"
  ], { required_error: "Select provider type" }),
  orgName: z.string().trim().min(2, "Organization/Name is required").max(100),
  city: z.string().trim().min(2, "City is required").max(50),
  state: z.string().trim().min(2, "State is required").max(50),
  contactName: z.string().trim().min(2, "Contact person name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid 10-digit phone number").max(15),
  services: z.string().trim().min(10, "Please describe your services (minimum 10 characters)").max(500),
  message: z.string().trim().max(1000).optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type FormValues = z.infer<typeof schema>;

const ProviderJoinForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({ 
    resolver: zodResolver(schema), 
    defaultValues: {
      providerType: "Diagnostic Lab",
      orgName: "",
      city: "",
      state: "",
      contactName: "",
      email: "",
      phone: "",
      services: "",
      message: "",
      agreeToTerms: false,
      agreeToPrivacy: false,
    }
  });

  useEffect(() => { 
    document.title = "Join Labstack Provider Network | Apply Now"; 
  }, []);

  const onSubmit = (values: FormValues) => {
    console.log("Provider Network Application Submission", values);
    toast({ 
      title: "Application received!", 
      description: "Our partnership team will review your application and reach out within 2 business days." 
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">JOIN OUR NETWORK</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-3">
                Become a Labstack Provider
              </h1>
              <p className="text-muted-foreground">
                Join India's largest healthcare network. Fill capacity, increase revenue, and access B2B demand with guaranteed payments.
              </p>
            </div>

            <div className="bg-card-gradient rounded-2xl p-6 border border-border/20 mb-8">
              <h2 className="text-xl font-heading font-bold mb-4">What You Get:</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span className="text-success">✓</span>
                  <span>Steady B2B demand from insurers, corporate wellness & digital health platforms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-success">✓</span>
                  <span>15-day payment cycles with transparent invoicing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-success">✓</span>
                  <span>Operational support and automated workflows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-success">✓</span>
                  <span>No exclusivity - maintain your independence</span>
                </li>
              </ul>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card-gradient p-6 rounded-2xl border border-border/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="providerType" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Provider Type *</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full bg-background border border-border rounded-md p-2.5 text-sm">
                          {[
                            "Hospital", 
                            "Diagnostic Lab", 
                            "Clinic", 
                            "Imaging Center",
                            "Doctor",
                            "Nutritionist/Dietitian",
                            "Health Coach",
                            "Pharmacy",
                            "Home Care Services",
                            "Nurse/Phlebotomist",
                            "Other"
                          ].map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormDescription>Select the type of healthcare service you provide</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="orgName" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Organization / Your Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., City Diagnostics or your full name" {...field} />
                      </FormControl>
                      <FormDescription>Enter your organization name or your full name if individual practitioner</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Mumbai" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="state" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Maharashtra" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="contactName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField name="services" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe the healthcare services you provide, specializations, service areas, etc." 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="message" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any additional information you'd like to share about your practice or requirements" 
                        className="min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Next Steps:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Our team will review your application within 2 business days</li>
                    <li>We'll schedule a call to discuss partnership details</li>
                    <li>Complete credential verification and onboarding</li>
                    <li>Go live and start receiving orders</li>
                  </ol>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/20">
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

                <Button type="submit" size="lg" className="w-full btn-gradient">
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderJoinForm;
