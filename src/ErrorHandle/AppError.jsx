import React from 'react';
import appErrorImg from '../assets/App-Error.png'

import Container from '../Container/Container';
import { Link } from 'react-router';

const AppError = () => {
    return (
         
           
    <div>
              <Container>
             <div className='flex flex-col items-center justify-center text-center py-4 md:py-6 lg:py-10 space-y-3 '>
            <img src={appErrorImg} alt="" />
            <h3 className='font-semibold text-5xl text-[#001931]'>Oops, apps not found!</h3>
            <p className='text-[#627382] text-xl'>The apps you are looking for is not available.</p>
           <Link to='/' className='btn font-semibold text-lg text-white p-6 shadow-sm rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</Link>

           </div>
          </Container>
    </div>
            
        
    );
};

export default AppError;