import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Labstack Networks Private Limited ("Labstack", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare infrastructure platform and related services.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">We may collect personal information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Name, email address, phone number, and contact information</li>
                <li>Healthcare provider credentials and professional information</li>
                <li>Payment and billing information</li>
                <li>Health-related information when using our healthcare services</li>
                <li>Account credentials and preferences</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Technical Information</h3>
              <p className="text-muted-foreground mb-4">We automatically collect certain technical information, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Usage patterns and interaction data with our platform</li>
                <li>API usage logs and performance metrics</li>
                <li>Location data (when explicitly permitted)</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Providing and maintaining our healthcare platform services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Connecting patients with healthcare providers</li>
                <li>Ensuring compliance with healthcare regulations</li>
                <li>Improving our services and platform functionality</li>
                <li>Communicating with users about services and updates</li>
                <li>Preventing fraud and ensuring platform security</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">With Healthcare Providers</h3>
              <p className="text-muted-foreground mb-4">
                We share relevant information with healthcare providers in our network to facilitate service delivery and patient care.
              </p>

              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">With Service Partners</h3>
              <p className="text-muted-foreground mb-4">
                We may share information with trusted third-party service providers who assist us in operating our platform, including payment processors, logistics partners, and technology vendors.
              </p>

              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">
                We may disclose information when required by law, regulation, or legal process, or to protect the rights, property, or safety of Labstack, our users, or others.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and monitoring</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection practices</li>
                <li>Compliance with healthcare data security standards</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Access:</strong> You can request access to your personal information</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> You can request deletion of your information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> You can opt-out of certain communications and data processing</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Healthcare Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                As a healthcare platform, we are committed to protecting health information in accordance with applicable healthcare privacy laws. We maintain appropriate safeguards for protected health information and ensure that our network partners also comply with relevant privacy requirements.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie preferences through your browser settings, though some functionality may be limited if you disable certain cookies.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be processed and stored in countries other than your country of residence. We ensure appropriate safeguards are in place for international data transfers in accordance with applicable laws.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not designed for children under 18. We do not knowingly collect personal information from children under 18 without parental consent. If you believe we have collected such information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our platform and updating the effective date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-muted-foreground mb-2"><strong>Labstack Networks Private Limited</strong></p>
              <p className="text-muted-foreground mb-2">Email: contact@labstack.in</p>
              <p className="text-muted-foreground mb-2">Phone: +91-8047359194</p>
              <p className="text-muted-foreground mb-8">Address: 4263, Tower 4, 26th Floor, Phoenix One Bangalore West, Dr. Rajkumar Road, Rajajinagar - 560010, Bangalore North, Karnataka, India</p>

              <p className="text-sm text-muted-foreground mt-8">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> January 2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
