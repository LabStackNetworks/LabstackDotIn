// GEO (Generative Engine Optimization) utilities
// These utilities help optimize content for AI search engines like ChatGPT, Perplexity, etc.

/**
 * Generate a concise TLDR summary for content
 * AI engines prefer short, direct answers
 */
export const generateTLDR = (content: string): string => {
  // For now, return content as-is
  // In production, this could use AI to generate summaries
  return content;
};

/**
 * Structure content for AI consumption
 * AI engines prefer clear hierarchy and semantic structure
 */
export interface StructuredContent {
  tldr: string;
  keyPoints: string[];
  faqs: Array<{ question: string; answer: string }>;
  mainContent: string;
}

/**
 * Optimize page metadata for GEO
 */
export const optimizeForGEO = (page: {
  title: string;
  description: string;
  content: string;
}): StructuredContent => {
  return {
    tldr: page.description,
    keyPoints: [],
    faqs: [],
    mainContent: page.content
  };
};

/**
 * Generate semantically related queries
 * Helps answer variations of the same question
 */
export const generateRelatedQueries = (mainQuery: string): string[] => {
  // Example transformations
  const variations = [
    `What is ${mainQuery}?`,
    `How does ${mainQuery} work?`,
    `Benefits of ${mainQuery}`,
    `${mainQuery} pricing`,
    `${mainQuery} features`
  ];
  return variations;
};

/**
 * Format content for answer-first approach
 * AI engines prefer immediate, direct answers
 */
export const formatAnswerFirst = (question: string, answer: string, details?: string) => {
  return {
    question,
    shortAnswer: answer.slice(0, 200), // Keep under 200 chars
    fullAnswer: answer,
    details
  };
};
