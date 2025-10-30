import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PartnerTerms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-8">Partner Terms & Conditions</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                These Partner Terms govern the relationship between Labstack Networks Private Limited ("Labstack") and healthcare service providers ("Partners") who join the Labstack network.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Partnership Agreement</h2>
              <p className="text-muted-foreground mb-4">
                By joining the Labstack network, Partners agree to provide healthcare services according to established quality standards, SLAs, and operational guidelines.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Partner Eligibility</h2>
              <p className="text-muted-foreground mb-4">Partners must:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Hold valid licenses and certifications required for their services</li>
                <li>Maintain professional liability insurance</li>
                <li>Meet Labstack's quality and service standards</li>
                <li>Comply with all applicable healthcare regulations</li>
                <li>Pass verification and credential checks</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. Service Standards</h2>
              <p className="text-muted-foreground mb-4">Partners agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Adhere to specified service level agreements (SLAs)</li>
                <li>Maintain consistent quality of service delivery</li>
                <li>Respond to bookings and orders within specified timeframes</li>
                <li>Provide accurate and timely service updates</li>
                <li>Follow prescribed protocols and workflows</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. Quality Monitoring</h2>
              <p className="text-muted-foreground mb-4">
                Labstack implements continuous quality monitoring including customer feedback (CSAT), service fulfillment rates, and quality audits. Partners with consistently poor performance may be suspended or removed from the network.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Payment and Billing</h2>
              <p className="text-muted-foreground mb-4">Payment terms include:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Transparent, pre-agreed pricing for services</li>
                <li>Automated reconciliation and invoicing</li>
                <li>Payment cycles as specified in commercial agreements</li>
                <li>All payments subject to service verification and quality checks</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Data and Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Partners must comply with all data protection and patient privacy regulations. Patient data shared through the platform must be handled securely and used only for authorized purposes.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Non-Exclusivity</h2>
              <p className="text-muted-foreground mb-4">
                This is a non-exclusive partnership. Partners are free to work with other platforms and maintain their independent operations. Labstack operates as a B2B infrastructure provider only.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Technology and Integration</h2>
              <p className="text-muted-foreground mb-4">
                Partners agree to use Labstack's platform, APIs, and tools as specified. Technical support and training will be provided during onboarding.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Compliance and Regulations</h2>
              <p className="text-muted-foreground mb-4">
                Partners must maintain compliance with all applicable healthcare regulations, including but not limited to ABDM readiness, licensing requirements, and professional standards.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Misconduct / Individual Liability; Cooperation; Limited Labstack Responsibility</h2>
              <div className="text-muted-foreground mb-4 space-y-3">
                <p><strong>(a) Individual Practitioner Liability:</strong> If any healthcare professional (including but not limited to doctors, nurses, medical practitioners, phlebotomists, pharmacists, or field staff) engaged by Labstack commits any act, omission, misbehaviour, professional misconduct, or criminal conduct in connection with the Services, such practitioner shall be primarily and personally liable for his/her acts or omissions and for any claims, fines, penalties, or damages arising directly from such acts or omissions.</p>
                
                <p><strong>(b) Notification and Cooperation:</strong> Labstack shall promptly notify the Partner and affected customers upon becoming aware of any such allegation or incident. Labstack shall suspend the practitioner from providing Services pending investigation (where appropriate) and shall, subject to applicable law and privacy obligations, cooperate with Partners, customers, and any regulatory or law-enforcement authorities, including providing records, personnel information, and other documentation reasonably required for the investigation.</p>
                
                <p><strong>(c) Labstack's Continuing Obligations:</strong> Notwithstanding the foregoing, Labstack shall remain liable to Partners for losses caused by Labstack's own negligence, willful misconduct, or failure to perform required background checks, credential verifications, and quality monitoring as set out in this Agreement. This does not diminish the primary liability of individual practitioners for their own acts or omissions.</p>
              </div>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Suspension and Termination</h2>
              <p className="text-muted-foreground mb-4">
                Labstack may suspend or terminate partnerships for violations of terms, quality issues, regulatory non-compliance, or fraudulent activities. Partners may exit with 30 days written notice.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Disputes will be resolved through good faith negotiation. If unresolved, disputes are subject to arbitration in Bangalore, Karnataka under Indian law.
              </p>

              <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Partner Support</h2>
              <p className="text-muted-foreground mb-4">
                For partnership-related queries, contact:
              </p>
              <p className="text-muted-foreground mb-2">Email: contact@labstack.in</p>
              <p className="text-muted-foreground mb-2">Phone: +91-8047359194</p>
              <p className="text-muted-foreground mb-8">Address: 4263, Tower 4, 26th Floor, Phoenix One Bangalore West, Dr. Rajkumar Road, Rajajinagar - 560010, Bangalore North, Karnataka, India</p>

              <p className="text-sm text-muted-foreground mt-8">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerTerms;
