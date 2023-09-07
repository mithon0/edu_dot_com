import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import OurService from './OurService/OurService';
import DynamicSection from '../../Shared/DynamicSection/DynamicSection';
import PopulerCourse from './PopulerCourse/PopulerCourse';
import OurCategori from './OurCategori/OurCategori';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <OurService></OurService>
            <DynamicSection></DynamicSection>
            <PopulerCourse></PopulerCourse>
            <OurCategori></OurCategori>
        </div>
    );
};

export default Home;