import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Zap, Shield, Calendar, CheckCircle, Target } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function FacialPain() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/Services"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לשירותים' : 'Back to Services'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/80 backdrop-blur-sm text-rose-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'טיפול מיוחד' : 'Specialized Care'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                טיפול מומחה ב
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"> כאבי פנים </span>
              </>
            ) : (
              <>
                Expert
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"> Facial Pain </span>
                Treatment
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'אבחון וטיפול מיוחדים למצבי כאב פנים מורכבים, כולל נוירלגיה טריגמינלית, הפרעות במפרק הלסת (TMJ) ותסמונות כאב פנים מאתגרות אחרות.'
              : 'Specialized diagnosis and treatment for complex facial pain conditions including trigeminal neuralgia, TMJ disorders, and other challenging facial pain syndromes.'
            }
          </p>

          <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Main Conditions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'he' ? 'נוירלגיה טריגמינלית – כשהכאב מופיע כמו "זרם חשמלי" בפנים' : 'Trigeminal Neuralgia – When Pain Appears Like an "Electric Shock" in the Face'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'נוירלגיה טריגמינלית היא אחת מתסמונות הכאב הנוירולוגיות החזקות והמוכרות ביותר. היא נגרמת כתוצאה מפגיעה או גירוי של העצב הטריגמינלי – העצב האחראי על התחושה בפנים.'
                  : 'Trigeminal neuralgia is one of the most severe and well-known neurological pain syndromes. It is caused by damage or irritation of the trigeminal nerve – the nerve responsible for sensation in the face.'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'מאפיינים עיקריים' : 'Main Characteristics'}</h4>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' ? [
                  'כאב חד, דמוי "זרם חשמלי" או "דקירה", שמופיע בצד אחד של הפנים.',
                  'ההתקפים נמשכים שניות עד דקות, אך יכולים לחזור עשרות פעמים במהלך היום.',
                  'הכאב עלול להתעורר אפילו ממגע קל, דיבור, צחצוח שיניים, לעיסה או אפילו משב רוח.'
                ] : [
                  'Sharp, "electric shock-like" or "stabbing" pain that appears on one side of the face.',
                  'Attacks last from seconds to minutes but can recur dozens of times throughout the day.',
                  'The pain can be triggered by even light touch, speaking, brushing teeth, chewing, or even a gust of wind.'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'גורמים אפשריים' : 'Possible Causes'}</h4>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' ? [
                  'לחץ של כלי דם על העצב הטריגמינלי.',
                  'שינויים מבניים או פגיעה עצבית.',
                  'במקרים מסוימים – מחלות נוירולוגיות כגון טרשת נפוצה.'
                ] : [
                  'Pressure from a blood vessel on the trigeminal nerve.',
                  'Structural changes or nerve damage.',
                  'In some cases – neurological diseases such as multiple sclerosis.'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'אבחון' : 'Diagnosis'}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'האבחון מתבצע על ידי מומחה לכאבי ראש ופנים, באמצעות תיאור התסמינים, בדיקה נוירולוגית ולעיתים בדיקות הדמיה (MRI) כדי לשלול גורמים אחרים.'
                  : 'Diagnosis is made by a headache and facial pain specialist, through a description of symptoms, a neurological examination, and sometimes imaging tests (MRI) to rule out other causes.'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'טיפול' : 'Treatment'}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הטיפול בנוירלגיה טריגמינלית משתנה בהתאם לחומרת המצב:'
                  : 'Treatment for trigeminal neuralgia varies depending on the severity of the condition:'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' ? [
                  'טיפול תרופתי – תרופות נוגדות פרכוסים המשמשות לשליטה בכאב עצבי.',
                  'טיפולים מתקדמים – הזרקות או פרוצדורות זעיר־פולשניות לשיכוך הכאב.',
                  'טיפול כירורגי – במקרים עמידים, ניתוח להפרדת כלי הדם מהעצב או פגיעה ממוקדת בסיבי העצב.'
                ] : [
                  'Medication – anticonvulsant drugs used to control nerve pain.',
                  'Advanced treatments – injections or minimally invasive procedures to relieve pain.',
                  'Surgical treatment – in resistant cases, surgery to separate the blood vessel from the nerve or targeted damage to the nerve fibers.'
                ]).map((item, index) => (
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'he' ? 'הפרעת TMJ – כשהכאב מתחיל בלסת ומקרין לראש' : 'TMJ Disorder – When Pain Starts in the Jaw and Radiates to the Head'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'מפרק הלסת (Temporo-Mandibular Joint – TMJ) מחבר בין הלסת התחתונה לגולגולת, ומשמש אותנו בכל דיבור, לעיסה או פיהוק. כאשר המפרק או השרירים סביבו אינם מתפקדים כראוי, עלולה להופיע הפרעת TMJ, שגורמת לכאב מקומי ולעיתים גם לכאבי ראש והקרנה לאזורים נוספים בפנים ובצוואר.'
                  : 'The jaw joint (Temporo-Mandibular Joint – TMJ) connects the lower jaw to the skull and is used in every speech, chewing, or yawning motion. When the joint or its surrounding muscles do not function properly, a TMJ disorder can occur, causing local pain and sometimes headaches that radiate to other areas of the face and neck.'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'גורמים שכיחים' : 'Common Causes'}</h4>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' ? [
                  'הידוק או חריקת שיניים (בעיקר בלילה).',
                  'מתחים נפשיים הגורמים להפעלת יתר של שרירי הלסת.',
                  'טראומה מקומית או חבלה בלסת.'
                ] : [
                  'Clenching or grinding of teeth (especially at night).',
                  'Emotional stress causing overuse of jaw muscles.',
                  'Local trauma or injury to the jaw.'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">{language === 'he' ? 'טיפול' : 'Treatment'}</h4>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' ? [
                  'טיפול שמרני – תרגילים להרפיה ושיפור תפקוד הלסת.',
                  'סד לילה – למניעת חריקת שיניים והפחתת העומס על המפרק.',
                  'בוטוקס לשרירים המעורבים במקרים מורכבים'
                ] : [
                  'Conservative treatment – exercises for relaxation and improving jaw function.',
                  'Night guard – to prevent teeth grinding and reduce the load on the joint.',
                  'Botox for the involved muscles in complex cases.'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'מצבי כאב פנים אחרים' : 'Other Facial Pain Conditions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'he'
                ? 'אנו מספקים טיפול מקיף למגוון תסמונות כאב פנים הדורשות מומחיות נוירולוגית מיוחדת.'
                : 'We provide comprehensive care for various facial pain syndromes requiring specialized neurological expertise.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאב פנים אטיפי' : 'Atypical Facial Pain'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאב פנים מתמשך, שורף או כואב, ללא המאפיינים של נוירלגיה טריגמינלית.'
                  : 'Continuous burning or aching facial pain without the characteristic features of trigeminal neuralgia.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'נוירלגיה פוסט-הרפטית' : 'Post-Herpetic Neuralgia'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאב עצבי מתמשך לאחר זיהום שלבקת חוגרת המשפיע על עצבי הפנים.'
                  : 'Persistent nerve pain following shingles infection affecting facial nerves.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'נוירלגיה גלוסופרינגיאלית' : 'Glossopharyngeal Neuralgia'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאב חד בגרון, בלשון ובאזורי האוזניים הנגרם מגירוי של העצב הגלוסופרינגיאלי.'
                  : 'Sharp pain in the throat, tongue, and ear areas caused by irritation of the glossopharyngeal nerve.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-rose-600 to-pink-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'קבלו טיפול מומחה לכאב פנים מורכב' : 'Get Expert Care for Complex Facial Pain'}
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'אל תסבלו בשקט. קבעו פגישת ייעוץ עם מומחה כאבי הפנים שלנו כדי למצוא את גישת הטיפול המתאימה למצבכם.'
              : 'Don\'t suffer in silence. Schedule a consultation with our facial pain specialist to find the right treatment approach for your condition.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו ייעוץ' : 'Book Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}