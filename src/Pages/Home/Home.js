import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import LatestCars from './LatestCars';
import Steps from './Steps';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <LatestCars />
            <Steps />
        </div>
    );
};

export default Home;