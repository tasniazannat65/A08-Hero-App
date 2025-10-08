import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';
import Container from '../Container/Container';

const PageError = () => {
    return (
        <div>
            <Navbar></Navbar>
    <div className='bg-[#D2D2D2]'>
              <Container>
             <div className='flex flex-col items-center justify-center text-center py-4 md:py-6 lg:py-10 space-y-3 '>
            <img src={errorImg} alt="" />
            <h3 className='font-semibold text-5xl text-[#001931]'>Oops, page not found!</h3>
            <p className='text-[#627382] text-xl'>The page you are looking for is not available.</p>
           <Link to='/' className='btn font-semibold text-lg text-white p-6 shadow-sm rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</Link>

           </div>
          </Container>
    </div>
            <Footer></Footer>
        </div>
    );
};

export default PageError;