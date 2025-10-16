#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import Critters from 'critters';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');

async function inlineCriticalCSS() {
  console.log('🎨 Inlining critical CSS...');
  
  try {
    const html = readFileSync(indexPath, 'utf8');
    
    const critters = new Critters({
      path: distDir,
      external: true,
      inlineThreshold: 0,
      minimumExternalSize: 0,
      pruneSource: false,
      mergeStylesheets: true,
      additionalStylesheets: ['*.css'],
      preload: 'media',
      noscriptFallback: true,
      inlineFonts: true,
      preloadFonts: true,
      fonts: true,
      keyframes: 'critical',
      compress: true,
      logLevel: 'info'
    });
    
    const inlinedHtml = await critters.process(html);
    writeFileSync(indexPath, inlinedHtml);
    
    console.log('✅ Critical CSS inlined successfully!');
  } catch (error) {
    console.error('❌ Error inlining critical CSS:', error);
    process.exit(1);
  }
}

inlineCriticalCSS();
