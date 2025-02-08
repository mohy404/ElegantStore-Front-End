import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderBasket } from '../eCommerce';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink 
            to="/" 
            className="flex items-center hover:text-gray-600 transition duration-300"
          >
            <span className="text-indigo-600">Elegant</span>
            <span className="text-gray-800">Store</span>
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none" 
            aria-label="Toggle Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav 
          className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:flex md:items-center md:space-x-8 
            absolute md:static bg-white w-full md:w-auto 
            left-0 px-6 pb-4 md:pb-0 
            shadow-md md:shadow-none
          `}
        >
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              block text-gray-800 hover:text-indigo-600 
              transition duration-300 font-medium 
              py-2 md:py-0 
              ${isActive ? 'text-indigo-600' : ''}
            `}
          >
            Home
          </NavLink>

          <NavLink 
            to="/categories" 
            className={({ isActive }) => `
              block text-gray-800 hover:text-indigo-600 
              transition duration-300 font-medium 
              py-2 md:py-0 
              ${isActive ? 'text-indigo-600' : ''}
            `}
          >
            Categories
          </NavLink>

          <NavLink 
            to="/about-us" 
            className={({ isActive }) => `
              block text-gray-800 hover:text-indigo-600 
              transition duration-300 font-medium 
              py-2 md:py-0 
              ${isActive ? 'text-indigo-600' : ''}
            `}
          >
            About
          </NavLink>

          <NavLink 
            to="/login" 
            className={({ isActive }) => `
              block text-gray-800 hover:text-indigo-600 
              transition duration-300 font-medium 
              py-2 md:py-0 
              ${isActive ? 'text-indigo-600' : ''}
            `}
          >
            Login
          </NavLink>

          <NavLink 
            to="/register" 
            className="block md:inline-block bg-indigo-600 text-white 
            px-4 py-2 rounded-md hover:bg-indigo-700 
            transition duration-300 font-medium mt-2 md:mt-0"
          >
            Register
          </NavLink>
        </nav>

        {/* Basket Icon */}
        <HeaderBasket quantity={5} />
      </div>
    </header>
  );
};

export default Header;