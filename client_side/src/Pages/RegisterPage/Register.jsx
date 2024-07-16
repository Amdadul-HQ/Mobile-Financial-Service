import React from 'react';

const Register = () => {
    return (
        <section className='min-h-[calc(100vh-70px)] px-3 w-full flex justify-center items-center'>
        <div className='w-full'>
        <h1 className='text-2xl text-center font-semibold py-3'>Register Now</h1>
        <div className='w-full'>
        <form>
            <div className='mt-3 text-xl'>
            <label className='block' htmlFor='name'>Full Name</label>
            <input name='name' className='block w-full h-10 px-3 py-1 bg-gray-200 rounded-md' required type='text' id='name' placeholder='Full Name'></input>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block' htmlFor='email'>Email</label>
            <input name='name' className='block w-full h-10 px-3 py-1 bg-gray-200 rounded-md' required type='email' id='email' placeholder='jhondeo@gmail.com'></input>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block' htmlFor='phone'>Phone Number</label>
            <input name='name' className='block w-full h-10 px-3 py-1 bg-gray-200 rounded-md' required type='tel' id='phone' placeholder='01XXXXX'></input>
            </div>
            <div className='text-xl'>
                <p>Join As</p>
                <div className='flex items-center justify-around'>
                    <div className='flex items-center justify-center flex-col gap-y-2'>
                    <label className='block'  htmlFor='agent'>Agent</label>
                <input name='joinas' value='agent' type='radio' id='agent'></input>
                
                    </div>
                    <div className='flex items-center justify-center flex-col gap-y-2'>
                    <label  className='block' htmlFor='user'>User</label>
                    <input name='joinas' value='user' type='radio' id='user'></input>
                    </div>
                </div>
            </div>
            <div className='mt-3 text-xl'>
            <label className='block' htmlFor='pin'>Enter Your PIN</label>
            <input name='pin' type='number' className='block w-full h-10 px-3 py-1 bg-gray-200 rounded-md' required id='pin' placeholder='PIN'></input>
            </div>
            <div>
                <button type='submit' className='text-xl w-full py-2 bg-blue-500 rounded-xl text-white mt-2'>Sign Up</button>
            </div>
        </form>
        </div>
        </div>
        </section>
    );
};

export default Register;