import { ArrowLeft, Rocket, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";

const DigitalHealthCaseStudy = () => {
  return (
    <PageTemplate
      title="Digital Health Platform Case Study: 0 to 100K Users in 6 Months | Labstack"
      description="How a telemedicine startup launched full healthcare services in 14 days and scaled to 100,000 users across 300 cities with API infrastructure."
      keywords="digital health platform case study, telemedicine startup growth, healthcare API integration, healthtech scaling"
      canonical="https://labstack.in/resources/case-studies/digital-health"
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
            Telemedicine Startup Scales to 100K Users in 6 Months with API-First Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground">
            How a digital health platform launched in 14 days and achieved 300-city coverage without building operations
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Company</p>
                <p className="font-semibold">Digital Health Platform (B2C)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Industry</p>
                <p className="font-semibold">Telemedicine / Digital Health</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Growth</p>
                <p className="font-semibold">0 → 100,000 users in 6 months</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Coverage</p>
                <p className="font-semibold">300+ cities across India</p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Users className="h-6 w-6 text-primary" />
            The Challenge
          </h2>
          <p>
            A founder team with healthcare and tech backgrounds wanted to launch a comprehensive digital health 
            platform offering consultations, diagnostics, pharmacy, and wellness. Their vision: make healthcare 
            accessible in tier-2/3 cities where doctor availability is limited.
          </p>
          <p>Initial planning revealed daunting challenges:</p>
          <ul className="space-y-2">
            <li>Building operations from scratch would take 18-24 months</li>
            <li>Onboarding doctors, labs, pharmacies across 300+ cities required massive field team</li>
            <li>Logistics for home sample collection and medicine delivery needed nationwide partnerships</li>
            <li>Quality control, compliance, and 24/7 support operations required specialized expertise</li>
            <li>Estimated ₹5-8 Cr initial investment before first paying user</li>
          </ul>
          <p>
            With limited funding (₹2 Cr seed round) and 6-month runway, the traditional build approach was 
            not viable. They needed a faster, capital-efficient path to market.
          </p>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Rocket className="h-6 w-6 text-primary" />
            The Solution: API-First Launch
          </h2>
          <p>
            The team pivoted to an API-first strategy with Labstack, focusing 100% of resources on user 
            experience and growth while outsourcing operations:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Week 1: Integration & Setup</h3>
          <ul className="space-y-2">
            <li>Integrated Consultations API (5,000+ doctors across 30 specialties)</li>
            <li>Integrated Diagnostics API (200+ tests, 300+ cities, home collection)</li>
            <li>Integrated Pharmacy API (medicine delivery, prescription validation)</li>
            <li>Built user app with React Native (iOS + Android)</li>
            <li>Set up payment gateway and user authentication</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Week 2: Testing & Launch</h3>
          <ul className="space-y-2">
            <li>Internal testing with 50 beta users (team, friends, family)</li>
            <li>Fixed bugs, refined UX based on feedback</li>
            <li>Launched to public with limited marketing (social media, WhatsApp)</li>
            <li>Monitored API performance, user journeys, and support queries</li>
          </ul>
          <p><strong>Result:</strong> Live app with full healthcare services in 14 days</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Months 1-3: Product-Market Fit</h3>
          <ul className="space-y-2">
            <li>Iterated on user experience based on behavior data and feedback</li>
            <li>Optimized onboarding flow (5-step → 2-step, improved conversion 3x)</li>
            <li>Added consultation packages for chronic conditions (diabetes, BP monitoring)</li>
            <li>Launched referral program (₹100 credit for referrer and referee)</li>
            <li>Focused on tier-2/3 cities where telemedicine adoption was highest</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Months 4-6: Growth Acceleration</h3>
          <ul className="space-y-2">
            <li>Raised Series A (₹12 Cr) based on strong unit economics and traction</li>
            <li>Invested in digital marketing (Google, Facebook, influencer partnerships)</li>
            <li>Partnered with 3 corporate accounts for employee health services</li>
            <li>Expanded to vernacular languages (Hindi, Tamil, Telugu, Marathi)</li>
            <li>Crossed 100,000 registered users, 25,000 monthly consultations</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            Results Achieved (6 Months)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">14 days</p>
              <p className="text-sm text-muted-foreground">Time to launch vs. 18-24 months if built in-house</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">100K</p>
              <p className="text-sm text-muted-foreground">Registered users in 6 months</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">300+</p>
              <p className="text-sm text-muted-foreground">Cities covered from day 1 (no operations team needed)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">90%</p>
              <p className="text-sm text-muted-foreground">Capital saved vs. building operations (₹5-8 Cr avoided)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">25K</p>
              <p className="text-sm text-muted-foreground">Monthly consultations by Month 6</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">4.6/5</p>
              <p className="text-sm text-muted-foreground">Average user rating (quality maintained via APIs)</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">Financial & Operational Impact</h3>
          <div className="bg-muted/50 p-6 rounded-lg">
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Development cost:</strong> ₹35 lakhs (6-person team, 6 months) vs. ₹5-8 Cr for full build</li>
              <li>• <strong>Time to market:</strong> 14 days vs. 18-24 months</li>
              <li>• <strong>Team size:</strong> 12 people (10 tech/product, 2 marketing) vs. 50+ if built operations</li>
              <li>• <strong>Unit economics:</strong> ₹180 revenue per consultation, ₹65 API cost, ₹115 contribution margin</li>
              <li>• <strong>Series A valuation:</strong> ₹60 Cr (justified by growth trajectory enabled by fast launch)</li>
              <li>• <strong>Runway extension:</strong> 6+ months saved → more time to prove product-market fit</li>
            </ul>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="text-lg font-semibold mb-2">Founder Testimonial</p>
            <p className="text-muted-foreground italic mb-2">
              "We would have never launched if we tried to build operations ourselves. APIs gave us superpowers—
              nationwide coverage, 5,000+ doctors, home diagnostics in 300 cities, all on day 1. We focused 100% 
              on user experience and growth. Within 6 months we had proof of concept for Series A. APIs didn't 
              just save time and money—they saved our startup."
            </p>
            <p className="text-sm font-semibold">— Co-founder & CEO</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Key Success Factors</h2>
          <ul className="space-y-2">
            <li><strong>Speed to market:</strong> Launched before competitors could build similar infrastructure</li>
            <li><strong>Capital efficiency:</strong> Proved traction on seed capital, unlocked Series A</li>
            <li><strong>Focus:</strong> Team concentrated on product and growth, not operations</li>
            <li><strong>Quality maintenance:</strong> API provider handled vetting, compliance, support—no quality compromise</li>
            <li><strong>Flexibility:</strong> Could test different use cases without operational commitments</li>
            <li><strong>Scalability:</strong> Infrastructure supported 10x growth without operational headcount increase</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">What's Next</h2>
          <p>
            With strong Series A funding and proven product-market fit, the platform is:
          </p>
          <ul className="space-y-2">
            <li>Expanding to mental health and specialized consultations (physiotherapy, nutrition)</li>
            <li>Launching subscription plans for chronic disease management</li>
            <li>Targeting 500,000 users by end of Year 2</li>
            <li>Exploring B2B channels (corporate wellness, insurance partnerships)</li>
            <li>All enabled by API-first infrastructure that scales without operational complexity</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Launch Your Digital Health Platform in 14 Days</h3>
          <p className="text-muted-foreground mb-6">
            See how healthcare APIs enable fast, capital-efficient launches with nationwide coverage from day 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/resources/api-documentation">View API Docs</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default DigitalHealthCaseStudy;