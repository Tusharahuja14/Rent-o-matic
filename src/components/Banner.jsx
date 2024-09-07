import React from 'react';
import Bannner from '../assets/Banner2.jpg';

const Banner = () => {
  return (
    <div className="flex justify-center items-center my-4"> {/* Center the banner */}
      <div className='w-[350rem] h-[35rem] '> {/* Fixed width and height */}
        <img 
          src={Bannner} 
          alt="Banner" 
          className='w-full h-full object-fill' 
        />
      </div>
    </div>
  );
}

export default Banner;