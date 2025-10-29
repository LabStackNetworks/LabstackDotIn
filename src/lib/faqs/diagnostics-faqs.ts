/**
 * FAQ Data for Diagnostics Page
 * Organized by persona: Insurers, Digital Health Platforms, Providers
 */

export const diagnosticsFAQs = [
  // General Questions
  {
    question: "What is the coverage area for diagnostics services?",
    answer: "We cover 9,000+ pincodes for home sample collection and 2,600+ pincodes for center visits across India, including Tier-1, Tier-2, and Tier-3 cities."
  },
  {
    question: "How long does it take to integrate Labstack diagnostics?",
    answer: "Integration takes 48 hours on average. Our API-first approach and comprehensive documentation enable rapid deployment with minimal engineering effort."
  },
  {
    question: "What types of tests are supported?",
    answer: "We support pathology (biochemistry, hematology, serology), radiology (X-ray, ultrasound, CT, MRI), cardiac tests (ECG, ECHO, TMT), genetic testing, microbiome analysis, and food allergy panels (IgG/IgE) through our verified lab network."
  },
  
  // Quality & Compliance
  {
    question: "How do you ensure diagnostic quality?",
    answer: "We enforce 100% report verification before delivery, implement phlebo blacklisting by pincode, use CSAT-based lab selection, provide digital raw values with smart reporting, and conduct regular quality audits of partner labs."
  },
  {
    question: "Are your labs NABL accredited?",
    answer: "Yes, all partner labs in our network are NABL (National Accreditation Board for Testing and Calibration Laboratories) accredited and follow ISO 15189 standards for medical laboratories."
  },
  {
    question: "How do you handle report errors or discrepancies?",
    answer: "We have a multi-layer verification process. If any discrepancy is found, reports are held back for re-testing. We maintain less than 0.1% report error rate through automated checks and manual review."
  },
  
  // For Insurers & TPAs
  {
    question: "Can you support pre-policy health checks for insurance?",
    answer: "Yes, we support comprehensive pre-policy health check packages with guaranteed turnaround times, digital report delivery, and integration with insurance underwriting systems."
  },
  {
    question: "How does billing and reconciliation work?",
    answer: "We provide automated reconciliation with transparent pricing, SKU-level tracking, and API-based billing integration. Monthly invoices with complete audit trails are generated automatically."
  },
  {
    question: "What is your TAT (Turnaround Time) guarantee?",
    answer: "Standard pathology tests: 24-48 hours. Radiology: Same day to 48 hours. Genetic tests: 7-14 days. We provide SLA-backed guarantees with real-time tracking and automated escalations for delays."
  },
  
  // For Digital Health Platforms
  {
    question: "Can I white-label the diagnostics experience?",
    answer: "Yes, diagnostics services are fully white-labelable. From booking interface to report delivery, everything carries your brand. We power the infrastructure invisibly."
  },
  {
    question: "Do you provide raw digital values or just PDF reports?",
    answer: "We provide both. Raw digital values are structured data that enable trend charts, predictive analytics, and clinical decision support. PDFs are also available for printing and sharing."
  },
  {
    question: "How does home sample collection work?",
    answer: "Patients book slots through your app. Our phlebotomists arrive at the scheduled time with proper PPE and sample collection kits. Samples are transported to labs within 4 hours with temperature control."
  },
  
  // For Healthcare Providers
  {
    question: "Can I integrate diagnostics into my clinic workflow?",
    answer: "Yes, we provide EMR integration, e-prescription uploads, and automatic test ordering. Results flow back into your system automatically with patient matching."
  },
  {
    question: "What if I need specialized or rare tests?",
    answer: "Our network includes reference labs for specialized testing. If a test is not available in our network, we'll onboard the required lab within 48 hours to fulfill the order."
  },
  
  // Pricing & Commercial
  {
    question: "How does pricing work?",
    answer: "Pricing is usage-based with tiered volume discounts. No setup fees or minimum commitments. Pay only for completed tests. Custom enterprise pricing available for high-volume partners."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No hidden charges. The price includes sample collection, testing, quality checks, report generation, and digital delivery. Home visit charges may apply in remote areas."
  }
];
