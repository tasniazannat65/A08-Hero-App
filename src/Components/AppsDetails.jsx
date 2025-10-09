import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hook/useApps';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import Container from '../Container/Container';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import AppError from '../ErrorHandle/AppError';
import { getInstallationApps, installationAppsAddToDB } from '../Utilities/AddToInstallationDB';
import LoadingSpinner from './LoadingSpinner';
import { toast } from 'react-toastify';

const AppsDetails = () => {
    const {id} = useParams();
    const {apps, loading} = useApps();
    const [isInstall, setIsInstall] = useState(false);

   
    const app = apps.find(app=> app.id === Number(id));
    const {image, title, companyName, downloads, ratingAvg, reviews, description, size } = app || {};

     useEffect(()=>{
         if(app){
            const installedApp = getInstallationApps()
            const installed = installedApp.some(p=> p.id === app.id)
            setIsInstall(installed)
        }
        
      },[app])


       const handleInstalled = ()=>{
    
    setIsInstall(true)
    installationAppsAddToDB(app)
       
        toast.success(`Yahoo ⚡!! ${app.title} Installed Successfully`);
       
       
   }

    
    const ratingsData = app?.ratings.map(rating=>({
        
        name: rating.name,
        count: rating.count
    
    }))
    if(loading){
        return <LoadingSpinner/>
    }

    if(!app){
        return <AppError></AppError>
    }

     


  


    return (
        <Container>
            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-6 py-4 md:py-6 lg:py-10'>
            <img className='w-[350px] h-[350px] object-cover overflow-hidden shadow rounded-sm' src={image} alt={title} />
           <div className='flex-1 space-y-2 md:space-y-3 lg:space-y-5 text-center lg:text-left'>
             <h2 className='font-bold text-3xl text-[#001931]'>{title}</h2>
            <p className='text-xl text-[#627382]'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold bg-clip-text text-transparent'>{companyName}</span></p>
            
            <div className='flex flex-wrap md:flex-row lg:flex-row justify-center md:justify-start lg:justify-start gap-3 md:gap-5  lg:gap-7 border-t-2 border-t-[#632ee380] pt-3'>
                <div className='flex flex-col  items-center  lg:items-start text-center  lg:text-left space-y-2 '>
                 
                      <img className='w-8 h-8 object-contain' src={downloadIcon} alt="download-icon" />
                  
                    <p className='text-[#001931]'>Downloads</p>
                    <h3 className='font-extrabold text-xl md:text-2xl  lg:text-4xl text-[#001931]'>{downloads}M</h3>
                </div>
                <div className='flex flex-col items-center  lg:items-start text-center lg:text-left space-y-2 '>
                    <img className='w-8 h-8 object-contain' src={ratingIcon} alt="ratings-icon" />
                    <p className='text-[#001931]'>Average Ratings</p>
                    <h3 className='font-extrabold text-xl md:text-2xl  lg:text-4xl text-[#001931]'>{ratingAvg}</h3>
                </div>
                <div className='flex flex-col items-center  lg:items-start text-center lg:text-left space-y-2 '>
                    <img className='w-8 h-8 object-contain' src={reviewIcon} alt="review-icons" />
                    <p className='text-[#001931]'>Total Reviews</p>
                    <h3 className='font-extrabold text-xl md:text-2xl  lg:text-4xl text-[#001931]'>{reviews}</h3>
                </div>
            </div>
            <button disabled={isInstall} onClick={handleInstalled} className='hover:cursor-pointer text-xl font-semibold text-white bg-linear-to-r from-[#00d390] to-[#00d3909e] rounded-sm px-4 py-3 lg:px-5 lg:py-4'> {isInstall === true ?'Installed' : (`Install Now (${size} MB)`)}
            
            </button>
           </div>
            
        </div>
        <div className='border-t-2 opacity-20 pb-10'></div>

      <div className='py-4 md:py-6 lg:py-10'>
          <h3 className='text-3xl font-bold text-[#001931] pb-5'>Ratings</h3>
        <div className='bg-base-100  rounded-xl p-4 h-80 '>
            <ResponsiveContainer width='100%' height='100%'>
             <BarChart data={ratingsData} layout='vertical'>
                <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                <XAxis type='number'></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <YAxis type='category' dataKey='name'></YAxis>
                <Bar dataKey='count' fill='#FF8811'></Bar>
             </BarChart>
            </ResponsiveContainer>

        </div>
      </div>
      <div className='pb-4 md:pb-6 lg:pb-10'>
        <h3 className='text-2xl font-semibold text-[#001931] pb-5'>Description</h3>
        <p className='text-[#627382] text-xl'>{description}</p>
      </div>
        </Container>
    );
};

export default AppsDetails;