/**
 * Route Loader Component
 * 
 * Displays a loading indicator during route transitions to improve
 * perceived performance and user experience.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const RouteLoader = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    // Only show loader if actually navigating to a different page
    if (prevPath !== location.pathname) {
      setIsTransitioning(true);
      setPrevPath(location.pathname);

      // Hide loader after a brief moment to ensure smooth transition
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, prevPath]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-sm">
      <Loader />
    </div>
  );
};

export default RouteLoader;
