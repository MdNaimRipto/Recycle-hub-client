import React from 'react';
import { AiTwotoneCar } from "react-icons/ai"
import { FaGooglePlay, FaApple } from "react-icons/fa"
import img from "../../Assets/app.png"

const GetApp = () => {
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 container grid grid-cols-1 lg:grid-cols-2 items-center bg-[#191919] mb-16' data-aos="fade-up">
            <div className='block lg:hidden'>
                <img src={img} alt="" className='p-6 rounded' />
            </div>
            <div className=''>
                <div className='flex items-center text-primary font-semibold text-lg'>
                    <AiTwotoneCar className='mr-2' />
                    <span>Get Our App</span>
                </div>
                <h2 className='text-[22px] lg:text-[36px] xl:text-[45px] font-bold capitalize mb-3 leading-[40px] lg:leading-[60px]'>
                    Download Our <span className='text-primary'>Recycle Hub</span>
                    <br /> App For Free
                </h2>
                <p className='mb-3'>Get the latest app of Recycle Hub and purchase your dream car from your hand
                    <br className='hidden lg:block' /> more easily without any problem.</p>
                <div className='mt-5'>
                    <button className='btn btn-primary mr-3 text-white'>
                        <FaGooglePlay className='mr-1' />
                        <span>Google Play</span>
                    </button>
                    <button className='btn bg-black text-white'>
                        <FaApple className='mr-1' />
                        <span>App Store</span>
                    </button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src={img} alt="" className='p-6 rounded' />
            </div>
        </div>
    );
};

export default GetApp;