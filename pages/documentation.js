import React from 'react';
import { useState } from 'react';
import DocumentationContent from './content/documentationContent';


const HistoryOfISS = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideCam = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="documentation">
            <div style={{display: isShown ? 'none' : 'flex'}} className="pages-main">
                <button className="close-general-button" onClick={showHideCam}>Go Back</button>
                <br /><h1>Documentation</h1><br /><br />
                <div className="section-pages-main-container">
                    <DocumentationContent />
                </div>
            </div>
            <button className="general-button" onClick={showHideCam}>Documentation</button>
        </div>
    )
}

export default HistoryOfISS;