/**
 * JSON-LD Structured Data Utilities
 * 
 * Helper functions to generate Schema.org compliant structured data
 * for better search engine understanding and rich snippet display.
 * 
 * @module structured-data
 */

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "name": "Labstack",
  "alternateName": "Labstack Healthcare",
  "url": "https://labstack.in",
  "logo": "https://labstack.in/uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png",
  "description": "India's Healthcare Infrastructure API. Launch diagnostics, consultations, pharmacy, and home care services in 14 days across 9,000+ pincodes with zero upfront investment.",
  "foundingDate": "2020",
  "slogan": "The Growth Engine for Healthcare",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "contact@labstack.in",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/labstack"
  ],
  "knowsAbout": [
    "Healthcare API",
    "Diagnostics API",
    "Telemedicine Platform",
    "Pharmacy Delivery Network",
    "Health Insurance Technology",
    "Disease Management Programs",
    "Digital Health Infrastructure"
  ],
  "serviceType": [
    "Healthcare Technology Platform",
    "Medical API Services",
    "Healthcare Infrastructure"
  ]
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Labstack",
  "url": "https://labstack.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://labstack.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  url: string;
  features?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": product.name,
  "description": product.description,
  "url": product.url,
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31"
  },
  "featureList": product.features || [],
  "provider": {
    "@type": "Organization",
    "name": "Labstack"
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Generate Service schema for specific healthcare services
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "Organization",
    "name": "Labstack"
  },
  "areaServed": {
    "@type": "Country",
    "name": service.areaServed || "India"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": service.url
  }
});

// Generate ContactPage schema
export const generateContactPageSchema = (contact: {
  name: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": contact.name,
  "url": contact.url,
  "mainEntity": {
    "@type": "Organization",
    "name": "Labstack",
    "email": "contact@labstack.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  }
});

// Generate Article schema for blog posts
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author || "Labstack Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Labstack",
    "logo": {
      "@type": "ImageObject",
      "url": "https://labstack.in/uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png"
    }
  },
  "image": article.image || "https://labstack.in/uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Generate HowTo schema for implementation guides
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

export const injectStructuredData = (data: object | object[]) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(Array.isArray(data) ? data : [data]);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
};
