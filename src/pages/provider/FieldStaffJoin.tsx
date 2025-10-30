import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  }),
});

type FormValues = z.infer<typeof schema>;

const FieldStaffJoin = () => {
  const { toast } = useToast();
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

  const onSubmit = (values: FormValues) => {
    console.log("Field Staff Join Submission", values);
    toast({ title: "Application received", description: "Our team will reach out within 2 business days." });
    form.reset({ ...values, fullName: "", city: "", experienceYears: "", email: "", phone: "", availability: "", certifications: "", message: "", agreeToTerms: false });
  };

  return (
    <div className="min-h-screen bg-background">
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
                      <Input placeholder="e.g., 6 days/week, 7am–3pm" {...field} />
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
                  <Button type="submit" size="lg" className="btn-gradient">Submit Application</Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Provider organization? <a href="/join-network/providers" className="story-link text-foreground">Apply here</a>.
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
