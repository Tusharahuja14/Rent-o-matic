import React, { useState } from 'react';
import tush from '../assets/tush.jpg';
import kv from '../assets/kv.jpeg';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to a server)
    console.log('Form Data:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>  

    <div className='h-[40vh]  w-full bg-zinc-400 flex items-center justify-center '><h1 className='text-7xl text-white translate-y-[40%] h-full'>Contact us</h1></div>  
    <div className='flex justify-between'>
    <div className="max-w-4xl  p-6 w-[45%]">
      {formSubmitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className='w-[45%] mt-3 flex flex-col '>
      <h1 className='text-2xl m-4'>Customer care</h1>
      <div className='flex flex-row w-full m-4'>
     <div className='rounded-full  w-[10vh] h-[10vh] bg-red-100 '> <img src={tush} alt="" className='rounded-full h-full'/>
     </div>
     <div className='w-full '>
      <h1>Tushar Ahuja</h1>
      <h3>COO</h3>
      <span>+91 8700005626</span>
      </div>
     </div>
     <div className='flex flex-row w-full m-4'>
     <div className='rounded-full  w-[12vh] h-[12vh] mt-4 bg-red-100'> <img src={kv} alt="" className='rounded-full h-full '/></div>
     <div className='w-full mt-4'>
      <h1>Krishnanshu Verma</h1>
      <h3>CEO</h3>
      <span>+91 8448169478</span>
     </div>
     

     </div>
    </div>
    </div>
    </>

  );
};

export default Contact;
