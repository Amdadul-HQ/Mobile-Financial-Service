import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/RegisterPage/Register";
import Login from "../Pages/LoginPage/Login";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import Management from "../Pages/Management/Management";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/paymenthistory',
                element:<PaymentHistory/>
            },
            {
                path:'/management',
                element:<Management/>
            }
        ]
    }
])

export default router;