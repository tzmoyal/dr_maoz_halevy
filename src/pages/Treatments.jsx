import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Target, Clock, Calendar, CheckCircle, ShieldCheck, Pill, MessageCircle, Zap } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function Treatments() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a
            href="/#areas-of-care"
            onClick={(e) => {
              e.preventDefault();
              navigate('/#areas-of-care');
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'טיפולים מתקדמים' : 'Advanced Treatments'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                טיפולים
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> חדשניים </span>
                לכאבי ראש וכאב
              </>
            ) : (
              <>
                Cutting-Edge
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Headache & Pain </span>
                Procedures
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he' 
              ? 'למטופלים עם כאבי ראש עמידים לטיפול וכאב מורכב, אנו מציעים הליכים מתקדמים וזעיר פולשניים לספק הקלה משמעותית ולשפר את איכות החיים.'
              : 'For patients with treatment-resistant headaches and complex pain, we offer advanced, minimally invasive procedures to provide significant relief and improve quality of life.'
            }
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'התייעצות לגבי טיפולים' : 'Consult About Treatments'}
            </Button>
          </a>
        </div>

        {/* Treatments Details */}
        <div className="space-y-16">
          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'he' ? 'בוטוקס® למיגרנה כרונית' : 'Botox® for Chronic Migraine'}
                </h2>
                {language === 'he' ? (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      בוטוקס ® ובשמו המדעי בוטוליניום טוקסין, הינו טיפול יעיל ומאושר ע"י ה-FDA לטיפול במיגרנה כרונית. בוטקס מוכר לציבור מעולם האסתטיקה, אך בשימוש רפואי נכון הוא מטפל היטב במיגרנה כאשר ניתן אחת ל-12 שבועות, במיוחד אצל אנשים שסובלים גם מכאבי צוואר ואנשים עם רגישות לתרופות.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      יש לציין כי לטיפול קיימים סיכונים כגון דימום או זיהום, או צניחת עפעף. אך בעבודה נכונה, הסיכון לתופעות אלה מצטמצם משמעותית. ד"ר מעוז הלוי הינו מומחה בטיפול בבוטוקס למיגרנה כרונית.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Botox®, scientifically known as botulinum toxin, is an effective FDA-approved treatment for chronic migraine. While Botox is well-known to the public from the aesthetic world, when used correctly in medical treatment, it treats migraines very well when administered once every 12 weeks, especially in people who also suffer from neck pain and people with drug sensitivities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      It should be noted that the treatment has risks such as bleeding, infection, or eyelid drooping. However, with proper technique, the risk of these side effects is significantly reduced. Dr. Maoz Halevy is an expert in Botox treatment for chronic migraine.
                    </p>
                  </>
                )}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'הוכח כמפחית את מספר ימי כאב הראש בכל חודש' : 'Proven to reduce the number of headache days each month'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'הליך מהיר במרפאה המבוצע כל 12 שבועות' : 'Quick, in-office procedure performed every 12 weeks'}</span>
                  </li>
                </ul>
              </div>
              <div className="w-full h-64 md:h-full rounded-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618897585122-995b4cfb48b8?q=80&w=2340&auto=format&fit=crop)'}}></div>
            </CardContent>
          </Card>

          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-64 md:h-full rounded-2xl bg-cover bg-center order-last md:order-first" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1599849503434-b5a4a54c69d4?q=80&w=2340&auto=format&fit=crop)'}}></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'he' ? 'חסמים עצביים ונקודות טריגר' : 'Nerve Blocks and Trigger Points Injections'}
                </h2>
                {language === 'he' ? (
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed mb-4" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      זריקות ממוקדות בראש, פנים והצוואר של חומרי הרדמה מקומיים כגון לידוקאין ובופיווקאין. חסמים עצביים חוסמים את סיגנל הכאב ובזכות תגובתם המהירה לכאב, הם משמשים כטיפול מגשר למיגרנה, וכן כטיפול מניעתי יעיל ובטוח לנשים בהריון עם מיגרנה. כמו כן חסמיים משמשים כטיפול מציל להתקפי כאב ראש מקבצי, וכאבי ראש ראשונים אחרים.
                    </p>
                    <p className="text-gray-600 leading-relaxed" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      בטיפול נכון, הזרקות לנקודות Trigger לשרירי הצוואר והכתפיים מביא להקלה מידית של כאב ותפיסות.
                    </p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Targeted injections in the head, face, and neck using local anesthetics such as lidocaine and bupivacaine. Nerve blocks block pain signals and thanks to their rapid response to pain, they serve as bridging treatment for migraines, as well as effective and safe preventive treatment for pregnant women with migraines. Nerve blocks also serve as rescue treatment for cluster headache attacks and other primary headaches.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With the right care, trigger point injections to the muscles of the neck and shoulders can immediately alleviate pain and tightness.
                    </p>
                  </div>
                )}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'מספק הקלה מהירה, לעיתים תוך דקות עד שעות' : 'Provides rapid relief, often within minutes to hours'}</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'זעיר פולשני עם פרופיל סיכון נמוך, מבוצע במרפאה' : 'Minimally invasive with a low risk profile, performed in-office'}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'he' ? 'מעכבי CGRP' : 'CGRP Inhibitors'}
                </h2>
                {language === 'he' ? (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      קבוצת תרופות החדשנית ביותר בעולם לטיפול במיגרנה. בניגוד לתרופות הקלאסיות, תרופות אלו ממוקדות, יעילות ובעלות פרופיל בטיחות גבוהה עם תופעות לוואי מינימליות. קיימות כתרופות למניעה במתן כדור, זריקה או עירוי והן תרופות לטיפול בהתקף חריף במתן כדור או ספריי לאף.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      בשנת 2024 הומלצו כטיפול קו ראשון על ידי האיגוד האמריקאי לכאבי ראש.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The most innovative group of drugs in the world for migraine treatment. Unlike classic drugs, these medications are targeted, effective, and have a high safety profile with minimal side effects. They exist as preventive medications given as pills, injections, or infusions, as well as medications for acute attack treatment given as pills or nasal spray.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      In 2024, they were recommended as first-line treatment by the American Headache Society.
                    </p>
                  </>
                )}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Pill className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <a 
                      href="https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.14692" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      {language === 'he' ? 'טיפול קו ראשון המומלץ על ידי האגודה האמריקאית לכאבי ראש (2024)' : 'First-line treatment recommended by American Headache Society (2024)'}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'טיפול ממוקד עם תופעות לוואי מינימליות' : 'Targeted therapy with minimal side effects'}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-64 md:h-full rounded-2xl bg-cover bg-center order-last md:order-first" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2340&auto=format&fit=crop)'}}></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'he' ? 'היפנוזה רפואית' : 'Medical Hypnosis'}
                </h2>
                {language === 'he' ? (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      היפנוזה רפואית היא שיטה מבוססת שבה לומדים להיכנס למצב של ריכוז והרפיה עמוקה, המאפשר להפחית את עוצמת כאבי הראש. מדובר בטיפול בטוח וללא תופעות לוואי, שיכול להשתלב לצד תרופות או להוות פתרון כאשר טיפול אחר לא מספק מענה.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                      ד"ר מעוז הלוי הינו בעל הכשרה בהיפנוזה ובעל רישון להיפנוזה ממשרד הבריאות.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Medical hypnosis is an evidence-based method in which one learns to enter a state of deep concentration and relaxation, allowing for the reduction of headache intensity. This is a safe treatment without side effects that can be integrated alongside medications or serve as a solution when other treatments do not provide adequate relief.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Dr. Maoz Halevy is trained in hypnosis and holds a hypnosis license from the Ministry of Health.
                    </p>
                  </>
                )}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'שיטה מבוססת מחקר להפחתת עוצמת הכאב' : 'Research-based method for pain intensity reduction'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'טיפול בטוח ללא תופעות לוואי' : 'Safe treatment without side effects'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'ניתן לשילוב עם טיפולים רפואיים אחרים' : 'Can be combined with other medical treatments'}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 lg:p-12 bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0 grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full h-64 md:h-full rounded-2xl bg-cover bg-center order-last md:order-first" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559159663-3ce990d36ffe?q=80&w=2340&auto=format&fit=crop)'}}></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {language === 'he' ? 'שיחה' : 'Conversation'}
                </h2>
                {language === 'he' ? (
                  <p className="text-gray-600 leading-relaxed mb-6" dir="rtl" style={{fontFamily: 'Arial, sans-serif'}}>
                    שיחה- ד"ר מעוז הלוי מתעניין בכאב ראש שלכן.ם, במצבים הרפואיים האחרים, בהרגלים והצרכים הייחודיים שלכן/ם – כדי להתאים טיפול אישי, ממוקד ואפקטיבי.
                  </p>
                ) : (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Conversation - Dr. Maoz Halevy takes interest in your headaches, other medical conditions, habits, and unique needs - in order to tailor personal, focused, and effective treatment.
                  </p>
                )}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'הערכה מקיפה של דפוסי כאב הראש הייחודיים שלכם' : 'Comprehensive assessment of your unique headache patterns'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{language === 'he' ? 'תוכנית טיפול מותאמת אישית על בסיס הצרכים הספציפיים שלכם' : 'Personalized treatment plan based on your specific needs'}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' 
              ? 'האם טיפול מתקדם יכול להתאים לכם?'
              : 'Could an Advanced Treatment Be Right for You?'
            }
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'קבעו ייעוץ כדי לקבוע אם אתם מועמדים לבוטוקס®, חסימות עצבים או הליכים מתקדמים אחרים.'
              : 'Schedule a consultation to determine if you are a candidate for Botox®, nerve blocks, or other advanced procedures.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו את הייעוץ שלי' : 'Book My Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}