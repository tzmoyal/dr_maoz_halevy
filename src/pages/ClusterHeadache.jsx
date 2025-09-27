
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Zap, Calendar, CheckCircle, Info, Clock, Shield } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function ClusterHeadache() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/Services"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לתחומי טיפול' : 'Back to Services'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 backdrop-blur-sm text-red-700 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            {language === 'he' ? 'אחד מכאבי הראש החזקים ביותר' : 'One of the Most Severe Headaches'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                הקלה בכאב ראש
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"> מקבצי </span>
              </>
            ) : (
              <>
                Expert Care for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"> Cluster Headache </span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'טיפול מומחה בכאב הראש הקשה והחד ביותר הידוע לרפואה. אנו מספקים טיפולים מתקדמים ותמיכה מקיפה לשבירת מחזורי הכאב והחזרת איכות החיים.'
              : 'Expert treatment for the most severe and intense headache known to medicine. We provide advanced therapies and comprehensive support to break pain cycles and restore quality of life.'
            }
          </p>

          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ דחופה' : 'Schedule Urgent Consultation'}
          </Button>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'הבנת כאב ראש מקבצי' : 'Understanding Cluster Headaches'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'כאב ראש מקבצי (Cluster Headache) הוא אחד מסוגי כאב הראש החזקים ביותר ברפואה. מדובר בכאב פתאומי, עז מאוד, המופיע בצד אחד של הראש – סביב העין והרקה – ומלווה בלפחות מאחד הבאים: בצניחה של העפעף, שינוי בגודל האישון, באודם ודמעת בעין, תחושת גוף זר בעין, נחיר גדוש בצד הכואב ותחושת אי־שקט.'
                  : 'Cluster Headache is one of the most severe types of headaches known in medicine. It involves sudden, extremely intense pain that appears on one side of the head – around the eye and temple – and is accompanied by at least one of the following: a drooping eyelid, a change in pupil size, eye redness and tearing, a foreign body sensation in the eye, a congested nostril on the painful side, and a feeling of restlessness.'}
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' 
                  ? ['כאב חד ובוער, לעיתים מתואר כ"סכין חמה" או "מקדח" בעין', 'התקפים קצרים (15 דקות עד 3 שעות) אך עזים במיוחד', 'מופיע באשכולות (מחזורים) - מספר התקפים ביום למשך שבועות או חודשים', 'הכאב מתואר לעיתים קרובות כבלתי נסבל, ולכן חשוב לאבחן ולטפל בו נכון.']
                  : ['Sharp, burning pain, often described as a "hot knife" or "drill" in the eye', 'Short attacks (15 minutes to 3 hours) but extremely intense', 'Occurs in clusters (cycles) - multiple attacks per day for weeks or months', 'The pain is often described as unbearable, therefore it is important to identify and treat it correctly.']
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{language === 'he' ? 'מאפיינים ייחודיים' : 'Unique Characteristics'}</h3>
              <ul className="space-y-2 text-gray-600">
                 {(language === 'he'
                  ? ['התקפים מופיעים באותה שעה כל יום (לעיתים כ"שעון מעורר")', 'נדיר יחסית - פוגע באחד מכל 1000 אנשים', 'שכיח יותר אצל גברים (3:1) בגילים 20-40', 'יכול להיות אפיזודי (עונתי) או כרוני']
                  : ['Attacks occur at the same time each day (sometimes like an "alarm clock")', 'Relatively rare - affects about 1 in 1000 people', 'More common in men (3:1 ratio) aged 20-40', 'Can be episodic (seasonal) or chronic']
                 ).map((item, index) => (
                   <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                 ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{language === 'he' ? 'גורמים וטריגרים' : 'Causes and Triggers'}</h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'he'
                  ? 'הגורם המדויק אינו ידוע, אך ההשערה היא שמדובר בשיבוש בפעילות ההיפותלמוס במוח, המשפיע על מנגנוני השעון הביולוגי. ידוע כי עישון וחשיפה לעישון מהווים גורם סיכון.'
                  : 'The exact cause is unknown, but it is hypothesized to be a disruption in the activity of the hypothalamus in the brain, which affects the biological clock mechanisms. Smoking and exposure to smoking are known to be risk factors.'
                }
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'he' ? 'אפשרויות טיפול מתקדמות' : 'Advanced Treatment Options'}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הטיפול בכאב ראש מקבצי הינו יחודי ודורש התייחסות מהירה:'
                  : 'The treatment for cluster headache is unique and requires a rapid response:'
                }
              </p>
              <div className="space-y-4 mb-4">
                <ul className="space-y-2 text-gray-600">
                  {(language === 'he'
                    ? ['טיפול בזמן התקף – שאיפת חמצן בריכוז גבוה או תרופות ייעודיות להקלת הכאב.', 'טיפול מונע – תרופות שניתנות לתקופה מסוימת כדי לקצר את "עונת ההתקפים" ולהפחית את תדירותם.', 'במקרים מסוימים נשקלות גם שיטות טיפול מתקדמות יותר, כולל טיפולים פולשניים.']
                    : ['Acute treatment – inhalation of high-concentration oxygen or specific medications to relieve the pain.', 'Preventive treatment – medications given for a certain period to shorten the "cluster season" and reduce their frequency.', 'In some cases, more advanced treatment methods are also considered, including invasive procedures.']
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Line Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className={`flex flex-col md:flex-row items-center gap-6 text-center ${language === 'he' ? 'md:text-right' : 'md:text-left'}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'כאב ראש מקבצי אמנם נדיר, אך הוא אחד מכאבי הראש הקשים ביותר. אבחון נכון אצל מומחה וטיפול מהיר ומותאם אישית יכולים להביא להקלה משמעותית, לקיצור תקופות הכאב, למנוע התקפים עתידיים, ולהחזיר שליטה ואיכות חיים למטופלים.'
                  : 'Although cluster headache is rare, it is one of the most severe types of headaches. A correct diagnosis by a specialist and prompt, personalized treatment can bring significant relief, shorten pain periods, prevent future attacks, and restore control and quality of life for patients.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'אל תסבלו בשקט - קבלו עזרה מומחה' : 'Don\'t Suffer in Silence - Get Expert Help'}
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {language === 'he' 
              ? 'כאב ראש מקבצי דורש טיפול מיידי ומומחה. קבעו פגישת ייעוץ דחופה לקבלת תוכנית טיפול מותאמת שתעזור לכם לצאת מהמחזור הקשה הזה.'
              : 'Cluster headaches require immediate expert treatment. Schedule an urgent consultation to receive a tailored treatment plan that will help you break free from this devastating cycle.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו ייעוץ דחוף' : 'Book Urgent Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" variant="outline" className="border-2 border-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו מיד: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
