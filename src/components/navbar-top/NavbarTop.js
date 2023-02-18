import React, {useState} from 'react'
import "./NavbarTop.css"
import logo from "../../assets/Amazon.png"
import {HiOutlineLocationMarker, HiOutlineSearch} from "react-icons/hi"
import {AiFillCaretDown} from "react-icons/ai"
import {CgShoppingCart} from "react-icons/cg"
import {LANG, signIn} from "../../static/static"
import {Link} from "react-router-dom"

function NavbarTop() {
    const [lang, setLang] = useState(false)
    const [sign, setSign] = useState(false)

  return (
    <div className='navbar_top'>
        <div className="logo nav_border">
            <Link to="/">
            <    img src={logo} alt="" />
            </Link>
        </div>
        <Link to={"/deliver"} className="deliver nav_border">
            <HiOutlineLocationMarker/>
            <div>
                <p>Deliver to</p>
                <h4>Uzbekistan</h4>
            </div>
        </Link>
        <div className="nav_search">
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" />
            <button><HiOutlineSearch/></button>
        </div>
        <div
        onMouseEnter={()=> setLang(true)}
        onMouseLeave={()=> setLang(false)}
        className="lang nav_border">
            <p>English</p>
            <div>
                <img className='img' src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" />
                <AiFillCaretDown/>
            </div>
            {lang && <div className="change_lang">
                <h2>Change language</h2>   
                <div>
                    {
                        LANG?.map((item,inx)=> <div className='language' key={inx}>
                            <input name='lang' id={`lang${inx}`} type="radio" />
                            <label htmlFor={`lang${inx}`}>{item}</label>
                        </div>)
                    }
                </div>
                <div className="hr"></div> 
                <p className="strim">Change currensy <span className='s'>Learn More</span></p>
                <p className="strim">$ - USD - US Dollar <span className="strim_span">Change</span></p>
                <div className="hr"></div> 
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" className="changeLang_img" />
                <p className='lang_bold'>You are shopping on Amazon.com</p>
            </div>}
        </div>
        <div 
        onMouseEnter={()=> setSign(true)}
        onMouseLeave={()=> setSign(false)}
        className="sign_in nav_border">
            <Link to="/admin">
                <p className='pp'>Hello, sign in</p>
                <h5>Account & Lists <AiFillCaretDown/></h5>
            </Link>
            {
                sign && <div className="signBox">
                    <div className="topSignBox">
                        <button className="sb_btn">Sign in</button>
                        <p className="sb_text">New customer? <span className='sb_span'>Sign In</span></p>
                    </div>
                    <div className="botSignBox">
                        {
                        <>
                            <ul className="signCollection">
                                {
                                    signIn[0]?.map((item, inx)=>{
                                        return(
                                            <li key={inx} className="signItem">{item}</li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="signCollection">
                            {
                                signIn[1]?.map((item, inx)=>{
                                    return(
                                        <li key={inx} className="signItem">{item}</li>
                                    )
                                })
                            }
                        </ul>
                        </>    
                        }
                    </div>
                </div>  
            }
        </div>
        <div className="sign_in nav_border">
            <Link to="/products">
                <p>Returns</p>
                <h5>& Orders</h5>
            </Link>
        </div>
        <div className="nav_shop nav_border">
            <Link to='/cart'>
                <CgShoppingCart/>
                <span>Cart</span>
            </Link>
        </div>
    </div>
  )
}

export default NavbarTop