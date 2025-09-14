import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Calendar, Shield } from "lucide-react";
import { useLanguage } from './LanguageContext';
// Removed Base44 SendEmail integration

const contactIcons = [Phone, MessageCircle, Mail, MapPin];
const contactColors = [
  "from-blue-500 to-indigo-600",
  "from-green-500 to-emerald-600", 
  "from-indigo-500 to-purple-600",
  "from-purple-500 to-pink-600"
];

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', headacheType: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', headacheType: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.contact.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.contact.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Card className="p-8 bg-white shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact.form.title}</h3>
                <p className="text-gray-600">{t.contact.form.description}</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    {language === 'he' 
                      ? 'הבקשה נשלחה בהצלחה! ניצור עמכם קשר בקרוב.' 
                      : 'Request sent successfully! We will contact you soon.'}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">
                    {language === 'he'
                      ? 'שגיאה בשליחת הבקשה. אנא נסו שוב או צרו קשר טלפונית.'
                      : 'Error sending request. Please try again or contact us by phone.'}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">{t.contact.form.name}</label>
                    <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder={t.contact.form.name_ph} className="border-gray-200 focus:border-blue-600 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">{t.contact.form.phone}</label>
                    <Input 
                      value={formData.phone} 
                      onChange={(e) => handleChange('phone', e.target.value)} 
                      placeholder={t.contact.form.phone_ph} 
                      className="border-gray-200 focus:border-blue-600 rounded-xl" 
                      dir="ltr"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">{t.contact.form.email}</label>
                  <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder={t.contact.form.email_ph} className="border-gray-200 focus:border-blue-600 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">{t.contact.form.headache}</label>
                  <Input value={formData.headacheType} onChange={(e) => handleChange('headacheType', e.target.value)} placeholder={t.contact.form.headache_ph} className="border-gray-200 focus:border-blue-600 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">{t.contact.form.symptoms}</label>
                  <Textarea value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder={t.contact.form.symptoms_ph} className="border-gray-200 focus:border-blue-600 rounded-xl min-h-24" />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl"
                  disabled={isSubmitting}
                >
                  <Calendar className={`w-5 h-5 ${language === 'he' ? 'ml-2' : 'mr-2'}`} />
                  {isSubmitting 
                    ? (language === 'he' ? 'שולח...' : 'Sending...') 
                    : t.contact.form.button}
                </Button>
                <p className="text-xs text-gray-500 text-center">{t.contact.form.privacy}</p>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div className="grid gap-6">
              {t.contact.info.map((info, index) => {
                const Icon = contactIcons[index];
                let linkHref = null;
                const isCall = info.title === 'Call Us' || info.title === 'התקשרו אלינו';
                const isWhatsApp = info.title === 'WhatsApp' || info.title === 'וואטסאפ';
                const isEmail = info.title === 'Email' || info.title === 'אימייל';
                if (isCall) linkHref = 'tel:035496949';
                if (isWhatsApp) linkHref = 'https://wa.me/972502804723';
                if (isEmail) linkHref = 'mailto:office@stroke-il.com';

                const CardInner = (
                  <Card className="border-0 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${contactColors[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h3>
                          <p className={`font-medium break-all ${linkHref ? (isWhatsApp ? 'text-green-600' : 'text-blue-600') : 'text-gray-700'}`}>{info.details}</p>
                          <p className="text-sm text-gray-500">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                if (linkHref) {
                  return (
                    <a
                      key={index}
                      href={linkHref}
                      target={isWhatsApp ? '_blank' : undefined}
                      rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                      aria-label={`${info.title}: ${info.details}`}
                      className="block group cursor-pointer"
                    >
                      {CardInner}
                    </a>
                  );
                }

                return (
                  <div key={index} className="group">
                    {CardInner}
                  </div>
                );
              })}
            </div>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t.contact.insurance.title}</h3>
                    <p className="text-gray-600">{t.contact.insurance.description}</p>
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