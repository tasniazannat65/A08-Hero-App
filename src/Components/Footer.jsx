import React from 'react';
import logoImg from '../assets/logo.png'
import { Link } from 'react-router';
import Container from '../Container/Container';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
  <div className='bg-[#001931] text-white'>
    <Container>
  
<footer className="footer sm:footer-horizontal   ">
  <aside className='w-[350px]'>
    
   <Link to='/' className="flex items-center space-x-2">
               <img className='w-10 h-10' src={logoImg} alt="nav-logo" />
               <span className='text-white font-bold text-xl'>Hero.AppBari</span>
           </Link>
           <p>Hero.AppBari is a productivity-focused web platform that consolidates various apps and tools,  offering a seamless, responsive, and intuitive experience to enhance efficiency across devices.</p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 <nav>
    <h6 className="footer-title">Social</h6>
  <div className='grid grid-flow-col gap-4'>
      <a><FaFacebook className='w-6 h-6' /></a>
    <a ><FaTwitter className='w-6 h-6'/></a>
    <a ><FaLinkedin className='w-6 h-6' /></a>
  </div>
  </nav>

</footer>


<div className=' border-t border-t-[#d9d9d96e]  mt-5'>
  <p className='text-center text-white   mt-5'>Copyright © 2025 - All right reserved</p>

</div>
    </Container>  
  </div>
    );
};

export default Footer;