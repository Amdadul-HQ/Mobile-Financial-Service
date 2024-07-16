import React, { useState } from "react";
import Lottie from "lottie-react";
import balance from "../../assets/balance.json";
import sendmoney from "../../assets/sendmoney.json";
import cashin from "../../assets/cashin.json";
import cashout from "../../assets/cashout.json";
import transfer from "../../assets/transfer.json";
import SendMoneyModal from "../../Components/Modal/SendMoneyModal";
import SendMoney from "../../Components/SendMoney";
import CashIn from "../../Components/CashIn";
import CashOut from "../../Components/CashOut";
import TransferMoney from "../../Components/TransferMoney";
const UserHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="bg-slate-200 px-5 w-full mt-6 border shadow-slate-200 shadow-2xl rounded-xl ">
        <div className="w-40 flex justify-center flex-col items-center mx-auto">
          <Lottie animationData={balance}></Lottie>
        </div>
        <h1 className="text-3xl py-2 text-center font-semibold">
          Total Balance: 500 Tk
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
    </div>
  );
};

export default UserHome;
