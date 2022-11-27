import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { useBuyer } from '../Hooks/useBuyer';
import { AuthContext } from '../ContextProvider/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile container mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden p-5">
                        <AiOutlineMenuUnfold className='text-3xl' />
                    </label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-base-100 text-base-content font-semibold">
                        {
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                {
                                    isBuyer &&
                                    <>
                                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                        <li><Link to="/dashboard/wishlists">Wishlists</Link></li>
                                    </>
                                }
                                <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>
    );

};

export default DashboardLayout;