
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Shield, Baby, Calendar, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function MigraneInPregnancy() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to={createPageUrl('MigraineTreatment')} className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לטיפול במיגרנה' : 'Back to Migraine Treatment'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100/80 backdrop-blur-sm text-pink-700 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            {language === 'he' ? 'טיפול בטוח למהלך ההריון' : 'Safe Care Throughout Pregnancy'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                מיגרנה
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600"> בהריון </span>
              </>
            ) : (
              <>
                Migraine in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600"> Pregnancy </span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'ניהול בטוח ויעיל של מיגרנה במהלך הריון והנקה. אנו מספקים טיפולים מיוחדים ובטוחים הנותנים מענה לצרכים הייחודיים של נשים הרות.'
              : 'Safe and effective migraine management during pregnancy and breastfeeding. We provide specialized, safe treatments that address the unique needs of expecting mothers.'
            }
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו ייעוץ מיוחד' : 'Schedule Specialized Consultation'}
            </Button>
          </a>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'מיגרנה והריון' : 'Migraine and Pregnancy'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'מיגרנה היא אחת הסיבות השכיחות לכאב ראש אצל נשים בגיל הפוריות, ולכן טבעי שהיא עולה גם בתקופת ההריון. שלושת-רבע מהנשים חוות שיפור או היעלמות של כאבי ראש במהלך ההריון, אך אצל חלק מהנשים אין שינוי בכאבים או שהכאבים אף מחמירים – במיוחד בשליש הראשון. מיגרנה גם יכולה להופיע לראשונה במהלך ההריון.'
                  : 'Migraine is one of the most common causes of headaches in women of childbearing age, so it\'s natural for it to arise during pregnancy as well. Three-quarters of women experience an improvement or disappearance of headaches during pregnancy, but for some women, there is no change in pain or the pain even worsens – especially in the first trimester. Migraine can also appear for the first time during pregnancy.'
                }
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? <>
                      <strong>למה זה קורה?</strong><br />
                      שינויים ברמות אסטרוגן, חוסר שינה, מתח נפשי, ירידה בצריכת קפאין או שינויים בתזונה – כל אלה יכולים להשפיע על הופעת התקפי מיגרנה בזמן ההריון.
                    </>
                  : <>
                      <strong>Why does this happen?</strong><br />
                      Changes in estrogen levels, lack of sleep, emotional stress, a decrease in caffeine intake, or dietary changes – all of these can influence the onset of migraine attacks during pregnancy.
                    </>
                }
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'טיפולים בטוחים' : 'Safe Treatment Options'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'תקופת ההריון מחייבת זהירות בבחירת הטיפול, כדי לשמור הן על בריאות האם והן על בריאות העובר:'
                  : 'The pregnancy period requires caution in choosing a treatment, to protect both the mother\'s and the fetus\'s health:'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he'
                  ? ['טיפול ללא תרופות – מומלץ כקו ראשון: מנוחה, שינה סדירה, שתייה מרובה, פעילות גופנית מותאמת, הרפיה ויוגה לנשים בהריון.', 'תרופות – שימוש רק בהנחיית רופא מומחה, מתוך קשת מצומצמת של תרופות שנחשבות בטוחות בהריון בהתאם להנחיות של ה- American College of Obstetrics and Gynecology', 'טיפול מונע – במקרים מסוימים ניתן לשקול טיפולים ייחודיים שאינם תרופתיים.']
                  : ['Non-pharmacological treatment – recommended as a first line: rest, regular sleep, plenty of fluids, tailored physical activity, relaxation, and yoga for pregnant women.', 'Medications – use only under the guidance of a specialist doctor, from a limited range of drugs considered safe during pregnancy according to the guidelines of the American College of Obstetrics and Gynecology.', 'Preventive treatment – in some cases, unique non-pharmacological treatments can be considered.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-yellow-800 mb-1">{language === 'he' ? 'חשוב לזכור' : 'Important to Remember'}</h4>
                    <p className="text-sm text-yellow-700">
                      {language === 'he'
                        ? 'אין להתחיל או להפסיק תרופות ללא התייעצות עם רופא מומחה. כל טיפול מותאם אישית לפי שלב ההריון והמצב הרפואי.'
                        : 'Do not start or stop medications without consulting a specialist. All treatments are personalized according to pregnancy stage and medical condition.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Line Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className={`flex flex-col md:flex-row items-center gap-6 text-center ${language === 'he' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'מיגרנה בהריון היא תופעה מוכרת, אך יש דרכים רבות להתמודד איתה בצורה בטוחה. אבחון נכון, התאמת טיפול אישי וליווי של מומחה לכאבי ראש יכולים להפחית את הכאב, להחזיר שליטה ולשפר את איכות החיים תוך כדי שמירה על התינוק.'
                  : 'Migraine during pregnancy is a known phenomenon, but there are many safe ways to cope with it. A correct diagnosis, personalized treatment, and guidance from a headache specialist can reduce pain, restore control, and improve quality of life while protecting the baby.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-pink-600 to-rose-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'טיפול מיוחד לנשים הרות' : 'Specialized Care for Expecting Mothers'}
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            {language === 'he' 
              ? 'קבלו ייעוץ מומחה לניהול בטוח של מיגרנות במהלך ההריון והנקה. הבריאות שלכן והבטחת התינוק הם העדיפות שלנו.'
              : 'Get expert consultation for safe migraine management during pregnancy and breastfeeding. Your health and your baby\'s safety are our priority.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו ייעוץ מיוחד' : 'Book Specialized Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
