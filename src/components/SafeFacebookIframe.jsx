import React, { useState, useRef, useEffect } from 'react';

const SafeFacebookIframe = ({ src, title, ariaLabel, width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Add error boundary for Facebook iframe
    const handleError = (event) => {
      // Only handle errors from our iframe
      if (event.target === iframeRef.current) {
        console.warn('Facebook iframe error:', event);
        setHasError(true);
      }
    };

    // Add global error handler for Facebook scripts
    const handleGlobalError = (event) => {
      if (event.message && event.message.includes('Cannot listen to an undefined element')) {
        console.warn('Facebook script error caught:', event.message);
        // Don't set hasError to true as this is a Facebook internal error
        // that doesn't affect the iframe functionality
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('error', handleGlobalError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('error', handleGlobalError);
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log('Facebook iframe loaded successfully');
  };

  const handleError = (e) => {
    console.warn('Facebook iframe failed to load:', e);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white/70 backdrop-blur p-8 text-center">
        <p className="text-gray-600">
          {ariaLabel || 'Video content temporarily unavailable'}
        </p>
        <a 
          href="https://www.facebook.com/reel/997492598398317" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Video on Facebook
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white/70 backdrop-blur">
      {!isLoaded && (
        <div className="flex items-center justify-center h-96 bg-gray-100">
          <div className="text-gray-600">Loading video...</div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        width={width}
        height={height}
        style={{ border: 'none', overflow: 'hidden', display: isLoaded ? 'block' : 'none' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={title}
        aria-label={ariaLabel}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default SafeFacebookIframe;
