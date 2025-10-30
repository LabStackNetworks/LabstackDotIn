import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-8">
                <strong>Effective Date:</strong> March 13, 2025
              </p>

              <p className="text-muted-foreground mb-8">
                Welcome to Labstack! These Terms of Service ("Terms") govern your access to and use of our platform, APIs, and services. By using Labstack, you agree to comply with these Terms. If you do not agree, please do not use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Labstack provides an API-first infrastructure for healthcare services, including diagnostics, doctor consultations, pharmacy, and healthcare data management. These Terms apply to all users, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Healthcare providers, insurers, and wellness platforms integrating our APIs.</li>
                <li>Developers and businesses using our services.</li>
                <li>Patients and individuals accessing services through our network.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground mb-4">By using Labstack, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Use the services legally and in compliance with Indian laws, including the Digital Personal Data Protection Act, 2023 and Information Technology Act, 2000.</li>
                <li>Provide accurate information when registering or using the platform.</li>
                <li>Not misuse the platform, such as engaging in unauthorized API access, data scraping, or fraudulent activities.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Labstack reserves the right to suspend or terminate accounts violating these Terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. Registration & Account Security</h2>
              <p className="text-muted-foreground mb-4">To access Labstack's services, you may need to create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Maintain the confidentiality of your login credentials.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. API Usage & Licensing</h2>
              <p className="text-muted-foreground mb-4">Labstack provides APIs and SDKs for seamless healthcare integrations.</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Users are granted a limited, non-exclusive, non-transferable license to use our APIs.</li>
                <li>API access must comply with rate limits and fair use policies.</li>
                <li>Users must not reverse engineer, modify, or misuse our APIs.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Labstack reserves the right to restrict access to APIs if misuse is detected.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Payment & Billing</h2>
              <p className="text-muted-foreground mb-4">Some Labstack services may require subscription fees or transaction-based pricing.</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Payments must be made as per the agreed terms and non-payment may result in service suspension.</li>
                <li>All payments are non-refundable, except where required by law.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                For billing inquiries, contact contact@labstack.in.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Data Privacy & Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Labstack follows strict data protection laws under the Digital Personal Data Protection Act, 2023.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>User data is securely stored and processed with encryption and compliance measures.</li>
                <li>Labstack does not sell user data to third parties.</li>
                <li>Users must comply with all regulatory requirements when handling patient data.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                For details, refer to our Privacy Policy.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Third-Party Services & Liability</h2>
              <p className="text-muted-foreground mb-4">
                Labstack integrates with third-party healthcare providers, labs, and pharmacies.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Labstack is not responsible for the quality, accuracy, or timeliness of services provided by third parties.</li>
                <li>Users must review and agree to third-party terms when using their services.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Labstack does not provide medical advice—all consultations and lab reports are managed by licensed professionals.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Service Availability & Downtime</h2>
              <p className="text-muted-foreground mb-4">While we strive for 99.9% uptime, Labstack does not guarantee uninterrupted service.</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Scheduled maintenance may cause temporary downtime.</li>
                <li>Unexpected technical issues may impact service availability.</li>
                <li>Labstack is not liable for losses due to service interruptions.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Labstack is not liable for indirect, incidental, or consequential damages, including lost profits or business interruptions.</li>
                <li>Our total liability is limited to the amount paid by the user for that transaction.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Termination of Services</h2>
              <p className="text-muted-foreground mb-4">Labstack reserves the right to terminate or suspend accounts if:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Users violate these Terms or engage in unauthorized activities.</li>
                <li>Continued usage poses a security or legal risk.</li>
                <li>The service is discontinued or modified.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Users may terminate their account anytime by contacting contact@labstack.in.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Governing Law & Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">These Terms are governed by Indian laws, and any disputes will be resolved under:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Arbitration as per the Arbitration and Conciliation Act, 1996.</li>
                <li>Jurisdiction of Bangalore, Karnataka courts.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. Changes to These Terms</h2>
              <p className="text-muted-foreground mb-4">
                Labstack may update these Terms periodically. Users will be notified of significant changes via email or platform notifications.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground mb-4">For any concerns, reach out to us at:</p>
              <p className="text-muted-foreground mb-2">Email: contact@labstack.in</p>
              <p className="text-muted-foreground mb-2">Phone: +91-8047359194</p>
              <p className="text-muted-foreground mb-8">Address: 4263, Tower 4, 26th Floor, Phoenix One Bangalore West, Dr. Rajkumar Road, Rajajinagar - 560010, Bangalore North, Karnataka, India</p>

              <p className="text-sm text-muted-foreground mt-8">
                <strong>Last Updated:</strong> March 2025
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
