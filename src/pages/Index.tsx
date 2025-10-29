import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValuePropositionTabs from "@/components/ValuePropositionTabs";
import WhoWeServe from "@/components/WhoWeServe";
import ProofOfScale from "@/components/ProofOfScale";
import DualCTA from "@/components/DualCTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import { generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema } from "@/lib/structured-data";

const Index = () => {
  const faqItems = [
    {
      question: "What is Labstack?",
      answer: "Labstack is a healthcare growth operating system that enables companies to launch diagnostics, consultations, pharmacy, and home care services across 9,000+ pincodes in India in just 48 hours through a single API."
    },
    {
      question: "How quickly can I launch healthcare services with Labstack?",
      answer: "You can launch healthcare services in 48 hours. Our platform provides instant access to verified provider networks, automated operations, and complete infrastructure."
    },
    {
      question: "Which services does Labstack support?",
      answer: "We support diagnostics (pathology, radiology, genetic testing), teleconsultations, pharmacy delivery, and specialized networks including ambulance, dental, mental health, and home care services."
    },
    {
      question: "Is Labstack suitable for my business?",
      answer: "Labstack serves insurers, TPAs, digital health platforms, disease management programs, brokers, aggregators, and healthcare providers looking to expand their service offerings quickly."
    },
    {
      question: "How does pricing work?",
      answer: "Pricing is based on usage and volume. Contact our sales team for custom pricing tailored to your specific needs and scale."
    },
    {
      question: "Can I white-label Labstack services?",
      answer: "Yes, all services are fully white-labelable. Your brand, your customer experience, powered by our infrastructure."
    }
  ];

  const structuredData = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(faqItems)
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="The Growth Engine for Healthcare"
        description="Launch diagnostics, consultations, pharmacy, and home care in 48 hours. One API for 9,000+ pincodes. Healthcare infrastructure that scales like software."
        keywords="healthcare API, diagnostics API, telemedicine platform, healthcare infrastructure India, digital health platform, healthcare delivery system, medical API integration"
        canonical="https://labstack.in"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ValuePropositionTabs />
        <WhoWeServe />
        <ProofOfScale />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <FAQ items={faqItems} />
          </div>
        </section>
        <DualCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;