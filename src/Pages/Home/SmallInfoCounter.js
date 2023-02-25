import React from 'react';
import CountUp from 'react-countup';
import { BsBookmarkPlus, BsFillPersonFill } from 'react-icons/bs';
import { MdCarRental } from 'react-icons/md';
import { GiCarKey } from 'react-icons/gi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import VisibilitySensor from 'react-visibility-sensor';

const SmallInfoCounter = () => {
    return (
        <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 container' data-aos="fade-up">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#191919] py-10 rounded'>
                <div className='mx-auto text-center w-[160px] mb-10 lg:mb-0'>
                    <div className='p-8 rounded-full bg-black relative mb-3'>
                        <MdCarRental className='text-5xl w-full h-full' />
                    </div>
                    <VisibilitySensor partialVisibility >
                        {({ isVisible }) => (
                            <div style={{ height: 35 }}>
                                {isVisible ? <CountUp className='text-4xl font-semibold text-center' start={0} end={500} duration={2.75} /> : null}
                            </div>
                        )}
                    </VisibilitySensor>
                    <div className='flex justify-center items-center mt-3 text-lg'>
                        <BsBookmarkPlus className='mr-1 text-primary' />
                        <p className='font-semibold'>Total Cars</p>
                    </div>
                </div>

                <div className='mx-auto text-center w-[160px] mb-10 lg:mb-0'>
                    <div className='p-8 rounded-full bg-black relative mb-3'>
                        <GiCarKey className='text-5xl w-full h-full' />
                    </div>
                    <VisibilitySensor partialVisibility >
                        {({ isVisible }) => (
                            <div style={{ height: 35 }}>
                                {isVisible ? <CountUp className='text-4xl font-semibold text-center' start={0} end={900} duration={2.75} /> : null}
                            </div>
                        )}
                    </VisibilitySensor>
                    <div className='flex justify-center items-center mt-3 text-lg'>
                        <BsBookmarkPlus className='mr-1 text-primary' />
                        <p className='font-semibold'>Happy Clients</p>
                    </div>
                </div>

                <div className='mx-auto text-center w-[160px] mb-10 lg:mb-0'>
                    <div className='p-8 rounded-full bg-black relative mb-3'>
                        <HiOutlineWrenchScrewdriver className='text-5xl w-full h-full' />
                    </div>
                    <VisibilitySensor partialVisibility >
                        {({ isVisible }) => (
                            <div style={{ height: 35 }}>
                                {isVisible ? <CountUp className='text-4xl font-semibold text-center' start={0} end={1200} duration={2.75} /> : null}
                            </div>
                        )}
                    </VisibilitySensor>
                    <div className='flex justify-center items-center mt-3 text-lg'>
                        <BsBookmarkPlus className='mr-1 text-primary' />
                        <p className='font-semibold'>Team Workers</p>
                    </div>
                </div>

                <div className='mx-auto text-center w-[160px] mb-10 lg:mb-0'>
                    <div className='p-8 rounded-full bg-black relative mb-3'>
                        <BsFillPersonFill className='text-5xl w-full h-full' />
                    </div>
                    <VisibilitySensor partialVisibility >
                        {({ isVisible }) => (
                            <div style={{ height: 35 }}>
                                {isVisible ? <CountUp className='text-4xl font-semibold text-center' start={0} end={30} duration={2.75} /> : null}
                            </div>
                        )}
                    </VisibilitySensor>
                    <div className='flex justify-center items-center mt-3 text-lg'>
                        <BsBookmarkPlus className='mr-1 text-primary' />
                        <p className='font-semibold'>Work Experience</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmallInfoCounter;