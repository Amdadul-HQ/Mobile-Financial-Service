import React, { useState } from 'react';
import TransferModal from './Modal/TransferModal';
import transfer from '../assets/transfer.json'
import Lottie from 'lottie-react';

const TransferMoney = () => {
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
        <Lottie animationData={transfer} />
      </div>
      <h1 className="text-xl font-medium text-center absolute bottom-2">
        Transfer
      </h1>
      <TransferModal
            isOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
    </div>
    );
};

export default TransferMoney;