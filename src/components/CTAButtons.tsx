import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAButtonsProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  variant?: "default" | "reverse";
  className?: string;
}

const CTAButtons = ({
  primaryText = "Book a Demo",
  primaryLink = "/book-demo",
  secondaryText = "Start Building",
  secondaryLink = "/start-building",
  variant = "default",
  className = ""
}: CTAButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Link to={primaryLink}>
        <Button 
          size="lg" 
          className={variant === "default" ? "btn-gradient w-full sm:w-auto" : "w-full sm:w-auto"}
          variant={variant === "reverse" ? "default" : undefined}
        >
          {primaryText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      {secondaryText && (
        <Link to={secondaryLink}>
          <Button 
            size="lg" 
            variant={variant === "default" ? "outline" : undefined}
            className={variant === "reverse" ? "btn-gradient w-full sm:w-auto" : "w-full sm:w-auto"}
          >
            {secondaryText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CTAButtons;
