import React from 'react';
import Banner from './Banner/Banner';
import AboutSection from './AboutSection/AboutSection';
import OurService from './OurService/OurService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <OurService></OurService>
        </div>
    );
};

export default Home;