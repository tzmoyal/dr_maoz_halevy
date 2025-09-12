
import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    lang: 'en',
    dir: 'ltr',
    font: 'font-sans',
    header: {
      drName: 'Dr. Eyal Maoz Halevy',
      specialty: 'Neurologist and Headache and Facial Pain Specialist',
      nav: {
        services: 'Areas of Care',
        treatments: 'Treatments',
        about: 'About',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      language: 'HE',
    },
    hero: {
      subheading: 'Board Certified Headache Specialist',
      title1: 'Find Relief from ',
      title2: 'Headaches',
      title3: '',
      description: '"Headaches and facial pain are not just symptoms – they affect quality of life, the ability to work, care for family, and enjoy daily routines." Dr. Eyal Maoz Halevy sees patients and their pain, and dedicates his professional path to restoring their function, control, and health.',
      button1: 'Schedule Consultation',
      button2: 'Call Now',
      location: 'Weizmann Tower, Tel Aviv',
      card: {
        name: 'Dr. Eyal Maoz Halevy',
        specialty: 'Headache & Pain Specialist',
        rate: 'Success Rate',
        experience: 'Years Experience',
        patients: 'Patients Treated',
      }
    },
    services: {
      title1: 'Comprehensive Areas of Care for',
      title2: ' Headache and Facial Pain',
      description: 'From accurate diagnosis to personalized treatment plans, we provide complete care for all types of headache disorders using the latest medical advances.',
      items: [
        { title: "Migraine Management", description: "Comprehensive treatment plans including preventive medications, lifestyle modifications, and cutting-edge therapies." },
        { title: "Tension Headache", description: "Targeted approaches to break the cycle of chronic tension headaches through proven medical interventions." },
        { title: "Cervicogenic Headache", description: "Diagnosis and treatment for headaches originating from the neck and spine, often misdiagnosed as migraines." },
        { title: "Cluster Headache", description: "Specialized care for the most severe primary headache disorder, with targeted treatments to break cluster cycles." },
        { title: "Other Headache Disorders", description: "Specialized diagnosis and treatment for trigeminal autonomic cephalalgias and rare headache syndromes." },
        { title: "Facial Pain", description: "Specialized care for trigeminal neuralgia, TMJ disorders, and other complex facial pain conditions." },
        { title: "Other Neurological Disorders", description: "Comprehensive neurological care for ADHD, cognitive disorders, and general neurological consultations." }
      ],
      support: {
        title: 'Emergency Support',
        description: 'For severe headache episodes',
      }
    },
    about: {
      title1: 'Meet ',
      title2: 'Dr. Eyal Maoz Halevy',
      p1: 'Dr. Eyal Maoz Halevy is a neurology specialist and an expert in headache and facial pain at the Headache and Facial Pain Center at Sheba Medical Center, Tel Hashomer, and also sees patients privately in Tel Aviv. He completed his neurology residency at Sheba Medical Center with honors, and subsequently completed a one-year fellowship in headache and facial pain at the University of Connecticut, USA.',
      p2: 'During his work in the emergency room, Dr. Maoz Halevy recognized how much headache patients often feel "invisible" – those around them do not see their pain. This sense of mission led him to a unique fellowship in the USA in headache and facial pain medicine, to bring the most advanced knowledge to Israel. Dr. Maoz Halevy combines optimal medical treatment with guidance for a healthy lifestyle, which is an integral part of treating headache and facial pain. His holistic approach and professional path restore his patients\' function, control, and health. For his research on the connection between migraine and physical activity, he won a prestigious award from the American Headache Society.',
      credentials: [
        "MD, Ben Gurion University of the Negev",
        "Neurology Residency at Sheba Medical Center",
        "Fellowship in Headache Medicine, University of Connecticut, USA",
        "Member of International & American Headache Societies"
      ],
      languages: {
        title: 'Languages',
        list: 'Hebrew, English, Spanish'
      },
      button: 'Schedule Your Consultation',
      locationCard: {
        title: 'Weizmann Tower',
        address1: 'Weizmann St 14, 18th Floor',
        address2: 'Tel Aviv-Jaffa, Israel',
        parking: 'Parking available nearby',
        accessibility: 'Wheelchair accessible',
      }
    },
    testimonials: {
      title1: 'Patient ',
      title2: 'Success Stories',
      description: 'Real experiences from patients who found lasting relief from chronic headaches and reclaimed their quality of life.',
      trust: {
        rating: 'Average Rating',
        rating_desc: 'Based on 200+ reviews',
        success: 'Success Rate',
        success_desc: 'Significant symptom improvement'
      }
    },
    contact: {
      title1: 'Schedule Your',
      title2: ' Consultation',
      description: 'Take the first step towards lasting headache relief. We\'re here to help you reclaim your life from chronic pain.',
      info: [
        { title: "Call Us", details: "03-5496949", subtext: "Mon-Fri 8AM-6PM" },
        { title: "WhatsApp", details: "050-2804723", subtext: "Quick responses" },
        { title: "Email", details: "office@stroke-il.com", subtext: "We respond within 2 hours" },
        { title: "Visit Us", details: "Weizmann St 14 (Weizmann Tower), Tel Aviv-Jaffa, 18th Floor", subtext: "Parking available nearby" }
      ],
      insurance: {
        title: 'Private Practice',
        description: 'We operate as a private practice. Please contact us to discuss payment options and any insurance coverage questions you may have.'
      },
      form: {
        title: 'Request Appointment',
        description: 'Fill out the form below and we\'ll contact you within 2 hours to schedule your consultation.',
        name: 'Full Name *',
        name_ph: 'Your full name',
        phone: 'Phone Number *',
        phone_ph: '050-XXX-XXXX',
        email: 'Email Address *',
        email_ph: 'your.email@example.com',
        headache: 'Type of Headaches',
        headache_ph: 'e.g., Migraines, Tension headaches, Cluster headaches',
        symptoms: 'Tell us about your symptoms',
        symptoms_ph: 'Describe your headache patterns, triggers, current treatments, and how they impact your daily life...',
        button: 'Request Appointment',
        privacy: 'By submitting this form, you agree to our privacy policy and consent to be contacted about your healthcare needs.'
      }
    },
    footer: {
      p1: 'Providing expert headache and pain management care to help you live pain-free.',
      links: 'Quick Links',
      linkItems: ['Services', 'About Dr. Halevy', 'Patient Portal', 'Private Practice'],
      contact: 'Contact',
      address: 'Weizmann St 14 (Weizmann Tower)\nTel Aviv-Jaffa, 18th Floor',
      copyright: '© 2024 Dr. Eyal Maoz Halevy Headache Specialist. All rights reserved.',
    }
  },
  he: {
    lang: 'he',
    dir: 'rtl',
    font: 'font-sans',
    header: {
      drName: 'ד"ר אייל מעוז הלוי',
      specialty: 'נוירולוג ומומחה לכאבי ראש ופנים',
      nav: {
        services: 'תחומי טיפול',
        treatments: 'טיפולים',
        about: 'אודות',
        testimonials: 'המלצות',
        contact: 'צור קשר',
      },
      language: 'EN',
    },
    hero: {
      subheading: 'מומחה מוסמך לכאבי ראש',
      title1: 'מצאו הקלה מ',
      title2: 'כאבי ראש',
      title3: '',
      description: '"כאבי ראש וכאבי פנים אינם רק סימפטום – הם פוגעים באיכות החיים, ביכולת לעבוד, לטפל במשפחה וליהנות משגרת היום" ד"ר אייל מעוז הלוי רואה את המטופלים ואת כאבם, ומקדיש את דרכו המקצועית להחזיר להם את התפקוד, השליטה והבריאות.',
      button1: 'קבעו פגישת ייעוץ',
      button2: 'התקשרו עכשיו',
      location: 'מגדל ויצמן, תל אביב',
      card: {
        name: 'ד"ר אייל מעוז הלוי',
        specialty: 'מומחה לכאבי ראש וכאב',
        rate: 'שיעור הצלחה',
        experience: 'שנות ניסיון',
        patients: 'מטופלים שטופלו',
      }
    },
    services: {
      title1: 'תחומי טיפול מקיפים',
      title2: ' בכאבי ראש ופנים',
      description: 'מאבחון מדויק ועד תוכניות טיפול מותאמות אישית, אנו מספקים טיפול מלא לכל סוגי הפרעות כאבי הראש תוך שימוש בהתקדמויות הרפואיות האחרונות.',
      items: [
        { title: "ניהול מיגרנות", description: "תוכניות טיפול מקיפות הכוללות תרופות מונעות, שינויים באורח החיים וטיפולים חדשניים." },
        { title: "כאב ראש מתחי", description: "גישות ממוקדות לשבירת מעגל כאבי הראש המתחיים הכרוניים באמצעות התערבויות רפואיות מוכחות." },
        { title: "כאב ראש צווארי (סרוויקוגני)", description: "אבחון וטיפול בכאבי ראש שמקורם בצוואר ובעמוד השדרה, שלעיתים מאובחנים בטעות כמיגרנות." },
        { title: "כאב ראש מקבצי (אשכולי)", description: "טיפול מיוחד בהפרעת כאב הראש הראשונית הקשה ביותר, עם טיפולים ממוקדים לשבירת מחזורי האשכולות." },
        { title: "הפרעות כאב ראש אחרות", description: "אבחון וטיפול מיוחד בצפלגיות אוטונומיות טריגמינליות ותסמונות כאב ראש נדירות." },
        { title: "כאבי פנים", description: "טיפול מיוחד בנוירלגיה של הטריגמינוס, הפרעות TMJ ומצבי כאב פנים מורכבים אחרים." },
        { title: "הפרעות נוירולוגיות אחרות", description: "טיפול נוירולוגי מקיף להפרעות קשב וריכוז, הפרעות קוגניטיביות וייעוצים נוירולוגיים כלליים." }
      ],
      support: {
        title: 'תמיכת חירום',
        description: 'לאירועי כאב ראש חמורים',
      }
    },
    about: {
      title1: 'הכירו את ',
      title2: 'ד"ר אייל מעוז הלוי',
      p1: 'ד"ר אייל מעוז הלוי, הינו מומחה בנוירולוגיה ומומחה בכאבי ראש ופנים במרכז כאבי ראש ופנים במרכז הרפואי שיבא, תל השומר, ובנוסף מקבל באופן פרטי בתל-אביב. את התמחותו בנוירלוגיה סיים במרכז הרפואי שיבא בהצטיינות, ולאחר מכן ביצע תת התמחות בכאבי ראש ופנים במשך שנה באוניברסיטת קונטיקט בארה"ב.',
      p2: 'במהלך עבודתו בחדר המיון זיהה ד"ר מעוז הלוי עד כמה מטופלים עם כאב ראש לעיתים מרגישים "שקופים" – הסובבים לא רואים את הכאב. תחושת השליחות הובילה אותו להשתלמות עמיתים ייחודית בארה"ב ברפואת כאבי ראש ופנים, על מנת להביא את הידע המתקדם ביותר לישראל. ד״ר מעוז הלוי משלב טיפול רפואי מיטבי תוך כדי הדרכה לאורח חיים בריא המהווה חלק בלתי נפרד מהטיפול לכאב ראש וכאבי פנים. גישתו ההוליסטית ודרכו המקצועית מחזירה למטופליו את התפקוד, השליטה על חייהן/ם ובריאותן/ם במחקר שערך על קשר בין מיגרנה לפעילות גופנית זכה בפרס יוקרתי של איגוד כאבי הראש האמריקאי.',
      credentials: [
        "MD, אוניברסיטת בן-גוריון בנגב",
        "התמחות בנוירולוגיה במרכז הרפואי שיבא",
        "התמחות-על ברפואת כאבי ראש, אוניברסיטת קונטיקט, ארה\"ב",
        "חבר באגודות כאבי הראש הבינלאומית והאמריקאית"
      ],
      languages: {
        title: 'שפות',
        list: 'עברית, אנגלית, ספרדית'
      },
      button: 'קבעו את פגישת הייעוץ שלכם',
      locationCard: {
        title: 'מגדל ויצמן',
        address1: 'רח\' ויצמן 14, קומה 18',
        address2: 'תל אביב-יפו, ישראל',
        parking: 'חניה זמינה בסביבה',
        accessibility: 'נגישות לכיסאות גלגלים',
      }
    },
    testimonials: {
      title1: 'סיפורי הצלחה ',
      title2: 'של מטופלים',
      description: 'חוויות אמיתיות ממטופלים שמצאו הקלה מתמשכת מכאבי ראש כרוניים והשיבו לעצמם את איכות חייהם.',
      trust: {
        rating: 'דירוג ממוצע',
        rating_desc: 'מבוסס על 200+ ביקורות',
        success: 'שיעור הצלחה',
        success_desc: 'שיפור משמעותי בתסמינים'
      }
    },
    contact: {
      title1: 'קבעו את ',
      title2: 'הייעוץ שלכם',
      description: 'עשו את הצעד הראשון לקראת הקלה מתמשכת בכאבי ראש. אנחנו כאן כדי לעזור לכם להשיב את חייכם מכאב כרוני.',
      info: [
        { title: "התקשרו אלינו", details: "03-5496949", subtext: "שני-שישי 8:00-18:00" },
        { title: "וואטסאפ", details: "050-2804723", subtext: "מענה מהיר" },
        { title: "אימייל", details: "office@stroke-il.com", subtext: "אנו מגיבים תוך שעתיים" },
        { title: "בקרו אותנו", details: "רח\' ויצמן 14 (מגדל ויצמן), תל אביב-יפו, קומה 18", subtext: "חניה זמינה בסביבה" }
      ],
      insurance: {
        title: 'מרפאה פרטית',
        description: 'אנו פועלים כמרפאה פרטית. אנא צרו עמנו קשר לדיון באפשרויות התשלום וכל שאלה הנוגעת לכיסוי ביטוחי.'
      },
      form: {
        title: 'בקשת תור',
        description: 'מלאו את הטופס למטה ואנו ניצור עמכם קשר תוך שעתיים לקביעת פגישת ייעוץ.',
        name: 'שם מלא *',
        name_ph: 'השם המלא שלך',
        phone: 'מספר טלפון *',
        phone_ph: '050-XXX-XXXX',
        email: 'כתובת אימייל *',
        email_ph: 'your.email@example.com',
        headache: 'סוג כאבי הראש',
        headache_ph: 'לדוגמה: מיגרנות, כאבי ראש מתחיים, כאבי ראש מקבציים',
        symptoms: 'ספרו לנו על התסמינים שלכם',
        symptoms_ph: 'תארו את דפוסי כאב הראש, טריגרים, טיפולים נוכחיים וכיצד הם משפיעים על חיי היומיום שלכם...',
        button: 'בקשת תור',
        privacy: 'על ידי שליחת טופס זה, אתם מסכימים למדיניות הפרטיות שלנו ומאשרים שניצור עמכם קשר בנוגע לצרכים הרפואיים שלכם.'
      }
    },
    footer: {
      p1: 'מספק טיפול מומחה בכאבי ראש וניהול כאב כדי לעזור לכם לחיות ללא כאבים.',
      links: 'קישורים מהירים',
      linkItems: ['שירותים', 'אודות ד"ר מעוז הלוי', 'פורטל מטופלים', 'מרפאה פרטית'],
      contact: 'צור קשר',
      address: 'רח\' ויצמן 14 (מגדל ויצמן)\nתל אביב-יפו, קומה 18',
      copyright: '© 2024 ד"ר אייל מעוז הלוי מומחה לכאבי ראש. כל הזכויות שמורות.',
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'he' : 'en'));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
    dir: translations[language].dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
