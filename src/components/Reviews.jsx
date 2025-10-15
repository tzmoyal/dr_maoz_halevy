import { useLanguage } from './LanguageContext';

const Reviews = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Dr. Halevy's expertise in headache treatment is exceptional. After years of suffering from chronic migraines, his personalized approach finally gave me relief. Highly recommended!",
      date: "2024-08-15"
    },
    {
      name: "David L.",
      rating: 5,
      text: "Professional, thorough, and compassionate. Dr. Halevy took the time to understand my condition and provided effective treatment. The clinic is modern and comfortable.",
      date: "2024-07-22"
    },
    {
      name: "Rachel K.",
      rating: 5,
      text: "Excellent neurologist with great bedside manner. He speaks multiple languages which made communication easy. My tension headaches are now under control.",
      date: "2024-06-10"
    }
  ];

  const hebrewReviews = [
    {
      name: "שרה מ.",
      rating: 5,
      text: "המומחיות של ד\"ר הלוי בטיפול בכאבי ראש היא יוצאת דופן. אחרי שנים של סבל ממיגרנות כרוניות, הגישה המותאמת אישית שלו סוף סוף הביאה לי הקלה. מומלץ בחום!",
      date: "2024-08-15"
    },
    {
      name: "דוד ל.",
      rating: 5,
      text: "מקצועי, יסודי וחם. ד\"ר הלוי הקדיש זמן להבין את המצב שלי וסיפק טיפול יעיל. המרפאה מודרנית ונוחה.",
      date: "2024-07-22"
    },
    {
      name: "רחל ק.",
      rating: 5,
      text: "נוירולוג מעולה עם גישה נהדרת למטופלים. הוא דובר מספר שפות מה שהקל על התקשורת. כאבי הראש המתחיים שלי עכשיו תחת שליטה.",
      date: "2024-06-10"
    }
  ];

  const currentReviews = language === 'he' ? hebrewReviews : reviews;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'he' ? 'מה אומרים המטופלים שלנו' : 'What Our Patients Say'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'he' 
              ? 'חוויות אמיתיות ממטופלים שמצאו הקלה מתמשכת'
              : 'Real experiences from patients who found lasting relief'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentReviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Data for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Eyal Maoz Halevy - Neurologist & Headache Specialist",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "3",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": currentReviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5",
                "worstRating": "1"
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })
        }}
      />
    </section>
  );
};

export default Reviews;
