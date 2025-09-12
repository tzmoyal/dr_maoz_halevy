import React from 'react';
import { useLanguage } from '../components/LanguageContext';

export default function Accessibility() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          {language === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
        </h1>

        {language === 'he' ? (
          <div className="space-y-4 text-gray-700 leading-relaxed" dir="rtl">
            <p>
              אתר זה מותאם להנחיות WCAG 2.1 ברמה AA ולתקנות הנגישות של מדינת ישראל. אנו פועלים להבטיח חוויית שימוש שוויונית, מכבדת, נגישה ובטוחה לכלל המשתמשים.
            </p>
            <ul className="list-disc pr-5 space-y-2">
              <li>ניווט מלא באמצעות מקלדת וקיצורי מקלדת נפוצים.</li>
              <li>ניגודיות צבעים מספקת ויכולת קריאה גבוהה.</li>
              <li>טקסט חלופי לתמונות ותיאורי רכיבים משמעותיים.</li>
              <li>כותרות, אזורי מבנה סמנטיים וקישורי דילוג לתוכן.</li>
              <li>תמיכה בכיווניות RTL/LTR ושפות עברית/אנגלית.</li>
            </ul>
            <p>
              במידה ונתקלתם בקושי נגישות או שיש לכם הצעה לשיפור, נשמח לשמוע: 03-5496949 | 050-2804723 (וואטסאפ) | office@stroke-il.com.
            </p>
            <p>תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>
          </div>
        ) : (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This website conforms to WCAG 2.1 Level AA and the Israeli accessibility regulations. We strive to provide an equal, respectful, accessible, and safe experience for all users.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full keyboard navigation and common keyboard shortcuts.</li>
              <li>Sufficient color contrast and high readability.</li>
              <li>Alternative text for images and meaningful component descriptions.</li>
              <li>Proper headings, semantic landmarks, and skip links.</li>
              <li>RTL/LTR support and Hebrew/English content.</li>
            </ul>
            <p>
              If you encounter an accessibility barrier or have suggestions, please contact us: 03-5496949 | 050-2804723 (WhatsApp) | office@stroke-il.com.
            </p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}


