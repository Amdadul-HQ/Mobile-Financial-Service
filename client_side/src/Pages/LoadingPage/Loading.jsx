import React from 'react';
import loading from '../../assets/loading.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
           <Lottie animationData={loading}/> 
        </div>
    );
};

export default Loading;