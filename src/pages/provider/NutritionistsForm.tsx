import { useEffect, useState } from "react";
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
import { ArrowRight } from "lucide-react";

const schema = z.object({
  role: z.enum(["Nutritionist", "Dietitian", "Health Coach", "Wellness Coach"], { required_error: "Select your role" }),
  fullName: z.string().trim().min(3, "Full name is required").max(100),
  qualification: z.string().trim().min(2, "Qualification is required").max(100),
  certifications: z.string().trim().max(300).optional(),
  experienceYears: z.string().trim().optional(),
  city: z.string().trim().max(50).optional(),
  state: z.string().trim().max(50),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid 10-digit phone number").max(15),
  specializations: z.string().trim().max(300).optional(),
  availability: z.string().trim().max(300).optional(),
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const fullUrl = `${API_ENDPOINT}/api/dev/forms/nutritionists-form`;

  setIsSubmitting(true);

  try {

    const response = await fetch(fullUrl, {
      method: "POST",
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

                <Button type="submit" size="lg" className="w-full btn-gradient" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
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
