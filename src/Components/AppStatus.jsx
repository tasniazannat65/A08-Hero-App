import React from 'react';
import { FaDownload, FaGooglePlay, FaStar } from "react-icons/fa";

const AppStatus = () => {
    return (
          <div className='bg-linear-to-b from-[#632EE3] to-[#9F62F2] p-20 space-y-10 w-full '>
                <h2 className='font-bold text-5xl text-white text-center'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-3 place-items-center'>
                    <div className='flex items-center space-x-4'>
                        <div className='text-center space-y-5'>
                        <p className='text-white'>Total Downloads</p>
                        <h3 className='text-6xl font-extrabold text-white'>29.6M</h3>
                        <p className='text-white'>21% more than last month</p>
                        </div>
                        <FaDownload className='text-white w-10 h-10'/>
                    </div>

                   <div className='flex items-center space-x-4'>
                     <div className='text-center space-y-5'>
                        <p className='text-white'>Total Reviews</p>
                        <h3 className='text-6xl font-extrabold text-white'>906K</h3>
                        <p className='text-white'>46% more than last month</p>
                    </div>
                    <FaStar className='text-white w-10 h-10'/> 
                   </div>
                   <div className='flex items-center space-x-4'>
                     <div className='text-center space-y-5'>
                        <p className='text-white'>Active Apps</p>
                        <h3 className='text-6xl font-extrabold text-white'>132+</h3>
                        <p className='text-white'>31 more will Launch</p>
                       
                    </div>
                    <FaGooglePlay className='text-white w-10 h-10'/>

                   </div>
                </div>
            </div>
    );
};

export default AppStatus;