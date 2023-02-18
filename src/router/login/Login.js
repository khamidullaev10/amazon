import React, {useState} from 'react'
import "./Login.css"
import logo from "../../assets/Amazon (2).png"
import {Link} from "react-router-dom"
import { auth, provider, firebase } from "../../server/index"
import { useStateValue } from '../../context/index'
import { useHistory } from "react-router-dom"


function Login() {
  const [phoneNumber, setPhoneNumber] = useState("+998")
  const [state, dispatch] = useStateValue()
  const history = useHistory()
  // action == dispatch

  const signWithGoogle = ()=>{
    auth.signInWithPopup(provider)
    .then(res=>{
      dispatch({type: "ADD_USER", payload: res.user })
      localStorage.setItem("user", JSON.stringify(res.user))
      history.push("/admin")
    })
    .catch(err=> console.log(err))
  }
  const signWithPhone = ()=>{
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha_container")
    firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, recaptcha)
        .then(res=>{
          let code = prompt("Enter code")
          res.confirm(code)
            .then(user=> {
              dispatch({type: "ADD_USER", payload: user.user })
              localStorage.setItem("user", JSON.stringify(user.user))
              history.push("/admin")
            })
            .catch(err=> console.log(err))
        })
  }
  return (
    <div className='login'>
      <Link to="/">
        <img className='login_logo' src={logo} alt="" />
      </Link>
      <div className="login_signIn">
        <h1 className='SI_title'>Sign In</h1>
        <p className="SI_place">Email or mobile Phone Number</p>
        <input value={phoneNumber} onChange={e=> setPhoneNumber(e.target.value)} className='loginInp' type="text" />
        <br />
        <div id='recaptcha_container'></div>
        <button onClick={signWithPhone} className='signButton'>Conitune</button>
        <p className="signLorem">By continuing, you agree to Amazon's <span className='loremSpan'>Conditions of Use </span> and <span className='loremSpan'>Privacy Notice.</span></p>
        <p className='signHelp'>Need Help?</p>
      </div>
      <div className="newAmzonLogin">
        <div className="newLoginChild"></div>
        <p className="newAmazonText">New to Amazon?</p>
        <div className="newLoginChild"></div>
      </div>
      <button className="newAmazonAccount">Create your Amazon account</button><br />
      <button onClick={signWithGoogle} className="newAmazonAccount">Sign in with Google</button>
    </div>
  )
}

export default Login