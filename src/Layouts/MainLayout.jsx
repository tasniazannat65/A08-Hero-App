import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#D2D2D2]'>
          
             <Navbar></Navbar>
             
                <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            
             <Footer></Footer>
            
            
          
        </div>
    );
};

export default MainLayout;