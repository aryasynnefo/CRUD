import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <>
        <div className='Navbar'>
          
          <NavLink to='/'>Home</NavLink>
           <a href="">Features</a>
           <a href="">Pricing</a>
           <NavLink to='/Register'>Register</NavLink>
        </div>
        <div className='nav2'>
              <a href="">Movies</a>
              <a href="">Stream</a>
              <a href="">Events</a>
              <a href="">Plays</a>
              <a href="">Sports</a>
              <a href="">Activities</a>
              <a href="">Buzz</a>
        </div>
   </>
  )
}

export default Navbar