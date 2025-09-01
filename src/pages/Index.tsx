import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValuePropositionTabs from "@/components/ValuePropositionTabs";
import WhoWeServe from "@/components/WhoWeServe";
import ProofOfScale from "@/components/ProofOfScale";
import DualCTA from "@/components/DualCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
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