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
  role: z.enum(["Nutritionist", "Dietitian", "Health Coach", "Wellness Coach"], { required_error: "Select your role" }),
  fullName: z.string().trim().min(3, "Full name is required").max(100),
  qualification: z.string().trim().min(2, "Qualification is required").max(100),
  certifications: z.string().trim().min(5, "Please list your certifications").max(300),
  experienceYears: z.string().trim().min(1, "Experience years is required"),
  city: z.string().trim().min(2, "City is required").max(50),
  state: z.string().trim().min(2, "State is required").max(50),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid 10-digit phone number").max(15),
  specializations: z.string().trim().min(10, "Please describe your specializations").max(300),
  availability: z.string().trim().min(5, "Please share your availability").max(300),
  message: z.string().trim().max(1000).optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type FormValues = z.infer<typeof schema>;

const NutritionistsForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({ 
    resolver: zodResolver(schema), 
    defaultValues: {
      role: "Nutritionist",
      fullName: "",
      qualification: "",
      certifications: "",
      experienceYears: "",
      city: "",
      state: "",
      email: "",
      phone: "",
      specializations: "",
      availability: "",
      message: "",
      agreeToTerms: false,
      agreeToPrivacy: false,
    }
  });

  useEffect(() => { 
    document.title = "Nutritionist & Health Coach Application – Join Labstack | Labstack"; 
  }, []);

  const onSubmit = (values: FormValues) => {
    console.log("Nutritionist/Coach Application Submission", values);
    toast({ 
      title: "Application received!", 
      description: "Our wellness network team will review your credentials and reach out within 2 business days." 
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
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-4">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary font-medium text-sm">WELLNESS PROFESSIONAL APPLICATION</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-3">
                Join as Nutritionist or Health Coach
              </h1>
              <p className="text-muted-foreground">
                Complete the form below to apply. Our team will verify your credentials and contact you within 2 business days.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card-gradient p-6 rounded-2xl border border-border/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="role" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Role *</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full bg-background border border-border rounded-md p-2.5 text-sm">
                          {["Nutritionist", "Dietitian", "Health Coach", "Wellness Coach"].map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="fullName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="qualification" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Highest Qualification *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., M.Sc. Nutrition" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="experienceYears" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Bangalore" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="state" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Karnataka" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField name="certifications" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certifications *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List your professional certifications (e.g., NASM, ACE, ACSM, Registered Dietitian)" 
                        className="min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="specializations" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas of Specialization *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your specializations (e.g., weight management, sports nutrition, diabetes care, wellness coaching)" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField name="availability" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please share your preferred consultation hours and days" 
                        className="min-h-[80px]" 
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
                        placeholder="Any additional information about your practice or coaching approach" 
                        className="min-h-[80px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

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

export default NutritionistsForm;
