import { getEmailFromLocalStroage } from '../../Utils/localStroage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Management = () => {
    const {data = [],refetch} = useQuery({
        queryKey:['requestRole',getEmailFromLocalStroage()],
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:5000/request/${getEmailFromLocalStroage()}`);
            const data = response?.data;
            return data;
        }
    })
    const hanldeAccept =async (id,requstedRole) =>{
        console.log(requstedRole);
        await axios.put(`http://localhost:5000/accept/${id}`,{requstedRole})
        .then(res =>{
            console.log(res.data);
            refetch()
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <section className='my-10'>
            <div className='bg-slate-200 shadow-slate-200 shadow-xl rounded-2xl p-4'>
                <h1 className='text-lg font-medium text-center leading-6 text-gray-900'>Manage User & Agent</h1>
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
                                        <span>Profile</span>
                                    </div>
                                </th>

                                <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center">
                                        <span>Requested Role</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-2">
                                        <span>Action</span>
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
                                                <h2 className="font-medium text-gray-800 dark:text-white ">{item?.name}</h2>
                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item?.phoneNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-2 py-1 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                                   <p>{item?.requstedRole}</p>
                                </td>
                                <td className="px-2 py-1 flex flex-col gap-y-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <div onClick={()=>hanldeAccept(item._id,item.requstedRole)} className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Accept</h2>
                                    </div>
                                    <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Reject</h2>
                                    </div>

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

export default Management;