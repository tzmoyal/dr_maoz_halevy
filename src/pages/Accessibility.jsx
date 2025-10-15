import React from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function Accessibility() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'he' 
              ? 'אנו מחויבים להבטיח שהאתר שלנו נגיש לכל המשתמשים, כולל אנשים עם מוגבלויות.'
              : 'We are committed to ensuring our website is accessible to all users, including people with disabilities.'}
          </p>
        </header>

        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'תקני נגישות' : 'Accessibility Standards'}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'he' 
                ? 'האתר שלנו עומד בתקן הישראלי ת״י 5568 המאמץ את WCAG 2.0 רמה AA.'
                : 'Our website complies with Israeli Standard TI 5568 which adopts WCAG 2.0 Level AA.'}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{language === 'he' ? 'תמיכה בניווט מקלדת' : 'Keyboard navigation support'}</li>
              <li>{language === 'he' ? 'תמיכה בקוראי מסך' : 'Screen reader support'}</li>
              <li>{language === 'he' ? 'ניגודיות צבעים מספקת' : 'Sufficient color contrast'}</li>
              <li>{language === 'he' ? 'טקסט חלופי לתמונות' : 'Alternative text for images'}</li>
              <li>{language === 'he' ? 'תמיכה בעברית ו-RTL' : 'Hebrew and RTL support'}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'קיצורי מקלדת' : 'Keyboard Shortcuts'}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li><kbd className="bg-white px-2 py-1 rounded border">Alt + M</kbd> - {language === 'he' ? 'דלג לתוכן הראשי' : 'Skip to main content'}</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Alt + N</kbd> - {language === 'he' ? 'דלג לניווט' : 'Skip to navigation'}</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Tab</kbd> - {language === 'he' ? 'ניווט קדימה' : 'Navigate forward'}</li>
                <li><kbd className="bg-white px-2 py-1 rounded border">Shift + Tab</kbd> - {language === 'he' ? 'ניווט אחורה' : 'Navigate backward'}</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'דיווח על בעיות נגישות' : 'Reporting Accessibility Issues'}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'he' 
                ? 'אם נתקלת בבעיית נגישות באתר שלנו, אנא צור עמנו קשר:'
                : 'If you encounter an accessibility issue on our website, please contact us:'}
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>{language === 'he' ? 'טלפון:' : 'Phone:'}</strong> <a href="tel:035496949" className="text-blue-600 hover:underline">03-5496949</a><br/>
                <strong>{language === 'he' ? 'אימייל:' : 'Email:'}</strong> <a href="mailto:office@stroke-il.com" className="text-blue-600 hover:underline">office@stroke-il.com</a><br/>
                <strong>{language === 'he' ? 'ווטסאפ:' : 'WhatsApp:'}</strong> <a href="https://wa.me/972502804723" className="text-blue-600 hover:underline">050-2804723</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'עדכונים' : 'Updates'}
            </h2>
            <p className="text-gray-600">
              {language === 'he' 
                ? 'הצהרת נגישות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString("he-IL")}. אנו ממשיכים לעבוד על שיפור הנגישות של האתר.'
                : `This accessibility statement was last updated on ${new Date().toLocaleDateString("en-US")}. We continue to work on improving the website's accessibility.`}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}