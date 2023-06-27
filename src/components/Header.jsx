import React from 'react'
import lgImg from '../assets/images/avatar-icon.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function fakeLogOut() {
    localStorage.removeItem('loggedin')
  }

  return (
    <header>
      <Link className='site-logo' to='/'>#VanLife</Link>
      <nav>
        <NavLink 
          to='host' 
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Host
        </NavLink>
        <NavLink
          to='about'
          style={({isActive}) => isActive ? activeStyles : null}
        >
          About
        </NavLink>
        <NavLink
          to='vans'
          style={({isActive}) => isActive ? activeStyles : null}
        >
          Vans
        </NavLink>
        <Link to='' className='login-link'>
        <img 
          src={lgImg} 
          className="login-icon"
        />
        </Link>
      </nav>
    </header>
  )
}
