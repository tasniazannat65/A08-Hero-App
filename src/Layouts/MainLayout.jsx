import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Container from '../Container/Container';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-[100vh] bg-[#D2D2D2]'>
          
             <Navbar></Navbar>
             <Container>
                <main className=' flex-1'>
                <Outlet></Outlet>
            </main>
             </Container>
            
          
        </div>
    );
};

export default MainLayout;