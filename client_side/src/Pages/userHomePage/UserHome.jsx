import React from 'react';
import Lottie from 'lottie-react';
import balance from '../../assets/balance.json'
import sendmoney from '../../assets/sendmoney.json'
import cashin from '../../assets/cashin.json'
import cashout from '../../assets/cashout.json'
import transfer from '../../assets/transfer.json'
const UserHome = () => {
    return (
        <div>
            <div className='bg-slate-200 px-5 w-full mt-6 border shadow-slate-200 shadow-2xl rounded-xl '>
                <div className='w-40 flex justify-center flex-col items-center mx-auto'>
                    <Lottie animationData={balance}></Lottie>
                </div>
                <h1 className='text-3xl py-2 text-center font-semibold'>Total Balance: 500 Tk</h1>
            </div>
                <div className='p-4 border rounded-2xl mt-5 bg-slate-200 shadow-slate-200 shadow-xl'>
                    <h1 className='text-3xl font-medium my-4'>Services</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white w-full relative shadow-slate-300 border-2 p-2 shadow-2xl flex flex-col justify-center items-center rounded-3xl h-[150px]'>
                            <div className='w-28 mx-auto'>
                                <Lottie animationData={sendmoney}/>
                            </div>
                            <h1 className='text-xl font-medium text-center absolute bottom-2'>Send Money</h1>
                        </div>
                        <div className='bg-white w-full relative shadow-slate-300 p-2 border-2 shadow-2xl flex flex-col justify-center items-center rounded-3xl h-[150px]'>
                            <div className='w-28 mb-3 mx-auto'>
                                <Lottie animationData={cashin}/>
                            </div>
                            <h1 className='text-xl font-medium text-center absolute bottom-2'>Cash In</h1>
                        </div>
                        <div className='bg-white w-full relative shadow-slate-300 p-2 border-2 shadow-2xl flex flex-col justify-center items-center rounded-3xl h-[150px]'>
                            <div className='w-28 mx-auto'>
                                <Lottie animationData={cashout}/>
                            </div>
                            <h1 className='text-xl font-medium text-center absolute bottom-2'>Cash Out</h1>
                        </div>
                        <div className='bg-white w-full relative shadow-slate-300 p-2 border-2 shadow-2xl flex flex-col justify-center items-center rounded-3xl h-[150px]'>
                            <div className='w-32 mx-auto'>
                                <Lottie animationData={transfer}/>
                            </div>
                            <h1 className='text-xl font-medium text-center absolute bottom-2'>Transfer</h1>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default UserHome;