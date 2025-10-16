import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import '@/styles/accessibility.css'

// Global error handler for third-party scripts (like Facebook)
window.addEventListener('error', (event) => {
  // Handle Facebook iframe errors gracefully
  if (event.message && event.message.includes('Cannot listen to an undefined element')) {
    console.warn('Third-party script error (likely Facebook):', event.message);
    // Prevent the error from propagating
    event.preventDefault();
    return false;
  }
});

// Ensure DOM is ready before mounting
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error('Root element not found');
} 