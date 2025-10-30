import { ArrowLeft, TrendingDown, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";

const InsurerCaseStudy = () => {
  return (
    <PageTemplate
      title="Regional Insurer Case Study: 60% Reduction in Claim Processing Time | Labstack"
      description="How a regional health insurer scaled from 2 states to 8 states, processed 50,000+ claims monthly, and reduced processing time from 14 days to 5 days."
      keywords="health insurance case study, claims processing automation, insurance digital transformation, TPA technology implementation"
      canonical="https://labstack.in/resources/case-studies/insurer"
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
            Regional Insurer Scales Operations by 4x with 60% Lower Processing Costs
          </h1>
          <p className="text-xl text-muted-foreground">
            How a health insurance company expanded from 2 states to 8 states while maintaining service quality
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Company</p>
                <p className="font-semibold">Mid-sized Regional Health Insurer</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Industry</p>
                <p className="font-semibold">Health Insurance / TPA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Coverage</p>
                <p className="font-semibold">Expanded from 2 to 8 states</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Members</p>
                <p className="font-semibold">200,000+ covered lives</p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Users className="h-6 w-6 text-primary" />
            The Challenge
          </h2>
          <p>
            A regional health insurer with strong presence in 2 southern states wanted to expand nationally. 
            Their challenge: existing manual processes couldn't scale beyond current volumes. With average 
            claim processing time of 14 days and 8-person claims team handling 12,000 claims monthly, 
            expansion meant proportional increase in headcount and operational costs.
          </p>
          <p>
            Key pain points included:
          </p>
          <ul className="space-y-2">
            <li>Manual claim verification taking 3-4 days per claim</li>
            <li>No network coverage in target expansion states</li>
            <li>Member queries consuming 40% of team bandwidth</li>
            <li>Delayed settlements impacting member satisfaction (NPS: 32)</li>
            <li>Limited data visibility preventing fraud detection</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            The Solution
          </h2>
          <p>
            The insurer implemented Labstack's digital claims platform with the following approach:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 1: Core Automation (Month 1)</h3>
          <ul className="space-y-2">
            <li>Migrated member database and policy records to digital platform</li>
            <li>Integrated with existing hospital network for cashless processing</li>
            <li>Enabled automated eligibility verification and pre-authorization workflows</li>
            <li>Launched member self-service portal for claim status and e-cards</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 2: Network Expansion (Months 2-3)</h3>
          <ul className="space-y-2">
            <li>Onboarded 2,500+ hospitals, labs, and clinics in 6 new states</li>
            <li>Established cashless facility across expanded network</li>
            <li>Set up provider portals for claim submission and tracking</li>
            <li>Implemented network analytics for utilization monitoring</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 3: Intelligence & Optimization (Month 4+)</h3>
          <ul className="space-y-2">
            <li>Deployed AI-powered fraud detection flagging 200+ suspicious claims in first month</li>
            <li>Automated claim routing based on complexity and risk scores</li>
            <li>Real-time dashboards for claims team and management</li>
            <li>Predictive analytics for claims forecasting and pricing</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <TrendingDown className="h-6 w-6 text-primary" />
            Results Achieved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">64%</p>
              <p className="text-sm text-muted-foreground">Reduction in claim processing time (14 days → 5 days)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">4x</p>
              <p className="text-sm text-muted-foreground">Increase in claims volume handled (12K → 50K monthly)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">70%</p>
              <p className="text-sm text-muted-foreground">Reduction in member query volume (self-service adoption)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">38 pts</p>
              <p className="text-sm text-muted-foreground">Improvement in member NPS (32 → 70)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">₹2.1 Cr</p>
              <p className="text-sm text-muted-foreground">Annual fraud prevention savings identified</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">8 states</p>
              <p className="text-sm text-muted-foreground">Geographic expansion from 2 states in 6 months</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">Financial Impact</h3>
          <div className="bg-muted/50 p-6 rounded-lg">
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Operating cost reduction:</strong> ₹180 per claim → ₹65 per claim (64% decrease)</li>
              <li>• <strong>Team efficiency:</strong> Same 8-person team processing 4x volume</li>
              <li>• <strong>Fraud savings:</strong> Prevented ₹2.1 Cr in fraudulent claims (Year 1)</li>
              <li>• <strong>Network expansion ROI:</strong> 6-month payback on platform investment</li>
              <li>• <strong>Member retention:</strong> 25% improvement in policy renewal rates</li>
            </ul>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Clock className="h-6 w-6 text-primary" />
            Implementation Timeline
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="font-semibold">Week 1-2: Setup & Migration</p>
              <p className="text-sm text-muted-foreground">Data migration, team training, pilot with 500 members</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="font-semibold">Week 3-4: Full Rollout</p>
              <p className="text-sm text-muted-foreground">All members active, cashless enabled, self-service live</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="font-semibold">Month 2-3: Network Expansion</p>
              <p className="text-sm text-muted-foreground">Provider onboarding in 6 new states, 2,500+ facilities</p>
            </div>
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="font-semibold">Month 4+: Optimization</p>
              <p className="text-sm text-muted-foreground">AI fraud detection, advanced analytics, continuous improvement</p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="text-lg font-semibold mb-2">Client Testimonial</p>
            <p className="text-muted-foreground italic mb-2">
              "We went from processing 12,000 claims monthly with a stretched team to handling 50,000 claims 
              seamlessly. The platform didn't just automate workflows—it gave us the confidence to expand 
              nationally without fear of operational breakdown. Our members are happier, our team is more 
              productive, and we're catching fraud we never would have detected manually."
            </p>
            <p className="text-sm font-semibold">— Chief Operations Officer</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Key Success Factors</h2>
          <ul className="space-y-2">
            <li><strong>Leadership commitment:</strong> CEO championed digital transformation as strategic priority</li>
            <li><strong>Phased approach:</strong> Started with core automation before expanding network</li>
            <li><strong>Change management:</strong> Invested in team training and member communication</li>
            <li><strong>Data discipline:</strong> Clean data migration enabled accurate analytics from day one</li>
            <li><strong>Provider engagement:</strong> Worked closely with top 100 hospitals to ensure smooth cashless rollout</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Transform Your Insurance Operations</h3>
          <p className="text-muted-foreground mb-6">
            See how leading insurers are scaling operations, reducing costs, and improving member satisfaction 
            with digital claims platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/who-we-serve/insurers-tpas">Solutions for Insurers</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default InsurerCaseStudy;