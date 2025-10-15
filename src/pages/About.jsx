import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Award, Users, MapPin, Calendar, Star, Languages, Shield } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';

const credentialIcons = [GraduationCap, Award, Star, Users, Shield];

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'he' ? 'חזרה לעמוד הראשי' : 'Back to Home'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.about.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.about.title2}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.about.p1}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.credentials.map((text, index) => {
                const Icon = credentialIcons[index];
                const isFellowship = text.includes('Fellowship in Headache and Facial Pain') || text.includes('התמחות-על ברפואת כאבי ראש ופנים');
                
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    </div>
                    {isFellowship ? (
                      <a 
                        href="https://hartfordhealthcare.org/health-professionals/education/residencies-fellowships/headache-and-facial-pain-fellowship#:~:text=Our%20faculty%20takes%20an%20active,starts%20July%201%20each%20year."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 font-medium underline transition-colors cursor-pointer"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-gray-700 font-medium">{text}</span>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Languages */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Languages className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </div>
                <div>
                    <span className="text-gray-700 font-bold">{t.about.languages.title}</span>
                    <p className="text-gray-600">{t.about.languages.list}</p>
                </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">
              <Calendar className={`w-5 h-5 ${language === 'he' ? 'ml-2' : 'mr-2'}`} />
              {t.about.button}
            </Button>
          </div>

          {/* Visual */}
          <div className="space-y-8">
            {/* Doctor Photo */}
            <Card className="overflow-hidden bg-white shadow-xl border-0">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gray-100">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68acaf78ac2c3a563be00962/a0dd877d9_PXL_20231116_200655805.jpg"
                    alt="Dr. Eyal Maoz Halevy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t.about.title2}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    <a href="https://americanheadachesociety.org/about/awards/frontiers-in-headache-research-scholarship-award" target="_blank" rel="noopener noreferrer">{language === 'he' ? ' בכנס של איגוד כאבי הראש האמריקאי 2023' : 'At a professional medical conference 2023'}</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="p-8 bg-gradient-to-br from-white to-blue-50 shadow-xl border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t.about.locationCard.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t.about.locationCard.address1}<br />
                      {t.about.locationCard.address2}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        {t.about.locationCard.parking}
                      </div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {t.about.locationCard.accessibility}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'מוכנים לפגוש את ד"ר אייל מעוז הלוי?' : 'Ready to Meet Dr. Eyal Maoz Halevy?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'קבלו טיפול נוירולוגי מומחה מנוסה עם ניסיון עשיר באבחון וטיפול במגוון רחב של מצבים נוירולוגיים.'
              : 'Get expert neurological care from an experienced specialist with extensive experience in diagnosing and treating a wide range of neurological conditions.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Book Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
