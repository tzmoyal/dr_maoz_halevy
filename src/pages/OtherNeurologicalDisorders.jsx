
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Heart, Zap, Activity, Calendar, CheckCircle, Shield, Target, Stethoscope, ClipboardCheck, Users } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function OtherNeurologicalDisorders() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'he' ? 'חזרה לשירותים' : 'Back to Services'}
            </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 backdrop-blur-sm text-orange-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'טיפול נוירולוגי מקיף' : 'Comprehensive Neurological Care'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                הפרעות נוירולוגיות
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> אחרות </span>
              </>
            ) : (
              <>
                Other
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Neurological </span>
                Disorders
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'טיפול נוירולוגי מומחה למגוון רחב של מצבים נוירולוגיים, כולל הפרעות קשב וריכוז (ADHD), הפרעות קוגניטיביות, וייעוצים נוירולוגיים כלליים.'
              : 'Expert neurological care for a wide range of neurological conditions, including ADHD, cognitive disorders, and general neurological consultations.'
            }
          </p>

          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Main Conditions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'ADHD והפרעות קשב' : 'ADHD & Attention Disorders'}</h3>
              
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {language === 'he' ? 'הפרעת קשב וריכוז – הרבה מעבר ל"קושי להתרכז"' : 'Attention Deficit Hyperactivity Disorder – Much More Than "Difficulty Concentrating"'}
              </h4>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הפרעת קשב וריכוז (ADHD) היא הפרעה נוירולוגית התפתחותית, הנפוצה בילדים אך גם במבוגרים. היא אינה "בעיה של עצלנות", אלא מצב שבו קיימים שינויים בתפקוד המוח המשפיעים על יכולת הריכוז, השליטה בדחפים והוויסות ההתנהגותי.'
                  : 'Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder, common in children but also in adults. It is not a "problem of laziness," but rather a condition in which there are changes in brain function that affect the ability to concentrate, impulse control, and behavioral regulation.'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-3">{language === 'he' ? 'מאפיינים עיקריים' : 'Main Characteristics'}</h4>
              <ul className="space-y-2 text-gray-600 mb-4">
                {(language === 'he' 
                  ? [
                    'קושי להתרכז לאורך זמן, במיוחד במשימות שגרתיות או פחות מעניינות.',
                    'שכחה, מוסחות והימנעות ממשימות הדורשות מאמץ מנטלי מתמשך.',
                    'נטייה לאי שקט, תזזיתיות או פעילות יתר.',
                    'אימפולסיביות – קושי לדחות סיפוק או להמתין בתור.',
                    'אצל מבוגרים: קושי בהתארגנות, ניהול זמן, ושמירה על יציבות בעבודה ובמערכות יחסים.'
                  ]
                  : [
                    'Difficulty concentrating for extended periods, especially on routine or less interesting tasks.',
                    'Forgetfulness, distractibility, and avoidance of tasks requiring sustained mental effort.',
                    'Tendency toward restlessness, fidgeting, or hyperactivity.',
                    'Impulsivity – difficulty delaying gratification or waiting in line.',
                    'In adults: difficulty with organization, time management, and maintaining stability in work and relationships.'
                  ]
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mb-3">{language === 'he' ? 'מי סובל מהפרעת קשב וריכוז?' : 'Who Suffers from ADHD?'}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הפרעת קשב וריכוז מופיעה בכ־5–7% מהילדים ובכ־3–4% מהמבוגרים. לעיתים אינה מאובחנת בזמן הילדות ומתבטאת לראשונה בגיל מבוגר.'
                  : 'ADHD appears in about 5-7% of children and about 3-4% of adults. Sometimes it is not diagnosed during childhood and manifests for the first time in adulthood.'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-3">{language === 'he' ? 'אבחון' : 'Diagnosis'}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'האבחון מתבצע אצל נוירולוג או פסיכיאטר מומחה, באמצעות שיחה מעמיקה, שאלונים, ולעיתים גם בדיקות ממוחשבות להערכת קשב. אבחון נכון חשוב במיוחד כדי להבדיל בין הפרעת קשב לבין מצבים אחרים (כגון חרדה, דיכאון או בעיות שינה).'
                  : 'Diagnosis is performed by a specialist neurologist or psychiatrist, through in-depth interviews, questionnaires, and sometimes computerized tests to assess attention. Proper diagnosis is especially important to distinguish between ADHD and ADHD and other conditions (such as anxiety, depression, or sleep problems).'
                }
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-3">{language === 'he' ? 'טיפול' : 'Treatment'}</h4>
              <p className="text-gray-600 leading-relaxed mb-2">
                {language === 'he'
                  ? 'הטיפול בהפרעת קשב וריכוז משלב לרוב כמה גישות:'
                  : 'Treatment for ADHD usually combines several approaches:'
                }
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                {(language === 'he' 
                  ? [
                    'טיפול תרופתי – תרופות ממריצות או לא ממריצות, בהתאמה אישית.',
                    'טיפול התנהגותי וקוגניטיבי – ללימוד אסטרטגיות ארגון, תכנון וניהול זמן.',
                    'הדרכת הורים או ליווי למבוגרים – להתמודדות טובה יותר בחיי היומיום.',
                    'שינויים באורח החיים – פעילות גופנית, תזונה מאוזנת ושינה מספקת תורמים משמעותית.'
                  ]
                  : [
                    'Medication therapy – stimulant or non-stimulant medications, individually tailored.',
                    'Behavioral and cognitive therapy – to learn organizational, planning, and time management strategies.',
                    'Parent training or adult coaching – for better coping in daily life.',
                    'Lifestyle changes – physical activity, balanced nutrition, and adequate sleep contribute significantly.'
                  ]
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h4>
              <p className="text-gray-600 leading-relaxed">
                {language === 'he'
                  ? 'הפרעת קשב וריכוז היא מצב שכיח, אך בהחלט ניתן לטפל בו ולהחזיר שליטה ותפקוד מלא. אבחון נכון ובניית תוכנית טיפול מותאמת מאפשרים לילדים ולמבוגרים לממש את יכולותיהם, לשפר את איכות חייהם ולהרגיש שהם מנהלים את הקשב – ולא להפך.'
                  : 'ADHD is a common condition, but it is definitely treatable and can restore full control and function. Proper diagnosis and building a tailored treatment plan enable children and adults to realize their abilities, improve their quality of life, and feel that they are managing their attention – not the other way around.'
                }
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'נוירולוגיה כללית' : 'General Neurology'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'ייעוצים למגוון רחב של תסמינים ומצבים נוירולוגיים הדורשים אבחון מומחה.'
                  : 'Consultations for a wide range of neurological symptoms and conditions requiring expert diagnosis.'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'סחרחורת וורטיגו' : 'Dizziness and vertigo'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'חוסר תחושה, עקצוצים וחולשה' : 'Numbness, tingling, and weakness'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'הפרעות תנועה ורעד' : 'Movement disorders and tremors'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'חששות בנוגע לזיכרון' : 'Memory Concerns'}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'הערכות לביטוח לאומי' : 'Assessments for Social Security'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'מתן הערכות ודוחות נוירולוגיים מפורטים לתביעות נכות וביטוח.'
                  : 'Providing detailed neurological evaluations and reports for disability and insurance claims.'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'ראיות רפואיות אובייקטיביות' : 'Objective medical evidence'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'הערכת יכולת תפקודית' : 'Functional capacity assessment'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'דיווח מפורט לצרכים משפטיים וביטוחיים' : 'Detailed legal and insurance reporting'}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Conditions */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'הפרעות קוגניטיביות' : 'Cognitive Disorders'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'he'
                ? 'טיפול מומחה במצבים המשפיעים על הזיכרון, החשיבה והתפקוד הקוגניטיבי, מדאגות קלות ועד אבחונים מורכבים.'
                : 'Expert care for conditions affecting memory, thinking, and cognitive function, from mild concerns to complex diagnoses.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'he' ? 'חששות בנוגע לזיכרון' : 'Memory Concerns'}</h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'הערכה מקיפה לאובדן זיכרון, שכחה ושינויים קוגניטיביים אחרים.'
                  : 'Comprehensive evaluation for memory loss, forgetfulness, and other cognitive changes.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'he' ? 'הערכת דמנציה' : 'Dementia Evaluation'}</h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'אבחון מומחה למחלת אלצהיימר, FTD וסוגי דמנציה אחרים.'
                  : "Expert diagnosis for Alzheimer's disease, FTD, and other types of dementia."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'he' ? 'ליקוי קוגניטיבי מתון (MCI)' : 'Mild Cognitive Impairment (MCI)'}</h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'איתור מוקדם ואסטרטגיות ניהול לסיוע בשימור התפקוד הקוגניטיבי.'
                  : 'Early detection and management strategies to help preserve cognitive function.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'טיפול נוירולוגי מומחה כאשר אתם זקוקים לו' : 'Expert Neurological Care When You Need It'}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'קבלו הערכה נוירולוגית מקיפה ותוכניות טיפול מותאמות אישית מנוירולוג מנוסה.'
              : 'Get comprehensive neurological evaluation and personalized treatment plans from an experienced neurologist.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Book Consultation'}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-xl">
              {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
