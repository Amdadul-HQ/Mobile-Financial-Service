import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/RegisterPage/Register";
import Login from "../Pages/LoginPage/Login";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import Management from "../Pages/Management/Management";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/home',
                element:<PrivateRoutes><Home/></PrivateRoutes>
            },
            {
                path:'/paymenthistory',
                element:<PrivateRoutes><PaymentHistory/></PrivateRoutes>
            },
            {
                path:'/management',
                element:<Management/>
            }
        ]
    }
])

export default router;