import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" id="main">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'he' ? 'הדף לא נמצא' : 'Page Not Found'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === 'he' 
              ? 'מצטערים, הדף שחיפשת לא קיים. בדוק את הכתובת או חזור לעמוד הראשי.'
              : "Sorry, the page you're looking for doesn't exist. Check the URL or return to the homepage."
            }
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              {language === 'he' ? 'חזרה לעמוד הראשי' : 'Back to Home'}
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link to="/Services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'he' ? 'צפה בשירותים' : 'View Services'}
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            {language === 'he' 
              ? 'אם אתה חושב שזו שגיאה, אנא צור איתנו קשר:'
              : 'If you think this is an error, please contact us:'
            }
          </p>
          <div className="mt-2 space-y-1">
            <p>
              <a href="tel:035496949" className="text-blue-600 hover:underline">
                03-5496949
              </a>
            </p>
            <p>
              <a href="mailto:office@stroke-il.com" className="text-blue-600 hover:underline">
                office@stroke-il.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Structured Data for 404 Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": language === 'he' ? 'דף לא נמצא - 404' : 'Page Not Found - 404',
            "description": language === 'he' 
              ? 'הדף שחיפשת לא נמצא. חזור לעמוד הראשי או צפה בשירותים שלנו.'
              : "The page you're looking for doesn't exist. Return to homepage or view our services.",
            "url": window.location.href,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Dr. Eyal Maoz Halevy - Neurologist & Headache Specialist",
              "url": "https://dr-maoz-halevy.vercel.app"
            }
          })
        }}
      />
    </div>
  );
};

export default NotFound;
