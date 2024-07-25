import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getEmailFromLocalStroage } from '../../Utils/localStroage';
import axios from 'axios';

const SendMoneyHistory = () => {
    const {data=[]} =useQuery({
        queryKey:['payment',getEmailFromLocalStroage()],
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:5000/payment/${getEmailFromLocalStroage()}`)
            const data = response.data;
            return data
        }
    }) 
    return (
        <section className='my-10'>
            <div className='bg-slate-200 shadow-slate-200 shadow-xl rounded-2xl p-4'>
<h1>Send Money History</h1>
                <div>
                <section className="container mx-auto">

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-x-3">
                                        <span>Payment Type</span>
                                    </div>
                                </th>

                                <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center">
                                        <span>Receiver</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-2">
                                        <span>Amount</span>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {
                               data ? data.map(item => <tr key={item._id}>
                                <td className="px-2 py-1 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">

                                        <div className="flex items-center gap-x-2">
                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white ">{item?.transitionType} </h2>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-2 py-1 text-sm font-medium text-gray-700 whitespace-nowrap">
                                   <p>{item?.receiverName}</p>
                                   <p>{item?.receiverphone}</p>
                                </td>
                                <td className="px-2 py-1 flex flex-col gap-y-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                               <p>{item?.amount} Tk</p>
                                </td>
                                
                            </tr>)
                            : <></>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</section>
                </div>
            </div>
        </section>
    );
};

export default SendMoneyHistory;