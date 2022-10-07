import React from 'react';
import { useState } from 'react';
import AboutUs from './pages/aboutUs';
import Documentation from './pages/documentation';
import HistoryOfISS from './pages/historyOfIss';

const Page = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideCam = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="page-main">
            <div style={{display: isShown ? 'none' : 'flex'}} className="pages-root">
                <AboutUs />
                <Documentation />
                <HistoryOfISS />
            </div>
            <button className="button-page-main" onClick={showHideCam}>Pages</button>
        </div>
    )
}

export default Page;