import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Container from '../Container/Container';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#D2D2D2]'>
          
             <Navbar></Navbar>
             <Container>
                <main className='flex-1'>
                <Outlet></Outlet>
            </main>
             </Container>
             <Footer></Footer>
            
            
          
        </div>
    );
};

export default MainLayout;