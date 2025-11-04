/**
 * FAQ Data for InsureTech Companies
 * Deep dive into digital insurance platforms, revenue models, scaling healthcare benefits
 */

export const insuretechFAQs = [
  // Platform & Launch
  {
    question: "How quickly can we launch healthcare services for our members?",
    answer: "14 days for nationwide rollout across 9,000+ pincodes. Week 1: API integration, benefit design, branding setup. Week 2: Testing, member communication templates, go-live. No vendor contracts, no network building, no operational setup required. Works for 100 to 100,000+ members. Scale further as you grow—add new cities/services weekly with zero friction."
  },
  {
    question: "What healthcare services can we offer to our insurance members?",
    answer: "Complete healthcare stack: (1) Diagnostics—3,000+ tests, home collection + center visits, pathology + radiology (MRI, CT, X-ray, USG), NABL-accredited labs, (2) Consultations—24/7 teleconsults, 25+ specialties, in-person doctor visits, second opinions, (3) Pharmacy—18,000+ pincodes delivery, chronic medication refills, prescription management, (4) Preventive care—annual health checkups, executive packages, cancer screenings, (5) Chronic care programs—diabetes, hypertension, PCOS management with longitudinal tracking, (6) Health camps—employer worksites, community screenings with digital reporting. All services white-labeled under your brand across metros to Tier-3 cities."
  },
  {
    question: "Will this compete with our core insurance business?",
    answer: "No—healthcare delivery complements insurance and drives member value: (1) Higher engagement—members actively using benefits increases policy stickiness and reduces churn, (2) Better claims data—preventive care generates structured health data improving underwriting accuracy, (3) Revenue diversification—earn from service fulfillment beyond insurance premiums, (4) Member retention—90-day active users show 40% higher renewal rates, (5) Competitive moat—OPD benefits differentiate your policies in crowded insurance market. Pure B2B partnership—we power delivery, you own the member relationship and economics."
  },
  {
    question: "How does this drive incremental revenue for our InsureTech?",
    answer: "Multiple revenue streams: (1) Service margins—earn 10-15% on diagnostics, consultations, pharmacy fulfillment, (2) Higher ARPU—members with healthcare benefits have 15-20% higher average revenue per user, (3) Prescription monetization—8-12% margin on medicine sales from teleconsult prescriptions, (4) Preventive packages—upsell annual health checkups (₹1,500-3,000 per member), executive packages (₹5,000-15,000), (5) Employer programs—B2B2C revenue from corporate health camps, wellness programs, (6) Data monetization—aggregated health insights for pharma partnerships, wellness brand tie-ups. Example: 10,000 active members, 30% monthly utilization, ₹600 avg transaction, 12% margin = ₹2.16 lakhs monthly incremental revenue (₹25.9 lakhs annually)."
  },
  {
    question: "Can we customize pricing and benefits for different member segments?",
    answer: "Fully flexible benefit design: (1) Policy-based tiers—basic (₹800-1,200 PMPM OPD), standard (₹1,200-1,800 PMPM), premium (₹1,800-2,500 PMPM), (2) Service limits—cap annual diagnostics (2-4 tests), consultations (unlimited vs 10/year), pharmacy (₹500-2,000/month), (3) Geographic variations—metro vs tier-2/3 pricing reflecting local costs, (4) Family floater—individual vs couple vs family coverage with shared limits, (5) Copay structures—members pay 20-30% copay reducing your cost, increasing utilization, (6) Bundled packages—combine OPD with specific coverages (maternity, chronic disease). Configure benefits, pricing, limits via admin console in real-time. A/B test different benefit structures to optimize member engagement and unit economics."
  },
  {
    question: "What happens if members face service delivery issues?",
    answer: "SLA-backed operations protecting your brand: (1) 99.5% uptime commitment across all services, (2) Failed home collection—alternate phlebotomist within 2 hours or center visit arranged, (3) Delayed reports—auto-escalation at 24 hours, expedited processing, (4) Doctor unavailability—backup within 15 minutes for teleconsults, (5) Pharmacy delays—re-dispatch same day, alternate pharmacy if needed. Member complaints: Logged in your dashboard → We investigate within 2 hours → Resolved within 24 hours → Member notified. Escalation matrix: Partner success manager (0-24h) → Operations head (24-48h) → Leadership (48h+). Quality failures result in provider penalties and SLA credits to your account. We handle end-to-end so your support team focuses on insurance queries, not healthcare operations."
  },

  // Technical Integration
  {
    question: "How does the API integration work with our existing platform?",
    answer: "Developer-first integration: (1) REST APIs—standard endpoints for eligibility checks, service booking, order tracking, reports retrieval, (2) Authentication—JWT tokens or API keys, SSO integration available, (3) Webhooks—real-time notifications for order status, report ready, claim updates, (4) SDKs—React, React Native, Flutter components for faster integration, (5) White-label widgets—embeddable booking flows if you don't want custom UI. Integration timeline: 14 days from start to production launch including testing and white-label customization. Technical requirements: REST API knowledge, webhook handling, frontend for displaying bookings/reports. We provide: Sandbox environment, Postman collections, detailed API docs, integration support, developer slack channel, code samples in JavaScript/Python/PHP."
  },
  {
    question: "Can members book services directly through our app?",
    answer: "Seamless in-app experience: (1) Embedded booking—integrate booking flow into your app via SDK or webview, (2) Member authentication—SSO so no separate login needed, (3) Eligibility checks—real-time API to verify coverage, limits, copays, (4) Booking confirmation—instant confirmation with appointment details, phlebotomist info for home collection, (5) Order tracking—real-time status updates (sample collected, in-transit to lab, processing, report ready), (6) Digital reports—PDF reports accessible in-app, push notifications when ready, (7) Prescription management—post-teleconsult, prescription auto-appears with pharmacy ordering enabled. Fully white-labeled under your brand—members never see Labstack, experience feels native to your platform."
  },
  {
    question: "What data do we get access to for our members?",
    answer: "Comprehensive health data: (1) Service utilization—diagnostic tests ordered, consultations taken, pharmacy purchases per member, (2) Clinical data—test results, vitals, prescriptions, diagnosis codes (structured and anonymized), (3) Engagement metrics—booking frequency, service preferences, drop-off points, NPS scores, (4) Claims data—service-level costs, member copays, reconciliation reports for billing, (5) Health outcomes—longitudinal tracking of chronic conditions (HbA1c trends for diabetics, BP for hypertensives), (6) Population insights—aggregated health risk scores, disease prevalence, preventive screening completion rates. Data delivery: Real-time via API, batch reports (daily/weekly), dashboards with drill-down analytics. Use cases: Improve underwriting models, personalized policy recommendations, targeted wellness campaigns, claims fraud detection, risk stratification for high-cost members."
  },
  {
    question: "Do you have pre-built integrations with insurance platforms?",
    answer: "Standard integrations available: (1) Policy admin systems—Majesco, Duck Creek, Insuresoft for automatic member sync and eligibility checks, (2) CRM platforms—Salesforce, Zoho CRM for member communication triggers, (3) Payment gateways—Razorpay, PayU, Stripe for copay collection and settlements, (4) Analytics tools—Google Analytics, Mixpanel, Amplitude for event tracking, (5) Communication—Twilio, MSG91 for SMS/WhatsApp notifications branded from your number. Custom integrations: Most InsureTechs have proprietary platforms—we build custom connectors within 14 days. API-first architecture means integration is straightforward regardless of your tech stack. Previous integrations: Worked with 15+ digital insurance platforms including policy issuance, claims management, member portals."
  },

  // Operations & Scaling
  {
    question: "How do you maintain service quality across 9,000+ pincodes?",
    answer: "Multi-layered quality assurance: (1) Provider vetting—NABH/NABL accreditation for labs, NMC registration verification for doctors, license checks for pharmacies, (2) Real-time monitoring—SLA dashboards tracking collection times, report TAT, consultation wait times, pharmacy delivery, (3) Quality audits—monthly audits of diagnostic accuracy, sample handling, consultation quality, medicine authenticity, (4) Member feedback—post-service NPS surveys, automatic escalation on ratings below 7/10, (5) Provider penalties—SLA breaches result in financial penalties and potential blacklisting, (6) Continuous training—quarterly training for phlebotomists, customer service, quality protocols. Works across geographies: Same quality standards whether Mumbai or Nashik, Bangalore or Hubli. Provider performance publicly visible in partner dashboard—you can see which labs/doctors perform best in which cities."
  },
  {
    question: "Can we scale to new geographies quickly as we grow?",
    answer: "Geographic expansion built-in: (1) Current coverage—9,000+ pincodes across 28 states, metros to tier-3 cities already live, (2) New city activation—weekly pincode additions as network expands, no action needed from you, (3) On-demand expansion—need specific city/pincode? We activate within 7-14 days, (4) State-wise rollout—launch state-by-state for regulatory reasons (e.g., pharmacy licensing), we handle compliance per state. Your growth timeline: Launch nationwide Day 1 or phase by city clusters—Delhi NCR → Bangalore+Pune → Rest of South → West → East. Member moves cities? No problem—services follow them across India. Example: InsureTech launched with 5,000 members in 4 metros, expanded to 50,000 members across 50 cities in 6 months—zero operational effort, network scaled automatically."
  },
  {
    question: "What happens during high-volume periods like renewal season or campaigns?",
    answer: "Built for scale and spikes: (1) Auto-scaling infrastructure—handles 10x volume spikes without performance degradation, (2) Dynamic provider allocation—route orders to nearby providers with capacity during peak times, (3) Priority queuing—SLA guarantees maintained even at 30,000+ orders/month, (4) Advance planning—notify us of expected campaigns (open enrollment, wellness month) to pre-provision capacity, (5) Real-time monitoring—ops team tracks volumes 24/7, proactive escalation if bottlenecks detected. Historical performance: Managed 3x volume during annual checkup season (Jan-Mar), 5x during corporate wellness campaigns without SLA breaches. Load testing: Platform tested to 100,000 concurrent bookings—well beyond typical InsureTech scale."
  },
  {
    question: "How do you handle member support and complaints?",
    answer: "Tiered support model: (1) Member-facing support—your team handles insurance queries, policy questions (your expertise), (2) Service delivery support—we handle healthcare ops queries via white-labeled channels (your brand, our backend), (3) Shared dashboard—you can track all service tickets, SLA adherence, resolutions in real-time, (4) Escalation paths—critical issues escalated to your success manager within 1 hour, (5) Proactive communication—automated updates to members (order confirmed, sample collected, report ready) reducing support load by 60%. Support SLAs: First response in 2 hours, resolution in 24 hours, critical issues (failed collection, wrong reports) in 4 hours. Multilingual support: English, Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi across phone, WhatsApp, chat. Training: We train your support team on healthcare workflows so they can handle Tier-1 queries without escalation."
  },

  // Business Model & Economics
  {
    question: "What is the business model—how do we make money?",
    answer: "Multiple monetization options: (1) Cost plus model: we charge wholesale rates (e.g., ₹500 for diagnostic test), you charge members ₹600-700 (20-40% margin), (2) Revenue share: we handle pricing, you earn 10-15% commission on gross GMV, (3) Subscription model: members pay ₹X/month for unlimited access, you pay us fulfillment costs per transaction, (4) Bundled pricing: include OPD in insurance premium, we charge you fixed PMPM (₹800-2,000), you earn from premium arbitrage, (5) Hybrid model: diagnostics/consultations subsidized (low margin) to drive engagement, pharmacy at 8-12% margin for monetization. Choose model based on your strategy: High growth InsureTechs prefer cost plus for margin control, mature players prefer revenue share for simplicity. Transparent pricing: SKU level rate cards provided upfront, no hidden fees, volume discounts at 500/2,000/5,000+ members."
  },
  {
    question: "How do renewals and churn improve with healthcare benefits?",
    answer: "Healthcare drives retention: (1) 40% higher renewal rates—members actively using healthcare benefits resist switching insurers, (2) Lower CAC—engaged members refer friends/family, reducing acquisition costs by 25-30%, (3) Longer LTV—members stay 2-3 years longer vs insurance-only members (1 year avg tenure), (4) Upsell opportunities—engaged members more receptive to policy upgrades, top-ups, family coverage additions, (5) Brand loyalty—healthcare touchpoints create emotional connection beyond transactional insurance. Data proof: Analyzed 10,000 members across 3 InsureTech partners—members with 3+ healthcare interactions in first 90 days showed 42% higher 1-year retention. Churn reasons shift from 'found cheaper policy' to life events (job change, moved abroad)—healthcare makes you sticky."
  },
  {
    question: "Can we start small and scale as we grow?",
    answer: "Flexible scaling: (1) Minimum viable launch—start with 100-500 members, single city, limited services (diagnostics + teleconsult) to test product-market fit, (2) Pay-as-you-grow—no upfront commitments, costs scale with utilization (fixed cost per transaction), (3) Feature expansion—add pharmacy, chronic care, preventive packages as member base grows and unit economics improve, (4) Geographic phasing—launch 1-2 cities, expand based on member concentration and demand, (5) Zero sunk costs—no infrastructure investment, no vendor contracts, no hiring field staff. Common path: Month 1-3 (100-500 members, 2 cities, diagnostics+consults), Month 4-6 (1,000-2,000 members, 5 cities, add pharmacy), Month 7-12 (5,000+ members, nationwide, full services). Only constraint: Member concentration in serviceable pincodes—if your members are scattered in rural areas, gradual pincode expansion needed."
  },
  {
    question: "What are typical member engagement and utilization rates?",
    answer: "Utilization benchmarks vary by benefit design: (1) Generous benefits (unlimited consults, low copay)—50-60% members use services at least once in 90 days, 25-30% monthly active users, (2) Moderate benefits (capped tests, 20% copay)—30-40% quarterly usage, 15-20% monthly active, (3) Limited benefits (high copay, restricted services)—15-20% quarterly usage, 8-10% monthly active. Service breakdown: Teleconsults most utilized (40-50% of members annually), diagnostics next (25-30% for preventive checkups), pharmacy (20-25% recurring users for chronic meds), preventive packages (10-15% during campaigns). Utilization correlates with: Benefit generosity, member communication (email/push nudges), lifecycle triggers (new member onboarding, policy renewal), health events (seasonal flu, chronic condition diagnosis). High performers: InsureTechs with proactive member engagement (health tips, reminders) achieve 65-70% annual utilization vs 30-35% for passive approaches."
  },

  // Compliance & Security
  {
    question: "How do you handle health data privacy and compliance?",
    answer: "Robust data governance: (1) HIPAA-equivalent standards—data encryption at rest and transit, access controls, audit logs, (2) ABDM integration—Digital Health ID, health records interoperability as per government norms, (3) Consent management—explicit member consent for data sharing, granular permissions for different data types, (4) Data residency—all health data stored in India, AWS Mumbai region, (5) Anonymization—aggregated insights shared with you, PII removed, (6) Regular audits—annual security audits, penetration testing, vulnerability assessments. Your responsibilities: Member consent at signup, data usage disclosure in policy T&Cs, data breach notification protocols. Our responsibility: Secure infrastructure, provider compliance, data handling procedures. Insurance-specific: Claims data formatted for TPA integration, ICD-10 coding for diagnosis, CPT codes for procedures—compatible with existing claims workflows."
  },
  {
    question: "What regulatory approvals do you have?",
    answer: "Compliance across verticals: (1) Diagnostics—NABL-accredited labs, AERB approval for radiology centers, biomedical waste disposal licenses, (2) Pharmacy—Drug licenses (Retail, Wholesale), FSSAI for nutraceuticals, state-wise pharmacy licenses, (3) Consultations—RMP verification for all doctors, telemedicine guidelines compliance (TMA rules 2020), (4) Home services—phlebotomy certifications, sample transport protocols (ICMR guidelines), (5) Data—ISO 27001 (information security), SOC 2 compliance in progress. State-specific compliance: Different pharmacy regulations in Maharashtra, Tamil Nadu, Karnataka, Delhi—we handle variations. Ongoing compliance: License renewals, regulatory updates (ABDM, NMC norms) managed automatically. You don't need separate registrations—our licenses cover healthcare delivery, you focus on insurance regulatory compliance (IRDAI)."
  },
  {
    question: "Can members use health insurance for cashless claims through your platform?",
    answer: "Insurance integration roadmap: (1) OPD claims—currently most insurers don't cover OPD cashlessly (reimbursement model), we generate claim-ready invoices with diagnosis codes for member reimbursement, (2) Diagnostic claims—if your policy includes diagnostic coverage, we can integrate cashless approval workflows (prior authorization APIs), (3) Pharmacy claims—support insurance-linked pharmacy benefits with real-time eligibility checks and claims submission, (4) Hospitalization referrals—if diagnostics/consults identify need for hospitalization, seamless handoff to your insurance claims process. Future-ready: As industry moves toward OPD cashless (IRDAI pushing), our platform already built to support real-time claims adjudication, pre-authorization, and coordination of benefits. Custom integration per InsureTech's policy design and claims infrastructure."
  },

  // Competitive Advantage
  {
    question: "How is this different from building in-house healthcare delivery?",
    answer: "Build vs buy comparison: (1) Time—in-house takes 12-18 months (vendor contracts, network building, ops setup, tech development), Labstack in 14 days, (2) Cost—in-house requires ₹2-5 Cr investment (salaries, infrastructure, marketing, working capital), Labstack zero upfront cost (pay per transaction), (3) Focus—in-house diverts tech/product resources from core insurance business, Labstack lets you focus on underwriting, distribution, customer experience, (4) Risk—in-house operational risk (quality issues, compliance failures, service gaps), Labstack absorbs operational risk with SLAs and penalties, (5) Scale—in-house limited to cities you've built network, Labstack nationwide from Day 1. When to build in-house: If healthcare is core business (not just insurance), you have 100,000+ members to justify fixed costs, and 18+ month timeline acceptable. When to partner: If insurance is core, healthcare is engagement/retention tool, need speed to market, want asset-light model."
  },
  {
    question: "What makes Labstack different from other healthcare aggregators?",
    answer: "InsureTech-specific advantages: (1) B2B focus—we don't compete for your members, pure infrastructure partner vs consumer-facing aggregators like Practo/PharmEasy, (2) White-label depth—not just branding, but custom benefit logic, policy integrations, member segmentation, (3) Insurance workflows—built for claims data, eligibility checks, copay handling, policy limits vs generic booking platforms, (4) Structured data—longitudinal health records, risk scoring, disease management data useful for underwriting vs transactional logs, (5) Member lifecycle integration—onboarding, engagement, retention workflows vs one-off bookings, (6) Scale commitment—SLAs for 99.5% uptime, 30,000+ orders/month capacity vs aggregators focused on individual consumers. We've built specifically for InsureTech use case—not retrofitting B2C product for B2B. Previous partners include 5 digital insurance platforms across health, wellness, and corporate benefits."
  },
  {
    question: "Can we use this to differentiate from competitor InsureTechs?",
    answer: "Differentiation strategies: (1) Unique benefits—offer OPD coverage competitors don't (teleconsults, home diagnostics, pharmacy), (2) Better experience—instant booking, home-first delivery, real-time tracking vs clunky reimbursement at competitors, (3) Bundled pricing—transparent pricing (insurance + OPD upfront) vs competitors hiding OPD costs in fine print, (4) Outcome-based—showcase prevention ROI (reduced claims, healthier members) vs just insurance payouts, (5) Member engagement—healthcare touchpoints create brand visibility vs annual premium renewal interaction. Real examples: InsureTech differentiated in SME segment by offering home diagnostics in tier-2 cities (competitors only metros), grew 40% QoQ. Another positioned as 'health-first insurance' vs traditional insurance, higher NPS (+45 vs +20 industry avg). Healthcare benefits shift conversation from price-driven commoditized insurance to value-based holistic health coverage—harder for competitors to copy without similar infrastructure partnerships."
  },

  // Success Stories & Proof
  {
    question: "What results have other InsureTechs achieved with Labstack?",
    answer: "Real partner outcomes: (1) Digital health insurer (5K members, 4 metros)—launched preventive checkups with home collection, 71% completion in 30 days (vs 37% at competitors requiring center visits), members renewed early citing convenience, 15% ARPU increase from bundled pricing, (2) Corporate wellness InsureTech (10K employees, 8 cities)—deployed teleconsult + pharmacy, 85% employee engagement in first quarter, HR clients increased wellness budget allocation 20% next cycle due to visible utilization, (3) Broker-led InsureTech (15K lives, pan-India)—offered OPD benefits to differentiate in corporate RFPs, won 3 major accounts specifically on healthcare value prop, grew AUM ₹12 Cr in 6 months, (4) Micro-insurance startup (50K members, rural focus)—used home-based diagnostics for adverse selection reduction, underwriting risk pool improved with structured health data, claim ratios optimized by 8%. Common thread: Healthcare transformed from cost center to growth driver—member acquisition, retention, monetization all improved measurably."
  }
];
