import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Headphones, Neck, Flame, AlertTriangle, Smile, Activity, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../components/LanguageContext';

const serviceIcons = [
  Brain,        // Migraine Management - Brain/neurological
  Headphones,   // Tension Headache - Stress/tension relief
  Neck,         // Cervicogenic Headache - Neck/spine related
  Flame,        // Cluster Headache - Intense, burning pain
  AlertTriangle, // Other Headache Disorders - Complex/rare conditions
  Smile,        // Facial Pain - Face/trigeminal related
  Activity      // Other Neurological Disorders - General neurological activity
];

const serviceColors = [
  "from-blue-500 to-indigo-600",    // Migraine - Professional blue
  "from-purple-500 to-pink-600",    // Tension - Calming purple
  "from-teal-500 to-cyan-600",      // Cervicogenic - Soothing teal
  "from-red-500 to-orange-600",     // Cluster - Intense red (severe pain)
  "from-amber-500 to-yellow-600",   // Other Headache - Warning amber
  "from-green-500 to-emerald-600",  // Facial Pain - Gentle green
  "from-slate-500 to-gray-600"      // Neurological - Professional gray
];

const clickableServices = {
  0: 'MigraineTreatment',
  1: 'TensionHeadache',
  2: 'CervicogenicHeadache',
  3: 'ClusterHeadache',
  4: 'OtherHeadacheDisorders',
  5: 'FacialPain',
  6: 'OtherNeurologicalDisorders'
};

export default function Services() {
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
            {t.services.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.services.title2}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.services.description}
          </p>
          <a href="/#contact"> 
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl">
              <Calendar className="w-5 h-5 mr-2" />
              {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
            </Button>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const pageLink = clickableServices[index];
            
            const cardContent = (
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-white h-full">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${serviceColors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      {pageLink && (
                        <div className="pt-2">
                          <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          {language === 'he' ? 'למידע נוסף' : 'Learn More →'} 
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <div key={index}>
                {pageLink ? (
                  <Link to={createPageUrl(pageLink)} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === 'he' ? 'מוכנים להתחיל את הטיפול?' : 'Ready to Start Your Treatment?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'he'
              ? 'קבלו הערכה מקצועית ותוכנית טיפול מותאמת אישית מנוירולוג מומחה.'
              : 'Get a professional evaluation and personalized treatment plan from an expert neurologist.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                <Calendar className="w-5 h-5 mr-2" />
                {language === 'he' ? 'קבעו פגישת ייעוץ' : 'Book Consultation'}
              </Button>
            </a>
            <a href="tel:035496949">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl">
                {language === 'he' ? 'התקשרו עכשיו: 03-5496949' : 'Call Now: 03-5496949'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
