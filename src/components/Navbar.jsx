import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Blogs from './Blogs';
import Button from './Button';
const Navbar = () => {
  return (
    <div>
    <div className='flex gap-[4rem] bg-gray-200 text-gray-800 h-14 p-2 justify-between '>
      <div classNam=' '><img src={logo} className='h-56 w-[28rem] -mt-11' alt="" /></div>
      <nav className='flex gap-[4rem] mr-8 text-semibold py-2'>

        <Link to="/">Home</Link>

        <Link to="/Contact">Contact</Link>


        <Link to="/Blogs">Renting Culture</Link>
        <div className=' '>
      <Button/>
      </div>
      </nav>
     
     
    </div>
   <Outlet/>
    </div>
  )
}

export default Navbar;