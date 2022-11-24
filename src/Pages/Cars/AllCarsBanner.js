import React from 'react';
import banner from '../../Assets/allCarsBanner.jpg';

const AllCarsBanner = () => {
    return (
        <div className="hero h-[550px] mt-8" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60 w-full"></div>
            <div className="text-neutral-content w-4/5 md:w-[84%] lg:w-4/5 container">
                <div>
                    <h1 className="mb-5 text-4xl md:text-5xl leading-[45px] md:leading-[60px] lg:leading-[70px] font-bold">FIND YOUR DREAM CAR</h1>
                    <p className="mb-5">
                        Explore all the cars and find the best car what you love and afford.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllCarsBanner;