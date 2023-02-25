import React from 'react';
import { BsFillPlayFill } from "react-icons/bs"

const VideoAdd = () => {
    return (
        <div
            className='flex flex-col items-center justify-center px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 container h-[200px] md:h-[500px]'
            style={{
                background: "linear-gradient(#00000033, #000000a8), url('https://i.ibb.co/G5R1L5W/2023-BMW-X1-S-Drive-18i-SUV-blue-grey-24-2211bmwx1.webp')",
                // height: "500px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} data-aos="fade-up">
            <a className="btn btn-circle bg-white border-0" href="https://www.youtube.com/embed/jJ1BiZTpg_0" alt="" target="_blank" rel="noreferrer">
                <BsFillPlayFill className='text-xl text-primary' />
            </a>
            <h2 className='text-xl md:text-4xl mb-3 font-bold text-white mt-2'>
                Buy The Latest BMW X1
            </h2>
            <p className='text-sm md:text-xl font-semibold text-white'>
                Buy the latest BMW X1 from us and get the best price discount now. Watch trailer now.
            </p>
        </div>
    );
};

export default VideoAdd;