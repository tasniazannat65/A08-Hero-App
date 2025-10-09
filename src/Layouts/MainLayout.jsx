import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';
  import { ToastContainer} from 'react-toastify';




const MainLayout = () => {
    
    return (
        <div className='flex flex-col min-h-screen bg-[#D2D2D2]'>
          
             <Navbar></Navbar>
             
             
                <main className='flex-1 overflow-y-auto'>
                    
                <Outlet></Outlet>
            </main>
            
             <Footer></Footer>
            
            <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"

           />
          
        </div>
    );
};

export default MainLayout;