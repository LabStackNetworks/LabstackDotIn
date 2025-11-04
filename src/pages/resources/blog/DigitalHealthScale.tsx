import { ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/lib/structured-data";

const DigitalHealthScale = () => {
  const structuredData = generateArticleSchema({
    title: "Scaling Digital Health Platforms to Tier 2/3 Cities",
    description: "Expand beyond metros with infrastructure that works in 600+ cities. Learn how platforms scale profitably to tier 2/3 markets.",
    url: "https://labstack.in/resources/blog/digital-health-scale",
    datePublished: "2025-01-22",
    author: "Labstack Team"
  });

  return (
    <PageTemplate
      title="Scaling Digital Health Platforms to Tier 2/3 Cities | Labstack"
      description="Expand beyond metros with infrastructure that works in 600+ cities. Learn how platforms scale profitably to tier 2/3 markets."
      keywords="digital health expansion India, tier 2 tier 3 healthcare, healthcare platform scaling, rural healthcare technology"
      canonical="https://labstack.in/resources/blog/digital-health-scale"
      structuredData={structuredData}
    >
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/resources/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Scaling Digital Health Platforms to Tier 2/3 Cities
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Expand beyond metros with proven infrastructure and network coverage
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime="2025-02-05">February 5, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r">
            <p className="text-muted-foreground mb-0">
              70% of India lives beyond metros, yet most digital health platforms serve &lt;10% of these markets. 
              Platforms with tier 2/3 infrastructure grow 3x faster and capture underserved demand.
            </p>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            The Tier 2/3 Opportunity
          </h2>
          <p>
            Beyond metros, healthcare access is limited. Digital platforms that solve last-mile delivery, 
            quality provider networks, and local language support unlock massive growth.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Challenges in Tier 2/3 Expansion</h2>
          <ul className="space-y-2">
            <li>Limited provider networks in smaller cities</li>
            <li>Logistics for home sample collection and medicine delivery</li>
            <li>Language and digital literacy barriers</li>
            <li>Lower price points requiring operational efficiency</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Solutions That Scale</h2>
          <p>
            Partner with platforms that have built-in tier 2/3 infrastructure: 600+ city coverage, 
            vernacular support, and unit economics that work at lower price points.
          </p>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Expand to 600+ Cities</h3>
          <p className="text-muted-foreground mb-6">
            Launch tier 2/3 operations in weeks with proven infrastructure.
          </p>
          <Button asChild size="lg">
            <Link to="/book-demo">Book a Demo</Link>
          </Button>
        </div>
      </article>
    </PageTemplate>
  );
};

export default DigitalHealthScale;