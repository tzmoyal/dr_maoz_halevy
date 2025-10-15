import React, { useEffect } from 'react';

const AccessibilityChecker = () => {
  useEffect(() => {
    // Add accessibility testing utilities
    const checkAccessibility = () => {
      // Check for missing alt attributes
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt && !img.getAttribute('aria-hidden')) {
          console.warn('Image missing alt attribute:', img.src);
        }
      });

      // Check for missing form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledBy = input.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledBy && !input.getAttribute('aria-hidden')) {
          console.warn('Form control missing accessible name:', input);
        }
      });

      // Check heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > lastLevel + 1) {
          console.warn('Heading hierarchy skip detected:', heading);
        }
        lastLevel = level;
      });

      // Check for sufficient color contrast (basic check)
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        
        // Basic contrast check (simplified)
        if (color && backgroundColor && color !== backgroundColor) {
          // This is a simplified check - in production, use a proper contrast checker
          console.log('Color contrast check needed for:', el);
        }
      });
    };

    // Run checks after component mount
    setTimeout(checkAccessibility, 1000);

    // Add keyboard navigation helpers
    const handleKeyDown = (e) => {
      // Skip to main content with Alt+M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView();
        }
      }
      
      // Skip to navigation with Alt+N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          nav.focus();
          nav.scrollIntoView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityChecker;
