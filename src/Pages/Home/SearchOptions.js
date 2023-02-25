import React from 'react';

const SearchOptions = () => {
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 container' data-aos="fade-up">
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-[#191919] py-20 rounded'>
                <select className='bg-black font-bold rounded text-white px-4 py-3 mx-4 mb-4 md:mb-0'>
                    <option selected disabled>Select Brand</option>
                    <option>BMW</option>
                    <option>Nissan</option>
                    <option>Toyota</option>
                </select>
                <select className='bg-black font-bold rounded text-white px-4 py-3 mx-4 mb-4 md:mb-0'>
                    <option selected disabled>Select Location</option>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Barishal</option>
                    <option>Rajsahi</option>
                    <option>Khulna</option>
                    <option>Sylhet</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                </select>
                <select className='bg-black font-bold rounded text-white px-4 py-3 mx-4 mb-4 md:mb-0'>
                    <option selected disabled>Select Condition</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <button className=' btn border-0 bg-primary font-bold rounded text-white px-4 py-3 mx-4 mb-4 md:mb-0'>
                    <a href='/' alt="">
                        Search Now
                    </a>
                </button>
            </div>
        </div>
    );
};

export default SearchOptions;