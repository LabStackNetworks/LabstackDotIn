import { useEffect } from 'react';

/**
 * Performance optimization hook for reducing unnecessary re-renders
 * and optimizing resource loading
 */
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Prefetch critical resources
    const prefetchResources = () => {
      // Prefetch DNS for external resources
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = 'https://fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to critical domains
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
    };

    prefetchResources();

    // Implement passive event listeners for better scroll performance
    const options = { passive: true };
    const scrollHandler = () => {
      // Handle scroll events with passive listeners
    };

    window.addEventListener('scroll', scrollHandler, options);
    window.addEventListener('touchstart', scrollHandler, options);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('touchstart', scrollHandler);
    };
  }, []);
};

/**
 * Intersection Observer hook for lazy loading components
 */
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is visible, load resources
          element.classList.add('visible');
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
};
