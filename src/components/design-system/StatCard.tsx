/**
 * StatCard Component
 * 
 * Displays key statistics and metrics
 * Part of the Labstack design system
 * 
 * @component
 * @example
 * <StatCard 
 *   value="9,000+"
 *   label="Pincodes Covered"
 *   description="Home sample collection"
 *   icon={<MapPin />}
 * />
 */

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  variant?: "default" | "gradient";
  className?: string;
}

const StatCard = ({ 
  value, 
  label, 
  description, 
  icon,
  variant = "default",
  className 
}: StatCardProps) => {
  return (
    <div className={cn(
      "p-6 lg:p-8 rounded-2xl border border-border/20 text-center",
      variant === "gradient" ? "bg-gradient-hero" : "bg-card-gradient",
      className
    )}>
      {icon && (
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      )}
      
      <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-2">
        {value}
      </div>
      
      <div className="text-lg font-semibold text-foreground mb-2">
        {label}
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
