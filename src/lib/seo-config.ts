/**
 * SEO Configuration for Labstack Healthcare Platform
 * 
 * Centralized configuration for metadata, Open Graph tags, structured data schemas,
 * and page-specific SEO content across the application.
 * 
 * @module seo-config
 */

/**
 * Base SEO configuration for the entire website
 * Contains default metadata values used across all pages
 */
export const BASE_SEO = {
  siteName: 'Labstack',
  siteUrl: 'https://labstack.in',
  defaultTitle: 'Labstack - The Growth Engine for Healthcare | Launch in 14 Days',
  titleTemplate: '%s | Labstack',
  description: "India's Healthcare Infrastructure API. Launch diagnostics, consultations, pharmacy, and home care in 14 days across 9,000+ pincodes. Zero upfront investment. 99%+ SLA adherence.",
  keywords: [
    'healthcare infrastructure API India',
    'diagnostics API India',
    'telemedicine platform India',
    'pharmacy delivery network',
    'healthcare delivery system',
    'digital health platform India',
    'health insurance OPD solutions',
    'TPA claims automation',
    'disease management programs',
    'provider network management',
    'ABDM compliance healthcare',
    'DISHA Act healthcare India',
    'IT Act 2000 healthcare compliance',
    'white-label healthcare platform',
    'medical API integration India',
    'healthcare technology platform',
    'telehealth API India',
    'diagnostic services API',
    'online pharmacy integration',
    'healthcare SaaS platform India',
    'healthtech infrastructure',
    'pan-India healthcare coverage',
    'tier 2 tier 3 healthcare',
    '9000 pincode healthcare coverage'
  ],
  socialImage: '/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png',
  twitterHandle: '@labstackin',
  author: 'Labstack Healthcare',
  locale: 'en_IN',
  alternateLocales: ['en_US', 'en_GB'],
  // GEO-specific metadata for AI understanding
  foundingYear: '2020',
  headquarters: 'Bangalore, India',
  coverage: '9,000+ pincodes across India',
  complianceStandards: ['DISHA Act', 'IT Act 2000', 'ABDM'],
  serviceLaunchTime: '14 days',
  slaAdherence: '99%+'
};

/**
 * Page-specific SEO configuration
 * Optimized for user intent, local search, and AI engine understanding
 */
export const PAGE_SEO = {
  home: {
    title: 'The Growth Engine for Healthcare',
    description: 'Launch diagnostics, consultations, pharmacy, and home care in 14 days. One API for 9,000+ pincodes. Healthcare infrastructure that scales like software.',
    keywords: 'healthcare API India, diagnostics API, telemedicine platform, pharmacy delivery API, healthcare infrastructure, digital health platform, healthcare delivery system, medical API integration',
    tldr: "Labstack is India's healthcare infrastructure API enabling businesses to launch complete healthcare services (diagnostics, teleconsults, pharmacy, home care) across 9,000+ pincodes in 14 days. Single API integration, white-label platform, 98% on-time delivery, compliant with Indian healthcare regulations (DISHA, IT Act 2000).",
    keyPoints: [
      'Single API for diagnostics, teleconsultations, pharmacy, and home care services',
      'Launch in 14 days vs 12-18 months building healthcare infrastructure in-house',
      'Coverage: 9,000+ pincodes from metros to Tier-3 cities across India',
      '98% on-time delivery, <2% rejection rate, compliant with Indian regulations'
    ]
  },
  
  insurers: {
    title: 'Turn Claim Costs Into Revenue - OPD Solutions for Insurers & TPAs',
    description: 'Convert OPD claims from expense centers to profit centers. Cut leakage 12%, boost NPS 25 points, reduce ops cost 40%. Nationwide cashless OPD with fraud controls.',
    keywords: 'insurance OPD India, TPA cashless claims, OPD fraud control, PPMC automation, health insurance revenue optimization, claims leakage reduction',
    tldr: 'Insurers & TPAs transform OPD claims from pure cost centers into revenue drivers. Achieve 12% cost savings through SKU-level fraud controls, 40% lower operational costs via automation, and 25-point NPS gain through superior member experience across 9,000+ pincodes.',
    keyPoints: [
      'Convert OPD claim costs into profit centers with premium services',
      '12% cost savings from eliminating fraud and leakage',
      '40% reduction in operational costs through automated reconciliation',
      '+25 NPS gain with 99%+ SLA adherence nationwide'
    ]
  },
  
  brokers: {
    title: '2x Revenue Per Customer - Healthcare Benefits for Brokers',
    description: 'Insurance brokers 2x revenue per customer by adding OPD, wellness, and PPMC to insurance offerings. White-label platform, 30-40% margin uplift, no additional headcount needed.',
    keywords: 'insurance broker revenue, OPD benefits India, corporate wellness programs, broker technology platform, PPMC solutions, insurance aggregator tools',
    tldr: 'Insurance brokers and corporate wellness aggregators double revenue per customer (₹1,500 → ₹3,000+ recurring) by bundling OPD, preventive care, and PPMC with traditional insurance. White-label platform enables 30-40% revenue growth without hiring, covers 9,000+ pincodes nationwide.',
    keyPoints: [
      'Revenue increase: 2-3x per customer through OPD and wellness bundling',
      'White-label platform maintains your branding across all customer touchpoints',
      'Win more corporate RFPs with differentiated preventive healthcare benefits',
      'Achieve 30-40% revenue growth without increasing operational headcount'
    ]
  },
  
  digitalHealth: {
    title: 'Go Full-Stack in 14 Days - API for Digital Health Platforms',
    description: 'Digital health platforms add diagnostics, pharmacy, and teleconsultations via single API. Launch in 14 days, revenue +73%, churn -30-50%, nationwide coverage.',
    keywords: 'digital health API India, healthtech integration, telehealth API, diagnostic API, pharmacy API integration, healthcare platform white-label',
    tldr: "Digital health platforms and healthtech startups go full-stack in 14 days using Labstack's unified API for diagnostics, pharmacy, teleconsultations, and home care. Proven results: +73% revenue per user (₹800 → ₹1,380), 30-50% churn reduction through care continuity, coverage across metro to Tier-3 cities.",
    keyPoints: [
      'Single API integration for diagnostics, pharmacy, teleconsults, and home care',
      'Launch in 14 days vs 6-12 months building provider networks from scratch',
      'Revenue per user increases: ₹800 → ₹1,380 (+73% ARPU lift)',
      'Churn reduction: 30-50% through closed-loop care and engagement'
    ]
  },
  
  diseaseManagement: {
    title: 'Close Care Loops, Prove Outcomes - Disease Management Infrastructure',
    description: 'Chronic disease management with 90%+ test completion, structured data, automated care pathways. Diabetes, hypertension, cardiac programs. LTV improved 2.5-3x.',
    keywords: 'disease management platform India, chronic care programs, diabetes care digital, hypertension management, care coordination automation, remote patient monitoring',
    tldr: 'Chronic disease management platforms achieve 90%+ test completion rates (vs 60-70% manual coordination), receive structured clinical data (JSON/API not PDFs), and enable closed-loop automated care pathways. Results: LTV improves 2.5-3x, churn reduces from 35% to <15%, nationwide coverage for diabetes, hypertension, and cardiac care programs.',
    keyPoints: [
      'Automated care pathways for diabetes, hypertension, cardiac, and chronic conditions',
      'Test completion rates: 90%+ vs 60-70% with manual provider coordination',
      'Structured clinical data (JSON/API format) enables trend analysis and predictions',
      'LTV improvement: 2.5-3x through sustained engagement and closed-loop care'
    ]
  },
  
  providers: {
    title: 'Fill Capacity, Double Revenue - Network for Healthcare Providers',
    description: 'Diagnostic labs, hospitals, and clinics fill 40-60% empty capacity with B2B demand. Utilization 40% → 70%, revenue doubles, margins +15-25%, payment in 15 days.',
    keywords: 'diagnostic lab partners India, hospital network, B2B healthcare demand, lab utilization optimization, clinic revenue growth, provider network partnership',
    tldr: 'Healthcare providers (diagnostic labs, hospitals, clinics, doctors) fill empty capacity—increasing utilization from 40-50% to 60-70%—with steady B2B demand from insurers, corporates, and digital health platforms. Outcomes: revenue doubles, margins improve 15-25%, payment cycles reduced to 15-30 days (vs 60-90 days typical), predictable demand without marketing spend.',
    keyPoints: [
      'Steady B2B demand from insurers, corporates, healthtech platforms, and disease management companies',
      'Utilization increase: from 40-50% → 60-70%, revenue effectively doubles',
      'Margin improvement: +15-25% on incremental volume due to fixed cost leverage',
      'Fast payment cycles: 15-30 days vs 60-90 days typical in B2C healthcare'
    ]
  },
  
  diagnostics: {
    title: 'Diagnostic Services API - Home Collection Across 9,000+ Pincodes',
    description: 'Add lab tests to your platform. Home sample collection in 9,000+ pincodes, 2,600+ labs, 98% on-time delivery, same-day reports for routine tests.',
    keywords: 'diagnostic API, lab test API, home sample collection, pathology services, blood test booking',
    tldr: 'Diagnostic services API with home sample collection across 9,000+ pincodes covering metros to Tier-3 cities. Network of 2,600+ labs, 98% on-time delivery, same-day reports for routine tests, standardized formats.',
    keyPoints: [
      'Home sample collection in 9,000+ pincodes nationwide',
      'Network of 2,600+ NABL-certified labs across India',
      '98% on-time collection and delivery, <2% rejection rate',
      'Same-day reports for routine tests, 24-48 hours for specialized'
    ]
  },
  
  pharmacy: {
    title: 'Pharmacy Delivery API - Medicine Delivery Across 18,000+ Pincodes',
    description: 'Add pharmacy to your platform. Medicine delivery in 18,000+ pincodes, prescription verification, cold chain for insulin/biologics, 6-24 hour delivery.',
    keywords: 'pharmacy API, medicine delivery, prescription verification, online pharmacy integration, medicine home delivery',
    tldr: 'Pharmacy delivery API covering 18,000+ pincodes from metros to remote areas. Automated prescription verification, cold chain logistics for temperature-sensitive medicines, verified suppliers, 6-24 hour delivery.',
    keyPoints: [
      'Medicine delivery across 18,000+ pincodes nationwide',
      'Automated prescription verification via OCR + pharmacist review',
      'Cold chain logistics for insulin, biologics, vaccines',
      'Delivery within 6-24 hours depending on pincode'
    ]
  },
  
  consultations: {
    title: 'Teleconsultation API - 24/7 Doctor Consultations Across India',
    description: '24/7 teleconsultations with GPs and 25+ specialties. Video/audio/chat consultations, e-prescriptions, specialist network across 600+ cities.',
    keywords: 'teleconsultation API, online doctor consultation, telemedicine integration, video consultation API, doctor booking',
    tldr: '24/7 teleconsultation API with GP consultations and 25+ specialties (cardiology, dermatology, mental health, etc.). Video/audio/chat modes, e-prescription generation, specialist network in 600+ cities for in-person consults.',
    keyPoints: [
      '24/7 availability for GP consultations, specialists during business hours',
      '25+ specialties: cardiology, dermatology, mental health, pediatrics',
      'Multiple modes: video, audio, chat consultations',
      'In-person specialist consultations in 600+ cities nationwide'
    ]
  }
};

/**
 * Local SEO configuration for city-specific pages
 * Optimized for "near me" searches and local intent
 */
export const LOCAL_SEO_CITIES = {
  mumbai: {
    name: 'Mumbai',
    areas: ['Bandra', 'Andheri', 'Powai', 'Lower Parel', 'Worli', 'BKC', 'Juhu', 'Malad', 'Borivali'],
    keywords: 'home sample collection mumbai, diagnostic tests mumbai, doctor consultation mumbai, medicine delivery mumbai'
  },
  delhi: {
    name: 'Delhi NCR',
    areas: ['Gurgaon', 'Noida', 'Greater Noida', 'Dwarka', 'Rohini', 'Pitampura', 'Cyber City', 'Faridabad', 'Ghaziabad'],
    keywords: 'home blood test delhi, pathology home collection ncr, telemedicine delhi, pharmacy delivery noida gurgaon'
  },
  bangalore: {
    name: 'Bangalore',
    areas: ['Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Electronic City', 'Hebbal', 'Jayanagar', 'BTM Layout'],
    keywords: 'diagnostic home collection bangalore, blood test at home bengaluru, online doctor consultation bangalore'
  },
  pune: {
    name: 'Pune',
    areas: ['Hinjewadi', 'Kharadi', 'Viman Nagar', 'Koregaon Park', 'Baner', 'Wakad', 'Aundh', 'Magarpatta'],
    keywords: 'home sample collection pune, lab test at home pune, teleconsultation pune, medicine delivery pune'
  },
  hyderabad: {
    name: 'Hyderabad',
    areas: ['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Kondapur', 'Miyapur'],
    keywords: 'diagnostic services hyderabad, home blood test hyderabad, doctor consultation online hyderabad'
  },
  chennai: {
    name: 'Chennai',
    areas: ['Anna Nagar', 'T Nagar', 'Adyar', 'Velachery', 'OMR', 'Porur', 'Tambaram'],
    keywords: 'pathology home service chennai, lab tests at home chennai, teleconsult chennai, pharmacy delivery chennai'
  }
};

/**
 * Structured data schemas for rich snippets
 */
export const STRUCTURED_DATA_TYPES = {
  Organization: 'https://schema.org/Organization',
  WebSite: 'https://schema.org/WebSite',
  WebPage: 'https://schema.org/WebPage',
  Product: 'https://schema.org/Product',
  Service: 'https://schema.org/Service',
  FAQPage: 'https://schema.org/FAQPage',
  MedicalBusiness: 'https://schema.org/MedicalBusiness',
  HealthAndBeautyBusiness: 'https://schema.org/HealthAndBeautyBusiness',
  Article: 'https://schema.org/Article',
  BlogPosting: 'https://schema.org/BlogPosting',
  BreadcrumbList: 'https://schema.org/BreadcrumbList'
};

/**
 * Meta robots configuration by page type
 */
export const ROBOTS_CONFIG = {
  index: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  noindex: 'noindex, nofollow',
  archive: 'noindex, follow',
  form: 'noindex, nofollow'
};

/**
 * Open Graph types by page
 */
export const OG_TYPES = {
  website: 'website',
  article: 'article',
  product: 'product',
  service: 'product' // Services use product type in OG
};

/**
 * Twitter Card types
 */
export const TWITTER_CARDS = {
  summary: 'summary',
  summaryLarge: 'summary_large_image',
  app: 'app',
  player: 'player'
};

export default {
  BASE_SEO,
  PAGE_SEO,
  LOCAL_SEO_CITIES,
  STRUCTURED_DATA_TYPES,
  ROBOTS_CONFIG,
  OG_TYPES,
  TWITTER_CARDS
};
