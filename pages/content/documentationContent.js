import React from 'react';
import { useState } from 'react';
import * as documentationVideos from '../../assets/documentation/*.mp4';

const DocumentationContent = () => {
    return (
        <div className='iss-documentation'>
            <div className="iss-img">
                <video src={documentationVideos.documentation_issOrbit} controls />
                <p>ISS Orbit</p>
            </div><br />

            <div className="iss-img">
                <video src={documentationVideos.documentation_issCam} controls />
                <p>ISS Cam</p>
            </div><br />

            <div className="iss-img">
                <video src={documentationVideos.documentation_issValues} controls />
                <p>ISS Values</p>
            </div><br />

            <div className="iss-img">
                <video src={documentationVideos.documentation_issZoom} controls />
                <p>ISS Zoom</p>
            </div><br />

            <div className="iss-img">
                <video src={documentationVideos.documentation_issPage} controls />
                <p>ISS Page</p>
            </div><br />
        </div>
    )
}

export default DocumentationContent;