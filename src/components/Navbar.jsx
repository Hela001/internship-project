import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/deals'>Deals</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-4 py-7 flex-col' : 'absolute top0 h-screen left-[-100%] ease-in duration-500 '}>
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8 '>
            <Link to='/' onClick={handleNav}>Home</Link>
          </li>
          <li className='text-2xl py-8 '>
            <Link to='/gallery' onClick={handleNav}>Gallery</Link>
          </li>
          <li className='text-2xl py-8 '>
            <Link to='/deals' onClick={handleNav}>Deals</Link>
          </li>
          <li className='text-2xl py-8 '>
            <Link to='/contact' onClick={handleNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
