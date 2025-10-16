

import React from 'react';
import { useLanguage, LanguageProvider } from '../components/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { createPageUrl } from '@/utils';
import Breadcrumb from '../components/Breadcrumb';

const Header = () => {
  const { t, toggleLanguage } = useLanguage();
  const location = useLocation();
  const onHomePage = location.pathname === '/' || location.pathname.toLowerCase() === '/home';

  const getLink = (path, name) => {
    if (onHomePage) {
      return <a href={path} className="text-gray-600 hover:text-blue-600 transition-colors">{name}</a>;
    }
    // Ensure navigation goes to home with an anchor (e.g., "/#contact")
    const to = path.startsWith('#') ? `/${path}` : path;
    return <Link to={to} className="text-gray-600 hover:text-blue-600 transition-colors">{name}</Link>;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm">
              <picture>
                <source srcSet="/assets/opt/logo@2x.avif" type="image/avif" />
                <source srcSet="/assets/opt/logo@2x.webp" type="image/webp" />
                <img 
                  src="/assets/opt/logo@2x.webp" 
                  alt="Dr. Eyal Maoz Halevy Logo"
                  className="w-full h-full object-contain"
                  width="86"
                  height="128"
                  decoding="async"
                  loading="eager"
                />
              </picture>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">{t.header.drName}</h1>
              <p className="text-sm text-blue-600">{t.header.specialty}</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <Link to="/Services" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.nav.services}
            </Link>
            <Link to={createPageUrl('Treatments')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.nav.treatments}
            </Link>
            <Link to="/About" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.header.nav.about}
            </Link>
            {getLink('#testimonials', t.header.nav.testimonials)}
            {getLink('#contact', t.header.nav.contact)}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80" aria-label="Mobile navigation menu">
                <nav className="flex flex-col gap-6 mt-8" role="navigation" aria-label="Mobile navigation">
                  <SheetClose asChild>
                    <Link to="/Services" className="text-gray-700 hover:text-blue-600 transition-colors">
                      {t.header.nav.services}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={createPageUrl('Treatments')} className="text-gray-700 hover:text-blue-600 transition-colors">
                      {t.header.nav.treatments}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/About" className="text-gray-700 hover:text-blue-600 transition-colors">
                      {t.header.nav.about}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    {getLink('#testimonials', t.header.nav.testimonials)}
                  </SheetClose>
                  <SheetClose asChild>
                    {getLink('#contact', t.header.nav.contact)}
                  </SheetClose>
                  <div className="border-t border-gray-200 pt-4" />
                  <SheetClose asChild>
                    <button
                      onClick={toggleLanguage}
                      className="w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-left"
                    >
                      {t.header.language}
                    </button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <button
            onClick={toggleLanguage}
            className="hidden md:inline-flex border-2 border-blue-600 text-blue-600 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-50 transition-colors"
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
        <footer className="bg-gray-900 text-white py-12" id="footer" role="contentinfo">
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
                    
                    <nav aria-label="Footer useful links">
                        <h4 className="font-bold mb-4">{t.footer.links}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/Services" className="hover:text-blue-400 transition-colors">{t.footer.services}</Link></li>
                            <li><Link to="/About" className="hover:text-blue-400 transition-colors">{t.footer.about}</Link></li>
                            <li><Link to="/#contact" className="hover:text-blue-400 transition-colors">{t.footer.contactUs}</Link></li>
                            <li><Link to="/Accessibility" className="hover:text-blue-400 transition-colors">{t.footer.accessibility}</Link></li>
                        </ul>
                    </nav>
                    
                    <div>
                        <h4 className="font-bold mb-4">{t.footer.contact}</h4>
                        <div className="space-y-2 text-gray-400">
                            <div><a href="tel:035496949" className="underline hover:text-blue-400" aria-label="Phone 03-5496949">03-5496949</a></div>
                            <div><a href="https://wa.me/972502804723" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400" aria-label="WhatsApp 050-2804723">050-2804723</a></div>
                            <div><a href="mailto:office@stroke-il.com" className="underline hover:text-purple-400" aria-label="Email office@stroke-il.com">office@stroke-il.com</a></div>
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
      <Breadcrumb />
      <main id="main" role="main" className={showHeaderAndFooter ? "pt-24" : ""}>
        {children}
      </main>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        דלג לתוכן הראשי / Skip to main content
      </a>
      <AppLayout currentPageName={currentPageName}>{children}</AppLayout>
    </LanguageProvider>
  );
}

