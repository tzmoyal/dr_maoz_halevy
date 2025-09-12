
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Stethoscope, Shield, Target, Users, Headset, Bone, Heart } from "lucide-react";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from './LanguageContext';

const serviceIcons = [
  Brain, Zap, Bone, Headset, Target, Users, Stethoscope
];

const serviceColors = [
  "from-blue-500 to-indigo-600",
  "from-indigo-500 to-purple-600",
  "from-sky-500 to-blue-600",
  "from-teal-500 to-cyan-600",
  "from-red-500 to-orange-600",
  "from-orange-500 to-yellow-600",
  "from-green-500 to-teal-600"
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
  const { t } = useLanguage();

  return (
    <section id="areas-of-care" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.services.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.services.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const pageLink = clickableServices[index];
            
            const cardContent = (
              <Card className="border-0 bg-gradient-to-br from-gray-50 to-white h-full">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${serviceColors[index]} flex items-center justify-center`}>
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
                          <span className="text-blue-600 font-medium">
                            Learn More →
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
      </div>
    </section>
  );
}
