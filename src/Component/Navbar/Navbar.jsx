import React from 'react'
import NavbarBelt from './NavbarBelt/NavbarBelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'


const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarBelt/>
      <NavbarBanner/>
    </div>
  )
}

export default Navbar