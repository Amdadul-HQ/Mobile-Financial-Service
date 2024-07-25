import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import axios from 'axios';
import { getEmailFromLocalStroage } from '../../Utils/localStroage';


const SendMoneyModal = ({ setIsEditModalOpen, isOpen }) => {
    const handleSendMoney = (e) =>{
      e.preventDefault()
      const form = e.target;
      const receiverphone = form.receiverphone.value;
      const pin = form.pin.value;
      const transitionType='send Money';
      const amount = parseFloat(form.amount.value);
      const senderEmail = getEmailFromLocalStroage()
      const date = new Date().toDateString()
      const sendMoneyData = {receiverphone,pin,amount,senderEmail,transitionType,date}
      axios.post('http://localhost:5000/sendmoney',sendMoneyData)
      .then(res =>{
        console.log(res.data);
      })
      .catch(error=>{
        console.log(error);
      })
    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsEditModalOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                  >
                    Send Money
                  </DialogTitle>
                  <div className='mt-2 w-full'>
                    <form onSubmit={handleSendMoney}>
                    <div>
                      <label htmlFor='phone'>Receiver Phone Number</label>
                      <input type='tel' name='receiverphone' id='phone' placeholder='Phone Number' className='h-10 px-3 py-1  rounded-md bg-slate-200 w-full' ></input>
                    </div>
                    <div>
                      <label htmlFor='amount'>Amount</label>
                      <input type="number" name='amount' id='amount' placeholder='Amount' className='h-10 px-3 py-1  rounded-md bg-slate-200 w-full'/>
                    </div>
                    <div>
                      <label htmlFor='pin'>PIN</label>
                      <input type="password" name='pin' id='pin' placeholder='PIN' className='h-10 px-3 py-1  rounded-md bg-slate-200 w-full'/>
                    </div>
                    <hr className='mt-8 ' />
                  <div className='mt-2 space-x-5'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                      
                    >
                      Send
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                      onClick={() => setIsEditModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                    </form>
                  </div>
                  
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default SendMoneyModal;