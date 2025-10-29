/**
 * FAQ Data for Pharmacy Page
 * Organized by persona: Insurers, Digital Health Platforms, Providers
 */

export const pharmacyFAQs = [
  // General Questions
  {
    question: "What is the pharmacy delivery coverage?",
    answer: "We cover 20,000+ pincodes across India with 60-minute delivery in metro cities and same-day delivery in Tier-2/3 cities. We partner with e-pharmacies, local chains, and dark stores."
  },
  {
    question: "How quickly can I launch pharmacy services?",
    answer: "You can launch pharmacy in 48 hours with our ready API integration, verified pharmacy network, and automated fulfillment system."
  },
  {
    question: "What types of medications can be delivered?",
    answer: "We deliver prescription drugs (Schedule H, H1, X), OTC medications, wellness products, surgical items, and chronic disease medicines. Controlled substances are delivered with proper prescription verification."
  },
  
  // Prescription & Compliance
  {
    question: "How does prescription verification work?",
    answer: "All prescriptions are verified by registered pharmacists. We use OCR + manual review for physical prescriptions and automated verification for e-prescriptions. Schedule H and H1 drugs require double verification."
  },
  {
    question: "Are you compliant with Drugs and Cosmetics Act?",
    answer: "Yes, fully compliant with Drugs and Cosmetics Act 1940, Drugs Rules 1945, and all state-specific pharmacy regulations. All partner pharmacies have valid drug licenses."
  },
  {
    question: "How do you prevent prescription fraud?",
    answer: "We use multi-layer fraud prevention: prescription validation, doctor registration checks, patient purchase pattern analysis, SKU-level controls, and automated flagging of suspicious orders."
  },
  
  // For Insurers & TPAs
  {
    question: "Can you support insurance claim processing?",
    answer: "Yes, we provide structured medicine data with HSN codes, prescription details, and bill breakdowns for automated claim processing. Integration with TPA systems available."
  },
  {
    question: "How does cashless pharmacy work?",
    answer: "Patients select medicines, we verify coverage with your system in real-time, deduct copay if applicable, and deliver medicines. Claims are auto-submitted with all required documentation."
  },
  {
    question: "Can you enforce formulary restrictions?",
    answer: "Yes, we can implement your formulary list, suggest generic alternatives, apply prior authorization rules, and enforce quantity limits as per your policy guidelines."
  },
  
  // For Digital Health Platforms
  {
    question: "Can I white-label the pharmacy experience?",
    answer: "Yes, completely white-labelable from medicine search to order tracking to delivery. Your brand, your customer experience, we handle fulfillment invisibly."
  },
  {
    question: "How does medicine search and substitution work?",
    answer: "We provide intelligent search with salt-based alternatives, generic substitutions, and price comparison. If a medicine is unavailable, we suggest alternatives with pharmacist consultation."
  },
  {
    question: "What if a medicine is out of stock?",
    answer: "Our system checks inventory across multiple pharmacies in real-time. If unavailable, we source from nearby pharmacies or provide substitutes. Refund is processed if fulfillment fails."
  },
  
  // For Healthcare Providers
  {
    question: "Can I integrate pharmacy with my e-prescriptions?",
    answer: "Yes, seamless integration with EMR and e-prescription systems. Patients can order directly from digital prescriptions. We handle medicine parsing and order creation automatically."
  },
  {
    question: "Do you provide medication adherence tracking?",
    answer: "Yes, we track refill patterns, send medication reminders, monitor adherence for chronic conditions, and alert providers about missed refills for critical medications."
  },
  {
    question: "Can you support specialty pharmacy needs?",
    answer: "Yes, we handle specialty medications including cold chain requirements, controlled distribution, patient counseling, and prior authorization workflows for high-cost drugs."
  },
  
  // Delivery & Logistics
  {
    question: "What is the average delivery time?",
    answer: "Metro cities: 60-90 minutes. Tier-2 cities: 3-6 hours. Tier-3 cities: Same day. Remote areas: 24-48 hours. Real-time tracking provided for all orders."
  },
  {
    question: "How do you maintain cold chain for sensitive medicines?",
    answer: "Temperature-controlled packaging, GPS-monitored vehicles, and real-time temperature logging for insulin, vaccines, and biologics. Delivery within 2-4 hours for cold chain items."
  },
  {
    question: "What happens if delivery fails?",
    answer: "We attempt redelivery at patient's convenience. If patient is unavailable, medicines are returned to pharmacy and refund is processed within 24 hours. No questions asked."
  },
  
  // Pricing & Commercial
  {
    question: "How does pricing work?",
    answer: "Transparent pricing with no hidden markups. You get negotiated pharmacy rates + small platform fee. Volume discounts available. Patients see MRP always."
  },
  {
    question: "Are there delivery charges?",
    answer: "Free delivery for orders above ₹500. Below ₹500, delivery charges of ₹40-60 apply based on distance. Express delivery (30-min) available at ₹99 extra in select cities."
  },
  {
    question: "How does reconciliation work?",
    answer: "Automated daily reconciliation with SKU-level tracking, prescription mapping, and digital invoices. API integration for real-time settlement and audit trails."
  }
];
