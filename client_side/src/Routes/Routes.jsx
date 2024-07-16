import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/RegisterPage/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Register/>
            }
        ]
    }
])

export default router;