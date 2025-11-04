/**
 * Route Loading Hook
 * 
 * Manages loading states during route transitions to prevent blank screens
 * and provide smooth user experience during navigation.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useRouteLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    // Hide loader after component mounts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Small delay to ensure smooth transition

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading;
};
