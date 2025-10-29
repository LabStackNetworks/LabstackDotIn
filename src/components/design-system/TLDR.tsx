/**
 * TLDR (Too Long; Didn't Read) Component
 * 
 * Displays a concise summary at the top of content-heavy pages
 * Optimized for GEO (Generative Engine Optimization)
 * 
 * @component
 * @example
 * <TLDR 
 *   summary="Launch healthcare services in 48 hours across 9,000+ pincodes"
 *   keyPoints={["One API", "Complete infrastructure", "No upfront costs"]}
 * />
 */

import { Zap } from "lucide-react";

interface TLDRProps {
  summary: string;
  keyPoints?: string[];
  className?: string;
}

const TLDR = ({ summary, keyPoints, className = "" }: TLDRProps) => {
  return (
    <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 lg:p-8 border border-primary/20 ${className}`}>
      <div className="flex items-start space-x-3 mb-4">
        <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-2">TL;DR</h3>
          <p className="text-foreground leading-relaxed">{summary}</p>
        </div>
      </div>
      
      {keyPoints && keyPoints.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <span className="text-primary mt-0.5">•</span>
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TLDR;
