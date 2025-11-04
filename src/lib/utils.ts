/**
 * Utility Functions
 * 
 * Common helper functions used throughout the application.
 * 
 * @module utils
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and merges Tailwind classes using twMerge
 * 
 * This function intelligently merges Tailwind CSS classes, ensuring that
 * conflicting classes are properly resolved (e.g., "px-4 px-6" becomes "px-6").
 * 
 * @param inputs - Class names to combine (strings, objects, arrays)
 * @returns Merged class name string
 * 
 * @example
 * ```tsx
 * cn("px-4 py-2", isActive && "bg-primary", className)
 * // Returns: "px-4 py-2 bg-primary additional-class"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
