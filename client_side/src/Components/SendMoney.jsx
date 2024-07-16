import Lottie from "lottie-react";
import sendmoney from '../assets/sendmoney.json'
import React, { useState } from "react";
import SendMoneyModal from "./Modal/SendMoneyModal";

const SendMoney = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      onClick={() => setIsEditModalOpen(true)}
      className="bg-white w-full relative shadow-slate-300 border-2 p-2 shadow-2xl flex flex-col justify-center items-center rounded-3xl h-[150px]"
    >
      <div className="w-28 mx-auto">
        <Lottie animationData={sendmoney} />
      </div>
      <h1 className="text-xl font-medium text-center absolute bottom-2">
        Send Money
      </h1>
      <SendMoneyModal
            isOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
    </div>
  );
};

export default SendMoney;
