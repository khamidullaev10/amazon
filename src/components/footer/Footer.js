import React from 'react'
import "./Footer.css"
import {FOOTER} from "../../static/static"
import {useLocation} from "react-router-dom"

function Footer() {
  const {pathname} = useLocation()

  if(pathname === "/login"){
    return <></>
  }

  return (
    <div className='footer'>
        <div className="footer_container">
          {
            FOOTER?.map(({title,desc}, inx)=><div 
            key={inx}
            className="footer_item">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div> )
          }
          
        </div>
    </div>
  )
}

export default Footer