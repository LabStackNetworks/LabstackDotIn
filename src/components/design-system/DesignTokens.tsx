/**
 * Design Tokens Component
 * Centralized design system tokens for consistent UI across the Labstack platform
 * 
 * Usage:
 * import { DesignTokens } from '@/components/design-system/DesignTokens';
 * const { colors, spacing, typography } = DesignTokens;
 * 
 * @module DesignTokens
 */

export const DesignTokens = {
  // Color System (HSL values from index.css)
  colors: {
    // Brand Colors
    primary: {
      DEFAULT: 'hsl(200 90% 50%)', // Blue
      foreground: 'hsl(220 27% 8%)',
      hover: 'hsl(200 90% 45%)',
      light: 'hsl(200 90% 60%)',
      dark: 'hsl(200 90% 40%)'
    },
    secondary: {
      DEFAULT: 'hsl(270 80% 60%)', // Purple
      foreground: 'hsl(220 27% 8%)',
      hover: 'hsl(270 80% 55%)',
      light: 'hsl(270 80% 70%)',
      dark: 'hsl(270 80% 50%)'
    },
    // Semantic Colors
    success: {
      DEFAULT: 'hsl(142 71% 45%)',
      foreground: 'hsl(213 31% 91%)',
      light: 'hsl(142 71% 55%)',
      dark: 'hsl(142 71% 35%)'
    },
    warning: {
      DEFAULT: 'hsl(38 92% 50%)',
      foreground: 'hsl(220 27% 8%)',
      light: 'hsl(38 92% 60%)',
      dark: 'hsl(38 92% 40%)'
    },
    destructive: {
      DEFAULT: 'hsl(0 75% 60%)',
      foreground: 'hsl(213 31% 91%)',
      light: 'hsl(0 75% 70%)',
      dark: 'hsl(0 75% 50%)'
    },
    // Neutral Colors
    background: 'hsl(220 27% 8%)',
    foreground: 'hsl(213 31% 91%)',
    card: 'hsl(220 26% 11%)',
    muted: 'hsl(220 25% 18%)',
    accent: 'hsl(220 25% 16%)',
    border: 'hsl(220 25% 20%)'
  },

  // Spacing Scale (4px base unit)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },

  // Typography Scale
  typography: {
    fontFamily: {
      heading: "'Space Grotesk', Inter, system-ui, sans-serif",
      body: "Inter, system-ui, sans-serif",
      mono: "'Fira Code', 'Courier New', monospace"
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2
    }
  },

  // Border Radius Scale
  radius: {
    none: '0',
    sm: '0.375rem',    // 6px
    md: '0.5rem',      // 8px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    full: '9999px'
  },

  // Shadow System
  shadows: {
    sm: '0 1px 2px hsl(220 27% 8% / 0.05)',
    md: '0 4px 6px hsl(220 27% 8% / 0.1)',
    lg: '0 10px 15px hsl(220 27% 8% / 0.1)',
    xl: '0 20px 25px hsl(220 27% 8% / 0.15)',
    '2xl': '0 25px 50px hsl(220 27% 8% / 0.25)',
    elegant: '0 10px 30px -10px hsl(220 27% 8% / 0.5)',
    card: '0 4px 20px -4px hsl(220 27% 8% / 0.3)',
    neural: '0 8px 32px hsl(220 27% 8% / 0.12)',
    glow: '0 0 40px hsl(200 90% 50% / 0.4)'
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, hsl(200 90% 50%), hsl(270 80% 60%))',
    subtle: 'linear-gradient(135deg, hsl(200 90% 50% / 0.1), hsl(270 80% 60% / 0.1))',
    hero: 'linear-gradient(135deg, hsl(220 27% 8%), hsl(220 25% 12%))',
    card: 'linear-gradient(135deg, hsl(220 26% 11%), hsl(220 25% 13%))'
  },

  // Transitions
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    elegant: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  },

  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },

  // Breakpoints (Mobile-First)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

export default DesignTokens;
