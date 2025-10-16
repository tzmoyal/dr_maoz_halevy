
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Award, ExternalLink, MessageCircleIcon } from "lucide-react";
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" lang={language} dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Background Image - Decorative */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
        }}
        role="img"
        aria-label={language === 'he' ? 'רקע דקורטיבי - תמונה רפואית' : 'Decorative background - medical image'}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-50/95" />
      
      {/* Neural Network Pattern Overlay - Decorative */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2"/>
            </radialGradient>
          </defs>
          {/* Neural network nodes */}
          <circle cx="100" cy="150" r="4" fill="url(#nodeGradient)"/>
          <circle cx="300" cy="100" r="6" fill="url(#nodeGradient)"/>
          <circle cx="500" cy="200" r="5" fill="url(#nodeGradient)"/>
          <circle cx="700" cy="120" r="4" fill="url(#nodeGradient)"/>
          <circle cx="900" cy="180" r="6" fill="url(#nodeGradient)"/>
          <circle cx="1100" cy="140" r="5" fill="url(#nodeGradient)"/>
          
          <circle cx="150" cy="350" r="5" fill="url(#nodeGradient)"/>
          <circle cx="350" cy="300" r="4" fill="url(#nodeGradient)"/>
          <circle cx="550" cy="400" r="6" fill="url(#nodeGradient)"/>
          <circle cx="750" cy="320" r="5" fill="url(#nodeGradient)"/>
          <circle cx="950" cy="380" r="4" fill="url(#nodeGradient)"/>
          
          <circle cx="200" cy="550" r="6" fill="url(#nodeGradient)"/>
          <circle cx="400" cy="500" r="5" fill="url(#nodeGradient)"/>
          <circle cx="600" cy="600" r="4" fill="url(#nodeGradient)"/>
          <circle cx="800" cy="520" r="6" fill="url(#nodeGradient)"/>
          <circle cx="1000" cy="580" r="5" fill="url(#nodeGradient)"/>
          
          {/* Neural network connections */}
          <path d="M100 150 L300 100" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M300 100 L500 200" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M500 200 L700 120" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M700 120 L900 180" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M900 180 L1100 140" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          
          <path d="M150 350 L350 300" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M350 300 L550 400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M550 400 L750 320" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M750 320 L950 380" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          
          <path d="M200 550 L400 500" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M400 500 L600 600" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M600 600 L800 520" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M800 520 L1000 580" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
          
          {/* Vertical connections */}
          <path d="M300 100 L350 300" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M500 200 L550 400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M700 120 L750 320" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M900 180 L950 380" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          
          <path d="M350 300 L400 500" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M550 400 L600 600" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M750 320 L800 520" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2"/>
        </svg>
      </div>

      {/* Background Pattern - Decorative */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className={`flex flex-col items-center gap-12 lg:gap-16 lg:flex-row`}>
          {/* Content */}
          <div className={`space-y-8 max-w-3xl ${language === 'he' ? 'text-right' : 'text-left'}`}>
            <header className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-bold text-gray-900 leading-tight`}>
                {t.hero.title1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.hero.title2}</span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium ${language === 'he' ? '' : ''}`}>
                {t.hero.description}
              </p>
              {t.hero.description2 && (
                <p className={`text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium ${language === 'he' ? '' : ''}`}>
                  {t.hero.description2}
                </p>
              )}
            </header>
            <nav className={`flex flex-col sm:flex-row gap-4 justify-start`} aria-label={language === 'he' ? 'פעולות ראשיות' : 'Main actions'}>
              <a href="#contact" aria-label={language === 'he' ? 'קבעו פגישת ייעוץ' : 'Schedule consultation'}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className={`w-5 h-5 ${language === 'he' ? 'ml-2' : 'mr-2'}`} />
                  {t.hero.button1}
                </Button>
              </a>
              <a href="https://wa.me/972502804723" target="_blank" rel="noopener noreferrer" aria-label={language === 'he' ? 'שלח הודעה בווטסאפ' : 'Send WhatsApp message'}>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-300">
                  <MessageCircleIcon className={`w-5 h-5 ${language === 'he' ? 'ml-2' : 'mr-2'}`} />
                  {t.hero.button2}
                </Button>
              </a>
              <a href="tel:035496949" aria-label={language === 'he' ? 'התקשרו עכשיו' : 'Call now'}>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-300">
                  <Phone className={`w-5 h-5 ${language === 'he' ? 'ml-2' : 'mr-2'}`} />
                  {t.hero.button3}
                </Button>
              </a>
            </nav>
            <div className={`flex items-center gap-6 text-gray-700 justify-start`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{t.hero.location}</span>
              </div>
            </div>
          </div>
           {/* RIGHT: Hero Image (replaces Reel in the two-column area) */}
           <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <picture>
              <source
                type="image/avif"
                srcSet="/assets/optimized/hero-image-400.avif 400w, /assets/optimized/hero-image-800.avif 800w, /assets/optimized/hero-image-1200.avif 1200w"
              />
              <source
                type="image/webp"
                srcSet="/assets/optimized/hero-image-400.webp 400w, /assets/optimized/hero-image-800.webp 800w, /assets/optimized/hero-image-1200.webp 1200w"
              />
              <img
                src="/assets/optimized/hero-image-800.webp"
                alt={language === 'he' ? 'ד"ר אייל מעוז הלוי - נוירולוג ומומחה לכאבי ראש' : 'Dr. Eyal Maoz Halevy - Neurologist and Headache Specialist'}
                className="w-[280px] sm:w-[360px] lg:w-[420px] aspect-[3/4] object-cover rounded-2xl shadow-2xl ring-1 ring-black/5"
                width="420"
                height="560"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                decoding="async"
                loading="eager"
              />
            </picture>
          </div>
        </div>

        {/* BELOW: Centered Facebook Reel */}
        <section className="mt-12 lg:mt-16 flex justify-center" aria-labelledby="video-heading">
          <h2 id="video-heading" className="sr-only">
            {language === 'he' ? 'סרטון מידע' : 'Information Video'}
          </h2>
          <div className="rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white/70 backdrop-blur">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F997492598398317%2F&show_text=true&width=360&t=0"
              width="360"
              height="660"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={language === 'he' ? 'סרטון פייסבוק - מידע על הטיפול' : 'Facebook video - Treatment information'}
              aria-label={language === 'he' ? 'סרטון מידע על הטיפול בכאבי ראש' : 'Video about headache treatment'}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
