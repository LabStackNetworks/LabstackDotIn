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
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

const Index = () => {
  const structuredData = [
    generateOrganizationSchema(),
    generateWebSiteSchema()
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
        <DualCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;