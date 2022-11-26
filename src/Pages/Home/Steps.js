import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "../../CSS/styles.css"

import step1 from "../../Assets/steps/Step1.png"
import step2 from "../../Assets/steps/Step2.png"
import step3 from "../../Assets/steps/Step3.png"
import step4 from "../../Assets/steps/Step4.png"

import stepLogo1 from "../../Assets/steps/Step1Logo.png"
import stepLogo2 from "../../Assets/steps/Step2Logo.png"
import stepLogo3 from "../../Assets/steps/Step3Logo.png"
import stepLogo4 from "../../Assets/steps/Step4Logo.png"


const Steps = () => {
    return (
        <div>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:w-[70%] md:px-24 lg:px-8 lg:pb-20 container">
                <h2 className='text-3xl font-bold mb-16 text-center'>
                    How to Buy Your Car With Recycle Hub?
                </h2>
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='mx-auto' src={step1} alt="" />
                                </div>
                                <div className="">
                                    <div className="mb-3">
                                        <img className='mx-auto' src={stepLogo1} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="mb-6">Choose Your Car</h3>
                                        <p className='dark:text-gray-600'>
                                            We have compiled recommended information that you want to know to buy your car.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='mx-auto' src={step2} alt="" />
                                </div>
                                <div className="">
                                    <div className="mb-3">
                                        <img className='mx-auto' src={stepLogo2} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="mb-6">Contact Seller</h3>
                                        <p className='dark:text-gray-600'>
                                            After you've selected a car, we arrange a viewing to seller location or one of our points.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='mx-auto' src={step3} alt="" />
                                </div>
                                <div className="">
                                    <div className="mb-3">
                                        <img className='mx-auto' src={stepLogo3} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="mb-6">Financing & Registration</h3>
                                        <p className='dark:text-gray-600'>
                                            We deal with the paper work to avail your financing and registration in 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='mx-auto' src={step4} alt="" />
                                </div>
                                <div className="">
                                    <div className="mb-3">
                                        <img className='mx-auto' src={stepLogo4} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="mb-6">Get Your Car</h3>
                                        <p className='dark:text-gray-600'>
                                            Embrace the joy of Car Ownership without any of the hassle!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Steps;