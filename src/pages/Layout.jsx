

import React from 'react';
import { useLanguage, LanguageProvider } from '../components/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const Header = () => {
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();
  const onHomePage = location.pathname === createPageUrl('Home') || location.pathname === '/';

  const getLink = (path, name) => {
    if (onHomePage) {
      return <a href={path} className="text-gray-600 hover:text-blue-600 transition-colors">{name}</a>;
    }
    return <Link to={`${createPageUrl('Home')}${path}`} className="text-gray-600 hover:text-blue-600 transition-colors">{name}</Link>;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm">
              <img 
                src="/assets/logo.png" 
                alt="Dr. Eyal Maoz Halevy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">{t.header.drName}</h1>
              <p className="text-sm text-blue-600">{t.header.specialty}</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {getLink('#areas-of-care', t.header.nav.services)}
            <Link to={createPageUrl('Treatments')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.nav.treatments}
            </Link>
            {getLink('#about', t.header.nav.about)}
            {getLink('#testimonials', t.header.nav.testimonials)}
            {getLink('#contact', t.header.nav.contact)}
          </nav>
          <button
            onClick={toggleLanguage}
            className="border-2 border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            {t.header.language}
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-12" id="footer">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">{t.header.drName}</h3>
                        <p className="text-gray-400 mb-4">
                            {t.footer.p1}
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">EMH</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-4">{t.footer.links}</h4>
                        <div className="space-y-2 text-gray-400">
                            {t.footer.linkItems.map(item => <div key={item}>{item}</div>)}
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-4">{t.footer.contact}</h4>
                        <div className="space-y-2 text-gray-400">
                            <div><a href="tel:035496949" className="underline hover:text-blue-400">03-5496949</a></div>
                            <div><a href="https://wa.me/972502804723" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400">050-2804723</a></div>
                            <div><a href="mailto:office@stroke-il.com" className="underline hover:text-purple-400">office@stroke-il.com</a></div>
                            <div className="whitespace-pre-line">{t.footer.address}</div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}

const AppLayout = ({ children, currentPageName }) => {
  const { dir, lang, font } = useLanguage();
  const showHeaderAndFooter = true; // Always show header and footer
  
  return (
    <div dir={dir} lang={lang} className={font}>
      {showHeaderAndFooter && <Header />}
      <main className={showHeaderAndFooter ? "pt-24" : ""}>
        {children}
      </main>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <AppLayout currentPageName={currentPageName}>{children}</AppLayout>
    </LanguageProvider>
  );
}

