import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import "./NavbarBottom.css"
import {GoThreeBars} from "react-icons/go"

function NavbarBottom() {
  const [sideShow, setSideShow] = useState(false)

  return (
    <>
      <div className='navbar_bottom'>
        <p className='nb_rout ssd' onClick={()=> setSideShow(true)}><GoThreeBars/> All</p>
        <p className='nb_rout ssd'>Today's Deals</p>
        <p className='nb_rout ssd'>Customer Service</p>
        <p className='nb_rout ssd'>Registry</p>
        <p className='nb_rout ssd'>Gift Cards</p>
        <p className='nb_rout ssd'>Sell</p>
      </div>
      <Sidebar show={sideShow} setShow={setSideShow}/>
    </>
  )
}

export default NavbarBottom