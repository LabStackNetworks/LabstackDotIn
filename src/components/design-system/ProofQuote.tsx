/**
 * ProofQuote Component
 * 
 * Displays customer testimonials and social proof
 * Part of the Labstack design system
 * 
 * @component
 * @example
 * <ProofQuote 
 *   quote="Labstack helped us launch in 48 hours"
 *   author="VP of Product, HealthTech Startup"
 *   variant="success"
 * />
 */

import { cn } from "@/lib/utils";

interface ProofQuoteProps {
  quote: string;
  author?: string;
  variant?: "default" | "success" | "primary";
  className?: string;
}

const ProofQuote = ({ 
  quote, 
  author,
  variant = "default",
  className 
}: ProofQuoteProps) => {
  const variants = {
    default: "bg-card-gradient border-border/20",
    success: "bg-success/5 border-success/20",
    primary: "bg-primary/5 border-primary/20"
  };

  const textVariants = {
    default: "text-muted-foreground",
    success: "text-success",
    primary: "text-primary"
  };

  return (
    <div className={cn(
      "p-8 rounded-2xl border",
      variants[variant],
      className
    )}>
      <p className={cn(
        "text-lg italic leading-relaxed mb-4",
        textVariants[variant]
      )}>
        "{quote}"
      </p>
      
      {author && (
        <p className="text-sm text-muted-foreground font-medium">
          {author}
        </p>
      )}
    </div>
  );
};

export default ProofQuote;
