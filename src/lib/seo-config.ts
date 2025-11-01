/**
 * SEO Configuration for Labstack Healthcare Platform
 * 
 * Centralized SEO metadata, Open Graph data, structured data schemas,
 * and GEO (Generative Engine Optimization) utilities for maximum discoverability
 * across traditional search engines (Google, Bing) and AI engines (ChatGPT, Perplexity, Claude).
 * 
 * @module seo-config
 */

/**
 * Base SEO configuration for the entire website
 */
export const BASE_SEO = {
  siteName: 'Labstack',
  siteUrl: 'https://labstack.in',
  defaultTitle: 'Labstack - Healthcare Growth Operating System',
  titleTemplate: '%s | Labstack',
  description: 'Launch diagnostics, consultations, pharmacy, and home care in 14 days. One API for 9,000+ pincodes. Healthcare infrastructure that scales like software.',
  keywords: [
    'healthcare API India',
    'diagnostics API',
    'telemedicine platform',
    'pharmacy delivery API',
    'healthcare infrastructure',
    'digital health platform',
    'white-label healthcare',
    'healthcare delivery system',
    'medical API integration',
    'healthcare technology platform',
    'telehealth API',
    'diagnostic services API',
    'online pharmacy integration',
    'healthcare SaaS platform',
    'healthtech infrastructure'
  ],
  socialImage: '/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png',
  twitterHandle: '@labstackin',
  author: 'Labstack Healthcare',
  locale: 'en_IN',
  alternateLocales: ['en_US', 'en_GB']
};

/**
 * Page-specific SEO configuration
 * Optimized for user intent, local search, and AI engine understanding
 */
export const PAGE_SEO = {
  home: {
    title: 'The Growth Engine for Healthcare',
    description: 'Launch diagnostics, consultations, pharmacy, and home care in 14 days. One API for 9,000+ pincodes. Healthcare infrastructure that scales like software.',
    keywords: 'healthcare API, diagnostics, telemedicine, pharmacy delivery, healthcare platform India',
    tldr: 'Launch complete healthcare services (diagnostics, teleconsults, pharmacy, home care) across 9,000+ Indian pincodes in 14 days via single API. White-label platform with 98% on-time delivery, <2% rejection rate.',
    keyPoints: [
      'One API for diagnostics, consultations, pharmacy, home care',
      'Launch in 14 days vs 12-18 months building in-house',
      '9,000+ pincodes covered from metros to Tier-3 cities',
      '98% on-time delivery, <2% rejection rate, AI-powered quality'
    ]
  },
  
  insurers: {
    title: 'Turn Claim Costs Into Revenue - OPD Solutions for Insurers & TPAs',
    description: 'Convert OPD claim costs into profit centers. Launch cashless OPD in 24 hours. Fraud <1%, PPMC <48 hours, processing cost <₹100 per claim.',
    keywords: 'insurance OPD, cashless OPD, PPMC fast, fraud control, TPA solutions, health insurance technology',
    tldr: 'Insurers & TPAs convert OPD claim costs (pure expense) into revenue centers. Fraud drops to <1% with SKU-level controls. PPMC completed in <48 hours preventing policy delays. Processing costs <₹100 per claim.',
    keyPoints: [
      'Turn OPD claims from cost center into revenue driver',
      'Fraud reduced to <1% with SKU-level tracking and controls',
      'PPMC (Pre-Policy Medical Checkup) completed in <48 hours',
      'Cashless OPD across 9,000+ pincodes, processing cost <₹100'
    ]
  },
  
  brokers: {
    title: '2x Revenue Per Customer - Healthcare Benefits for Brokers',
    description: 'Increase broker revenue 2-3x by adding OPD, PPMC, and preventive care to insurance offerings. White-label platform, 30-40% margin uplift, no headcount increase.',
    keywords: 'insurance broker revenue, OPD benefits, corporate wellness, broker technology, PPMC solutions',
    tldr: 'Insurance brokers and aggregators 2x revenue per customer by bundling OPD, wellness, and PPMC with traditional insurance. White-label platform enables 30-40% revenue growth without hiring.',
    keyPoints: [
      '2-3x revenue per customer by adding OPD and wellness services',
      'White-label platform with your branding across all touchpoints',
      'Win more RFPs with differentiated healthcare benefits',
      '30-40% revenue growth without increasing headcount'
    ]
  },
  
  digitalHealth: {
    title: 'Go Full-Stack in 14 Days - API for Digital Health Platforms',
    description: 'Add diagnostics, pharmacy, and consultations to your health app via single API. Launch in 14 days, revenue +73%, churn -30-50%.',
    keywords: 'digital health API, healthtech integration, telehealth API, diagnostic API, pharmacy API integration',
    tldr: 'Digital health platforms go full-stack in 14 days using one API for diagnostics, pharmacy, teleconsults, and home care. Typical revenue increase: +73% per user, churn reduction: -30-50%.',
    keyPoints: [
      'Single API integrates diagnostics, pharmacy, consultations, home care',
      'Launch in 14 days vs 6-12 months building provider networks',
      'Revenue increase: ₹800 → ₹1,380 per user (+73%)',
      'Churn reduction: 30-50% through care continuity'
    ]
  },
  
  diseaseManagement: {
    title: 'Close Care Loops, Prove Outcomes - Disease Management Infrastructure',
    description: '90%+ test completion, structured data, closed-loop care. Diabetes, hypertension, cardiac care programs with proven outcomes. LTV improved 2.5-3x.',
    keywords: 'disease management, chronic care programs, diabetes care, hypertension management, care coordination',
    tldr: 'Disease management platforms achieve 90%+ test completion rates (vs 60-70% manual), structured health data (not PDFs), closed-loop care coordination. LTV improves 2.5-3x with sustained engagement.',
    keyPoints: [
      'Automated care pathways for diabetes, hypertension, cardiac care',
      '90%+ test completion vs 60-70% for manual programs',
      'Structured clinical data (JSON/API) instead of PDF reports',
      'LTV improved 2.5-3x through closed-loop care coordination'
    ]
  },
  
  providers: {
    title: 'Fill Capacity, Double Revenue - Network for Healthcare Providers',
    description: 'Labs and clinics fill 40-60% empty capacity with B2B demand. Utilization 40% → 70%, revenue doubles, margins +15-25%, payment in 15 days.',
    keywords: 'diagnostic lab partners, hospital network, B2B healthcare demand, lab utilization, clinic revenue',
    tldr: 'Diagnostic labs and clinics fill empty capacity (40-50% utilization → 60-70%) with steady B2B demand from insurers, corporates, and healthtech platforms. Revenue doubles, margins improve 15-25%, payment in 15 days.',
    keyPoints: [
      'Steady B2B demand from insurers, corporates, healthtech platforms',
      'Utilization increase: 40% → 60-70%, revenue doubles',
      'Margin improvement: +15-25% on incremental volume',
      'Fast payment cycles: 15-30 days vs 60-90 days typical'
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
