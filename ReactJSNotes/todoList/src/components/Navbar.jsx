/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-teal-600 to-blue-700 text-white py-4 shadow-md'>
    <div className="logo font-bold text-2xl mx-10">DumboTask</div>
    <ul className='flex gap-10 mx-10 text-lg'>
      <li className='cursor-pointer hover:font-bold hover:text-gray-200 transition-all'>Home</li>
      <li className='cursor-pointer hover:font-bold hover:text-gray-200 transition-all'>Your Tasks</li>
    </ul>
  </nav>
  )
}

export default Navbar
