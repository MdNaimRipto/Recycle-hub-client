import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../../Assets/logo.png"

const Navbar = () => {

    const [dark, setDark] = useState(false)
    const handleDark = () => {
        setDark(!dark)
        localStorage.setItem("dark-mode", !dark)
    }
    useEffect(() => {
        if (dark) {
            document.querySelector("html").setAttribute("data-theme", "dark")
        }
        else {
            document.querySelector("html").setAttribute("data-theme", "recycleHubTheme")
        }
    }, [dark])
    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem("dark-mode"))
        setDark(localDark)
    }, [])

    const MenuItems =
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <div className="dropdown dropdown-end hidden md:hidden lg:block">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link className="justify-between">
                            Profile
                        </Link>
                    </li>
                    <li className='flex justify-between items-center'>
                        <Link>Dark Mode</Link>
                        <input type="checkbox" onClick={handleDark} className="toggle" defaultChecked />
                    </li>
                    <li><Link>Logout</Link></li>
                </ul>
            </div>
        </>
    return (
        <div className="navbar bg-base-100 py-6 container mx-auto border-b border-gray-300">
            <div className="navbar-start flex-row-reverse justify-between w-full">
                <div className='flex'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72 font-semibold">
                            {MenuItems}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end block md:block lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li className='flex justify-between items-center flex-row'>
                                <Link>Dark Mode</Link>
                                <input type="checkbox" onClick={handleDark} className="toggle" defaultChecked />
                            </li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to="/"
                    className="font-bold flex justify-between items-center w-[52%] md:w-[38%]">
                    <div className='w-1/4'>
                        <img src={logo} alt="" />
                    </div>
                    <span className='text-2xl md:text-4xl'>Recycle Hub</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {MenuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;