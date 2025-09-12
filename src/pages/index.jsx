import Layout from "./Layout.jsx";

import Home from "./Home";

import MigraineTreatment from "./MigraineTreatment";

import Treatments from "./Treatments";

import OtherHeadacheDisorders from "./OtherHeadacheDisorders";

import OtherNeurologicalDisorders from "./OtherNeurologicalDisorders";

import CervicogenicHeadache from "./CervicogenicHeadache";

import TensionHeadache from "./TensionHeadache";

import FacialPain from "./FacialPain";

import ClusterHeadache from "./ClusterHeadache";

import MigraneInPregnancy from "./MigraneInPregnancy";

import VestibularMigraine from "./VestibularMigraine";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
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
                
            </Routes>
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