import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object | object[];
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "healthcare infrastructure, healthcare API, diagnostics API, telemedicine platform, healthcare delivery system, digital health platform India",
  ogImage = "/lovable-uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png",
  canonical,
  structuredData
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Labstack - Healthcare Growth Operating System`;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', `${title} | Labstack`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | Labstack`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }
    
    // Structured Data (JSON-LD)
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData]);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, keywords, ogImage, canonical, structuredData]);

  return null;
};

export default SEOHead;
