import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Target, Calendar, CheckCircle, Info } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function TensionHeadache() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/Services"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לתחומי טיפול' : 'Back to Services'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100/80 backdrop-blur-sm text-purple-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'הטיפול הנפוץ ביותר' : 'The Most Common Headache'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                הקלה על כאב ראש
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> מתחי </span>
              </>
            ) : (
              <>
                Effective Relief for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Tension Headache </span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'שברו את מעגל כאבי הראש המתחיים הכרוניים עם התערבויות רפואיות ממוקדות ואסטרטגיות טיפול מותאמות אישית שנועדו לספק הקלה מתמשכת.'
              : 'Break the cycle of chronic tension headaches with targeted medical interventions and personalized treatment strategies designed to provide lasting relief.'
            }
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
            </Button>
          </a>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'הבנת כאב ראש מתחי' : 'Understanding Tension Headaches'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'כאב ראש מתחי (Tension Headache) הוא סוג כאב הראש השכיח ביותר. רוב האנשים יחוו אותו בשלב כלשהו בחייהם. מדובר בכאב "לוחץ" או "מהדק", שמופיע לרוב בשני צדי הראש, ולעיתים מלווה בתחושת לחץ בצוואר או בכתפיים.'
                  : 'Tension Headache is the most common type of headache. Most people will experience it at some point in their lives. It is described as a "pressing" or "tightening" pain, usually appearing on both sides of the head, and is sometimes accompanied by a feeling of pressure in the neck or shoulders.'}
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' 
                  ? ['כאב בדרגה קלה עד בינונית, שאינו מונע תפקוד אך פוגע באיכות החיים.', 'תחושה של "טבעת מהודקת" או "כתר" סביב הראש.', 'לעיתים מחמיר אחרי יום עמוס.', 'לרוב מלווה ברגישות לרעש בלבד.']
                  : ['Mild to moderate pain that doesn\'t prevent daily activities but impacts quality of life.', 'A sensation of a "tight band" or "crown" around the head.', 'Often worsens after a busy day.', 'Usually accompanied only by sensitivity to noise.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{language === 'he' ? 'גורמים שכיחים' : 'Common Causes'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'כאב ראש מתחי נגרם לרוב משילוב של מתח נפשי ופיזי, כגון:'
                  : 'Tension headaches are often caused by a combination of mental and physical stress, such as:'}
              </p>
              <ul className="space-y-2 text-gray-600">
                 {(language === 'he'
                  ? ['לחץ רגשי או דאגה מתמשכת', 'עבודה ממושכת מול מחשב או ישיבה לא נכונה', 'מתח שרירי בצוואר ובכתפיים', 'חוסר שינה או עייפות מצטברת', 'שתייה לא מספיקה']
                  : ['Emotional stress or persistent worry', 'Prolonged work at a computer or poor posture', 'Muscle tension in the neck and shoulders', 'Lack of sleep or accumulated fatigue', 'Insufficient fluid intake']
                 ).map((item, index) => (
                   <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                 ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'טיפולים והתמודדות' : 'Treatments and Coping'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הטיפול בכאב ראש מתחי כולל שילוב של שינויי אורח חיים עם טיפולים רפואיים במידת הצורך:'
                  : 'Treatment for tension headaches involves a combination of lifestyle changes with medical treatments as needed:'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he'
                  ? ['הקפדה על שינה מסודרת ופעילות גופנית', 'טכניקות הרפיה, יוגה או מדיטציה להפחתת מתח', 'התייחסות למקור המתח', 'טיפול תרופתי לפי הצורך במצבי כאב', 'במקרים של כאבים תכופים – טיפול מונע מותאם אישית']
                  : ['Ensuring regular sleep and physical activity', 'Relaxation techniques, yoga, or meditation to reduce stress', 'Addressing the source of the stress', 'Medication for pain as needed', 'In cases of frequent pain – personalized preventive treatment']
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'כאב ראש מתחי אמנם נפוץ ושכיח, אך אינו "גזירת גורל". אבחון מדויק וליווי מקצועי יכולים לסייע בהפחתת הכאב, במניעת התקפים חוזרים ובהחזרת איזון ואיכות חיים.'
                  : 'While tension headaches are common, they are not a "life sentence." An accurate diagnosis and professional guidance can help reduce pain, prevent recurring attacks, and restore balance and quality of life.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'שברו את מעגל כאבי הראש המתחיים' : 'Break Free from Chronic Tension Headaches'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {language === 'he' 
              ? 'אל תתנו לכאבי הראש לשלוט בחיי היומיום שלכם. קבעו פגישת ייעוץ כדי לפתח תוכנית טיפול יעילה המותאמת לצרכים שלכם.'
              : 'Don\'t let tension headaches control your daily life. Schedule a consultation to develop an effective treatment plan tailored to your needs.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Book Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}