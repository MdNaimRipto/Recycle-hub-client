import React from 'react';
import Advertisements from './Advertisements';
import Banner from './Banner';
import Categories from './Categories';
import Steps from './Steps';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Steps />
            <Advertisements />
        </div>
    );
};

export default Home;