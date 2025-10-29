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

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Data Protection and Indian Regulations</h2>
              <p className="text-muted-foreground mb-4">
                Use of personal and health data is governed by our Privacy Policy and complies with applicable Indian regulations including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Information Technology Act, 2000 (IT Act)</strong> and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li><strong>Digital Information Security in Healthcare Act (DISHA)</strong> framework for protection of digital health data</li>
                <li><strong>Telemedicine Practice Guidelines, 2020</strong> issued by the Medical Council of India and NITI Aayog for teleconsultation services</li>
                <li><strong>Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002</strong></li>
                <li><strong>Drugs and Cosmetics Act, 1940</strong> and related rules for pharmacy services</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We implement encryption at rest and in transit, access controls, audit logs, and regular security audits to protect sensitive personal and health information.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Telemedicine and Healthcare Service Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Teleconsultation services provided through our platform comply with Telemedicine Practice Guidelines issued by the Board of Governors superseding the Medical Council of India. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Registered Medical Practitioners (RMP) with valid licenses</li>
                <li>Informed consent procedures for telemedicine consultations</li>
                <li>Proper documentation and maintenance of electronic medical records</li>
                <li>Prescription guidelines and limitations for teleconsultations</li>
                <li>Patient identification and verification protocols</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate the service agreement with 30 days written notice. Labstack reserves the right to immediately suspend or terminate accounts that violate these terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Governing Law and Regulatory Compliance</h2>
              <p className="text-muted-foreground mb-4">
                These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka. Users agree to comply with all applicable Indian healthcare regulations, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Clinical Establishments (Registration and Regulation) Act, 2010</li>
                <li>Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994</li>
                <li>Pharmacy Act, 1948 and Drugs and Cosmetics Act, 1940</li>
                <li>Indian Medical Council Act, 1956 and regulations thereunder</li>
                <li>Consumer Protection Act, 2019 for healthcare services</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. Changes to Terms</h2>
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
