/**
 * FAQ Data for Pharmacy Page
 * Organized by persona: Insurers, Digital Health Platforms, Providers
 * Covers delivery, specialized medicines, compliance, and geo coverage
 */

export const pharmacyFAQs = [
  // General Questions
  {
    question: "What is the pharmacy delivery coverage?",
    answer: "We cover 20,000+ pincodes across India with 60-minute delivery in metro cities and same-day delivery in Tier-2/3 cities. We partner with e-pharmacies, local chains, and dark stores."
  },
  {
    question: "How quickly can I launch pharmacy services?",
    answer: "You can launch pharmacy in 14 days with our ready API integration, verified pharmacy network, and automated fulfillment system."
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
    answer: "Metro cities: 60-90 minutes. Tier-2 cities: 3-6 hours. Tier-3 cities: Same day. Remote areas: 1-2 days. Real-time tracking provided for all orders."
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
    answer: "Transparent pricing with MRP-based or negotiated rates. Volume discounts available for insurers and corporates. No hidden markup—what you see is what you pay. Pricing is consistent across metros (Mumbai, Delhi, Bangalore, Chennai) and tier-2 cities (Indore, Jaipur, Coimbatore, Nagpur)."
  },
  {
    question: "Are there delivery charges?",
    answer: "Free delivery for orders above ₹500. Orders below ₹500 may have nominal delivery charges (₹30-50) depending on location and urgency. Express delivery (2-3 hours) available in major city centers like Bandra (Mumbai), Koramangala (Bangalore), Connaught Place (Delhi), and T Nagar (Chennai) at ₹50-100 extra."
  },
  {
    question: "How does reconciliation work for B2B partners?",
    answer: "Automated invoice generation with SKU-level breakup, prescription mapping, and delivery confirmation. Monthly statements with complete audit trail for easy reconciliation."
  },
  
  // Specialized Medicines & Therapies
  {
    question: "Do you stock GLP-1 medicines like Mounjaro, Wegovy, and Ozempic?",
    answer: "Yes, we stock weight management and diabetes medications including Mounjaro (tirzepatide), Wegovy (semaglutide), Ozempic (semaglutide), Rybelsus (oral semaglutide), and Saxenda (liraglutide). These require valid prescriptions from endocrinologists or diabetologists. Available with cold chain delivery across Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Chennai, and tier-2 cities. Prescription verification is mandatory as per Schedule H1 drug regulations."
  },
  {
    question: "Can you deliver influenza vaccines and other immunizations?",
    answer: "Yes, we deliver influenza vaccines (Vaxigrip, Influvac), pneumococcal vaccines (Prevenar, Pneumovax), HPV vaccines (Gardasil), and other immunizations with proper cold chain maintenance (2-8°C). Available across major cities including Mumbai (Andheri, Bandra, Powai), Bangalore (Whitefield, Indiranagar), Delhi NCR (Gurgaon, Noida), Hyderabad (Madhapur, Gachibowli), Pune (Koregaon Park, Hinjewadi), and tier-2 cities. Delivery within 4-6 hours with temperature monitoring."
  },
  {
    question: "Do you provide at-home vaccination and injection services?",
    answer: "Yes, we coordinate with certified nurses and healthcare workers for at-home administration of vaccines, insulin injections, B12 shots, vitamin D injections, and other intramuscular/subcutaneous medications. Service available in metros (Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad) and select tier-2 cities (Indore, Jaipur, Chandigarh, Lucknow, Coimbatore). Trained nurses carry proper equipment, maintain cold chain, and provide post-injection monitoring."
  },
  {
    question: "Can I get vaccination at corporate health camps?",
    answer: "Yes, we organize corporate flu vaccination camps and preventive immunization drives at company premises. Services include vaccine procurement with cold chain logistics, trained nurses for administration, documentation, adverse event monitoring, and digital vaccination certificates. Popular at IT parks in Bangalore (Whitefield, Electronic City, Manyata Tech Park), Pune (Hinjewadi SEZ, Magarpatta), Hyderabad (HITEC City, Gachibowli), NCR (Cyber City Gurgaon, Sector 62 Noida), and Mumbai (BKC, Powai, Andheri)."
  },
  {
    question: "Do you deliver specialty medicines for rare diseases?",
    answer: "Yes, we source and deliver specialty medications for rare diseases, oncology, autoimmune conditions, and orphan drugs. This includes immunosuppressants, biologics, targeted cancer therapies, and enzyme replacement therapies. Lead time: 3-7 days for import medications. Available through our specialty pharmacy network with patient assistance program coordination and insurance claim support."
  },
  
  // Geographic Coverage & Delivery
  {
    question: "Which cities and areas do you cover for pharmacy delivery?",
    answer: "We cover 18,000+ pincodes across India including metros: Mumbai (all suburbs - Andheri, Borivali, Thane, Navi Mumbai), Delhi NCR (Delhi, Gurgaon, Noida, Faridabad, Ghaziabad), Bangalore (Whitefield, Electronic City, Jayanagar, Indiranagar, HSR Layout), Chennai (T Nagar, Velachery, OMR), Hyderabad (Banjara Hills, Jubilee Hills, Gachibowli, Secunderabad), Pune (Koregaon Park, Hinjewadi, Viman Nagar), Kolkata (Salt Lake, New Town, Rajarhat). Tier-2 cities: Indore, Jaipur, Lucknow, Coimbatore, Kochi, Nagpur, Visakhapatnam, Bhubaneswar, Chandigarh, Vadodara. Tier-3 cities: Mysore, Mangalore, Ranchi, Raipur, Dehradun, Nashik, Rajkot, Guntur, Vijayawada."
  },
  {
    question: "How fast is delivery in different cities?",
    answer: "Metro cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata): Standard delivery 6-24 hours, Express delivery 2-4 hours in central areas. Tier-2 cities (Indore, Jaipur, Lucknow, Coimbatore, Nagpur): 12-24 hours standard. Tier-3 cities and remote areas: 24-48 hours. Emergency medications can be expedited in metros and tier-2 cities with 2-hour guaranteed delivery."
  },
  {
    question: "Can you deliver to rural or remote areas?",
    answer: "Yes, we cover remote pincodes across states including rural areas in Uttar Pradesh (Gorakhpur, Varanasi, Kanpur districts), Bihar (Patna, Muzaffarpur), Madhya Pradesh (Jabalpur, Gwalior, Indore outskirts), Rajasthan (Udaipur, Ajmer, Jodhpur districts), Maharashtra (Nashik, Aurangabad, Solapur), Tamil Nadu (Madurai, Salem, Tiruchirappalli districts), and Kerala (Malappuram, Kannur, Palakkad). Delivery within 48-72 hours depending on logistics. Prescription validation and cold chain maintained for all deliveries."
  }
];
