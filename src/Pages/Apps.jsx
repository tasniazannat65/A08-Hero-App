import React, { useState } from 'react';
import Container from '../Container/Container';
import useApps from '../Hook/useApps';
import AppsCard from '../Components/AppsCard';
import NoAppFound from './NoAppFound';

const Apps = () => {
    const {apps} = useApps();
    const [search, setSearch] = useState('');
    const trimApps = search.trim().toLocaleLowerCase();
    const searchedApps = trimApps ? apps.filter(app => app.title?.toLocaleLowerCase().includes(trimApps)) : apps;
    

    return (
        <div>
          <Container>
              <div className='py-4 md:py-6 lg:py-10'>
                <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-[#001931] text-center mb-4'>Our All Applications</h2>
                <p className='text-[#627382] text-xl text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className='flex flex-col md:flex-row lg:flex-row space-y-3 lg:space-y-0 justify-between items-center my-10'>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl text-[#001931]'>({searchedApps.length}) Apps Found</h3>
                    <label className="input input-primary border-2">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={e=> setSearch(e.target.value)} type='search'  placeholder="Search Apps" />
</label>
                </div>

                {
                    searchedApps.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                       searchedApps.map(app=> <AppsCard key={app.id} app={app}></AppsCard>)
                    }
                </div>) : (<NoAppFound setSearch={setSearch}></NoAppFound>)
                }
               
                 
            </div>
          </Container>
         
        </div>
    );
};

export default Apps;