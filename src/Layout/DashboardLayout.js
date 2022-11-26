import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
        </>
    );

};

export default DashboardLayout;