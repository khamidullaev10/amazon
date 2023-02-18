import React from 'react'
import "./Admin.css"
import CreateProduct from '../../components/create-product/CreateProduct'
import {useStateValue} from "../../context/index"
import {useHistory} from "react-router-dom"

function Admin() {
  const [{user}, dispatch] = useStateValue()
  const history = useHistory()

  // action - dispatch

  const logOut = ()=>{
    if(window.confirm("Are you sure?")){
      dispatch({type:"LOG_OUT"})
      localStorage.removeItem("user")
      history.push("/login")
    }
  }
  return (
    <div className='admin'>
        <h2>Admin: {user?.displayName}{user?.phoneNumber}</h2>
        <CreateProduct/>
        <button onClick={logOut} style={{background: "#f00", color: "#fff"}}>Log Out</button>
    </div>
  )
}

export default Admin