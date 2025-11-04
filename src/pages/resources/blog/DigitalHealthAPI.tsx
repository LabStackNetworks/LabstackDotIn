import { ArrowLeft, Code, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/lib/structured-data";

const DigitalHealthAPI = () => {
  const structuredData = generateArticleSchema({
    title: "API-First Healthcare Infrastructure for Digital Health Platforms",
    description: "Build faster with healthcare APIs. Launch diagnostics, consultations, and pharmacy in 14 days instead of 14 months with plug-and-play infrastructure.",
    url: "https://labstack.in/resources/blog/digital-health-api",
    datePublished: "2025-01-15",
    author: "Labstack Team"
  });

  return (
    <PageTemplate
      title="API-First Healthcare Infrastructure for Digital Health Platforms | Labstack"
      description="Build faster with healthcare APIs. Launch diagnostics, consultations, and pharmacy in 14 days instead of 14 months with plug-and-play infrastructure."
      keywords="healthcare API integration, digital health infrastructure, telemedicine API, diagnostics API India, pharmacy API platform"
      canonical="https://labstack.in/resources/blog/digital-health-api"
      structuredData={structuredData}
    >
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/resources/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            API-First Healthcare Infrastructure for Digital Health Platforms
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Launch healthcare services in 14 days, not 14 months, with plug-and-play APIs
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime="2025-01-25">January 25, 2025</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r">
            <p className="text-lg font-semibold mb-2">The Build vs. Buy Decision</p>
            <p className="text-muted-foreground mb-0">
              Building healthcare infrastructure from scratch takes 12-18 months and ₹2-5 Cr. API-first platforms 
              let you launch in 14 days with 90% lower costs—focusing your resources on user experience and growth.
            </p>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-4">
            <Code className="h-6 w-6 text-primary" />
            Why APIs Matter for Digital Health
          </h2>
          <p>
            Digital health platforms need multiple healthcare services: consultations, diagnostics, pharmacy, specialists. 
            Building each from scratch means:
          </p>
          <ul className="space-y-2">
            <li>Onboarding thousands of providers across India</li>
            <li>Managing logistics, quality control, and compliance</li>
            <li>Building payment systems, claim processing, and reconciliation</li>
            <li>Maintaining 24/7 operations and customer support</li>
          </ul>
          <p>
            Healthcare APIs abstract this complexity. With a few API calls, you access pre-built networks, 
            automated workflows, and proven operations—launching in weeks instead of years.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Core Healthcare APIs</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Consultations API</h3>
          <ul className="space-y-2">
            <li>Access 5,000+ doctors across 30+ specialties</li>
            <li>Video, audio, and chat consultation modes</li>
            <li>Automated scheduling, reminders, and follow-ups</li>
            <li>Digital prescriptions with e-pharmacy integration</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Diagnostics API</h3>
          <ul className="space-y-2">
            <li>200+ tests available across 600+ cities</li>
            <li>Home sample collection in 4-6 hours</li>
            <li>Digital reports in 24-48 hours</li>
            <li>Radiology and imaging through partner network</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Pharmacy API</h3>
          <ul className="space-y-2">
            <li>Medicine catalog with 50,000+ SKUs</li>
            <li>Prescription validation and inventory check</li>
            <li>Same-day delivery in 50+ cities</li>
            <li>Subscription management for chronic medications</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            Implementation: 14-Day Launch
          </h2>
          <p>Week 1: Integration and testing</p>
          <p>Week 2: Go live with full healthcare services</p>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            Compliance and Security
          </h2>
          <p>
            All APIs are ABDM-compliant, follow data localization requirements, and include built-in security for PHI.
          </p>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Launch Healthcare Services in 14 Days</h3>
          <p className="text-muted-foreground mb-6">
            Explore our healthcare APIs and build faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/resources/api-documentation-coming-soon">View API Docs</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default DigitalHealthAPI;