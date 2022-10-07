import React from 'react';
import { useState } from 'react';



const Iss3D = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideCam = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="iss-3D">
            <iframe style={{display: isShown ? 'none' : 'block'}} src="https://mystu5130.autodesk360.com/shares/public/SH9285eQTcf875d3c539f803996d3bd13c55?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
            <button onClick={showHideCam}>Zoom</button>
        </div>
    )
}

export default Iss3D;