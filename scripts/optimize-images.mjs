#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');
const OPTIMIZED_DIR = path.join(ASSETS_DIR, 'opt');
const ORIGINALS_DIR = path.join(ASSETS_DIR, 'originals');

// Ensure directories exist
async function ensureDir(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

const IMAGES_TO_OPTIMIZE = [
  {
    name: 'logo',
    original: 'logo.png',
    sizes: [
      { width: 43, height: 64, suffix: '@1x' },
      { width: 86, height: 128, suffix: '@2x' },
    ],
    transparent: true,
  },
  {
    name: 'hero-image',
    original: 'hero-image.jpg',
    sizes: [
      { width: 400, suffix: '-400' },
      { width: 800, suffix: '-800' },
      { width: 1200, suffix: '-1200' },
    ],
    transparent: false,
  },
];

async function optimizeImage(
  inputPath,
  name,
  width,
  height,
  suffix,
  transparent
) {
  const metadata = await sharp(inputPath).metadata();

  // Calculate height if not provided (maintain aspect ratio)
  const targetHeight = height || Math.round((width * (metadata.height || 1)) / (metadata.width || 1));
  
  console.log(`   📐 Generating ${width}x${targetHeight} variants...`);

  // Create sharp instance
  let sharpInstance = sharp(inputPath)
    .resize(width, targetHeight, {
      fit: 'cover',
      position: 'center',
    })
    .withMetadata(false); // Remove metadata

  // Generate WebP
  const webpPath = path.join(OPTIMIZED_DIR, `${name}${suffix}.webp`);
  await sharpInstance
    .webp({ 
      quality: transparent ? 100 : 80, // Lossless for transparent, quality 80 for photos
      effort: 6,
      smartSubsample: true,
    })
    .toFile(webpPath);
  console.log(`      ✅ WebP: ${((await fs.promises.stat(webpPath)).size / 1024).toFixed(1)} KiB`);

  // Generate AVIF
  const avifPath = path.join(OPTIMIZED_DIR, `${name}${suffix}.avif`);
  await sharpInstance
    .avif({ 
      quality: transparent ? 100 : 30, // Lossless for transparent, quality 30 for photos
      effort: 9,
    })
    .toFile(avifPath);
  console.log(`      ✅ AVIF: ${((await fs.promises.stat(avifPath)).size / 1024).toFixed(1)} KiB`);

  // If transparent, also generate optimized PNG fallback
  if (transparent) {
    const pngPath = path.join(OPTIMIZED_DIR, `${name}${suffix}.png`);
    await sharpInstance
      .png({ 
        compressionLevel: 9,
        adaptiveFiltering: true,
      })
      .toFile(pngPath);
    console.log(`      ✅ PNG: ${((await fs.promises.stat(pngPath)).size / 1024).toFixed(1)} KiB`);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');

  await ensureDir(OPTIMIZED_DIR);
  await ensureDir(ORIGINALS_DIR);

  let totalOptimizedSize = 0;
  let generatedFilesCount = 0;

  for (const image of IMAGES_TO_OPTIMIZE) {
    const originalImagePath = path.join(ASSETS_DIR, image.original);
    const preservedOriginalPath = path.join(ORIGINALS_DIR, image.original);

    // Move original to originals directory if it exists in assets
    try {
      await fs.promises.access(originalImagePath); // Check if original exists in assets
      await fs.promises.rename(originalImagePath, preservedOriginalPath);
      console.log(`\n📁 Preserved original: ${image.original}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // Original not in assets, check if it's already in originals
        try {
          await fs.promises.access(preservedOriginalPath);
          console.log(`\n📁 Original already in originals: ${image.original}`);
        } catch (err) {
          console.warn(`\n⚠️ Original image not found in assets or originals: ${image.original}. Skipping.`);
          continue;
        }
      } else {
        throw error; // Re-throw other errors
      }
    }

    console.log(`\n🖼️  Processing ${image.name}:`);
    const originalMetadata = await sharp(preservedOriginalPath).metadata();
    console.log(`   Original: ${originalMetadata.width}x${originalMetadata.height}, ${((await fs.promises.stat(preservedOriginalPath)).size / 1024).toFixed(1)} KiB`);

    for (const size of image.sizes) {
      await optimizeImage(
        preservedOriginalPath,
        image.name,
        size.width,
        size.height,
        size.suffix,
        image.transparent
      );
      generatedFilesCount += (image.transparent ? 3 : 2); // WebP, AVIF, (PNG)
    }
  }

  // Calculate total size of optimized images
  const optimizedFiles = await fs.promises.readdir(OPTIMIZED_DIR);
  for (const file of optimizedFiles) {
    const filePath = path.join(OPTIMIZED_DIR, file);
    totalOptimizedSize += (await fs.promises.stat(filePath)).size;
  }

  console.log('\n✨ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${OPTIMIZED_DIR}`);
  console.log(`📁 Originals preserved in: ${ORIGINALS_DIR}`);
  console.log(`\n📊 Summary:`);
  console.log(`   Generated ${generatedFilesCount} optimized files`);
  console.log(`   Total size: ${(totalOptimizedSize / 1024).toFixed(1)} KiB`);
  
  // Check if we meet the size requirements
  const heroFiles = optimizedFiles.filter(f => f.includes('hero-image-1200'));
  const logoFiles = optimizedFiles.filter(f => f.includes('logo@2x'));
  
  let heroLargest = 0;
  let logoLargest = 0;
  
  for (const file of heroFiles) {
    const size = (await fs.promises.stat(path.join(OPTIMIZED_DIR, file))).size;
    heroLargest = Math.max(heroLargest, size);
  }
  
  for (const file of logoFiles) {
    const size = (await fs.promises.stat(path.join(OPTIMIZED_DIR, file))).size;
    logoLargest = Math.max(logoLargest, size);
  }
  
  console.log(`\n🎯 Size targets:`);
  console.log(`   Hero largest source: ${(heroLargest / 1024).toFixed(1)} KiB (target: ≤40 KiB)`);
  console.log(`   Logo largest source: ${(logoLargest / 1024).toFixed(1)} KiB (target: ≤20 KiB)`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
