import React from 'react';
import { useState } from 'react';
import * as issPictures from '../../assets/issPictures/*.jpg';

const HistoryOfIssContent = () => {
    return (
        <>
        <p>
            The International Space Station (ISS) is the largest modular space station currently in low Earth orbit It is a multinational collaborative project involving five participating space agencies:NASA (United States), Roscomos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada) The ownership and use of the space station is established by intergovernmental treaties and agreements. 
            <br /><br />
            The ISS programme evolved from the Space Station Freedom, a 1984 American proposal to construct a permanently crewed Earth-orbiting station, and the contemporaneous Soviet/Russian Mir-2 proposal from 1976 with similar aims. The ISS is the ninth space station to be inhabited by crews, following the Soviet and later Russian Salyut, Almaz, and Mir stations and the American Skylab. It is the largest artificial object in space and the largest satellite in low Earth orbit, regularly visible to the naked eye from Earth's surface. It maintaince an orbit with an average altitude of 400 kilometres (250 mi) by means of reboost manoeuvres using the engines of the Zvezda Service Module or visiting spacecraft. The ISS circles the Earth in roughly 93 minutes, completing 15.5 orbits per day.
            <br /><br />
            The station is divided into two sections: the United States Orbital Segment (USOS) is run by the United States as well as by the other states.while the Russian Orbital Segment (ROS) is operated by Russia, The Russian segment includes six modules. The US segment includes ten modules, whose support services are distributed 76.6% for NASA, 12.8% for JAXA, 8.3% for ESA and 2.3% for CSA.
            <br /><br />
            The ISS was originally intended to be a laboratory, observatory, and factory while providing transportation, maintenance, and a low Earth orbit staging base for possible future missions to the Moon, Mars, and asteroids. However, not all of the uses envisioned in the initial memorandum of understanding between NASA and Roscosmos have been realised. In the 2010 United States National Space Policy, the ISS was given additional roles of serving commercial, diplomatic, and educational purposes. 
        </p><br /><br /><br />

        <div className="iss-img">
            <img src={issPictures.iss1} />
            <p>1998</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss2} />
            <p>1999</p><br />
        </div>

        <div className="iss-img">
            <img src={issPictures.iss3} />
            <p>2000</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss4} />
            <p>2001</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss5} />
            <p>2002</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss6} />
            <p>2003</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss7} />
            <p>2004</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss8} />
            <p>2005</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss9} />
            <p>2006</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss10} />
            <p>2007</p>
        </div><br />

        <div className="iss-img">
            <img src={issPictures.iss11} />
            <p>2008</p>
        </div>



        </>
    )
}

export default HistoryOfIssContent;