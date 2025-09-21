import { useLanguage } from './LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const { t, language } = useLanguage();

  const faqData = {
    en: [
      {
        question: "What types of headaches does Dr. Halevy treat?",
        answer: "Dr. Halevy specializes in treating migraines, tension headaches, cervicogenic headaches, cluster headaches, facial pain, and other neurological disorders. He provides comprehensive diagnosis and personalized treatment plans for all headache conditions."
      },
      {
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment by calling 03-5496949, sending a WhatsApp message to 050-2804723, or filling out the contact form on our website. We typically respond within 2 hours during business hours."
      },
      {
        question: "What should I expect during my first visit?",
        answer: "During your first visit, Dr. Halevy will conduct a thorough neurological examination, review your medical history, discuss your symptoms in detail, and develop a personalized treatment plan. The consultation typically lasts 45-60 minutes."
      },
      {
        question: "Do you accept insurance?",
        answer: "We operate as a private practice. Please contact us to discuss payment options and any insurance coverage questions you may have. We can provide documentation for insurance reimbursement."
      },
      {
        question: "What languages does Dr. Halevy speak?",
        answer: "Dr. Halevy is fluent in Hebrew, English, and Russian, ensuring clear communication with patients from diverse backgrounds."
      },
      {
        question: "Where is the clinic located?",
        answer: "Our clinic is located at Weizmann St 14 (Weizmann Tower), 18th Floor, Tel Aviv-Jaffa. Parking is available nearby, and we're easily accessible by public transportation."
      }
    ],
    he: [
      {
        question: "איזה סוגי כאבי ראש ד\"ר הלוי מטפל?",
        answer: "ד\"ר הלוי מתמחה בטיפול במיגרנות, כאבי ראש מתחיים, כאבי ראש צוואריים, כאבי ראש מקבציים, כאבי פנים והפרעות נוירולוגיות אחרות. הוא מספק אבחון מקיף ותוכניות טיפול מותאמות אישית לכל מצבי כאב הראש."
      },
      {
        question: "איך אני קובע תור?",
        answer: "ניתן לקבוע תור בטלפון 03-5496949, שליחת הודעת וואטסאפ ל-050-2804723, או מילוי טופס יצירת הקשר באתר שלנו. אנו בדרך כלל מגיבים תוך שעתיים בשעות העבודה."
      },
      {
        question: "מה לצפות בביקור הראשון?",
        answer: "בביקור הראשון, ד\"ר הלוי יבצע בדיקה נוירולוגית מקיפה, יעבור על ההיסטוריה הרפואית שלכם, ידון בתסמינים בפירוט, ויפתח תוכנית טיפול מותאמת אישית. הייעוץ נמשך בדרך כלל 45-60 דקות."
      },
      {
        question: "האם אתם מקבלים ביטוח?",
        answer: "אנו פועלים כמרפאה פרטית. אנא צרו עמנו קשר לדיון באפשרויות התשלום וכל שאלה הנוגעת לכיסוי ביטוחי. אנו יכולים לספק תיעוד להחזר ביטוחי."
      },
      {
        question: "איזה שפות ד\"ר הלוי דובר?",
        answer: "ד\"ר הלוי שולט בעברית, אנגלית ורוסית, ומבטיח תקשורת ברורה עם מטופלים מרקעים מגוונים."
      },
      {
        question: "איפה המרפאה ממוקמת?",
        answer: "המרפאה שלנו ממוקמת ברח' ויצמן 14 (מגדל ויצמן), קומה 18, תל אביב-יפו. חניה זמינה בסביבה, ואנחנו נגישים בקלות בתחבורה ציבורית."
      }
    ]
  };

  const faqs = faqData[language];

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'he' ? 'שאלות נפוצות' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'he' 
              ? 'תשובות לשאלות הנפוצות ביותר על הטיפול בכאבי ראש ופנים'
              : 'Answers to the most common questions about headache and facial pain treatment'
            }
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;
