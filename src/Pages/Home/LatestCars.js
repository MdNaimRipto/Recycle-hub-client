import React from 'react';
import car1 from "../../Assets/latestCars/car1.jpg"
import car2 from "../../Assets/latestCars/car2.jpg"

const LatestCars = () => {

    return (
        <div>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <h2 className='text-3xl font-bold mb-16 text-center'>Latest Added Cars</h2>
                <div
                    data-aos="fade-up"
                    className="relative grid gap-5 grid-cols-1 lg:grid-cols-3 rounded">

                    <div className='relative latest-cars-container'>
                        <div className='absolute top-3 right-3 z-50'>
                            <p className='text-red-600 bg-white p-3 rounded font-semibold new-tag'>New</p>
                        </div>
                        <div className='overflow-hidden'>
                            <img className='h-full filter brightness-75 hover:scale-110 hover:brightness-50 duration-300' src={car1} alt="" />
                        </div>
                        <div className='absolute bottom-3 md:bottom-5 left-3 md:left-4'>
                            <p className='text-lg md:text-xl'>
                                <span className='text-white font-semibold'>Price:{' '}</span>
                                <span className='text-red-600 font-semibold'>TK.30, 50, 000</span>
                            </p>
                            <p className='text-lg md:text-xl text-white font-semibold'>Nissan X-Trail 4 Grade</p>
                        </div>
                    </div>

                    <div className='relative latest-cars-container'>
                        <div className='absolute top-3 right-3 z-50'>
                            <p className='text-red-600 bg-white p-3 rounded font-semibold new-tag'>New</p>
                        </div>
                        <div className='overflow-hidden h-full'>
                            <img className='h-full filter brightness-75 hover:scale-110 hover:brightness-50 duration-300' src={car2} alt="" />
                        </div>
                        <div className='absolute bottom-3 md:bottom-5 left-3 md:left-4'>
                            <p className='text-lg md:text-xl'>
                                <span className='text-white font-semibold'>Price:{' '}</span>
                                <span className='text-red-600 font-semibold'>TK.27, 50, 000</span>
                            </p>
                            <p className='text-lg md:text-xl text-white font-semibold'>Toyota Prius PHV A Touring</p>
                        </div>
                    </div>

                    <div className='row-span-2 relative latest-cars-container'>
                        <div className='absolute top-3 right-3 z-50'>
                            <p className='text-red-600 bg-white p-3 rounded font-semibold new-tag'>New</p>
                        </div>
                        <div className='overflow-hidden h-full'>
                            <img className='h-full w-full filter brightness-75 hover:scale-110 hover:brightness-50 duration-300' src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>

                        <div className='absolute bottom-3 md:bottom-5 left-3 md:left-4'>
                            <p className='text-lg md:text-xl'>
                                <span className='text-white font-semibold'>Price:{' '}</span>
                                <span className='text-red-600 font-semibold'>TK.29, 50, 000</span>
                            </p>
                            <p className='text-lg md:text-xl text-white font-semibold'>BMW S 2 Series</p>
                        </div>
                    </div>

                    <div className='col-span-1 lg:col-span-2 relative latest-cars-container'>
                        <div className='absolute top-3 right-3 z-50'>
                            <p className='text-red-600 bg-white p-3 rounded font-semibold new-tag'>New</p>
                        </div>
                        <div className='overflow-hidden h-full'>
                            <img className='h-full w-full filter brightness-75 hover:scale-110 hover:brightness-50 duration-300' src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='absolute bottom-3 md:bottom-5 left-3 md:left-4'>
                            <p className='text-lg md:text-xl'>
                                <span className='text-white font-semibold'>Price:{' '}</span>
                                <span className='text-red-600 font-semibold'>TK.25, 50, 000</span>
                            </p>
                            <p className='text-lg md:text-xl text-white font-semibold'>BMW 3 Series Blue</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestCars;