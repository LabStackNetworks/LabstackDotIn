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
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  orgType: z.enum(["Lab", "Hospital", "Clinic", "Doctor"], { required_error: "Select organization type" }),
  orgName: z.string().min(2, "Organization name is required"),
  city: z.string().min(2, "City is required"),
  contactName: z.string().min(2, "Contact person is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  services: z.string().min(2, "Tell us your services"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const ProvidersJoin = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: {
    orgType: "Lab",
    orgName: "",
    city: "",
    contactName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  }});

  useEffect(() => { document.title = "Join the Network – Providers | Labstack"; }, []);

  const onSubmit = (values: FormValues) => {
    console.log("Providers Join Submission", values);
    toast({ title: "Application received", description: "Our team will reach out within 2 business days." });
    form.reset({ ...values, orgName: "", city: "", contactName: "", email: "", phone: "", services: "", message: "" });
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
                <span className="text-primary font-medium text-sm">JOIN THE NETWORK</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-3">Providers: Labs, Hospitals, Clinics, Doctors</h1>
              <p className="text-muted-foreground">Tell us a bit about your organization and we’ll get you onboarded.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card-gradient p-6 rounded-2xl border border-border/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="orgType" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization type</FormLabel>
                      <FormControl>
                        <select {...field} className="w-full bg-background border border-border rounded-md p-2.5 text-sm">
                          {(["Lab","Hospital","Clinic","Doctor"] as const).map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </FormControl>
                      <FormDescription>Select the most appropriate category</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="orgName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Sunrise Labs Pvt Ltd" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Bengaluru" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="contactName" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact person</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="name@company.com" autoComplete="email" {...field} />
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

                <FormField name="services" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services offered</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Briefly describe your services and capacities (e.g., home collection, specialties, coverage)" rows={4} {...field} />
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

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted-foreground">We never share your details. By submitting, you agree to be contacted about onboarding.</p>
                  <Button type="submit" size="lg" className="btn-gradient">Submit Application</Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Looking for field roles? <a href="/join-network/field-staff" className="story-link text-foreground">Apply here</a>.
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

export default ProvidersJoin;
