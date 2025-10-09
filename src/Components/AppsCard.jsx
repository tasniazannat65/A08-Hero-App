import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'


const AppsCard = ({app}) => {
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        Swal.fire({
           title: 'View App Details?',
           text:  `Do you want to see details of '${app.title}?`,
           imageUrl: app.image,
           imageWidth: 120,
           imageHeight: 120,
           showCancelButton: true,
           confirmButtonText: 'Yes, show me!',
           cancelButtonText: 'Cancel',
           background: '#f0f4f8',
           confirmButtonColor: '#00d390',
           cancelButtonColor: '#d33',
           backdrop: `
           rgba(0,0,123,0.4)
           left top
           no-repeat
           `

        }).then((result)=> result.isConfirmed &&  navigate(`/apps/${app.id}`))


    }

    return (
        <div onClick={()=>handleNavigate(app.id)} className='bg-white rounded-lg p-4 shadow-sm space-y-3 hover:scale-105 transition ease-in-out'>
            
                <img className='w-full h-[316px] object-cover rounded-md overflow-hidden' src={app.image} alt={app.title} />
            
            <h3 className='font-medium text-xl text-[#001931]'>{app.title}</h3>
            <div className='flex justify-between items-center'>
                <p className='flex items-center badge bg-[#F1F5E8] rounded-sm px-[10px] py-[6px]'>
                    <img className='w-4 h-4' src={downloadIcon} alt="" />
                    <span className='text-[#00D390] font-medium'>{app.downloads}M</span></p>
            <p className=' flex items-center badge bg-[#FFF0E1] rounded-sm px-[10px] py-[6px]'>
                <img className='w-4 h-4' src={ratingIcon} alt="" />
                <span className='text-[#FF8811] font-medium'>{app.ratingAvg}</span></p>
            </div>
        </div>
    );
};

export default AppsCard;