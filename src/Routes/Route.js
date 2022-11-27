import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import LoginRegisterLayout from "../Layout/LoginRegisterLayout"
import Main from "../Layout/Main"
import AllCars from "../Pages/Cars/AllCars"
import CategoryItems from "../Pages/CategoryItems/CategoryItems"

import Dashboard from "../Pages/Dashboard/Dashboard"
import MyOrders from "../Pages/Dashboard/MyOrders"
import Home from "../Pages/Home/Home"
import Login from "../Pages/LoginRegister/Login"
import Register from "../Pages/LoginRegister/Register"
import ErrorPage from "../Pages/Shared/ErrorPage"
import BuyerRoute from "./BuyerRoute"
// import Loading from "../Pages/Shared/Loading"
import PrivateRoute from "./PrivateRoute"

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
                element: <PrivateRoute><AllCars /></PrivateRoute>
            },
            {
                path: "/categoryItem/:id",
                element: <CategoryItems />,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/categoryItem/${params?.id}`)
                }
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