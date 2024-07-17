import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getEmailFromLocalStroage } from "../../Utils/localStroage";

const CashInRequestModal = ({ setIsEditModalOpen, isOpen }) => {
  const { data = [], refetch } = useQuery({
    queryKey: ["cashinRequest", getEmailFromLocalStroage()],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/cashinrequest/${getEmailFromLocalStroage()}`
      );
      const data = response?.data;
      return data;
    },
  });
  const handleApprove = async(id,number,amount)=>{
    console.log(id,number);
    await axios.patch(`http://localhost:5000/cashinapproved/${getEmailFromLocalStroage()}`,{id,number,amount})
    .then(res =>{
      console.log(res);
      refetch()
    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Cash In Request
                </DialogTitle>
                <div className="mt-2 w-full">
                  <section className="container mx-auto">
                    <div className="flex flex-col mt-6">
                      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                  <th
                                    scope="col"
                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                  >
                                    <div className="flex items-center gap-x-3">
                                      <span>Number</span>
                                    </div>
                                  </th>

                                  <th
                                    scope="col"
                                    className="px-5 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                  >
                                    <button className="flex items-center gap-x-2">
                                      <span>Amount</span>
                                    </button>
                                  </th>

                                  <th
                                    scope="col"
                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                  >
                                    <button className="flex items-center gap-x-2">
                                      <span>Action</span>
                                    </button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {
                                  data && data.map(item=><tr key={item.requestId}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                      <div className="inline-flex items-center gap-x-3">
                                        <p>{item.requestNumber}</p>
                                      </div>
                                    </td>
                                    <td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                      <p>{item.requestAmount} TK</p>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                      <div onClick={()=>handleApprove(item.requestId,item.requestNumber,item.requestAmount)} className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                        <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M10 3L4.5 8.5L2 6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
  
                                        <h2 className="text-sm font-normal">
                                          Accept
                                        </h2>
                                      </div>
                                    </td>
                                  </tr>)
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 space-x-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => setIsEditModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </section>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CashInRequestModal;
