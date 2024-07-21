import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link to="/" className='flex items-center'>
              <img 
                src='https://iconape.com/wp-content/files/ed/334935/svg/334935.svg'
                className='h-12 mr-3'
                alt='logo'
              />
          </Link>
          <div className='flex items-center lg:order-2'>
            <Link to="/contactus" className='"text-white bg-[#EB1F2C] hover:bg-red-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
              Contact
            </Link>
          </div>
          <div className='justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink 
                to="/"
                className={({isActive}) =>
                  `block py-2 pr-4 pl-3 ${isActive ? "text-[#EB1F2C]" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} 
                  >
                  Power Solutions
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="/"
                className={({isActive}) =>
                  `block py-2 pr-4 pl-3 ${isActive ? "text-[#EB1F2C]" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} 
                  >
                  Solar Solutions
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="/"
                className={({isActive}) =>
                  `block py-2 pr-4 pl-3 ${isActive ? "text-[#EB1F2C]" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} 
                  >
                  Automotive Solutions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default header