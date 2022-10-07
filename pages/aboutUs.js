import React from 'react';
import { useState } from 'react';
import AboutUsContent from './content/aboutUsContent';


const AboutUs = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideCam = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="aboutus">
            <div style={{display: isShown ? 'none' : 'flex'}} className="pages-main">
                <button className="close-general-button" onClick={showHideCam}>Go Back</button>
                <br /><h1>About Us</h1><br /><br />
                <div className="section-pages-main-container">
                    <AboutUsContent />
                </div>
            </div>
            <button className="general-button" onClick={showHideCam}>About Us</button>
        </div>
    )
}

export default AboutUs;