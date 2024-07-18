import React from "react";
import { getEmailFromLocalStroage } from "../Utils/localStroage";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Pages/LoadingPage/Loading";

const PrivateRoutes =  ({ children }) => {

    const {data:isValied,isLoading} = useQuery({
        queryKey:['valid',getEmailFromLocalStroage()],
        queryFn:async()=>{
            const {data} = await axios.get(`http://localhost:5000/validuser/${getEmailFromLocalStroage()}`,{withCredentials:true})
            return data
        }
    })
    console.log(isValied);
    if(isLoading)return <Loading/>
    if(isValied === true)return children
    if(!isValied) return <Navigate to='/'/>

};

export default PrivateRoutes;
