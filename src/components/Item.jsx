import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import allItems from './Data';
import data from './subcat';
import Footer from './Footer';

const Item = () => {
  const { id } = useParams();
  
  const mainItem = allItems.find(item => item.id === parseInt(id));
  const recommendations = allItems.filter(item => item.id !== parseInt(id));
  
  // Filter subcategories based on the type of the main item
  const filteredSubcategories = data.filter(subItem => subItem.type === mainItem?.type);

  return (
    <>
      <div className='p-4 max-w-4xl mx-auto'>
        {mainItem ? (
          <>
            {/* Main Item Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-8'
            >
              <h1 className='text-4xl font-bold mb-4'>{mainItem.name}</h1>
              <img src={mainItem.url} alt={mainItem.name} className='w-full h-[30rem] object-cover rounded-md mb-4' />
              <p className='text-lg mb-4'>{mainItem.description}</p>
            </motion.div>

            {/* Subcategories Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mt-8'
            >
              <h2 className='text-2xl font-bold mb-4'>Select your Category....</h2>
              <div className='flex gap-4 overflow-x-auto p-2'>
                {filteredSubcategories.map(item => (
                  <Link 
                    key={item.id} 
                    to={`/rent-now/${item.id}`} 
                    className='bg-gray-300 rounded-lg p-4 min-w-[20px] w-[40vh] flex-shrink-0 text-center'
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className='text-lg font-semibold mb-2'>{item.name}</h3>
                      <img 
                        src={item.url} 
                        alt={item.name} 
                        className='w-full h-[12rem] object-cover rounded-md mb-2' 
                      />
                      <p className='text-sm'>{item.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
            
            {/* Recommendation Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-8'
            >
              <h2 className='text-2xl font-bold mb-4'>Recommended Items</h2>
              <div className='flex gap-4 overflow-x-auto p-2'>
                {recommendations.map(item => (
                  <Link to={`/item/${item.id}`} key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className='bg-gray-300 rounded-lg p-4 min-w-[20px] w-[40vh] flex-shrink-0 text-center'
                    >
                      <h3 className='text-lg font-semibold mb-2'>{item.name}</h3>
                      <img 
                        src={item.url} 
                        alt={item.name} 
                        className='w-full h-[12rem] object-cover rounded-md mb-2' 
                      />
                      <p className='text-sm'>{item.description}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <p className='text-lg'>Item not found</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Item;
