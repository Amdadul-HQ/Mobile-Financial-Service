import React from "react";
import { getEmailFromLocalStroage } from "../Utils/localStroage";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const PrivateRoutes =  ({ children }) => {

    const {data:isValied,isLoading} = useQuery({
        queryKey:['valid',getEmailFromLocalStroage()],
        queryFn:async()=>{
            const {data} = await axios.get(`http://localhost:5000/validuser/${getEmailFromLocalStroage()}`)
            return data
        }
    })
    console.log(isValied);
    if(isLoading)return <h1>Loading....</h1>
    if(isValied === true)return children
    if(!isValied) return <Navigate to='/'/>

//   await axios
//     .get(`http://localhost:5000/validuser/${getEmailFromLocalStroage()}`)
//     .then((res) => {
//       console.log(res.data);
//       if (res.data === true) {
//         return children;
//       } else {
//         return <Navigate to="/" />;
//       }
//     });
};

export default PrivateRoutes;
