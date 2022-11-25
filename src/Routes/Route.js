import { createBrowserRouter } from "react-router-dom"
import LoginRegisterLayout from "../Layout/LoginRegisterLayout"
import Main from "../Layout/Main"
import AllCars from "../Pages/Cars/AllCars"
import CategoryItems from "../Pages/CategoryItems/CategoryItems"
import Home from "../Pages/Home/Home"
import Login from "../Pages/LoginRegister/Login"
import Register from "../Pages/LoginRegister/Register"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/categoryItem/${params.id}`)
                }
            }
        ]
    },
    {
        path: "/",
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