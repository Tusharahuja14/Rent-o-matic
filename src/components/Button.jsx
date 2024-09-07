import React from 'react';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className='-mt-1 bg-zinc-100 text-black rounded-full flex items-center justify-between hover:bg-black hover:text-white cursor-pointer px-8 py-1 gap-2'>
      <Link to="/login">
        <button>
          Log in
        </button>
      </Link>
      <FaArrowRightToBracket />
    </div>
  );
};

export default Button;
