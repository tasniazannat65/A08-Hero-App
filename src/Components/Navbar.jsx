import React from 'react';
import logoImg from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4 md:px-8 lg:px-12 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/apps' className='nav-link'>Apps</NavLink>
        <NavLink to='/installation' className='nav-link'>Installation</NavLink>
      </ul>
    </div>
    <Link to='/' className="flex items-center space-x-2">
        <img className='w-10 h-10' src={logoImg} alt="nav-logo" />
        <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent text-lg'>HERO.AppBari</span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5 font-medium  text-[16px]">
      <NavLink 
       to='/'className={({isActive})=>`flex items-center ${isActive ? 'border-b-2 border-b-[#9F62F2] bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent' : 'text-[#0000008c]'}`}><IoHome className='mr-2 text-[#0000008c]' /> Home</NavLink>
        <NavLink to='/apps' className={({isActive})=>`flex items-center ${isActive ? 'border-b-2 border-b-[#9F62F2] bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent' : 'text-[#0000008c]'}`}><FaAppStore className='mr-2 text-[#0000008c]' /> Apps</NavLink>
        <NavLink to='/installation' className={({isActive})=>`flex items-center ${isActive ? 'border-b-2 border-b-[#9F62F2] bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold bg-clip-text text-transparent' : 'text-[#0000008c]'}`}><MdInstallDesktop className='mr-2 text-[#0000008c]' /> Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/tasniazannat65' target='blank' className="btn text-white font-semibold text-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-sm"><FaGithub /> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;