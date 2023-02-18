import React, {useState} from 'react'
import "./Sidebar.css"
import {FiX, FiChevronRight, FiArrowLeft} from "react-icons/fi"
import {FaUserCircle} from "react-icons/fa"
import {SIDEBAR} from "../../static/static"

function Sidebar({show, setShow}) {
    const [side, setSide] = useState(false)
    const [index, setIndex] = useState(0)

  return (
    <div className='sidebar'>
        {show && <div onClick={()=> setShow(false)} className="sidebar_shadow">
                <FiX />
            </div>} 
        <div className={`sidebar_content ${show && "side_show"}`}>
            <div className="side_nav">
                <FaUserCircle/>
                <span>Hello, sign in</span>
            </div>
            <div className={`side_menu ${side && "toRight"}`}>
                <div className="side_left">
                    <h3 className='side_title'>Digital Content & Devices</h3>
                    <ul className="side_collection">
                        {
                            SIDEBAR?.map((i, inx)=>{
                                return(
                                    <li 
                                    onMouseEnter={()=> setIndex(inx)}
                                    onClick={()=> setSide(true)}
                                    key={inx} 
                                    className="side_item">
                                        <span>{i.title}</span>
                                        <FiChevronRight/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="side_right">
                    <h3 onClick={()=> setSide(false)} className='side_title'><FiArrowLeft/> Main Menu</h3>
                    <h3 className="side_title">{SIDEBAR[index].title}</h3>
                    <ul className="side_collection">
                        {
                            SIDEBAR[index].items?.map((name, inx)=> <li
                            key={inx}
                            className="side_item">{name}</li>)
                        }
                    </ul>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Sidebar