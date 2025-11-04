/**
 * Performance Optimization Utilities
 * 
 * Helper functions to improve website load time and perceived performance.
 */

/**
 * Preload critical route
 * Preloads a lazy-loaded component before user navigates to it
 */
export const preloadRoute = (importFn: () => Promise<any>) => {
  importFn();
};

/**
 * Prefetch image
 * Preloads an image to improve perceived performance
 */
export const prefetchImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Debounce function
 * Delays execution until after wait milliseconds have elapsed
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Optimize images on load
 * Sets loading and decoding attributes for better performance
 */
export const optimizeImageElement = (img: HTMLImageElement) => {
  img.loading = 'lazy';
  img.decoding = 'async';
};
