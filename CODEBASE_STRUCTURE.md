# Labstack Codebase Structure & Architecture

## 📋 Overview

This document provides a comprehensive guide to the Labstack codebase structure, architectural decisions, and development guidelines.

**Project:** Labstack Healthcare Infrastructure Platform  
**Framework:** React 18 + TypeScript + Vite  
**Styling:** Tailwind CSS + Custom Design System  
**Routing:** React Router v6  
**Version:** 1.0.0  
**Status:** ✅ Production Ready

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (User)                       │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│              React Router (Client-Side)                  │
│  • Code splitting via lazy loading                      │
│  • Suspense boundaries for smooth transitions           │
│  • ScrollToTop on route changes                         │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Global Providers                       │
│  • ThemeProvider (dark/light mode)                      │
│  • QueryClientProvider (React Query)                    │
│  • TooltipProvider (Radix UI)                           │
└─────────────────────────────────────────────────────────┘
                           │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   ┌─────────┐      ┌─────────┐      ┌─────────┐
   │  Pages  │      │Components│      │   Lib   │
   │ (Routes)│      │ (UI/UX)  │      │(Utilities)│
   └─────────┘      └─────────┘      └─────────┘
```

---

## 📁 Directory Structure (Detailed)

### `/src` - Source Code

```
src/
│
├── App.tsx                    # Main router with lazy-loaded routes
├── main.tsx                   # App entry point, renders to DOM
├── index.css                  # Design system tokens (841 lines)
├── vite-env.d.ts             # Vite type definitions
│
├── components/
│   │
│   ├── design-system/        # Core reusable design components
│   │   ├── README.md         # Component documentation
│   │   ├── DesignTokens.tsx  # Centralized design tokens
│   │   ├── FeatureCard.tsx   # Feature highlight cards
│   │   ├── StatCard.tsx      # Metric/statistic displays
│   │   ├── ProofQuote.tsx    # Customer testimonials
│   │   ├── SectionHeader.tsx # Consistent section headers
│   │   └── TLDR.tsx          # AI-optimized summaries
│   │
│   ├── ui/                   # Shadcn components (40+ components)
│   │   ├── button.tsx        # Button variants
│   │   ├── card.tsx          # Card layouts
│   │   ├── dialog.tsx        # Modals/dialogs
│   │   ├── form.tsx          # Form components
│   │   ├── accordion.tsx     # Collapsible content
│   │   ├── tabs.tsx          # Tab navigation
│   │   ├── toast.tsx         # Toast notifications
│   │   └── ...               # All other shadcn components
│   │
│   ├── Header.tsx            # Global navigation header
│   ├── Footer.tsx            # Global footer with links
│   ├── Hero.tsx              # Homepage hero section
│   ├── SEOHead.tsx           # Dynamic SEO meta tags
│   ├── PageTemplate.tsx      # Standard page wrapper
│   ├── FAQ.tsx               # FAQ accordion component
│   ├── Breadcrumbs.tsx       # Navigation breadcrumbs
│   ├── LazyImage.tsx         # Optimized image loading
│   ├── Loader.tsx            # Loading spinner
│   ├── ScrollToTop.tsx       # Scroll restoration
│   ├── ThemeProvider.tsx     # Dark/light mode context
│   ├── ThemeToggle.tsx       # Theme switcher
│   ├── ProofOfScale.tsx      # Interactive India map (67 cities)
│   ├── SolutionsShowcase.tsx # Solution cards
│   ├── ValuePropositionTabs.tsx # Tabbed content
│   ├── WhoWeServe.tsx        # Customer segments
│   ├── ProblemSection.tsx    # Problem statements
│   ├── SolutionSection.tsx   # Solution descriptions
│   ├── DualCTA.tsx           # Dual call-to-actions
│   ├── CTAButtons.tsx        # CTA button groups
│   ├── RelatedBlogs.tsx      # Related content linking
│   └── StructuredDataWrapper.tsx # JSON-LD wrapper
│
├── pages/                    # Route pages (50+ pages)
│   │
│   ├── Index.tsx             # Homepage (/)
│   ├── About.tsx             # About page
│   ├── BookDemo.tsx          # Demo booking
│   ├── Contact.tsx           # Contact form
│   ├── Careers.tsx           # Careers page
│   ├── Login.tsx             # Login page
│   ├── NotFound.tsx          # 404 page
│   ├── CustomSolutions.tsx   # Custom solutions
│   │
│   ├── platform/             # Platform feature pages
│   │   ├── Diagnostics.tsx   # Diagnostics API
│   │   ├── Consultations.tsx # Telemedicine
│   │   ├── Pharmacy.tsx      # Pharmacy network
│   │   ├── SpecializedNetworks.tsx # Specialty care
│   │   └── Integrations.tsx  # API integrations
│   │
│   ├── solutions/            # Solution pages
│   │   ├── SolutionsOverview.tsx
│   │   ├── HealthcareInfrastructure.tsx
│   │   ├── DigitalPlatform.tsx
│   │   ├── APISolutions.tsx
│   │   └── CoverageExpansion.tsx
│   │
│   ├── who-we-serve/         # Customer segment pages
│   │   ├── WhoWeServeOverview.tsx
│   │   ├── InsurersTPAs.tsx  # Insurers & TPAs
│   │   ├── InsureTech.tsx    # InsureTech companies
│   │   ├── BrokersCorporateWellness.tsx
│   │   ├── DiseaseManagement.tsx
│   │   ├── DigitalHealthPlatforms.tsx
│   │   └── Providers.tsx
│   │
│   ├── provider/             # Provider onboarding pages
│   │   ├── ProvidersOverview.tsx
│   │   ├── ProviderJoinForm.tsx
│   │   ├── DoctorsJoin.tsx
│   │   ├── DoctorsForm.tsx
│   │   ├── HospitalsLabsJoin.tsx
│   │   ├── HospitalsLabsForm.tsx
│   │   ├── NutritionistsHealthCoaches.tsx
│   │   ├── NutritionistsForm.tsx
│   │   └── FieldStaffJoin.tsx
│   │
│   └── resources/            # Content pages
│       ├── Blog.tsx          # Blog listing (old)
│       ├── BlogWithCategories.tsx # Blog with filters
│       ├── ResearchHub.tsx   # Case studies hub
│       ├── APIDocumentation.tsx
│       │
│       ├── blog/             # 22 blog posts
│       │   ├── InsurersDigitalTransformation.tsx
│       │   ├── InsurersClaimsFraud.tsx
│       │   ├── InsuretechRevenue.tsx
│       │   ├── InsuretechProductLedGrowth.tsx
│       │   ├── BrokersEngagement.tsx
│       │   ├── DiseaseManagementChronic.tsx
│       │   ├── DigitalHealthAPI.tsx
│       │   ├── ProvidersNetwork.tsx
│       │   └── ... (22 total)
│       │
│       └── case-studies/     # 5 case studies
│           ├── InsurerCaseStudy.tsx
│           ├── BrokerCaseStudy.tsx
│           ├── InsuretechCaseStudy.tsx
│           ├── DiseaseManagementCaseStudy.tsx
│           └── DigitalHealthCaseStudy.tsx
│
├── lib/                      # Utilities & helpers
│   ├── structured-data.ts    # JSON-LD schema generators
│   ├── seo-config.ts         # SEO configuration
│   ├── seo-helpers.ts        # SEO utility functions
│   ├── consistent-data.ts    # Data constants (9,000 pincodes, etc.)
│   ├── geo-optimization.ts   # Geographic optimization
│   ├── utils.ts              # General utilities (cn helper)
│   │
│   └── faqs/                 # FAQ data by page (18 files)
│       ├── home-faqs.ts
│       ├── insurers-tpas-faqs.ts
│       ├── insuretech-faqs.ts
│       ├── brokers-corporate-wellness-faqs.ts
│       └── ... (18 total)
│
├── hooks/                    # Custom React hooks
│   ├── use-mobile.tsx        # Mobile device detection
│   ├── use-toast.ts          # Toast notifications
│   └── usePerformanceOptimization.ts # Performance hooks
│
└── assets/                   # Static assets
    ├── ai-intelligence-3d.jpg
    ├── financials-3d.jpg
    ├── network-3d.jpg
    └── operations-3d.jpg
```

### `/public` - Static Assets

```
public/
├── robots.txt                # Crawler rules (2 KB)
├── sitemap.xml               # Site structure (15 KB)
├── humans.txt                # Team info (1 KB)
├── security.txt              # Security policy (2 KB)
├── manifest.json             # PWA config (2 KB)
├── favicon.png               # App icon (5 KB)
├── india-map.png             # Map background
│
├── .well-known/              # Standard URI directory
│   ├── security.txt          # RFC 9116 compliant
│   ├── change-password       # Password reset redirect
│   └── README.md             # Well-known documentation
│
└── lovable-uploads/          # Uploaded assets
    └── 97d6ae42-...png       # OG image
```

### Documentation Files (Root)

```
/
├── README.md                 # Project overview
├── PRODUCTION_CHECKLIST.md   # Launch checklist
├── SEO_AEO_IMPLEMENTATION_COMPLETE.md # SEO audit
├── DESIGN_SYSTEM_DOCUMENTATION.md # This file
├── CODEBASE_STRUCTURE.md     # Codebase overview
├── INDEX_OF_FILES.md         # File index
└── ... (other summary docs)
```

---

## 🎯 Key Architectural Decisions

### 1. Lazy Loading
**Decision:** All routes are lazy-loaded  
**Rationale:** Reduces initial bundle size from ~500KB to ~150KB  
**Implementation:** `React.lazy()` with `<Suspense>`

### 2. Design Tokens
**Decision:** CSS variables for all colors (HSL format)  
**Rationale:** Theme switching, consistency, maintainability  
**Implementation:** `index.css` with Tailwind extension

### 3. Component Library
**Decision:** Shadcn UI + Custom design system  
**Rationale:** Customizable, accessible, well-maintained  
**Implementation:** 40+ shadcn components + 7 custom design components

### 4. SEO Optimization
**Decision:** Server-side meta tags + structured data  
**Rationale:** Search engine visibility, AI crawler support  
**Implementation:** `SEOHead` component + JSON-LD schemas

### 5. State Management
**Decision:** React Query for server state, useState for local  
**Rationale:** Simple, performant, handles caching  
**Implementation:** QueryClient with 5min cache

---

## 🔧 Development Workflow

### Adding a New Page

1. **Create page file**
   ```tsx
   src/pages/NewPage.tsx
   ```

2. **Use PageTemplate**
   ```tsx
   import PageTemplate from '@/components/PageTemplate';
   
   const NewPage = () => (
     <PageTemplate title="..." description="..." canonical="...">
       <YourContent />
     </PageTemplate>
   );
   ```

3. **Add to router**
   ```tsx
   // src/App.tsx
   const NewPage = lazy(() => import('./pages/NewPage'));
   
   <Route path="/new-page" element={<NewPage />} />
   ```

4. **Add to sitemap**
   ```xml
   <!-- public/sitemap.xml -->
   <url>
     <loc>https://labstack.in/new-page</loc>
     <lastmod>2025-01-24</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

5. **Add internal links**
   - Update Header navigation (if needed)
   - Add related blog links
   - Update breadcrumbs

### Adding a New Blog Post

1. **Create blog file**
   ```tsx
   src/pages/resources/blog/NewBlogPost.tsx
   ```

2. **Use PageTemplate with Article Schema**
   ```tsx
   const articleSchema = generateArticleSchema({
     title: "Blog Title",
     description: "Description",
     author: "Labstack Team",
     datePublished: "2025-MM-DD",
     url: "https://labstack.in/resources/blog/slug"
   });
   ```

3. **Add FAQ Schema**
   ```tsx
   const faqSchema = generateFAQSchema(faqs);
   const structuredData = [articleSchema, faqSchema];
   ```

4. **Add to router**
   ```tsx
   const NewBlogPost = lazy(() => import('./pages/resources/blog/NewBlogPost'));
   
   <Route path="/resources/blog/slug" element={<NewBlogPost />} />
   ```

5. **Add to blog listing**
   ```tsx
   // src/components/RelatedBlogs.tsx
   // src/pages/resources/BlogWithCategories.tsx
   {
     title: "Blog Title",
     excerpt: "Brief description",
     category: "Category",
     readTime: "10 min read",
     date: "Mon DD, 2025",
     link: "slug"
   }
   ```

6. **Add to sitemap**
   ```xml
   <url>
     <loc>https://labstack.in/resources/blog/slug</loc>
     <lastmod>2025-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

---

## 🎨 Styling Guidelines

### DO ✅

```tsx
// Use semantic tokens
<div className="bg-primary text-primary-foreground">

// Use design system utilities
<div className="card-gradient card-hover">

// Use responsive modifiers
<h1 className="text-3xl md:text-4xl lg:text-6xl">

// Use semantic spacing
<section className="py-12 lg:py-20">

// Use theme-aware colors
<div className="text-foreground bg-background">
```

### DON'T ❌

```tsx
// NO hardcoded colors
<div className="bg-blue-500 text-white">           // ❌

// NO hex/rgb colors
<div style={{ backgroundColor: '#0EA5E9' }}>      // ❌

// NO fixed pixel spacing
<div style={{ padding: '20px' }}>                 // ❌

// NO inline styles (except dynamic positioning)
<div style={{ color: 'red' }}>                    // ❌
```

---

## 🧩 Component Patterns

### Standard Page Pattern

```tsx
import PageTemplate from '@/components/PageTemplate';
import SEOHead from '@/components/SEOHead';
import TLDR from '@/components/design-system/TLDR';
import { generateArticleSchema } from '@/lib/structured-data';

const PageName = () => {
  // Generate structured data
  const schema = generateArticleSchema({...});
  
  return (
    <PageTemplate
      title="Page Title | Labstack"
      description="Meta description"
      keywords="keywords"
      canonical="https://labstack.in/page"
      structuredData={schema}
    >
      {/* Hidden AI summary */}
      <div className="sr-only" aria-hidden="true">
        <TLDR summary="..." keyPoints={[...]} />
      </div>

      {/* Main content */}
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Content */}
          </div>
        </section>
      </main>
    </PageTemplate>
  );
};

export default PageName;
```

### Feature Section Pattern

```tsx
<section className="py-12 lg:py-16 bg-gradient-hero">
  <div className="container mx-auto px-6">
    <SectionHeader
      badge="PLATFORM"
      title="Section Title"
      description="Description"
      centered
    />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
</section>
```

---

## 📊 Data Management

### Consistent Data Constants

```tsx
// src/lib/consistent-data.ts
export const COVERAGE_DATA = {
  pincodes: '9,000+',
  serviceCenters: '2,600+',
  partners: '5,000+',
  pharmacyCoverage: '15,000+',
  ordersPerMonth: '30,000+',
  launchTime: '14 days'
};

// Usage
import { COVERAGE_DATA } from '@/lib/consistent-data';

<p>{COVERAGE_DATA.pincodes} pincodes covered</p>
```

### FAQ Data Pattern

```tsx
// src/lib/faqs/page-name-faqs.ts
export const pageNameFAQs = [
  {
    question: "Question text?",
    answer: "Detailed answer with data and context."
  },
  // ... more FAQs
];

// Usage
import { pageNameFAQs } from '@/lib/faqs/page-name-faqs';
import { generateFAQSchema } from '@/lib/structured-data';

const schema = generateFAQSchema(pageNameFAQs);
```

---

## 🔍 SEO Implementation

### Every Page Includes:

1. **PageTemplate wrapper** (header, footer, SEO)
2. **SEOHead** with title, description, keywords
3. **Structured Data** (JSON-LD schemas)
4. **Hidden TLDR** for AI crawlers
5. **Breadcrumbs** (except homepage)
6. **Semantic HTML5** tags
7. **Alt text** on all images
8. **Internal links** to related content

### Structured Data Types Used:

```tsx
// Organization (homepage)
generateOrganizationSchema()

// Articles (blog posts)
generateArticleSchema({
  title, description, author, datePublished, url
})

// FAQs (all pages)
generateFAQSchema(faqArray)

// Breadcrumbs (navigation)
generateBreadcrumbSchema(breadcrumbArray)

// Services (service pages)
generateServiceSchema({
  name, description, url
})

// Products (platform pages)
generateProductSchema({
  name, description, price, url
})
```

---

## 🚀 Performance Optimization

### Code Splitting
- ✅ All routes lazy-loaded
- ✅ Suspense boundaries
- ✅ Custom loader component

### Image Optimization
- ✅ LazyImage component
- ✅ Blur placeholder
- ✅ Responsive images
- ✅ WebP support (where possible)

### Bundle Size
- ✅ Initial bundle: ~150KB (gzipped)
- ✅ Largest route chunk: ~50KB
- ✅ Total assets: ~800KB (with images)
- ✅ No unused dependencies

---

## 🧪 Testing Approach

### Manual Testing

```bash
# Visual testing
1. Test light/dark mode toggle
2. Test responsive on mobile/tablet/desktop
3. Test all forms and CTAs
4. Test navigation and breadcrumbs

# SEO testing
1. Validate sitemap.xml
2. Check robots.txt accessibility
3. Test structured data (Google Rich Results Test)
4. Verify canonical URLs

# Performance testing
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Test lazy loading
4. Measure bundle sizes
```

---

## 📚 Code Comments Standards

### File Headers

```tsx
/**
 * ComponentName - Brief description
 * 
 * Detailed explanation of component purpose and usage.
 * 
 * @component
 * @example
 * <ComponentName prop1="value" prop2={true} />
 * 
 * @version 1.0.0
 * @since 2025-01-24
 */
```

### Function Comments

```tsx
/**
 * Function description
 * 
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 * 
 * @example
 * functionName(arg1, arg2);
 */
```

### Section Comments

```tsx
{/* ===== Section Name ===== */}
{/* Detailed explanation of section purpose */}

<section>
  {/* Component explanation */}
  <Component />
</section>
```

---

## 🔐 Security Considerations

### Input Validation
- ✅ All form inputs validated
- ✅ Zod schemas for type safety
- ✅ Sanitized user input

### Authentication
- ✅ Login page prepared
- ✅ Protected routes structure
- ✅ Session management ready

### Data Protection
- ✅ No sensitive data in frontend
- ✅ Environment variables for secrets
- ✅ HTTPS enforced (via deployment)

---

## 📱 Progressive Web App (PWA)

### Features Enabled
- ✅ Web App Manifest
- ✅ App icons (192px, 512px)
- ✅ Theme colors
- ✅ Standalone mode
- ✅ App shortcuts
- ✅ Add to home screen

### Installation Flow
1. User visits site on mobile
2. Browser prompts "Add to Home Screen"
3. Icon appears on home screen
4. App opens in standalone mode
5. Shortcuts available (Demo, Platform, Blog)

---

## 🌍 Geographic Coverage

### India Map Visualization
- **Total cities:** 67 real Indian cities
- **Progressive loading:** 6 → 20 → 42 → 67 based on zoom
- **Service indicators:** Home, Center, Pharmacy, Consult
- **Interactive:** Hover tooltips, zoom controls

### Data Points
- 9,000+ pincodes covered
- 2,600+ active service centers
- 5,000+ active partners
- 15,000+ pharmacy pincodes
- Metros to Tier-3 coverage

---

## 📈 Blog Content Strategy

### Categories (6 total)
1. **Insurers** - 4 blogs
2. **InsureTech** - 2 blogs
3. **Brokers** - 4 blogs
4. **Disease Management** - 4 blogs
5. **Digital Health** - 4 blogs
6. **Providers** - 4 blogs

### Publishing Schedule
- **Total blogs:** 22 published
- **Time span:** Jan-Oct 2025
- **Frequency:** 2+ blogs per month
- **Format:** Long-form (8-12 min read)
- **SEO:** All have Article Schema + FAQ Schema

---

## 🛠️ Build & Deploy

### Development
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (port 5173)
```

### Production Build
```bash
npm run build      # Build for production
npm run preview    # Preview production build
```

### Deployment Checklist
- [ ] Run `npm run build`
- [ ] Test build locally
- [ ] Verify all routes work
- [ ] Check console for errors
- [ ] Test on mobile device
- [ ] Run Lighthouse audit
- [ ] Deploy to hosting
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Submit sitemap to Google
- [ ] Submit sitemap to Bing

---

## 📞 Contact & Support

**General Inquiries:**
- Email: contact@labstack.in
- Website: https://labstack.in

**Technical Questions:**
- Email: contact@labstack.in
- Documentation: See README files

**Security Issues:**
- Email: contact@labstack.in (Subject: Security Vulnerability Report)
- See: public/security.txt

**Careers:**
- Website: https://labstack.in/careers

---

## ✅ Production Readiness

### Code Quality
- [x] TypeScript strict mode
- [x] ESLint configured
- [x] All imports resolved
- [x] No console errors
- [x] No TypeScript errors
- [x] Fully commented code

### Performance
- [x] Lazy loading enabled
- [x] Images optimized
- [x] Fonts preloaded
- [x] Code split by route
- [x] Bundle size optimized

### SEO
- [x] All meta tags
- [x] Structured data
- [x] Sitemap complete
- [x] Robots.txt configured
- [x] Canonical URLs
- [x] Internal linking

### Security
- [x] Security.txt published
- [x] Vulnerability reporting
- [x] Input validation
- [x] No exposed secrets
- [x] HTTPS ready

### PWA
- [x] Manifest.json
- [x] App icons
- [x] Theme colors
- [x] Shortcuts
- [x] Installable

---

## 📖 Additional Documentation

- **Design System:** `DESIGN_SYSTEM_DOCUMENTATION.md` (this file)
- **Component Docs:** `src/components/design-system/README.md`
- **Production Checklist:** `PRODUCTION_CHECKLIST.md`
- **SEO Audit:** `SEO_AEO_IMPLEMENTATION_COMPLETE.md`
- **File Index:** `INDEX_OF_FILES.md`

---

**Version:** 1.0.0  
**Last Updated:** January 24, 2025  
**Status:** ✅ Production Ready  

**Built with ❤️ by the Labstack Team**  
*Making healthcare infrastructure invisible so innovation can thrive.*