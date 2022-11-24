import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import LatestCars from './LatestCars';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <LatestCars />
        </div>
    );
};

export default Home;