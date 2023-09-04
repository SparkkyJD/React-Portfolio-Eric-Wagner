// Header.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'flowbite';

const Header = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const $triggerEl = document.getElementById('navbar-trigger');
      const $targetEl = document.getElementById('navbar-target');
      const navbarCollapse = new Collapse($targetEl, $triggerEl, options);
      $triggerEl.addEventListener('click', () => {
        navbarCollapse.toggle();
      });
    });
  }, []);

  return (
    <header className="text-2xl " style={{ background: 'rgba(0, 0, 0, 0)' }}>
      <div className="header-inner">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <Link to="/" className="flex items-center">
              <span className="text-yellow-500 hover:text-gray-700 transition duration-300 font-semibold">My Portfolio</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
                       text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 
              md:mt-0 md:border-0">
                <Link to="/"
                  className="text-yellow-500 hover:text-gray-700 transition duration-300"
                  aria-current="page">Home
                </Link>
                <Link to="/portfolio"
                  className="text-yellow-500 hover:text-gray-700 transition duration-300">Portfolio
                </Link>
                <Link to="/contact"
                  className="text-yellow-500 hover:text-gray-700 transition duration-300">Contact
                </Link>
                <Link to="/resume"
                  className="text-yellow-500 hover:text-gray-700 transition duration-300">Resume
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;





