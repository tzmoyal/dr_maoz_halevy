import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') return null;

  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items = [
      { name: language === 'he' ? 'בית' : 'Home', path: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      let name = segment;
      
      // Translate segment names
      const translations = {
        'Services': language === 'he' ? 'שירותים' : 'Services',
        'About': language === 'he' ? 'אודות' : 'About',
        'Accessibility': language === 'he' ? 'נגישות' : 'Accessibility',
        'MigraineTreatment': language === 'he' ? 'טיפול במיגרנה' : 'Migraine Treatment',
        'TensionHeadache': language === 'he' ? 'כאב ראש מתחי' : 'Tension Headache',
        'CervicogenicHeadache': language === 'he' ? 'כאב ראש צווארי' : 'Cervicogenic Headache',
        'ClusterHeadache': language === 'he' ? 'כאב ראש מקבצי' : 'Cluster Headache',
        'FacialPain': language === 'he' ? 'כאבי פנים' : 'Facial Pain',
        'OtherHeadacheDisorders': language === 'he' ? 'הפרעות כאב ראש אחרות' : 'Other Headache Disorders',
        'OtherNeurologicalDisorders': language === 'he' ? 'הפרעות נוירולוגיות אחרות' : 'Other Neurological Disorders',
        'VestibularMigraine': language === 'he' ? 'מיגרנה וסטיבולרית' : 'Vestibular Migraine',
        'MigraneInPregnancy': language === 'he' ? 'מיגרנה בהריון' : 'Migraine in Pregnancy'
      };
      
      name = translations[segment] || segment;
      items.push({ name, path });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-6">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-gray-600" dir={language === 'he' ? 'rtl' : 'ltr'}>
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              )}
              {index === 0 && (
                <Home className="h-4 w-4 mr-1 text-gray-500" />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
