import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import OurService from './OurService/OurService';
import DynamicSection from '../../Shared/DynamicSection/DynamicSection';
import PopulerCourse from './PopulerCourse/PopulerCourse';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <OurService></OurService>
            <DynamicSection></DynamicSection>
            <PopulerCourse></PopulerCourse>
        </div>
    );
};

export default Home;