import React, { useState } from 'react';
import { getInstallationApps, removeFromInstallationAppsList } from '../Utilities/AddToInstallationDB';
import Container from '../Container/Container';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import useApps from '../Hook/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';
import { toast } from 'react-toastify';
import { SlSocialDropbox } from "react-icons/sl";

const Installation = () => {
    const [installedApp, setInstalledApp] = useState(()=> getInstallationApps())
    const [sortItem, setSortItem] = useState('none');
    const {loading} = useApps()

    const handleRemoveFromInstallation = (id)=>{
      const unInstalledApp = installedApp.find(p=> p.id === id)
        removeFromInstallationAppsList(id);
        setInstalledApp(prev => prev.filter(p=> p.id !== id));

        if(unInstalledApp){
          return toast.warn(`🗑️${unInstalledApp.title} un-installed from your Device`)
        }
      
    }

    const sortedInstalledApp = (()=>{
      if(sortItem === 'download-asc'){
        return[...installedApp].sort((a,b)=> a.downloads - b.downloads)
      }
      else if(sortItem === 'download-desc'){
         return[...installedApp].sort((a,b)=> b.downloads - a.downloads)
      }
      else{
        return installedApp;
      }

    })()
    return (
       <Container>
         <div className='py-4 md:py-6 lg:py-10'>
           <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-[#001931] text-center mb-5 flex justify-center items-center'>Your Installed Apps <span className='text-[#632EE3]'><SlSocialDropbox /></span></h2>
           <p className='text-xl text-[#627382] text-center mb-5'>Explore All Trending Apps on the Market developed by us</p>
           <div className='mb-5 flex flex-col md:flex-row lg:flex-row justify-between items-center'>
            <h3 className='font-semibold text-2xl mb-5 md:mb-0 lg:mb-0 text-[#001931]'>{sortedInstalledApp.length} Apps Found</h3>
            <select value={sortItem} onChange={e=> setSortItem(e.target.value)} className="select select-primary">
        
        <option value='none'>Sort by Size</option>
        <option value='download-asc'>Low-&gt;High</option>
      <option value='download-desc'>High-&gt;Low</option>
        </select>

           </div>
         {
          loading ? (<LoadingSpinner/>) : (  <div className='space-y-5'>
         {
            sortedInstalledApp.map(p=>(  <div key={p.id} className=' bg-white rounded-lg shadow-sm p-4'>
           <div className='flex justify-between items-center'>
             <div className='flex items-center gap-4'>
                <img className='w-20 h-20 object-cover rounded-sm' src={p.image} alt={p.title} />
                <div className='space-y-3'>
                    <h3 className='font-medium  md:text-lg lg:text-xl text-[#001931] '>{p.title}</h3>
                    <div className='flex gap-3'>
                        <p className='flex gap-2 '>
                            <img className='w-5 h-5 ' src={downloadIcon} alt="download-icon" />
                            <span className='text-[#00D390] font-medium'>{p.downloads}M</span></p>
                            <p className='flex gap-2 '>
                              <img className='w-5 h-5' src={ratingIcon} alt="ratingIcon" />
                              <span className='text-[#FF8811] font-medium'>{p.ratingAvg}</span></p>
                    <p className='text-[#627382]'>{p.size} MB</p>
                    </div>
                </div>
              

            </div>
         <button onClick={()=>handleRemoveFromInstallation(p.id)}  className='hover:cursor-pointer font-semibold text-white bg-linear-to-r from-[#00d390] to-[#00d3909e] rounded-sm p-3 lg:px-4 lg:py-3'>Uninstall
            
            </button>
           </div>

         </div>
            ))
         }

        

           
           </div>)
         }
            
        </div>
       </Container>
    );
};

export default Installation;