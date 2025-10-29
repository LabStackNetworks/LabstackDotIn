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

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Legal Framework and Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Labstack complies with Indian data protection regulations including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Information Technology Act, 2000</strong> and IT (Reasonable Security Practices) Rules, 2011</li>
                <li><strong>DISHA framework</strong> for digital health data security and privacy</li>
                <li><strong>Telemedicine Practice Guidelines, 2020</strong> for patient data handling</li>
                <li>Healthcare provider regulations for medical records and patient confidentiality</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">Under Indian law, you have the right to access, correct, delete your data, withdraw consent, opt-out of marketing, and file complaints regarding data misuse.</p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-muted-foreground mb-2">Email: privacy@labstack.in</p>
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

export default PrivacyPolicy;
