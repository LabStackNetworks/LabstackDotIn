import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, TrendingDown, AlertCircle, CheckCircle, BarChart3 } from "lucide-react";

const ReducingClaimsLeakage = () => {
  return (
    <PageTemplate
      title="Reducing OPD Claims Leakage by 12%: Insurer Case Study"
      description="How SKU-level controls, automated audit trails, and fraud detection reduced OPD claims leakage from 18% to 6% for a major TPA, while improving member NPS by 25 points."
      keywords="claims leakage reduction, OPD fraud detection, insurance claims management, TPA claims control, healthcare fraud prevention"
      canonical="https://labstack.in/resources/blog/reducing-opd-claims-leakage"
    >
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-block bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium mb-4">
              Insurance & TPA
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Reducing OPD Claims Leakage by <span className="text-gradient">12%</span>: Insurer Case Study
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span>December 12, 2024</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>By Insurance Solutions Team</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="card-gradient p-8 rounded-2xl mb-12 border-l-4 border-primary">
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center">
              <Shield className="mr-3 text-primary" />
              Executive Summary
            </h2>
            <p className="text-muted-foreground mb-4">
              A major TPA managing 500K+ OPD benefit members was experiencing 18% claims leakage—costing ₹12+ crores annually. 
              Through SKU-level controls, automated audit trails, and real-time fraud detection, leakage dropped to 6% within 8 months.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-destructive mb-2">18% → 6%</div>
                <div className="text-sm text-muted-foreground">Claims Leakage Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">+25 pts</div>
                <div className="text-sm text-muted-foreground">Member NPS Gain</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">SLA Adherence</div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">The Problem: Uncontrolled Leakage</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              OPD benefits are a growing segment in Indian health insurance, covering consultations, diagnostics, and medicines. 
              However, the lack of structured controls leads to significant leakage through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="card-gradient p-6 rounded-xl border-l-4 border-destructive">
                <AlertCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Provider-Side Issues</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Billing for services not rendered</li>
                  <li>• Upcoding (billing higher-priced SK Us)</li>
                  <li>• Duplicate billing across episodes</li>
                  <li>• Non-covered items billed as covered</li>
                </ul>
              </div>
              <div className="card-gradient p-6 rounded-xl border-l-4 border-destructive">
                <AlertCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Member-Side Issues</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sharing benefits with non-members</li>
                  <li>• Requesting unnecessary tests/medicines</li>
                  <li>• Post-policy lapse utilization</li>
                  <li>• Coordinated fraud with providers</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The TPA's existing process relied on manual claim reviews—sampling 5-10% of claims and auditing them post-facto. 
              This approach caught obvious fraud but missed sophisticated patterns. Average leakage sat at 18%, significantly 
              higher than the 8-10% industry benchmark.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">The Solution: Multi-Layer Control System</h2>
            
            <div className="card-gradient p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-heading font-bold mb-6">1. SKU-Level Eligibility Controls</h3>
              <p className="text-muted-foreground mb-4">
                Instead of blanket approvals, every SKU (test, medicine, consultation type) was mapped to policy coverage rules:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Test Whitelisting:</strong> Pre-approved list of 3,500+ diagnostic tests 
                    with MRP caps. Anything outside this list required manual approval.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Medicine Formulary:</strong> Essential medicines list mapped to conditions. 
                    High-abuse drugs (lifestyle, cosmetic) flagged for review.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Consultation Type Rules:</strong> GP consultations auto-approved. 
                    Specialist consults required GP referral or prior authorization.
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-gradient p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-heading font-bold mb-6">2. Real-Time Fraud Detection</h3>
              <p className="text-muted-foreground mb-4">
                Machine learning models analyzed utilization patterns in real-time to flag suspicious activity:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Shield className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Velocity Checks:</strong> Multiple consultations per day, 
                    excessive test ordering (5+ tests per visit), rapid medicine refills.
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Pattern Detection:</strong> Same provider-member combinations with high claims, 
                    unusual prescription patterns, round-number billing.
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Benchmarking:</strong> Claims compared against peer cohorts (age, location, condition). 
                    Outliers automatically escalated for review.
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-gradient p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-heading font-bold mb-6">3. Complete Audit Trail</h3>
              <p className="text-muted-foreground mb-4">
                Every transaction captured immutable records for compliance and investigation:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <BarChart3 className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Consultation Records:</strong> Doctor identity verification, 
                    prescription uploads, consultation duration, video/chat transcripts.
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Diagnostic Records:</strong> Sample collection timestamps, GPS coordinates, 
                    barcode verification, report uploads with NABL signatures.
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Pharmacy Records:</strong> Prescription-to-medicine mapping, 
                    invoice verification, delivery confirmation with OTP.
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-gradient p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-heading font-bold mb-6">4. Provider Performance Management</h3>
              <p className="text-muted-foreground mb-4">
                Continuous monitoring of provider behavior with consequences for non-compliance:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <TrendingDown className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Leakage Scorecards:</strong> Monthly scorecards showing claim rejection rates, 
                    member complaints, benchmark comparisons. Shared with providers.
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Progressive Actions:</strong> Warning → Reduced limits → Temporary suspension → 
                    Permanent removal for repeat violators.
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Incentives for Quality:</strong> Top-performing providers (low leakage, high NPS) 
                    received preference in member routing and faster payments.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Implementation Roadmap</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The rollout followed a phased approach over 8 months:
            </p>

            <div className="space-y-4 mb-6">
              <div className="card-gradient p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground">Month 1-2: Foundation</h3>
                  <span className="text-sm text-primary font-medium">Setup Phase</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  SKU master data creation (tests, medicines, consultations). Mapping to policy rules. Provider onboarding to new system. 
                  Training sessions for claims team and providers.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground">Month 3-4: Pilot</h3>
                  <span className="text-sm text-primary font-medium">Testing Phase</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Launched with 50K members and 100 providers. Real-time controls active but with manual override capability. 
                  Monitored for false positives and system issues. Refined rules based on feedback.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground">Month 5-6: Scale</h3>
                  <span className="text-sm text-primary font-medium">Rollout Phase</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expanded to full member base (500K+) and complete provider network. Fraud detection models trained on pilot data. 
                  Automated majority of decisions with human review only for edge cases.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground">Month 7-8: Optimization</h3>
                  <span className="text-sm text-primary font-medium">Refinement Phase</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fine-tuned fraud models based on 6 months of data. Added predictive analytics for member risk scoring. 
                  Introduced provider incentive programs. Achieved steady-state leakage of 6%.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-4 text-success">Financial Impact</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <strong>₹10 Cr annual savings</strong> from 12% leakage reduction</li>
                  <li>• <strong>ROI of 8x</strong> on implementation costs within first year</li>
                  <li>• <strong>2% improvement</strong> in loss ratio for OPD benefit</li>
                  <li>• <strong>20% reduction</strong> in claims processing costs (automation)</li>
                </ul>
              </div>
              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-4 text-primary">Operational Impact</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <strong>99%+ SLA adherence</strong> for claim approvals (under 2hr TAT)</li>
                  <li>• <strong>80% reduction</strong> in manual claim reviews (automation)</li>
                  <li>• <strong>40% faster</strong> claim settlement (2 days to under 1 day)</li>
                  <li>• <strong>90% reduction</strong> in member complaints about claim rejections</li>
                </ul>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-2xl mb-6 bg-success/5 border-l-4 border-success">
              <h3 className="text-2xl font-heading font-bold mb-4 text-success">Member Experience Gains</h3>
              <p className="text-muted-foreground mb-4">
                Contrary to expectations, tighter controls improved member satisfaction:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">+25 point NPS gain:</strong> From 35 to 60. Members valued faster approvals and transparency.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Instant eligibility checks:</strong> Members knew upfront what was covered, 
                    reducing surprise rejections.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Better provider quality:</strong> Removal of low-quality providers 
                    improved overall member experience.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Key Lessons Learned</h2>
            
            <div className="space-y-4 mb-6">
              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">1. Automation Beats Manual Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Manual claim reviews catch under 30% of fraud. Automated controls with ML models catch over 80% while being faster and cheaper.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">2. Real-Time Controls Are Critical</h3>
                <p className="text-sm text-muted-foreground">
                  Post-facto audits don't prevent fraud—they only detect it after money is lost. Real-time controls stop fraud at source.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">3. Provider Management Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Most leakage comes from a small subset of providers. Identifying and managing them aggressively yields disproportionate impact.
                </p>
              </div>

              <div className="card-gradient p-6 rounded-xl">
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">4. Member Experience Improves with Controls</h3>
                <p className="text-sm text-muted-foreground">
                  Faster decisions, clearer rules, and better provider quality outweigh the perceived "restriction" of tighter controls.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Claims leakage is the silent killer of OPD benefit profitability. Traditional manual review processes are insufficient 
              for the scale and sophistication of modern healthcare fraud.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This TPA's success demonstrates that SKU-level controls, real-time fraud detection, and provider management can 
              dramatically reduce leakage while actually improving member satisfaction. The key is implementing controls that are 
              intelligent (not just restrictive), transparent (not opaque), and fast (not bureaucratic).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For insurers and TPAs managing OPD benefits, investing in modern claims control infrastructure isn't optional—it's 
              existential for profitability.
            </p>
          </div>

          {/* CTA Section */}
          <div className="card-gradient p-8 rounded-2xl mt-12 text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Control Your <span className="text-gradient">Claims Leakage</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              See how Labstack's SKU-level controls and fraud detection can help your TPA reduce leakage and improve member satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button size="lg" className="btn-gradient">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/who-we-serve/insurers-tpas">
                <Button size="lg" variant="outline" className="btn-outline-gradient">
                  Solutions for Insurers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default ReducingClaimsLeakage;