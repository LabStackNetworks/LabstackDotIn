/**
 * FAQ Data for API Solutions Page
 * Developer-focused questions with technical depth, scalability, integration patterns
 */

export const apiSolutionsFAQs = [
  // Integration & Setup
  {
    question: "How long does it take to integrate Labstack APIs into our platform?",
    answer: "Full production launch in 14 days from start to finish. Week 1: API integration using pre-built SDKs (JavaScript, Python, PHP, Java), sandbox testing, authentication setup. Week 2: Production deployment with webhooks, white-label branding, and go-live testing."
  },
  {
    question: "Do you provide embeddable widgets or only backend APIs?",
    answer: "Both. Embeddable JavaScript widgets for quick integration (drop-in booking flows), RESTful APIs for custom UI development, and mobile SDKs for iOS/Android apps. Choose based on your development resources."
  },
  {
    question: "Can we use our own UI and call your APIs in the background (headless)?",
    answer: "Absolutely. Headless architecture lets you control frontend design completely while APIs handle backend—eligibility verification, provider coordination, fulfillment, billing. Webhooks provide real-time status updates."
  },
  {
    question: "What if we want to use our contracted providers alongside Labstack's network?",
    answer: "Hybrid network mode supported. We onboard your providers onto our platform for unified operations, or run dual networks with intelligent routing—your provider first, Labstack as failover."
  },
  {
    question: "How does complete white-labeling work across all touchpoints?",
    answer: "Your logo, brand colors, custom domain (wellness.yourcompany.com), all SMS/emails/WhatsApp from your brand. Reports carry your header/footer. Support agents represent your company. Labstack completely invisible."
  },
  
  // Technical & Scalability
  {
    question: "What is your API uptime SLA and what happens during downtime?",
    answer: "99.5% uptime SLA with multi-region redundancy and automatic failover. Real-time status page (status.labstack.in). If we breach SLA, 5% monthly fee credited back automatically. Queued requests processed when systems recover."
  },
  {
    question: "How does pricing scale as our user base grows from 10K to 1M users?",
    answer: "Volume-based pricing: 0-10K users (standard rates), 10K-100K (10% discount), 100K-500K (15-20% discount), 500K+ (20-30% discount). No minimum commitments—pay only for completed transactions."
  },
  {
    question: "Can we handle 10,000+ concurrent users during peak times like open enrollment?",
    answer: "Yes. Auto-scaling infrastructure tested up to 50,000 concurrent users. Pre-event scaling available—inform us 1 week before traffic spikes (health camps, enrollment drives), we pre-provision extra capacity."
  },
  {
    question: "What SDKs and programming languages do you support?",
    answer: "Official SDKs: JavaScript/TypeScript (npm), Python (pip), PHP (Composer), Java (Maven). Mobile native: iOS Swift (CocoaPods), Android Kotlin (Gradle). Community SDKs: Ruby, Go, .NET. RESTful APIs work with any language."
  },
  {
    question: "Do you provide webhooks for real-time order status updates?",
    answer: "Yes. Webhooks for booking confirmation, sample collection, report ready, consultation completion, medicine delivery, payment events, exceptions. Configurable retry logic and signature verification included."
  },
  
  // Data & Security
  {
    question: "How do you handle data privacy, security, and regulatory compliance?",
    answer: "Healthcare-grade security: AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, audit logs (7-year retention). Compliance: IT Act 2000, DISHA guidelines, ABDM/NHDM standards. SOC 2 Type II in progress."
  },
  {
    question: "Can we export or own the patient data generated through your platform?",
    answer: "You own all data legally. Real-time API access, bulk CSV/JSON exports, database replication for enterprise clients. HL7 FHIR-compatible. If you leave, full data dump provided within 30 days—zero lock-in."
  },
  {
    question: "How do you secure API keys and prevent unauthorized access?",
    answer: "OAuth 2.0 and API key authentication with IP whitelisting. JWT tokens for user-specific operations. Rate limiting prevents abuse. Webhook signature verification. Rotate keys easily via dashboard. MFA for admin access."
  },
  
  // Operations & Support
  {
    question: "Can we handle customer support ourselves or do you manage it?",
    answer: "Flexible: (1) Partner-managed—you handle support, we provide ops console for your team, (2) Labstack-managed—we handle support branded as your company, (3) Hybrid—you handle Tier-1, we handle Tier-2/3 escalations."
  },
  {
    question: "Can we run pilots in select cities before nationwide rollout?",
    answer: "Yes. City-based controls let you enable services only in Mumbai, Delhi, Bangalore for first 3 months. User cohort testing with 1,000 users before opening to 100,000. Service-specific rollout (diagnostics first, then consultations, then pharmacy)."
  },
  {
    question: "What is API rate limiting and how does it work?",
    answer: "Standard tier: 1,000 requests/minute. Enterprise tier: custom limits based on volume. Rate limits per API key. Burst allowance for traffic spikes. Real-time usage dashboard shows API consumption."
  },
  {
    question: "How detailed is your API documentation?",
    answer: "Interactive docs with code examples in 5+ languages, step-by-step tutorials, authentication guides, request/response schemas, error codes, Postman collections. Developer Slack community with 1,500+ members."
  },
  {
    question: "Is there a sandbox environment for testing before production?",
    answer: "Yes. Full-featured sandbox with test data, mock providers, simulated workflows. Test payments, order fulfillment, edge cases without charges. Switch to production with single config change."
  },
  
  // Advanced Use Cases
  {
    question: "Can we build marketplace features where users book directly from providers?",
    answer: "Yes. APIs support provider listing, filtering by speciality/location/price, direct booking, reviews/ratings. You control discovery experience, we handle fulfillment and quality."
  },
  {
    question: "Can we customize test panels or create bundled packages?",
    answer: "Absolutely. API supports custom test bundles (e.g., 'Executive Health Package' with 50+ tests). Define package SKU, included tests, pricing. Dynamic test selection during booking also supported."
  },
  {
    question: "How do you handle prescription verification for pharmacy orders?",
    answer: "Automated prescription verification via OCR + pharmacist review. API accepts prescription image upload. Valid prescriptions approved within 30 minutes. Invalid prescriptions flagged with reason for user correction."
  },
  {
    question: "Can we track provider performance and quality metrics via API?",
    answer: "Yes. API endpoints for provider CSAT scores, SLA adherence, turnaround times, error rates. Blacklist underperformers programmatically. Quality dashboards available in console for visual monitoring."
  },
  {
    question: "Do you support international expansion outside India?",
    answer: "India-first, expanding globally: Bangladesh (Q4 2025), Sri Lanka (Q1 2026), Myanmar, Nepal (2026), UAE, Saudi Arabia (2026-2027). Early access program—design partners get priority access to new geographies."
  },
  {
    question: "Can I integrate with health record systems like Practo Ray, HealthPlix, or other Indian platforms?",
    answer: "Yes. HL7/FHIR support for health record system integration. Bidirectional data sync—push care plans to Labstack, pull completed test results back into your system. Custom connectors for popular Indian platforms. Integration timeline: 14 days for standard platforms."
  },
  {
    question: "How do we handle pricing transparency for end users?",
    answer: "API returns real-time pricing before booking. Transparent price breakup (test cost + collection fee). Dynamic pricing based on geography, network tier (standard/premium), urgency (same-day vs 24-hour)."
  },
  {
    question: "What analytics and reporting do you provide via API?",
    answer: "API endpoints for utilization metrics (bookings, completions, cancellations), financial data (revenue, costs, margins), quality metrics (CSAT, SLA), cohort analysis. Custom dashboards via our UI or export to your BI tools."
  }
];
