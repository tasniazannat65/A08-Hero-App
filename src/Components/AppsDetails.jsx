import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hook/useApps';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import Container from '../Container/Container';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppsDetails = () => {
    const {id} = useParams();
    const {apps} = useApps();
   
    const findAppDetails = apps.find(app=> app.id === Number(id));
    const {image, title, companyName, downloads, ratingAvg, reviews, description } = findAppDetails || {};
    
    const ratingsData = findAppDetails?.ratings.map(rating=>({
        
        name: rating.name,
        count: rating.count
    
    }))



    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-center gap-6 py-4 md:py-6 lg:py-10'>
            <img className='w-[350px] h-[350px] object-cover overflow-hidden shadow rounded-sm' src={image} alt="" />
           <div className='flex-1 space-y-5'>
             <h2 className='font-bold text-3xl text-[#001931]'>{title}</h2>
            <p className='text-xl text-[#627382]'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold bg-clip-text text-transparent'>{companyName}</span></p>
            
            <div className='flex gap-7 border-t-2 border-t-[#632ee380] pt-3'>
                <div className='space-y-3'>
                    <img src={downloadIcon} alt="" />
                    <p className='text-[#001931]'>Downloads</p>
                    <h3 className='font-extrabold text-4xl text-[#001931]'>{downloads}</h3>
                </div>
                <div className='space-y-3'>
                    <img src={ratingIcon} alt="" />
                    <p className='text-[#001931]'>Average Ratings</p>
                    <h3 className='font-extrabold text-4xl text-[#001931]'>{ratingAvg}</h3>
                </div>
                <div className='space-y-3'>
                    <img src={reviewIcon} alt="" />
                    <p className='text-[#001931]'>Total Reviews</p>
                    <h3 className='font-extrabold text-4xl text-[#001931]'>{reviews}</h3>
                </div>
            </div>
            <button className='btn text-xl font-semibold text-white bg-linear-to-r from-[#00d390] to-[#00d3909e] rounded-sm px-5 py-4'>Install Now (291 MB)
            
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