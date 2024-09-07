import React from 'react';
import Rentkar from './Rentkar';
import crane from '../assets/crane.jpg';
import Category from './Category';
import Footer from './Footer';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <img src={crane} alt="Crane" className='w-full brightness-50 h-[90vh] ' />
      </div>
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
        <Rentkar />
      </div>
      <hr />
      <Category/>
      <hr className=' border-gray-400'/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Home;
