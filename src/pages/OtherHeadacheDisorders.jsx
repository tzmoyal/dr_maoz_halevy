import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Clock, Target, Calendar, CheckCircle, Zap, AlertTriangle, Shield, Activity, Pill, Stethoscope } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

export default function OtherHeadacheDisorders() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
              to="/#areas-of-care"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'he' ? 'חזרה לעמוד הראשי' : 'Back to Home'}
            </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 backdrop-blur-sm text-teal-700 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            {language === 'he' ? 'אבחון וטיפול מומחה' : 'Specialized Diagnosis & Treatment'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'he' ? (
              <>
                הפרעות כאב ראש
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> אחרות </span>
              </>
            ) : (
              <>
                Other
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> Headache </span>
                Disorders
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {language === 'he'
              ? 'אבחון וטיפול מומחה בצפלגיות אוטונומיות טריגמינליות ותסמונות כאב ראש נדירות הדורשות טיפול נוירולוגי מיוחד.'
              : 'Expert diagnosis and treatment for trigeminal autonomic cephalalgias and rare headache syndromes that require specialized neurological care.'
            }
          </p>

          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-xl">
            <Calendar className="w-5 h-5 mr-2" />
            {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
          </Button>
        </div>

        {/* Main Conditions */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <Card className="p-8 bg-white shadow-xl border-0">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'he' ? 'צפלגיות אוטונומיות טריגמינליות' : 'Trigeminal Autonomic Cephalalgias'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {language === 'he'
                  ? 'קבוצה של הפרעות כאב ראש ראשוניות המאופיינות בכאב חד חזק בצד אחד עם תסמינים אוטונומיים נלווים.'
                  : 'A group of primary headache disorders characterized by severe unilateral pain with associated autonomic features.'
                }
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <Link to={createPageUrl('ClusterHeadache')} className="flex items-start gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="underline">{language === 'he' ? 'כאב ראש מקבצי (אשכולי)' : 'Cluster Headache'}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'תסמונת SUNCT/SUNA' : 'SUNCT/SUNA syndrome'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'המיקרניה הפרוקסיזמלית' : 'Paroxysmal hemicrania'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{language === 'he' ? 'המיקרניה המתמשכת' : 'Hemicrania continua'}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Conditions */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'he' ? 'תסמונות כאב ראש נדירות' : 'Rare Headache Syndromes'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'he'
                ? 'מומחיות מיוחדת באבחון וטיפול בהפרעות כאב ראש נדירות הדורשות ידע נוירולוגי מתקדם.'
                : 'Specialized expertise in diagnosing and treating uncommon headache disorders that require advanced neurological knowledge.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאבי ראש היפניים' : 'Hypnic Headaches'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאבי ראש "שעון מעורר" שמעירים מטופלים משינה בשעות קבועות.'
                  : '"Alarm clock" headaches that wake patients from sleep at consistent times.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">NDPH</h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאב ראש יומי מתמשך חדש - כאבי ראש מתמשכים בהתחלה פתאומית.'
                  : 'New Daily Persistent Headache - sudden onset continuous headaches.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאבי ראש משניים' : 'Secondary Headaches'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'הערכה מקיפה לשלילת גורמים בסיסיים לכאבי ראש.'
                  : 'Comprehensive evaluation to rule out underlying causes of headaches.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאב ראש משימוש יתר בתרופות' : 'Medication Overuse Headache'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאבי ראש ריבאונד הנגרמים משימוש תכוף בתרופות שיכוך כאבים.'
                  : 'Rebound headaches caused by frequent use of pain relief medications.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'לחץ תוך גולגולתי מוגבר' : 'Increased Intracranial Hypertension'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'לחץ גבוה בתוך הגולגולת הגורם לכאבי ראש מתמשכים ובעיות ראייה.'
                  : 'High pressure within the skull causing persistent headaches and vision problems.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'לחץ תוך גולגולתי נמוך ספונטני' : 'Spontaneous Intracranial Hypotension'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'לחץ נמוך של נוזל המוח השדרה הגורם לכאבי ראש יציבתיים שמחמירים בעמידה.'
                  : 'Low cerebrospinal fluid pressure causing positional headaches that worsen when upright.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאב ראש נומולרי' : 'Nummular Headache'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'אזורים בצורת מטבע של כאב ראש כרוני במיקום קבוע על הקרקפת.'
                  : 'Coin-shaped areas of chronic head pain in a fixed location on the scalp.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'כאב ראש לאחר זעזוע מוח' : 'Post Concussion Headache'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאבי ראש מתמשכים לאחר פגיעה מוחית טראומטית או זעזוע מוח.'
                  : 'Persistent headaches following traumatic brain injury or concussion.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'he' ? 'אפיקרניה פוגאקס' : 'Epicrania Fugax'}
              </h3>
              <p className="text-gray-600">
                {language === 'he'
                  ? 'כאב קצר דמוי הלם חשמלי הנע על פני הקרקפת בדפוס ליניארי.'
                  : 'Brief electric shock-like pain moving across the scalp in a linear pattern.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he'
              ? 'קבלו אבחון מומחה לכאבי ראש מורכבים'
              : 'Get Expert Diagnosis for Complex Headaches'
            }
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'אל תתנו לכאבי ראש נדירים או קשים לאבחון להישאר ללא טיפול. קבעו ייעוץ עם מומחה כאבי הראש שלנו.'
              : 'Don\'t let rare or difficult-to-diagnose headaches go untreated. Schedule a consultation with our headache specialist.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו ייעוץ' : 'Book Consultation'}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg rounded-xl">
              {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}