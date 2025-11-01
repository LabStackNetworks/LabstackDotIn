/**
 * PPMC & MER Specialized FAQs
 * Pre-Policy Medical Check Up and Medical Examination Report workflows
 * For insurance companies, TPAs, and brokers
 */

export const ppmcMERFAQs = [
  // PPMC Basics
  {
    question: "What is PPMC and why is it required by insurers?",
    answer: "PPMC (Pre-Policy Medical Check Up) is a health assessment conducted before issuing health, general, or life insurance policies. Insurers use PPMC to evaluate applicant health status, identify pre-existing conditions, and determine policy terms, premiums, or exclusions."
  },
  {
    question: "How fast can Labstack complete PPMC for policy issuance?",
    answer: "Complete PPMC in <48 hours: home sample collection within 24 hours, reports delivered in 24-48 hours, doctor MER (if needed) within 24 hours of test results. Prevents policy delays and improves conversion rates."
  },
  {
    question: "Which cities are covered for PPMC home sample collection?",
    answer: "PPMC home collection available across 9,000+ pincodes covering all metros (Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai), 50+ Tier-2 cities (Indore, Jaipur, Coimbatore, Kochi, Nagpur), and 200+ Tier-3 cities nationwide."
  },
  
  // MER - Medical Examination Report
  {
    question: "What is MER and how is it different from diagnostic tests?",
    answer: "MER (Medical Examination Report) is a comprehensive clinical examination conducted by a registered doctor as part of PPMC. Includes vital signs, physical examination, medical history assessment, and clinical opinion on insurability—not just test results."
  },
  {
    question: "What is Digital MER and how does it work?",
    answer: "Digital MER is a video consultation where a doctor conducts the medical examination remotely. Patient shares vitals (BP, weight, height measured at home), medical history, and answers clinical questions. Doctor completes MER form digitally—no home visit needed, completed in 30-45 minutes."
  },
  {
    question: "What is Physical MER and when is it required?",
    answer: "Physical MER is an in-person medical examination at applicant's home or clinic. Required for high-sum-insured policies (>₹50L), applicants with complex medical histories, or when insurers mandate physical examination. Doctor visits home, conducts thorough clinical examination, completes MER form."
  },
  {
    question: "Can applicants choose between Digital MER and Physical MER?",
    answer: "Depends on insurer requirements. Digital MER allowed for most policies with sum insured <₹50L and no complex conditions. Physical MER mandatory for high-value policies, senior citizens (>60 years), or when insurer specifically requests physical examination."
  },
  {
    question: "How long does it take to get Digital MER completed?",
    answer: "Digital MER scheduled within 2-6 hours of PPMC test completion. Video consultation takes 30-45 minutes. Doctor submits completed MER form within 2 hours post-consultation. Total turnaround: 4-8 hours from test results to completed MER."
  },
  {
    question: "How long does Physical MER home visit take?",
    answer: "Physical MER doctor visit scheduled within 24 hours. Home visit duration: 45-60 minutes for thorough examination. Doctor submits completed MER form within 4 hours post-visit. Total turnaround: 24-36 hours from test results to completed MER."
  },
  
  // PPMC + MER Workflow
  {
    question: "What is the end-to-end PPMC workflow with MER?",
    answer: "Step 1: Home sample collection (within 24 hours). Step 2: Lab processes tests, results in 24-48 hours. Step 3: Digital or Physical MER by doctor (within 24 hours of results). Step 4: Complete PPMC pack (tests + MER) delivered to insurer digitally within 48-72 hours total."
  },
  {
    question: "What tests are typically included in PPMC packages?",
    answer: "Basic PPMC: CBC, blood sugar, lipid profile, kidney function, liver function, urine analysis. Enhanced PPMC (high sum insured): All basic tests + HbA1c, thyroid, ECG, chest X-ray. MER included in both packages as per insurer requirements."
  },
  {
    question: "Can insurers customize PPMC test panels and MER requirements?",
    answer: "Yes. Fully configurable PPMC protocols: define test panels by age bands, sum insured, policy type. Specify when Digital vs Physical MER required. Set turnaround SLAs, documentation formats, and escalation rules per insurer's underwriting guidelines."
  },
  {
    question: "How do you handle PPMC for applicants in remote areas?",
    answer: "Home sample collection in 9,000+ pincodes including remote areas. Digital MER via video consultation works anywhere with internet. Physical MER available in metros and Tier-2/3 cities—for truly remote areas, applicant travels to nearest town or teleconsult MER approved."
  },
  {
    question: "What happens if PPMC tests show abnormal values?",
    answer: "Doctor conducting MER reviews abnormal results during examination, assesses clinical significance, and provides detailed findings in MER form. Insurer's underwriting team uses PPMC + MER to decide: policy approval, premium loading, condition-specific exclusions, or policy rejection."
  },
  
  // Operations & Quality
  {
    question: "How do you ensure quality of doctors conducting MER?",
    answer: "All MER doctors are MBBS-qualified with valid MCI registration, minimum 3 years practice experience. Trained on insurer-specific MER forms, underwriting requirements, and documentation standards. Quality audits, insurer feedback monitoring, and blacklisting for quality issues ensure consistency."
  },
  {
    question: "Can insurers access PPMC results and MER reports in real-time?",
    answer: "Yes. Real-time digital delivery: test results uploaded as PDF + structured data (JSON/API). MER forms submitted digitally with doctor's signature. Insurer portal access to view/download all PPMC documentation. API integration for automated underwriting workflows."
  },
  {
    question: "What SLAs do you guarantee for PPMC completion?",
    answer: "Sample collection within 24 hours of booking. Test results within 24-48 hours of collection. MER (Digital or Physical) within 24 hours of results. Complete PPMC pack delivered to insurer within 72 hours from booking. SLA breaches result in service credits."
  },
  {
    question: "How is PPMC data security and confidentiality maintained?",
    answer: "Healthcare-grade security: AES-256 encryption, access restricted to authorized insurer personnel only, audit logs for all data access, compliance with IRDAI guidelines on medical data handling. Applicant consent obtained before sharing PPMC data with insurer."
  },
  {
    question: "Can brokers track PPMC status for their referred applicants?",
    answer: "Yes. Broker portal shows real-time PPMC status: collection scheduled, tests completed, MER done, reports delivered. No need for applicants or insurers to update brokers—automated status visibility improves customer experience and reduces broker follow-up burden."
  },
  {
    question: "What is the cost structure for PPMC with MER services?",
    answer: "Transparent pricing: Basic PPMC (tests + Digital MER) ₹1,200-1,800 per applicant. Enhanced PPMC (advanced tests + Physical MER) ₹2,500-3,500 per applicant. Volume discounts for insurers/brokers: 1,000-5,000 PPMCs (10% off), 5,000-10,000 (15% off), 10,000+ (20% off, negotiable)."
  },
  {
    question: "How do you handle PPMC for group insurance policies with multiple applicants?",
    answer: "Bulk PPMC coordination: employee data upload via Excel, automated scheduling across cities, parallel execution (100s of PPMCs simultaneously), consolidated reporting for insurer. Common for corporate group health policies, group term life insurance. SLA maintained even during high-volume enrollment periods."
  }
];
