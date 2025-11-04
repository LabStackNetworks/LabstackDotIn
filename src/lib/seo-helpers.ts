/**
 * SEO and GEO (Generative Engine Optimization) Helper Functions
 * Optimizes content for both traditional search engines and AI engines
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Generate optimized page title for SEO
 * Format: Primary Keyword | Secondary Keywords | Brand
 */
export const generateSEOTitle = (
  primaryKeyword: string,
  secondaryKeywords?: string,
  includesBrand: boolean = true
): string => {
  const brand = 'Labstack';
  const parts = [primaryKeyword];
  
  if (secondaryKeywords) {
    parts.push(secondaryKeywords);
  }
  
  if (includesBrand) {
    parts.push(brand);
  }
  
  // Keep under 60 characters for optimal display
  const title = parts.join(' | ');
  return title.length > 60 ? `${primaryKeyword} | ${brand}` : title;
};

/**
 * Generate SEO-optimized meta description
 * Max 160 characters with primary keyword in first 120 chars
 */
export const generateMetaDescription = (
  content: string,
  primaryKeyword: string,
  maxLength: number = 160
): string => {
  // Ensure primary keyword appears early
  let description = content;
  
  if (!content.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    description = `${primaryKeyword}: ${content}`;
  }
  
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  return description;
};

/**
 * Extract keywords from content for meta keywords tag
 */
export const extractKeywords = (content: string, maxKeywords: number = 10): string => {
  // Common words to exclude
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
  ]);

  // Extract words, filter stop words, count frequency
  const words = content
    .toLowerCase()
    .replace(/[^\\w\\s]/g, '')
    .split(/\\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count frequency
  const frequency = new Map<string, number>();
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  // Sort by frequency and take top keywords
  const keywords = Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);

  return keywords.join(', ');
};

/**
 * Generate canonical URL to prevent duplicate content issues
 */
export const generateCanonicalURL = (path: string): string => {
  const baseURL = 'https://labstack.in';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseURL}${cleanPath}`;
};

/**
 * Generate structured breadcrumb data
 */
export const generateBreadcrumbs = (pathSegments: string[]): Array<{ name: string; url: string }> => {
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: 'Home', url: 'https://labstack.in/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    if (segment) {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        name,
        url: `https://labstack.in${currentPath}`
      });
    }
  });

  return breadcrumbs;
};

/**
 * Optimize content for AI search engines (GEO)
 * AI engines prefer direct answers, clear structure, and semantic content
 */
export const optimizeForAI = (content: {
  mainQuestion?: string;
  directAnswer: string;
  detailedExplanation: string;
  keyPoints: string[];
  relatedQuestions?: Array<{ question: string; answer: string }>;
}) => {
  return {
    // Direct answer first (AI engines love this)
    summary: content.directAnswer,
    
    // Structured key points
    highlights: content.keyPoints,
    
    // Detailed explanation
    details: content.detailedExplanation,
    
    // Related Q&A for semantic coverage
    faq: content.relatedQuestions || [],
    
    // Main question for context
    context: content.mainQuestion
  };
};

/**
 * Generate alt text for images (SEO + Accessibility)
 */
export const generateImageAlt = (
  imageName: string,
  context: string,
  includeKeywords: boolean = true
): string => {
  const cleanName = imageName
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ')
    .replace(/\d+/g, '') // Remove numbers
    .trim();

  if (includeKeywords && context) {
    return `${cleanName} - ${context}`;
  }

  return cleanName;
};

/**
 * Generate Open Graph metadata for social sharing
 */
export const generateOGMetadata = (page: PageSEO) => {
  return {
    'og:title': page.title,
    'og:description': page.description,
    'og:type': page.article ? 'article' : 'website',
    'og:url': page.canonical || '',
    'og:image': page.ogImage || 'https://labstack.in/uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png',
    'og:site_name': 'Labstack',
    ...(page.article && {
      'article:published_time': page.article.publishedTime,
      'article:modified_time': page.article.modifiedTime,
      'article:author': page.article.author,
      'article:section': page.article.section,
      'article:tag': page.article.tags?.join(', ')
    })
  };
};

/**
 * Generate Twitter Card metadata
 */
export const generateTwitterMetadata = (page: PageSEO) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': page.title,
    'twitter:description': page.description,
    'twitter:image': page.ogImage || 'https://labstack.in/uploads/97d6ae42-ba64-4793-a727-6945e3a2b8bc.png'
  };
};
