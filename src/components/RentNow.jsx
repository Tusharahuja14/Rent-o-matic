import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock, FaArrowLeft } from 'react-icons/fa';
const RentNow = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      
      if (!loggedIn) {
        navigate('/login'); // Redirect to login if not logged in
      } else {
  
        const fetchCategoryDetails = async () => {
          // Replace with actual data fetching logic
          const fetchedDetails = {}; // Fetch details based on categoryId
          setCategoryDetails(fetchedDetails);
        };

        fetchCategoryDetails();
      }
    };

    checkLoginStatus();
  }, [categoryId, navigate]);

  const handleSubmitRental = (e) => {
    e.preventDefault();

    alert('Rental request submitted!');
  };
  return (
    <div className='p-4 max-w-4xl mx-auto'>

      <h1 className='text-4xl font-bold mb-4'>Rent Now - Category {categoryId}</h1>
      {categoryDetails ? (
        
        <div className='mt-6 p-4 border rounded-lg shadow-lg'>
                 
          <h2 className='text-2xl font-semibold mb-4'>    <button
          className=" left-4 text-gray-600 hover:text-gray-800 transition duration-200"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-xl" />
        </button> Rental Form</h2>
          
          <form onSubmit={handleSubmitRental}>
        
            <div className='mb-4'>
          
              <label className='block text-lg mb-2'>Name</label>
              <input 
                type='text' 
                name='name' 
                required 
                className='w-full p-2 border border-gray-300 rounded' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lg mb-2'>Email</label>
              <input 
                type='email' 
                name='email' 
                required 
                className='w-full p-2 border border-gray-300 rounded' 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-lg mb-2'>Rental Period (days)</label>
              <input 
                type='number' 
                name='rentalPeriod' 
                min='1' 
                required 
                className='w-full p-2 border border-gray-300 rounded' 
              />
            </div>
            <button 
              type='submit' 
              className='bg-zinc-400 text-zinc-100 hover:bg-zinc-500 py-2 px-4 rounded'>
              Submit Rental Request
            </button>
          </form>
          </div>
        
      ) : (
        <p className='text-lg'>Category details not found</p>
      )}
    </div>
  );
};

export default RentNow;
