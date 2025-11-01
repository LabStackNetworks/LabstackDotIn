# Labstack Design System

## Overview
This directory contains the core design system components for the Labstack Healthcare Platform. All components follow consistent design tokens, semantic color usage, and accessibility standards.

## Design Principles

### 1. **Semantic Token Usage**
- ✅ **DO**: Use semantic tokens from `index.css` and `tailwind.config.ts`
- ❌ **DON'T**: Use direct colors like `text-white`, `bg-black`, `text-blue-500`

```tsx
// ✅ Good
<div className="bg-primary text-primary-foreground">

// ❌ Bad
<div className="bg-blue-500 text-white">
```

### 2. **Component Variants**
All design system components support multiple variants through CVA (class-variance-authority):

```tsx
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "border border-border bg-transparent"
    }
  }
});
```

### 3. **Dark/Light Mode Support**
Every component must work in both light and dark modes using CSS variables:

```css
:root {
  --primary: 200 90% 50%;
}

.dark {
  --primary: 200 90% 50%; /* Same hue, adjusted lightness */
}
```

### 4. **Mobile-First Responsive**
All components use mobile-first breakpoints:

```tsx
<div className="text-sm md:text-base lg:text-lg">
```

## Core Components

### Layout Components
- `PageTemplate` - Standard page layout with SEO
- `SectionHeader` - Consistent section headers
- `TLDR` - Quick summary for GEO optimization

### Content Components
- `FeatureCard` - Feature highlights
- `StatCard` - Metric displays
- `ProofQuote` - Customer testimonials

### Interactive Components
- Buttons (shadcn/ui)
- Forms (shadcn/ui with react-hook-form)
- Modals, Dropdowns, etc.

## File Structure

```
design-system/
├── README.md                 # This file
├── DesignTokens.tsx         # Centralized design tokens
├── FeatureCard.tsx          # Feature display component
├── ProofQuote.tsx           # Testimonial component
├── SectionHeader.tsx        # Section title component
├── StatCard.tsx             # Metric display component
└── TLDR.tsx                 # Summary component
```

## Usage Guidelines

### Creating New Components

1. **Import Design Tokens**
```tsx
import { DesignTokens } from './DesignTokens';
```

2. **Use Semantic Classes**
```tsx
<div className="bg-card text-card-foreground border border-border rounded-lg">
```

3. **Add Variants with CVA**
```tsx
import { cva, type VariantProps } from "class-variance-authority";

const componentVariants = cva("base-classes", {
  variants: {
    size: { sm: "p-2", md: "p-4", lg: "p-6" },
    variant: { default: "bg-card", premium: "bg-gradient-primary" }
  },
  defaultVariants: { size: "md", variant: "default" }
});
```

4. **Export with TypeScript**
```tsx
interface ComponentProps extends VariantProps<typeof componentVariants> {
  children: React.ReactNode;
}

export const Component = ({ size, variant, children }: ComponentProps) => {
  return <div className={componentVariants({ size, variant })}>{children}</div>;
};
```

### Color Usage

**Primary Use Cases:**
- CTAs, links, active states
- `bg-primary`, `text-primary`, `border-primary`

**Secondary Use Cases:**
- Secondary actions, accents
- `bg-secondary`, `text-secondary`

**Success/Warning/Destructive:**
- Status indicators, alerts
- `bg-success`, `text-warning`, `border-destructive`

**Neutral Colors:**
- Background: `bg-background`, `bg-card`, `bg-muted`
- Text: `text-foreground`, `text-muted-foreground`
- Borders: `border-border`

### Spacing Scale (4px base)
```tsx
gap-1   // 4px
gap-2   // 8px
gap-4   // 16px
gap-6   // 24px
gap-8   // 32px
gap-12  // 48px
gap-16  // 64px
```

### Typography Hierarchy

```tsx
// Headings
<h1 className="text-4xl lg:text-5xl font-heading font-bold">
<h2 className="text-3xl lg:text-4xl font-heading font-semibold">
<h3 className="text-2xl font-heading font-semibold">

// Body Text
<p className="text-base text-muted-foreground font-body">
```

## Animation Guidelines

Use predefined animations from `tailwind.config.ts`:

```tsx
<div className="animate-fade-in">        // Fade in on mount
<div className="animate-slide-up">       // Slide up on mount
<div className="animate-scale-in">       // Scale in on mount
<div className="animate-pulse-subtle">   // Subtle pulse
<div className="animate-glow">           // Glow effect
```

## Accessibility

### Minimum Requirements
- ✅ All interactive elements must have `aria-label` or visible text
- ✅ Minimum touch target: 44x44px (`mobile-touch-target` class)
- ✅ Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- ✅ Keyboard navigation support for all interactive elements

### Mobile Optimization
```tsx
<button className="mobile-btn mobile-touch-target">
  // Minimum 48px height, proper padding
</button>
```

## Testing Components

Before committing new design system components:

1. **Visual Testing**
   - Test in light and dark modes
   - Test on mobile, tablet, desktop viewports
   - Verify color contrast ratios

2. **Functional Testing**
   - Keyboard navigation works
   - Screen reader announces correctly
   - Touch targets are adequate (44px min)

3. **Performance Testing**
   - No layout shift (CLS)
   - Fast rendering (<100ms)
   - Smooth animations (60fps)

## Maintenance

### Adding New Tokens
1. Add to `index.css` as CSS variable
2. Add to `tailwind.config.ts` color/spacing/etc.
3. Update `DesignTokens.tsx`
4. Document in this README

### Deprecating Components
1. Add `@deprecated` JSDoc comment
2. Add console warning in component
3. Create migration guide
4. Remove after 2 releases

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [CVA Docs](https://cva.style/docs)
- [Radix UI](https://www.radix-ui.com)

## Questions?

Contact the design system team or check internal documentation at `/docs/design-system`.
