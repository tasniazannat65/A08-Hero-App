import React from 'react';
import logoImg from '../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center  min-h-screen animate-spin transition duration-300 ease-in-out'>
            <p className='font-bold text-2xl md:text-3xl lg:text-5xl flex items-center animate-pulse'>L  <span><img className='w-10 h-10 mx-2 animate-spin ' src={logoImg} alt="" /></span> O A D I N G</p>
        </div>
    );
};

export default LoadingSpinner;