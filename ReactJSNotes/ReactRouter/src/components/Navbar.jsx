/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <a href="/"><li>Home</li></a>
        <a href="/"><li>About</li></a>
        <a href="/Login"><li>Login</li></a>
        <a href=""><li>Customer Suport</li></a>     This is not used or else the page is reloaded the right one is used below*/}
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'>Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/Login'>Login</NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/About'>About</NavLink>              {/*And during the runtime it gets convereted to anchor tag   and to check isActive i'll have to use NavNavLink which has built-in support for checking active NavLinks*/}
      </nav>
    </div>
  )
}

export default Navbar
