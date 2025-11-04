import { ArrowLeft, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/lib/structured-data";

const BrokerCaseStudy = () => {
  const structuredData = generateArticleSchema({
    title: "Insurance Broker Case Study: 3x Revenue Growth with Wellness Platform",
    description: "How a mid-sized broker grew from 30 to 95 corporate clients, achieved 35% higher retention, and differentiated through integrated wellness offerings.",
    url: "https://labstack.in/resources/case-studies/broker",
    datePublished: "2025-01-20",
    author: "Labstack Team"
  });

  return (
    <PageTemplate
      title="Insurance Broker Case Study: 3x Revenue Growth with Wellness Platform | Labstack"
      description="How a mid-sized broker grew from 30 to 95 corporate clients, achieved 35% higher retention, and differentiated through integrated wellness offerings."
      keywords="insurance broker case study, corporate wellness platform, broker technology, employee benefits technology"
      canonical="https://labstack.in/resources/case-studies/broker"
      structuredData={structuredData}
    >
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/resources/research-hub" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Research Hub
        </Link>

        <header className="mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            CUSTOMER SUCCESS STORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Broker Grows Revenue 3x Through Integrated Wellness Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            How a mid-sized insurance broker differentiated with technology and won 65 new corporate accounts
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Company</p>
                <p className="font-semibold">Regional Insurance Brokerage</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Industry</p>
                <p className="font-semibold">Insurance Brokerage</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Client Base</p>
                <p className="font-semibold">30 → 95 corporate accounts (3.2x growth)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Lives Covered</p>
                <p className="font-semibold">25,000 → 85,000 employees</p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Users className="h-6 w-6 text-primary" />
            The Challenge
          </h2>
          <p>
            A 15-year-old insurance brokerage was losing ground to larger competitors. Despite competitive 
            pricing and good service, they struggled to differentiate in pitches. Corporate clients viewed 
            them as "just another broker"—no unique value beyond price negotiation. Renewal rates were 
            declining (68%), and growth had stalled for 3 years.
          </p>
          <p>Key challenges:</p>
          <ul className="space-y-2">
            <li>Commoditized market—all brokers offering similar services and networks</li>
            <li>No technology stack—manual policy admin, claims tracking, and member support</li>
            <li>Limited data visibility for clients—quarterly reports, no real-time insights</li>
            <li>High operational costs—8-person team maxed out at 30 accounts</li>
            <li>Client churn due to premium increases at renewal (no wellness/prevention strategy)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Solution</h2>
          <p>
            The broker partnered with Labstack to launch an integrated wellness and benefits platform, 
            transforming from traditional broker to "health benefits partner."
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 1: Technology Foundation (Month 1)</h3>
          <ul className="space-y-2">
            <li>Implemented digital policy administration and claims tracking system</li>
            <li>Launched white-label member portal for e-cards, claim status, and network search</li>
            <li>Automated enrollment, changes, and deletions</li>
            <li>Deployed client dashboards with real-time claims and utilization data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 2: Wellness Integration (Month 2)</h3>
          <ul className="space-y-2">
            <li>Added telemedicine consultations (free for minor issues)</li>
            <li>Integrated preventive health assessments and annual check-ups</li>
            <li>Launched wellness challenges and health coaching programs</li>
            <li>Enabled discounted diagnostics and pharmacy benefits</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 3: Market Repositioning (Month 3+)</h3>
          <ul className="space-y-2">
            <li>Rebranded as "integrated health benefits partner" vs. insurance broker</li>
            <li>Showcased wellness ROI in sales pitches (20% claims reduction data)</li>
            <li>Offered 90-day wellness pilots to prospects at discounted rates</li>
            <li>Built referral program—satisfied clients introduced peer companies</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            Results Achieved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">3.2x</p>
              <p className="text-sm text-muted-foreground">Revenue growth in 18 months (30 → 95 accounts)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">35%</p>
              <p className="text-sm text-muted-foreground">Higher client retention (68% → 92%)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">60%</p>
              <p className="text-sm text-muted-foreground">Reduction in operational cost per member</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">18%</p>
              <p className="text-sm text-muted-foreground">Average claims reduction for wellness-engaged clients</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">70%</p>
              <p className="text-sm text-muted-foreground">Of new clients cited wellness as key differentiator</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">22</p>
              <p className="text-sm text-muted-foreground">Client referrals generated (no marketing spend)</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">Financial Impact</h3>
          <div className="bg-muted/50 p-6 rounded-lg">
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Revenue:</strong> ₹4.2 Cr → ₹13.5 Cr annually (3.2x growth)</li>
              <li>• <strong>Margins:</strong> Improved from 12% to 19% through operational efficiency</li>
              <li>• <strong>Average deal size:</strong> Increased 45% (450 → 650 employees per account)</li>
              <li>• <strong>Platform ROI:</strong> Paid back in 4 months, now 8x annual value</li>
              <li>• <strong>Market positioning:</strong> Now competing for 1,000+ employee accounts vs. 200-500</li>
            </ul>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="text-lg font-semibold mb-2">Client Testimonial</p>
            <p className="text-muted-foreground italic mb-2">
              "We were competing on price and losing. Now we compete on value and win. Prospects don't ask 
              'What's your commission?'—they ask 'Can your wellness platform really reduce our claims by 20%?' 
              When we show them the data from existing clients, the sale closes itself. This transformation 
              saved our business."
            </p>
            <p className="text-sm font-semibold">— Managing Partner</p>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Award className="h-6 w-6 text-primary" />
            Competitive Advantages Gained
          </h2>
          <ul className="space-y-2">
            <li><strong>Differentiation:</strong> Only broker in region offering integrated wellness with insurance</li>
            <li><strong>Data-driven sales:</strong> Prospects see real-time dashboards in demos—not PowerPoint promises</li>
            <li><strong>Client stickiness:</strong> 92% retention vs. industry average 65-70%</li>
            <li><strong>Premium positioning:</strong> Charge 15-20% higher fees than competitors—clients pay for value</li>
            <li><strong>Referrals:</strong> 40% of new business from existing client introductions</li>
            <li><strong>Team efficiency:</strong> Same 8-person team managing 3x more clients with technology</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Key Success Factors</h2>
          <ul className="space-y-2">
            <li><strong>Bold repositioning:</strong> Moved from "insurance broker" to "health benefits partner"</li>
            <li><strong>Pilot strategy:</strong> Offered 90-day wellness trials to prove ROI before full commitment</li>
            <li><strong>Data transparency:</strong> Shared wellness engagement and claims metrics openly with clients</li>
            <li><strong>Client education:</strong> Trained HR teams on wellness ROI and program management</li>
            <li><strong>Long-term focus:</strong> Positioned wellness as 3-year strategy, not quick fix</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Differentiate Your Brokerage with Wellness</h3>
          <p className="text-muted-foreground mb-6">
            See how leading brokers are growing revenue 3x faster, achieving 35% higher retention, and 
            winning larger accounts through integrated wellness platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/who-we-serve/brokers-corporate-wellness">Solutions for Brokers</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default BrokerCaseStudy;