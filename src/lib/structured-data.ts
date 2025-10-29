// JSON-LD Structured Data utilities for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Labstack",
  "alternateName": "Labstack Healthcare",
  "url": "https://labstack.in",
  "logo": "https://labstack.in/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png",
  "description": "Healthcare Growth Operating System. Launch diagnostics, consultations, pharmacy, and home care in 48 hours.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "hello@labstack.in"
  },
  "sameAs": [
    "https://www.linkedin.com/company/labstack"
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
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": product.name,
  "description": product.description,
  "url": product.url,
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
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

export const injectStructuredData = (data: object | object[]) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(Array.isArray(data) ? data : [data]);
  document.head.appendChild(script);
  return () => {
    document.head.removeChild(script);
  };
};
