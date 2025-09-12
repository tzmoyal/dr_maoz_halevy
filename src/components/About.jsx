
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, MapPin, Calendar, Star, Languages } from "lucide-react";
import { useLanguage } from './LanguageContext';

const credentialIcons = [GraduationCap, Award, Star, Users];

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t.about.title1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.about.title2}</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.p1}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.p2}
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.credentials.map((text, index) => {
                const Icon = credentialIcons[index];
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{text}</span>
                  </div>
                )
              })}
            </div>
            
            {/* Languages */}
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Languages className="w-5 h-5 text-blue-600" />
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
                    {language === 'he' ? 'במהלך כנס רפואי מקצועי' : 'At a professional medical conference'}
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
      </div>
    </section>
  );
}
