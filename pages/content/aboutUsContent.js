import React from 'react';
import { useState } from 'react';
import aboutUsPic from '../.././assets/aboutUs.jpg';

const AboutUsContent = () => {
    return (
        <>
        <p>
            We are a technology-savvy team studying at Bahçeşehir High School for Science and Technology.
Our goal is to design 3D technologies that will be useful to people interested in space.
The mentor of our team is Ahmet SÜLÜ.
The Software Developer of our team is Ahmet Cemal ŞAPCI. Ahmet has previously participated in more than 15 competitions, including NASA Space Apps and NASA GLEE.
The 3D Model Designer of our team is Mehmet Egemen FİLİZ. Egemen has previously participated in competitions in the field of design, including NASA Space Apps.
Our team's translator and researcher is Hüseyin Kağan ERMURAT. Hüseyin participated in competitions from various fields, including NASA Space Apps.
        </p>
        <img src={aboutUsPic} />
        </>
    )
}

export default AboutUsContent;