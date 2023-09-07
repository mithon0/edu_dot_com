import React from 'react';
import AbourSection from "../../Home/AboutSection/AboutSection.js";
import DynamicSection from '../../../Shared/DynamicSection/DynamicSection.js';
import OurTeam from '../../Home/OurTeam/OurTeam.js';
const About = () => {
    return (
        <div className='bg-blue-100 py-10'>
           <AbourSection/>
           <DynamicSection/>
           <OurTeam/>
        </div>
    );
};

export default About;