import { ArrowLeft, Heart, TrendingDown, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";

const DiseaseManagementCaseStudy = () => {
  return (
    <PageTemplate
      title="Corporate Diabetes Program Case Study: 52% Reduction in Hospitalizations | Labstack"
      description="How a 10,000-employee corporate reduced diabetes-related hospitalizations by 52% and saved ₹1.2 Cr annually through disease management."
      keywords="diabetes management program, corporate wellness case study, disease management ROI, chronic care program"
      canonical="https://labstack.in/resources/case-studies/disease-management"
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
            Corporate Reduces Diabetes Hospitalizations by 52% with Disease Management
          </h1>
          <p className="text-xl text-muted-foreground">
            How a tech company's diabetes program achieved 78% employee engagement and saved ₹1.2 Cr annually
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-muted/50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Company</p>
                <p className="font-semibold">Large Technology Company</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Industry</p>
                <p className="font-semibold">IT Services</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Employees</p>
                <p className="font-semibold">10,000+ (1,200 diabetic/pre-diabetic)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Program Duration</p>
                <p className="font-semibold">18 months</p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            The Challenge
          </h2>
          <p>
            A large technology company faced escalating healthcare costs driven by diabetes. Annual health 
            screenings revealed 12% of workforce (1,200 employees) had diabetes or pre-diabetes—most uncontrolled. 
            Insurance claims data showed:
          </p>
          <ul className="space-y-2">
            <li>Diabetes-related hospitalizations: 85 per year (7% of total admissions)</li>
            <li>Average hospitalization cost: ₹85,000 per episode</li>
            <li>Annual diabetes-related claims: ₹3.2 Cr (22% of total medical spend)</li>
            <li>Absenteeism: Diabetic employees took 4.5 more sick days annually vs. healthy peers</li>
            <li>Complications: 15% of diabetics developed complications (retinopathy, neuropathy, kidney disease)</li>
          </ul>
          <p>
            Existing wellness initiatives—annual health checks and generic health talks—had minimal impact. 
            Engagement was &lt;15%, and health metrics showed no improvement year-over-year.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Solution</h2>
          <p>
            The company launched a comprehensive diabetes management program with Labstack, targeting all 
            1,200 diabetic/pre-diabetic employees:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 1: Enrollment & Assessment (Month 1)</h3>
          <ul className="space-y-2">
            <li>Personalized outreach: CEO email + SMS + care coordinator calls to all eligible employees</li>
            <li>Free baseline HbA1c testing for all enrollees (on-site at offices)</li>
            <li>Health risk assessments capturing diet, activity, medication adherence, complications</li>
            <li>Risk stratification: Low (HbA1c &lt;7%), Medium (7-8.5%), High (&gt;8.5% or complications)</li>
          </ul>
          <p><strong>Result:</strong> 78% enrollment (935 of 1,200 employees)</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 2: Personalized Care Plans (Months 2-3)</h3>
          <ul className="space-y-2">
            <li>Assigned care coordinators (1 coordinator per 120 patients)</li>
            <li>Monthly video consultations with endocrinologists for high-risk patients</li>
            <li>Quarterly consultations for medium-risk, biannual for low-risk</li>
            <li>Personalized nutrition plans from registered dietitians (Indian meal preferences)</li>
            <li>Exercise coaching via app with daily activity tracking</li>
            <li>Medication reminders and pharmacy integration for refills</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Phase 3: Continuous Monitoring (Month 4+)</h3>
          <ul className="space-y-2">
            <li>Subsidized glucometers (₹500 co-pay) with auto-sync to care team dashboard</li>
            <li>Weekly blood sugar logging via app (alerts if values out of range)</li>
            <li>Monthly HbA1c tests for high-risk patients, quarterly for others</li>
            <li>Automated escalation: Care coordinator contacted within 24 hours if concerning trends</li>
            <li>Gamification: Points, badges, and rewards for logging data and hitting targets</li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <TrendingDown className="h-6 w-6 text-primary" />
            Clinical Outcomes (18 Months)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">52%</p>
              <p className="text-sm text-muted-foreground">Reduction in diabetes-related hospitalizations (85 → 41)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">82%</p>
              <p className="text-sm text-muted-foreground">Of high-risk patients achieved HbA1c &lt;7.5% (controlled)</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">1.2%</p>
              <p className="text-sm text-muted-foreground">Average HbA1c reduction across all participants</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">45%</p>
              <p className="text-sm text-muted-foreground">Decrease in emergency department visits</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">65%</p>
              <p className="text-sm text-muted-foreground">Sustained active engagement at 12 months</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-lg bg-primary/5">
              <p className="text-3xl font-bold text-primary mb-2">3.2 days</p>
              <p className="text-sm text-muted-foreground">Reduction in sick leave per diabetic employee annually</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">Financial Impact</h3>
          <div className="bg-muted/50 p-6 rounded-lg">
            <p className="font-semibold mb-3">Annual Cost Savings (Year 2):</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Hospitalization reduction:</strong> 44 fewer admissions × ₹85,000 = ₹37.4 lakhs saved</li>
              <li>• <strong>Emergency visits:</strong> 30 fewer ER visits × ₹8,000 = ₹2.4 lakhs saved</li>
              <li>• <strong>Complications prevented:</strong> Estimated ₹25 lakhs (long-term savings)</li>
              <li>• <strong>Productivity gains:</strong> 3.2 fewer sick days × 935 employees × ₹3,000/day = ₹90 lakhs</li>
              <li>• <strong>Total savings: ₹1.55 Cr annually</strong></li>
            </ul>
            <p className="font-semibold mt-4 mb-2">Program Cost:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Platform fee: ₹600/employee/month × 935 × 12 = ₹67 lakhs</li>
              <li>• Consultations, tests, coaching: ₹35 lakhs</li>
              <li>• <strong>Total cost: ₹1.02 Cr</strong></li>
            </ul>
            <p className="font-semibold mt-4 text-primary">
              Net savings: ₹53 lakhs (Year 1) → ₹1.2 Cr+ (Year 2 onwards, as program scales)
            </p>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
            <p className="text-lg font-semibold mb-2">Employee Testimonial</p>
            <p className="text-muted-foreground italic mb-2">
              "My HbA1c was 9.8 when I joined the program. I was scared but didn't know what to do. The care 
              coordinator called me every week, the dietitian gave me realistic meal plans I could actually follow, 
              and my doctor adjusted my medications based on my daily glucose readings. 8 months later, my HbA1c 
              is 6.8. I have energy again, I lost 12 kg, and I'm off insulin. This program saved my life."
            </p>
            <p className="text-sm font-semibold">— Software Engineer, Age 42</p>
          </div>

          <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-4">
            <Activity className="h-6 w-6 text-primary" />
            Key Success Factors
          </h2>
          <ul className="space-y-2">
            <li><strong>Leadership support:</strong> CEO personally endorsed program, attended launch events</li>
            <li><strong>Personalization:</strong> Care plans adapted to Indian diet, culture, work schedules</li>
            <li><strong>Human touch:</strong> Care coordinators built trust through regular check-ins</li>
            <li><strong>Technology-enabled:</strong> App made daily tracking easy, not burdensome</li>
            <li><strong>Financial incentives:</strong> Company subsidized glucometers, tests, and consultations</li>
            <li><strong>Privacy assurance:</strong> Health data not shared with HR/managers—built trust</li>
            <li><strong>Long-term commitment:</strong> Program positioned as 2-3 year journey, not quick fix</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Program Evolution</h2>
          <p>
            Based on Year 1 success, the company expanded the program:
          </p>
          <ul className="space-y-2">
            <li>Added hypertension management (850 additional employees enrolled)</li>
            <li>Launched pre-diabetes prevention program (600 employees)</li>
            <li>Extended to employee dependents (spouses, parents)</li>
            <li>Integrated with onsite clinic for seamless care coordination</li>
            <li>Shared success metrics in quarterly town halls—increased enrollment by 15%</li>
          </ul>
        </div>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Launch Disease Management for Your Organization</h3>
          <p className="text-muted-foreground mb-6">
            See how leading corporates are reducing hospitalizations by 50%+, achieving 80% control rates, 
            and saving ₹8,000-12,000 per patient annually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/who-we-serve/disease-management">Solutions for Disease Management</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default DiseaseManagementCaseStudy;