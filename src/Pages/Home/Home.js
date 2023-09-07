import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import OurService from './OurService/OurService';
import DynamicSection from '../../Shared/DynamicSection/DynamicSection';
import PopulerCourse from './PopulerCourse/PopulerCourse';
import OurCategori from './OurCategori/OurCategori';
import OurTeam from './OurTeam/OurTeam';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <OurService></OurService>
            <DynamicSection></DynamicSection>
            <PopulerCourse></PopulerCourse>
            <OurCategori></OurCategori>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;