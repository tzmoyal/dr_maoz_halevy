
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Target, Calendar, CheckCircle, Info, Heart, Shield as VestibularIcon } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function MigraineTreatment() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a
            href={createPageUrl('Home')}
            onClick={(e) => {
              e.preventDefault();
              const y = window.scrollY;
              navigate('/', { state: { restoreScrollY: y } });
            }}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לעמוד הראשי' : 'Back to Home'}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'טיפול מומחה' : 'Specialized Treatment'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                ניהול
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> מיגרנות </span>
                מקיף
              </>
            ) : (
              <>
                Comprehensive
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Migraine </span>
                Management
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he' 
              ? 'תוכניות טיפול מתקדמות ומותאמות אישית המשלבות תרופות מונעות, שינויים באורח החיים וטיפולים חדשניים כדי לעזור לכם להשיב את השליטה על המיגרנות שלכם.'
              : 'Advanced, personalized treatment plans combining preventive medications, lifestyle modifications, and cutting-edge therapies to help you regain control over your migraines.'}
          </p>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'he' ? 'מהי מיגרנה?' : 'What is a Migraine?'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he' 
                  ? 'מיגרנה היא אחת מתסמונות הכאב ראש השכיחות והמשמעותיות ביותר. מדובר במחלה נוירולוגית כרונית המתבטאת בהתקפים חוזרים של כאב ראש חזק, בצד אחד או שני הצדדים של הראש, המלווה בבחילות ולפעמים הקאות, רגישות לאור, ורעש, ואף בהפרעות ראייה.'
                  : 'A migraine is one of the most common and significant headache syndromes. It is a chronic neurological disease characterized by recurring attacks of severe headache, on one or both sides of the head, accompanied by nausea, sometimes vomiting, and sensitivity to light and noise, and even visual disturbances.'}
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'he' ? 'מי סובל ממיגרנה?' : 'Who Suffers from Migraines?'}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'מיגרנה מופיעה אצל כ־12% מהאוכלוסייה, והיא שכיחה יותר בנשים(18%) מאשר בגברים (6%). גיל ההופעה הטיפוסי הינו בין גיל 20 ל40, אך מיגרנה יכולה להופיע בכל גיל ועלולה להימשך לאורך שנים, עם תקופות של החמרה או הקלה.'
                  : 'Migraines affect about 12% of the population and are more common in women (18%) than in men (6%). The typical age of onset is between 20 and 40, but migraines can occur at any age and may persist for years, with periods of exacerbation or remission.'}
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {language === 'he' ? 'מה גורם להתקף?' : 'What Causes an Attack?'}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הגורמים המדויקים למיגרנה אינם חד־משמעיים, אך ידוע על שילוב של תורשה יחד עם גורמים סביבתיים וטריגרים שונים, כגון:'
                  : 'The exact causes of migraines are not fully understood, but it is known to involve a combination of genetic predisposition and various environmental factors and triggers, such as:'}
              </p>
              <ul className="space-y-2 text-gray-600">
                {(language === 'he' 
                  ? ['מתח נפשי או רגשי', 'חוסר שינה או שינה לא סדירה', 'שתיית מים לא מספיקה', 'שינויים הורמונליים', 'מזונות או משקאות מסוימים (כגון שוקולד, יין אדום, קפאין)', 'שינויים במזג האוויר']
                  : ['Emotional or mental stress', 'Lack of sleep or irregular sleep patterns', 'Insufficient water intake', 'Hormonal changes', 'Certain foods or drinks (e.g., chocolate, red wine, caffeine)', 'Changes in the weather']
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'he' ? 'איך ניתן לטפל?' : 'How Can It Be Treated?'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'הטיפול במיגרנה מתחלק לשניים:'
                  : 'Migraine treatment is divided into two categories:'}
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-700 font-medium">
                    {language === 'he'
                      ? '1. טיפול בזמן התקף – להפחתת הכאב והסימפטומים.'
                      : '1. Acute treatment – to reduce pain and symptoms during an attack.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    {language === 'he'
                      ? '2. טיפול מונע – להפחתת מספר הימים עם כאב ראש, את חומרת ההתקפים ולשפר את התגובה לטיפול בזמן התקף.'
                      : '2. Preventive treatment – to reduce the number of headache days, decrease the severity of attacks, and improve the response to acute treatment.'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'כיום קיימים מגוון טיפולים למיגרנה החל מתרופות קלאסיות ועד לתרופות ביולוגיות חדשניות, טיפול בבוטולינום טוקסין (בוטוקס), וטיפול בחסמים עצביים. כל זה בשילוב שיפור אורח החיים. התאמת הטיפול נעשית באופן אישי לפי הצרכים והמאפיינים של כל מטופל.'
                  : 'Today, a variety of treatments are available, from classic medications to innovative biologic drugs, botulinum toxin (Botox) treatments, and nerve blocks, all combined with lifestyle improvements. Treatment is personally tailored to each patient\'s needs and characteristics.'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Specialized Migraine Conditions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
            {language === 'he' ? 'מצבי מיגרנה מיוחדים' : 'Specialized Migraine Conditions'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to={createPageUrl('MigraneInPregnancy')}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'he' ? 'מיגרנה בהריון' : 'Migraine in Pregnancy'}</h3>
                      <p className="text-gray-600">{language === 'he' ? 'ניהול בטוח ויעיל במהלך הריון והנקה.' : 'Safe and effective management during pregnancy and breastfeeding.'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to={createPageUrl('VestibularMigraine')}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <VestibularIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{language === 'he' ? 'מיגרנה וסטיבולרית' : 'Vestibular Migraine'}</h3>
                      <p className="text-gray-600">{language === 'he' ? 'טיפול מומחה במיגרנות הגורמות לסחרחורת.' : 'Expert treatment for migraines that cause dizziness.'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Bottom Line Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {language === 'he' ? 'בשורה התחתונה' : 'The Bottom Line'}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {language === 'he'
                  ? 'מיגרנה היא מחלה מורכבת, אך בהחלט ניתנת לטיפול ולניהול נכון. אבחון מקצועי ובניית תוכנית טיפול מותאמת יכולים להפחית משמעותית את תדירות ועוצמת ההתקפים – ולאפשר חזרה לשגרת חיים רגילה ובריאה.'
                  : 'Migraine is a complex disease, but it is certainly treatable and manageable. A professional diagnosis and a tailored treatment plan can significantly reduce the frequency and intensity of attacks, allowing a return to a normal, healthy life.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'מוכנים לקחת שליטה על המיגרנות שלכם?' : 'Ready to Take Control of Your Migraines?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'he' ? 'קבעו פגישת ייעוץ כדי לדון באסטרטגיות ניהול מיגרנה מותאמות אישית לצרכים הספציפיים שלכם.' : 'Schedule your consultation to discuss personalized migraine management strategies tailored to your specific needs.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו תור' : 'Book Appointment'}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl">
              {language === 'he' ? 'התקשרו: 03-5496949' : 'Call Now: 03-5496949'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
