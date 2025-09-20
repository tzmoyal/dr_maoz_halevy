
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Zap, Calendar, CheckCircle, Info, Eye, Activity } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function VestibularMigraine() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'he' ? 'חזרה לתחומי טיפול' : 'Back to Services'}
            </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            {language === 'he' ? 'אבחון מיוחד לסחרחורת ומיגרנה' : 'Specialized Diagnosis for Dizziness and Migraine'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                מיגרנה
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> וסטיבולרית </span>
              </>
            ) : (
              <>
                Vestibular
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Migraine </span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'אבחון וטיפול מומחה במיגרנות הגורמות לסחרחורת, ורטיגו ובעיות שיווי משקל. מצב מורכב הדורש הבנה מעמיקה של הקשר בין המיגרנה למערכת הווסטיבולרית.'
              : 'Expert diagnosis and treatment for migraines causing dizziness, vertigo, and balance problems. A complex condition requiring deep understanding of the connection between migraine and the vestibular system.'
            }
          </p>

          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'הבנת מיגרנה וסטיבולרית' : 'Understanding Vestibular Migraine'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'מיגרנה וסטיבולרית היא סוג ייחודי של מיגרנה, שבו מלבד כאב הראש מופיעים גם תסמינים הקשורים למערכת שיווי המשקל וסחרחורת ניכרת. זהו אחד מסוגי המיגרנה הפחות מוכרים, אך הוא עלול להיות מתסכל במיוחד משום שהוא משפיע לא רק על הכאב אלא גם על תחושת היציבות.'
                  : 'Vestibular migraine is a unique type of migraine in which, besides headache, symptoms related to the balance system and noticeable dizziness also appear. This is one of the lesser-known types of migraine, but it can be particularly frustrating because it affects not only pain but also the sense of stability.'
                }
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{language === 'he' ? 'מאפיינים עיקריים' : 'Main Characteristics'}</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                {(language === 'he' 
                  ? ['סחרחורת או תחושת חוסר יציבות שיכולה להימשך דקות עד שעות.', 'רגישות לתנועה – תחושה שכל שינוי תנוחה או תזוזה מחמירים את הסחרחורת.', 'לעיתים מלווה בכאב ראש אופייני למיגרנה, אך לא תמיד.', 'תסמינים נוספים: בחילות, רגישות לאור או לרעש, קושי בריכוז.']
                  : ['Dizziness or unsteadiness that can last minutes to hours.', 'Motion sensitivity – feeling that any change in position or movement worsens the dizziness.', 'Sometimes accompanied by typical migraine headache, but not always.', 'Additional symptoms: nausea, sensitivity to light or sound, difficulty concentrating.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{language === 'he' ? 'מי עלול לסבול ממיגרנה וסטיבולרית?' : 'Who May Suffer from Vestibular Migraine?'}</h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'he'
                  ? 'ההפרעה נפוצה יותר בנשים, ולעיתים מופיעה אצל מי שכבר סובלים ממיגרנה "קלאסית". היא יכולה להתחיל בכל גיל.'
                  : 'The disorder is more common in women and sometimes appears in those who already suffer from "classic" migraine. It can begin at any age.'
                }
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'אבחון וטיפול' : 'Diagnosis and Treatment'}</h3>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">{language === 'he' ? 'אבחון' : 'Diagnosis'}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'he'
                  ? 'מיגרנה וסטיבולרית עלולה להתבלבל עם בעיות אוזן פנימית או הפרעות אחרות במערכת שיווי המשקל. לכן חשוב לפנות למומחה לכאבי ראש שיודע לשלב בין בדיקה נוירולוגית לאוזנולוגית, ולאבחן בצורה מדויקת.'
                  : 'Vestibular migraine can be confused with inner ear problems or other disorders in the balance system. Therefore, it is important to consult a headache specialist who knows how to combine neurological and otological examination and diagnose accurately.'
                }
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{language === 'he' ? 'טיפול' : 'Treatment'}</h4>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he'
                  ? ['טיפול בזמן התקף – תרופות נגד מיגרנה ולעיתים גם תרופות להקלה על סחרחורת או בחילות.', 'טיפול מונע – תרופות ייעודיות למיגרנה או שינויי אורח חיים להפחתת טריגרים (שינה לא סדירה, מתח, מזון מסוים).', 'טיפולים משלימים – פיזיותרפיה וסטיבולרית לשיפור שיווי המשקל, טכניקות הרפיה ופעילות גופנית מותאמת.']
                  : ['Acute treatment – anti-migraine medications and sometimes medications to relieve dizziness or nausea.', 'Preventive treatment – specialized migraine medications or lifestyle changes to reduce triggers (irregular sleep, stress, certain foods).', 'Complementary treatments – vestibular physiotherapy to improve balance, relaxation techniques, and adapted physical activity.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Line Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'מיגרנה וסטיבולרית יכולה לפגוע משמעותית בשגרה היומיומית – אך אבחון נכון ובניית תוכנית טיפול מותאמת אישית יכולים להפחית את התדירות והעוצמה של ההתקפים, לשפר את תחושת היציבות ולאפשר חזרה לחיים מלאים ואקטיביים.'
                  : 'Vestibular migraine can significantly impact daily routines – but proper diagnosis and building a personalized treatment plan can reduce the frequency and intensity of attacks, improve the sense of stability, and enable a return to a full and active life.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'פתרו את תעלומת הסחרחורת שלכם' : 'Solve Your Dizziness Mystery'}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            {language === 'he' 
              ? 'אל תסבלו עוד מסחרחורת בלתי מוסברת. קבעו פגישת ייעוץ עם מומחה למיגרנה וסטיבולרית לקבלת אבחון מדויק וטיפול יעיל.'
              : 'Don\'t suffer from unexplained dizziness any longer. Schedule a consultation with a vestibular migraine specialist for accurate diagnosis and effective treatment.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו ייעוץ מומחה' : 'Book Expert Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" variant="outline" className="border-2 border-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
