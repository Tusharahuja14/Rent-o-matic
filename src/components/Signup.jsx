import React from 'react';
import { FaUserAlt, FaLock, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition duration-200"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUserAlt className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUserAlt className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password"
                placeholder="Enter your password"
                id="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-200"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a
                className="text-blue-500 hover:text-blue-800 font-bold"
                href="/login"
              >
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
