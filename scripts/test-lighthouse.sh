#!/bin/bash

# Lighthouse Performance Testing Script
# Run this after implementing image optimizations to verify improvements

echo "🚀 Running Lighthouse performance audit..."
echo "This will test the optimized images and measure performance improvements."
echo ""

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo "❌ Lighthouse not found. Installing..."
    npm install -g lighthouse
fi

# Start the preview server in background
echo "📡 Starting preview server..."
npm run preview &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Run Lighthouse audit
echo "🔍 Running Lighthouse audit..."
lighthouse http://localhost:4173 \
    --output=html \
    --output-path=./lighthouse-report.html \
    --chrome-flags="--headless" \
    --only-categories=performance,accessibility,best-practices,seo

# Stop the preview server
echo "🛑 Stopping preview server..."
kill $SERVER_PID

echo ""
echo "✅ Lighthouse audit complete!"
echo "📊 Report saved to: ./lighthouse-report.html"
echo ""
echo "Key metrics to check:"
echo "  - Performance Score (should be >90)"
echo "  - Largest Contentful Paint (LCP) - should be <2.5s"
echo "  - First Contentful Paint (FCP) - should be <1.8s"
echo "  - Cumulative Layout Shift (CLS) - should be <0.1"
echo ""
echo "Image optimization benefits:"
echo "  - 'Serve images in next-gen formats' should pass"
echo "  - 'Properly size images' should pass"
echo "  - 'Efficiently encode images' should pass"
