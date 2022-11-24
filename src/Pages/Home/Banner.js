import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Assets/banner.jpg"

const Banner = () => {
    return (
        <div className="hero h-[550px] my-8" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60 w-full"></div>
            <div className="text-neutral-content w-4/5 md:w-[84%] lg:w-4/5 container">
                <div>
                    <h1
                        className="mb-5 text-4xl md:text-5xl leading-[45px] md:leading-[60px] lg:leading-[70px] font-bold">EXPLORE YOUR DREAM CAR</h1>
                    <p className="mb-5">Find your dream car within your budget and make yourself happy.</p>
                    <Link to="/allCars">
                        <button className="btn btn-primary">Explore Cars Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;