import React from 'react';
import error from '../../assets/error.json'
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center h-screen flex-col items-center'>
            <Lottie animationData={error}/>
            <div>
                <button onClick={()=>navigate(-1)} className='bg-blue-400 px-5 py-2 rounded-xl text-xl font-medium text-white'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;