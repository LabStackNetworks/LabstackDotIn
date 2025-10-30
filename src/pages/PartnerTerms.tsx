import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PartnerTerms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">Labstack Partner Terms & Conditions</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-2">
                <strong>Effective Date:</strong> 01st August 2025
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> 01st August 2025
              </p>
              <p className="text-muted-foreground mb-6">
                These Terms & Conditions ("Terms") govern your engagement as an independent gig partner ("You", "Partner") on the Labstack platform ("Labstack", "We", "Our", "Us"). By signing up and accepting gigs via the Labstack platform, you agree to the following:
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Independent Contractor Relationship</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You acknowledge that you are an independent contractor and not an employee of Labstack.</li>
                <li>Labstack does not provide employment benefits, PF, ESI, health insurance, or any statutory benefits.</li>
                <li>You are free to work with other organizations, provided it does not affect your commitments on Labstack gigs.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Engagement and Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You agree to provide professional healthcare-related services (such as sample collection, nursing assistance, etc.) as per industry standards and applicable laws.</li>
                <li>You must maintain accuracy, hygiene, and ethical conduct while performing services.</li>
                <li>Labstack only acts as a technology platform connecting clients with gig partners. We do not supervise or control how you perform your services.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. Background Verification & Compliance</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You agree to provide valid ID proof, qualification certificates, and police verification when requested.</li>
                <li>You must comply with all applicable laws, medical guidelines, and safety protocols.</li>
                <li>Labstack reserves the right to suspend or terminate your access for non-compliance or unethical practices.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. Payments and Taxes</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Payments will be made to your registered bank account or UPI ID after successful completion of gigs, subject to Labstack's payment cycle.</li>
                <li>You are responsible for any applicable taxes, including income tax, GST (if applicable), or any government dues.</li>
                <li>Labstack may deduct applicable platform service fees before crediting your payout.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Cancellation & No-Show</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>If you accept a gig, you must attend on time. Cancellations or no-shows may lead to penalties or removal from the platform.</li>
                <li>Labstack reserves the right to deduct charges for cancellations or delays as per the cancellation policy.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-2">Labstack is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Any medical negligence or errors caused by you.</li>
                <li>Any loss, damage, or injury to the customer during the service.</li>
                <li>Any disputes between you and the customer.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Labstack only provides a technology platform and does not guarantee minimum earnings or availability of gigs.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Confidentiality & Data Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>You must not share patient information, medical reports, or any confidential data with unauthorized persons.</li>
                <li>You agree to comply with Labstack's privacy policy and applicable data protection laws.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Termination</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Labstack may terminate or suspend your account at any time for violation of these terms, misconduct, or poor service quality.</li>
                <li>You may deactivate your account by sending a written request to Labstack.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold harmless Labstack from any claims, damages, or legal actions arising from your services, negligence, or breach of these terms.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Governing Law & Dispute Resolution</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>These Terms are governed by the laws of India.</li>
                <li>Any disputes shall be resolved through binding arbitration in Bangalore, Karnataka, as per the Arbitration and Conciliation Act, 1996.</li>
                <li>Courts in Bangalore, Karnataka shall have exclusive jurisdiction.</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Acceptance</h2>
              <p className="text-muted-foreground mb-4">
                By signing up on the Labstack platform, you confirm that you have read, understood, and agree to these Terms & Conditions.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Partner Support</h2>
              <p className="text-muted-foreground mb-4">
                For partnership-related queries, contact:
              </p>
              <p className="text-muted-foreground mb-2">Email: contact@labstack.in</p>
              <p className="text-muted-foreground mb-8">Phone: +91-8047359194</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerTerms;
