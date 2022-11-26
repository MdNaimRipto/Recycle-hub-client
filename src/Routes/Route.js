import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import LoginRegisterLayout from "../Layout/LoginRegisterLayout"
import Main from "../Layout/Main"
import AllCars from "../Pages/Cars/AllCars"
import CategoryItems from "../Pages/CategoryItems/CategoryItems"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Home from "../Pages/Home/Home"
import Login from "../Pages/LoginRegister/Login"
import Register from "../Pages/LoginRegister/Register"
import ErrorPage from "../Pages/Shared/ErrorPage"
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
                element: <PrivateRoute><CategoryItems /></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/categoryItem/${params.id}`)
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