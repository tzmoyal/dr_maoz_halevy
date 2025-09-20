import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Bone, Target, Calendar, CheckCircle, Activity, Info } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function CervicogenicHeadache() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/Services"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לשירותים' : 'Back to Services'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm text-sky-700 rounded-full text-sm font-medium mb-4">
            <Bone className="w-4 h-4" />
            {language === 'he' ? 'אבחון וטיפול מומחה' : 'Specialized Diagnosis & Treatment'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                הקלה בכאב ראש
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600"> צווארי </span>
              </>
            ) : (
              <>
                Cervicogenic
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600"> Headache </span>
                Relief
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'אבחון וניהול מומחה של כאבי ראש שמקורם בצוואר (עמוד השדרה הצווארי). אנו מזהים את שורש הבעיה ומספקים טיפולים ממוקדים להקלת הכאב.'
              : 'Expert diagnosis and management of headaches originating from the neck (cervical spine). We identify the root cause and provide targeted treatments to alleviate pain.'
            }
          </p>

          <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'הבנת התסמינים' : 'Understanding the Symptoms'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'כאב ראש צווארי (Cervicogenic Headache) הוא סוג כאב ראש שמקורו אינו במוח עצמו, אלא במבנים בצוואר – שרירים, מפרקים או עצבים. הכאב "מוקרן" מהצוואר אל הראש, ולעיתים מתבלבל עם מיגרנה או כאב ראש מתחי.'
                  : 'A Cervicogenic Headache is a type of headache that does not originate in the brain itself, but rather in the structures of the neck – muscles, joints, or nerves. The pain is "referred" from the neck to the head, and is sometimes confused with a migraine or a tension headache.'}
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' 
                  ? ['כאב בצד אחד או שני הצדדים של הראש, לרוב שמתחיל בצוואר או בעורף ומתקדם כלפי מעלה.', 'הכאב יכול להחמיר בתנועות צוואר מסוימות או במאמץ גופני.', 'לעיתים מלווה בנוקשות צוואר, מגבלות בתנועה או רגישות במגע באזור.', 'יכול להיות כרוני ומתמשך, או להופיע בהתקפים חוזרים.']
                  : ['Pain on one or both sides of the head, usually starting in the neck or back of the head and moving upwards.', 'The pain can worsen with certain neck movements or physical exertion.', 'Sometimes accompanied by neck stiffness, limited range of motion, or tenderness to the touch in the area.', 'Can be chronic and persistent, or appear in recurring attacks.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{language === 'he' ? 'גורמים אפשריים' : 'Possible Causes'}</h3>
              <ul className="space-y-2 text-gray-600">
                 {(language === 'he'
                  ? ['בעיות יציבה ושחיקה עקב עבודה ממושכת מול מחשב או ישיבה לא נכונה.', 'פגיעות בצוואר, כמו "צליפת שוט" לאחר תאונת דרכים.', 'שינויים ניווניים בחוליות הצוואר או במפרקים.', 'מתח שרירי כרוני בצוואר ובכתפיים.']
                  : ['Posture and wear issues due to prolonged work at a computer or incorrect sitting.', 'Neck injuries, such as whiplash after a car accident.', 'Degenerative changes in the cervical vertebrae or joints.', 'Chronic muscle tension in the neck and shoulders.']
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'אבחון וגישות טיפול' : 'Diagnosis and Treatment Approaches'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'כיוון שכאב ראש צווארי דומה לעיתים למיגרנה או לכאב ראש מתחי, האבחון מחייב מומחה מנוסה שיבחן את הקשר בין תנועות הצוואר והכאב, ולעיתים ימליץ על בדיקות הדמיה (כמו MRI או CT). הטיפול בכאב ראש צווארי משלב לרוב כמה גישות:'
                  : 'Since a cervicogenic headache can sometimes resemble a migraine or a tension headache, diagnosis requires an experienced specialist who will examine the connection between neck movements and the pain, and may recommend imaging tests (like MRI or CT). Treatment for cervicogenic headache typically combines several approaches:'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he'
                  ? ['פיזיותרפיה ותרגילים לחיזוק ולשיפור היציבה.', 'תרופות לשיכוך כאבים או מרפה שרירים במידת הצורך.', 'הזרקות מקומיות לנקודות הדק (Trigger Point) במצבים מסוימים.', 'שינויי אורח חיים – הפחתת ישיבה ממושכת, התאמת עמדת עבודה, פעילות גופנית מותאמת.']
                  : ['Physical therapy and exercises to strengthen and improve posture.', 'Pain relief medications or muscle relaxants as needed.', 'Local injections into trigger points in certain situations.', 'Lifestyle changes – reducing prolonged sitting, adjusting workstation ergonomics, tailored physical activity.']
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
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'כאב ראש צווארי עלול להיות מתסכל ומתמשך, אך טיפול מותאם וממוקד בגורם המקורי בצוואר יכול להביא להקלה משמעותית, לשיפור התפקוד ולהפחתת הכאב לאורך זמן.'
                  : 'A cervicogenic headache can be frustrating and persistent, but a tailored treatment focused on the original cause in the neck can lead to significant relief, improved function, and long-term pain reduction.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'טפלו בשורש כאב הראש שלכם' : 'Address the Root Cause of Your Headache'}
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'אל תתנו לכאבי ראש שמקורם בצוואר לשלוט בחייכם. קבעו פגישת ייעוץ לאבחון מדויק ותוכנית טיפול יעילה.'
              : 'Don\'t let neck-related headaches control your life. Schedule a consultation for an accurate diagnosis and effective treatment plan.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Book Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}