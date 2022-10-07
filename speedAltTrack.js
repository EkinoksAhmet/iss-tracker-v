import React from 'react';
import { useState } from 'react';


const SpeedAltTrack = () => {
    const [isShown, setIsShown] = useState(true);

    const showHideSA = event => {
        setIsShown(current => !current);
    }


    return (
        <div className="sa-track">
            <button onClick={showHideSA}>ISS Values</button>
            <div style={{display: isShown ? 'none' : 'flex'}} className="sa-track__container">
                <div className="velocity">
                    <p>Velocity</p>
                    <div className="circle">
                        <p>27.600 <br /> km/h</p>
                    </div>
                </div>
                <hr />
                <div className="velocity">
                    <p>Altitude</p>
                    <div className="circle">
                        <p>408 km</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeedAltTrack;