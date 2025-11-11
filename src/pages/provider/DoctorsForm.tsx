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

const schema = z.object({
  fullName: z.string().trim().min(3, "Full name is required").max(100),
  specialty: z.string().trim().max(50).optional(),
  qualification: z.string().trim().max(100).optional(),
  registrationNo: z.string().trim().max(50).optional(),
  experienceYears: z.string().trim().max(50).optional(),
  city: z.string().trim().max(50).optional(),
  state: z.string().trim().max(50).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid 10-digit phone number").max(15),
  consultationTypes: z.string().trim().max(200).optional(),
  availability: z.string().trim().max(300).optional(),
  message: z.string().trim().max(1000).optional(),
  agreeToTerms: z.boolean(),
  agreeToPrivacy: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const DoctorsForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({ 
    resolver: zodResolver(schema), 
    defaultValues: {
      fullName: "",
      specialty: "",
      qualification: "",
      registrationNo: "",
      experienceYears: "",
      city: "",
      state: "",
      email: "",
      phone: "",
      consultationTypes: "",
      availability: "",
      message: "",
      agreeToTerms: false,
      agreeToPrivacy: false,
    }
  });

  useEffect(() => { 
    document.title = "Doctor Application – Join Labstack Medical Network | Labstack"; 
  }, []);

  const onSubmit = async (values: FormValues) => {
    // Check if API endpoint is configured
    const API_ENDPOINT = "http://localhost:3000"; // Replace with actual environment variable if needed
    
    if (!API_ENDPOINT) {
      console.error("API endpoint not configured");
      toast({ 
        title: "Configuration Error", 
        description: "API endpoint is not configured. Please contact support.",
        variant: "destructive" 
      });
      return;
    }

    const fullUrl = `${API_ENDPOINT}/api/dev/forms/doctor-application`;
    
    setIsSubmitting(true);
    
    try {
      console.log("Sending data to:", fullUrl);
      console.log("Data:", values);
      
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("Response data:", data);
      
      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          toast({ 
            title: "Too Many Requests", 
            description: data.message || "Please wait before submitting again.",
            variant: "destructive" 
          });
        } else if (response.status === 400) {
          const errorMsg = data.errors?.join(", ") || data.message || "Validation error occurred";
          toast({ 
            title: "Validation Error", 
            description: errorMsg,
            variant: "destructive" 
          });
        } else {
          throw new Error(data.message || "Failed to submit application.");
        }
        return;
      }

      // Success
      toast({ 
        title: "Application received!", 
        description: data.message || "Our medical network team will review your credentials and reach out within 2 business days." 
      });
      form.reset();

    } catch (error) {
      console.error("Submission error:", error);
      // Network or unexpected errors
      const errorMessage = error instanceof Error ? error.message : "Failed to submit application. Please check your connection and try again.";
      toast({ 
        title: "Error", 
        description: errorMessage, 
        variant: "destructive" 
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
                <span className="text-secondary font-medium text-sm">DOCTOR APPLICATION</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-3">
                Join Labstack Medical Network
              </h1>
              <p className="text-muted-foreground">
                Complete the form below to apply. Our team will verify your credentials and contact you within 2 business days.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card-gradient p-6 rounded-2xl border border-border/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="fullName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="specialty" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specialty *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Cardiology" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="qualification" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qualification *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., MBBS, MD" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="registrationNo" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>MCI/State Registration No *</FormLabel>
                      <FormControl>
                        <Input placeholder="Medical registration number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="experienceYears" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="consultationTypes" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consultation Types *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Tele, In-person, Both" {...field} />
                      </FormControl>
                      <FormDescription>Teleconsultation, In-person, or Both</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Delhi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="state" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Delhi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="doctor@example.com" {...field} />
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

                <FormField name="availability" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please share your preferred consultation hours and days (e.g., Mon-Fri 10 AM - 2 PM)" 
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
                        placeholder="Any additional information about your practice or special interests" 
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-gradient" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default DoctorsForm;