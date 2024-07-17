import React, { useState } from 'react';
import CashInRequestModal from './Modal/CashInRequestModal';
import Lottie from 'lottie-react';
import request from '../assets/requestmoney.json'


const CashInRequest = () => {
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
        <Lottie animationData={request} />
      </div>
      <h1 className="text-xl font-medium text-center absolute bottom-2">
        Cash In Request
      </h1>
      <CashInRequestModal
            isOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
    </div>
    );
};

export default CashInRequest;