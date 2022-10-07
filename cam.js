import React from 'react';
import { useState } from 'react';



const Cam = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideCam = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="iss-cam">
            <iframe style={{display: isShown ? 'none' : 'block'}} id="issCam" width="480" height="270" src="https://ustream.tv/embed/17074538" scrolling="no" frameborder="0"></iframe>
            <button onClick={showHideCam}>ISS CAM</button>
        </div>
    )
}

export default Cam;