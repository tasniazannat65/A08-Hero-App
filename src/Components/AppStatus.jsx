import React from 'react';
import { FaDownload, FaGooglePlay, FaStar } from "react-icons/fa";

const AppStatus = () => {
    return (
          <div className='bg-linear-to-b from-[#632EE3] to-[#9F62F2] p-20 space-y-10 w-full '>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl text-white text-center'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center gap-5'>
                    <div className='flex justify-around  items-center  text-center bg-white rounded-lg shadow-sm p-4  flex-1 w-full h-auto hover:scale-105 transition ease-in-out'>
                        <div className=' space-y-2  lg:space-y-5'>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>Total Downloads</p>
                        <h3 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-2xl md:text-4xl lg:text-6xl font-extrabold '>29.6M</h3>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent'>21% more than last month</p>
                        </div>
                        
                     <FaDownload className='text-[#9F62F2] w-5 md:w-6 lg:w-10 h-5 md:h-6 lg:h-10'/>

                        
                    </div>

                   <div className='flex justify-around items-center  text-center bg-white rounded-lg shadow-sm p-4  flex-1 w-full h-auto  hover:scale-105 transition ease-in-out'>
                     <div className=' space-y-2  lg:space-y-5'>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>Total Reviews</p>
                        <h3 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-2xl md:text-4xl lg:text-6xl font-extrabold '>906K</h3>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent'>46% more than last month</p>
                    </div>
                    <FaStar className='text-[#9F62F2] w-5 md:w-6 lg:w-10 h-5 md:h-6 lg:h-10'/> 
                   </div>
                   <div className='flex justify-around items-center  text-center bg-white rounded-lg shadow-sm p-4  flex-1 w-full h-auto  hover:scale-105 transition ease-in-out'>
                     <div className=' space-y-2  lg:space-y-5'>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>Active Apps</p>
                        <h3 className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-2xl md:text-4xl lg:text-6xl font-extrabold '>132+</h3>
                        <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent'>31 more will Launch</p>
                       
                    </div>
                    <FaGooglePlay className='text-[#9F62F2] w-5 md:w-6 lg:w-10 h-5 md:h-6 lg:h-10 '/>

                   </div>
                </div>
            </div>
    );
};

export default AppStatus;