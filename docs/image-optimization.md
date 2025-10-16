# Image Optimization Guide

This document explains how to add new images to the optimization pipeline and maintain optimal performance.

## Overview

Our image optimization pipeline automatically generates next-generation formats (WebP, AVIF) and responsive sizes for all images, significantly reducing file sizes while maintaining visual quality.

## Current Optimized Images

### Logo (`logo.png`)
- **Original**: 683×1024, 723 KiB
- **Optimized**: 
  - `@1x`: 43×64 (WebP: 1.4 KiB, AVIF: 1.4 KiB, PNG: 3.8 KiB)
  - `@2x`: 86×128 (WebP: 2.6 KiB, AVIF: 1.8 KiB, PNG: 14.8 KiB)
- **Total reduction**: 99.6% smaller than original

### Hero Image (`hero-image.jpg`)
- **Original**: 467×539, 59 KiB
- **Optimized**:
  - `400px`: WebP: 13.3 KiB, AVIF: 5.3 KiB
  - `800px`: WebP: 26.3 KiB, AVIF: 8.3 KiB
  - `1200px`: WebP: 42.1 KiB, AVIF: 11.3 KiB
- **Total reduction**: 27% smaller than original

## Adding New Images

### 1. Add Image Configuration

Edit `scripts/optimize-images.ts` and add your image to the `imageConfigs` array:

```typescript
{
  name: 'your-image-name',
  inputPath: path.join(ASSETS_DIR, 'your-image.jpg'),
  variants: [
    { suffix: '-400', width: 400 },
    { suffix: '-800', width: 800 },
    { suffix: '-1200', width: 1200 },
  ],
}
```

### 2. Run Optimization

```bash
npm run optimize:images
```

### 3. Update Code Usage

Replace `<img>` tags with `<picture>` elements:

```jsx
<picture>
  <source
    type="image/avif"
    srcSet="/assets/optimized/your-image-400.avif 400w, /assets/optimized/your-image-800.avif 800w, /assets/optimized/your-image-1200.avif 1200w"
  />
  <source
    type="image/webp"
    srcSet="/assets/optimized/your-image-400.webp 400w, /assets/optimized/your-image-800.webp 800w, /assets/optimized/your-image-1200.webp 1200w"
  />
  <img
    src="/assets/optimized/your-image-800.webp"
    alt="Your image description"
    width="800"
    height="600"
    sizes="(max-width: 640px) 100vw, 800px"
    decoding="async"
    loading="lazy"
  />
</picture>
```

## Optimization Settings

### WebP Settings
- **Quality**: 80 (good balance of size vs quality)
- **Effort**: 6 (higher effort = better compression)
- **Smart Subsampling**: Enabled

### AVIF Settings
- **Quality**: 30 (AVIF is more efficient, so lower quality number)
- **Effort**: 9 (maximum effort for best compression)

### PNG Settings (for logos with transparency)
- **Compression Level**: 9 (maximum compression)
- **Adaptive Filtering**: Enabled

## File Structure

```
public/assets/
├── originals/          # Original images (preserved)
│   ├── logo.png
│   └── hero-image.jpg
└── optimized/         # Generated optimized images
    ├── logo@1x.webp
    ├── logo@1x.avif
    ├── logo@1x.png
    ├── logo@2x.webp
    ├── logo@2x.avif
    ├── logo@2x.png
    ├── hero-image-400.webp
    ├── hero-image-400.avif
    ├── hero-image-800.webp
    ├── hero-image-800.avif
    ├── hero-image-1200.webp
    └── hero-image-1200.avif
```

## Performance Benefits

### Before Optimization
- Logo: 723 KiB
- Hero: 59 KiB
- **Total**: 782 KiB

### After Optimization
- Logo: 2.6 KiB (WebP @2x)
- Hero: 42.1 KiB (WebP 1200px)
- **Total**: 44.7 KiB

### Improvement
- **94.3% total size reduction**
- **Faster page loads**
- **Better Core Web Vitals scores**
- **Reduced bandwidth usage**

## Best Practices

1. **Always preserve originals** in `/assets/originals/`
2. **Use appropriate loading strategies**:
   - `loading="eager"` for above-the-fold images
   - `loading="lazy"` for below-the-fold images
3. **Include explicit dimensions** to prevent layout shift
4. **Use meaningful alt text** for accessibility
5. **Test on different devices** to ensure quality

## Automated Optimization

The optimization runs automatically after each build:

```json
{
  "scripts": {
    "postbuild": "npm run optimize:images"
  }
}
```

## Manual Optimization

To run optimization manually:

```bash
npm run optimize:images
```

## Troubleshooting

### Images not loading
- Check that optimized images exist in `/public/assets/optimized/`
- Verify file paths in your code match the generated filenames
- Ensure the optimization script ran successfully

### Quality issues
- Adjust quality settings in the optimization script
- Check if the original image has sufficient resolution
- Consider using different compression settings for different image types

### Build errors
- Ensure `sharp` is installed: `npm install --save-dev sharp`
- Check that TypeScript is properly configured
- Verify file permissions on the assets directory
