import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("scope");

  const sections = [
    { id: "scope", title: "1. Scope of This Policy" },
    { id: "information-collect", title: "2. Information We Collect" },
    { id: "how-we-use", title: "3. How We Use Your Information" },
    { id: "how-we-share", title: "4. How We Share Your Information" },
    { id: "data-security", title: "5. Data Security & Retention" },
    { id: "your-rights", title: "6. Your Rights & Choices" },
    { id: "cookies", title: "7. Cookies & Tracking Technologies" },
    { id: "third-party", title: "8. Third-Party Services & Links" },
    { id: "children", title: "9. Children's Privacy" },
    { id: "updates", title: "10. Updates to This Policy" },
    { id: "contact", title: "11. Contact Us" },
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
                <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
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
                        Welcome to Labstack. Your privacy is important to us, and we are committed to protecting your personal data in accordance with Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable regulations.
                      </p>

                      <div id="scope" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Scope of This Policy</h2>
                        <p className="text-muted-foreground mb-4">
                          This Privacy Policy applies to all users of Labstack's website, APIs, and services, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                          <li>Healthcare providers, insurers, and partners using our platform.</li>
                          <li>Patients and end-users accessing services through our network.</li>
                          <li>Developers and enterprises integrating our APIs for diagnostics, telemedicine, and pharmacy solutions.</li>
                        </ul>
                      </div>

                      <div id="information-collect" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Information We Collect</h2>
                        
                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.1 Personal Information</h3>
                        <p className="text-muted-foreground mb-4">When you use our services, we may collect the following personal details:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Identity & Contact Details - Name, phone number, email address, and organization details.</li>
                          <li>Payment Information - Billing details, UPI IDs, or bank details for transactions.</li>
                          <li>Government Identifiers (if applicable) - Aadhaar, PAN, or health ID, where legally required.</li>
                        </ul>

                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.2 Usage & Device Information</h3>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>IP address, browser type, and device details.</li>
                          <li>Cookies and analytics data to monitor platform performance.</li>
                        </ul>

                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.3 Healthcare & Sensitive Personal Data</h3>
                        <p className="text-muted-foreground mb-4">
                          In cases where Labstack facilitates healthcare services, we may process health-related data, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Diagnostic Test Information - Lab test bookings, sample collection details, and results.</li>
                          <li>Medical Consultation Data - Doctor prescriptions, consultation records, and medical history.</li>
                          <li>Pharmacy Orders - Prescription validation, medicine purchases, and delivery information.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Note: We handle healthcare data in strict compliance with Indian laws, including the DPDP Act and the Clinical Establishments Act, 2010.
                        </p>
                      </div>

                      <div id="how-we-use" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-4">We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Enable seamless API-led diagnostics, pharmacy, and consultation services.</li>
                          <li>Facilitate transactions and healthcare fulfillment.</li>
                          <li>Improve user experience and customer support.</li>
                          <li>Send service-related notifications, billing updates, and healthcare reminders.</li>
                          <li>Comply with legal, regulatory, and fraud prevention requirements.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          We do NOT sell your personal data or use it for unauthorized purposes.
                        </p>
                      </div>

                      <div id="how-we-share" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. How We Share Your Information</h2>
                        <p className="text-muted-foreground mb-4">We share data only in the following cases:</p>
                        
                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">4.1 Service Providers & Healthcare Partners</h3>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Accredited diagnostic labs, hospitals, doctors, and pharmacies for processing appointments and prescriptions.</li>
                          <li>Insurance companies and wellness platforms for policyholder services.</li>
                        </ul>

                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">4.2 Government & Regulatory Compliance</h3>
                        <p className="text-muted-foreground mb-4">We may share personal data with authorities if required under:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>The Digital Personal Data Protection Act, 2023</li>
                          <li>The IT Act, 2000 & IT Rules, 2011</li>
                        </ul>

                        <h3 className="text-xl font-heading font-semibold mt-6 mb-3">4.3 Business Transactions</h3>
                        <p className="text-muted-foreground mb-6">
                          In the event of a merger, acquisition, or restructuring, user data may be transferred to the new entity, ensuring continued data protection compliance.
                        </p>
                      </div>

                      <div id="data-security" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Data Security & Retention</h2>
                        <p className="text-muted-foreground mb-4">We implement strong security measures to safeguard your data:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Encryption - All sensitive data is encrypted during storage and transmission.</li>
                          <li>Access Control - Data is accessible only to authorized personnel.</li>
                          <li>Regular Audits - Periodic security audits and compliance checks.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          We retain data only for as long as necessary under regulatory and business needs. Medical records are stored as per IRDAI and NDHM (Ayushman Bharat Digital Mission) guidelines.
                        </p>
                      </div>

                      <div id="your-rights" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Your Rights & Choices</h2>
                        <p className="text-muted-foreground mb-4">Under the DPDP Act, 2023, you have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Right to Access & Correction - Request a copy of your data or update your details.</li>
                          <li>Right to Withdraw Consent - Opt out of data processing where applicable.</li>
                          <li>Right to Data Deletion - Request deletion of personal data, subject to legal retention policies.</li>
                          <li>Right to Grievance Redressal - File complaints regarding data misuse.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          To exercise these rights, contact us at privacy@labstack.com.
                        </p>
                      </div>

                      <div id="cookies" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Cookies & Tracking Technologies</h2>
                        <p className="text-muted-foreground mb-4">
                          Labstack uses cookies to enhance user experience and track website performance.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                          <li>Essential cookies for security and authentication.</li>
                          <li>Analytical cookies to improve platform functionality.</li>
                        </ul>
                        <p className="text-muted-foreground mb-6">
                          Users can manage cookie preferences via browser settings.
                        </p>
                      </div>

                      <div id="third-party" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Third-Party Services & Links</h2>
                        <p className="text-muted-foreground mb-6">
                          Labstack may link to third-party websites or services, such as payment gateways or healthcare providers. We are not responsible for their privacy practices, and we encourage users to review their policies before sharing personal data.
                        </p>
                      </div>

                      <div id="children" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Children's Privacy</h2>
                        <p className="text-muted-foreground mb-6">
                          Labstack services are not intended for children under 18 without parental consent. If we become aware of any data collected from minors without proper authorization, we will take steps to delete it.
                        </p>
                      </div>

                      <div id="updates" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Updates to This Policy</h2>
                        <p className="text-muted-foreground mb-6">
                          We may update this Privacy Policy periodically to reflect changes in laws or business practices. Significant updates will be communicated via email or website notifications.
                        </p>
                      </div>

                      <div id="contact" className="scroll-mt-24">
                        <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Contact Us</h2>
                        <p className="text-muted-foreground mb-4">For any privacy concerns, reach out to us at:</p>
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

export default PrivacyPolicy;
