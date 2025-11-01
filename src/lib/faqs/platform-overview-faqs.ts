/**
 * FAQ Data for Platform Overview Page
 * General platform questions across all services with value proposition focus
 */

export const platformOverviewFAQs = [
  // Platform Basics
  {
    question: "What is Labstack and how does it work?",
    answer: "Labstack is a healthcare growth operating system enabling companies to launch diagnostics, consultations, pharmacy, and home care services across 9,000+ pincodes in India through a single API in 14 days."
  },
  {
    question: "How quickly can I launch healthcare services across multiple cities?",
    answer: "14 days for basic launch (diagnostics, teleconsults, pharmacy) covering metros and tier-2 cities. 3-4 weeks for customized programs with white-label branding and HRMS integration. Much faster than building in-house (6-12 months)."
  },
  {
    question: "Do I need to sign contracts with individual providers?",
    answer: "No. One contract with Labstack covers all providers. We handle provider relationships, onboarding, compliance, quality management, and payments across the network. You avoid managing 50+ separate vendor contracts."
  },
  {
    question: "Is it truly white-label or will patients see Labstack branding?",
    answer: "Completely white-label. Your brand on all patient touchpoints—booking confirmations, sample collection visits, digital reports, consultation interfaces, pharmacy delivery. Labstack operates invisibly powering infrastructure."
  },
  {
    question: "What is the pricing model and are there any hidden fees?",
    answer: "Usage-based pricing with no setup fees. Pay only for services delivered (per test, per consultation, per pharmacy order). Volume discounts: 10K-100K users (10% off), 100K-500K (15-20% off), 500K+ (20-30% off). Transparent rate cards—no hidden fees."
  },
  
  // Services & Coverage
  {
    question: "Which cities and areas do you cover for diagnostics and pharmacy?",
    answer: "9,000+ pincodes for diagnostics (home collection), 18,000+ pincodes for pharmacy delivery. Covers metros (Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Chennai), tier-2 cities (Indore, Jaipur, Coimbatore, Kochi, Nagpur, Chandigarh), and 200+ tier-3 cities."
  },
  {
    question: "Can I use only some services, not all at once?",
    answer: "Yes. Start with one service (e.g., diagnostics) and add more later. Services enabled/disabled through API or console. Common approach: Launch diagnostics (month 1), add consultations (month 2), pharmacy (month 3)."
  },
  {
    question: "What if I already have some provider partnerships?",
    answer: "We integrate your existing providers into our platform or run parallel hybrid network. You maintain those relationships while accessing our broader network for expansion. Intelligent routing—your provider first, Labstack as failover."
  },
  {
    question: "How do you ensure service quality across different cities and providers?",
    answer: "Multi-layer quality framework: Provider verification (credentials, licensing), CSAT monitoring (<4.2/5 rating triggers review), automated SLA tracking (sample collection, report delivery, medicine delivery), blacklisting underperformers, and continuous audits."
  },
  {
    question: "Can patients get same-day diagnostic reports in tier-2 cities?",
    answer: "Yes. Routine tests (CBC, thyroid, lipid profile) with same-day results available across metros and tier-2 cities with morning sample collection. Specialized tests (hormones, cancer markers) within 24-48 hours."
  },
  
  // Operations & Integration
  {
    question: "How does billing and reconciliation work?",
    answer: "Automated reconciliation with transparent pricing, SKU-level tracking (see every test, consultation, medicine), API-based billing integration, and monthly invoices with complete audit trails. Export to accounting systems (Tally, QuickBooks, Zoho Books)."
  },
  {
    question: "How does the console work and what can I do with it?",
    answer: "Web-based operations console for managing bookings, tracking fulfillment in real-time, handling exceptions (failed collections, delayed reports), viewing analytics (utilization, CSAT, costs), and downloading reports. No technical knowledge required."
  },
  {
    question: "What integrations do you support?",
    answer: "EMR systems (Practo Ray, HealthPlix, Epic), billing software (Tally, QuickBooks), CRM platforms (Salesforce), payment gateways (Razorpay, PayU), communication tools (WhatsApp Business API). RESTful APIs, webhooks, pre-built connectors available."
  },
  {
    question: "Is there a minimum volume commitment?",
    answer: "No minimum commitment. Start small and scale. Pay only for services delivered. Enterprise contracts may have volume-based pricing tiers with better rates."
  },
  {
    question: "What kind of support do you provide during implementation?",
    answer: "Dedicated account manager, 24/7 technical support, integration assistance (sandbox, code samples, developer Slack), operational training (console walkthrough, exception handling), and direct engineering access during implementation."
  },
  
  // Security & Compliance
  {
    question: "How secure is patient data on your platform?",
    answer: "Healthcare-grade security: AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, audit logs (7-year retention), MFA for admin access. Compliance: IT Act 2000, DISHA guidelines, ABDM/NHDM standards, SOC 2 Type II in progress."
  },
  {
    question: "Can we launch in select cities first and expand later?",
    answer: "Yes. Phased geographic rollout fully supported. Start with metros (Mumbai, Delhi, Bangalore) for first 3 months, validate unit economics, then add tier-2 cities (month 4-6), then tier-3 (month 7+). Control via API which cities are active."
  },
  {
    question: "How do you handle emergency situations flagged by test results?",
    answer: "Critical value management: System auto-flags critical values (HbA1c >12%, blood sugar >400 mg/dL, creatinine >3 mg/dL) within 5 minutes. Instant alerts to patient, family, care manager, doctor. Care manager calls patient within 1 hour, coordinates urgent consultation or ER referral."
  },
  {
    question: "Can we offer cashless OPD benefits for corporate and insurance users?",
    answer: "Yes. API-based eligibility verification, real-time benefit checks, automated claim submission, reconciliation. Cashless OPD for diagnostics and pharmacy live across 9,000+ pincodes for corporate and insurance users."
  },
  {
    question: "Do you support international expansion outside India?",
    answer: "Currently India-focused. Building capabilities for Bangladesh (Q4 2025), Sri Lanka (Q1 2026), Myanmar, Nepal (2026), UAE, Saudi Arabia (2026-2027). Early access program—design partners get priority access to new geographies."
  },
  {
    question: "What happens if a patient experiences service failure?",
    answer: "SLA-backed guarantees: Failed home collection—alternate phlebotomist within 2 hours. Delayed reports—escalation at 24 hours, compensation if delay impacts patient. Wrong reports—re-testing at no cost within 24 hours. Complaint resolution within 24 hours."
  },
  {
    question: "Can we customize care protocols for specific patient populations?",
    answer: "Fully configurable. Define test frequencies (HbA1c every 3 or 6 months), consultation triggers (when to escalate), medication protocols (formulary preferences), escalation rules (when to involve specialists). Configure via admin portal without code changes."
  },
  {
    question: "How do you handle prescription verification for pharmacy orders?",
    answer: "Automated prescription verification via OCR + pharmacist review. Valid prescriptions approved within 30 minutes. Invalid prescriptions flagged with reason (expired, wrong dosage, contraindication) for user correction or doctor consultation."
  },
  {
    question: "What analytics and reporting do you provide?",
    answer: "Comprehensive dashboards: Utilization metrics (bookings, completions, cancellations), clinical outcomes (HbA1c trends, BP control), engagement metrics (enrollment rate, active users), financial data (revenue, costs, margins), quality metrics (CSAT, SLA adherence). Export to Excel, PDF, or BI tools."
  },
  {
    question: "Can we organize health camps at corporate offices across multiple cities?",
    answer: "Yes. End-to-end camp management: Pre-camp employee communication, on-site phlebotomists and doctors, digital reports within 48 hours. Available across metros and 100+ tier-2 cities. Camps from 50 to 5,000+ employees."
  }
];
