import React, { Suspense } from 'react';
import Layout from "./Layout.jsx";

// Critical pages loaded immediately
import Home from "./Home";

// Non-critical pages loaded lazily
const MigraineTreatment = React.lazy(() => import("./MigraineTreatment"));
const Treatments = React.lazy(() => import("./Treatments"));
const OtherHeadacheDisorders = React.lazy(() => import("./OtherHeadacheDisorders"));
const OtherNeurologicalDisorders = React.lazy(() => import("./OtherNeurologicalDisorders"));
const CervicogenicHeadache = React.lazy(() => import("./CervicogenicHeadache"));
const TensionHeadache = React.lazy(() => import("./TensionHeadache"));
const FacialPain = React.lazy(() => import("./FacialPain"));
const ClusterHeadache = React.lazy(() => import("./ClusterHeadache"));
const MigraneInPregnancy = React.lazy(() => import("./MigraneInPregnancy"));
const VestibularMigraine = React.lazy(() => import("./VestibularMigraine"));
const Accessibility = React.lazy(() => import("./Accessibility.jsx"));
const Services = React.lazy(() => import("./Services.jsx"));
const About = React.lazy(() => import("./About.jsx"));
const NotFound = React.lazy(() => import("./NotFound"));

import { BrowserRouter as Router, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

const PAGES = {
    
    Home: Home,
    
    MigraineTreatment: MigraineTreatment,
    
    Treatments: Treatments,
    
    OtherHeadacheDisorders: OtherHeadacheDisorders,
    
    OtherNeurologicalDisorders: OtherNeurologicalDisorders,
    
    CervicogenicHeadache: CervicogenicHeadache,
    
    TensionHeadache: TensionHeadache,
    
    FacialPain: FacialPain,
    
    ClusterHeadache: ClusterHeadache,
    
    MigraneInPregnancy: MigraneInPregnancy,
    
    VestibularMigraine: VestibularMigraine,
    Services: Services,
    About: About,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const navType = useNavigationType();
    const currentPage = _getCurrentPage(location.pathname);

    React.useEffect(() => {
        const htmlEl = document.documentElement;
        if (!htmlEl) return; // Safety check
        
        const previousScrollBehavior = htmlEl.style.scrollBehavior;
        htmlEl.style.scrollBehavior = 'auto';

        const hash = location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el && el.scrollIntoView) {
                el.scrollIntoView({ behavior: 'auto', block: 'start' });
            } else {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
        } else if (location.state?.restoreScrollY !== undefined) {
            window.scrollTo({ top: location.state.restoreScrollY, behavior: 'auto' });
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }

        htmlEl.style.scrollBehavior = previousScrollBehavior;
    }, [location.key, location.hash]);

    return (
        <Layout currentPageName={currentPage}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/MigraineTreatment" element={<MigraineTreatment />} />
                    <Route path="/Treatments" element={<Treatments />} />
                    <Route path="/OtherHeadacheDisorders" element={<OtherHeadacheDisorders />} />
                    <Route path="/OtherNeurologicalDisorders" element={<OtherNeurologicalDisorders />} />
                    <Route path="/CervicogenicHeadache" element={<CervicogenicHeadache />} />
                    <Route path="/TensionHeadache" element={<TensionHeadache />} />
                    <Route path="/FacialPain" element={<FacialPain />} />
                    <Route path="/ClusterHeadache" element={<ClusterHeadache />} />
                    <Route path="/MigraneInPregnancy" element={<MigraneInPregnancy />} />
                    <Route path="/VestibularMigraine" element={<VestibularMigraine />} />
                    <Route path="/Accessibility" element={<Accessibility />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}