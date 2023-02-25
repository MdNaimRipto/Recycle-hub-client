import React, { useEffect, useState } from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';

const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(() => {
        fetch("BestSellers.json")
            .then(res => res.json())
            .then(data => setBestSellers(data))
    }, [])
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 container' data-aos="fade-up">
            <h2 className='text-3xl font-bold mb-16 text-center'>Best Sellers Of The Month</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    bestSellers.map(seller => (
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <div className='bg-white py-6 px-10 lg:px-3 rounded cursor-pointer overflow-hidden'>
                                <img src={seller.img} alt="" className='w-full hover:scale-105 duration-300' />
                            </div>
                            <div>
                                <h4 className='text-xl lg:text-lg xl:text-xl mb-2 font-bold'>{seller.name}</h4>
                                <div>
                                    <div className='flex items-center mb-2'>
                                        <MdLocationOn className='mr-1 text-primary' />
                                        <p className='font-semibold'>{seller.location}</p>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <MdPhone className='mr-1 text-primary' />
                                        <p className='font-semibold'>{seller.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;