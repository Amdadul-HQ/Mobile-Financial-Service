import React, { useState } from "react";
import Lottie from "lottie-react";
import balance from "../../assets/balance.json";
import SendMoney from "../../Components/SendMoney";
import CashIn from "../../Components/CashIn";
import CashOut from "../../Components/CashOut";
import TransferMoney from "../../Components/TransferMoney";
import CashInRequest from "../../Components/CashInRequest";
import { useQuery } from "@tanstack/react-query";
import { getEmailFromLocalStroage } from "../../Utils/localStroage";
import axios from "axios";
import Loading from "../LoadingPage/Loading";
const UserHome = () => {

  const {data={},refetch,isLoading} = useQuery({
    queryKey:['info',getEmailFromLocalStroage()],
    queryFn:async()=>{
      const response = await axios.get(`http://localhost:5000/info/${getEmailFromLocalStroage()}`,{withCredentials:true})
      return response.data
    }
  })
  if(isLoading)return <Loading/>
  return (
    <div>
      <div className="my-5 shadow-slate-200 px-5 py-2 shadow-2xl rounded-xl bg-slate-200 w-full">
        <p className="text-2xl font-medium text-center">Welcome {data.name}</p>
      </div>
      <div className="bg-slate-200 px-5 w-full mt-6 border shadow-slate-200 shadow-2xl rounded-xl ">
        <div className="w-40 flex justify-center flex-col items-center mx-auto">
          <Lottie animationData={balance}></Lottie>
        </div>
        <h1 className="text-2xl py-2 text-center font-semibold">
          Total Balance: {data.totalAmount} Tk
        </h1>
      </div>
      <div className="p-4 border rounded-2xl mt-5 bg-slate-200 shadow-slate-200 shadow-xl">
        <h1 className="text-3xl font-medium my-4">Services</h1>
        <div className="grid grid-cols-2 gap-4">
          <SendMoney/>
          <CashIn/>
          <CashOut/>
          <TransferMoney/>
        </div>
      </div>
      {
        data.role ==='agent' && <div className="mt-5 bg-slate-200 shadow-slate-200 shadow-xl rounded-2xl p-4">
        <CashInRequest/>
        </div>
      }
    </div>
  );
};

export default UserHome;
