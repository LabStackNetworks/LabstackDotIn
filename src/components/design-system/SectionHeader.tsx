/**
 * SectionHeader Component
 * 
 * Consistent section header with title, description, and optional badge
 * Part of the Labstack design system
 * 
 * @component
 * @example
 * <SectionHeader 
 *   badge="PLATFORM"
 *   title="Complete Healthcare Infrastructure"
 *   description="Launch care services in 48 hours"
 *   centered
 * />
 */

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  badge, 
  title, 
  description, 
  centered = false,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12 lg:mb-16",
      centered && "text-center max-w-4xl mx-auto",
      className
    )}>
      {badge && (
        <div className={cn(
          "inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6",
          centered && "mx-auto"
        )}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
