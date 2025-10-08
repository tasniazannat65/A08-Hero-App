import React from 'react';
import AppsCard from './AppsCard';
import Container from '../Container/Container';
import { Link } from 'react-router';

const AppCardContainer = ({featuredApps}) => {
    return (
       <Container>
        <div className='pt-4 md:pt-6 lg:pt-10'>
            <h2 className='text-5xl font-bold text-[#001931] pb-5 text-center'>Trending Apps</h2>
            <p className='text-[#627382] text-xl text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                featuredApps.map(app=> <AppsCard key={app.id} app={app}></AppsCard>)
            }
        </div>
        <div className='text-center py-10'>
        <Link to='/apps' className='btn font-semibold text-lg text-white px-20 py-6 shadow-sm rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>

        </div>
        </div>
       </Container>
    );
};

export default AppCardContainer;