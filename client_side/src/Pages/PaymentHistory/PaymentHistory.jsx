import SendMoneyHistory from "./SendMoneyHistory";


const PaymentHistory = () => {

    return (
        <section className='my-10 px-4'>
            <div className='bg-slate-200 shadow-slate-200 shadow-xl rounded-2xl p-4'>
                <h1 className='text-lg font-medium text-center leading-6 text-gray-900'>Payment History</h1>
            </div>
            <SendMoneyHistory/>
        </section>
    );
};

export default PaymentHistory;