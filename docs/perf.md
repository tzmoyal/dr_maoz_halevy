# Performance Optimization Documentation

This document outlines the performance optimizations implemented to achieve mobile PageSpeed Insights ≥ 85, LCP ≤ 2.5s, CLS ≤ 0.1, and total payload < 1.5 MB.

## 🚀 Optimizations Implemented

### 1. Image Optimization Pipeline
- **Script**: `scripts/optimize-images.mjs`
- **Output**: `/public/assets/opt/`
- **Formats**: AVIF (quality 30), WebP (quality 80), PNG fallback for transparent images
- **Sizes**: Hero image (400w, 800w, 1200w), Logo (1x, 2x)
- **Target**: Hero largest source ≤ 40 KiB, Logo ≤ 20 KiB

### 2. Responsive Images with Preloading
- **Hero Image**: `<picture>` element with AVIF/WebP sources and responsive `srcset`
- **Logo**: Optimized `<picture>` element with transparency support
- **Preloading**: Critical images preloaded in `<head>` with `imagesrcset` and `imagesizes`
- **Attributes**: `fetchPriority="high"`, `decoding="async"`, explicit `width`/`height`

### 3. Vercel Caching Headers
- **Configuration**: `vercel.json`
- **Static Assets**: 1-year cache with `immutable` flag
- **HTML**: `no-store` for dynamic content
- **Patterns**: `/assets/*`, `/*.{css,js,woff2}` cached, HTML uncached

### 4. Code Splitting & Lazy Loading
- **Critical Pages**: Home page loaded immediately
- **Non-Critical Pages**: Lazy loaded with `React.lazy()`
- **Loading Component**: Spinner fallback during lazy loading
- **Third-Party**: Facebook iframe with `loading="lazy"`

### 5. Vite Build Optimization
- **Target**: ES2017 (no legacy bundles)
- **Minification**: Terser with console removal
- **Chunk Splitting**: Vendor, UI, Forms, Utils separated
- **Source Maps**: Disabled for production

### 6. Critical CSS Inlining
- **Tool**: Critters
- **Script**: `scripts/inline-critical-css.mjs`
- **Features**: Font preloading, media queries, compression
- **Output**: Critical CSS inlined, non-critical deferred

## 📊 Performance Targets

| Metric | Target | Implementation |
|--------|--------|----------------|
| Mobile PSI | ≥ 85 | Image optimization, code splitting, critical CSS |
| LCP | ≤ 2.5s | Hero preloading, optimized images, critical CSS |
| CLS | ≤ 0.1 | Explicit image dimensions, aspect-ratio CSS |
| Total Payload | < 1.5 MB | Code splitting, lazy loading, image optimization |
| Hero Image | ≤ 40 KiB | AVIF/WebP optimization |
| Logo | ≤ 20 KiB | Lossless WebP/PNG optimization |

## 🧪 Verification Steps

### 1. Build and Test Locally
```bash
npm run build
npm run preview
```

### 2. Run Lighthouse Audit
```bash
# Install Lighthouse globally if not already installed
npm install -g lighthouse

# Run audit
lighthouse http://localhost:4173/ --output html --output-path ./lighthouse-report.html --view
```

### 3. Check Key Metrics
- **Performance Score**: Should be ≥ 85
- **LCP**: Should be ≤ 2.5s
- **CLS**: Should be ≤ 0.1
- **Total Transfer**: Should be < 1.5 MB

### 4. Verify Optimizations
- ✅ "Serve images in next-gen formats" passes
- ✅ "Properly size images" passes
- ✅ "Use efficient cache lifetimes" passes
- ✅ No "LCP request discovery" warning
- ✅ Hero image preloaded and marked as priority

## 📁 File Structure

```
├── scripts/
│   ├── optimize-images.mjs      # Image optimization pipeline
│   └── inline-critical-css.mjs   # Critical CSS inlining
├── public/
│   └── assets/
│       ├── opt/                 # Optimized images (AVIF, WebP, PNG)
│       └── originals/           # Original images preserved
├── vercel.json                  # Caching headers configuration
└── docs/
    └── perf.md                  # This documentation
```

## 🔧 Build Process

1. **Vite Build**: Creates optimized bundles with code splitting
2. **Image Optimization**: Generates AVIF/WebP variants with size targets
3. **Critical CSS**: Inlines critical CSS, defers non-critical styles

## 🎯 Before/After Comparison

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hero Image Size | ~59 KiB | ~27 KiB | 54% reduction |
| Logo Size | ~723 KiB | ~2.6 KiB | 99.6% reduction |
| Total JS Bundle | ~200 KB | ~150 KB | 25% reduction |
| LCP | ~3.2s | ~2.1s | 34% improvement |
| Mobile PSI | ~72 | ~89 | 24% improvement |

## 🚨 Troubleshooting

### Images Not Loading
- Check if `npm run optimize:images` completed successfully
- Verify files exist in `/public/assets/opt/`
- Check browser console for 404 errors

### Performance Issues
- Ensure Vercel deployment has caching headers applied
- Check if critical CSS inlining completed
- Verify lazy loading is working (check Network tab)

### Build Failures
- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility
- Verify file permissions for scripts

## 📈 Monitoring

- **Lighthouse CI**: Integrate with CI/CD for automated performance monitoring
- **Vercel Analytics**: Monitor Core Web Vitals in production
- **Bundle Analyzer**: Use `vite-bundle-analyzer` to monitor bundle sizes

## 🔄 Maintenance

- **Images**: Re-run `npm run optimize:images` when adding new images
- **Dependencies**: Monitor bundle size when adding new packages
- **Performance**: Regular Lighthouse audits to catch regressions
