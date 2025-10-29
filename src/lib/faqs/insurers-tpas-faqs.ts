/**
 * FAQ Data for Insurers & TPAs Page
 * Focus on OPD, fraud controls, reconciliation, and member experience
 */

export const insurersTPAsFAQs = [
  {
    question: "How does Labstack reduce OPD claims leakage?",
    answer: "SKU-level inclusion/exclusion rules, automated fraud detection, real-time audit trails, prescription verification, and blacklisting of suspicious patterns. Partners report 12% leakage reduction on average."
  },
  {
    question: "Can I set limits on specific services or medicines?",
    answer: "Yes, granular controls available: cap diagnostic test prices, restrict pharmacy SKUs, set consultation specialties, define coverage limits per member, and configure approval workflows for high-value claims."
  },
  {
    question: "How do you ensure members get quality service?",
    answer: "SLA-backed fulfillment with 99%+ adherence, CSAT monitoring after every service, geo-specific provider blacklisting for poor performance, and real-time escalations for failed appointments or delays."
  },
  {
    question: "What is the member eligibility check process?",
    answer: "API-based real-time eligibility verification. Check coverage, remaining limits, and service entitlements before booking. Instant approval or denial with reasons. Integrates with your policy management system."
  },
  {
    question: "How does automated reconciliation work?",
    answer: "Every transaction captured with member ID, policy number, service SKU, and provider details. Monthly invoices with full audit trail. API endpoints for programmatic reconciliation. Export to Excel or integrate with your billing system."
  },
  {
    question: "Can we add our existing provider network into Labstack?",
    answer: "Yes, we can onboard your contracted providers into our platform. They'll use our tech stack for fulfillment while you maintain commercial relationships. Gives you access to our broader network for expansion."
  },
  {
    question: "What analytics and reporting do you provide?",
    answer: "Dashboards showing utilization by service type, city-wise claims, top SKUs, CSAT scores, SLA adherence, and cost trends. Downloadable reports for audits. Custom reports available for enterprise clients."
  },
  {
    question: "How do you handle fraud in pharmacy orders?",
    answer: "Prescription verification mandatory, pharmacist validation, SKU-level purchase limits, flagging of duplicate orders, blacklisting suspicious members, and automated alerts for abnormal patterns."
  },
  {
    question: "Can members use OPD benefits in Tier-2/3 cities?",
    answer: "Yes, 9,000+ pincodes covered including Tier-2 and Tier-3. Same quality standards and SLA enforcement across all geographies. Consistent member experience from metros to smaller towns."
  },
  {
    question: "What happens if a member complains about service quality?",
    answer: "Complaints logged in system, automatic escalation to account manager, investigation within 24 hours, resolution with alternate provider if needed, and provider blacklisted if patterns emerge. CSAT feedback loop built-in."
  },
  {
    question: "Do you support cashless OPD claims?",
    answer: "Yes, fully cashless. Member verification at time of booking, eligibility check via API, service fulfillment without member payment, and consolidated billing to you monthly. Members never pay out-of-pocket."
  },
  {
    question: "How quickly can we launch OPD benefits for our members?",
    answer: "14 days for basic integration. 2-3 weeks for custom eligibility rules, branding, and member communication templates. 4-6 weeks for complex enterprise integrations with legacy systems."
  }
];
