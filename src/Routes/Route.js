import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import LoginRegisterLayout from "../Layout/LoginRegisterLayout"
import Main from "../Layout/Main"
import Blogs from "../Pages/Blogs/Blogs"
import AllCars from "../Pages/Cars/AllCars"
import CategoryItems from "../Pages/CategoryItems/CategoryItems"
import AddProducts from "../Pages/Dashboard/AddProducts"
import AllBuyers from "../Pages/Dashboard/AllBuyers"
import AllSellers from "../Pages/Dashboard/AllSellers"

import Dashboard from "../Pages/Dashboard/Dashboard"
import MyOrders from "../Pages/Dashboard/MyOrders"
import MyProducts from "../Pages/Dashboard/MyProducts"
import Wishlists from "../Pages/Dashboard/Wishlists"
import Home from "../Pages/Home/Home"
import Login from "../Pages/LoginRegister/Login"
import Register from "../Pages/LoginRegister/Register"
import ErrorPage from "../Pages/Shared/ErrorPage"
import AdminRoute from "./AdminRoute"
import BuyerRoute from "./BuyerRoute"
// import Loading from "../Pages/Shared/Loading"
import PrivateRoute from "./PrivateRoute"
import SellerRoute from "./SellerRoute"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/allCars",
                element: <AllCars />
            },
            {
                path: "/categoryItem/:id",
                element: <CategoryItems />,
                loader: async ({ params }) => {
                    return fetch(`https://recycle-hub-server.vercel.app/categoryItem/${params?.id}`)
                }
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dashboard/myOrders",
                element: <BuyerRoute><MyOrders /></BuyerRoute>
            },
            {
                path: "/dashboard/wishlists",
                element: <BuyerRoute><Wishlists /></BuyerRoute>
            },
            {
                path: "/dashBoard/addProduct",
                element: <SellerRoute><AddProducts /></SellerRoute>
            },
            {
                path: "/dashBoard/myProducts",
                element: <SellerRoute><MyProducts /></SellerRoute>,
                loader: async () => {
                    return fetch('https://recycle-hub-server.vercel.app/allSellers')
                }
            },
            {
                path: "/dashBoard/allBuyers",
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: "/dashBoard/allSellers",
                element: <AdminRoute><AllSellers /></AdminRoute>
            }
        ]
    },
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <LoginRegisterLayout />,
        children: [
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])