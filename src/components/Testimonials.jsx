import React from 'react';
import { useLanguage } from './LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.testimonials.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.testimonials.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <iframe
                frameBorder="0"
                height="270px"
                width="100%"
                allowFullScreen
                src="https://www.medreviews.co.il/provider/dr-maoz-halevy-eyal/reviews-widget?show-header=true&slide-switch-interval=4500&bg=ffffff&controls-color="
                title="Patient Testimonials"
            ></iframe>
        </div>
      </div>
    </section>
  );
}