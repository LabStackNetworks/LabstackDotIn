# Labstack Design System - Complete Documentation

## Overview

The Labstack design system is a comprehensive, production-ready system built for healthcare applications. It provides semantic tokens, reusable components, and optimized patterns for building scalable healthcare platforms.

**Version:** 1.0.0  
**Last Updated:** January 24, 2025  
**Status:** ✅ Production Ready

---

## 🎨 Design Philosophy

### Core Principles

1. **Semantic Tokens First**
   - ALL colors use HSL format via CSS variables
   - NO hardcoded colors (text-white, bg-blue-500, etc.)
   - Theme-aware (light/dark mode support)

2. **Mobile-First Responsive**
   - Design for mobile (320px+)
   - Enhance for tablet (768px+)
   - Optimize for desktop (1024px+)

3. **Performance Optimized**
   - Lazy loading for images
   - Code splitting for routes
   - Minimal rerenders
   - GPU-accelerated animations

4. **Accessibility WCAG 2.1 AA**
   - Keyboard navigation
   - Screen reader support
   - Touch targets ≥44px
   - Color contrast ≥4.5:1

5. **SEO & GEO Optimized**
   - Semantic HTML5
   - Structured data (JSON-LD)
   - Hidden TL;DR for AI crawlers
   - Clean markup

---

## 🎯 Color System (HSL Only)

### Brand Colors

```css
/* Primary - Blue (Brand) */
--primary: 200 90% 50%;           /* #0EA5E9 */
--primary-foreground: 210 40% 98%; /* Text on primary */
--primary-hover: 200 90% 45%;      /* Hover state */

/* Secondary - Purple (Accent) */
--secondary: 270 80% 60%;          /* #A855F7 */
--secondary-foreground: 220 27% 8%; /* Text on secondary */
--secondary-hover: 270 80% 55%;    /* Hover state */
```

### Status Colors

```css
/* Success - Green */
--success: 142 71% 45%;            /* #22C55E */
--success-foreground: 210 40% 98%;

/* Warning - Amber */
--warning: 38 92% 50%;             /* #F59E0B */
--warning-foreground: 220 27% 8%;

/* Destructive - Red */
--destructive: 0 75% 60%;          /* #EF4444 */
--destructive-foreground: 213 31% 91%;
```

### Neutral Colors

```css
/* Background System */
--background: 220 27% 8%;          /* Main background */
--foreground: 213 31% 91%;         /* Main text */

/* Card System */
--card: 220 26% 11%;               /* Card background */
--card-foreground: 213 31% 91%;    /* Card text */
--card-hover: 220 25% 14%;         /* Card hover state */

/* Muted System */
--muted: 220 25% 18%;              /* Muted backgrounds */
--muted-foreground: 213 19% 65%;   /* Muted text */

/* Border System */
--border: 220 25% 20%;             /* Border color */
--input: 220 25% 16%;              /* Input borders */
--ring: 200 90% 50%;               /* Focus rings */
```

---

## 📐 Spacing System (4px Base)

```tsx
// Tailwind spacing scale (4px increments)
gap-1    // 4px
gap-2    // 8px
gap-3    // 12px
gap-4    // 16px
gap-6    // 24px
gap-8    // 32px
gap-12   // 48px
gap-16   // 64px
gap-20   // 80px
gap-24   // 96px

// Section padding utilities
py-12    // 48px (mobile sections)
py-16    // 64px (tablet sections)
py-20    // 80px (desktop sections)
```

---

## ✍️ Typography System

### Font Families

```css
/* Headings */
font-heading: 'Space Grotesk', Inter, system-ui, sans-serif;

/* Body */
font-body: Inter, system-ui, sans-serif;
```

### Type Scale

```tsx
// Headings (use font-heading)
<h1 className="text-4xl lg:text-6xl font-heading font-bold">
<h2 className="text-3xl lg:text-5xl font-heading font-bold">
<h3 className="text-2xl lg:text-3xl font-heading font-semibold">
<h4 className="text-xl lg:text-2xl font-heading font-semibold">

// Body text (use font-body)
<p className="text-base text-muted-foreground">           // 16px
<p className="text-lg text-muted-foreground">             // 18px
<p className="text-sm text-muted-foreground">             // 14px
<p className="text-xs text-muted-foreground">             // 12px
```

### Mobile-First Typography

```tsx
// Responsive headings
<h1 className="text-3xl sm:text-4xl lg:text-6xl">
<h2 className="text-2xl sm:text-3xl lg:text-4xl">

// Clamp for fluid typography
.mobile-heading {
  font-size: clamp(24px, 5vw, 48px);
}
```

---

## 🎭 Gradient System

### Defined Gradients

```css
/* Primary gradient (blue to purple) */
--gradient-primary: linear-gradient(135deg, 
  hsl(var(--primary)), 
  hsl(var(--secondary))
);

/* Subtle gradient (light primary/secondary) */
--gradient-subtle: linear-gradient(135deg, 
  hsl(var(--primary) / 0.1), 
  hsl(var(--secondary) / 0.1)
);

/* Hero sections */
--gradient-hero: linear-gradient(135deg, 
  hsl(220 27% 8%), 
  hsl(220 25% 12%)
);

/* Cards */
--gradient-card: linear-gradient(135deg, 
  hsl(var(--card)), 
  hsl(220 25% 13%)
);
```

### Usage

```tsx
// As utility class
<div className="bg-gradient-primary text-white">

// As Tailwind class
<div className="bg-gradient-to-br from-primary to-secondary">

// In custom CSS
.hero {
  background: var(--gradient-hero);
}
```

---

## 💫 Animation System

### Predefined Animations

```tsx
// Entrance animations
animate-fade-in          // Fade in from bottom
animate-slide-up         // Slide up with fade
animate-scale-in         // Scale up with fade

// Interactive animations
animate-pulse-subtle     // Subtle pulsing (4s)
animate-glow             // Glow effect (2s)
animate-spin-slow        // Slow rotation (8s)

// Accordion
animate-accordion-down   // Expand
animate-accordion-up     // Collapse
```

### Transition Utilities

```tsx
// From design tokens
transition-smooth        // 300ms ease
transition-bounce        // 300ms bounce
transition-spring        // 400ms spring
transition-elegant       // 500ms elegant

// Hover transforms
hover:scale-102          // 1.02x scale
hover:scale-105          // 1.05x scale
hover:scale-110          // 1.10x scale
```

---

## 🃏 Card Components

### Card Variants

```tsx
// Standard card with gradient
<div className="card-gradient p-6 rounded-xl border border-border/20">
  Content
</div>

// Hover effect card
<div className="card-gradient card-hover p-6 rounded-xl">
  Content
</div>

// 3D card effect
<div className="card-3d">
  <div className="card-3d-inner p-6">
    Content
  </div>
</div>
```

### Card Utilities

```css
.card-gradient {
  /* Multi-layer gradient with borders and subtle glow */
  background: linear-gradient(...);
  border: 1px solid hsl(var(--border) / 0.3);
  box-shadow: /* Multiple shadows */;
  backdrop-filter: blur(8px);
}

.card-hover {
  /* Smooth transform on hover */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: /* Enhanced shadows */;
}
```

---

## 🔘 Button System

### Button Variants

```tsx
import { Button } from "@/components/ui/button"

// Primary gradient button
<Button className="btn-gradient">
  Click me
</Button>

// Outline gradient button
<Button className="btn-outline-gradient">
  Click me
</Button>

// Standard variants (from shadcn)
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
```

### Button Styles

```css
/* Gradient button with shimmer effect */
.btn-gradient {
  background: var(--gradient-primary);
  color: white;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-elegant);
}

.btn-gradient:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: var(--shadow-glow);
}

/* Outline gradient button */
.btn-outline-gradient {
  background: linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box,
              var(--gradient-primary) border-box;
  border: 2px solid transparent;
}
```

---

## 📱 Mobile-First Utilities

### Mobile Optimization Classes

```tsx
// Section padding (responsive)
<section className="mobile-section-padding">
  // py-12 sm:py-16 lg:py-20
</section>

// Card padding (responsive)
<div className="mobile-card-padding">
  // p-4 sm:p-6 lg:p-8
</div>

// Touch targets (minimum 44px)
<button className="mobile-touch-target">
  // min-height: 44px, min-width: 44px
</button>

// Readable text (fluid sizing)
<p className="mobile-text-readable">
  // clamp(14px, 2.5vw, 16px)
</p>

// Headings (fluid sizing)
<h1 className="mobile-heading">
  // clamp(24px, 5vw, 48px)
</h1>
```

---

## 🎨 Design Tokens Usage

### ✅ Correct Usage

```tsx
// Use semantic tokens
<div className="bg-primary text-primary-foreground">
<div className="bg-card text-card-foreground border border-border">
<div className="text-success bg-success/10">
<Button className="btn-gradient">CTA</Button>
```

### ❌ Incorrect Usage

```tsx
// NEVER use direct colors
<div className="bg-blue-500 text-white">           // ❌
<div className="bg-[#0EA5E9] text-[#FFFFFF]">     // ❌
<div className="bg-purple-600">                   // ❌
```

---

## 🧩 Component Library

### Layout Components

#### PageTemplate
Standard layout with SEO, header, footer, and structured data.

```tsx
import PageTemplate from '@/components/PageTemplate';

<PageTemplate
  title="Page Title for SEO"
  description="Meta description under 160 chars"
  keywords="keyword1, keyword2, keyword3"
  canonical="https://labstack.in/page"
  structuredData={[schema1, schema2]}
>
  <YourPageContent />
</PageTemplate>
```

#### SectionHeader
Consistent section headers with optional badges.

```tsx
import SectionHeader from '@/components/design-system/SectionHeader';

<SectionHeader
  badge="PLATFORM"
  title="Your Section Title"
  description="Optional description"
  centered
/>
```

### Content Components

#### FeatureCard
Display features, benefits, or services.

```tsx
import FeatureCard from '@/components/design-system/FeatureCard';

<FeatureCard
  icon={<CheckCircle className="w-10 h-10" />}
  title="Feature Name"
  description="Feature description"
  variant="primary"
  features={[
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]}
/>
```

#### StatCard
Display key metrics and statistics.

```tsx
import StatCard from '@/components/design-system/StatCard';

<StatCard
  value="9,000+"
  label="Pincodes Covered"
  description="Nationwide reach"
  icon={<MapPin />}
  variant="gradient"
/>
```

#### ProofQuote
Customer testimonials and social proof.

```tsx
import ProofQuote from '@/components/design-system/ProofQuote';

<ProofQuote
  quote="Labstack enabled us to launch in 14 days"
  author="Healthcare CEO"
  company="Digital Health Platform"
  metric="90% faster launch"
/>
```

#### TLDR (AI Optimization)
Hidden summary for AI crawlers (GEO optimization).

```tsx
import TLDR from '@/components/design-system/TLDR';

<div className="sr-only" aria-hidden="true">
  <TLDR
    summary="Page summary for AI engines in 1-2 sentences"
    keyPoints={[
      "Key benefit 1",
      "Key benefit 2",
      "Key benefit 3"
    ]}
  />
</div>
```

---

## 📦 File Structure

```
src/
├── App.tsx                         # Main router (fully commented)
├── index.css                       # Design system tokens
├── main.tsx                        # App entry point
│
├── components/
│   ├── design-system/              # Core design components
│   │   ├── README.md              # Component documentation
│   │   ├── DesignTokens.tsx       # Centralized tokens
│   │   ├── FeatureCard.tsx        # Feature displays
│   │   ├── StatCard.tsx           # Metrics
│   │   ├── ProofQuote.tsx         # Testimonials
│   │   ├── SectionHeader.tsx      # Section titles
│   │   └── TLDR.tsx               # AI summaries
│   │
│   ├── ui/                        # Shadcn components (40+ components)
│   │   ├── button.tsx             # Button variants
│   │   ├── card.tsx               # Card layouts
│   │   ├── dialog.tsx             # Modals
│   │   └── ...                    # All shadcn components
│   │
│   ├── Header.tsx                 # Global header
│   ├── Footer.tsx                 # Global footer
│   ├── SEOHead.tsx                # Dynamic SEO tags
│   ├── PageTemplate.tsx           # Page wrapper
│   ├── FAQ.tsx                    # FAQ component
│   ├── Breadcrumbs.tsx            # Navigation
│   ├── LazyImage.tsx              # Optimized images
│   └── ...                        # Feature components
│
├── lib/
│   ├── structured-data.ts         # JSON-LD generators
│   ├── seo-config.ts              # SEO configuration
│   ├── seo-helpers.ts             # SEO utilities
│   ├── consistent-data.ts         # Data constants
│   ├── utils.ts                   # Utility functions
│   └── faqs/                      # FAQ data by page
│
├── pages/                         # All route pages
│   ├── Index.tsx                  # Homepage
│   ├── About.tsx
│   ├── platform/                  # Platform pages
│   ├── solutions/                 # Solution pages
│   ├── who-we-serve/              # Customer pages
│   ├── provider/                  # Provider pages
│   └── resources/                 # Blog & resources
│       ├── blog/                  # Blog posts
│       └── case-studies/          # Case studies
│
└── hooks/                         # Custom React hooks
    ├── use-mobile.tsx             # Mobile detection
    └── usePerformanceOptimization.ts

public/
├── robots.txt                     # Crawler rules
├── sitemap.xml                    # Site structure
├── humans.txt                     # Team info
├── security.txt                   # Security policy
├── manifest.json                  # PWA config
├── favicon.png                    # App icon
├── india-map.png                  # Map image
└── .well-known/                   # Standard URIs
    ├── security.txt
    ├── change-password
    └── README.md

Documentation/
├── DESIGN_SYSTEM_DOCUMENTATION.md # This file
├── PRODUCTION_CHECKLIST.md        # Launch checklist
├── SEO_AEO_IMPLEMENTATION_COMPLETE.md # SEO report
├── INDEX_OF_FILES.md              # File index
└── components/design-system/README.md # Component docs
```

---

## 🎨 Component Variants (CVA Pattern)

All components use class-variance-authority for type-safe variants:

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const componentVariants = cva(
  // Base classes (always applied)
  "rounded-lg transition-smooth",
  {
    variants: {
      // Size variants
      size: {
        sm: "p-2 text-sm",
        md: "p-4 text-base",
        lg: "p-6 text-lg"
      },
      // Visual variants
      variant: {
        default: "bg-card text-card-foreground",
        primary: "bg-primary text-primary-foreground",
        gradient: "bg-gradient-primary text-white"
      }
    },
    // Default selections
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);

// TypeScript interface
interface ComponentProps extends VariantProps<typeof componentVariants> {
  children: React.ReactNode;
  className?: string;
}

// Component implementation
export const Component = ({ 
  size, 
  variant, 
  className,
  children 
}: ComponentProps) => {
  return (
    <div className={cn(componentVariants({ size, variant }), className)}>
      {children}
    </div>
  );
};
```

---

## 🌗 Dark/Light Mode

### Theme Implementation

```tsx
// ThemeProvider wraps entire app
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
  <App />
</ThemeProvider>

// Toggle component
import { ThemeToggle } from '@/components/ThemeToggle';
<ThemeToggle />
```

### Color Tokens (Auto-switching)

```css
:root {
  --background: 0 0% 100%;     /* Light mode */
}

.dark {
  --background: 220 27% 8%;    /* Dark mode */
}
```

---

## ♿ Accessibility Guidelines

### Minimum Requirements

1. **Keyboard Navigation**
```tsx
// All interactive elements
<button 
  className="..."
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
```

2. **ARIA Labels**
```tsx
// For icon-only buttons
<button aria-label="Close menu">
  <X />
</button>

// For screen readers
<div className="sr-only">Hidden explanation</div>
```

3. **Touch Targets**
```tsx
// Minimum 44x44px
<button className="mobile-touch-target">
  // min-height: 44px, min-width: 44px
</button>
```

4. **Color Contrast**
```css
/* Ensure 4.5:1 ratio for normal text */
/* Ensure 3:1 ratio for large text (18px+) */
```

5. **Focus States**
```tsx
// Visible focus rings
<button className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
```

---

## 🚀 Performance Optimization

### Image Loading

```tsx
import LazyImage from '@/components/LazyImage';

// Lazy-loaded with blur placeholder
<LazyImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  effect="blur"
/>
```

### Code Splitting

```tsx
// All routes lazy-loaded
const PageName = lazy(() => import('./pages/PageName'));

// Use in router with Suspense
<Suspense fallback={<Loader />}>
  <Routes>
    <Route path="/" element={<PageName />} />
  </Routes>
</Suspense>
```

### Bundle Optimization

- ✅ Tree-shaking enabled (Vite)
- ✅ Lazy routes (React.lazy)
- ✅ Lazy images (react-lazy-load-image)
- ✅ Minimal dependencies
- ✅ No unused imports

---

## 📏 Responsive Breakpoints

```tsx
// Tailwind breakpoints
sm: '640px'   // Small tablets
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large desktops

// Usage (mobile-first)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  // 1 column on mobile, 2 on tablet, 3 on desktop
</div>
```

---

## 🎯 SEO Component Integration

### Every Page Should Have:

```tsx
import PageTemplate from '@/components/PageTemplate';
import TLDR from '@/components/design-system/TLDR';
import { generateArticleSchema, generateFAQSchema } from '@/lib/structured-data';

const YourPage = () => {
  // Generate structured data
  const articleSchema = generateArticleSchema({...});
  const faqSchema = generateFAQSchema(faqs);
  
  return (
    <PageTemplate
      title="Page Title | Labstack"
      description="Meta description"
      keywords="keywords, here"
      canonical="https://labstack.in/page"
      structuredData={[articleSchema, faqSchema]}
    >
      {/* Hidden AI summary */}
      <div className="sr-only" aria-hidden="true">
        <TLDR 
          summary="Page summary"
          keyPoints={["Point 1", "Point 2"]}
        />
      </div>
      
      {/* Page content */}
      <article>...</article>
    </PageTemplate>
  );
};
```

---

## 🧪 Testing Guidelines

### Visual Testing
```bash
# Test in both modes
1. Light mode ☀️
2. Dark mode 🌙

# Test on all viewports
1. Mobile (375px)
2. Tablet (768px)
3. Desktop (1440px)
```

### Accessibility Testing
```bash
# Keyboard navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape to close modals

# Screen reader
- Run axe DevTools
- Test with NVDA/JAWS
- Verify ARIA labels
```

### Performance Testing
```bash
# Lighthouse audit (target scores)
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

# Core Web Vitals
- LCP: <2.5s (Largest Contentful Paint)
- FID: <100ms (First Input Delay)
- CLS: <0.1 (Cumulative Layout Shift)
```

---

## 📚 Design System Maintenance

### Adding New Components

1. **Create component in appropriate directory**
   ```tsx
   src/components/design-system/NewComponent.tsx
   ```

2. **Use semantic tokens only**
   ```tsx
   const componentVariants = cva("base-classes", {
     variants: {
       variant: {
         default: "bg-card text-card-foreground",
         primary: "bg-primary text-primary-foreground"
       }
     }
   });
   ```

3. **Add TypeScript interfaces**
   ```tsx
   interface NewComponentProps extends VariantProps<typeof componentVariants> {
     children: React.ReactNode;
     // ... other props
   }
   ```

4. **Document in README**
   - Add usage example
   - List all variants
   - Show code samples

5. **Export from index** (if needed)

### Updating Design Tokens

1. **Update index.css**
   ```css
   :root {
     --new-token: 200 90% 50%;
   }
   ```

2. **Update tailwind.config.ts**
   ```ts
   colors: {
     'new-color': 'hsl(var(--new-token))'
   }
   ```

3. **Document in DesignTokens.tsx**
4. **Update this documentation**

---

## 🎯 Best Practices

### 1. Component Creation
✅ Use semantic tokens  
✅ Mobile-first responsive  
✅ TypeScript interfaces  
✅ Accessibility support  
✅ Performance optimized  
✅ Documented with examples  

### 2. Styling Approach
✅ Utility-first (Tailwind)  
✅ Semantic tokens only  
✅ No inline styles  
✅ No hardcoded colors  
✅ Responsive modifiers  
✅ Hover/focus states  

### 3. Code Quality
✅ TypeScript strict mode  
✅ ESLint compliant  
✅ Commented code  
✅ Consistent naming  
✅ DRY principle  
✅ Small, focused files  

---

## 📞 Support

**Technical Questions:**
- Email: contact@labstack.in
- Documentation: See component README files

**Design System Updates:**
- Submit via: https://labstack.in/contact
- Include: Use case, mockups, rationale

---

## 📖 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)
- [CVA (Class Variance Authority)](https://cva.style/docs)
- [React Aria (Accessibility)](https://react-spectrum.adobe.com/react-aria/)

---

## ✅ Checklist for New Components

Before adding a new component to the design system:

- [ ] Uses semantic tokens only (no hardcoded colors)
- [ ] Has TypeScript interface
- [ ] Supports light/dark modes
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] Has ARIA labels where needed
- [ ] Includes JSDoc comments
- [ ] Has usage examples
- [ ] Performance optimized
- [ ] Tested on mobile/tablet/desktop
- [ ] Documented in README

---

**Last Updated:** January 24, 2025  
**Version:** 1.0.0  
**Status:** ✅ Production Ready

**Built by the Labstack Team**  
*Making healthcare infrastructure invisible so innovation can thrive.*
