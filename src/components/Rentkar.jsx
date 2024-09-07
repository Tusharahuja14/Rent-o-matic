import React from 'react';
import { motion } from 'framer-motion';

const Rentkar = () => {
  const text1 = "Rent";
  const text2 = "kiya ?";
  
  const letters1 = text1.split("");
  const letters2 = text2.split("");

  return (
    <div className='text-center mt-10'>
      <div className='flex justify-center space-x-4'>
        <div>
          {letters1.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className='text-[7rem] text-white tracking-tighter font-semibold'
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div>
          {letters2.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: (letters1.length + index) * 0.1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className='text-[7rem] text-white tracking-tighter font-semibold'
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rentkar;
