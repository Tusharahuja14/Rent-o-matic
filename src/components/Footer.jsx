import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaPhone, FaArrowRight } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <div className=' flex w-full h-[40vh] bg-gray-200 text-gray-800 justify-between'>
            <div className='w-1/3 p-4'>
                <h1 className='text-3xl footer'>Rent-o-matic</h1>
                <p className='mt-4'>
                    Discover the convenience of renting with us. From cars to dresses, we offer a wide range of equipment to suit your every need. Rent smart, live better.
                </p>
            </div>

            <div className='w-1/3 p-4'>
                <h1 className='text-3xl'>Renting Culture</h1>
                <ul className='mt-4 list-disc pl-5'>
                    <li className="flex items-center gap-2">
                        <FaArrowRight className='text-gray-600' />
                        Car Renting Culture
                    </li>
                    <li className="flex items-center gap-2">
                        <FaArrowRight className='text-gray-600' />
                        Bikes Renting Culture
                    </li>
                    <li className="flex items-center gap-2">
                        <FaArrowRight className='text-gray-600' />
                        Property Renting Culture
                    </li>
                    <li className="flex items-center gap-2">
                        <FaArrowRight className='text-gray-600' />
                        Dress Renting Culture
                    </li>
                    <li className="flex items-center gap-2">
                        <FaArrowRight className='text-gray-600' />
                        Equipments Renting Culture
                    </li>
                </ul>
            </div>

            <div className='p-4 w-1/3'>
                <div className='flex gap-4 mb-4'>
                    <Link to="https://www.linkedin.com/in/tusharahuja668/">
                        <FaLinkedin className='w-[2rem] h-[2rem] transform hover:scale-110 transition-transform duration-300' />
                    </Link>
                    <Link to="https://www.instagram.com/_.tusharahuja_/">
                        <FaInstagram className='w-[2rem] h-[2rem] transform hover:scale-110 transition-transform duration-300' />
                    </Link>
                    <Link to="https://x.com/Tushar77848554">
                        <BsTwitterX className='w-[2rem] h-[2rem] transform hover:scale-110 transition-transform duration-300' />
                    </Link>
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <BiLogoGmail className='w-[1.5rem] h-[1.4rem]' />
                    <a href="mailto:tusharahuja668@gmail.com" className='text-2xl'>tusharahuja668@gmail.com</a>
                </div>
                <div className='flex items-center gap-2'>
                    <FaPhone className='w-[1.5rem] h-[1.2rem]' />
                    <h1 className='text-2xl'>+91-8700005626</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
