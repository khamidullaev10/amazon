import React from 'react'
import NavbarBottom from '../navbar-bottom/NavbarBottom'
import NavbarTop from '../navbar-top/NavbarTop'
import "./Navbar.css"
import {useLocation} from "react-router-dom"

function Navbar() {
  const {pathname} = useLocation()
  
  if(pathname === "/login"){
    return <></>
  }
  return (
    <div className='navbar'>
        <NavbarTop/>
        <NavbarBottom/>
    </div>
  )
}

export default Navbar