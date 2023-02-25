import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import people1 from "../../Assets/images/people1.png"
import people2 from "../../Assets/images/people2.png"
import people3 from "../../Assets/images/people3.png"
import people4 from "../../Assets/images/people4.png"
import people5 from "../../Assets/images/people5.png"

import { Pagination, Autoplay } from "swiper";

const Comments = () => {

    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:w-[100%] md:px-24 lg:px-8 lg:pb-20 container">
                <h2 className='text-3xl font-bold mb-16 text-center'>
                    Latest Users Reviews
                </h2>
                <>
                    <Swiper
                        data-aos="fade-up"
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            }
                        }}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className='mySwiper'
                    >
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='border-2 border-primary rounded-full p-2' src={people1} alt="" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3 className="mb-6">Jesica Jones</h3>
                                        <p className='dark:text-gray-600'>
                                            There are many variations of passages available but the majority have suffered to the alteration in some injected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='border-2 border-primary rounded-full p-2' src={people2} alt="" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3 className="mb-6">Henry Kelvin</h3>
                                        <p className='dark:text-gray-600'>
                                            There are many variations of passages available but the majority have suffered to the alteration in some injected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='border-2 border-primary rounded-full p-2' src={people3} alt="" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3 className="mb-6">Nirobi</h3>
                                        <p className='dark:text-gray-600'>
                                            There are many variations of passages available but the majority have suffered to the alteration in some injected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='border-2 border-primary rounded-full p-2' src={people4} alt="" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3 className="mb-6">Sylvia H Green</h3>
                                        <p className='dark:text-gray-600'>
                                            There are many variations of passages available but the majority have suffered to the alteration in some injected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='font-semibold'>
                                <div className="mb-3">
                                    <img className='border-2 border-primary rounded-full p-2' src={people5} alt="" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3 className="mb-6">Gordo Novak</h3>
                                        <p className='dark:text-gray-600'>
                                            There are many variations of passages available but the majority have suffered to the alteration in some injected
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

export default Comments;