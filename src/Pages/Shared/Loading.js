import React from 'react';
import { ScaleLoader } from 'react-spinners';



const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <ScaleLoader color="#ff5200" />
        </div>
    );
};

export default Loading;