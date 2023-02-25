import React from 'react';

import stepLogo1 from "../../Assets/steps/Step1Logo.png"
import stepLogo2 from "../../Assets/steps/Step2Logo.png"
import stepLogo3 from "../../Assets/steps/Step3Logo.png"
import stepLogo4 from "../../Assets/steps/Step4Logo.png"


const Steps = () => {
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:pb-0' data-aos="fade-up">
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:w-[100%] md:px-24 lg:px-8 lg:pt-20 container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='text-center lg:text-end relative mt-4 lg:mt-12 xl:mt-4'>
                        <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold mb-6 leading-[34px] lg:leading-[50px] xl:leading-[55px]'>
                            How to Buy Your Car With
                            <br className='hidden md:block' />
                            Recycle Hub?
                        </h2>
                        <p className='text-xs md:text-base'>
                            Buy your favourite car from Recycle Hub with the best deal's. Follow the given steps and purchase your favourite car without any worry.
                        </p>
                        <div className='w-[70%] lg:absolute mx-auto right-0 mt-4'>
                            <img src="https://templates.hibotheme.com/motoz/default/assets/img/hero/hero-img-1.webp" alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='font-semibold mb-4'>
                            <div className="">
                                <div className="mb-3">
                                    <img src={stepLogo1} className="mx-auto lg:mx-0" alt="" />
                                </div>
                                <div className='text-center lg:text-start'>
                                    <h3 className="mb-3">Choose Your Car</h3>
                                    <p className='dark:text-gray-600'>
                                        We have compiled recommended information that you want to know to buy your car.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='font-semibold mb-4'>
                            <div className="">
                                <div className="mb-3">
                                    <img src={stepLogo2} className="mx-auto lg:mx-0" alt="" />
                                </div>
                                <div className='text-center lg:text-start'>
                                    <h3 className="mb-3">Contact Seller</h3>
                                    <p className='dark:text-gray-600'>
                                        After you've selected a car, we arrange a viewing to seller location or one of our points.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='font-semibold mb-4'>
                            <div className="">
                                <div className="mb-3">
                                    <img src={stepLogo3} className="mx-auto lg:mx-0" alt="" />
                                </div>
                                <div className='text-center lg:text-start'>
                                    <h3 className="mb-3">Financing & Registration</h3>
                                    <p className='dark:text-gray-600'>
                                        We deal with the paper work to avail your financing and registration in 24 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='font-semibold mb-4'>
                            <div className="">
                                <div className="mb-3">
                                    <img src={stepLogo4} className="mx-auto lg:mx-0" alt="" />
                                </div>
                                <div className='text-center lg:text-start'>
                                    <h3 className="mb-3">Get Your Car</h3>
                                    <p className='dark:text-gray-600'>
                                        Embrace the joy of Car Ownership without any of the hassle!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;