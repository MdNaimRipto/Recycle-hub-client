import React from 'react';
import Banner from './Banner';
import BestSeller from './BestSeller';
import Categories from './Categories';
import Comments from './Comments';
import GetApp from './GetApp';
import LatestCars from './LatestCars';
import SearchOptions from './SearchOptions';
import SmallInfoCounter from './SmallInfoCounter';
import Steps from './Steps';
import VideoAdd from './VideoAdd';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner />
            <SearchOptions />
            <Categories />
            <LatestCars />
            <BestSeller />
            <VideoAdd />
            <Steps />
            <SmallInfoCounter />
            <Comments />
            <GetApp />
        </div>
    );
};

export default Home;