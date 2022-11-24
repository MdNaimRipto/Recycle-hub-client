import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;