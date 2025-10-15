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
          <div className="space-y-6 text-gray-700 leading-relaxed" dir="rtl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">מחויבות לנגישות</h2>
              <p>
                ד״ר אייל מעוז הלוי והצוות מחויבים להנגשת המידע והשירותים באתר לכלל המשתמשים, לרבות אנשים עם מוגבלויות. אנו פועלים להבטיח שהאתר יהיה נגיש, ידידותי ונוח לשימוש בהתאם להנחיות WCAG 2.1 ברמה AA ולתקנות הנגישות של מדינת ישראל.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">אמצעים להנגשת האתר</h2>
              <p className="mb-4">במסגרת מאמצינו להנגיש את האתר, יושמו מגוון יכולות:</p>
              <ul className="list-disc pr-5 space-y-2">
                <li>ניווט מלא באמצעות מקלדת – ללא צורך בשימוש בעכבר.</li>
                <li>תמיכה בקוראי מסך – שימוש בכותרות מסודרות, תיאורי תמונות וטקסטים קריאים.</li>
                <li>שינוי גודל טקסט והתאמות צבעים – לשיפור חוויית הקריאה.</li>
                <li>ניגודיות גבוהה – אפשרות לשיפור הניגודיות לטובת אנשים עם לקויות ראייה.</li>
                <li>טפסים וכפתורים נגישים – ממשק ברור וקל לשימוש.</li>
              </ul>
              <p className="mt-4">
                אנו פועלים באופן שוטף לבדיקת נגישות האתר ולביצוע שיפורים בהתאם לצרכים ולמשוב מהמשתמשים.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">היקף התאמות הנגישות</h2>
              <p>
                מרבית עמודי האתר נגישים. ייתכן שתכנים מסוימים שמקורם בצד ג׳ (כגון קבצי PDF ישנים, סרטוני וידאו חיצוניים או מערכות חיצוניות) אינם נגישים באופן מלא. אנו ממשיכים לפעול כדי לשפר נגישות זו ככל שניתן.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">יצירת קשר</h2>
              <p className="mb-4">
                במידה ונתקלת בקושי בגלישה באתר או שיש לך הצעות לשיפור, נשמח לסייע:
              </p>
              <p className="text-blue-600 font-medium">
                📧 אימייל: office@dr-maozhalevy.co.il
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">עדכון ההצהרה</h2>
              <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: 18.9.2025.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Accessibility</h2>
              <p>
                Dr. Eyal Maoz Halevy and the team are committed to making the information and services on this website accessible to all users, including people with disabilities. We strive to ensure that the website is accessible, user-friendly, and convenient in accordance with WCAG 2.1 Level AA guidelines and the accessibility regulations of the State of Israel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Measures Implemented</h2>
              <p className="mb-4">As part of our efforts to make the website accessible, we have implemented the following features:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full keyboard navigation – no need to use a mouse.</li>
                <li>Screen reader support – structured headings, image descriptions, and readable text.</li>
                <li>Text resizing and color adjustments – to improve the reading experience.</li>
                <li>High contrast mode – an option to enhance contrast for users with visual impairments.</li>
                <li>Accessible forms and buttons – clear and easy-to-use interface.</li>
              </ul>
              <p className="mt-4">
                We continuously test the site's accessibility and implement improvements based on user needs and feedback.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Accessibility</h2>
              <p>
                Most pages on the website are accessible. Some third-party content (such as older PDF files, external videos, or third-party systems) may not yet be fully accessible. We continue to work to improve this accessibility wherever possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="mb-4">
                If you encounter any difficulties while browsing the site or have suggestions for improvement, we would be happy to assist:
              </p>
              <p className="text-blue-600 font-medium">
                📧 Email: office@dr-maozhalevy.co.il
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Statement Updates</h2>
              <p>This accessibility statement was last updated on: 18.9.2025.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


