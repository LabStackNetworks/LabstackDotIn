/**
 * FAQ Data for Insurers & TPAs Page
 * Deep dive into PPMC, MER, cashless workflows, fraud controls
 */

export const insurersTPAsFAQs = [
  // PPMC (Pre-Policy Medical Check-Up) for Insurance Underwriting
  {
    question: "What is PPMC and why do insurers require it?",
    answer: "PPMC (Pre-Policy Medical Check-Up) is a health assessment done before issuing health, general, or life insurance. Insurers use it to evaluate applicant health, identify pre-existing conditions, and determine policy terms, premiums, or exclusions."
  },
  {
    question: "How fast can PPMC be completed for policy issuance?",
    answer: "Complete PPMC in under 48 hours: home sample collection within 24 hours, reports in 24-48 hours, doctor MER (if needed) within 24 hours of results. Fast turnaround prevents policy delays and improves conversion."
  },
  {
    question: "What is the difference between PPMC at center vs PPMC at home?",
    answer: "PPMC at center: Member visits partner lab/clinic. Faster processing (reports in 24 hours), lower cost (15-20% cheaper), suitable for comprehensive panels requiring ECG, X-ray, or specialist exams. Available 7 AM - 7 PM at 2,600+ centers. PPMC at home: Phlebotomist visits member's location. More convenient, higher completion rates (90% vs 70% for center), suitable for blood tests and basic vitals. Both include digital MER generation and underwriting system integration."
  },
  {
    question: "Can I get PPMC reports delivered in under 24 hours?",
    answer: "Yes, express PPMC available in major metros (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata) with 18-24 hour TAT from sample collection to report delivery. Standard pathology panels (CBC, lipid profile, blood sugar, liver function, kidney function) eligible for express processing. Radiology and specialized tests follow standard 48-72 hour TAT. Express service available for bulk corporate underwriting with committed volumes (500+ policies/month)."
  },
  {
    question: "What tests are included in standard PPMC packages?",
    answer: "Standard PPMC includes: Complete Blood Count (CBC), Fasting Blood Sugar (FBS), HbA1c, Lipid Profile (cholesterol, triglycerides, HDL, LDL), Liver Function Test (LFT: SGOT, SGPT, bilirubin, albumin), Kidney Function Test (KFT: creatinine, urea, uric acid), Urine Routine & Microscopy, Blood Pressure, Height/Weight/BMI. Optional additions: ECG, Chest X-ray, TMT/Stress Test, Ultrasound Abdomen, Thyroid profile (TSH, T3, T4), HBsAg, HIV, medical questionnaire. Customizable packages based on sum insured bands (e.g., <₹5L, ₹5-10L, ₹10-25L, >₹25L)."
  },
  {
    question: "How do you handle abnormal PPMC findings requiring further investigation?",
    answer: "Abnormal values trigger automated flags with severity scoring. Critical findings (very high blood sugar, abnormal ECG) escalated to underwriting team within 2 hours. System recommends repeat tests or specialist consultation. Members can be redirected to confirmatory testing at no extra cost if initial results are borderline. Digital workflow allows underwriter to request specific additional tests, member gets notified via SMS/email, and supplementary tests completed within 3-5 days. All data flows back to underwriting system automatically."
  },
  
  // MER (Medical Examination Report) - Digital vs Physical
  {
    question: "What is MER and how is it done during PPMC?",
    answer: "MER (Medical Examination Report) is a comprehensive clinical exam by a registered doctor as part of PPMC. Includes vitals, physical exam, medical history, and clinical opinion on insurability. MER can be done digitally via video or physically through home visit."
  },
  {
    question: "What is Digital MER and how does it work?",
    answer: "Digital MER is a video consultation where a doctor conducts the medical examination remotely. Patient shares vitals (BP, weight, height), medical history, and answers clinical questions. Doctor completes MER form digitally. No home visit needed, completed in 30-45 minutes."
  },
  {
    question: "What is Physical MER and when is it required?",
    answer: "Physical MER is an in-person medical exam at applicant's home or clinic. Required for high-sum-insured policies (over 50L), applicants with complex medical histories, or when insurers mandate physical examination. Doctor visits, conducts thorough exam, completes MER form."
  },
  {
    question: "Can digital MER integrate with my underwriting system?",
    answer: "Yes, digital MER provides structured JSON/XML outputs compatible with major underwriting platforms (Majesco, Duck Creek, EIS, Guidewire, custom systems). API endpoints for real-time data push or batch file transfer. Mapping available for standard health parameters to your risk scoring models. Supports custom field configurations based on your underwriting guidelines. Integration typically takes 2-3 weeks including UAT. Historical data migration available if moving from physical MER systems."
  },
  {
    question: "Do you provide physical MER for cases requiring doctor examination?",
    answer: "Yes, physical MER conducted by MBBS doctors at member's home or at medical centers for sum insured above ₹25L or age >55 years. Includes clinical examination (cardiovascular, respiratory, abdominal), medical history interview, and doctor's assessment report. Available in 150+ cities including all metros and tier-2 cities. Appointment scheduled within 48 hours, physical MER report delivered within 24 hours of examination. Digital + Physical MER combined packages available for comprehensive underwriting."
  },
  
  // Cashless OPD for Diagnostics
  {
    question: "How does cashless OPD for diagnostics work?",
    answer: "Member books diagnostic test through your member portal/app → Real-time eligibility verification via API (policy active, coverage limit available, service included) → Instant approval → Member visits partner lab or opts for home collection → No payment at service point → Digital report delivery within TAT → Automated billing to insurer with member ID, policy number, SKU code, and invoice. Member never pays out-of-pocket. Available for pathology, radiology, cardiac tests across 9,000+ pincodes. Fraud controls: Prescription validation, frequency limits (e.g., HbA1c max quarterly), duplicate booking prevention."
  },
  {
    question: "Can members book cashless OPD diagnostics in tier-2/3 cities?",
    answer: "Yes, cashless diagnostics available across 9,000+ pincodes covering tier-2 cities (Indore, Jaipur, Chandigarh, Ludhiana, Coimbatore, Kochi, Visakhapatnam, Bhubaneswar, Nagpur, Nashik, Aurangabad, Vadodara, Rajkot, Surat) and tier-3 cities (Mysore, Mangalore, Guntur, Vijayawada, Ranchi, Jamshedpur, Raipur, Bilaspur, Dehradun, Shimla, Jammu, Guwahati, Siliguri). Same quality standards (NABL labs), SLA adherence (24-72 hour reports), and cashless workflow as metros. Network density varies—metros have 50-100 partner labs, tier-2 cities have 10-25 labs, tier-3 cities have 3-8 labs per city."
  },
  {
    question: "What diagnostic tests are eligible for cashless OPD coverage?",
    answer: "Commonly covered: Pathology (CBC, blood sugar, HbA1c, lipid profile, liver/kidney function, thyroid, vitamin D/B12, electrolytes, urine/stool tests), Radiology (X-ray, ultrasound, mammography), Cardiac (ECG, ECHO, TMT/stress test, Holter monitoring), Women's health (PAP smear, pelvic ultrasound, hormone panels), Specialized (allergy panels, tumor markers, genetic tests). You define inclusion/exclusion list and set price caps per test. Advanced diagnostics (MRI, CT, PET scan, genetic sequencing) typically require pre-authorization or excluded from OPD. Configurable per policy terms."
  },
  {
    question: "How do you prevent misuse of cashless OPD diagnostics?",
    answer: "Multi-layer fraud controls: (1) Prescription mandatory for non-preventive tests—validated by system + pharmacist review, (2) Frequency limits per test type (e.g., HbA1c max 4x/year, X-ray same body part max 2x/year), (3) Duplicate booking prevention within 30 days, (4) Member pattern analysis—flag abnormal test ordering, (5) Provider pattern analysis—flag labs with unusual test mix or high-value orders, (6) SKU-level price caps—auto-reject if lab quotes above threshold, (7) Post-service audit sampling—review 10% of transactions for clinical appropriateness. Fraud detection saves 12-15% of OPD diagnostic spend."
  },
  
  // Cashless OPD for Pharmacy
  {
    question: "How does cashless OPD pharmacy work end-to-end?",
    answer: "Doctor prescribes medicines (e-prescription or physical Rx uploaded) → Member selects pharmacy delivery or pickup → Prescription validated by system (OCR + pharmacist review) → Eligibility check (policy active, pharmacy benefit available, medicine covered, quantity within limits) → Instant approval or rejection → Medicine dispensed and delivered within 6-24 hours → Member pays ₹0 (or copay if applicable) → Automated billing to insurer with member ID, prescription details, medicine SKU, MRP, and invoice. Covers Schedule H/H1 prescription drugs, chronic disease medications, OTC medicines (if policy includes). Available across 18,000+ pincodes via e-pharmacy partners and local pharmacies."
  },
  {
    question: "Can you restrict specific medicines or drug categories in cashless pharmacy?",
    answer: "Yes, granular formulary controls: (1) Include/exclude specific medicine SKUs or salt names, (2) Set quantity limits per prescription or per month (e.g., paracetamol max 30 tablets/month), (3) Prior authorization rules for high-cost drugs (biologics, specialty medicines), (4) Generic substitution mandatory for branded drugs if generic available, (5) Therapeutic category restrictions (e.g., exclude lifestyle drugs, cosmetic medicines), (6) Price caps per medicine or per prescription (e.g., max ₹500 per Rx or reject), (7) Copay rules (e.g., 20% member pays for branded, 0% for generic). Rules configurable via admin portal without code changes."
  },
  {
    question: "How do you verify prescriptions to prevent fake Rx fraud?",
    answer: "Prescription validation: (1) Doctor registration verification—validate doctor's name, MCI registration, specialty, (2) Prescription authenticity check—look for clinic letterhead, doctor signature, date, patient name, (3) Clinical appropriateness—flag dosages outside standard ranges or unusual drug combinations, (4) Pattern analysis—detect doctors writing abnormal prescription volumes or members with frequent duplicate Rx, (5) Pharmacy cross-check—pharmacists review prescriptions before dispensing, (6) Audit trail—all prescriptions stored with member, doctor, and pharmacy linkage for post-facto audits. Prescription fraud rate <0.5% with these controls."
  },
  
  // Pre-Hospitalization & Post-Hospitalization as Cashless
  {
    question: "Can pre-hospitalization expenses be processed as cashless?",
    answer: "Yes, pre-hospitalization diagnostics and consultations can be cashless if integrated with your policy workflow. Typical flow: Member notified of upcoming surgery/procedure → Pre-surgery tests ordered (blood work, X-ray, ECG, anesthesia fitness) → Cashless diagnostic booking via our platform → Reports delivered to hospital and insurer → No member payment. Covers 30 days pre-hospitalization as per IRDAI guidelines. Integrated with hospital pre-authorization systems for seamless workflow. Available in network hospitals across 600+ cities. Reduces member OOP, improves experience, and ensures compliance."
  },
  {
    question: "How does cashless post-hospitalization expense handling work?",
    answer: "Post-discharge cashless for 60 days: Follow-up consultations with treating doctor (in-person or teleconsult) → Post-surgery diagnostics (wound healing check, blood tests, imaging) → Prescribed medications (delivered to home via cashless pharmacy) → Physiotherapy or rehab services (if policy includes) → All cashless, no member payment → Linked to original hospitalization claim for audit trail. System auto-approves post-hospitalization services if pre-authorized during admission. Reduces claim rejections, improves member satisfaction, and ensures continuity of care. Available in top 50 cities with network hospitals."
  },
  {
    question: "What controls prevent misuse of pre/post hospitalization cashless benefits?",
    answer: "Fraud controls: (1) Pre-hospitalization: Tests must be related to planned procedure (system validates based on ICD codes and procedure type), booking within 30 days prior to admission date, hospital pre-auth must exist before tests approved. (2) Post-hospitalization: Services must be prescribed by treating doctor, relevant to discharge diagnosis, within 60-day window post-discharge. (3) Additional: Duplicate test prevention, price caps per test, prescription validation, clinical appropriateness checks, audit sampling of 15% transactions. Cashless convenience without leakage risk."
  },
  
  // OPD Claims Leakage & Fraud Controls
  {
    question: "How does Labstack reduce OPD claims leakage?",
    answer: "SKU-level inclusion/exclusion rules, automated fraud detection, real-time audit trails, prescription verification, frequency limits per service, price caps per transaction, member pattern analysis (flag abnormal utilization), provider pattern analysis (flag suspicious billing), duplicate booking prevention, clinical appropriateness checks, and blacklisting of repeat offenders. Comprehensive fraud framework built into every transaction. Partners report 12-15% leakage reduction within 6 months. Fraud detection + prevention save ₹800-1,200 per suspicious claim flagged."
  },
  {
    question: "Can I set city-specific or region-specific pricing controls?",
    answer: "Yes, geography-based pricing: Set different price caps for same service by city tier (metro vs tier-2 vs tier-3). For example: HbA1c test max ₹600 in Mumbai/Delhi, max ₹450 in Indore/Jaipur, max ₹350 in Ranchi/Raipur. Accounts for local cost variations while preventing overcharging. Similarly, provider network selection by geography (premium labs in metros, value labs in smaller cities). Geo-based controls reduce unnecessary cost burden while maintaining quality standards."
  },
  
  // SLA, Reconciliation & Operations
  {
    question: "What SLAs do you guarantee for OPD services?",
    answer: "Diagnostics: Home sample collection within 24 hours of booking, reports within 24-72 hours (pathology 24-48h, radiology 48-72h). Consultations: Doctor availability within 15 minutes for teleconsult, in-person appointment within 48 hours. Pharmacy: Medicine delivery within 6-24 hours (express 2-4 hours in metros). Pre-PPMC: Appointment within 24-48 hours, reports within 48 hours. Overall SLA adherence: 99%+ with automated escalations for delays. Penalties apply for SLA breaches per contract terms. Real-time tracking dashboards available for monitoring."
  },
  {
    question: "How does automated reconciliation work?",
    answer: "Every transaction captured with: Member ID, Policy number, Service type (diagnostic/consult/pharmacy), SKU code and description, Service date, Provider details, Invoice amount, Prescription reference (if applicable). Daily/weekly/monthly invoices generated with line-item breakup. API integration for programmatic reconciliation with your billing system. Export formats: Excel, CSV, or direct integration with TPA/core insurance systems. Reconciliation dashboard shows pending vs settled amounts, discrepancies flagged for review. Audit trail maintained for 7 years for regulatory compliance."
  },
  {
    question: "What analytics and reporting do you provide?",
    answer: "Dashboards: (1) Utilization: Services consumed by type, city, member demographics, (2) Cost analysis: Average cost per service, trending over time, comparison vs benchmarks, (3) Fraud indicators: Flagged transactions, suspicious patterns, top abusers, (4) Member experience: CSAT scores, complaint trends, NPS, (5) Provider performance: SLA adherence, service quality, cost efficiency, (6) Financial: Claims paid vs budget, per member per month (PMPM) costs, leakage estimates. Custom reports available for enterprise clients. Data export for your internal analytics teams."
  },
  {
    question: "Can we add our existing provider network into Labstack?",
    answer: "Yes, onboard your contracted providers (labs, hospitals, clinics, pharmacies) onto our platform. They use our tech stack for eligibility verification, booking, and billing while you maintain commercial relationships. Benefits: Single platform for all members, unified SLA monitoring, consistent member experience, automated reconciliation across all providers. We also provide access to our broader network (9,000+ pincodes) for gap filling in geographies where your network is weak. Hybrid network model optimizes both control and coverage."
  },
  
  // Member Experience & Compliance
  {
    question: "How do members access cashless OPD services?",
    answer: "White-labeled member portal/app (your brand, our technology) → Member logs in using policy number/employee ID → Select service (diagnostic, consultation, pharmacy) → Real-time eligibility check → Book appointment or order medicine → Cashless fulfillment → Digital reports/confirmations delivered → No payment required. Alternatively, members can call your helpline, and ops team books services on their behalf using our platform. Multi-channel access: app, web portal, WhatsApp, call center. 80% members prefer self-service via app within 3 months of launch."
  },
  {
    question: "Do you support cashless OPD claims in Tier-2/3 cities?",
    answer: "Yes, 9,000+ pincodes covered including metros, tier-2 (Indore, Jaipur, Lucknow, Coimbatore, Kochi, Nagpur, Visakhapatnam, Bhubaneswar, Chandigarh, Vadodara, Rajkot, Nashik, Aurangabad, Ludhiana, Amritsar), and tier-3 cities (Mysore, Mangalore, Ranchi, Raipur, Dehradun, Guntur, Vijayawada, Siliguri, Guwahati, Jammu). Same quality standards (NABL labs, qualified doctors, licensed pharmacies) and SLA enforcement across all geographies. Consistent member experience nationwide. Network density varies but core services (diagnostics, consultations, pharmacy) available everywhere."
  },
  {
    question: "What happens if a member complains about service quality?",
    answer: "Complaints logged in system with unique ticket ID → Automatic escalation to account manager within 1 hour → Investigation initiated within 24 hours (contact member, review service details, check provider records) → Resolution: Alternate provider arranged if needed, refund/credit issued if service not delivered, provider blacklisted if pattern of poor service emerges → Member notified of resolution within 48 hours → CSAT feedback collected post-resolution. All complaints tracked in dashboard for root cause analysis and corrective actions."
  },
  {
    question: "How quickly can we launch OPD benefits for our members?",
    answer: "14 days for basic integration (diagnostics, consultations, pharmacy with standard rules). 3-4 weeks for custom eligibility rules, white-label branding, member communication templates, and complex enterprise integrations with legacy policy admin systems, custom fraud rules, and multi-TPA workflows. Phased rollout recommended: Pilot with 1-2 corporate clients (1,000-5,000 lives), validate workflows, then scale to full member base. Post-launch support: Dedicated account manager, 24/7 ops support, monthly business reviews."
  }
];
