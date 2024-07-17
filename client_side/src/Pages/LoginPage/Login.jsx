import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { saveEmailInLocalStroage } from '../../Utils/localStroage';

const Login = () => {
    const login=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pin = form.pin.value;
        const userCredential = {email,pin}
        console.log(userCredential);
        axios.post('http://localhost:5000/login',userCredential)
        .then(res =>{
            saveEmailInLocalStroage(JSON.stringify(email))
            console.log(res);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section className='min-h-[calc(100vh-70px)] px-3 w-full flex justify-center items-center'>
        <div className='w-full'>
        <div className='w-full shadow-slate-400 shadow-2xl bg-slate-100 p-5 rounded-2xl'>
        <h1 className='text-2xl text-center font-semibold py-3'>Log In</h1>
        <form onSubmit={login}>
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='email'>Email</label>
            <input name='email' className='block w-full h-10 px-3 py-1  rounded-md' required type='email' id='email' placeholder='jhondeo@gmail.com'></input>
            </div>
            {/* <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='phone'>Phone Number</label>
            <input name='name' className='block w-full h-10 px-3 py-1  rounded-md' required type='tel' id='phone' placeholder='01XXXXX'></input>
            </div> */}
            <div className='mt-3 text-xl'>
            <label className='block font-medium mb-1' htmlFor='pin'>Enter Your PIN</label>
            <input name='pin' type='password' className='block w-full h-10 px-3 py-1  rounded-md' required id='pin' placeholder='PIN'></input>
            </div>
            <div>
                <button type='submit' className='text-xl w-full py-2 bg-blue-500 rounded-xl text-white mt-2'>Log in</button>
            </div>
        </form>
        <div className="divider">Or</div>
            <p className='text-xl mt-2 flex items-center text-center justify-center gap-x-2'>Don't have a account? <Link className='font-medium text-blue-500' to='/'>Register</Link></p>
        </div>
        </div>
        </section>
    );
};

export default Login;