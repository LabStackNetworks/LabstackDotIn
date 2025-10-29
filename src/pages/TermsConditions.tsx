import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using the Labstack platform and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                Labstack provides a healthcare infrastructure platform that connects businesses with healthcare service providers including diagnostic labs, pharmacies, doctors, and specialized care networks across India.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">Users of the Labstack platform agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Comply with all applicable healthcare regulations</li>
                <li>Not interfere with or disrupt the platform's operation</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. Service Availability</h2>
              <p className="text-muted-foreground mb-4">
                While we strive for 99.5% uptime, Labstack does not guarantee uninterrupted access to the platform. We reserve the right to modify, suspend, or discontinue services with reasonable notice.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are established in separate commercial agreements. All fees are exclusive of applicable taxes. Late payments may result in service suspension.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality of the Labstack platform are owned by Labstack Networks Private Limited and are protected by intellectual property laws.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Labstack provides infrastructure services and is not directly responsible for the medical services provided by healthcare providers in our network. Our liability is limited to the fees paid for services in the preceding 12 months.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Use of personal and health data is governed by our Privacy Policy. We implement appropriate security measures and comply with applicable data protection regulations.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate the service agreement with 30 days written notice. Labstack reserves the right to immediately suspend or terminate accounts that violate these terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                Labstack reserves the right to modify these terms at any time. Material changes will be communicated to users with reasonable advance notice.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms and Conditions, please contact:
              </p>
              <p className="text-muted-foreground mb-2">Email: legal@labstack.in</p>
              <p className="text-muted-foreground mb-2">Phone: +91 80 4040 2030</p>
              <p className="text-muted-foreground mb-8">Address: Bangalore, India</p>

              <p className="text-sm text-muted-foreground mt-8">
                Last updated: October 2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
