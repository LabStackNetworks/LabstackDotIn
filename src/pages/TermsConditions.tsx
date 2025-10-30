import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "use-of-services", title: "2. Use of Services" },
    { id: "registration", title: "3. Registration & Account Security" },
    { id: "api-usage", title: "4. API Usage & Licensing" },
    { id: "payment", title: "5. Payment & Billing" },
    { id: "data-privacy", title: "6. Data Privacy & Compliance" },
    { id: "third-party", title: "7. Third-Party Services & Liability" },
    { id: "availability", title: "8. Service Availability & Downtime" },
    { id: "limitation", title: "9. Limitation of Liability" },
    { id: "termination", title: "10. Termination of Services" },
    { id: "governing-law", title: "11. Governing Law & Dispute Resolution" },
    { id: "changes", title: "12. Changes to These Terms" },
    { id: "contact", title: "13. Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
                <p className="text-muted-foreground">Effective Date: March 13, 2025</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar Navigation */}
                <aside className="lg:col-span-3">
                  <div className="lg:sticky lg:top-24 bg-card-gradient rounded-2xl border border-border/20 p-6">
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                            activeSection === section.id
                              ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-9">
                  <div className="bg-card-gradient rounded-2xl border border-border/20 p-8 lg:p-12">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p className="text-muted-foreground mb-8">
                        Welcome to Labstack! These Terms of Service ("Terms") govern your access to and use of our platform, APIs, and services. By using Labstack, you agree to comply with these Terms. If you do not agree, please do not use our services.
                      </p>

                      <div id="introduction" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground mb-4">
                          Labstack provides an API-first infrastructure for healthcare services, including diagnostics, doctor consultations, pharmacy, and healthcare data management. These Terms apply to all users, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                          <li>Healthcare providers, insurers, and wellness platforms integrating our APIs.</li>
                          <li>Developers and businesses using our services.</li>
                          <li>Patients and individuals accessing services through our network.</li>
                        </ul>
                      </div>

                      <div id="use-of-services" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Use of Services</h2>
                        <p className="text-muted-foreground mb-4">By using Labstack, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Use the services legally and in compliance with Indian laws, including the Digital Personal Data Protection Act, 2023 and Information Technology Act, 2000.</li>
                          <li>Provide accurate information when registering or using the platform.</li>
                          <li>Not misuse the platform, such as engaging in unauthorized API access, data scraping, or fraudulent activities.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Labstack reserves the right to suspend or terminate accounts violating these Terms.
                        </p>
                      </div>

                      <div id="registration" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. Registration & Account Security</h2>
                        <p className="text-muted-foreground mb-4">To access Labstack's services, you may need to create an account. You agree to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Maintain the confidentiality of your login credentials.</li>
                          <li>Notify us immediately of any unauthorized use of your account.</li>
                          <li>Be responsible for all activities under your account.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Labstack is not liable for any loss due to unauthorized access caused by user negligence.
                        </p>
                      </div>

                      <div id="api-usage" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. API Usage & Licensing</h2>
                        <p className="text-muted-foreground mb-4">Labstack provides APIs and SDKs for seamless healthcare integrations.</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Users are granted a limited, non-exclusive, non-transferable license to use our APIs.</li>
                          <li>API access must comply with rate limits and fair use policies.</li>
                          <li>Users must not reverse engineer, modify, or misuse our APIs.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Labstack reserves the right to restrict access to APIs if misuse is detected.
                        </p>
                      </div>

                      <div id="payment" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Payment & Billing</h2>
                        <p className="text-muted-foreground mb-4">Some Labstack services may require subscription fees or transaction-based pricing.</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Payments must be made as per the agreed terms and non-payment may result in service suspension.</li>
                          <li>All payments are non-refundable, except where required by law.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          For billing inquiries, contact billing@labstack.com.
                        </p>
                      </div>

                      <div id="data-privacy" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Data Privacy & Compliance</h2>
                        <p className="text-muted-foreground mb-4">
                          Labstack follows strict data protection laws under the Digital Personal Data Protection Act, 2023.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>User data is securely stored and processed with encryption and compliance measures.</li>
                          <li>Labstack does not sell user data to third parties.</li>
                          <li>Users must comply with all regulatory requirements when handling patient data.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          For details, refer to our Privacy Policy.
                        </p>
                      </div>

                      <div id="third-party" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Third-Party Services & Liability</h2>
                        <p className="text-muted-foreground mb-4">
                          Labstack integrates with third-party healthcare providers, labs, and pharmacies.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Labstack is not responsible for the quality, accuracy, or timeliness of services provided by third parties.</li>
                          <li>Users must review and agree to third-party terms when using their services.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Labstack does not provide medical advice. All consultations and lab reports are managed by licensed professionals.
                        </p>
                      </div>

                      <div id="availability" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Service Availability & Downtime</h2>
                        <p className="text-muted-foreground mb-4">While we strive for 99.9% uptime, Labstack does not guarantee uninterrupted service.</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Scheduled maintenance may cause temporary downtime.</li>
                          <li>Unexpected technical issues may impact service availability.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Labstack is not liable for losses due to service interruptions.
                        </p>
                      </div>

                      <div id="limitation" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-4">To the fullest extent permitted by law:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                          <li>Labstack is not liable for indirect, incidental, or consequential damages, including lost profits or business interruptions.</li>
                          <li>Our total liability is limited to the amount paid by the user for that transaction.</li>
                        </ul>
                      </div>

                      <div id="termination" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Termination of Services</h2>
                        <p className="text-muted-foreground mb-4">Labstack reserves the right to terminate or suspend accounts if:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Users violate these Terms or engage in unauthorized activities.</li>
                          <li>Continued usage poses a security or legal risk.</li>
                          <li>The service is discontinued or modified.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Users may terminate their account anytime by contacting support@labstack.com.
                        </p>
                      </div>

                      <div id="governing-law" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Governing Law & Dispute Resolution</h2>
                        <p className="text-muted-foreground mb-4">These Terms are governed by Indian laws, and any disputes will be resolved under:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                          <li>Arbitration as per the Arbitration and Conciliation Act, 1996.</li>
                          <li>Jurisdiction of Bangalore, Karnataka courts.</li>
                        </ul>
                      </div>

                      <div id="changes" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. Changes to These Terms</h2>
                        <p className="text-muted-foreground mb-6">
                          Labstack may update these Terms periodically. Users will be notified of significant changes via email or platform notifications.
                        </p>
                      </div>

                      <div id="contact" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">13. Contact Us</h2>
                        <p className="text-muted-foreground mb-4">For any concerns, reach out to us at:</p>
                        <p className="text-muted-foreground mb-2">Email: contact@labstack.in</p>
                        <p className="text-muted-foreground mb-6">Phone: +91-8047359194</p>
                      </div>
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

export default TermsConditions;
