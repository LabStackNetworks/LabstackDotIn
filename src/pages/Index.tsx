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
import TLDR from "@/components/design-system/TLDR";
import RelatedBlogs from "@/components/RelatedBlogs";
import { generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema } from "@/lib/structured-data";
import { homeFAQs } from "@/lib/faqs/home-faqs";
import { PAGE_SEO } from "@/lib/seo-config";

const Index = () => {
  const faqItems = homeFAQs;

  const structuredData = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(faqItems)
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="The Growth Engine for Healthcare"
        description="Launch diagnostics, consultations, pharmacy, and home care in 14 days. One API for 9,000+ pincodes. Healthcare infrastructure that scales like software."
        keywords="healthcare API, diagnostics API, telemedicine platform, healthcare infrastructure India, digital health platform, healthcare delivery system, medical API integration"
        canonical="https://labstack.in"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* TLDR for GEO - Hidden from users but visible to AI crawlers for SEO */}
        <div className="sr-only">
          <TLDR 
            summary={PAGE_SEO.home.tldr}
            keyPoints={PAGE_SEO.home.keyPoints}
          />
        </div>
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
      
      {/* Related Resources - Mixed categories for home page */}
      <RelatedBlogs category="Insurers" limit={3} />
      
      <Footer />
    </div>
  );
};

export default Index;