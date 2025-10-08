import React from 'react';
import heroImg from '../assets/hero.png'
import googlePlay from '../assets/google-play-store.png'
import appStore from '../assets/app-store.png'



const Banner = () => {
    return (
       
       
             
             <div className='flex flex-col justify-center items-center text-center space-y-5 pt-4 md:pt-6 lg:pt-10'>
                
                {/* banner-content */}
                <div className='space-y-5'>
                    <h1 className='text-[#001931] font-bold text-3xl md:text-5xl lg:text-7xl'>We Build <br />
                   <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>Productive</span> Apps</h1>
                   <p className='text-[#627382] text-sm md:text-lg lg:text-xl'>At HERO.AppBari, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                   <div className='space-x-3'>
                    <a href='https://play.google.com/store/games?hl=en' target='blank' className='btn bg-white font-semibold text-sm md:text-lg lg:text-xl text-[#001931] px-4 py-3 lg:px-6 lg:py-4 rounded-sm shadow-sm hover:bg-gray-200'>
                        <img className='w-6 h-6' src={googlePlay} alt="google-play-store" />
                        
                        Google Play</a>
                   <a href='https://www.apple.com/app-store/' target='blank' className='btn bg-white font-semibold text-sm md:text-lg lg:text-xl text-[#001931] px-4 py-3 lg:px-6 lg:py-4 rounded-sm shadow-sm hover:bg-gray-200'>
                    <img className='w-6 h-6' src={appStore} alt="app-store" />
                    App Store</a>
                   </div>

                </div>
                {/* banner-image */}
                <div>
                    <img src={heroImg} alt="hero-image" />

                </div>
                 
            </div>
            
       
          
           
           
            
          
       
    );
};

export default Banner;