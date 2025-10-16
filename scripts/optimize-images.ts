#!/usr/bin/env ts-node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const OPTIMIZED_DIR = path.join(ASSETS_DIR, 'optimized');
const ORIGINALS_DIR = path.join(ASSETS_DIR, 'originals');

// Ensure directories exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}
if (!fs.existsSync(ORIGINALS_DIR)) {
  fs.mkdirSync(ORIGINALS_DIR, { recursive: true });
}

interface ImageConfig {
  name: string;
  inputPath: string;
  variants: Array<{
    suffix: string;
    width: number;
    height?: number;
    quality?: { webp: number; avif: number };
  }>;
}

const imageConfigs: ImageConfig[] = [
  {
    name: 'logo',
    inputPath: path.join(ASSETS_DIR, 'logo.png'),
    variants: [
      { suffix: '@1x', width: 43, height: 64 },
      { suffix: '@2x', width: 86, height: 128 },
    ],
  },
  {
    name: 'hero-image',
    inputPath: path.join(ASSETS_DIR, 'hero-image.jpg'),
    variants: [
      { suffix: '-400', width: 400 },
      { suffix: '-800', width: 800 },
      { suffix: '-1200', width: 1200 },
    ],
  },
];

async function optimizeImage(config: ImageConfig): Promise<void> {
  const { name, inputPath, variants } = config;
  
  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Input file not found: ${inputPath}`);
    return;
  }

  // Copy original to originals folder
  const originalDest = path.join(ORIGINALS_DIR, path.basename(inputPath));
  if (!fs.existsSync(originalDest)) {
    fs.copyFileSync(inputPath, originalDest);
    console.log(`📁 Preserved original: ${path.basename(inputPath)}`);
  }

  // Get image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`\n🖼️  Processing ${name}:`);
  console.log(`   Original: ${metadata.width}x${metadata.height}, ${Math.round((fs.statSync(inputPath).size / 1024) * 10) / 10} KiB`);

  for (const variant of variants) {
    const { suffix, width, height, quality = { webp: 80, avif: 30 } } = variant;
    
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
        quality: quality.webp,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(webpPath);
    
    const webpSize = Math.round((fs.statSync(webpPath).size / 1024) * 10) / 10;
    console.log(`      ✅ WebP: ${webpSize} KiB`);

    // Generate AVIF
    const avifPath = path.join(OPTIMIZED_DIR, `${name}${suffix}.avif`);
    await sharpInstance
      .avif({ 
        quality: quality.avif,
        effort: 9,
      })
      .toFile(avifPath);
    
    const avifSize = Math.round((fs.statSync(avifPath).size / 1024) * 10) / 10;
    console.log(`      ✅ AVIF: ${avifSize} KiB`);

    // For logo, also generate optimized PNG fallback
    if (name === 'logo') {
      const pngPath = path.join(OPTIMIZED_DIR, `${name}${suffix}.png`);
      await sharpInstance
        .png({ 
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(pngPath);
      
      const pngSize = Math.round((fs.statSync(pngPath).size / 1024) * 10) / 10;
      console.log(`      ✅ PNG: ${pngSize} KiB`);
    }
  }
}

async function main(): Promise<void> {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    for (const config of imageConfigs) {
      await optimizeImage(config);
    }
    
    console.log('\n✨ Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${OPTIMIZED_DIR}`);
    console.log(`📁 Originals preserved in: ${ORIGINALS_DIR}`);
    
    // Show summary
    console.log('\n📊 Summary:');
    const optimizedFiles = fs.readdirSync(OPTIMIZED_DIR);
    const totalSize = optimizedFiles.reduce((sum, file) => {
      return sum + fs.statSync(path.join(OPTIMIZED_DIR, file)).size;
    }, 0);
    
    console.log(`   Generated ${optimizedFiles.length} optimized files`);
    console.log(`   Total size: ${Math.round((totalSize / 1024) * 10) / 10} KiB`);
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
