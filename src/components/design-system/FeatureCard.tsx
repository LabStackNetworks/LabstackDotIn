/**
 * FeatureCard Component
 * 
 * Reusable card component for displaying features, benefits, or services
 * Part of the Labstack design system
 * 
 * @component
 * @example
 * <FeatureCard 
 *   icon={<CheckCircle />}
 *   title="Quality Assurance"
 *   description="100% report verification before delivery"
 *   variant="primary"
 * />
 */

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "primary" | "success" | "muted";
  features?: string[];
  className?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  variant = "default",
  features,
  className 
}: FeatureCardProps) => {
  const iconBgColors = {
    default: "bg-muted",
    primary: "bg-primary/10",
    success: "bg-success/10",
    muted: "bg-muted/50"
  };

  const iconColors = {
    default: "text-foreground",
    primary: "text-primary",
    success: "text-success",
    muted: "text-muted-foreground"
  };

  return (
    <div className={cn("bg-card-gradient p-6 lg:p-8 rounded-2xl border border-border/20 card-hover", className)}>
      {icon && (
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", iconBgColors[variant])}>
          <div className={iconColors[variant]}>
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
